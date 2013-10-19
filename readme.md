## Attic - Ghost Barebones Theme ##

This is a base of a ghost theme - result of [the official ghost documentation](http://docs.ghost.org/themes/) and a tutsplus [ghost theme tutorial](http://webdesign.tutsplus.com/sessions/building-a-ghost-theme-from-scratch/). I've added a few comments throughout the templates that sum up the two.

Just clone this repo inside the `ghost/content/themes` folder.

A simple theme folder structure:

* theme root folder
	* assets
    	* css
        * fonts
        * images
        * js
    * partials
    	* header
        * footer
    * default.hbs
    * **index.hbs** *
    * **post.hbs** *


<sup>* files required for a theme to work</sup>
    
Ghost uses [handlebars](http://handlebarsjs.com/) as a templating system, with a few personalized helper classes such as `{{ghost_head}}`, `{{ghost_foot}}`, `{{body}}` - full helper classes details are over at [docs.ghost.org](http://docs.ghost.org/themes/#helpers) and throughout the Ghost Themes section.

Instructions for installing ghost are available [on the official site](http://docs.ghost.org/installation/), and there's also a [vagrant development box](https://github.com/TryGhost/Ghost-Vagrant) available on their github account.