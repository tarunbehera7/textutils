(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(2),r=a.n(o);a(12),a(13);function c(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," \n            bg-").concat(e.mode," ")},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch \n                    text-".concat("light"===e.mode?"dark":"light"," ")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")),l.a.createElement("br",null),l.a.createElement("div",{className:"dropdown ms-3",id:"liveAlertPlaceholder"},l.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Dropdown button"),l.a.createElement("ul",{className:"dropdown-menu"},l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/",onClick:t=>{t.preventDefault(),e.handleChangeColor("#3cb541"),e.changeButtonColor("#008B8B")}},"changeGreen")),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/",onClick:t=>{t.preventDefault(),e.handleChangeColor("#ac242f"),e.changeButtonColor("#fd5c69")}},"changeRed")),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/",onClick:t=>{t.preventDefault(),e.handleChangeColor("#999900"),e.changeButtonColor("#FEBE10")}},"changeYellow")))))))}function s(e){const[t,a]=Object(n.useState)("");let[o,r]=Object(n.useState)(0),c=0;const[s,m]=Object(n.useState)("");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null," ",e.heading," "),l.a.createElement("div",{className:"mb-2 "},l.a.createElement("textarea",{className:"form-control",id:"myBox",value:t,onChange:e=>{a(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},rows:"6"})),l.a.createElement("button",{className:"btn btn-info mx-2",id:"btn",onClick:()=>{console.log("Uppercase was clicked"+t);let n=t.toUpperCase();a(n),e.showAlert("Converted to Uppercase","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-info mx-2",id:"btn",onClick:()=>{console.log(" Lowercase was clicked"+t);let n=t.toLowerCase();a(n),e.showAlert("Converted to Lowercase","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-info mx-2",id:"btn",onClick:()=>{let n=t.split(""),l=(n=n.reverse()).join("");a(l),e.showAlert("Converted to Reverse","success")}},"Handle Reverse"),l.a.createElement("button",{className:"btn btn-info mx-2 my-2",id:"btn",onClick:()=>{for(o=0;o<=t.length;o++)t.charAt(o).match(/[aeiouAEIOU]/)&&r(++c);e.showAlert("Vowels are counted","success")}}," Count Vowels"),l.a.createElement("div",{className:" mt-2 mb-2"},l.a.createElement("textarea",{className:"form-control",value:s,id:"myBox",onChange:e=>{console.log("change hua"),m(e.target.value)},rows:"1"})),l.a.createElement("button",{className:"btn btn-info mx-2",id:"btn",onClick:()=>{let e=t.replaceAll(s,"");a(e)}}," delete specific word ")),l.a.createElement("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your text Summary"),l.a.createElement("p",null,t.split(" ").length>1?t.split(" ").length-1:0," words, ",t.length," characters"),l.a.createElement("p",null," ",.008*t.split(" ").length," Minutes read "),l.a.createElement("h2",null," Preview "),l.a.createElement("p",null,t.length>0?t:"Enter sthg to preview it here"," "),l.a.createElement("p",null," ",o," no. of vowels")))}c.defaultProps={title:"Set title here",abtText:"About"};var m=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type))," : ",e.alert.msg)};var i=function(e){const[t,a]=Object(n.useState)("light"),[o,r]=Object(n.useState)(null),i=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{title:"Textutils",mode:t,toggleMode:()=>{"light"===t?(a("dark"),document.body.style.backgroundColor="#373F51",i("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(a("light"),document.body.style.backgroundColor="#dee6ec",i("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")},handleChangeColor:e=>{document.body.style.backgroundColor=e,i("Background color changed to ".concat(e),"success"),setTimeout(()=>{r(null)},1500)},changeButtonColor:e=>{const t=document.querySelectorAll(".btn");t.length>0?(t.forEach(t=>{t.style.backgroundColor=e}),setTimeout(()=>{r(null)},1500)):console.error("No buttons found with the specified class")}}),l.a.createElement(m,{alert:o}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(s,{showAlert:i,h:!0,eading:"Enter the text to analyze",mode:t})),l.a.createElement("div",{className:"container my-4",mode:t}))};var d=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:o,getTTFB:r}=t;a(e),n(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),d()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.99ac388a.chunk.js.map