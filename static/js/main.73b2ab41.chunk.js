(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t){},107:function(e,t,n){},109:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(46),o=n.n(c),s=(n(57),n(7)),i=n(8),u=n(10),l=n(9),p=n(11),h=n(116),m=n(118),w=n(117),f=(n(59),n(21)),b=n.n(f),d=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={username:""},n.handleInputChange=function(e){n.setState({username:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.username;t.length&&(localStorage.setItem("@GoTwitter:username",t),n.props.history.push("/timeline"))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("img",{src:b.a,alt:"GoTwitter"}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{value:this.state.username,onChange:this.handleInputChange,placeholder:"Nome de usu\xe1rio"}),r.a.createElement("button",{type:"submit"},"Entrar")))}}]),t}(a.Component),v=n(12),g=n.n(v),E=n(15),O=n(51),j=n(47),k=n.n(j).a.create({baseURL:"http://localhost:3000"}),y=n(48),T=n.n(y),x=(n(107),n(49)),C=n.n(x),S=(n(109),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleLike=Object(E.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.tweet._id,e.next=3,k.post("likes/".concat(t));case 3:case"end":return e.stop()}},e,this)})),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.tweet;return r.a.createElement("li",{className:"tweet"},r.a.createElement("strong",null,e.author),r.a.createElement("p",null,e.content),r.a.createElement("button",{type:"button",onClick:this.handleLike},r.a.createElement("img",{src:C.a,alt:"Like"}),e.likes))}}]),t}(a.Component)),I=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={newTweet:"",tweets:[]},n.handleInputChange=function(e){n.setState({newTweet:e.target.value})},n.subscribeToEvents=function(){var e=T()("http://localhost:3000");e.on("tweet",function(e){n.setState({tweets:[e].concat(Object(O.a)(n.state.tweets))})}),e.on("like",function(e){n.setState({tweets:n.state.tweets.map(function(t){return t._id===e._id?e:t})})})},n.handleNewTweet=function(){var e=Object(E.a)(g.a.mark(function e(t){var a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(13==t.keyCode){e.next=2;break}return e.abrupt("return");case 2:return a=n.state.newTweet,r=localStorage.getItem("@GoTwitter:username"),e.next=6,k.post("tweets",{content:a,author:r});case 6:n.setState({newTweet:""});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.subscribeToEvents(),e.next=3,k.get("tweets");case 3:t=e.sent,this.setState({tweets:t.data});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"timeline-wrapper"},r.a.createElement("img",{height:24,src:b.a,alt:"GoTwitter"}),r.a.createElement("form",null,r.a.createElement("textarea",{value:this.state.newTweet,onChange:this.handleInputChange,onKeyDown:this.handleNewTweet,placeholder:"O que est\xe1 acontecendo?"})),r.a.createElement("ul",{className:"tweet-list"},this.state.tweets.map(function(e){return r.a.createElement(S,{key:e._id,tweet:e})})))}}]),t}(a.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(m.a,null,r.a.createElement(w.a,{path:"/",exact:!0,component:d}),r.a.createElement(w.a,{path:"/timeline",component:I})))}}]),t}(a.Component);o.a.render(r.a.createElement(N,null),document.getElementById("root"))},21:function(e,t,n){e.exports=n.p+"static/media/twitter.7bde2a6d.svg"},49:function(e,t,n){e.exports=n.p+"static/media/like.c71630b0.svg"},52:function(e,t,n){e.exports=n(114)},57:function(e,t,n){},59:function(e,t,n){}},[[52,2,1]]]);
//# sourceMappingURL=main.73b2ab41.chunk.js.map