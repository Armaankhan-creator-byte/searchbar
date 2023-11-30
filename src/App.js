import "./App.css";


function App() {
let g=(()=>{
  const ele=document.getElementById("ap");
  const cir=document.getElementById("cir");
  if(ele){
    ele.style.display="none";
    cir.style.display="block";
    
  }
})
let h=(()=>{
  const cir=document.getElementById("cir")
  const ele=document.getElementById("ap");;
  if(cir){
    ele.style.display="flex";
    cir.style.display="none";
   

  }
})
  return (
     
    <>
      <div className="wrapper" >
        <div className="circle" id="cir" onClick={h}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <div className="input"   id="ap">
          <input type="text"   placeholder="Type here..." ></input>
          <div className="search"  onClick={g}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </div>
        </div>
     </div>  
    </>
    
  );
}

export default App;
