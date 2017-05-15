# Demo Interface

Custom interface built from scratch using Bootstrap, jQuery, scrollMagic, and gsap libraries.

Front-end viewable here: <https://darrickfabian.github.io/>

## Requirements

- [Node](https://nodejs.org/)
- [Yeoman](http://yeoman.io)
- [Bower](https://bower.io/)

## Install Dependencies

If you don't have the required dependencies installed, use the instructions below.

_To install Node:_

Download and run the binary installer from the [Node website](https://nodejs.org/).

_To install Yeoman:_

```bash
npm install -g yo
```

_To install Bower:_

```bash
npm install -g bower
```
## Install

To install dependencies:

```bash
npm install
```

```bash
bower install
```
### Workflow Commands

```bash
gulp serve
```

Runs a local instance of the site with BrowserSync to automatically refresh the page as you make updates.

```bash
gulp build
```

Builds a compiled version of the site into the `dist/` folder. Concatenates and minifies all files for delivery.

```bash
gulp clean
```

Removes the `dist/` folder.
