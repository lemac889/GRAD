; Make file of PP Slideshow module

api = 2
core = 7.x

projects[color_field][subdir] = "contrib"
projects[color_field][version] = "1.6"

projects[field_collection][subdir] = "contrib"
projects[field_collection][version] = "1.0-beta5"

projects[field_slideshow][subdir] = "contrib"
projects[field_slideshow][version] = "1.82"

projects[fieldable_panels_panes][subdir] = "contrib"
projects[fieldable_panels_panes][version] = "1.5"

projects[link][subdir] = "contrib"
projects[link][version] = "1.2"

; Required by field_slideshow
libraries[jquery.cycle][download][type] = "get"
libraries[jquery.cycle][type] = "libraries"
libraries[jquery.cycle][download][url] = "http://malsup.github.io/jquery.cycle.all.js"

; Download "brings spectrum" colorpicker.
libraries[bgrins-spectrum][download][type] = "get"
libraries[bgrins-spectrum][type] = "libraries"
libraries[bgrins-spectrum][download][url] = "http://github.com/bgrins/spectrum/zipball/1.1.1"
