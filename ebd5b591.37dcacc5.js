(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),l=(n(0),n(144)),i={id:"js2",title:"Values & Variables contd.",sidebar_label:"More Primitive Types"},c={id:"js2",title:"Values & Variables contd.",description:"More Primitive Types",source:"@site/docs/js2.md",permalink:"/docs/js2",editUrl:"https://github.com/savithagollamudi/notebook/docs/js2.md",sidebar_label:"More Primitive Types",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/js1"},next:{title:"Modelling data efficiently",permalink:"/docs/js3"}},o=[{value:"Boolean",id:"boolean",children:[]},{value:"String",id:"string",children:[]},{value:"Null &amp; Undefined",id:"null--undefined",children:[]}],b={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"more-primitive-types"},"More Primitive Types"),Object(l.b)("hr",null),Object(l.b)("h2",{id:"boolean"},"Boolean"),Object(l.b)("p",null,"Boolean has two types of values - true , false"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'//In JS Variable can change type\n\nlet donuts = 12;\ndonuts = false;\ndounts = "a";\n//Probably you wouldnt want to change, but you can\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"string"},"String"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'"hi" + 1; //hi1\n"hi" - "h"; //NaN\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(a.a)({parentName:"li"},{id:"string-indices"}),"String Indices"),Object(l.b)("p",{parentName:"li"},"Every character in string is indexed"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'"hello".length; //5\n"".length; //0\nlet greet = "hello world";\ngreet[0]; //h\ngreet[20]; //undefined (another primitive) -> nothing is there\ngreet[greet.length - 1]; //d\ngreet[0] = "A"; // We cant change strings like this in JS\n//Strings are immutable\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(a.a)({parentName:"li"},{id:"string-methods"}),"String Methods"),Object(l.b)("p",{parentName:"li"},"Some of the most used methods"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'let msg = "hello";\nmsg.toUpperCase(); //HELLO\nmsg.toLowerCase(); //hello\n\n//trim() - removes trailing and leading spaces\nlet greet = "    leave me alone      ";\ngreet.trim(); //"leave me alone"\n//indexOf()\nlet tvShow = "cat_dog";\ntvShow.indexOf("cat"); //0\ntvShow.indexOf("dog"); //4\ntvShow.indexOf("z"); //-1 -> since z is not there\ntvShow.indexOf("a"); //1\n//slice()\nlet str = "super cat dog";\nstr.slice(0, 5); //super -> 0 is the start index and 5 is the end index\nstr.slice(5); //cat dog\nstr.slice(40); //""\n//replace()\nlet laugh = "hahaha so funny! hahaha";\nlaugh.replace("hahaha", "lol"); // lol so funny! hahaha -\n//It only replaces the first instance\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(a.a)({parentName:"li"},{id:"string-escapes"}),"String Escapes"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\\n //new line\n\\' //single quote\n\\\" // double quote\n\\\\ //back slash\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(a.a)({parentName:"li"},{id:"string-template-literals"}),"String Template literals"),Object(l.b)("p",{parentName:"li"},"Allows embedded expressions, which will be evaluated & then turned into a resulting string"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"`I counted ${3 + 4}`; //I counted 7\nlet item = eggs;\nlet price = 1.99;\nlet quantity = 4`you bought ${quantity} ${item} , Total Price : $${\n  price * quantity\n}`; //you bought 4 eggs, total price : $7.96\n")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"null--undefined"},"Null & Undefined"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Null"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Undefined"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Intentional absence of any value"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"variable that do not have any assigned value are undefined")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Value must be assigned"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(a.a)({parentName:"li"},{id:"null"}),"Null"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'//No one has logged in yet\nlet loggedInUser = null; //value is explicitly set to nothing\n//As user logs in\nloggedInUser = "Alan";\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(a.a)({parentName:"li"},{id:"undefined"}),"Undefined"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'"lol"[4]; //undefined\nlet u = undefined; //we can initialize this way, but its not a good practice to do this\nlet color; //undefined\n')))))}s.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);