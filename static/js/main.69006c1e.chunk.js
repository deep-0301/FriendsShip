(this.webpackJsonpfriends=this.webpackJsonpfriends||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(2),i=a.n(c),n=a(17),s=a.n(n),r=(a(24),a(25),a(13)),l=a.p+"static/media/logo.d3f91056.png",d=a.p+"static/media/loding.8ac01bf2.gif",o=a(33),j=a(5),b=function(e){var t=e.result,a=e.show;return"loading"===t?Object(j.jsx)("div",{className:a,children:Object(j.jsx)("img",{src:d,alt:"loding",height:"111"})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.a.div,{className:a,initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[Object(j.jsxs)("h1",{children:[t.percentage,Object(j.jsx)("span",{children:"%"})]}),Object(j.jsx)("h1",{children:t.result})]})})},u=a(19).a.initializeApp({apiKey:"AIzaSyD0HIDSH8HYAsZZFv2bmtVewz5TE7b4YkY",authDomain:"friends-12bd0.firebaseapp.com",projectId:"friends-12bd0",storageBucket:"friends-12bd0.appspot.com",messagingSenderId:"306782589151",appId:"1:306782589151:web:f4a0abf7cc0c77ca8cd96a"}),p=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(""),s=Object(r.a)(n,2),d=s[0],o=s[1],p=Object(c.useState)("loading"),m=Object(r.a)(p,2),h=m[0],f=m[1],O=Object(c.useState)("hide"),x=Object(r.a)(O,2),g=x[0],v=x[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"form-div",children:Object(j.jsxs)("form",{className:"calc-form name",children:[Object(j.jsx)("img",{className:"img",src:l,alt:"Love calculator by name",height:"100",title:"Love calculator by name"}),Object(j.jsx)("h1",{className:"site-heading white pb-2",children:"Friendship Calculator"}),Object(j.jsxs)("div",{className:"row ml-0 mr-0",children:[Object(j.jsx)("div",{className:"col-md-12 col-12 ",children:Object(j.jsx)("input",{type:"text",className:"site-input",value:a,onChange:function(e){return i(e.target.value)},placeholder:"Your Name",required:!0})}),Object(j.jsx)("div",{className:"col-md-12 col-12 ",children:Object(j.jsx)("input",{type:"text",className:"site-input",value:d,onChange:function(e){return o(e.target.value)},placeholder:"Your Friend's Name",required:!0})})]}),Object(j.jsxs)("div",{className:"col-12 pt-4",children:[Object(j.jsx)("input",{type:"button",className:"site-submit",value:"Calculate",onClick:function(){fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=".concat(a,"&sname=").concat(d),{headers:{"x-rapidapi-host":"love-calculator.p.rapidapi.com","x-rapidapi-key":"6562bb095bmsh00dbc4b5518229ap16bb38jsn2cb0fd2988dd"}}).then((function(e){return e.json()})).then((function(e){console.log(e),f(e)})).catch((function(e){console.error(e)})),v("result-div"),function(){var e=u.database().ref("Friends"),t={name:a,friName:d};e.push(t)}()}.bind(undefined)}),Object(j.jsx)("br",{})]}),Object(j.jsx)(b,{result:h,show:g})]})})})};var m=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(p,{})})};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.69006c1e.chunk.js.map