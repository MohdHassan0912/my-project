// import { useState } from "react";
// import { Link } from "react-router-dom";

// const SinUp = () => {
//     let[name,setname]=useState("");
//     let[email,setemail]=useState("");
//     let[password,setpassword]=useState("");

//     const saverecords=async()=>{
//         const re=await fetch("http://localhost:9000/signup",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify({name:name,email:email,password:password})
//         })
//         const data=await re.json();
//         alert(data.msg);
//     }

//   return (
//     <>
//       <div className="container-fluid pt-5">
//         <div className="row">
//           <div className="col-4">&nbsp;</div>
//           <div className="col-4">
//             <div className="form-group">
//               <label>Name</label>
//               <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="text" className="form-control" onChange={(e)=>setemail(e.target.value)} />
//             </div>

//             <div className="form-group">
//               <label>Password</label>
//               <input type="password" className="form-control" onChange={(e)=>setpassword(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label>Confirm Password</label>4
//               <input type="password" className="form-control" onChange={(e)=>setpassword(e.target.value)}/>
//             </div>
//             <div className="form-group">
//               <br />
//               <button className="btn btn-danger" onClick={saverecords}>Create Account</button>
//               <br />
//               <Link to="/Userlogin">Back</Link>
//             </div>
//           </div>
//           <div className="col-4">&nbsp;</div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SinUp;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SinUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const saveRecords = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("http://localhost:9000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      alert(data.msg);
    } catch (error) {
      console.error("Error saving records:", error);
    }
  };

  return (
    <div className="container-fluid pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Create an Account</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary" onClick={saveRecords}>Create Account</button>
            </div>
            <div className="text-center mt-3">
              <Link to="/Userlogin">Back to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinUp;

