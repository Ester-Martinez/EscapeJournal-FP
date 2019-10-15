(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,a,t){},192:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(22),l=t.n(r),c=(t(81),t(83),t(5)),o=t(6),i=t(8),m=t(7),u=t(9),h=(t(85),t(198)),p=t(200),d=t(201),f=(t(87),t(24)),E=t(197),g=t(36),v=t.n(g),b=function e(){var a=this;Object(c.a)(this,e),this.signup=function(e,t,n,s){return a.service.post("/signup",{username:e,password:t,email:n,name:s}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.checkUser=function(e){return a.service.get("/checkUser",{username:e}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.login=function(e,t){return a.service.post("/login",{username:e,password:t}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.loggedin=function(){return a.service.get("/currentUser").then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.logout=function(){return a.service.get("/logout").then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.service=v.a.create({baseURL:"".concat("https://myescapejournal.herokuapp.com/","api/auth"),withCredentials:!0})},N=t(18),O=(t(108),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleLogout=function(e){t.props.logout()},t.state={loggedInUser:null},t.service=new b,t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(f.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.state.loggedInUser?s.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(E.a,{className:"navbar-item",to:"/home"},s.a.createElement("img",{src:"house-lock.png",width:"28",height:"28",alt:"home-icon"}))),s.a.createElement("div",{id:"JournalNavbar",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-start"},s.a.createElement(E.a,{to:"/add-experience",className:"navbar-item"},"Add experience"),s.a.createElement(E.a,{to:"/all-experiences",className:"navbar-item"},"All my escapes"),s.a.createElement(E.a,{to:"/profile",className:"navbar-item"},"My profile")),s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("h2",null,"Hi, ",this.state.loggedInUser.name)),s.a.createElement("div",{className:"navbar-item",onClick:this.handleLogout},s.a.createElement(N.Button,{color:"danger"},s.a.createElement("span",null,"Logout")))))):s.a.createElement("div",null,s.a.createElement("nav",{className:"nav-style"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(E.a,{to:"/signup"},"Signup")),s.a.createElement("li",null,s.a.createElement(E.a,{to:"/login"},"Login")))))}}]),a}(n.Component)),j=t(28),y=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var a=t.state.username,n=t.state.password,s=t.state.email,r=t.state.name;t.service.signup(a,n,s,r).then(function(e){t.setState({username:"",password:"",email:"",name:""}),t.props.getUser(e.user)}).catch(function(e){t.setState({username:a,password:n,email:s,name:r,error:!0})})},t.handleChange=function(e){var a=e.target,n=a.name,s=a.value;t.setState(Object(j.a)({},n,s))},t.state={username:"",password:"",email:"",name:""},t.service=new b,t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h3",null,"Welcome to ",s.a.createElement("span",null,"My Escape Journal"),". Here you can create your account"),s.a.createElement("form",{onSubmit:this.handleFormSubmit},s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Name"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input",name:"name",value:this.state.name,onChange:function(a){return e.handleChange(a)},type:"text",placeholder:"Your name"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"far fa-address-card"})),this.state.name&&s.a.createElement("span",{className:"icon is-small is-right ok"},s.a.createElement("i",{className:"fas fa-check"})),!this.state.name&&s.a.createElement("span",{className:"icon is-small is-right not-ok"},s.a.createElement("i",{className:"fas fa-exclamation-triangle"})),!this.state.name&&s.a.createElement("p",{className:"help is-danger"},"Please, enter your name"))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Username"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input",type:"text",name:"username",value:this.state.username,onChange:function(a){return e.handleChange(a)},placeholder:"Username"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-user"})),this.state.username&&s.a.createElement("span",{className:"icon is-small is-right ok"},s.a.createElement("i",{className:"fas fa-check"})),!this.state.username&&s.a.createElement("span",{className:"icon is-small is-right not-ok"},s.a.createElement("i",{className:"fas fa-exclamation-triangle"})))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Email"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input",type:"email",name:"email",value:this.state.email,onChange:function(a){return e.handleChange(a)},placeholder:"your-email-address@email.example"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-envelope"})),this.state.email&&s.a.createElement("span",{className:"icon is-small is-right is-ok"},s.a.createElement("i",{className:"fas fa-check"})),!this.state.email&&s.a.createElement("span",{className:"icon is-small is-right is-not-ok"},s.a.createElement("i",{className:"fas fa-exclamation-triangle"})))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Password"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input",name:"password",value:this.state.password,onChange:function(a){return e.handleChange(a)},type:"password",placeholder:"Please, choose a password",autoComplete:"off"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-lock"})),this.state.password.length>=8&&s.a.createElement("span",{className:"icon is-small is-right is-ok"},s.a.createElement("i",{className:"fas fa-check"})),this.state.password.length<8&&s.a.createElement("span",{className:"icon is-small is-right is-not-ok"},s.a.createElement("i",{className:"fas fa-exclamation-triangle"}))),this.state.password.length<8&&this.state.password.length>0&&s.a.createElement("p",{className:"help is-danger"},"The password must contain at least 8 characters and at least one of them has to be a number")),s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("div",{className:"control"},s.a.createElement(E.a,{to:"/public"},s.a.createElement(N.Button,{color:"danger",inverted:!0},s.a.createElement("span",null,"Back to home")))),s.a.createElement("div",{className:"control"},s.a.createElement("input",{type:"submit",value:"Sign up",className:"button is-link"})))),s.a.createElement("h1",null,this.state.error?"There seems to be an error. Please, try again":""))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var a=t.state.username,n=t.state.password;t.service.login(a,n).then(function(e){t.setState({username:a,password:n,error:!1}),t.props.getUser(e)}).catch(function(e){t.setState({username:a,password:n,error:!0})})},t.handleChange=function(e){var a=e.target,n=a.name,s=a.value;t.setState(Object(j.a)({},n,s))},t.state={username:"",password:""},t.service=new b,t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h3",null,"Please, login to access your journal"),s.a.createElement("form",{onSubmit:this.handleFormSubmit},s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Username"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{className:"input",type:"text",name:"username",value:this.state.username,onChange:function(a){return e.handleChange(a)},placeholder:"Username"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-user"})))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Password"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{className:"input",type:"password",name:"password",value:this.state.password,onChange:function(a){return e.handleChange(a)},placeholder:"Your password",autoComplete:"off"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-lock"})))),s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("div",{className:"control"},s.a.createElement(E.a,{to:"/public"},s.a.createElement(N.Button,{color:"danger",inverted:!0},s.a.createElement("span",null,"Back to home")))),s.a.createElement("div",{className:"control"},s.a.createElement("input",{type:"submit",value:"Login",className:"button is-link"})))),s.a.createElement("h1",null,this.state.error?"There seems to be an error. Please, try again":""))}}]),a}(n.Component),k=(t(110),t(49)),S=t.n(k),C=t(50),U=t.n(C),D=t(52),x=t.n(D),I=t(71),P=t.n(I),F=t(60),R=t.n(F),B=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(S.a,null,s.a.createElement(S.a.Image,{size:"4by3",src:"http://bulma.io/images/placeholders/1280x960.png"}),s.a.createElement(S.a.Content,null,s.a.createElement(U.a,null,s.a.createElement(U.a.Item,{renderAs:"figure",position:"left"},s.a.createElement(x.a,{size:64,alt:"64x64",src:"http://bulma.io/images/placeholders/128x128.png"})),s.a.createElement(U.a.Item,null,s.a.createElement(R.a,{size:4},"John Smith"),s.a.createElement(R.a,{subtitle:!0,size:6},"@johnsmith"))),s.a.createElement(P.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ",s.a.createElement("a",null,"@bulmaio"),".",s.a.createElement("a",{href:"#1"},"#css")," ",s.a.createElement("a",{href:"#2"},"#responsive"),s.a.createElement("br",null),s.a.createElement("time",{dateTime:"2016-1-1"},"11:09 PM - 1 Jan 2016")))))}}]),a}(n.Component),A=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(B,null),s.a.createElement(B,null),s.a.createElement(B,null),s.a.createElement(B,null),s.a.createElement(B,null),s.a.createElement(B,null),s.a.createElement(B,null),s.a.createElement(B,null),s.a.createElement(B,null))}}]),a}(n.Component),L=function(){function e(){var a=this;Object(c.a)(this,e),this.addExperience=function(e,t,n,s,r,l){return a.service.post("/add-experience",{escapeDone:e,roomsDone:t,team:n,date:s,imgName:r,imgPath:l}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.allEscapes=function(){return a.service.get("/allescapes").then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.allRooms=function(){return a.service.get("/allrooms").then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.service=v.a.create({baseURL:"".concat("https://myescapejournal.herokuapp.com/","user"),withCredentials:!0})}return Object(o.a)(e,[{key:"handleUpload",value:function(e){return this.service.post("/upload",e).then(function(e){return e.data}).catch(function(e){return console.log(e)})}}]),e}(),T=t(45),J=function(e){var a=e.map(function(e){return{label:e.name,value:e._id}});return a},M=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={selectedOption:null},t.handleChange=function(e){t.setState({selectedOption:e},function(){return t.props.updateEscapeDone(t.state.selectedOption)})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.selectedOption;return s.a.createElement(T.a,{value:e,onChange:this.handleChange,options:J(this.props.escapes)})}}]),a}(s.a.Component),z=function(e,a){var t=[];e.forEach(function(e){e.escape===a&&t.push(e)});var n=t.map(function(e){return{label:e.name,value:e._id}});return n},W=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={selectedOption:null},t.handleChange=function(e){t.setState({selectedOption:e},function(){return t.props.updateRoomDone(t.state.selectedOption)})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.selectedOption;return s.a.createElement(T.a,{value:e,onChange:this.handleChange,options:z(this.props.rooms,this.props.escape)})}}]),a}(s.a.Component),_=t(72),G=t.n(_),H=(t(187),t(189),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={startDate:new Date},t.handleChange=function(e){t.setState({startDate:e},function(){return t.props.updateDate(t.state.startDate)})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(G.a,{className:"calendar",dateFormat:"dd/MM/yyyy",selected:this.state.startDate,onChange:this.handleChange})}}]),a}(s.a.Component)),Y=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var a=t.state.escapeDone,n=t.state.roomsDone,s=t.state.team,r=t.state.date,l=t.state.imgName,c=t.state.imgPath;t.service.addExperience(a,n,s,r,l,c).then(function(e){t.setState({escapeDone:"",roomsDone:"",team:[],date:"",imgName:"",imgPath:""})}).catch(function(e){t.setState(Object(f.a)({},t.state,{error:!0}))})},t.handleChange=function(e){var a=e.target,n=a.name,s=a.value;t.setState(Object(j.a)({},n,s))},t.updateEscapeDone=function(e){t.setState(Object(f.a)({},t.state,{escapeDone:e}))},t.updateRoomDone=function(e){t.setState(Object(f.a)({},t.state,{roomsDone:e.value,escapeDone:t.state.escapeDone.value}))},t.updateDate=function(e){t.setState(Object(f.a)({},t.state,{date:e}))},t.handleFileUpload=function(e){var a=new FormData;a.append("imageUrl",e.target.files[0]),t.service.handleUpload(a).then(function(e){t.setState({imgPath:e.secure_url,imgName:t.state.roomsDone})}).catch(function(e){console.log("Error while uploading the file: ",e)})},t.state={escapeDone:"",roomsDone:"",team:[],date:"",imgName:"",imgPath:""},t.service=new L,t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"checkToSend",value:function(){return!(this.state.escapeDone&&this.state.roomsDone&&this.state.date&&this.state.imgName&&this.state.imgPath)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h3",null,"Please, add your new experience:"),s.a.createElement("form",{onSubmit:function(a){return e.handleFormSubmit(a)}},s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Escape Name"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement(M,{className:"select",escapes:this.props.escapes,isSearchable:!0,updateEscapeDone:this.updateEscapeDone,placeholder:"Escape room name"}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Room Name"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement(W,{className:"select",escape:this.state.escapeDone.value,rooms:this.props.rooms,isSearchable:!0,updateRoomDone:this.updateRoomDone,placeholder:"Room name"}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Game Date"),s.a.createElement("div",{className:"control"},s.a.createElement(H,{updateDate:this.updateDate}))),s.a.createElement("div",{className:"file is-medium is-boxed"},s.a.createElement("label",{className:"file-label"},s.a.createElement("input",{className:"file-input",type:"file",name:"imageUrl",onChange:function(a){return e.handleFileUpload(a)}}),s.a.createElement("span",{className:"file-cta"},s.a.createElement("span",{className:"file-icon"},s.a.createElement("i",{className:"fas fa-upload"})),s.a.createElement("span",{className:"file-label"},"Choose a file\u2026")))),s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("div",{className:"control"},s.a.createElement(E.a,{to:"/public"},s.a.createElement(N.Button,{color:"danger",inverted:!0},s.a.createElement("span",null,"Back to home")))),s.a.createElement("div",{className:"control"},s.a.createElement(N.Button,{type:"submit",color:"info",disabled:this.checkToSend()},"Save new experience")))),s.a.createElement("h1",null,this.state.error?"There seems to be an error. Please, try again":""))}}]),a}(n.Component),K=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null)}}]),a}(n.Component),$=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null)}}]),a}(n.Component),q=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={loggedInUser:t.props.userInSession,escapes:[],rooms:[]},t.userService=new L,t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"getEscapes",value:function(){var e=this;this.userService.allEscapes().then(function(a){e.setState(Object(f.a)({},e.state,{escapes:a}))})}},{key:"getRooms",value:function(){var e=this;this.userService.allRooms().then(function(a){e.setState(Object(f.a)({},e.state,{rooms:a}))})}},{key:"componentDidMount",value:function(){this.getEscapes(),this.getRooms()}},{key:"render",value:function(){var e=this;return s.a.createElement(p.a,null,s.a.createElement(d.a,{exact:!0,path:"/home",render:function(){return s.a.createElement(A,{escapes:e.state.escapes,rooms:e.state.rooms,user:e.state.loggedInUser})}}),s.a.createElement(d.a,{exact:!0,path:"/add-experience",render:function(){return s.a.createElement(Y,{escapes:e.state.escapes,rooms:e.state.rooms,user:e.state.loggedInUser})}}),s.a.createElement(d.a,{exact:!0,path:"/all-experiences",render:function(){return s.a.createElement(K,{escapes:e.state.escapes,rooms:e.state.rooms,user:e.state.loggedInUser})}}),s.a.createElement(d.a,{exact:!0,path:"/profile",render:function(){return s.a.createElement($,{user:e.state.loggedInUser})}}))}}]),a}(n.Component),Q=t(75),V=t.n(Q),X=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Keep all your escape room activity in one place"),s.a.createElement("img",{src:V.a,alt:"logo"}),s.a.createElement("h1",null,"Please, log in or sign up to create or access your journal"),s.a.createElement(E.a,{to:"/signup"},s.a.createElement(N.Button,{color:"info"},s.a.createElement("span",null,"Sign up"))),s.a.createElement(E.a,{to:"/login"},s.a.createElement(N.Button,{color:"primary"},s.a.createElement("span",null,"Login"))))}}]),a}(n.Component),Z=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).getUser=function(e){t.setState({loggedInUser:e})},t.logout=function(){t.service.logout().then(function(){t.setState({loggedInUser:null})})},t.state={loggedInUser:null},t.service=new b,t.fetchUser(),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"fetchUser",value:function(){var e=this;return this.service.loggedin().then(function(a){e.setState({loggedInUser:a})}).catch(function(a){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{to:"/home"}),s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(O,{userInSession:this.state.loggedInUser,logout:this.logout}),s.a.createElement(q,{userInSession:this.state.loggedInUser})))):s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{to:"/public"}),s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(p.a,null,s.a.createElement(d.a,{exact:!0,path:"/public",render:function(){return s.a.createElement(X,null)}}),s.a.createElement(d.a,{exact:!0,path:"/signup",render:function(){return s.a.createElement(y,{getUser:e.getUser})}}),s.a.createElement(d.a,{exact:!0,path:"/login",render:function(){return s.a.createElement(w,{getUser:e.getUser})}})))))}}]),a}(n.Component),ee=t(199);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(ee.a,null,s.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,a,t){e.exports=t.p+"static/media/journal-LOGO2.cbf634a3.png"},76:function(e,a,t){e.exports=t(192)},81:function(e,a,t){},83:function(e,a,t){},85:function(e,a,t){}},[[76,2,1]]]);
//# sourceMappingURL=main.80becf00.chunk.js.map