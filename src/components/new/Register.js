import React, { useState } from "react";
// import "../PagesCss/Register.css";
//firebase
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { auth, db,provider } from "../../firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";

//toast
import { toast } from "react-toastify";
//react-dom navigator
//import { useNavigate,Link } from "react-router-dom";

function Register() {
  // navigator
  //const navigator = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    comment: "",
    error: "",
    loading: false,
  });
  const{ name, email, comment, error, loading } = data;
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandle = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !comment) {
      toast.error("Plz fill each input field");
      setData({ ...data, error: "all fields are required" });
    
  }else{
    try {
      
      toast.success("successfully Comment added");
   
      //below code to save data into firedata base
      await setDoc(doc(db, "personalwebsite", name), {
        // uid: result.user.uid,
        name:name,
        email:email,
        comment:comment,
        createdAt: Timestamp.fromDate(new Date()),
    
      });
      setData({ name: "", email: "", comment: "", error: null, loading: false });
      // old method and above is new method firebase.firestore.collection("users").doc(id).set({})
    } catch (err) {
      toast.error("error : "+err);
      setData({ ...data, error: err.message, loading: false });
    }
  }
  };

  
  return (
    <>
      <div className="tools contact">
      <div className="tools-h1"><h1>Contact</h1> </div>
      <div className="form-wrapper">

      
        <form
          onSubmit={submitHandle}

        >
      
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name "
              value={name}
              onChange={handleChange}
            />
          
            <label htmlFor="email">Email / phone</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email/phone  "
              value={email}
              onChange={handleChange}
            />
          
          
            <label htmlFor="pass">Comment</label>
            <textarea name="comment" type="text" id="pass" cols="30" rows="10"  placeholder="comment here"
              value={comment}
              onChange={handleChange}></textarea>
            {/* <input
              type="password"
              name="pass"
              id="pass"
              placeholder="password"
              value={pass}
              onChange={handleChange}
            /> */}
      
          {error ? <p id="register-error">{error}</p> : null}
          <div className="btn-div">
            <button className="btn" disabled={loading}>{loading ? " submitting...":"Submit"}</button>

            {/* <div>
              <button onClick={signinwithgoogle}  className=" btn btn-success " disabled={loading}>{loading ? "Creating ac...":"Sign-up with Gmail"}</button>
              <p>Alread have an account ? <Link to="/login">Login</Link></p>
            </div> */}
          </div>
        </form>
        </div>
        {/* <p>{data.name}</p> */}
      </div>
    </>
  );
}

export default Register;
