$(document).ready(function(){function e(e,t,i,a){"open"===a?(e.velocity({height:i,paddingTop:20,paddingBottom:20,marginTop:20,marginBottom:10,opacity:1},{duration:500,begin:function(){t.removeClass("clickable")},complete:function(){t.addClass("clickable")}}),e.data({active:!0})):(e.velocity({height:0,opacity:0,paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0},{duration:500,begin:function(){t.removeClass("clickable")},complete:function(){t.addClass("clickable")}}),e.data({active:!1}))}function t(t,i,a,o,n){var d=t.find(".dot"),c=t.find(".main-path");"open"===n?(d.each(function(e){var t=$(this);TweenLite.to(t,.3,{y:-4,ease:Back.easeOut.config(5),delay:.1*e}),TweenLite.to(t,.3,{y:-1,ease:Back.easeOut.config(5),delay:.75+.1*e})}),setTimeout(function(){TweenLite.to(c,1,{onStart:function(){TweenLite.to(d,.3,{opacity:0})},onComplete:e(i,a,o,"open"),ease:Back.easeInOut.config(1.5),drawSVG:"120 100%",y:-1})},1400)):TweenLite.to(c,1,{onStart:e(i,a,o,"close"),onComplete:function(){TweenLite.to(d,.3,{opacity:1})},ease:Back.easeInOut.config(1.5),drawSVG:"0 90",y:0})}$(".work-experience").velocity({opacity:1,backgroundColor:"red"},{duration:800,delay:1e3});var i=$(".stroke-left, .stroke-right"),a=$("#main-path"),o=$("#dl-line");TweenLite.to(a,0,{y:-4,drawSVG:"66% 100%"}),TweenLite.to(i,0,{drawSVG:"100% 100%"});var n=$(".include-references");n.each(function(){var e=$(this),i=e.find(".ref-btn");i.addClass("clickable");var a=e.find(".ref-expand"),o=a.outerHeight(),n=e.find("svg"),d=n.find(".main-path");TweenLite.to(d,0,{drawSVG:"0 90"}),a.velocity({height:0,opacity:0},{duration:0}),a.data({active:!1}),i.click(function(){i.hasClass("clickable")&&(a.data("active")===!1?t(n,a,i,o,"open"):t(n,a,i,o,"close"))})});var d=$("nav");d.find("ul li").each(function(){var e=$(this),t=e.find("span.text-span"),n=e.find("span.icon-li-container"),d=n.outerWidth();n.data({active:!1}),e.hasClass("hidden-li")&&e.data({active:!1,typed:!1}),console.log(e.data()),e.click(function(){var e=$(this);if(e.hasClass("hidden-content")){var t=e.next("li"),d=t.attr("typed-text");t.data("typed")===!1&&t.data("active")===!1?t.velocity({opacity:1,height:18,paddingTop:6,paddingBottom:6},{visibility:"visible",duration:500,complete:function(){t.typed({strings:[d],typeSpeed:30,startDelay:100,showCursor:!1,onStringTyped:function(){t.data({typed:!0,active:!0})}})}}):t.data("typed")===!0&&t.data("active")?(console.log("run2"),t.data({typed:!0,active:!1}),t.velocity({opacity:0,height:0,paddingTop:0,paddingBottom:0},{visibility:"hidden",duration:500})):(console.log("run3"),t.data({typed:!0,active:!0}),t.velocity({opacity:1,height:18,paddingTop:6,paddingBottom:6},{visibility:"visible",duration:500}))}else if(e.hasClass("download")){var c="resume.pdf",l="Resume: Matt Wujek.pdf";if(n.data("active")===!1){n.data({active:!0}),n.velocity({opacity:1},{duration:300,visibility:"visible"});var s=TweenLite.to(a,.25,{y:0,ease:Back.easeInOut.config(5),onComplete:function(){TweenLite.to(o,.5,{drawSVG:"0% 100%"}),TweenLite.to(i,.3,{drawSVG:"100% 0%",opacity:0,onComplete:function(){s.reverse()}})}}).delay(.3);setTimeout(function(){TweenLite.to(a,1,{y:4,drawSVG:"0% 12%",ease:Back.easeOut.config(1)}),setTimeout(function(){TweenLite.to(o,.3,{drawSVG:"50% 50%"})},200)},1500),setTimeout(function(){n.velocity({opacity:0},{duration:300,visibility:"hidden",complete:function(){n.data({active:!1}),TweenLite.to(o,0,{delay:1,drawSVG:"0% 100%"}),TweenLite.to(a,0,{delay:1,y:-4,drawSVG:"66% 100%"}),TweenLite.to(i,0,{delay:1,opacity:1,drawSVG:"100% 100%"})}})},3e3)}}})})});