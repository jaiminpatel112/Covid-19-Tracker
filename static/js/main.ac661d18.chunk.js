(this.webpackJsonpcovid19_tracker_application=this.webpackJsonpcovid19_tracker_application||[]).push([[0],{33:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),n=c.n(a),r=c(25),i=c.n(r),j=(c(33),c(12)),o=c(6),d=c(26),l=(c(34),c(10)),x=c.n(l),h=c(27),b=c(11),u=c(15);c(55);var O=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),i=Object(j.a)(r,2),l=i[0],O=i[1],p=Object(a.useState)(""),g=Object(j.a)(p,2),m=g[0],y=g[1];Object(a.useEffect)((function(){x.a.all([x.a.get("https://corona.lmao.ninja/v2/all"),x.a.get("https://corona.lmao.ninja/v2/countries")]).then((function(e){n(e[0].data),O(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var v=new Date(parseInt(c.updated)).toString(),T=l.filter((function(e){return""!==m?e.country.toLowerCase().includes(m):e})).map((function(e,t){return Object(s.jsx)(o.a,{bg:"light",text:"dark",className:"text-center",style:{margin:"10px"},children:Object(s.jsxs)(o.a.Body,{children:[Object(s.jsx)(o.a.Img,{variant:"top",src:e.countryInfo.flag}),Object(s.jsx)(o.a.Title,{children:e.country}),Object(s.jsxs)(o.a.Text,{children:["Cases: ",e.cases]}),Object(s.jsxs)(o.a.Text,{children:["TodayCases: ",e.todayCases]}),Object(s.jsxs)(o.a.Text,{children:["Deaths: ",e.deaths]}),Object(s.jsxs)(o.a.Text,{children:["TodayDeaths: ",e.todayDeaths]}),Object(s.jsxs)(o.a.Text,{children:["Recovered: ",e.recovered]}),Object(s.jsxs)(o.a.Text,{children:["TodayRecovered: ",e.todayRecovered]}),Object(s.jsxs)(o.a.Text,{children:["Active: ",e.active]})]})},t)})),f="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Coronavirus_cartoon.svg/987px-Coronavirus_cartoon.svg.png";return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsxs)("h1",{className:"header",style:{textAlign:"center"},children:[Object(s.jsx)(u.a,{src:f,rounded:!0,style:{width:"5%"}})," COVID 19 LIVE STATS ",Object(s.jsx)(u.a,{src:f,rounded:!0,style:{width:"5%"}})," "]})}),Object(s.jsxs)(d.a,{style:{margin:"10px"},children:[Object(s.jsxs)(o.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"},children:[Object(s.jsxs)(o.a.Body,{children:[Object(s.jsx)(o.a.Title,{children:"Coronavirus Cases"}),Object(s.jsx)(o.a.Text,{children:c.cases})]}),Object(s.jsx)(o.a.Footer,{children:Object(s.jsxs)("small",{children:["Last updated ",v]})})]}),Object(s.jsxs)(o.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"},children:[Object(s.jsxs)(o.a.Body,{children:[Object(s.jsx)(o.a.Title,{children:"Deaths"}),Object(s.jsx)(o.a.Text,{children:c.deaths})]}),Object(s.jsx)(o.a.Footer,{children:Object(s.jsxs)("small",{children:["Last updated ",v]})})]}),Object(s.jsxs)(o.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"},children:[Object(s.jsxs)(o.a.Body,{children:[Object(s.jsx)(o.a.Title,{children:"Recovered"}),Object(s.jsx)(o.a.Text,{children:c.recovered})]}),Object(s.jsx)(o.a.Footer,{children:Object(s.jsxs)("small",{children:["Last updated ",v]})})]})]}),Object(s.jsx)("br",{}),Object(s.jsx)(b.a,{children:Object(s.jsx)(b.a.Group,{controlId:"formGroupSearch",children:Object(s.jsx)(b.a.Control,{type:"text",className:"search",placeholder:"Search Country Here...",onChange:function(e){return y(e.target.value)}})})}),Object(s.jsx)(h.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:4,query:"min-width: 1000px"}],children:T})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),p()}},[[57,1,2]]]);
//# sourceMappingURL=main.ac661d18.chunk.js.map