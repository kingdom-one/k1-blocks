(()=>{"use strict";var e={n:o=>{var a=o&&o.__esModule?()=>o.default:()=>o;return e.d(a,{a}),a},d:(o,a)=>{for(var l in a)e.o(a,l)&&!e.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:a[l]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=window.wp.blocks,a=window.React,l=window.wp.element,r=window.wp.blockEditor,t=window.wp.apiFetch;var n=e.n(t);const c=window.wp.components,i=JSON.parse('{"M":[{"slug":"primary","color":"#00ae83","name":"Primary Green"},{"slug":"primary-dark","color":"#00644b","name":"Dark Green"},{"slug":"academy-green","color":"#2e3636","name":"Academy Green"},{"slug":"spark-yellow","color":"#f4c063","name":"Spark Yellow"},{"slug":"ar-purple","color":"#9d9dcd","name":"Above Reproach Purple"},{"slug":"ar-orange","color":"#e37f5a","name":"Above Reproach Orange"},{"slug":"ar-yellow","color":"#f4eb27","name":"Above Reproach Yellow"},{"slug":"grey","color":"#4b4b4b","name":"Grey"},{"slug":"grey-light","color":"#707070","name":"Light Grey"},{"slug":"grey-lightest","color":"#dbdbdb","name":"Super Light Grey"},{"slug":"white","color":"#fff","name":"White"},{"slug":"black","color":"#000","name":"Black"},{"slug":"drop-shadow","color":"rgba(0,0,0,.35)","name":"Drop Shadow"}]}'),u=JSON.parse('{"UU":"k1-block-theme/color-reveal-container","DD":"Color Reveal (container)"}');(0,o.registerBlockType)(u.UU,{title:u.DD,edit:function({attributes:e,setAttributes:o}){const{hasBackgroundImage:t,backgroundImage:u,backgroundColor:m,colorDirection:s,opacity:g}=e,d=(0,r.useBlockProps)({className:"color-container my-5 py-5 position-relative"}),[p,b]=(0,l.useState)(void 0);function k(){o({backgroundImage:"",hasBackgroundImage:!1}),b(void 0)}return(0,l.useEffect)((()=>{!async function(){if(!p)return;const e=await n()({path:`wp/v2/media/${p}`,method:"GET"});e&&o({backgroundImage:e.media_details.sizes.full.source_url})}()}),[p,o]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(r.InspectorControls,null,(0,a.createElement)(c.PanelBody,{title:"Background Color",initialOpen:!0},(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.ColorPalette,{colors:i.M,onChange:e=>{o({backgroundColor:e})},clearable:!1,value:m})),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.SelectControl,{label:"Color Direction",value:s,options:[{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Left Top",value:"left-top"},{label:"Right Top",value:"right-top"},{label:"Zig Zag Left",value:"zig-zag-left"},{label:"Zig Zag Right",value:"zig-zag-right"},{label:"Right Bottom",value:"right-bottom"},{label:"Left Bottom",value:"left-bottom"}],onChange:e=>o({colorDirection:e})}))),(0,a.createElement)(c.PanelBody,{title:"Background Image",initialOpen:!0},(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(r.MediaUploadCheck,null,(0,a.createElement)(r.MediaUpload,{allowedTypes:["image"],onSelect:e=>{o({hasBackgroundImage:!0}),b(e.id)},value:u,render:({open:e})=>(0,a.createElement)(c.ButtonGroup,null,(0,a.createElement)(c.Button,{variant:"primary",onClick:e},"Choose Background Image"),t&&(0,a.createElement)(c.Button,{variant:"secondary",onClick:k},"Clear Background Image"))}))),t&&(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("div",{style:{width:"100%"}},(0,a.createElement)(c.RangeControl,{label:"Opacity",value:g,onChange:e=>o({opacity:e}),min:0,max:100}))))),(0,a.createElement)("section",{...d},(0,a.createElement)("div",{className:`color-container__background clip-color-${s}`},(0,a.createElement)("div",{className:"color-container__background--color",style:{backgroundColor:m}}),t?(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"color-container__background--lower",style:{backgroundImage:`url(${u})`,backgroundPosition:"center",backgroundSize:"cover"}}),(0,a.createElement)("div",{className:"color-container__background--upper",style:{backgroundColor:`rgba(0,0,0,${g/100})`}})):(0,a.createElement)("div",{className:"color-container__background--lower"})),(0,a.createElement)("div",{className:"color-container__content position-relative container",style:{zIndex:5}},(0,a.createElement)(r.InnerBlocks,null))))},save:function(){const e=r.useBlockProps.save({className:"color-container my-5 py-5"});return(0,a.createElement)("div",{...e},(0,a.createElement)(r.InnerBlocks.Content,null))}})})();