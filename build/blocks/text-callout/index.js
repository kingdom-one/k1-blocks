!function(){"use strict";var e=window.React,t=(window.wp.element,window.wp.blocks),l=JSON.parse('{"u2":"k1-block-theme/text-callout","TN":"Text Callout"}'),n=window.wp.blockEditor;(0,t.registerBlockType)(l.u2,{title:l.TN,edit:function({attributes:t,setAttributes:l}){const{headline:a,align:c}=t,i=(0,n.useBlockProps)({class:"text-callout"});return(0,e.createElement)("aside",{...i},(0,e.createElement)(n.RichText,{placeholder:"Pop a nice, big, text callout in here.",value:a,onChange:e=>l({headline:e}),className:"headline",tagName:"h2",style:{textAlign:c}}))},save:()=>{const t=n.useBlockProps.save();return(0,e.createElement)("div",{...t},(0,e.createElement)(n.RichText.Content,null))}})}();