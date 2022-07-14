(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(3),c=t.n(o),r=(t(13),t(1));t(15);function s(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#"},e.aboutText))),n.a.createElement("form",{className:"d-flex"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")),n.a.createElement("div",{className:"form-check form-switch padd1 fifth text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label sixth ",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function i(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container my-4"},n.a.createElement("h1",{className:"fourth",style:{color:"light"===e.mode?"black":"white"}},e.heading),n.a.createElement("div",{className:"mb-3 my-4"},n.a.createElement("textarea",{className:"form-control",id:"myBox",rows:"10",style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},onChange:function(e){c(e.target.value)},value:o,placeholder:"Enter the text..."})),n.a.createElement("button",{className:"btn btn-primary mx-2 my-3",onClick:function(){var a=o.toUpperCase();c(a),e.showAlert("Converted to UpperCase!","success")}},"Convert to Upppercase"),n.a.createElement("button",{className:"btn btn-secondary mx-2  my-3",onClick:function(){var a=o.toLowerCase();c(a),e.showAlert("Converted to LowerCase!","success")}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn btn-danger mx-2  my-3",onClick:function(){for(var a="",t=0;t<o.length;t++)0===t||" "===o[t-1]?a+=o[t].toUpperCase():a+=o[t];c(a),e.showAlert("Capatilized Each word!","success")}},"Capitalize Every Word"),n.a.createElement("button",{className:"btn btn-warning mx-2  my-3",onClick:function(){navigator.clipboard.writeText(o),e.showAlert("Text Copied to Clipboard!","success")}},"Copy Text"),n.a.createElement("button",{className:"btn btn-info mx-2  my-3",onClick:function(){for(var a="",t=0;t<o.length;t++)(0!==t&&" "!==o[t-1]||" "!==o[t])&&(a+=o[t]);c(a),e.showAlert("Removed Extra Spaces!","success")}},"Remove Extra Spaces"),n.a.createElement("button",{className:"btn btn-dark mx-2  my-3",onClick:function(){c(""),e.showAlert("Cleared All!","success")}},"Clear All")),n.a.createElement("div",{className:"container my-3"},n.a.createElement("div",{className:"second"},n.a.createElement("h2",{className:"third"},"Your text summary"),n.a.createElement("p",{className:"first"},function(){var e=o.trim().split(" "),a=e.length;return 0==e[e.length-1].length&&a--,a}()," words, ",o.length," characters "),n.a.createElement("p",{className:"first"},(.008*o.split(" ").length).toFixed(4)," minutes to read")),n.a.createElement("div",{className:"secondd",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h2",{className:"third"},"Preview"),n.a.createElement("p",{className:"my-4 text-muted"},o.length>0?o:"Enter something in the textbox to preview it here..."))))}function m(){var e=Object(l.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("Enable Dark Mode"),s=Object(r.a)(c,2),i=s[0],m=s[1];return n.a.createElement("div",{className:"container",style:t},n.a.createElement("h1",{className:"my-4"},"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show",style:t,"aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse",style:t,"aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse",style:t,"aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("button",{onClick:function(){"white"===t.color?(o({color:"black",backgroundColor:"white"}),m("Enable Dark Mode")):(o({color:"white",backgroundColor:"black"}),m("Enable Light Mode"))},className:"btn btn-primary my-5"},i)))}function d(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show container my-2"),role:"alert"},n.a.createElement("strong",null,function(e){var a="",t=e.toLowerCase();return a+=t[0].toUpperCase(),a+=t.substr(1)}(e.alert.type)," ")," : ",e.alert.msg)}s.defaultProps={title:"Set Title Here",aboutText:"Set AboutText here"};var h=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),h=Object(r.a)(c,2),u=h[0],b=h[1];function p(e,a){b({msg:e,type:a}),setTimeout(function(){b(null)},1500)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,{title:"TextUtils",aboutText:"About TextUtils",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="black",p("Dark mode has been enabled","success")):(o("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"))}}),n.a.createElement(d,{alert:u}),n.a.createElement(i,{heading:"Enter the test to analyze below:",mode:t,showAlert:p}),n.a.createElement(m,null))},u=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null))),u()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.4d8744fa.chunk.js.map