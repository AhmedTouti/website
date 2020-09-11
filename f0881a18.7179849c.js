(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(148)),o=n(149),s={id:"cell-formatting",title:"Cell formatting",keywords:["javascript","table","javascript table","gridjs","grid js","formatting","cell formatting"]},l={unversionedId:"examples/cell-formatting",id:"examples/cell-formatting",isDocsHomePage:!1,title:"Cell formatting",description:"You can customize cells and format them at runtime using formatter property:",source:"@site/docs/examples/cell-formatting.md",slug:"/examples/cell-formatting",permalink:"/docs/examples/cell-formatting",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/cell-formatting.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,sidebar:"sidebar",previous:{title:"CSS-in-JS",permalink:"/docs/examples/css-in-js"},next:{title:"Cell Attributes",permalink:"/docs/examples/cell-attributes"}},c=[],m={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can customize cells and format them at runtime using ",Object(i.b)("inlineCode",{parentName:"p"},"formatter")," property:"),Object(i.b)(o.a,{children:"\nconst grid = new Grid({\n  columns: [\n      { \n        name: 'Name',\n        formatter: (cell) => `Name: ${cell}`\n      },\n      'Email',\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n  ])\n});\n",mdxType:"LiveExample"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is also possible to add HTML content to cells. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/examples/html-cells"}),"Populating cells with HTML"),"."))),Object(i.b)("p",null,"You can also get access to other cells in the same row:"),Object(i.b)(o.a,{children:"\nconst grid = new Grid({\n  columns: [\n      'Salary 1',\n      'Salary 2',\n      { \n        name: 'Sum',\n        formatter: (_, row) => `$${(row.cells[0].data + row.cells[1].data).toLocaleString()} USD`\n      },\n   ],\n  data: Array(5).fill().map(x => [\n    Math.round(Math.random() * 100000),\n    Math.round(Math.random() * 100000),\n    null\n  ])\n});\n",mdxType:"LiveExample"}))}d.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(151),r=n(150),i=n(0),o=n.n(i),s=n(152);class l extends i.Component{render(){return o.a.createElement(r.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:a.d,html:a.h,h:a.g,gCreateRef:a.f,gComponent:a.c,PluginPosition:a.e,BaseComponent:a.a,BaseProps:a.BaseProps,CodeBlock:r.a,useEffect:i.useEffect,useRef:i.useRef,faker:s,...this.props.scope}})}}}}]);