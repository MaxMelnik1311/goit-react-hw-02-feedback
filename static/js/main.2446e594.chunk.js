(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=n(4),u=n(5),i=n(6),s=n(9),m=n(7),b=n(10),d=n(8),v=n.n(d);var p=function(e){var t=e.options,n=e.onLeaveFeedback;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("button",{key:v.a.generate(),type:"button",onClick:function(){return n(e)}},e)})))};var f=function(e){var t=e.options,n=e.title,a=e.onLeaveFeedback,c=e.statTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,n),r.a.createElement(p,{options:t,onLeaveFeedback:a}),r.a.createElement("h1",null,c))};var h=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,l=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Good: ",t),r.a.createElement("h3",null,"Neutral: ",n),r.a.createElement("h3",null,"Bad: ",a),r.a.createElement("h3",null,"Total: ",c),r.a.createElement("h3",null,"Positive feedback: ",l,"%"))};var E=function(e){var t=e.message;return r.a.createElement("h3",null,t)},g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0},n.plus=function(e){n.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},n.countTotalFeedbacks=function(){return Object.values(n.state).reduce((function(e,t){return e+t}),0)},n.countPercentage=function(e,t){return e/t*100},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedbacks(),l=this.countPercentage(t,c);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:"Please give feedback",options:Object.keys(this.state),onLeaveFeedback:this.plus,statTitle:"Statistics"}),c>0?r.a.createElement(h,{good:t,neutral:n,bad:a,total:c,positivePercentage:l}):r.a.createElement(E,{message:"No feedback given"}))}}]),t}(a.Component);l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.2446e594.chunk.js.map