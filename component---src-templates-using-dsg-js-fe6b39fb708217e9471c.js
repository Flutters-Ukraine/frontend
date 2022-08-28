"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[713],{4136:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(7294),i=n(1597),r=n(3494),l=r.default.header.withConfig({displayName:"header-styles__HeaderWrapper",componentId:"sc-1n1cii8-0"})(["position:sticky;top:0;background-color:#fff;display:flex;flex-direction:row;justify-content:space-between;padding:20px 110px;z-index:2;box-shadow:inset 0 0 2000px rgba(255,255,255,.5);"]),o=(0,r.default)(i.Link).withConfig({displayName:"header-styles__HeaderLogo",componentId:"sc-1n1cii8-1"})(["color:black;justify-self:flex-start;cursor:pointer;text-decoration:none;font-size:1.5rem;display:flex;align-items:center;"]),c=r.default.nav.withConfig({displayName:"header-styles__HeaderNavMenu",componentId:"sc-1n1cii8-2"})(["font-size:18px;@media screen and (max-width:960px){position:absolute;top:0;margin-top:50px;left:0;flex-direction:column;width:100%;justify-content:center;align-items:center;}"]),s=r.default.div.withConfig({displayName:"header-styles__HamburgerLines",componentId:"sc-1n1cii8-3"})(["display:none;height:26px;width:32px;position:absolute;top:17px;right:20px;z-index:2;display:flex;flex-direction:column;justify-content:space-between;@media screen and (max-width:960px){display:block;}& .line1{transform-origin:0% 0%;transition:transform 0.4s ease-in-out;}& .line2{transition:transform 0.2s ease-in-out;}& .line3{transform-origin:0% 0%;transition:transform 0.4s ease-in-out;}"]),d=r.default.ul.withConfig({displayName:"header-styles__HeaderNavList",componentId:"sc-1n1cii8-4"})(["display:flex;flex-direction:row;align-items:center;list-style:none;text-align:center;@media screen and (max-width:960px){flex-direction:column;width:100%;justify-content:center;align-items:center;}"]),m=r.default.input.attrs({type:"checkbox"}).withConfig({displayName:"header-styles__MenuToggle",componentId:"sc-1n1cii8-5"})(["position:absolute;display:block;height:32px;width:32px;top:20px;right:20px;z-index:5;opacity:0;cursor:pointer;&:checked ~ ","{transform:translateX(0);}&:checked ~ "," .line1{transform:rotate(45deg);}&:checked ~ "," .line2{transform:scaleY(0);}&:checked ~ "," .line3{transform:rotate(-45deg);}transform:rotate(-45deg);&:checked ~ "," .line3{}"],d,s,s,s,s),u=r.default.span.withConfig({displayName:"header-styles__HamburgerLine",componentId:"sc-1n1cii8-6"})(["display:block;height:4px;width:100%;border-radius:10px;background:black;"]),p=r.default.li.withConfig({displayName:"header-styles__NavItem",componentId:"sc-1n1cii8-7"})(["display:flex;flex-direction:row;align-items:center;padding-left:25px;@media screen and (max-width:960px){transition:height 400ms cubic-bezier(0.23,1,0.32,1);}"]),f=(0,r.default)(i.Link).withConfig({displayName:"header-styles__NavLink",componentId:"sc-1n1cii8-8"})(["color:black;display:flex;align-items:center;text-decoration:none;"]),h=r.default.span.withConfig({displayName:"header-styles__LanguageSpan",componentId:"sc-1n1cii8-9"})(["cursor:pointer;text-decoration:none;outline-style:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);&.active{color:#02319B;font-size:26px;}"]),g=function(){var e=["en","ua"],t=(0,a.useState)(e[0]),n=t[0],i=t[1];return a.createElement(a.Fragment,null,a.createElement(l,null,a.createElement(o,{to:"/"},"LOGO"),a.createElement(m,null),a.createElement(s,null,a.createElement(u,{className:"line1"}),a.createElement(u,{className:"line2"}),a.createElement(u,{className:"line3"})),a.createElement(c,null,a.createElement(d,null,a.createElement(p,null,a.createElement(f,{to:"/about"},"About Us")),a.createElement(p,null,a.createElement(f,{to:"/about-flutter"},"About Flutter")),a.createElement(p,null,a.createElement(f,{to:"/services"},"Services")),a.createElement(p,null,a.createElement(f,{to:"/our-work"},"Our Work")),a.createElement(p,null,a.createElement(f,{to:"/our-work"},"Contact Us")),a.createElement(p,null,a.createElement(h,{className:(n===e[0]?"active":"")+" ",onClick:function(){return i(e[0])}},"en "),"/ ",a.createElement(h,{className:n===e[1]?"active":"",onClick:function(){return i(e[1])}},"ua"))))))},y=function(e){var t=e.children;return a.createElement(a.Fragment,null,a.createElement(g,null),a.createElement("div",{className:"layout-wrapper"},a.createElement("main",null,t)))}},9357:function(e,t,n){var a=n(7294),i=n(1597);function r(e){var t,n,r=e.description,l=e.title,o=e.children,c=(0,i.useStaticQuery)("63159454").site,s=r||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?l+" | "+d:l),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:l}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:l}),a.createElement("meta",{name:"twitter:description",content:s}),o)}r.defaultProps={description:""},t.Z=r},4808:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var a=n(7294),i=n(1597),r=n(4136),l=n(9357),o=function(){return a.createElement(l.Z,{title:"Using DSG"})};t.default=function(){return a.createElement(r.Z,null,a.createElement("h1",null,"Hello from a ",a.createElement("b",null,"DSG Page")),a.createElement("p",null,"This page is not created until requested by a user."),a.createElement("p",null,"To learn more, head over to our"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/"},"documentation about Deferred Static Generation"),"."),a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}}}]);
//# sourceMappingURL=component---src-templates-using-dsg-js-fe6b39fb708217e9471c.js.map