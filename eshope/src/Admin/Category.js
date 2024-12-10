import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Category = () => {
  let [a, seta] = useState("");
  let [mydata, setdata] = useState([]);
  let [catpic, setcatpic]=useState("");

  let [a1, seta1] = useState("");
  let [d1, setd1] = useState("");

  const [cookie,createcookie,removecookie]=useCookies();
  const jump=useNavigate();

  const save = async () => {
    let fdata=new FormData();
    fdata.append("categoryname",a);    //a is here state which contains categoryname
    fdata.append("cat_pic",catpic);

    const re = await fetch("http://localhost:9000/Category", {
      method: "POST",
      body: fdata
    });

    const data = await re.json();
    loadrecord();
    // seta("");
  };

  const loadrecord = async () => {
    const re = await fetch("http://localhost:9000/Category", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await re.json();
    setdata(data);
  };
  useEffect(() => {
    if(cookie["admincookie"]==null){
      jump("/adminlogin")
    }
    loadrecord();
  }, []);

  const deleterecord = async (x) => {
    if (window.confirm("Want to delete")) {
      const re = await fetch("http://localhost:9000/Category", {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ catid: x }),
      });

      const data = await re.json();
      loadrecord();
    }
  };

  const update = async () => {
    const re = await fetch("http://localhost:9000/Category", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ catid: d1, categoryname: a1 }),
    });
    const data = await re.json();
    alert(data.msg);
    loadrecord();
  };


  const openmodal = async (x) => {
    const re = await fetch("http://localhost:9000/Category/" + x, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await re.json();
    seta1(data[0].categoryname);
    setd1(x);

    document.getElementById("md").style.display = "block";
  };

  const fun1 = () => {
    document.getElementById("md").style.display = "none";
  };

  return (
    <>
      <Dashboard />
      <div className="category-main ">
        {/* <div className="container-fluid">
          <div className="row">
            <div className=" col-10 bg-dark p-1 text-center text-light ">
              <h1>Category</h1>
            </div>
            <div className="col-2 text-center p-3 bg-light  ">
              <button className="btn btn-primary">Logout</button>
            </div>
          </div>
        </div> */}
        <div className="container-fluid  mm">
          <div className="row">
            <div className="col-9 col-sm-12">
              <div className="container-fluid text-end ">
                <a href="#" data-bs-toggle="modal" data-bs-target="#myModal">
                <button className="btn btn-primary ">Add New Category</button>
                </a>
              </div>

              {/* Add New Category modal  */}
              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Category</h4>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div class="modal-body">
                      <div class="from group">
                        <label>Category Name</label>
                        <input
                          type="text"
                          class="from control"
                          value={a}
                          onChange={(e) => seta(e.target.value)}
                          
                        /> 
                        <br />
                        <br />

                        <label>Cat Pic</label>
                        <input
                          type="file"
                          class="form-control"
                          
                          onChange={(e) => setcatpic(e.target.files[0])}
                        />
                      </div>
                    </div>

                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={save}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container ms-2  ">
                <h2>Category</h2>
                <table className=" table table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>S.in</th>
                      <th>Pic</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mydata.map((e, hassan) => {
                      return (
                        <tr>
                          <td>{hassan + 1}</td>
                          <td><img style={{width:"80px"}}  src={"http://localhost:9000/"+e.categorypic}/></td>   {/* category pic is from Schema */}
                          <td>{e.categoryname}</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => {
                                openmodal(e._id);
                              }}
                            >
                              <i class="fa-solid fa-pencil"></i>
                            </button>
                            &nbsp;&nbsp;
                            <button className="btn btn-danger"
                              onClick={() => {
                                deleterecord(e._id);
                              }}
                            >
                              <i class="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* Edit Category Modal  */}
                <div id="md" className="main1">
                  <div className="modal1">
                    <input
                      type="text"
                      value={a1}
                      onChange={(e) => {
                        seta1(e.target.value);
                      }}
                      placeholder="Category Name"
                    />
                    {""}
                    <br />
                    <br />

                    <button onClick={update} className="update-btn">
                      update
                    </button>
                    &nbsp;&nbsp;
                    <button onClick={fun1} className="cancel-btn">
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
