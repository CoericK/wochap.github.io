webpackJsonp([4],{577:function(e,t,a){"use strict";function i(){return l.a.createElement("section",{className:"o-wrapper c-about-screen"},l.a.createElement(n.a,{title:r.a.screens.about.title,description:r.a.screens.about.description,canonicalHref:r.a.screens.about.canonicalHref}),l.a.createElement("header",{className:"c-about-screen__profile"},l.a.createElement("h1",{className:"u-fz-h4 u-m0"},l.a.createElement("span",{className:"u-caps u-fz-h2 u-mb2 u-block"},"Gean Marroquin, "),l.a.createElement("span",{className:"u-fz-sm u-fw-s-bold u-m0 u-block"},"Front-end developer"))),l.a.createElement("div",{className:"c-about-screen__info"},l.a.createElement("section",{className:"u-mb5"},l.a.createElement("h2",{className:"u-caps u-mb3"},"Sobre mi"),l.a.createElement("div",{className:"o-grid o-grid--gutter-x-5 o-grid--gutter-y-3"},l.a.createElement("div",{className:"o-grid__item u-12/12 u-6/12@tablet"},l.a.createElement("p",{className:"u-mb0"},r.a.about)),l.a.createElement("div",{className:"o-grid__item u-12/12 u-6/12@tablet"},l.a.createElement("p",null,"¿Desea contratarme para trabajar en su empresa por tiempo completo o parcial?"),l.a.createElement("p",{className:"u-mb0 u-flex u-items-center"},l.a.createElement("i",{className:"u-icon u-fz-h2 u-mr2"},"arrow_drop_down_circle"),l.a.createElement("a",{href:"//res.cloudinary.com/wochap/image/upload/v1495421654/wochap/cv_es.pdf"},l.a.createElement("strong",null,"Descarga mi CV")))))),l.a.createElement("section",{className:"u-mb5"},l.a.createElement("h2",{className:"u-caps u-mb3"},"Skills"),l.a.createElement("ul",{className:"o-grid o-grid--gutter-x-5 o-grid--gutter-y-3 u-list-reset"},o.a.skills.map(function(e,t){return l.a.createElement("li",{className:"o-grid__item u-12/12 u-6/12@tablet",key:t},l.a.createElement("h3",{className:"u-fz-inherit u-mb2"},e.title),l.a.createElement("ul",{className:"u-mb0"},e.rows.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("strong",null,e.title,": ")," ",e.items.map(function(t,a){return[l.a.createElement(c.a,{href:t.link,title:t.title}),a===e.items.length-1?null:", "]}))})))}))),l.a.createElement("section",null,l.a.createElement("h2",{className:"u-caps u-mb3"},"Cursos que realize"),l.a.createElement("ul",{className:"o-grid o-grid--gutter-x-5 o-grid--gutter-y-3 u-list-reset"},o.a.moocs.map(function(e,t){return l.a.createElement("li",{className:"o-grid__item u-12/12 u-6/12@tablet",key:t},l.a.createElement("h3",{className:"u-fz-inherit u-mb3"},e.title),l.a.createElement("ul",{className:"u-mb0"},e.courses.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h4",{className:"u-fz-inherit u-mb0"},l.a.createElement(c.a,{href:e.link,title:e.title})),l.a.createElement("p",{className:"u-mb0"},e.year))})))})))))}Object.defineProperty(t,"__esModule",{value:!0});var s=a(0),l=a.n(s),r=a(44),c=a(221),n=a(80),o=a(594);t.default=i},594:function(e,t,a){"use strict";t.a={skills:[{title:"CSS",rows:[{title:"Frameworks",items:[{title:"WOCSS",link:"https://github.com/wocss"},{title:"Materialize",link:"http://materializecss.com/"}]},{title:"Coding conventions/Guidelines",items:[{title:"Harry Roberts's CSS Guidelines",link:"http://cssguidelin.es/"},{title:"ITCSS",link:"http://csswizardry.net/talks/2014/11/itcss-dafed.pdf"},{title:"BEMIT",link:"http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/"}]},{title:"Procesadores",items:[{title:"SASS",link:"http://sass-lang.com/"},{title:"Stylus",link:"http://stylus-lang.com/"},{title:"PostCSS",link:"http://postcss.org/"}]}]},{title:"JS (ES2017)",rows:[{title:"Frameworks",items:[{title:"React",link:"https://facebook.github.io/react/"},{title:"VueJS",link:"https://vuejs.org/"}]},{title:"Coding conventions/Guidelines",items:[{title:"JavaScript Standard Style",link:"http://standardjs.com/rules.html"},{title:"by Route hierarchy",link:"https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346"}]}]},{title:"Tooling/Workflow",rows:[{title:"Build system",items:[{title:"Webpack",link:"https://webpack.github.io/"}]},{title:"Task runner",items:[{title:"NPM scripts",link:"https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8?gi=64bf3727f8f3"}]},{title:"Package management",items:[{title:"Yarn",link:"https://yarnpkg.com/"},{title:"NPM",link:"https://www.npmjs.com/"}]},{title:"Testing",items:[{title:"Jest",link:"https://facebook.github.io/jest/"},{title:"BrowserSync",link:"https://browsersync.io/"}]}]}],moocs:[{title:"Frontend Masters",courses:[{title:"Advanced JS",link:"https://frontendmasters.com/courses/advanced-javascript/",year:"2016"}]},{title:"Udacity",courses:[{title:"Website Performance Optimization",link:"https://www.udacity.com/course/website-performance-optimization--ud884",year:"2016"},{title:"Browser Rendering Optimization",link:"https://www.udacity.com/course/browser-rendering-optimization--ud860",year:"2016"}]},{title:"Egghead",courses:[{title:"Building React Applications with Idiomatic Redux",link:"https://egghead.io/courses/building-react-applications-with-idiomatic-redux",year:"2016"},{title:"Getting Started with Redux",link:"https://egghead.io/courses/getting-started-with-redux",year:"2016"}]},{title:"CodeSchool",courses:[{title:"ES2015: The Shape of JavaScript to Come",link:"https://www.codeschool.com/courses/es2015-the-shape-of-javascript-to-come",year:"2016"},{title:"Powering Up With React",link:"https://www.codeschool.com/courses/powering-up-with-react",year:"2016"},{title:"JavaScript Best Practices",link:"https://www.codeschool.com/courses/javascript-best-practices",year:"2016"},{title:"Discover DevTools",link:"https://www.codeschool.com/courses/discover-devtools",year:"2016"}]}]}}});