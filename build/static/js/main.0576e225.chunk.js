(this.webpackJsonpdsh=this.webpackJsonpdsh||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),l=(n(13),n(1)),c=n(2),u=n(4),s=n(3),d=n(7);function m(e){var t={background:e.value?"#66ccff":"#fff",border:"2px solid #999",fontSize:"24px",fontWeight:"bold",textAlign:"center",lineHeight:"107px"};return a.a.createElement("div",{style:t,onClick:e.onClick},e.value)}function h(e){var t=this;return a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",border:"2px solid #999",width:"337px",height:"337px",margin:"auto",boxSizing:"border-box"}},[0,1,2,3,4,5,6,7,8].map((function(n){return a.a.createElement(m,{key:n,value:e.value[n],onClick:e.onClick.bind(t,n)})})))}function f(e){return a.a.createElement("div",null,a.a.createElement("button",{onClick:e.onClick},"Retry"),e.message)}var v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).componentWillMount=function(){r.setState({order:r.randomOrder()})},r.gameStyle={margin:"50px"},r.correctOrder=[1,2,3,4,5,6,7,8,null],r.handleRetry=function(e){var t=r.randomOrder();r.setState({order:t})},r.handleSelect=function(e){if(r.state.order[e]){var t=r.move(e);if(1===t.length){var n=Object(d.a)(r.state.order);n[t]=n[e],n[e]=null,r.checkWin(n)?r.setState({order:n,message:"congratulations"}):r.setState({order:n})}}},r.randomOrder=function(){for(var e=[1,2,3,4,5,6,7,8],t=7;t>=0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[n];e[n]=e[t],e[t]=r}return e.push(null),e},r.move=function(e){return[[1,3],[0,2,4],[1,5],[0,4,6],[1,3,5,7],[2,4,8],[3,7],[4,6,8],[5,7]][e].filter((function(e){return!r.state.order[e]}))},r.checkWin=function(e){return e.toString()===r.correctOrder.toString()},r.state={order:[1,2,3,4,5,6,7,8,null],message:"handling the puzzle"},r}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{style:this.gameStyle},a.a.createElement(h,{value:this.state.order,onClick:this.handleSelect})),a.a.createElement("div",null,a.a.createElement(f,{onClick:this.handleRetry,message:this.state.message})))}}]),n}(r.Component),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(v,null))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0576e225.chunk.js.map