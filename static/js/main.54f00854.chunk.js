(window["webpackJsonpreact-sessions"]=window["webpackJsonpreact-sessions"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(8),r=n.n(o),c=(n(14),n(6)),i=n(1),u=n(2),h=n(4),m=n(3),s=n(5),g=(n(15),function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"Hello, I'm ",l.a.createElement("span",{onClick:e.onNameClick},e.name)," and I'm ",e.age," years old."),l.a.createElement("input",{value:e.name,onChange:e.onNameInputChange}))}),d=function(e){return l.a.createElement(a.Fragment,null,l.a.createElement("p",null,l.a.createElement("button",{onClick:e.handleIncrement},"IncrementD"),l.a.createElement("button",{onClick:e.handleDecrement},"DecrementD")))},p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={day:(new Date).getDate(),month:(new Date).toLocaleString("default",{month:"long"}),monthNo:(new Date).getMonth(),lastDayCrMonth:0,lastDayPreviousMonth:0,previousMonth:"",nextMonth:""},n.handleIncrement=function(){var e=n.state.day+1,t=new Date;e>n.state.lastDayCrMonth?n.setState((function(e){return{day:1,previousMonth:e.month,monthNo:e.monthNo+1,month:new Date(t.getFullYear(),e.monthNo+1).toLocaleString("default",{month:"long"}),lastDayPreviousMonth:new Date(t.getFullYear(),e.monthNo+1,0).getDate(),lastDayCrMonth:new Date(t.getFullYear(),e.monthNo+2,0).getDate()}})):n.setState((function(t){return{day:e}}))},n.handleDecrement=function(){var e=n.state.day-1,t=new Date;0===e?n.setState((function(e){return{day:e.lastDayPreviousMonth,nextMonth:e.month,monthNo:e.monthNo-1,month:new Date(t.getFullYear(),e.monthNo-1).toLocaleString("default",{month:"long"}),lastDayPreviousMonth:new Date(t.getFullYear(),e.monthNo-1,0).getDate(),lastDayCrMonth:new Date(t.getFullYear(),e.monthNo,0).getDate()}})):n.setState((function(t){return{day:e}}))},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth(),0).getDate(),n=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),a=new Date(e.getFullYear(),e.getMonth()-1).toLocaleString("default",{month:"long"}),l=new Date(e.getFullYear(),e.getMonth()+1).toLocaleString("default",{month:"long"});this.setState({lastDayCrMonth:n,lastDayPreviousMonth:t,previousMonth:a,nextMonth:l})}},{key:"render",value:function(){return l.a.createElement("div",null,"Date (day-month): ",this.state.day," - ",this.state.month,l.a.createElement(d,{handleIncrement:this.handleIncrement,handleDecrement:this.handleDecrement}))}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",email:"",phone:""},n.nameChangeHandler=function(e){n.setState({name:e.target.value})},n.emailChangeHandler=function(e){n.setState({email:e.target.value})},n.phoneChangeHandler=function(e){n.setState({phone:e.target.value})},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,o=e.phone;return l.a.createElement(a.Fragment,null,l.a.createElement("p",null,l.a.createElement("label",null,"Name: "),l.a.createElement("input",{value:t,onChange:this.nameChangeHandler})),l.a.createElement("p",null,l.a.createElement("label",null,"Email: "),l.a.createElement("input",{value:n,onChange:this.emailChangeHandler})),l.a.createElement("p",null,l.a.createElement("label",null,"Phone: "),l.a.createElement("input",{value:o,onChange:this.phoneChangeHandler})),l.a.createElement("p",null,"Name: ",t," - Email: ",n," - Phone: ",o))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={persons:[{id:1,name:"Ana",age:20},{id:2,name:"Maria",age:25,info:"My hobbies are reading and hiking."}],title:"My React App",inputText:"Initial text"},n.addPersonHandler=function(){n.setState({persons:[].concat(Object(c.a)(n.state.persons),[{name:"Grigore",age:75,info:"Reaching the end... :'("}])})},n.nameClickHandler=function(e){console.log("name clicked: ",e)},n.inputChangeHandler=function(e){n.setState({inputText:e.target.value})},n.nameInputChangeHandler=function(e,t){var a=Object(c.a)(n.state.persons);a.find((function(e){return e.id===t})).name=e.target.value,n.setState({persons:a})},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.persons,a=t.title,o=t.inputText;return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,a),l.a.createElement("input",{value:o,onChange:this.inputChangeHandler}),l.a.createElement("p",null," ",o),l.a.createElement("button",{onClick:this.addPersonHandler},"Add Person"),n.map((function(t){return l.a.createElement(g,{key:t.id,name:t.name,age:t.age,onNameClick:e.nameClickHandler.bind(e,t.name),onNameInputChange:function(n){return e.nameInputChangeHandler(n,t.id)}},l.a.createElement("p",null,t.info))})),l.a.createElement("hr",null),l.a.createElement("h2",null,"Homework Session 4"),l.a.createElement("h3",null,"Exercise 1"),l.a.createElement(p,null),l.a.createElement("h3",null,"Exercise 2"),l.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.54f00854.chunk.js.map