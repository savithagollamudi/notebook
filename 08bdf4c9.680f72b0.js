(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),c=(n(0),n(142)),l={id:"js5",title:"Capture collections of Data with Arrays",sidebar_label:"Arrays"},b={id:"js5",title:"Capture collections of Data with Arrays",description:"Arrays creation",source:"@site/docs/js5.md",permalink:"/notebook/docs/js5",editUrl:"https://github.com/savithagollamudi/notebook/tree/master/notes-website/docs/js5.md",sidebar_label:"Arrays",sidebar:"someSidebar",previous:{title:"Making Decisions in JS",permalink:"/notebook/docs/js4"},next:{title:"Objects",permalink:"/notebook/docs/js6"}},i=[{value:"Arrays creation",id:"arrays-creation",children:[]},{value:"Array Methods",id:"array-methods",children:[{value:"push",id:"push",children:[]},{value:"unshift",id:"unshift",children:[]},{value:"pop",id:"pop",children:[]},{value:"shift",id:"shift",children:[]},{value:"concat",id:"concat",children:[]},{value:"includes (not available in IE)",id:"includes-not-available-in-ie",children:[]},{value:"indexOf",id:"indexof",children:[]},{value:"reverse",id:"reverse",children:[]},{value:"join",id:"join",children:[]},{value:"slice",id:"slice",children:[]},{value:"splice",id:"splice",children:[]},{value:"Introduction to Sort",id:"introduction-to-sort",children:[]}]},{value:"Reference Types",id:"reference-types",children:[{value:"Pass by Value",id:"pass-by-value",children:[]},{value:"Pass by reference",id:"pass-by-reference",children:[]}]},{value:"Using const with Arrays",id:"using-const-with-arrays",children:[]},{value:"Nested arrays",id:"nested-arrays",children:[]}],o={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"arrays-creation"},"Arrays creation"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'let s = [];\nlet c = ["red", "blue", "green"];\nlet num = [15, 2, 4, 9];\nlet mixed = [true, 68, "cat", "null"];\nnew Array(); //[]\nnew Array(1, 2, 3, 4); //[1,2,3,4]\n')),Object(c.b)("p",null,"Unlike strings, ",Object(c.b)("strong",{parentName:"p"},"Arrays are mutable"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'let list = ["chocolate", "cheese"];\nlist[1] = "milk";\nlist[2] = "Ice cream";\n//add at the end\nlist[list.length] = "bread";\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"array-methods"},"Array Methods"),Object(c.b)("p",null,"Some of the most commonly used array methods.."),Object(c.b)("h3",{id:"push"},"push"),Object(c.b)("p",null,"Add an element at the end. RT : length of array"),Object(c.b)("h3",{id:"unshift"},"unshift"),Object(c.b)("p",null,"Add one or more elements at the first, RT: length of the array"),Object(c.b)("h3",{id:"pop"},"pop"),Object(c.b)("p",null,"Remove an element from end, RT: last item in the array"),Object(c.b)("h3",{id:"shift"},"shift"),Object(c.b)("p",null,"Remove element from start"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"let num = [1, 2, 3, 4, 5, 6];\nnum.push(97); //[1,2,3,4,5,6,97]. RV : 7\nnum.pop(); //97\nnum.unshift(7, 8); //[7,8,1,2,3,4,5,6]\nnum.shift(); //7 [8,1,2,3,4,5,6]\n")),Object(c.b)("h3",{id:"concat"},"concat"),Object(c.b)("p",null,"Merge two or more arrays. RT: new array"),Object(c.b)("h3",{id:"includes-not-available-in-ie"},"includes (not available in IE)"),Object(c.b)("p",null,"Determines whether an array includes a certain value among its entries. RT: true or false"),Object(c.b)("h3",{id:"indexof"},"indexOf"),Object(c.b)("p",null,"returns index of a number(if exists), else return - 1"),Object(c.b)("h3",{id:"reverse"},"reverse"),Object(c.b)("p",null,"Reverse an array ",Object(c.b)("inlineCode",{parentName:"p"},"in place")),Object(c.b)("h3",{id:"join"},"join"),Object(c.b)("p",null,"creates and ",Object(c.b)("inlineCode",{parentName:"p"},"returns a new string")," by concatenating all of ele in an array (or array like object) seperated by ',' or a specified seperator. If it has only one item, that item is returned with a seperator."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'//concat\nlet arr = ["a", "b", "c"];\nlet arr2 = ["d", "e", "f"];\narr.concat(arr2); //[a,b,c,d,e,f]\n\nnum1 = [1, 2, 3];\nnum2 = [4, 5, 6];\nnum3 = [7, 8, 9];\n\nlet num4 = num1.concat(num2, num3);\n//num4 = [1,2,3,4,5,6,7,8,9]\n\n//includes\nlet num = [1, 2, 3, 4, 5];\nnum.includes(6); //false\nnum.includes(1); //true\nlet ingredients = ["water", "corn starch", "cheese"];\ningredients.includes("corn"); // false (lookd for a direct match)\nnum.includes(3, 3); //search  for item 3 after index 3. RV: false\nnum.includes(2, 0); //RV: true\n//Reverse & join\nnum.reverse(); // [5,4,3,2,1]\nvar ele = ["Fire", "Air", "water"];\nele.join(); //"Fire,Air,water"\nele.join(""); //"FireAirwater"\nele.join("-"); //\'\'Fire-Air-water\n')),Object(c.b)("h3",{id:"slice"},"slice"),Object(c.b)("p",null,"Returns a shallow copy of portion of an array into new array object selected from begin to end (non inclusive)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var num = [1, 2, 3, 4, 5];\nnum.slice(2); //[3,4,5]\nnum.slice(2, 4); //[3,4] -> 4th pos is not included\nnum.slice(1, 5); //[2,3,4,5]\nnum.slice(-3); //[3,4,5]\nnum.slice(-3, -1); //[3,4] -> go 3 elements back & 1 ele forward.\n//copy an entire arr\nnum.slice(); //[1,2,3,4,5]\n")),Object(c.b)("h3",{id:"splice"},"splice"),Object(c.b)("p",null,"changes the content of an array by replacing or removing existing elements and / or adding new elements in place."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'var months = ["Jan", "March", "April", "June"];\n//add an item to array\nmonths.splice(1, 0, "Feb"); //[Jan,Feb,March,April,June] -> RT :[]\n//replace  item in array\n//replace 1 item at index 4 with the 3rd param\nmonths.splice(4, 1, "May"); //[Jan,Feb,March,April,May] -> RT: deleted value -> June\n//delete items\nlet arrDeletedItems = arr.splice(start,deleteCount[,item1[,item2]...])\n//start - > index at where to start (if its -ve start from end)\n//deleteCount -> an integer indicating how many elements to be deleted from `start`\n//RT : An array containing deleted items, if no items are deleted an empty array is returned. deleted ele if only one is removed.\nmonths.splice(0,2) //RT: Jan,Feb . arr: [March, April, May]\n')),Object(c.b)("h3",{id:"introduction-to-sort"},"Introduction to Sort"),Object(c.b)("p",null,"sorts elements of an array in place & return sorted array. Default sort order is built upon converting ele to string, then comparing to their unicode (UTF-16) unit values"),Object(c.b)("p",null,"Time and space complexity not guaranteed that depends on implementation."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'var months = ["March", "Jan", "Feb", "Dec"];\nmonths.sort(); //[Dec,Feb,Jan,March]\nvar nums = [1, 30, 4, 21, 100000];\nnums.sort(); //[1,100000,21,30,4]\nSyntax: arr.sort(compareFn); //compareFn determines the sort order\n//if this is omitted arr.ele are converted to strings then sorted acc to each character unicode.\nlet num = [4, 12, 5, 1, 3];\nnum.sort((a, b) => a - b); //[1,2,3,4,5]\nnum.sort((a, b) => b - a); //[5,4,3,2,1]\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"reference-types"},"Reference Types"),Object(c.b)("h3",{id:"pass-by-value"},"Pass by Value"),Object(c.b)("p",null,"Pass by value is only for ",Object(c.b)("strong",{parentName:"p"},"Primitive types")," (Boolean, null, undefined, String, Number)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'let fruit = "orange"; //orange\nlet color = fruit; //orange\n//here value of fruit is copied into color (pass by value)\n\nlet x = 10;\nlet y = "abc";\nlet z = null;\nlet a = x;\nlet b = y;\nx = 5;\ny = "def";\n')),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Var"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Val"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"x"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("s",null,"10")," 5")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"y"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("s",null,"abc"),"def")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"z"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"b"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"abc")))),Object(c.b)("h3",{id:"pass-by-reference"},"Pass by reference"),Object(c.b)("p",null,"Arrays, functions, objects"),Object(c.b)("p",null,"Points to object's location in memory."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"arr = []; // created an array in memory\nvar arr = [];\narr.push(1);\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"var"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"val"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"address"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"obj"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"arr"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<#001>"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"#001"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"arr"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<#001>"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"#001"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[1]")))),Object(c.b)("p",null,"When we use ",Object(c.b)("inlineCode",{parentName:"p"},"arr")," to do something, JS Engine goes to the location of arr in memory and works with info stored there."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var ref = [1];\nvar copy = ref;\nref.push(2);\ncopy; //[1,2]\n\n//both ref and copy point to same object\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"var"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"val"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"address"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"obj"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ref"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<#001>"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"#001"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[1]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"copy"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<#001>"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"#001"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[1]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ref"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<#001>"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"#001"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[1,2]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"copy"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<#001>"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"#001"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[1,2]")))),Object(c.b)("p",null,"Objects are copied by reference instead of value"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'var obj = { 1: "first" };\nobj = { "2": "second" }; // since reference is changed, 1st object is eligible for GC\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'var ref1 = ["hi"]; //#001\nvar ref2 = ref1; //#001\nref1 === ref2; //true\n\nvar ref1 = ["hi"]; //#001\nvar ref2 = ["hi"]; //#002\nref1 === ref2; //false\n')),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"When we pass primitives into fn, it is considered as passed by value & values are copied.\n(Pass by ref will be explored more while learning pure fns and scope concept)"))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"using-const-with-arrays"},"Using const with Arrays"),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("strong",{parentName:"p"},"often use const with arrays"),", because values inside arrays can change as long as reference remains same"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const eggs = ["brown", "brown"];\neggs.push("purple");\neggs[0] = "green"; // we can do this\n//Output:\n//["green", "brown", "purple"]\n\neggs = ["blue", "pink"]; //Uncaught TypeError: Assignment to constant variable.\n//we cant do this because we are changing the reference.\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"nested-arrays"},"Nested arrays"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const colors = [\n  ["red", "crimson"],\n  ["orange", "dark orange"],\n  ["green", "olive"],\n];\ncolors[2][0]; //green\ncolors[2][1]; //olive\ncolors[0][0]; //red\n')))}s.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,j=d["".concat(l,".").concat(u)]||d[u]||p[u]||c;return n?r.a.createElement(j,b(b({ref:t},o),{},{components:n})):r.a.createElement(j,b({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);