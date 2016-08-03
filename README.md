# Simple React Boilerplate

with Webpack, Babel and css-modules

### Building

Install the dependencies  

`npm install`

Run webpack and start a dev server  

`npm start`

Go to [localhost:3000](http://localhost:3000)

Create a minified build ready for production in /dist

`npm run build`

Lint the js

`npm run lint`

 
### Styles

Uses [Css-modules](https://github.com/css-modules/css-modules). Each components styles will be scoped locally by default, camel case is preferred and hyphens for modifiers (which should be passed to the react component as a prop).

Nested properties should only be used for pseudo selectors, otherwise you should use css modules compose to import the common styles and overwrite when necessary.

Also Uses [post-css](https://github.com/postcss/postcss) with these plugins:

* [precss](https://github.com/jonathantneal/precss)
* [autoprefixer](https://github.com/postcss/autoprefixer)
* [calc](https://github.com/postcss/postcss-calc)
* [reporter](https://github.com/postcss/postcss-reporter)
* [stylelint](https://github.com/stylelint/stylelint)
* [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

Other plugins that could be useful

* [custom-properties](https://github.com/postcss/postcss-custom-properties)
* [svgo](https://github.com/ben-eb/postcss-svgo)
* [font-magician](https://github.com/jonathantneal/postcss-font-magician)
* [flexbox](https://www.npmjs.com/package/postcss-flexbox)
* [queries](https://github.com/gikmx/postcss-queries) with [custom-media](https://github.com/postcss/postcss-custom-media)
* [cssnext](http://cssnext.io/)

Normalized with [normalize.css](https://www.npmjs.com/package/normalize.css/)
 