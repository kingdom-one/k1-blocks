!function(){"use strict";var e=window.wp.blocks,o=window.React,r=(window.wp.element,window.wp.blockEditor),t=JSON.parse('{"u2":"k1-block-theme/hero","TN":"Hero Section"}');(0,e.registerBlockType)(t.u2,{title:t.TN,edit:function(){return(0,o.createElement)("section",{className:"hero d-flex flex-column justify-content-center",id:"hero"},(0,o.createElement)("div",{className:"hero__background"},(0,o.createElement)("div",{className:"hero__background--lower",style:{backgroundColor:"var(--color-primary--dark)"}})),(0,o.createElement)(r.InnerBlocks,{allowedBlocks:["k1-block-theme/hero-content"]}))},save:function(){return(0,o.createElement)("section",{className:"hero d-flex flex-column justify-content-center",id:"hero"},(0,o.createElement)("div",{className:"hero__background"},(0,o.createElement)("div",{className:"hero__background--lower",style:{backgroundColor:"var(--color-primary--dark)"}})),(0,o.createElement)(r.InnerBlocks.Content,null))}})}();