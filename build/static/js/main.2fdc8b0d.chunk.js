(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),r=n(10),o=n.n(r),c=n(6),a=n(4);n(16);function u(){var t=[20,230,Math.floor(255*Math.random())].sort((function(){return Math.random()<.5?-1:1}));return"rgb(".concat(t[0],",").concat(t[1],",").concat(t[2],")")}function h(t){for(var e=t.length;e;){var n=Math.floor(Math.random()*e--),i=[t[e],t[n]];t[n]=i[0],t[e]=i[1]}return t}var l=function(t){return new Promise((function(e){return setTimeout(e,t)}))};function f(t){var e=[];return t.forEach((function(n,i){e.push({x1:t[i].x,y1:t[i].y,x2:i===t.length-1?t[0].x:t[i+1].x,y2:i===t.length-1?t[0].y:t[i+1].y,stroke:n.fill})})),e}var d=!1,v=0,b=[],j=[],p=0,x=n(0);function g(t){var e=t.isResult,n=t.points,i=t.lines,s=t.addPoint,r=e?"result":"process";return Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{style:{margin:"0"},children:r}),Object(x.jsxs)("svg",{onClick:e?null:function(t){s(t)},className:"rect",style:{border:"1px solid black"},width:"200",height:"200",children:[n.map((function(t){return Object(x.jsx)("circle",{cx:t.x,cy:t.y,r:"5",fill:t.fill},t.x+t.y+t.fill+r)})),i.map((function(t){return Object(x.jsx)("line",{x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stroke:t.stroke,strokeWidth:"2"},t.x1+t.y1+t.x2+t.y2+t.stroke+r)}))]})]})}n(18);function y(t){var e=t.points,n=t.distance;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h3",{children:["Points (",e.length,"))"]}),Object(x.jsxs)("div",{style:{width:"300px"},children:[e.map((function(t,e){return Object(x.jsxs)("div",{className:"point-block",children:["x:",t.x," y:",t.y]},t.x+t.y+t.fill)})),Object(x.jsxs)("div",{children:["Route length:",n]})]})]})}var m=n(9),O=n.n(m),k=n(11),_=n(2),M=n(3),w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;Object(_.a)(this,t),this.gene=Array.isArray(e)?e.slice(0):this.rndGene(e),this.score=0}return Object(M.a)(t,[{key:"rndGene",value:function(t){return h(new Array(t).fill(0).map((function(t,e){return e})))}},{key:"setScore",value:function(t){this.score=t}},{key:"toString",value:function(){return this.gene.join("-")}}]),t}(),F=function(){function t(e){Object(_.a)(this,t),this.x_rate=e.x_rate||.7,this.mutation_rate=e.mutation_rate||.005,this.life_count=e.life_count||50,this.gene_length=e.gene_length||100,this.mutation_count=0,this.generation=0,this.lives=[],this.scores=0,this.best=null,this.rate=e.rate,this.xFunc=e.xFunc,this.mFunc=e.mFunc;for(var n=0;n<this.life_count;n++)this.lives.push(new w(this.gene_length))}return Object(M.a)(t,[{key:"doRate",value:function(){var t=this;this.scores=0;var e=-1;this.lives.map((function(n){n.setScore(t.rate(n.gene)),n.score>e&&(e=n.score,t.best=n),t.scores+=n.score}))}},{key:"bear",value:function(t,e){var n;return n=Math.random()<this.x_rate?this.xFunc(t,e):t.gene.slice(0),Math.random()<this.mutation_rate&&(n=this.mFunc(n),this.mutation_count++),new w(n)}},{key:"getOne",value:function(){for(var t=this.scores,e=this.lives,n=Math.random()*t,i=0,s=e.length;i<s;i++){var r=e[i];if((n-=r.score)<=0)return r}}},{key:"newChild",value:function(){return this.bear(this.getOne(),this.getOne())}},{key:"next",value:function(){this.generation++,this.doRate();var t=[];for(t.push(this.best),t.push(new w(this.gene_length));t.length<this.life_count;)t.push(this.newChild());return this.lives=t,this.best.gene.slice(0)}}]),t}(),N=function(){function t(e,n){Object(_.a)(this,t),this.nodes=[],this.orders=[],this.r=4,this.mutation_rate=.05,this.is_running=!1,this._onstart=e,this._onstop=n}return Object(M.a)(t,[{key:"prepareNodesAndGA",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;this.is_running=!1,this.n=e.length,this.life_count=n,this.nodes=[],this.orders=[],e.forEach((function(e,n){t.nodes.push(e),t.orders.push(n)})),h(this.orders),this.orders.push(this.orders[0]),this.ga=new F({life_count:this.life_count,mutation_rate:this.mutation_rate,gene_length:this.n,rate:this.rate.bind(this),xFunc:this.xFunc.bind(this),mFunc:this.mFunc.bind(this)})}},{key:"rate",value:function(t){return 1/this.getDistance(t)}},{key:"xFunc",value:function(t,e){var n=Math.floor(Math.random()*(this.n-2))+1,i=Math.floor(Math.random()*(this.n-n))+n,s=e.gene.slice(n,i),r=t.gene.slice(0,n);return s.concat(e.gene).map((function(t){r.includes(t)||r.push(t)})),r}},{key:"mFunc",value:function(t){for(var e=0,n=0,i=t.length;e===n;)e=Math.floor(Math.random()*i),n=Math.floor(Math.random()*i);if(e>n){var s=[n,e];e=s[0],n=s[1]}var r=[function(t,e,n){var i=t[e];t[e]=t[n],t[n]=i},function(t,e,n){var i=t.slice(e,n).reverse();t.splice.apply(t,[e,n-e].concat(Object(c.a)(i)))},function(t,e,n){var i=t.splice(e,n-e);t.splice.apply(t,[Math.floor(Math.random()*t.length),0].concat(Object(c.a)(i)))}];return r[Math.floor(Math.random()*r.length)](t,e,n),t}},{key:"getDistance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=0,n=this.nodes;return t.concat(t[0]).reduce((function(t,i){return e+=Math.sqrt(Math.pow(n[t].x-n[i].x,2)+Math.pow(n[t].y-n[i].y,2)),i})),e}},{key:"run",value:function(){var t=Object(k.a)(O.a.mark((function t(e){var n,i,s,r,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=-1,i=0;case 2:if(!this.is_running){t.next=19;break}if(this.orders=this.ga.next(),s=this.ga,r=s.best,o=s.generation,n===r.score){t.next=10;break}n=r.score,i=o,t.next=13;break;case 10:if(!(o-i>=5e3)){t.next=13;break}return this.stop(),t.abrupt("break",19);case 13:return this.ga.generation%10===0&&(console.log(this.orders),console.log(r)),e({orders:this.orders,distance:r.score}),t.next=17,l(1);case 17:t.next=2;break;case 19:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"start",value:function(t){this.is_running=!0,this.run(t),"function"===typeof this._onstart&&this._onstart()}},{key:"stop",value:function(){this.is_running=!1,"function"===typeof this._onstop&&this._onstop()}}]),t}();function S(){var t=Object(i.useState)(d),e=Object(a.a)(t,2),n=e[0],s=e[1],r=Object(i.useState)(v),o=Object(a.a)(r,2),h=(o[0],o[1],Object(i.useState)(b)),l=Object(a.a)(h,2),m=l[0],O=l[1],k=Object(i.useState)(j),_=Object(a.a)(k,2),M=_[0],w=_[1],F=Object(i.useState)(p),S=Object(a.a)(F,2),A=S[0],R=S[1],E=Object(i.useMemo)((function(){return new N((function(){}),(function(){}))}),[]),C=function(t){w(function(t,e){return f(e.map((function(e,n){return t[e]})))}(m,t.orders)),R(E.getDistance(t.orders))};return Object(x.jsxs)("div",{className:"tsp-board-container",children:[Object(x.jsxs)("div",{className:"board-container",children:[Object(x.jsxs)("div",{className:"panel-container",children:[Object(x.jsx)(g,{isResult:!1,points:m,lines:M,addPoint:function(t){O([].concat(Object(c.a)(m),[{x:t.nativeEvent.offsetX,y:t.nativeEvent.offsetY,city:m.length+1,fill:u()}]))}}),Object(x.jsx)("div",{style:{width:"2vw"}}),Object(x.jsx)(g,{isResult:!0,points:m,lines:M})]}),Object(x.jsx)("button",{className:"handle-button",onClick:function(t){n?(s(!1),E.stop()):(s(!0),E.prepareNodesAndGA(m,100),w(f(m)),E.start(C))},children:n?"stop":"start"})]}),Object(x.jsx)(y,{points:m,distance:A})]})}var A=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(S,{})})};o.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.2fdc8b0d.chunk.js.map