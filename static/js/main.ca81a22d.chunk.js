(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),c=n(12),s=n.n(c),l=n(17),i=n(13),o=n(14),h=n(15),u=n(19),j=n(18);var d=function(e){return Object(r.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var m=function(e){return Object(r.jsx)("div",{className:12,children:e.children})};var b=function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:Object(r.jsx)("img",{alt:e.firstName,src:e.picture})}),Object(r.jsx)("td",{children:e.firstName}),Object(r.jsx)("td",{children:e.lastName}),Object(r.jsx)("td",{children:Object(r.jsx)("a",{href:"mailto:"+e.email,target:"__blank",children:e.email})}),Object(r.jsx)("td",{children:e.phone})]})};n(25);var f=function(e){return Object(r.jsx)("div",{className:"wrapper",children:e.children})};var O=function(e){return Object(r.jsx)("form",{children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(r.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search Employee by Last Name",id:"search"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search Last Name"})]})})},p=n(16),x=n.n(p),v=function(){return x.a.get("https://randomuser.me/api/?results=200&nat=us")},N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={result:[],search:""},e.firstEmployee=function(){v().then((function(t){return e.setState({result:t.data.results})})).catch((function(e){return console.log(e)}))},e.searchEmployee=function(t){console.log(t),v(t).then((function(t){return e.setState({result:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.value,r=t.target.name;e.setState(Object(i.a)({},r,n))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state.result.filter((function(t){return t.name.last.includes(e.state.search)}));console.log(e.state.search),e.setState({result:n})},e.handleNameSort=function(t){t.preventDefault();var n=e.state.result.sort((function(e,t){return e.name.first>t.name.first?1:-1}));console.log(e.state.search),e.setState({result:n})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.firstEmployee()}},{key:"render",value:function(){return Object(r.jsx)(f,{children:Object(r.jsxs)(d,{children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)(m,{children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)(O,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,handleNameSort:this.handleNameSort})]})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)(m,{children:Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Photo"}),Object(r.jsx)("button",{onClick:this.handleNameSort,children:"First Name"}),Object(r.jsx)("th",{children:"Last Name"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"Phone"})]})}),Object(r.jsx)("tbody",{children:Object(l.a)(this.state.result).map((function(e){return Object(r.jsx)(b,{picture:e.picture.large,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone},e.key)}))})]})})})]})})}}]),n}(a.Component);var y=function(){return Object(r.jsx)(N,{})};n(44);s.a.render(Object(r.jsx)(y,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.ca81a22d.chunk.js.map