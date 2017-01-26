# Website Optimization Project
### Objective 
* To optimize a webpage to make it's page speed insights score reach greater than 90 or equivalent.
* To optimize a webpage so that the fps reaches greater than 60 or equivalent.
### Approach
##### The optimizations done for the first objective
* Grunt is used to minify css, html and javascript.
* Images are compressed according to the requirements.
* Google font is commented out because it affected the page speed.
* Media query is used for _print.css_, to avoid css blocking.
* To prevent render blocking, css is inlined in html and javascript is set to async and put at the bottom of the page.
* To check for page speed score, the website is hosted using Github gh-pages branch.
* The url of the website hosted is : [https://gomeetmanish.github.io/web.optim/](https://gomeetmanish.github.io/web.optim/)
##### The optimizations done for the second objective
* CSS, html and javascript are minified using Grunt.
* In javascript, the pizza resizer time is accomplished using the percentage width.
* The more specific selectors are used and css-property _backface-visibility_ is used.
* The overhead in the loop of _updatePositions_ function is optimized.
* The number of background floating pizzas is reduced accordingly to reduce workload.
* Chrome dev tools specifically timeline with FPS meter is utilised properly.
### Execution Instructions 
* Open the Github hosted [url]( https://gomeetmanish.github.io/web.optim/) for the website and check for [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) score.
* Instructions regarding the grunt installation
   1. _Package.json_ and _Gruntfile.js_ is included in the directory which contains the information regarding the plugins which are used to accomplish the project.
  2. Grunt is a task runner, which needs _node.js_ to be installed on the system.
  3. The instructions to install and use grunt plugins can be found on this [link](http://gruntjs.com/getting-started).
  4. The following grunt plugins are used to accomplish the project
     ```
     * grunt-contrib-clean
     * grunt-contrib-copy
     * grunt-contrib-cssmin
     * grunt-contrib-htmlmin
     * grunt-contrib-uglify
     * grunt-mkdir
     * grunt-responsive-images
     ```
* The website can also be viewed using **index.html** in the project directory.