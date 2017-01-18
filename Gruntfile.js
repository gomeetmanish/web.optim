/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/
module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [
                        // {
                        //     //name: "small",
                        //     width: 800,
                        //     suffix: "_large",
                        //     quality: 80
                        // },
                        // {
                        //     //name: "small",
                        //     width: 600,
                        //     suffix: "_medium",
                        //     quality: 80
                        // },
                        // {
                        //     //name: "small",
                        //     width: 400,
                        //     suffix: "_small",
                        //     quality: 80
                        // },
                        {
                            //name: "small",
                            width: 500,
                            suffix: "_small",
                            quality: 50
                        }
                    ]
                },

                /*
                You don't need to change this part if you don't change
                the directory structure.
                */
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images_src/',
                    dest: 'images/'
                }]
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['images'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['images']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: 'images_src/fixed/*.{gif,jpg,png}',
                    dest: 'images/'
                }]
            },
        },

        pagespeed: {
            options: {
                nokey: true,
                //url: "https://www.google.com"
            },
            prod: {
                options: {
                    url: "http://www.amazon.com",
                    locale: "en_GB",
                    strategy: "desktop",
                    threshold: 50
                }
            }
            /*paths: {
              options: {
                paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
                locale: "en_GB",
                strategy: "desktop",
                threshold: 50
              		}
            		}*/
        },

        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: '**/*.js',
                    dest: 'jsmin'
                }]
            }
        },

        htmlmin: { // Task 
            dist: { // Target 
                options: { // Target options 
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files 
                    'index.min.html': 'index.html', // 'destination': 'source' 
                    'project-2048.min.html': 'project-2048.html',
                    'project-mobile.min.html': 'project-mobile.html',
                    'project-webperf.min.html': 'project-webperf.html'
                    // 'dist/contact.html': 'src/contact.html'
                }
            }
            // dev: {                                       // Another target 
            //   files: {
            //     'dist/index.html': 'src/index.html',
            //     'dist/contact.html': 'src/contact.html'
            //   }
            // }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },

        imagemin: {
        dynamic: {                         // Another target 
      files: [{
        expand: true,                  // Enable dynamic expansion 
        cwd: 'imgs/',                   // Src matches are relative to this path 
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
        dest: 'imagessrc/'                  // Destination path prefix 
      }]
    }
}

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
    grunt.registerTask('default', ['htmlmin']);
};