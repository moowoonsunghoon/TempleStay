(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(7),o=n.n(c),i=(n(14),n(1)),l=n(2),r=n(4),m=n(3),d=n(5),u=(n(15),function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"section0",ref:this.MyRef,style:{backgroundColor:"red",height:this.props.height},onWheel:this.props.WheelPage})}}]),t}(s.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"section1",ref:this.MyRef,style:{backgroundColor:"blue",height:this.props.height},onWheel:this.props.WheelPage})}}]),t}(s.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"section2",ref:this.MyRef,style:{backgroundColor:"black",height:this.props.height},onWheel:this.props.WheelPage})}}]),t}(s.Component),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).MyRef=a.a.createRef(),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"section3",ref:this.MyRef,style:{backgroundColor:"green",height:this.props.height},onWheel:this.props.WheelPage})}}]),t}(s.Component),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={scroll:0,height:window.innerHeight,remotebtn:[],index:0},n.WheelPage=function(e){var t=n.state,s=t.scroll,a=t.height,c=document.getElementsByClassName("section".concat(n.state.index))[0].classList,o=function(){return setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),0!==n.state.index&&document.getElementsByClassName("section".concat(n.state.index-1))[0].classList.remove("complete")},700)};if(e.deltaY>0&&s<=0)n.setState({scroll:a,index:1}),o();else if(e.deltaY>0&&s>0&&"complete"===c[1]){if(s===n.MyRef.current.MyRef.current.offsetTop)return;n.setState({scroll:s+a,index:n.state.index+1}),o()}else e.deltaY<0&&s>0&&"complete"===c[1]&&(n.setState({scroll:s-a,index:n.state.index-1}),setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),document.getElementsByClassName("section".concat(n.state.index+1))[0].classList.remove("complete")},700))},n.handleAction=function(e){n.setState({scroll:n.MyRef.current.MyRef.current.scrollHeight*e,index:e}),setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete")},700),document.getElementsByClassName("complete")[0].classList.remove("complete")},n.resize=function(){n.setState({height:window.innerHeight})},n.touchStartHandler=function(e){var t=n.state,s=t.scroll,a=t.height,c=document.getElementsByClassName("section".concat(n.state.index))[0].classList,o=function(){return setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),0!==n.state.index&&document.getElementsByClassName("section".concat(n.state.index-1))[0].classList.remove("complete")},700)};if(e.deltaY>0&&s<=0)n.setState({scroll:a,index:1}),o();else if(e.deltaY>0&&s>0&&"complete"===c[1]){if(s===n.MyRef.current.MyRef.current.offsetTop)return;n.setState({scroll:s+a,index:n.state.index+1}),o()}else e.deltaY<0&&s>0&&"complete"===c[1]&&(n.setState({scroll:s-a,index:n.state.index-1}),setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),document.getElementsByClassName("section".concat(n.state.index+1))[0].classList.remove("complete")},700))},n.touchMoveHandler=function(e){var t=n.state,s=t.scroll,a=t.height,c=document.getElementsByClassName("section".concat(n.state.index))[0].classList,o=function(){return setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),0!==n.state.index&&document.getElementsByClassName("section".concat(n.state.index-1))[0].classList.remove("complete")},700)};if(e.deltaY>0&&s<=0)n.setState({scroll:a,index:1}),o();else if(e.deltaY>0&&s>0&&"complete"===c[1]){if(s===n.MyRef.current.MyRef.current.offsetTop)return;n.setState({scroll:s+a,index:n.state.index+1}),o()}else e.deltaY<0&&s>0&&"complete"===c[1]&&(n.setState({scroll:s-a,index:n.state.index-1}),setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),document.getElementsByClassName("section".concat(n.state.index+1))[0].classList.remove("complete")},700))},n.touchEndHandler=function(e){var t=n.state,s=t.scroll,a=t.height,c=document.getElementsByClassName("section".concat(n.state.index))[0].classList,o=function(){return setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),0!==n.state.index&&document.getElementsByClassName("section".concat(n.state.index-1))[0].classList.remove("complete")},700)};if(e.deltaY>0&&s<=0)n.setState({scroll:a,index:1}),o();else if(e.deltaY>0&&s>0&&"complete"===c[1]){if(s===n.MyRef.current.MyRef.current.offsetTop)return;n.setState({scroll:s+a,index:n.state.index+1}),o()}else e.deltaY<0&&s>0&&"complete"===c[1]&&(n.setState({scroll:s-a,index:n.state.index-1}),setTimeout(function(){document.getElementsByClassName("section".concat(n.state.index))[0].classList.add("complete"),document.getElementsByClassName("section".concat(n.state.index+1))[0].classList.remove("complete")},700))},n.MyRef=a.a.createRef(),n.myref=a.a.createRef(),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){"ontouchstart"in window&&(window.addEventListener("touchstart",this.touchStartHandler),window.addEventListener("touchmove",this.touchMoveHandler),window.addEventListener("touchend",this.touchEndHandler)),window.onbeforeunload=function(){window.scrollTo(0,0)},window.addEventListener("resize",this.resize);for(var e=[],t=0;t<this.myref.current.children.length;t++)e.push(t);this.setState({remotebtn:e}),document.getElementsByClassName("section0")[0].classList.add("complete")}},{key:"componentDidUpdate",value:function(e,t){console.log(document.getElementsByClassName("section1")[0].classList);var n="height: 100%;\n      position: relative;\n      touch-action: none;\n      transform: translate3d(0px, ".concat(-1*this.state.scroll+"px",", 0px);\n      transition: all 700ms ease 0s;");document.body.getElementsByClassName("App")[0].style=n}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.state.remotebtn.map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{className:e.state.index===t?"remotebtn active":"remotebtn",onClick:function(){return e.handleAction(t)}}))});return a.a.createElement(s.Fragment,null,a.a.createElement("div",{ref:this.myref,className:"App"},a.a.createElement(u,{WheelPage:this.WheelPage,height:this.state.height}),a.a.createElement(h,{WheelPage:this.WheelPage,height:this.state.height}),a.a.createElement(f,{WheelPage:this.WheelPage,height:this.state.height}),a.a.createElement(p,{WheelPage:this.WheelPage,height:this.state.height,ref:this.MyRef})),a.a.createElement("div",{className:"remote"},a.a.createElement("ul",null,t||null)))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.bb4115a9.chunk.js.map