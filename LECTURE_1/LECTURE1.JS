//append child using JS
// let heading=document.querySelector("body")
// let child=document.createElement("div")
// child.setAttribute("id","div1")
// heading.appendChild(child)
// let write=document.querySelector("#div1")
// write.innerHTML="Jai Shree Ram"


//append child using react 
// const heading=React.createElement("h1",{id:"heading"},"Jai Shree Ram");
// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);


//how to create nested tags
//<div id="parent">
//    <div id="child">
//     <h1></h1>
//     </div> 
// </div>
// const parent=React.createElement( 
// "div", 
// {id:"parent"},
// React.createElement(
// "div",{id:"child"},
// React.createElement("h1",{id:"heading"},"jai shree ram ")
//     )
//  )
//  const root=ReactDOM.createRoot(document.querySelector("#root"));
//  root.render(parent); 


//how to create nested tags
//<div id="parent">
//    <div id="child">
//     <h1 id="heading"></h1>
//      <h1 id="heading"></h1>
//     </div> 
// </div> 
const parent=React.createElement(
"div",
{id:"parent"},
React.createElement(
"div",
{id:"child"},
[ React.createElement("h1",{id:"heading1"},"jai shree ram"), React.createElement("h2",{id:"heading2"},"jai shree ram")]
)
)
 const root=ReactDOM.createRoot(document.querySelector("#root"));
 root.render(parent);