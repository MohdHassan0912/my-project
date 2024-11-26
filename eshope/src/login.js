// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie"; 
// const Userlogin = () => {
//   const[a,seta]=useState();
//   const[b,setb]=useState();

//   const[cookie,createcookie,removecookie]=useCookies();
//   const jump=useNavigate();


//   const login=async()=>{
//     const re=await fetch("http://localhost:9000/signup",{
//       method:"PATCH",
//       headers:{"Content-type":"application/json"},
//       body:JSON.stringify({email:a,password:b})
//     });
//     const data=await  re.json();
//     if(data.msg==="valid Login"){
//       createcookie("mycookie",a);
//       jump("/shop");
//     }
//     else{
//       alert(data.msg);
//     }
//   }
//   return (
//     <>
//       <div className="container-fluid pt-5">
//         <div className="row">
//           <div className="col-4">&nbsp;</div>
//           <div className="col-4">
//             <div className="form-group">
//               <label>Email</label>
//               <input onChange={(e)=>seta(e.target.value)} type="text" className="form-control" />
//             </div>

//             <div className="form-group">
//               <label>Password</label>
//               <input onChange={(e)=>setb(e.target.value)} type="password" className="form-control" />
//             </div>
//             <div className="form-group">
//               <br />
//               <button onClick={login} className="btn btn-danger">Login</button>
//               <br />
//               <Link to="/Sinup">New Account</Link>
//             </div>
//           </div>
//           <div className="col-4">&nbsp;</div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Userlogin;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cookie, createCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/signup', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.msg === 'valid Login') {
        createCookie('mycookie', email);
        navigate('/');
      } else {
        setError(data.msg);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container-fluid pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card p-4">
            <h2 className="text-center mb-4">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <div className="form-group mt-4">
              <button onClick={login} className="btn btn-primary w-100">
                Login
              </button>
            </div>

            <div className="text-center mt-3">
              <Link to="/singup">New Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
