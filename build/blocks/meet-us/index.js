!function(){"use strict";var e=window.wp.blocks,t=window.React,l=(window.wp.element,window.wp.blockEditor),r=window.wp.components,a=JSON.parse('{"D":[{"slug":"primary","color":"#00ae83","name":"Primary Green"},{"slug":"primary-dark","color":"#00644b","name":"Dark Green"},{"slug":"academy-green","color":"#2e3636","name":"Academy Green"},{"slug":"spark-yellow","color":"#f4c063","name":"Spark Yellow"},{"slug":"ar-purple","color":"#9d9dcd","name":"Above Reproach Purple"},{"slug":"ar-orange","color":"#e37f5a","name":"Above Reproach Orange"},{"slug":"ar-yellow","color":"#f4eb27","name":"Above Reproach Yellow"},{"slug":"grey","color":"#4b4b4b","name":"Grey"},{"slug":"grey-light","color":"#707070","name":"Light Grey"},{"slug":"grey-lightest","color":"#dbdbdb","name":"Super Light Grey"},{"slug":"white","color":"#fff","name":"White"},{"slug":"black","color":"#000","name":"Black"},{"slug":"drop-shadow","color":"rgba(0,0,0,.35)","name":"Drop Shadow"}]}');const o=(0,t.createElement)("svg",{viewBox:"0 0 190.716 217.758"},(0,t.createElement)("defs",null,(0,t.createElement)("clipPath",{id:"leaves-2a"},(0,t.createElement)("rect",{width:"147.637",height:"185.88",fill:"none",stroke:"currentColor","stroke-width":"1"}))),(0,t.createElement)("g",{transform:"matrix(-0.966, 0.259, -0.259, -0.966, 190.716, 179.547)"},(0,t.createElement)("g",{"clip-path":"url(#leaves-2a)"},(0,t.createElement)("path",{d:"M328.262,338.491c11.175,24.413-4.392,54.661-4.392,54.661s-35.992-6.646-47.167-31.059c-8.1-17.7-1.54-39.174,2.681-49.644h0l2.865-6.36S317.087,314.078,328.262,338.491Z",transform:"translate(-263.177 -213.148)",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6"}),(0,t.createElement)("path",{d:"M50.641,348.131c-2.718-4.734-6.76-17.435-6.76-17.435s23.866-9.978,38.561-2.763c8.827,4.335,14.331,12.855,17.546,19.866a59.368,59.368,0,0,1,3.875,11.119,62.159,62.159,0,0,1-9.429,3.945c-7.927,2.619-19.478,4.789-29.161.034C58.681,359.661,53.951,353.9,50.641,348.131Z",transform:"translate(-188.775 -172.509) rotate(-34)",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6"})))),n=(0,t.createElement)("svg",{viewBox:"0 0 190.716 217.758"},(0,t.createElement)("defs",null,(0,t.createElement)("clipPath",{id:"leaves-3a"},(0,t.createElement)("rect",{width:"147.637",height:"185.88",fill:"none",stroke:"currentColor","stroke-width":"1"}))),(0,t.createElement)("g",{transform:"translate(0 0)"},(0,t.createElement)("g",{transform:"matrix(-0.966, 0.259, -0.259, -0.966, 190.716, 179.547)"},(0,t.createElement)("g",{"clip-path":"url(#leaves-3a)"},(0,t.createElement)("path",{d:"M328.262,338.491c11.175,24.413-4.392,54.661-4.392,54.661s-35.992-6.646-47.167-31.059c-8.1-17.7-1.54-39.174,2.681-49.644h0l2.865-6.36S317.087,314.078,328.262,338.491Z",transform:"translate(-263.177 -213.148)",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6"}),(0,t.createElement)("path",{d:"M50.641,348.131c-2.718-4.734-6.76-17.435-6.76-17.435s23.866-9.978,38.561-2.763c8.827,4.335,14.331,12.855,17.546,19.866a59.368,59.368,0,0,1,3.875,11.119,62.159,62.159,0,0,1-9.429,3.945c-7.927,2.619-19.478,4.789-29.161.034C58.681,359.661,53.951,353.9,50.641,348.131Z",transform:"translate(29.745 -221.309)",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6"}),(0,t.createElement)("path",{d:"M32.809,38.588C14.539,38.822,0,20.806,0,20.806S14.045.236,32.315,0c13.248-.17,24.8,9.827,30.159,15.336l3.17,3.534h0S51.079,38.354,32.809,38.588Z",transform:"translate(100.905 80.475) rotate(165)",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6"}))))),c=(0,t.createElement)("svg",{viewBox:"0 0 147.637 185.88"},(0,t.createElement)("defs",null,(0,t.createElement)("clipPath",{id:"leaves-4a"},(0,t.createElement)("rect",{width:"147.637",height:"185.88",fill:"none",stroke:"currentColor","stroke-width":"1"}))),(0,t.createElement)("g",{"clip-path":"url(#leaves-4a)"},(0,t.createElement)("path",{d:"M328.262,338.491c11.175,24.413-4.392,54.661-4.392,54.661s-35.992-6.646-47.167-31.059c-8.1-17.7-1.54-39.174,2.681-49.644h0l2.865-6.36S317.087,314.078,328.262,338.491Z",transform:"translate(-263.177 -213.148)",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6"}),(0,t.createElement)("path",{d:"M50.641,348.131c-2.718-4.734-6.76-17.435-6.76-17.435s23.866-9.978,38.561-2.763c8.827,4.335,14.331,12.855,17.546,19.866a59.368,59.368,0,0,1,3.875,11.119,62.159,62.159,0,0,1-9.429,3.945c-7.927,2.619-19.478,4.789-29.161.034C58.681,359.661,53.951,353.9,50.641,348.131Z",transform:"translate(29.745 -221.309)",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6"}),(0,t.createElement)("path",{d:"M32.793,41.793C19.6,39.624,9.875,27.649,5.527,21.229L3,17.157H3S20.913.365,39.113,3.357,68.582,26.821,68.582,26.821,50.993,44.785,32.793,41.793Z",transform:"translate(74.56 3.959)",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6"}),(0,t.createElement)("path",{d:"M48.211,56.7C21.364,57.047,0,30.573,0,30.573S20.638.346,47.485,0C66.952-.246,83.934,14.443,91.8,22.538l4.657,5.193h0S75.058,56.359,48.211,56.7Z",transform:"translate(99.954 108.38) rotate(-163)",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6"})));function s({leaves:e,color:l="white",direction:r="left"}){const a={color:l,scaleX:1};return"right"===r&&(a.scaleX=-1),(0,t.createElement)("div",{className:"k1-leaves",id:`leaves-${e}`,style:a},function(e){switch(e){case"2":return o;case"3":return n;case"4":return c}}(e))}var i=JSON.parse('{"u2":"k1-block-theme/meet-us","TN":"Meet Us"}');(0,e.registerBlockType)(i.u2,{title:i.TN,edit:function({attributes:e,setAttributes:o}){var n;const{backgroundImage:c,backgroundColor:i,headlineColor:m,subheadlineColor:d}=e,u=(0,l.useBlockProps)({className:"hero"});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:"Background",initialOpen:!0},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ColorPalette,{colors:a.D,onChange:e=>{o({backgroundColor:e})},clearable:!1,value:i}))),(0,t.createElement)(r.PanelBody,{title:"Headline Color",initialOpen:!1},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ColorPalette,{colors:a.D,onChange:e=>{o({headlineColor:e})},clearable:!1,value:m}))),(0,t.createElement)(r.PanelBody,{title:"Subheadline Color",initialOpen:!1},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ColorPalette,{colors:a.D,onChange:e=>{o({subheadlineColor:e})},clearable:!1,value:d})))),(0,t.createElement)("section",{...u},(0,t.createElement)("div",{className:`hero__background color-${colorDirection}`},(0,t.createElement)("div",{className:"hero__background--color",style:{backgroundColor:`${i}`}}),hasBackgroundImage&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"hero__background--lower",style:{backgroundImage:`url(${c})`}}),(0,t.createElement)("div",{className:"hero__background--upper"}))),(0,t.createElement)("div",{className:"hero__content position-relative z-3"},(0,t.createElement)("div",{className:"container d-flex flex-column align-items-stretch"},(0,t.createElement)("div",{className:"row"},(0,t.createElement)("div",{className:"col-1 align-self-start h-auto position-relative d-none d-md-block"},(0,t.createElement)(s,{leaves:leaves})),(0,t.createElement)("div",{className:"position-relative d-flex flex-column col-11"},(0,t.createElement)(l.RichText,{placeholder:"the hero headline...",value:null!==(n=headline)&&void 0!==n?n:pageTitle,onChange:e=>o({headline:e}),className:"hero__content--headline headline mb-5 display-1",tagName:"h1",allowedFormats:["custom/headline-color"],style:{color:m}}),(0,t.createElement)(l.RichText,{placeholder:"A snappy subheadline goes here. Or not. You can leave alone and nothing will appear on the frontend.",className:"hero__content--subheadline subheadline",tagName:"span",value:subheadline,onChange:e=>o({subheadline:e}),style:{color:d,fontFamily:"var(--wp--preset--font-family--poppins)",fontSize:24},allowedFormats:["core/paragraph"]})))),(0,t.createElement)("div",{className:"container my-5"},(0,t.createElement)("div",{className:"row position-relative z-3"},(0,t.createElement)("div",{className:"col-1"}),(0,t.createElement)("div",{className:"col-lg-11"},(0,t.createElement)(l.InnerBlocks,{allowedBlocks:["core/buttons"],template:[["core/buttons",{},[["core/button",{text:"get started",href:"/get-started"}]]]]}))))),(0,t.createElement)("aside",{className:"top-talent-groups z-3"},(0,t.createElement)("div",{className:"container"},(0,t.createElement)("div",{className:"row justify-content-center"},icons.map((e=>(0,t.createElement)("div",{className:"icon d-flex flex-column text-white align-items-center text-center col-12 col-lg-3 my-5 my-lg-0"},(0,t.createElement)("span",{className:"mt-5 fs-5 icon__label"},e.title)))))))))}})}();