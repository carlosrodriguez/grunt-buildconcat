# grunt-buildconcat

Grunt task to concatenate files declared on an external include

## When would you use it?
When developing with modules you may use different css files that can be included in your project as individual files for easier debugging. However for porduction you may want to concateneate them into one single file. This can usually be done with the reglar grunt concatenate task but that means you need to update two places when new files are added or deleted. With this task, you can simply add your files on an include and run the concatenation from it.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-buildconcat`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-buildconcat');
```

Set your external css and/or js file includes which should just have a reference to your files:

CSS:
```html
<link rel="stylesheet" type="text/css" media="all" href="example/css/reset.css" />
<link rel="stylesheet" type="text/css" media="all" href="example/css/basic.css" />
```

JavaScript:
```html
<script type="text/javascript" src="example/js/basic.js"></script>
<script type="text/javascript" src="example/js/example.js"></script>
```

And add a grunt task to your project's `grunt.js` gruntfile:

```javascript
buildconcat: {
  css: {
    src: "example/stylesheets.shtml",
    dest: "build/css/all.css"
  },
  js: {
    src: "example/scripts.shtml",
    dest: "build/js/all.js"
  }
}
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
0.1.0 Initial buildconcat working

## License
Copyright (c) 2012 Carlos Rodriguez  
Licensed under the MIT license.
