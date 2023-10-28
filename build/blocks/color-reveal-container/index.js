!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,n=window.React,a=window.wp.element,o=window.wp.blockEditor,l=window.wp.apiFetch,r=e.n(l),c=window.wp.components,i=JSON.parse('{"u2":"k1-block-theme/color-reveal-container","TN":"Color Reveal (container)"}');(0,t.registerBlockType)(i.u2,{title:i.TN,edit:function({attributes:e,setAttributes:t}){const{hasBackgroundImage:l,backgroundImage:i,backgroundColor:u,colorDirection:m,opacity:g}=e,d=(0,o.useBlockProps)({className:"color-container my-5 py-5"}),[s,p]=(0,a.useState)(void 0);function b(){t({backgroundImage:"",hasBackgroundImage:!1}),p(void 0)}return(0,a.useEffect)((()=>{!async function(){if(!s)return;const e=await r()({path:`wp/v2/media/${s}`,method:"GET"});e&&t({backgroundImage:e.media_details.sizes.full.source_url})}()}),[s,t]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.InspectorControls,null,(0,n.createElement)(c.PanelBody,{title:"Background",initialOpen:!0},(0,n.createElement)(c.PanelRow,null,(0,n.createElement)(o.MediaUploadCheck,null,(0,n.createElement)(o.MediaUpload,{allowedTypes:["image"],onSelect:e=>{t({hasBackgroundImage:!0}),p(e.id)},value:i,render:({open:e})=>(0,n.createElement)(c.ButtonGroup,null,(0,n.createElement)(c.Button,{variant:"primary",onClick:e},"Choose Background Image"),l&&(0,n.createElement)(c.Button,{variant:"secondary",onClick:b},"Clear Background Image"))}))),(0,n.createElement)(c.PanelRow,null,(0,n.createElement)("p",{style:{marginTop:20}},"Set the Background Color with the Styles Pane.")),(0,n.createElement)(c.PanelRow,null,(0,n.createElement)(c.SelectControl,{label:"Color Direction",value:m,options:[{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Left Top",value:"left-top"},{label:"Right Top",value:"right-top"},{label:"Zig Zag Left",value:"zig-zag-left"},{label:"Zig Zag Right",value:"zig-zag-right"},{label:"Right Bottom",value:"right-bottom"},{label:"Left Bottom",value:"left-bottom"}],onChange:e=>t({colorDirection:e})})),(0,n.createElement)(c.PanelRow,null,"Overlay Color",(0,n.createElement)(c.RangeControl,{label:"Opacity",value:g,onChange:e=>t({opacity:e}),min:0,max:100})))),(0,n.createElement)("section",{...d},(0,n.createElement)("div",{className:`color-container__background clip-color-${m}`},(0,n.createElement)("div",{className:"color-container__background--color"}),l?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"color-container__background--lower",style:{backgroundImage:`url(${i})`}}),(0,n.createElement)("div",{className:"color-container__background--upper"})):(0,n.createElement)("div",{className:"color-container__background--lower"})),(0,n.createElement)(o.InnerBlocks,null)))},save:function(){return(0,n.createElement)(o.InnerBlocks.Content,null)}})}();