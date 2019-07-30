(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r,n=a(0),i=a.n(n),c=a(10),s=a.n(c),o=a(1),l=a(2),h=a(4),u=a(3),d=a(5),p=(a(9),function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"bookend"},"D&D Initiative Tracker")}}]),t}(n.Component)),f=a(6),y=a(7);!function(e){e[e.PC=0]="PC",e[e.NPC=1]="NPC"}(r||(r={}));var v=r,m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).modOptions=10,a.getModOptionDisplay=function(e){return e<0?"".concat(e):"+".concat(e)},a.state={character:{id:0,characterName:"",playerType:v.PC,initiativeMod:0,score:0}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderModOptions",value:function(){for(var e=[],t=0;t<this.modOptions;t++){var a=t-10;e.push(i.a.createElement("option",{key:a,value:a},this.getModOptionDisplay(a)))}for(var r=0;r<this.modOptions+1;r++)e.push(i.a.createElement("option",{key:r,value:r},this.getModOptionDisplay(r)));return e}},{key:"handleChangeName",value:function(e){this.setState({character:Object(f.a)({},this.state.character,{characterName:e})})}},{key:"handlePlayerTypeChange",value:function(e){this.setState({character:Object(f.a)({},this.state.character,{playerType:e})})}},{key:"handleInitiativeModChange",value:function(e){this.setState({character:Object(f.a)({},this.state.character,{initiativeMod:e})})}},{key:"handleAddCharacter",value:function(){this.props.handleAddCharacter(this.state.character),this.setState({character:Object(f.a)({},this.state.character,{characterName:"",playerType:v.PC,initiativeMod:0})})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{width:"100%"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"2.5rem",width:"100%"}},i.a.createElement("input",{value:this.state.character.characterName,placeholder:"Character Name",onChange:function(t){return e.handleChangeName(t.currentTarget.value)},style:{width:"50%",padding:"8px"}}),i.a.createElement("select",{value:this.state.character.playerType,onChange:function(t){return e.handlePlayerTypeChange(Number(t.currentTarget.value))},style:{width:"10%"}},i.a.createElement("option",{value:v.PC},"PC"),i.a.createElement("option",{value:v.NPC},"NPC")),i.a.createElement("select",{value:this.state.character.initiativeMod,onChange:function(t){return e.handleInitiativeModChange(Number(t.currentTarget.value))},style:{width:"10%"}},this.renderModOptions()),i.a.createElement("button",{style:{width:"30%"},onClick:function(){return e.handleAddCharacter()},disabled:0===this.state.character.characterName.length},"Add Character")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).inputRef=i.a.createRef(),a.state={newScore:String(a.props.character.score),editScore:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"rollInitiative",value:function(e){var t=Math.floor(20*Math.random()+1)+this.props.character.initiativeMod;this.props.setInitiative(this.props.character.id,t)}},{key:"removeCharacter",value:function(e){this.props.removeCharacter(e)}},{key:"handleKeyUp",value:function(e){"Enter"===e.key&&this.changeScore()}},{key:"handleScoreChange",value:function(e){/^[0-9]*$/.test(e)&&(console.log("We got here"),this.setState({newScore:e}))}},{key:"changeScore",value:function(){this.props.setInitiative(this.props.character.id,Number(this.state.newScore)),this.toggleEdit()}},{key:"toggleEdit",value:function(){var e=this;this.setState({editScore:!this.state.editScore},function(){null!==e.inputRef.current&&(e.inputRef.current.focus(),e.setState({newScore:String(e.props.character.score)}))})}},{key:"render",value:function(){var e=this,t=this.props,a=t.character,n=t.turn,c={margin:"15px",padding:"5px",backgroundColor:n?"rgba(128, 0, 0, 0.5)":"rgba(255, 255, 255, 0.5)",width:"85%",height:"3.4rem",border:"2px solid black",display:"flex",alignItems:"center",justifyContent:"space-evenly",color:n?"white":"black"};return i.a.createElement("div",{style:c},i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"50%",fontWeight:"bold",paddingRight:"10%",borderRight:"2px solid black"}},i.a.createElement("span",null,a.characterName),i.a.createElement("span",null,a.playerType===r.PC?"PC":"NPC"),i.a.createElement("span",null,a.initiativeMod<0?"".concat(a.initiativeMod):"+".concat(a.initiativeMod))),i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"40%"}},i.a.createElement("i",{className:"fas fa-dice-d20",style:{cursor:"pointer"},onClick:function(){return e.rollInitiative(a.id)}}),this.state.editScore?i.a.createElement("span",null,i.a.createElement("input",{type:"text",value:this.state.newScore,onChange:function(t){return e.handleScoreChange(t.target.value)},onKeyUp:function(t){return e.handleKeyUp(t)},onBlur:function(){return e.changeScore()},style:{width:"20px"},ref:this.inputRef})):i.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.toggleEdit()}},a.score),i.a.createElement("i",{className:"fas fa-trash-alt",style:{cursor:"pointer"},onClick:function(){return e.removeCharacter(a.id)}})))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{padding:"15px",width:"50%",borderLeft:"2px solid white",borderRight:"2px solid white"}},this.props.characters.map(function(t,a){return i.a.createElement(b,{key:a,character:t,setInitiative:e.props.setInitiative,removeCharacter:e.props.removeCharacter,turn:e.props.turn===a})}))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t={height:"15%",width:"80%",fontSize:"30px",borderRadius:"35%"};return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",width:"100%"}},i.a.createElement("button",{style:t,onClick:function(){return e.props.handleNextTurnClick()}},"Next Turn"),i.a.createElement("button",{style:t,onClick:function(){return e.props.sortCharacter()}},"Sort"))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={characters:[],turn:0,idCounter:0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"sortCharacters",value:function(){var e=Object(y.a)(this.state.characters);e.sort(function(e,t){return e.score>t.score?-1:e.score<t.score?1:e.playerType===v.PC&&t.playerType===v.NPC?-1:e.playerType===v.NPC&&t.playerType===v.PC?1:0}),this.setState({characters:e})}},{key:"setInitiative",value:function(e,t){this.setState({characters:this.state.characters.map(function(a){return a.id===e?Object(f.a)({},a,{score:t}):a})})}},{key:"removeCharacter",value:function(e){for(var t,a=-1,r=0;r<this.state.characters.length;r++)if(this.state.characters[r].id===e){a=r;break}t=a===this.state.turn&&a===this.state.characters.length-1?0:a===t?this.state.turn:a<this.state.turn?this.state.turn-1:this.state.turn,this.setState({characters:this.state.characters.filter(function(t){return t.id!==e}),turn:t})}},{key:"addCharacter",value:function(e){this.setState({characters:[].concat(Object(y.a)(this.state.characters),[Object(f.a)({},e,{id:this.state.idCounter})]),idCounter:this.state.idCounter+1})}},{key:"advanceTurn",value:function(){this.setState({turn:this.state.turn>=this.state.characters.length-1?0:this.state.turn+1})}},{key:"render",value:function(){var e=this,t={display:"flex",flexDirection:"row",flex:"1 1 auto"};return i.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, .8)",display:"flex",flexDirection:"column",flex:"1 1 auto"}},i.a.createElement(m,{handleAddCharacter:function(t){return e.addCharacter(t)}}),i.a.createElement("div",{style:t},i.a.createElement(C,{characters:this.state.characters,setInitiative:function(t,a){return e.setInitiative(t,a)},removeCharacter:function(t){return e.removeCharacter(t)},turn:this.state.turn}),i.a.createElement("div",{style:t},this.state.characters.length>0&&i.a.createElement(g,{sortCharacter:function(){return e.sortCharacters()},handleNextTurnClick:function(){return e.advanceTurn()}}))))}}]),t}(n.Component),j=a(11),k=a.n(j),E=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{style:{fontSize:"15px"},className:"bookend"},"\xa9 Jacob Kedar Krevat ",k()().year())}}]),t}(n.Component),S=(a(19),function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(O,null),i.a.createElement(E,null))}}]),t}(n.Component));s.a.render(i.a.createElement(S,null),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.0e4787e5.chunk.js.map