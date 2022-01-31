import React, { useEffect, useState } from 'react';
import "../../css/Tudo.css";
import TudoList from "../tudobox/TudoList";

function Tudo() {

    const [ text, setText ] = useState("");
   const [items, setItems] = useState([]);

    const submitBtn = ()=>{
        if(text){

        setItems((olditems)=>{
         return [...olditems, text];
         
        });
        setText("");
    }else{
        console.log("fill data")
    }
    }

    const deleteitems =(id)=>{
        console.log("deleted");
        setItems((olditems)=>{
            return olditems.filter((x,index)=>{
            return index !==id;
            })
            
           });

    }
    
  return( <>
<section>
   <div className='tudobox'>
   <h1>Tudo List</h1>
   <div className='inputbox'>
  <input type="text" name="" id="input" placeholder='type here' value={text}  onChange={(e)=>{setText(e.target.value)}} />
   <button onClick={submitBtn}>  <i className='fa fa-times' aria-hidden="true"/></button>
   </div>
   <div className='map'>
   <ol>

       {
           items.map((x, index)=>{
               return <>
                   <TudoList key={index} onselect={deleteitems} id={index} x={x}/>
               </>
           })
       }
   </ol>
   </div>
   </div>
</section>
  </>);
}

export default Tudo;
