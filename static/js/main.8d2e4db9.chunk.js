(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{246:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=n(15),s=n(19),u=n(87),l=n(88),h=n(57),p="RECEIVE_QUOTES",m={text:"",quotes:[]},d=Object(s.c)({themedQuotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LIT_TEXT":var n=t.text;return console.log("You typed something. This text has been set to state: ".concat(n)),Object(h.a)({},e,{text:n});case p:var a=t.quotes;return console.info("We just received this from the server: ".concat(a)),Object(h.a)({},e,{quotes:a});default:return e}}}),f=Object(l.createLogger)();n(104);var b=n(4),j=n(5),O=n(8),v=n(6),y=n(7),E=n(30),g=n(89),w=n.n(g),k=(n(211),n(90)),x=n.n(k);function C(e,t){var n={theme:e,text:t};return console.info("Here is the payload being sent to the server:"),console.info(n),function(t){return x()("https://cors-anywhere.herokuapp.com/http://127.0.0.1:5001/",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(n){return t(function(e,t){return{type:p,theme:e,quotes:t.quotes,receivedAt:Date.now()}}(e,n))})}}function T(e){return function(t,n){var a=n();if(a.themedQuotes&&a.themedQuotes.text)return t(C(e,a.themedQuotes.text));alert("Error: user has not entered any text!")}}var q=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(O.a)(this,Object(v.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(E.a)(Object(E.a)(n))),n}return Object(y.a)(t,e),Object(j.a)(t,[{key:"handleChange",value:function(e){this.props.updateLitText(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"lit-text-box"},r.a.createElement(w.a,{value:"",onChange:this.handleChange}))}}]),t}(r.a.Component),Q=Object(i.b)(null,{updateLitText:function(e){return{type:"UPDATE_LIT_TEXT",text:e}}})(q),_=function(e){function t(){return Object(b.a)(this,t),Object(O.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"left-container"},r.a.createElement(Q,null))}}]),t}(r.a.Component),I=n(53),N=n.n(I),D=n(94),L=n.n(D),A=function(e){function t(){return Object(b.a)(this,t),Object(O.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(j.a)(t,[{key:"_renderDropdownItems",value:function(){var e=this;return["family","identity","love","women","power","language","religion","death","justice","class","storytelling","nature","racism","education","survival","freedom","memory","coming of age","morality","war","fate","gender roles","growing up","time","isolation","guilt","christianity","friendship","marriage","community","tradition","home","appearances","heroism","fate and free will","america","work","redemption","perspective","resistance","corruption","duality","secrecy","art"].map(function(t){return r.a.createElement(N.a.Item,{key:t,onClick:function(){return e.props.dispatch(T(t))}},t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"theme-select"},r.a.createElement(L.a,{id:"theme-select-dropdown",title:"Pick a theme..."},this._renderDropdownItems()))}}]),t}(r.a.Component),J=Object(i.b)(null,{fetchQuotesByTheme:T})(A),P=function(e){function t(){return Object(b.a)(this,t),Object(O.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(j.a)(t,[{key:"_renderQuotes",value:function(){var e=this.props.quotes||[];return r.a.createElement("div",{className:"themed-quotes"},e.length>0?r.a.createElement("h2",null,"Quotes:"):null,r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",{key:e},e)})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"right-container"},r.a.createElement(J,{dispatch:this.props.dispatch}),r.a.createElement("hr",null),this._renderQuotes())}}]),t}(r.a.Component),U=(n(246),function(e){function t(){return Object(b.a)(this,t),Object(O.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lit-search-page"},r.a.createElement(_,null),r.a.createElement(P,{quotes:this.props.quotes,dispatch:this.props.dispatch}))}}]),t}(r.a.Component)),B=function(e){function t(){return Object(b.a)(this,t),Object(O.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(U,{quotes:this.props.quotes,dispatch:this.props.dispatch})}}]),t}(r.a.Component);var S,X=Object(i.b)(function(e){return{quotes:e.themedQuotes.quotes}})(B);c.a.render(r.a.createElement(i.a,{store:Object(s.d)(d,S,Object(s.a)(u.a,f))},r.a.createElement(X,null)),document.getElementById("root"))},95:function(e,t,n){e.exports=n(248)}},[[95,2,1]]]);
//# sourceMappingURL=main.8d2e4db9.chunk.js.map