

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

// const Changepass = () => {
//     const [cookie,createcookie,removecookie]=useCookies();
    
//     const save= async()=>{
//         const re =await fetch("http://localhost:9000/signup/changepsw",{
//             method:"POST",
//             headers:{"Content-type":"application/json"},
//             body:JSON.stringify({cookie:"mycookie"})
//         })
//     }

//   return (
//     <div className="container-fluid pt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-4">
//           <div className="card p-4">
//             <h2 className="text-center mb-4">Change password</h2>
//             <div className="form-group">
//               <label htmlFor="email">Old Password</label>
//               <input
//                 id="email"
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">New Password</label>
//               <input
//                 id="email"
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div className="form-group mt-3">
//               <label htmlFor="password"> Confirm Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter your password"
//               />
//             </div>

//             <div className="form-group mt-4">
//               <button className="btn btn-primary w-100" onClick={save}>
//                 Save
//               </button>
//             </div>

//             <div className="text-center mt-3">
//               <Link to="/">Back</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Changepass;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Changepass = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cookie, createCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  const save = async () => {
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }

    try {
      const response = await fetch("http://localhost:9000/signup/changepsw", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: cookie["mycookie"],
          password: oldPassword,
          newpsw: newPassword
        })
      });

      const data = await response.json();
      if (data.msg === "password changed") {
        alert('Password changed successfully');
        navigate('/');
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container-fluid pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card p-4">
            <h2 className="text-center mb-4">Change password</h2>
            <div className="form-group">
              <label htmlFor="email">Old Password</label>
              <input
                id="email"
                type="password"
                className="form-control"
                placeholder="Enter your old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">New Password</label>
              <input
                id="email"
                type="password"
                className="form-control"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password"> Confirm Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter your confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="form-group mt-4">
              <button className="btn btn-primary w-100" onClick={save}>
                Save
              </button>
            </div>

            <div className="text-center mt-3">
              <Link to="/">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changepass;
