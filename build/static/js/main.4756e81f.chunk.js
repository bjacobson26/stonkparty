(this.webpackJsonpstonkparty=this.webpackJsonpstonkparty||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n(3),u=n(8),i=n(1);var l=n(16),s=n(17),f=n(4),p=n(23),d=n(22),m=n(2),h=n(18),E=n.n(h),b=n(12);function k(){var e=Object(i.a)(["\n  color: green\n"]);return k=function(){return e},e}function v(){var e=Object(i.a)(["\n  color: red;\n"]);return v=function(){return e},e}function g(){var e=Object(i.a)(["\n  font-size: 20px;\n  margin-top: 20px;\n"]);return g=function(){return e},e}function O(){var e=Object(i.a)(["\n  text-align: left;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 1px solid grey;\n  padding: 20px;\n  border-radius: 4px;\n  opacity: 1;\n  width: 80%;\n"]);return O=function(){return e},e}var T=n(42),D=m.a.div(O()),j=m.a.a(g()),S=m.a.p(v()),_=m.a.p(k()),y=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.price.shortName),r.a.createElement("p",null,T().format("MMMM Do YYYY, h:mm:ss a")),r.a.createElement("table",{className:"pure-table"},r.a.createElement("tr",null,r.a.createElement("th",null,"Market Price"),r.a.createElement("th",null,"% Change"),r.a.createElement("th",null,"Day High"),r.a.createElement("th",null,"Day Low")),r.a.createElement("tr",null,r.a.createElement("td",null,null==e?"...":"$".concat(e.price.regularMarketPrice)),r.a.createElement("td",null,null==e?"...":function(e){return r.a.createElement("div",null,e.price.regularMarketChangePercent>=0?r.a.createElement(_,null,(100*e.price.regularMarketChangePercent).toFixed(2),"%"):r.a.createElement(S,null,(100*e.price.regularMarketChangePercent).toFixed(2),"%"))}(e)),r.a.createElement("td",null,null==e?"...":"$".concat(e.price.regularMarketDayHigh)),r.a.createElement("td",null,null==e?"...":"$".concat(e.price.regularMarketDayLow)))))},A=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={lastRefreshAt:null},a.fetchData=a.fetchData.bind(Object(f.a)(a)),a.beginPolling=a.beginPolling.bind(Object(f.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){this.props.updateStockGraphData(this.props.stockTicker),this.props.updateStockQuote(this.props.stockTicker),this.props.updateWallStreetBetsData(this.props.stockTicker),this.setState({lastRefreshAt:T()}),this.beginPolling()}},{key:"beginPolling",value:function(){setTimeout(this.fetchData,3e4)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b.Animated,{animationIn:"bounceInLeft",animationOut:"fadeOut",isVisible:!0},r.a.createElement(D,null,r.a.createElement("h1",null,this.props.stockTicker),r.a.createElement("div",null,null===this.props.quote?r.a.createElement(E.a,{size:20,color:"green"}):y(this.props.quote)),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(j,{href:"",onClick:function(t){t.preventDefault(),e.props.onClick()}},"Remove")))))}}]),n}(r.a.Component),x=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).STONKS_API_URL||"http://localhost:5000",P=Object(o.b)((function(e){return{stocks:e.stocks}}),(function(e){return{updateStockGraphData:function(t){fetch("".concat(x,"/stock_data/").concat(t)).then((function(e){return e.json()})).then((function(n){e(function(e,t){return{type:"UPDATE_STOCK_GRAPH_DATA",stockTicker:e,stockGraphData:t}}(t,n))}))},updateStockQuote:function(t){fetch("".concat(x,"/stock_quote/").concat(t)).then((function(e){return e.json()})).then((function(n){e(function(e,t){return{type:"UPDATE_STOCK_QUOTE",stockTicker:e,stockQuote:t}}(t,n))}))},updateWallStreetBetsData:function(t){fetch("".concat(x,"/wsb/").concat(t)).then((function(e){return e.json()})).then((function(n){e(function(e,t){return{type:"UPDATE_WALL_STREET_BETS_DATA",stockTicker:e,wallStreetBetsData:t}}(t,n))}))}}}))(A),C=function(e){var t=e.stocks,n=e.onRemoveStockClick;return r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(P,Object.assign({key:t},e,{onClick:function(){return n(t)}}))})))},M=Object(o.b)((function(e){return{stocks:e.stocks}}),(function(e){return{onRemoveStockClick:function(t){e({type:"REMOVE_STONK",index:t})}}}))(C);function w(){var e=Object(i.a)(["\n  text-align: center;\n"]);return w=function(){return e},e}function R(){var e=Object(i.a)(["\n  font-size: 50px;\n  border: none;\n  border-bottom: 1px solid grey;\n  text-align: center;\n  opacity: 0.9;\n  display: block;\n  margin: auto;\n  width: 250px;\n"]);return R=function(){return e},e}var B=m.a.input(R()),U=m.a.p(w()),K=function(e){var t,n=e.dispatch;return r.a.createElement("div",null,r.a.createElement(U,null,"ENTER A STOCK SYMBOL"),r.a.createElement("form",{onSubmit:function(e){(e.preventDefault(),t.value.trim())&&(n({type:"ADD_STONK",stockTicker:t.value}),t.value="")}},r.a.createElement(B,{placeholder:"TSLA",ref:function(e){t=e}})))},L=K=Object(o.b)()(K);function W(){var e=Object(i.a)(["\n  font-style: italic;\n"]);return W=function(){return e},e}function N(){var e=Object(i.a)(["\n  border-bottom: 1px solid black;\n  padding: 5px;\n  margin: 10px;\n  font-size: 10pt;\n"]);return N=function(){return e},e}function F(){var e=Object(i.a)(["\n  padding: 20px;\n  height: 800px;\n  overflow: scroll;\n  border-radius: 3px;\n"]);return F=function(){return e},e}var I=n(42),Y=m.a.div(F()),q=m.a.div(N()),z=m.a.p(W()),G=function(e){return r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement(b.Animated,{animationIn:"zoomIn",key:e.name},function(e,t){return r.a.createElement(q,{key:t},r.a.createElement(z,null,e.author," said..."),r.a.createElement("p",null,e.body),r.a.createElement("small",null,I.unix(e.created_utc).format("MMMM Do YYYY, h:mm:ss a")," on /r/wallstreetbets"))}(e,e.name))})))},H=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).fetchData=a.fetchData.bind(Object(f.a)(a)),a.beginPolling=a.beginPolling.bind(Object(f.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){this.props.updateWsbFeed(),this.beginPolling()}},{key:"beginPolling",value:function(){setTimeout(this.fetchData,15e3)}},{key:"render",value:function(){var e;return r.a.createElement(b.Animated,{animationIn:"bounceInRight",animationOut:"fadeOut",isVisible:!0},r.a.createElement(Y,null,r.a.createElement("h1",null,"Feed"),(null===(e=this.props.feed)||void 0===e?void 0:e.length)>=1?G(this.props.feed):r.a.createElement(E.a,{size:20,color:"green"})))}}]),n}(r.a.Component),Q=n(47),V=n.n(Q),$=Object(o.b)((function(e){return{feed:e.feed}}),(function(e){return{updateWsbFeed:function(){V()("".concat(x,"/wsbFeed")).then((function(e){return e.json()})).then((function(t){e(function(e){return console.log("UPDATE_WSB_FEED",e),{type:"UPDATE_WSB_FEED",feed:e}}(t))}))}}}))(H);function J(){var e=Object(i.a)(["\n  width: 50%;\n"]);return J=function(){return e},e}function X(){var e=Object(i.a)(["\n  width: 50%;\n"]);return X=function(){return e},e}function Z(){var e=Object(i.a)(["\n  opacity: 0.9;\n  height: 1000px;\n  padding: 20px;\n  display: flex;\n"]);return Z=function(){return e},e}var ee=m.a.div(Z()),te=m.a.div(X()),ne=m.a.div(J()),ae=function(){return r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(L,null),r.a.createElement(M,null)),r.a.createElement(ne,null,r.a.createElement($,null)))},re=n(10);var ce=Object(u.b)({stocks:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_STONK":return[].concat(Object(re.a)(t),[{stockTicker:n.stockTicker,graphData:null,quote:null,wallStreetBetsData:null}]);case"REMOVE_STONK":return(e=Object(re.a)(t)).splice(n.index,1),e;case"UPDATE_STOCK_GRAPH_DATA":return(e=Object(re.a)(t)).map((function(e,t){return e.stockTicker===n.stockTicker&&(e.graphData=n.stockGraphData),e})),e;case"UPDATE_STOCK_QUOTE":return console.log("updating stock quote"),(e=Object(re.a)(t)).map((function(e,t){return e.stockTicker===n.stockTicker&&(e.quote=n.stockQuote),e})),e;case"UPDATE_WALL_STREET_BETS_DATA":return console.log("updating wsb data",n),(e=Object(re.a)(t)).map((function(e,t){return e.stockTicker===n.stockTicker&&(e.wallStreetBetsData=n.wallStreetBetsData),e})),e;default:return t}},feed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_WSB_FEED":return console.log(t),t.feed;default:return e}}}),oe=Object(u.c)(ce);Object(c.render)(r.a.createElement(o.a,{store:oe},r.a.createElement(ae,null)),document.getElementById("root"))},48:function(e,t,n){e.exports=n(112)}},[[48,1,2]]]);
//# sourceMappingURL=main.4756e81f.chunk.js.map