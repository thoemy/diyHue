(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[14],{163:function(e,c,t){"use strict";t.d(c,"a",(function(){return i}));var n=t(31),s=t(164),r=t.n(s),a=t(7);function i(e){var c=e.type,t=e.message,s=e.duration,i=e.setType;return Object(a.jsx)(r.a,{duration:s,persistOnHover:!0,children:Object(a.jsx)("div",{className:"notificationContainer",children:Object(a.jsxs)("div",{className:"notification ".concat(c),children:[Object(a.jsx)("p",{children:t}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(n.q,{onClick:function(){return i("none")}})})]})})})}},203:function(e,c,t){"use strict";t.r(c);var n=t(36),s=t(2),r=t(60),a=t.n(r),i=t(88),o=t(31),l=t(188),j=t(165),d=(t(166),t(7)),b=function(e){var c=e.HOST_IP,t=e.api_key,n=e.id,s=e.device,r=e.setType,b=e.setMessage,u=function(){a.a.delete("".concat(c,"/api/").concat(t,"/sensors/").concat(n)).then((function(e){b("Device successfully deleted"),r("none"),r("success")})).catch((function(e){console.error(e),b("Error occured, check browser console"),r("none"),r("error")}))};return Object(d.jsxs)("div",{className:"card device",children:[Object(d.jsxs)("div",{className:"row1",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(o.m,{})}),Object(d.jsx)("div",{className:"text",children:s.name})]}),Object(d.jsx)("div",{className:"row2",children:Object(d.jsxs)("div",{className:"text",children:["battery"in s.config&&function(){var e=s.config.battery,c=e+"%";return e>90?Object(d.jsx)(l.a,{title:c}):e>70?Object(d.jsx)(l.b,{title:c}):e>40?Object(d.jsx)(l.d,{title:c}):Object(d.jsx)(l.c,{title:c})}(),"ModelID: ",s.modelid," ",Object(d.jsx)("br",{}),"Type: ",s.type," ",Object(d.jsx)("br",{}),"Protocol: ",s.protocol," ",Object(d.jsx)("br",{})]})}),Object(d.jsxs)("div",{className:"row3",children:[Object(d.jsx)("div",{className:"dropdown"})," ",Object(d.jsx)("div",{className:"switchContainer",children:Object(d.jsxs)("label",{className:"switch",children:[Object(d.jsx)("input",{type:"checkbox",defaultChecked:s.config.on,onChange:function(e){return i=e.currentTarget.checked,void a.a.put("".concat(c,"/api/").concat(t,"/sensors/").concat(n,"/config"),{on:i}).then((function(e){b(s.name+" successfully "+(i?"enabled":"disabled")),r("none"),r("success")})).catch((function(e){console.error(e),b("Error occured, check browser console"),r("none"),r("error")}));var i}}),Object(d.jsx)("span",{className:"slider"})]})}),Object(d.jsx)("div",{className:"btn red",children:Object(d.jsx)(i.a,{title:"Delete",onClick:function(){Object(j.confirmAlert)({title:"Delete device "+s.name,message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){return u()}},{label:"No"}]})}})})]})]})},u=t(163);c.default=function(e){var c=e.HOST_IP,t=e.API_KEY,r=Object(s.useState)({}),i=Object(n.a)(r,2),o=i[0],l=i[1],j=Object(s.useState)("none"),O=Object(n.a)(j,2),h=O[0],v=O[1],x=Object(s.useState)("no message"),f=Object(n.a)(x,2),m=f[0],p=f[1];return Object(s.useEffect)((function(){var e=function(){void 0!==t&&a.a.get("".concat(c,"/sensors")).then((function(e){console.log(e.data),l(e.data)})).catch((function(e){console.error(e)}))};e();var n=setInterval((function(){e()}),2e3);return function(){return clearInterval(n)}}),[c,t]),Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("div",{className:"inner",children:Object(d.jsxs)("div",{className:"devicecontainer",children:["none"!==h&&Object(d.jsx)(u.a,{type:h,message:m,duration:"5000",setType:v}),Object(d.jsx)("div",{className:"devicecard",children:Object.entries(o).map((function(e){var s=Object(n.a)(e,2),r=s[0],a=s[1];return"none"!==a.protocol&&Object(d.jsx)(b,{HOST_IP:c,api_key:t,id:r,device:a,setType:v,setMessage:p},r)}))})]})})})}}}]);
//# sourceMappingURL=14.d6b95d59.chunk.js.map