(this["webpackJsonpstock-market"]=this["webpackJsonpstock-market"]||[]).push([[0],{29:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),j=c.n(r),s=c(16),a=c.n(s);function i(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h2",{children:"Home"})})}var l=c(3);function d(){return Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/cryptos",children:"Cryptos"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/currencies",children:"Currencies"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/indexes",children:"Indexes"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/markets",children:"Markets"})})]})})}var x=c(10),b=c(2);function o(){return Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:"Home Page"})})}var O=Object(r.createContext)(null),u=Object(r.createContext)(null),h=Object(r.createContext)(null),m=Object(r.createContext)(null);function p(){var e=Object(r.useContext)(O).currenciesData;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Currencies page"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{children:e&&Object.entries(e).map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/currencies/".concat(e[0]),children:e[0]})},t)}))})})]})}function v(){var e=Object(r.useContext)(u).cryptosData;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Crypto page"}),Object(n.jsx)("ul",{children:e&&Object.entries(e).map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"cryptos/".concat(e[0]),children:e[0]})},t)}))})]})}function f(e){return Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:e.linkAddress,children:e.linkName})},e.index)}function k(e){var t=Object(r.useContext)(u).cryptosData,c=e.match.params.currency;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Cryptos detail list page"}),Object(n.jsx)("ul",{children:t&&Object.entries(t[c]).map((function(e,t){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(f,{index:t,linkAddress:"/cryptos/".concat(c,"/").concat(e[0]),linkName:e[0]})})}))})]})}function y(e){var t=Object(r.useContext)(u).cryptosData,c=e.match.params.currency,j=e.match.params.cryptosName;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Crypto detail page"}),Object(n.jsx)("ul",{children:t&&Object.entries(t[c][j]).map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:[e[0],": ",e[1]]})},t)}))})]})}function C(){var e=Object(r.useContext)(h).indexesData;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Indexes page"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{children:e&&Object.entries(e).map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/indexes/".concat(e[0]),children:e[0]})},t)}))})})]})}function g(e){var t=Object(r.useContext)(h).indexesData,c=e.match.params.currency;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Indexes detail list page"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{children:t&&Object.entries(t[c]).map((function(e,t){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(f,{index:t,linkAddress:"/indexes/".concat(c,"/").concat(e[0]),linkName:e[0]})})}))})})]})}function D(e){var t=Object(r.useContext)(h).indexesData,c=e.match.params.currency,j=e.match.params.index;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Indexes detail page"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{children:t&&Object.entries(t[c][j]).map((function(e,t){return Object(n.jsxs)("li",{children:[e[0]," - ",e[1]]},t)}))})})]})}function N(){var e=Object(r.useContext)(m).marketsData;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Markets page"}),Object(n.jsx)("ul",{children:e&&Object.entries(e).map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/markets/".concat(e[0]),children:e[0]})},t)}))})]})}function F(e){var t=Object(r.useContext)(m).marketsData,c=e.match.params.marketName;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Market detail list"}),Object(n.jsx)("h3",{children:t&&c}),Object(n.jsx)("ul",{children:t&&Object.entries(t[c]).map((function(e,t){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(f,{index:t,linkAddress:"/markets/".concat(c,"/").concat(e[0]),linkName:e[0]})})}))})]})}function P(e){var t=Object(r.useContext)(m).marketsData,c=e.match.params.marketName,j=e.match.params.companyName;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Market company detail page"}),Object(n.jsx)("ul",{children:t&&Object.entries(t[c][j]).map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:[e[0],": ",e[1]]})},t)}))})]})}function I(e){var t=e.match.params.currency,c=Object(r.useContext)(O).currenciesData;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Currency detail list page"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{children:c&&Object.entries(c[t]).map((function(e,c){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(f,{index:c,linkAddress:"/currencies/".concat(t,"/").concat(e[0]),linkName:e[0]})})}))})})]})}function S(e){var t=Object(r.useContext)(O).currenciesData,c=e.match.params.currency,j=e.match.params.company;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Currencies detail page"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{children:t&&Object.entries(t[c][j]).map((function(e,t){return Object(n.jsxs)("li",{children:[e[0]," - ",e[1]]},t)}))})})]})}function A(){var e=Object(r.useState)(null),t=Object(x.a)(e,2),c=t[0],j=t[1],s=Object(r.useState)(null),a=Object(x.a)(s,2),i=a[0],l=a[1],d=Object(r.useState)(null),f=Object(x.a)(d,2),A=f[0],M=f[1],H=Object(r.useState)(null),w=Object(x.a)(H,2),B=w[0],E=w[1];return Object(r.useEffect)((function(){fetch("https://market-data-collector.firebaseio.com/market-collector.json").then((function(e){return e.json()})).then((function(e){j(e.markets),l(e.crypto),M(e.indexes),E(e.currencies)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsx)(b.c,{children:Object(n.jsx)(m.Provider,{value:{marketsData:c},children:Object(n.jsx)(u.Provider,{value:{cryptosData:i},children:Object(n.jsx)(h.Provider,{value:{indexesData:A},children:Object(n.jsxs)(O.Provider,{value:{currenciesData:B},children:[Object(n.jsx)(b.a,{exact:!0,path:"/cryptos/:currency/:cryptosName",component:y}),Object(n.jsx)(b.a,{exact:!0,path:"/cryptos/:currency",component:k}),Object(n.jsx)(b.a,{exact:!0,path:"/cryptos",component:v}),Object(n.jsx)(b.a,{exact:!0,path:"/currencies",component:p}),Object(n.jsx)(b.a,{exact:!0,path:"/currencies/:currency",component:I}),Object(n.jsx)(b.a,{exact:!0,path:"/currencies/:currency/:company",component:S}),Object(n.jsx)(b.a,{exact:!0,path:"/indexes",component:C}),Object(n.jsx)(b.a,{exact:!0,path:"/indexes/:currency",component:g}),Object(n.jsx)(b.a,{exact:!0,path:"/indexes/:currency/:index",component:D}),Object(n.jsx)(b.a,{exact:!0,path:"/markets/:marketName/:companyName",component:P}),Object(n.jsx)(b.a,{exact:!0,path:"/markets/:marketName",component:F}),Object(n.jsx)(b.a,{exact:!0,path:"/markets",component:N}),Object(n.jsx)(b.a,{exact:!0,path:"/",component:o})]})})})})})})}var M=function(){return Object(n.jsx)("div",{className:"container-xl",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)(i,{}),Object(n.jsx)(d,{}),Object(n.jsx)(A,{})]})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,j=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),j(e),s(e)}))};c(28);a.a.render(Object(n.jsx)(j.a.StrictMode,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(M,{})})}),document.getElementById("root")),H()}},[[29,1,2]]]);
//# sourceMappingURL=main.1cee3910.chunk.js.map