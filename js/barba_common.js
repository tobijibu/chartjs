hljs.initHighlightingOnLoad(),window.onload=function(){transitionCompleted(),ga("send","pageview",location.pathname)};var prt=document.location.protocol,barba="http:"==prt||"https:"==prt;if(barba){Barba.Pjax.start(),Barba.Dispatcher.on("linkClicked",function(n,t){linkClicked()}),Barba.Dispatcher.on("initStateChange",function(n){initStateChange()}),Barba.Dispatcher.on("newPageReady",function(n,t,i,a){newPageReady(n,t,i,a),ga("send","pageview",location.pathname)}),Barba.Dispatcher.on("transitionCompleted",function(currentStatus,prevStatus){hljs.initHighlighting.called=!1,hljs.initHighlighting();for(let js of document.querySelectorAll("script.load"))null!=js&&eval(js.innerHTML);transitionCompleted()});var HideShowTransition=Barba.BaseTransition.extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){window.scrollTo(0,0),this.done()}});Barba.Pjax.getTransition=function(){return HideShowTransition}}