module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// Notify changes via Growl
		notify: {
			js: {
				options: {
					message: "JS minified",
				},
			},
			sass: {
				options: {
					message: "SASS compiled",
				},
			},
			watch: {
				options: {
					message: "Watch is running",
				},
			},
		},

		// Concats javascript files
		concat: {
			basic: {
				src: [
					"wp-content/themes/kingdesign/assets/js/global/*.js",
					"!wp-content/themes/kingdesign/assets/js/global.js",
					"!wp-content/themes/kingdesign/assets/js/global.min.js",
				],
				dest: "wp-content/themes/kingdesign/assets/js/global.js",
			},
		},

		// Minifies javascript files
		uglify: {
			build_a: {
				src: "wp-content/themes/kingdesign/assets/js/global.js",
				dest: "wp-content/themes/kingdesign/assets/js/global.min.js",
			},
		},

		// Compiles Sass
		sass: {
			options: {
				style: "expanded",
				lineNumbers: false,
			},
			global: {
				files: {
					"wp-content/themes/kingdesign/assets/css/global.min.css":
						"wp-content/themes/kingdesign/assets/sass/style.scss",
				},
			},
		},

		// Auto-prefixes css
		postcss: {
			options: {
				processors: [
					require("postcss-fixes")(),
					require("autoprefixer")(),
					require("postcss-csso")({ restructure: false }), // Minify
				],
			},
			dist: {
				src: ["wp-content/themes/kingdesign/assets/css/*.min.css"],
			},
		},

		// Live reload of style sheet in browser
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						"wp-content/themes/kingdesign/*.php",
						"wp-content/themes/kingdesign/assets/css/global.min.css",
						"wp-content/themes/kingdesign/assets/js/*.js",
					],
				},
				options: {
					watchTask: true,
					ghostMode: {
						clicks: true,
						forms: true,
						scroll: true,
					},
					proxy: "winter-walking.test", // change this to your project's dev URL
				},
			},
		},

		// get the critical path css
		critical: {
			home: {
				options: {
					base: "./",
					css: [
						"wp-content/themes/kingdesign/assets/css/global.min.css",
					],
					width: 1920,
					height: 1080,
				},
				src: "http://winter-walking.test/",
				dest: "wp-content/themes/kingdesign/assets/css/critical/critical-home.css",
			},
		},

		//increment "build" number to bust some cache
		buildnumber: {
			options: {
				field: "build",
			},
			files: [
				"wp-content/themes/kingdesign/assets/css/bust-cache.json",
			],
		},

		// Watches for changes then executes tasks
		watch: {
			scripts: {
				files: ["wp-content/themes/kingdesign/assets/js/**/*.js"],
				tasks: ["concat", "uglify", "notify:js"],
				options: {
					spawn: false,
				},
			},
			css: {
				files: [
					"wp-content/themes/kingdesign/assets/sass/**/*.scss",
				],
				tasks: ["sass", "postcss", "notify:sass"],
				options: {
					spawn: false,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	//grunt.loadNpmTasks('grunt-sass-lint');
	//grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');
	// grunt.loadNpmTasks('grunt-critical');
	grunt.loadNpmTasks('grunt-build-number');

	grunt.registerTask('default', ['sass', 'postcss', 'concat', 'uglify', 'buildnumber', 'watch']);
};
