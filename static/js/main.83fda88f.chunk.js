(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),r=n.n(l),o=(n(9),n(1)),u=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],l=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,c.a.createElement("a",{href:"https://github.com/IZUMIRU/hooks/blob/master/src/UseState/index.tsx"},"UseState")),c.a.createElement("p",null,n),c.a.createElement("button",{onClick:function(){return l(n+1)}},"Add"),c.a.createElement("button",{onClick:function(){return l(n-1)}},"Sub"),c.a.createElement("button",{onClick:function(){return l(0)}},"Reset"))},s=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){console.log("UseEffect: ".concat(n))})),c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,c.a.createElement("a",{href:"https://github.com/IZUMIRU/hooks/blob/master/src/UseEffect/index.tsx"},"UseEffect")),c.a.createElement("p",null,"console.log(UseEffect: ",n,")"),c.a.createElement("button",{onClick:function(){return l(n+1)}},"Add"),c.a.createElement("button",{onClick:function(){return l(n-1)}},"Sub"),c.a.createElement("button",{onClick:function(){return l(0)}},"Reset"))},m=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(0),u=Object(o.a)(r,2),s=u[0],m=u[1],i=Object(a.useMemo)((function(){return function(e){for(var t=0;t<1e9;)t++;return e}(s)}),[s]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,c.a.createElement("a",{href:"https://github.com/IZUMIRU/hooks/blob/master/src/UseMemo/index.tsx"},"UseMemo")),c.a.createElement("p",null,"slow"),c.a.createElement("p",null,i),c.a.createElement("button",{onClick:function(){return m(s+1)}},"Add"),c.a.createElement("button",{onClick:function(){return m(s-1)}},"Sub"),c.a.createElement("button",{onClick:function(){return m(0)}},"Reset"),c.a.createElement("p",null,"fast\uff08useMemo\uff09"),c.a.createElement("p",null,n),c.a.createElement("button",{onClick:function(){return l(n+1)}},"Add"),c.a.createElement("button",{onClick:function(){return l(n-1)}},"Sub"),c.a.createElement("button",{onClick:function(){return l(0)}},"Reset"))},i=new Set,b=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(0),u=Object(o.a)(r,2),s=u[0],m=u[1],b=Object(a.useCallback)((function(){l(n+1)}),[n]),E=Object(a.useCallback)((function(){m(s+1)}),[s]);return i.add(b),i.add(E),c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,c.a.createElement("a",{href:"https://github.com/IZUMIRU/hooks/blob/master/src/UseCallback/index.tsx"},"useCallback")),c.a.createElement("p",null,"Counter1: ",n),c.a.createElement("p",null,"Counter2: ",i.size),c.a.createElement("button",{onClick:b},"Add"),c.a.createElement("button",{onClick:E},"Add Counter2"))},E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,c.a.createElement("a",{href:"https://ja.reactjs.org/docs/hooks-intro.html"},"React Hooks")),c.a.createElement(u,null),c.a.createElement("hr",null),c.a.createElement(s,null),c.a.createElement("hr",null),c.a.createElement(m,null),c.a.createElement("hr",null),c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.83fda88f.chunk.js.map