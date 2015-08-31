# grunt-less-bootstrap
Theming Bootstrap using LESS with Grunt and Bower

## Installation

1. Clone the repo
2. <i>cd</i> to the folder
3. Run the <i>bower install</i> command to install the bower packages (Bootstrap, jQuery and Font Awesome)
4. Run <i>bower list</i> to check for updated packages. Then run <i>bower update</i> to update to the packages to the lastest versions if necessary.
5. Run the <i>npm install</i> command to install Grunt and necessary packages
6. Run the <i>grunt copy</i> task to copy Bootstrap and jQuery files to the <i>public/assets/javascript</i>

## Using

The LESS files are exported in <i>public/assets/stylesheets</i>. If you want to minify the final CSS file run the "grunt cssmin" task.

This Grunt project doesn't minified Javascript you must add an uglify task for that.

You have to copy eventual fonts manually in public/assets/fonts.

You can copy the Bootstrap and jQuery files in the <i>public/assets/javascript</i> folder running the <i>grunt copy</i> task.

You'll find in HTML and LESS some tests I've done.
