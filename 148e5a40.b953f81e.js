(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),o=(t(0),t(166)),i={id:"vue",title:"\ud83d\udc9a Vue"},s={id:"integrations/vue",isDocsHomePage:!1,title:"\ud83d\udc9a Vue",description:"Grid.js has a native Vue wrapper which can be used to create a Grid.js instance within a Vue app. Use the gridjs-vue package to integrate your Vue app with Grid.js.",source:"@site/docs/integrations/vue.md",permalink:"/docs/integrations/vue",editUrl:"https://github.com/grid-js/website/edit/master/docs/integrations/vue.md",lastUpdatedBy:"Daniel Sieradski",lastUpdatedAt:1592532181,sidebar:"sidebar",previous:{title:"\u269b\ufe0f React",permalink:"/docs/integrations/react"},next:{title:"Hello, World!",permalink:"/docs/examples/hello-world"}},c=[{value:"Install",id:"install",children:[{value:"Component Registration",id:"component-registration",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Basic Example",id:"basic-example",children:[]},{value:"Default Options",id:"default-options",children:[]},{value:"Extended Options",id:"extended-options",children:[]}]}],l={rightToc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("center",null,Object(o.b)("img",{src:"https://user-images.githubusercontent.com/2541728/84843482-ffc31c00-b015-11ea-95e8-dc6fb3931ad5.png",alt:"gridjs-vue logo"})),Object(o.b)("p",null,"Grid.js has a native Vue wrapper which can be used to create a Grid.js instance within a Vue app. Use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/grid-js/gridjs-vue"}),"gridjs-vue")," package to integrate your Vue app with Grid.js."),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install gridjs-vue\n")),Object(o.b)("h3",{id:"component-registration"},"Component Registration"),Object(o.b)("h4",{id:"local-registration"},"Local Registration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<script>\n  import Grid from 'gridjs-vue'\n\n  export default {\n    components: {\n      Grid\n    }\n  }\n<\/script>\n")),Object(o.b)("h4",{id:"global-registration"},"Global Registration"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"main.js")," or wherever you specify your global components:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Grid from 'gridjs-vue'\n\nVue.use(Grid)\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Pass ",Object(o.b)("inlineCode",{parentName:"p"},"cols")," (an array of column headers) and either ",Object(o.b)("inlineCode",{parentName:"p"},"rows"),", ",Object(o.b)("inlineCode",{parentName:"p"},"from"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"server")," as a data source to the component. Everything else is optional."),Object(o.b)("p",null,"Refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config"}),"Grid.js documentation")," for specific configuration options."),Object(o.b)("h3",{id:"basic-example"},"Basic Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <grid :cols=\"cols\" :rows=\"rows\"></grid>\n</template>\n\n<script>\n  import Grid from 'gridjs-vue'\n\n  export default {\n    name: 'Cars',\n    components: {\n      Grid\n    },\n    data() {\n      return {\n        cols: ['Make', 'Model', 'Year', 'Color'],\n        rows: [\n          ['Ford', 'Fusion', '2011', 'Silver'],\n          ['Chevrolet', 'Cruz', '2018', 'White']\n        ]\n      }\n    }\n  }\n<\/script>\n")),Object(o.b)("h3",{id:"default-options"},"Default Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "autoWidth": true,\n  "cols": [""],\n  "from": undefined,\n  "language": undefined,\n  "pagination": false,\n  "rows": undefined,\n  "search": false,\n  "server": undefined,\n  "sort": false,\n  "theme": "mermaid",\n  "width": "100%"\n}\n')),Object(o.b)("h3",{id:"extended-options"},"Extended Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <grid\n    :auto-width=\"autoWidth\"\n    :cols=\"cols\"\n    :from=\"from\"\n    :language=\"language\"\n    :pagination=\"pagination\"\n    :rows=\"rows\"\n    :search=\"search\"\n    :server=\"server\"\n    :sort=\"sort\"\n    :width=\"width\"\n  ></grid>\n</template>\n\n<script>\n  import Grid from 'gridjs-vue'\n\n  export default {\n    name: 'MyTable',\n    components: {\n      Grid\n    },\n    data() {\n      return {\n        // REQUIRED:\n\n        // An array containing strings of column headers\n        cols: ['col 1', 'col 2'],\n\n        // AND EITHER an array containing row data\n        rows: [\n          ['row 1 col 1', 'row 1 col 2'],\n          ['row 2 col 1', 'row 2 col 2']\n        ],\n\n        // OR a string of an HTML table selector to import\n        from: '.my-element'\n\n        // OR a server settings object\n        server() ({\n          url: 'https://api.com/search?q=my%20query',\n          then: res => res.data.map(col => [col1.data, col2.data]),\n          handle: res => res.status === 404\n            ? { data: [] } : res.ok\n            ? res.json() : new Error('Something went wrong')\n        }),\n\n        // OPTIONAL:\n\n        // Boolean to automatically set table width\n        autoWidth: true / false,\n\n        // Localization dictionary object\n        language: {},\n\n        // Boolean or pagination settings object\n        pagination: true / false || {},\n\n        // Boolean or search settings object\n        search: true / false || {},\n\n        // Boolean or sort settings object\n        sort: true / false || {},\n\n        // String with name of theme or 'none' to disable\n        theme: 'mermaid',\n\n        // String with css width value\n        width: '100%',\n      }\n    }\n  }\n<\/script>\n")))}d.isMDXComponent=!0}}]);