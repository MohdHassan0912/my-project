import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// import { create } from "../../../Backend/models/subcategory";

const Login = () => {
  const jump = useNavigate();
  const [cookie, createcookie, removecookie] = useCookies();
  const [Aname, setAname] = useState("");
  const [psw, setpsw] = useState("");

  // const funlog=()=>{
  //     if(Aname=="hassan" && psw=="78601"){
  //         createcookie("admincookie","hassan");
  //         jump("/Dashboard");
  //     }
  //     else{
  //         alert("Invalid User");
  //     }
  // }

  const funlog = async () => {
    const re = await fetch("http://localhost:9000/admin", {
      method: "PATCH",
      headers: { "Content-Type": "applicstion/json" },
      body: JSON.stringify({ name: Aname, password: psw }),
    });
    const data = await re.json();
    if (data.msg === "Valid Login") {
      createcookie("admincookie",Aname);
      jump("/Dashboard");
    } else {
      alert(data.msg);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 bg-light p-5" style={{ marginTop: "130px" }}>
            <h3 style={{ color: "black", textAlign: "center" }}>Login page</h3>
            <br />
            <div style={{ color: "black" }}>
              Enter name
              <br />
            </div>
            <input
              type="text"
              onChange={(e) => {
                setAname(e.target.value);
              }}
              placeholder="Enter Name"
              className="form-control"
              style={{ marginBottom: "10px" }}
            />

            <div style={{ color: "black" }}>
              Password
              <br />
              <input
                type="password"
                onChange={(e) => {
                  setpsw(e.target.value);
                }}
                placeholder="Enter Password"
                className="form-control"
                style={{ marginBottom: "10px" }}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={funlog}
              style={{ marginRight: "10px", marginTop: "20px" }}
            >
              Login
            </button>
            <button
              className="btn btn-danger"
              style={{ float: "right", marginTop: "20px" }}
            >
              Forget Password
            </button>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
