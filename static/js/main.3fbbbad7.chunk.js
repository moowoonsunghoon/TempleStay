(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),a=n(7),c=n.n(a),i=(n(14),n(1)),r=n(2),l=n(4),h=n(3),u=n(5),m=(n(15),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"section0",ref:this.MyRef,style:{backgroundColor:"red",height:this.props.height},onWheel:this.props.WheelPage,onTouchStart:this.props.touchStartHandler,onTouchMove:this.props.touchMoveHandler})}}]),t}(o.Component)),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"section1",ref:this.MyRef,style:{backgroundColor:"blue",height:this.props.height},onWheel:this.props.WheelPage,onTouchStart:this.props.touchStartHandler,onTouchMove:this.props.touchMoveHandler})}}]),t}(o.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"section2",ref:this.MyRef,style:{backgroundColor:"black",height:this.props.height},onWheel:this.props.WheelPage,onTouchStart:this.props.touchStartHandler,onTouchMove:this.props.touchMoveHandler})}}]),t}(o.Component),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).MyRef=s.a.createRef(),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"section3",ref:this.MyRef,style:{backgroundColor:"green",height:this.props.height},onWheel:this.props.WheelPage,onTouchStart:this.props.touchStartHandler,onTouchMove:this.props.touchMoveHandler})}}]),t}(o.Component),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={scroll:0,height:window.innerHeight,remotebtn:[],index:0,touchscroll:0},n.WheelPage=function(e){var t=n.state,o=t.scroll,s=t.height,a=document.getElementsByClassName("section".concat(n.state.index))[0].classList,c=function(){return setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),0!==n.state.index&&document.getElementsByClassName("section".concat(n.state.index-1))[0].classList.remove("complete")},700)};if(e.deltaY>0&&o<=0)n.setState({scroll:s,index:1}),c();else if(e.deltaY>0&&o>0&&"complete"===a[1]){if(o===n.MyRef.current.MyRef.current.offsetTop)return;n.setState({scroll:o+s,index:n.state.index+1}),c()}else e.deltaY<0&&o>0&&"complete"===a[1]&&(n.setState({scroll:o-s,index:n.state.index-1}),setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),document.getElementsByClassName("section".concat(n.state.index+1))[0].classList.remove("complete")},700))},n.handleAction=function(e){n.setState({scroll:n.MyRef.current.MyRef.current.scrollHeight*e,index:e}),setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete")},700),document.getElementsByClassName("complete")[0].classList.remove("complete")},n.resize=function(){n.setState({height:window.innerHeight})},n.touchStartHandler=function(e){n.setState({touchscroll:e.touches[0].pageY}),e.preventDefault()},n.touchMoveHandler=function(e){var t=n.state,o=t.scroll,s=t.height,a=t.touchscroll,c=document.getElementsByClassName("section".concat(n.state.index))[0].classList,i=function(){return setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),0!==n.state.index&&document.getElementsByClassName("section".concat(n.state.index-1))[0].classList.remove("complete")},700)};if(e.touches[0].pageY<a&&o<=0)n.setState({scroll:s,index:1}),i();else if(e.touches[0].pageY<a&&o>0&&"complete"===c[1]){if(o===n.MyRef.current.MyRef.current.offsetTop)return;n.setState({scroll:o+s,index:n.state.index+1}),i()}else e.touches[0].pageY>a&&o>0&&"complete"===c[1]&&(n.setState({scroll:o-s,index:n.state.index-1}),setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),document.getElementsByClassName("section".concat(n.state.index+1))[0].classList.remove("complete")},700));e.preventDefault()},n.MyRef=s.a.createRef(),n.myref=s.a.createRef(),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.removeEventListener("scroll",function(e){e.preventDefault()}),window.onbeforeunload=function(){window.scrollTo(0,0)},document.addEventListener("touchstart",this.touchStartHandler),document.addEventListener("touchmove",this.touchMoveHandler),document.addEventListener("resize",this.resize);for(var e=[],t=0;t<this.myref.current.children.length;t++)e.push(t);this.setState({remotebtn:e}),document.getElementsByClassName("section0")[0].classList.add("complete")}},{key:"componentDidUpdate",value:function(e,t){var n="height: 100%;\n      position: relative;\n      touch-action: none;\n      transform: translate3d(0px, ".concat(-1*this.state.scroll+"px",", 0px);\n      transition: all 700ms ease 0s;");document.body.getElementsByClassName("App")[0].style=n}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.state.remotebtn.map(function(t){return s.a.createElement("li",{key:t},s.a.createElement("span",{className:e.state.index===t?"remotebtn active":"remotebtn",onClick:function(){return e.handleAction(t)}}))});return s.a.createElement(o.Fragment,null,s.a.createElement("div",{ref:this.myref,className:"App"},s.a.createElement(m,{WheelPage:this.WheelPage,touchstart:this.touchStartHandler,touchmove:this.touchMoveHandler,height:this.state.height}),s.a.createElement(d,{WheelPage:this.WheelPage,touchstart:this.touchStartHandler,touchmove:this.touchMoveHandler,height:this.state.height}),s.a.createElement(p,{WheelPage:this.WheelPage,touchstart:this.touchStartHandler,touchmove:this.touchMoveHandler,height:this.state.height}),s.a.createElement(f,{WheelPage:this.WheelPage,touchstart:this.touchStartHandler,touchmove:this.touchMoveHandler,height:this.state.height,ref:this.MyRef})),s.a.createElement("div",{className:"remote"},s.a.createElement("ul",null,t||null)))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.3fbbbad7.chunk.js.map