(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),l=n.n(r),i=n(7),u=n(1),s=n(2),c=n(4),d=n(3),p=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"input"},"todoList"),o.a.createElement("input",{id:"input",type:"text",ref:function(t){return e.input=t},onChange:this.props.handleChange,value:this.props.inpValue}),o.a.createElement("button",{onClick:this.props.handleClick},"\u6dfb\u52a0"))}}]),n}(a.Component),h=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.todos.filter((function(e){return e.done})),t=this.props.todos.filter((function(e){return!e.done}));return o.a.createElement("div",null,o.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",t.length),o.a.createElement("ul",null,this.props.renderTodos(!1)),o.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",e.length),o.a.createElement("ul",null,this.props.renderTodos(!0)))}}]),n}(a.Component),f=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({inpValue:t.target.value})},e.handleClick=function(){""!=e.state.inpValue&&(e.setState({todos:[{title:e.state.inpValue,done:!1}].concat(Object(i.a)(e.state.todos))}),e.setState({inpValue:""}))},e.delete=function(t){e.setState({todos:e.state.todos.filter((function(e,n){return n!=t}))})},e.toggle=function(t){var n=JSON.parse(JSON.stringify(e.state.todos));n[t].done=!n[t].done,e.setState({todos:n})},e.renderTodos=function(t){return e.state.todos.map((function(n,a){if(n.done==t)return o.a.createElement("li",null,o.a.createElement("input",{type:"checkbox",checked:t,onClick:function(){return e.toggle(a)}}),o.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.title}}),o.a.createElement("button",{onClick:function(){return e.delete(a)}},"\u5220\u9664"))}))},e.state={inpValue:"",todos:[{title:"1",done:!0},{title:"2",done:!1}]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");e&&this.setState({todos:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.inpValue;return o.a.createElement("div",null,o.a.createElement(p,{inpValue:n,handleClick:this.handleClick,handleChange:this.handleChange}),o.a.createElement(h,{todos:t,renderTodos:this.renderTodos}))}}]),n}(a.Component);l.a.render(o.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.bcaa862b.chunk.js.map