import React, { useState } from "react";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore"; 


function Contact() {

    const [ data, setData] = useState({
        name:"",
        phone:"",
        comment:""
      });
    
      const [name, phone,comment]= data;
      
      const handleSubmit = (e)=>{
      
        setData({...data,[e.target.name]:e.target.value});
      
      }
    
     
      const submitForm = async (e)=>{
        e.preventDefault();
      
      //   if (!name || !phone || !comment) {
      //    alert("error")
      //  }
       try {
         await setDoc(doc(db, "musaifweb","user001"), {
           name:name,
           phone:phone,
            comment: comment,
         });
         // setData({ name: "", phone: "", comment:"" });
         // old method and above is new method firebase.firestore.collection("users").doc(id).set({})
       } catch (err) {
         // toast.error("error : "+err);
         alert(err.message)
          }
    
     }
    
    
    



  return <>
      <main>
      <div className="tools contact">
        <div className="tools-h1"><h1>Contact</h1> </div>
        <div className="form-wrapper">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="name here" value={name} onChange={handleSubmit}/>

            <label htmlFor="name">Phone</label>
            <input type="number" name="phone" id="number" placeholder="number here" value={phone} onChange={handleSubmit}/>
            
            <label htmlFor="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10" placeholder="comment here" value={comment} onChange={handleSubmit}></textarea>
             
          </form>
          <button onClick={submitForm}>Submit</button>
        </div>

        </div>

      </main>
  </>;
}

export default Contact;
