import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const SubCategory = () => {
  const [a, seta] = useState("");
  const [b, setb] = useState(""); //state for  storing categoryid used in subcategory
  let [mydata, setdata] = useState([]);
  let [subcatpic, setsubcatpic] = useState("");

  let [cdata, setcdata] = useState([]); //   useState for Select dropdown input
  let [a1, seta1] = useState("");
  let [b1, setb1] = useState("");
  let [d1, setd1] = useState("");

  const [cookie,createcookie,removecookie]=useCookies();
  const jump=useNavigate();

  const loadcategory = async () => {
    const re = await fetch("http://localhost:9000/category", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await re.json();
    setcdata(data);
  };

  const save = async () => {
    let fdata = new FormData();
    fdata.append("categoryid", b);
    fdata.append("subcategoryname", a);
    fdata.append("subcat_pic", subcatpic);

    const re = await fetch("http://localhost:9000/subCategory", {
      method: "POST",
      body: fdata,
    });
    const data = await re.json();
    loadrecord();
    // seta("");
  };

  const subloadrecord = async (y) => {
    setb(y);
    const re = await fetch("http://localhost:9000/subCategory", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ categoryid: y }),
    });
    const data = await re.json();
    setdata(data);
  };

  const loadrecord = async () => {
    const re = await fetch("http://localhost:9000/subCategory", {
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
    loadcategory();
  }, []);

  const deleterecord = async (x) => {
    if (window.confirm("Want to delete")) {
      const re = await fetch("http://localhost:9000/subCategory", {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ satid: x }),
      });

      const data = await re.json();
      loadrecord();
    }
  };

  const update = async () => {
    const re = await fetch("http://localhost:9000/subCategory", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ satid: d1, subcategoryname: b1, categoryid: a1 }),
    });
    const data = await re.json();
    alert(data.msg);
    loadrecord();
  };

  //   EDIT MODAL OPENING CODE
  const openEditModal = async (x) => {
    const re = await fetch("http://localhost:9000/subCategory/" + x, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await re.json();
    seta1(data[0].categoryid);
    setb1(data[0].subcategoryname);
    setd1(x);

    document.getElementById("editSubcatModal").style.display = "block";
  };

  const closemd = () => {
    document.getElementById("editSubcatModal").style.display = "none";
  };

  return (
    <>
      <Dashboard />
      <div className="category-main">
        {/* <div className="container-fluid">
          <div className="row">
            <div className=" col-10 bg-dark p-1 text-center text-light">
              <h1>Sub Category</h1>
            </div>
            <div className="col-2 text-center p-3 bg-light ">
              <button className="btn btn-primary">Logout</button>
            </div>
          </div>
        </div> */}
        <div className="container-fluid mm">
          <div className="row">
            <div className="col-9">
              <div class="container-fluid row d-flex justify-content-space-between pb-5 text-end">
                <div className="col-3 text-start ps-5">
                  <div class=" ms-3 form-group ">
                    <label>Select-Category</label>
                    <select value={b}
                      className="form-control"
                      onChange={(e) => {subloadrecord(e.target.value)}}
                    >
                      <option value="select">-Select Category-</option>
                      {cdata.map((x) => {
                        return (
                          <option value={x._id}>{x.categoryname}</option> //categoryname is coming from cdata and cdata contains category data
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-9">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#myModal">
                    <button className="btn btn-primary">
                      Add New Category
                    </button>
                  </a>
                </div>
              </div>
              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">SubCategory</h4>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div class="modal-body">
                      <div class="form-group">
                        <label>Category</label>
                        <select
                          className="form-control"
                          value={b}
                          onChange={(e) => {subloadrecord(e.target.value)}}
                        >
                          <option value="select">-Select Category-</option>
                          {cdata.map((x) => {
                            return (
                              <option value={x._id}>{x.categoryname}</option> //categoryname is coming from cdata and cdata contains category data
                            );
                          })}
                        </select>
                      </div>

                      <div class="form-group ">
                        <label>Sub Category Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={a}
                          onChange={(e) => seta(e.target.value)}
                        />
                        <label>Sub-pic</label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => setsubcatpic(e.target.files[0])}
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

              <div class="tbl container mt-3 ms-5 ps-5">
                <h2>SubCategory</h2>
                <table class=" table table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>S.in</th>
                      <th>Pic</th>
                      <th>CategoryId</th>
                      <th>SubCategoryName</th>
                      <th>Achivement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mydata.map((e, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <img
                              style={{ width: "80px" }}
                              src={"http://localhost:9000/" + e.subcategorypic}
                            />
                          </td>
                          <td>{e.categoryid}</td>{" "}
                          {/* here categoryname is from Schema (API)  */}
                          <td>{e.subcategoryname}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-success"
                              onClick={() => {
                                openEditModal(e._id);
                              }}
                            >
                              <i class="fa-solid fa-pencil"></i>
                            </button>
                            &nbsp;&nbsp;
                            <button
                              className="btn btn-danger"
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Edit button  */}
      <div id="editSubcatModal" className="md-div">
        <h3>Edit sub category</h3>
        <div onClick={closemd} className="cu">
          &times;
        </div>
        <label>Category Name</label>
        <br />
        <input
          type="text"
          value={b1}
          onChange={(e) => setb1(e.target.value)}
          placeholder="Category Name"
        />{" "}
        <br /> <br />
        <label>Category Id</label>
        <br />
        <input
          type="text"
          value={a1}
          onChange={(e) => seta1(e.target.value)}
          placeholder="Category Id"
        />
        <br /> <br />
        <button onClick={update} className="btn btn-primary">
          Update
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        <button onClick={closemd} className="btn btn-dark">
          Cancel
        </button>
      </div>
    </>
  );
};
export default SubCategory;
