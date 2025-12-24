import {useState} from "react"

function User(){
 const[cound,setcound]=useState(false)
  let Dark=()=>{
    setcound(!cound)
  }
 return(
    <>
    <div 
    style={{
        backgroundColor:cound ? "black":"white",
        height:"100px",
        width:"100px",
        
    }}>
    <button onClick={Dark}>switch</button>
    </div>
        

    
    

    </>
 )
 
}
export default User

