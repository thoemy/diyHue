(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[15],{132:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return M}));var n=c(14),a=c(2),s=c(16),r=c.n(s),i=c(105),o=c(12),l=c(121),u=c(27),j=c(110),d=c.n(j);function b(e,t,c){void 0===c&&(c=254);var n=1-e-t,a=(c/254).toFixed(2),s=a/t*e,r=a/t*n,i=1.656492*s-.354851*a-.255038*r,o=.707196*-s+1.655397*a+.036152*r,l=.051713*s-.121364*a+1.01153*r;return i>l&&i>o&&i>1?(o/=i,l/=i,i=1):o>l&&o>i&&o>1?(i/=o,l/=o,o=1):l>i&&l>o&&l>1&&(i/=l,o/=l,l=1),i=i<=.0031308?12.92*i:1.055*Math.pow(i,1/2.4)-.055,o=o<=.0031308?12.92*o:1.055*Math.pow(o,1/2.4)-.055,l=l<=.0031308?12.92*l:1.055*Math.pow(l,1/2.4)-.055,i=Math.round(255*i),o=Math.round(255*o),l=Math.round(255*l),isNaN(i)&&(i=0),isNaN(o)&&(o=0),isNaN(l)&&(l=0),"rgba("+Math.floor(i)+","+Math.floor(o)+","+Math.floor(l)+",1)"}function h(e){var t,c,n,a=2e4/e;return a<=66?(t=255,c=99.4708025861*Math.log(a)-161.1195681661,n=a<=19?0:138.5177312231*Math.log(a-10)-305.0447927307):(t=329.698727446*Math.pow(a-60,-.1332047592),c=288.1221695283*Math.pow(a-60,-.0755148492),n=255),t=t>255?255:t,c=c>255?255:c,n=n>255?255:n,"rgba("+Math.floor(t)+","+Math.floor(c)+","+Math.floor(n)+",1)"}function p(e,t,c){var n=.664511*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.154324*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.162028*(c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92),a=.283881*e+.668433*t+.047685*c,s=88e-6*e+.07231*t+.986039*c,r=(n/(n+a+s)).toFixed(4),i=(a/(n+a+s)).toFixed(4);return isNaN(r)&&(r=0),isNaN(i)&&(i=0),[parseFloat(r),parseFloat(i)]}var O=c.p+"static/media/nightsky.a7e58287.jpg",g=(c.p,c.p,c(6)),f=function(e){var t=e.HOST_IP,c=e.api_key,a=e.groupId,s=e.scenes,i=e.sceneModal,l=e.setSceneModal;function u(){l(!1)}return Object(g.jsxs)(d.a,{isOpen:i,onAfterOpen:function(){},onRequestClose:u,contentLabel:"Example Modal",children:[Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)("div",{className:"headline",children:"Scene Picker"}),Object(g.jsx)("div",{className:"iconbox",children:Object(g.jsx)("button",{onClick:u,children:Object(g.jsx)(o.o,{})})})]}),Object(g.jsx)("div",{className:"scenecontainer",children:Object.entries(s).filter((function(e){return e[1].group===a})).map((function(e){var a=Object(n.a)(e,2),s=a[0],i=a[1];return Object(g.jsxs)("div",{className:"scene",style:{background:"url(".concat(O,")"),backgroundSize:"cover"},onClick:function(){return function(e){r.a.put("".concat(t,"/api/").concat(c,"/groups/0/action"),{scene:e})}(s)},children:[Object(g.jsxs)("div",{className:"dimmer",children:[Object.entries(i.lightstates).map((function(e){var a,s=Object(n.a)(e,2),i=s[0],o=s[1];return Object(g.jsx)("div",{className:"color",style:{background:"".concat((a=o,"xy"in a?b(a.xy[0],a.xy[1],254):"ct"in a?h(a.ct):"rgba(200,200,200,1)"))},onClick:function(){return function(e,n){r.a.put("".concat(t,"/api/").concat(c,"/lights/").concat(e,"/state"),n)}(i,o)}})})),Object(g.jsx)("div",{className:"name",children:i.name})]}),Object(g.jsx)("div",{className:"dynamiccontrol",children:Object(g.jsx)("i",{className:"far fa-play-circle"})})]})}))})]})},x=c(21),v=function(e){var t=e.HOST_IP,c=e.api_key,n=e.id,a=e.light,s=function(e){console.log("Apply state "+JSON.stringify(e)),r.a.put("".concat(t,"/api/").concat(c,"/lights/").concat(n,"/state"),e)};return Object(g.jsxs)("div",{className:"groupCard light",children:[Object(g.jsxs)("div",{className:"row top",children:[Object(g.jsx)("div",{className:"gradient",style:function(){if(a.state.on)return{background:"xy"===a.state.colormode?b(a.state.xy[0],a.state.xy[1],254):"ct"===a.state.colormode?h(a.state.ct):"linear-gradient(90deg, rgba(255,212,93,1))"}}(),children:Object(g.jsx)(o.i,{})}),Object(g.jsx)("div",{className:"text",children:Object(g.jsxs)("p",{className:"name",children:[a.name," ",a.state.reachable||Object(g.jsx)(x.b,{title:"Unrechable"})]})}),Object(g.jsx)("div",{className:"switchContainer",children:Object(g.jsxs)("label",{className:"switch",children:[Object(g.jsx)("input",{type:"checkbox",defaultChecked:a.state.on,onChange:function(e){return s({on:e.currentTarget.checked})}}),Object(g.jsx)("span",{className:"slider"})]})})]}),Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"sliderContainer",children:Object(g.jsx)("input",{type:"range",min:"1",max:"254",defaultValue:"50",className:"slider",onChange:function(e){return s({bri:parseInt(e.currentTarget.value)})}})})})]})},m=c(109);function y(e){var t=e.HOST_IP,c=e.api_key,s=e.lights,o=e.groupLights,l=Object(a.useRef)(null),u=Object(a.useRef)(null),j=Object(a.useState)(!0),d=Object(n.a)(j,2),h=d[0],O=d[1];Object(a.useEffect)((function(){return O(!1),function(){O(!1)}}),[]);var f,x=[],v=Object(i.a)(o.entries());try{for(v.s();!(f=v.n()).done;){var y=Object(n.a)(f.value,2),N=(y[0],y[1]);console.log(N),"xy"in s[N].state&&x.push(b(s[N].state.xy[0],s[N].state.xy[1],254))}}catch(M){v.e(M)}finally{v.f()}var k=function(e){var n=e.rgb;console.log(e.rgb),console.log("Apply state "+JSON.stringify(e)),r.a.put("".concat(t,"/api/").concat(c,"/lights/").concat(o[e.index],"/state"),{xy:p(n.r,n.g,n.b)})};return Object(a.useEffect)((function(){l.current&&!u.current&&(u.current=new m.a.ColorPicker(l.current,{layout:[{component:m.a.ui.Wheel,options:{}}],colors:x}),u.current.on("input:end",k))}),[k]),Object(g.jsx)("div",{ref:l,className:h?"hide":"show"})}function N(e){var t=e.HOST_IP,c=e.api_key,s=e.group,i=e.groupId,o=Object(a.useRef)(null),l=Object(a.useRef)(null),u=Object(a.useState)(!0),j=Object(n.a)(u,2),d=j[0],b=j[1];Object(a.useEffect)((function(){return b(!1),function(){b(!1)}}),[]);var p=function(e){var n=e.kelvin,a=Math.floor((11e3-n)/25.5+153);console.log("#########"),console.log(a),console.log(h(s.action.ct)),console.log("Apply state "+JSON.stringify(e)),r.a.put("".concat(t,"/api/").concat(c,"/groups/").concat(i,"/action"),{ct:a})};return Object(a.useEffect)((function(){o.current&&!l.current&&(l.current=new m.a.ColorPicker(o.current,{layout:[{component:m.a.ui.Slider,options:{sliderType:"kelvin"}}],color:h(s.action.ct)}),l.current.on("input:end",p))}),[p]),Object(g.jsx)("div",{ref:o,className:d?"hide":"show"})}c(120);var k=function(e){var t=e.HOST_IP,c=e.api_key,s=e.id,j=e.group,d=e.lights,p=e.scenes,O=Object(a.useState)("closed"),x=Object(n.a)(O,2),m=x[0],k=x[1],M=Object(a.useState)(!1),S=Object(n.a)(M,2),_=S[0],w=S[1];return Object(g.jsxs)("div",{className:"groupCard",children:[Object(g.jsx)(f,{HOST_IP:t,api_key:c,groupId:s,scenes:p,sceneModal:_,setSceneModal:w}),Object(g.jsxs)("div",{className:"row top",children:[Object(g.jsx)("div",{className:"gradient",style:function(){if(j.state.any_on){var e,t="linear-gradient(45deg, ",c=100/j.lights.length,a=Object(i.a)(j.lights.entries());try{for(a.s();!(e=a.n()).done;){var s=Object(n.a)(e.value,2),r=s[0],o=s[1];"xy"===d[o].state.colormode?(1===j.lights.length&&(t+="rgba(200,200,200,1) 0%,"),t=t+b(d[o].state.xy[0],d[o].state.xy[1],254)+" "+Math.floor(c*(r+1))+"%,"):"ct"===d[o].state.colormode?(1===j.lights.length&&(t+="rgba(200,200,200,1) 0%,"),t=t+h(d[o].state.ct)+" "+Math.floor(c*(r+1))+"%,"):(1===j.lights.length&&(t+="rgba(200,200,200,1) 0%,"),t=t+"rgba(255,212,93,1) "+Math.floor(c*(r+1))+"%,")}}catch(l){a.e(l)}finally{a.f()}return{background:t.slice(0,-1)+")"}}}(),children:"Zone"===j.type?Object(g.jsx)(o.e,{style:{color:"#8400FF"}}):Object(g.jsx)(l.a,{style:{color:"#8400FF"}})}),Object(g.jsxs)("div",{className:"text",children:[Object(g.jsx)("p",{className:"name",children:j.name}),Object(g.jsxs)("p",{className:"subtext",children:[function(){var e,t=0,c=Object(i.a)(j.lights.entries());try{for(c.s();!(e=c.n()).done;){var a=Object(n.a)(e.value,2),s=(a[0],a[1]);!0===d[s].state.reachable&&(t+=1)}}catch(r){c.e(r)}finally{c.f()}return t}()," lamps online"]})]}),Object(g.jsx)("div",{className:"switchContainer",children:Object(g.jsxs)("label",{className:"switch",children:[Object(g.jsx)("input",{type:"checkbox",value:j.state.any_on,checked:j.state.any_on,onChange:function(e){return function(e){var n={on:e};j.state.any_on=e,console.log("Apply state "+JSON.stringify(n)),r.a.put("".concat(t,"/api/").concat(c,"/groups/").concat(s,"/action"),n)}(e.target.checked)}}),Object(g.jsx)("span",{className:"slider"})]})})]}),Object(g.jsx)("div",{className:"row background",children:Object(g.jsx)("div",{className:"sliderContainer",children:Object(g.jsx)("input",{type:"range",min:"1",max:"254",value:j.action.bri,step:"1",className:"slider",onChange:function(e){return function(e){var n={bri:e};j.action.bri=e,console.log("Apply state "+JSON.stringify(n)),r.a.put("".concat(t,"/api/").concat(c,"/groups/").concat(s,"/action"),n)}(parseInt(e.target.value))}})})}),Object(g.jsxs)("div",{className:"row colorpicker",children:["colorPicker"===m&&Object(g.jsx)(y,{HOST_IP:t,api_key:c,lights:d,groupLights:j.lights}),"colorTempPicker"===m&&Object(g.jsx)(N,{HOST_IP:t,api_key:c,groupId:s,group:j}),"lights"===m&&Object(g.jsx)("div",{className:"lights",children:j.lights.map((function(e){return Object(g.jsx)(v,{HOST_IP:t,api_key:c,id:e,light:d[e]},e)}))})]}),"closed"===m&&Object(g.jsx)("div",{className:"row bottom",children:Object(g.jsx)("div",{className:"expandbtn",children:Object(g.jsx)(o.b,{onClick:function(){return k("colorPicker")}})})})||Object(g.jsxs)("div",{className:"row bottom",children:[Object(g.jsx)("div",{className:"expandbtn",children:Object(g.jsx)(o.l,{onClick:function(){return k("colorPicker")}})}),Object(g.jsx)("div",{className:"expandbtn",children:Object(g.jsx)(o.g,{onClick:function(){return w(!0)}})}),Object(g.jsx)("div",{className:"expandbtn",children:Object(g.jsx)(o.c,{onClick:function(){return k("closed")}})}),Object(g.jsx)("div",{className:"expandbtn",children:Object(g.jsx)(o.i,{onClick:function(){return k("lights")}})}),Object(g.jsx)("div",{className:"expandbtn",children:Object(g.jsx)(u.b,{onClick:function(){return k("colorTempPicker")}})})]})]})};function M(e){var t=e.HOST_IP,c=e.API_KEY,s=Object(a.useState)({config:{},lights:{},groups:{},scenes:{}}),i=Object(n.a)(s,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){var e=function(){void 0!==c&&r.a.get("".concat(t,"/api/").concat(c)).then((function(e){console.log(e.data),l(e.data)})).catch((function(e){console.error(e)}))};e();var n=setInterval((function(){e()}),2e3);return function(){return clearInterval(n)}}),[t,c]),Object(g.jsx)("div",{className:"inner",children:Object(g.jsx)("div",{className:"cardGrid",children:Object.entries(o.groups).filter((function(e){return"Entertainment"!==e[1].type})).map((function(e){var a=Object(n.a)(e,2),s=a[0],r=a[1];return Object(g.jsx)(k,{api_key:c,HOST_IP:t,id:s,group:r,lights:o.lights,scenes:o.scenes},s)}))})})}}}]);
//# sourceMappingURL=15.b619a953.chunk.js.map