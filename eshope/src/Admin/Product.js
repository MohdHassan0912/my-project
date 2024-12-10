import { useEffect, useRef, useState } from "react";
import Dashboard from "./Dashboard";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Product = () => {
  //let [catid, setcatid] = useState("");    // state for Category
  let [subcatid, setsubcatid] = useState(""); // state for SubCategory
  let [pname, setpname] = useState(""); // state for Product Name
  let [price, setprice] = useState(""); // state for Price
  let [offerprice, setofferprice] = useState(""); //state for offerprice
  let [discription, setdiscription] = useState("");
  let [pic, setpic] = useState(""); // state for Pic

  let [mydata, setdata] = useState([]); // state for setting data coming from database
  let [cdata, setcdata] = useState([]); //   useState for Select dropdown input
  let [subdata, setsubdata] = useState([]);

  // let [a1, seta1] = useState(""); // state for Updated Category Name
  // let [b1, setb1] = useState(""); // state for Updated SubCategory Name
  let [c1, setc1] = useState(""); // state for Updated Product Nmae
  let [d1, setd1] = useState(""); // state for Updated Price
  let [offerprice1, setofferprice1] = useState("");
  let [discription1, setdiscription1] = useState("");
  let [pic1, setpic1] = useState(""); // state for Pic update

  let [m1, setm1] = useState(""); //state for storing id

  const[cookie,createcookie,removecookie]=useCookies();
  const jump=useNavigate();

  const mdProduct = useRef(); // ref for Product Modal (as id)

  const openProductModal = async (x) => {
    const re = await fetch("http://localhost:9000/product/" + x, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await re.json();
    // console.log(data);
    setc1(data[0].productName);
    
    setd1(data[0].price);
    setofferprice1(data[0].offerprice);
    setdiscription1(data[0].discription);
    setpic1(data[0].pic);
    setm1(x); //m1 has id coming from the Edit button (on which we have clicked)
    mdProduct.current.style.display = "block";
  };
 

  const closeProductModal = () => {
    mdProduct.current.style.display = "none";
  };

  const loadcategory = async () => {
    const re = await fetch("http://localhost:9000/category", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await re.json();
    setcdata(data);
  };
  //loadsubcategoryName function is called in Add New Product Modal (Dropdown Menu for SubCategory)
  const loadsubcategoryName = async (y) => {
    // setsubcatid(y)
    const re = await fetch("http://localhost:9000/subCategory", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ categoryid: y }),
    });
    const data = await re.json();
    setsubdata(data);
  };

  const loardproduct = async (x) => {
    const re = await fetch("http://localhost:9000/product", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ subcatid: x }),
    });
    const data = await re.json();
    setdata(data);
  };

  const save = async () => {
    let fdata = new FormData();
    fdata.append("subcategoryid", subcatid); //append is here to add subcatid in subcategoryid
    fdata.append("productName", pname);
    fdata.append("price", price);
    fdata.append("offerprice", offerprice);
    fdata.append("discription", discription);
    fdata.append("pro_pic", pic);

    const re = await fetch("http://localhost:9000/product", {
      method: "POST",
      body: fdata,
    });

    const data = await re.json();
    alert(data.msg);
    loadrecord();
  };

  const loadrecord = async () => {
    const re = await fetch("http://localhost:9000/product", {
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
    // loadsubcategoryName();
  }, []);

  const deleterecord = async (x) => {
    if (window.confirm("Want to delete")) {
      const re = await fetch("http://localhost:9000/product", {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ mid: x }),
      });

      const data = await re.json();
      loadrecord();
    }
  };

  const update = async () => {
    const re = await fetch("http://localhost:9000/product", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mid: m1, //m1 has id coming from the Edit button (on which we have clicked)
        // category: a1,
        // subcategory: b1,
        productName: c1, //productName is  from Schema (doubtful)
        price: d1,
        offerprice: offerprice1,
        discription: discription,
        pic: pic1,
      }),
    });
    const data = await re.json();
    alert(data.msg);
    loadrecord();
  };

  return (
    <>
      <Dashboard />
      <div className="category-main">
        {/* <div className="container-fluid">
          <div className="row">
            <div className=" col-10 bg-dark p-1 text-center text-light">
              <h1>Product</h1>
            </div>
            <div className="col-2 text-center p-3 bg-light ">
              <button className="btn btn-primary">Logout</button>
            </div>
          </div>
        </div> */}
        <div className="container-fluid mm ">
          <div className="row ">
            <div className="col-9 ">
              <div class="container-fluid row d-flex justify-content-space-between pb-5 text-end">
                <div className="col-3 text-start  ps-4 ">
                  <div class="form-group">
                    <label>Select-Category</label>
                    <select
                      className="form-control"
                      onChange={(e) => loadsubcategoryName(e.target.value)}
                    >
                      <option value="select">-Select Category-</option>
                      {cdata.map((x) => {
                        return <option value={x._id}>{x.categoryname}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-3 text-start ">
                  <div class="form-group">
                    <label>Select-Subcategory</label>
                    <select
                      className="form-control "
                      onChange={(e) => {
                        loardproduct(e.target.value);
                      }}
                    >
                      <option value="select">-Select Subcategory</option>
                      {subdata.map((x) => {
                        return (
                          <option value={x._id}>{x.subcategoryname}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-6 pt-4">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#myModal">
                    <button className="btn btn-primary">
                      Add New Category
                    </button>
                  </a>
                </div>
              </div>
              {/* <div class="container-fluid text-end ">
                <a href="#" data-bs-toggle="modal" data-bs-target="#myModal">
                  <button className="btn btn-primary">Add New Product</button>
                </a>
              </div> */}

              {/* Add New product Modal  */}
              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Product</h4>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div className="modal-body">
                      <div className="form-group">
                        <label>Category Name</label>
                        <select
                          className="form-control"
                          onChange={(e) => loadsubcategoryName(e.target.value)}
                        >
                          <option value="select">-Select Category-</option>
                          {cdata.map((x) => {
                            return (
                              <option value={x._id}>{x.categoryname}</option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Subcategory</label>
                        <select
                          className="form-control"
                          onChange={(e) => setsubcatid(e.target.value)}
                        >
                          <option value="select">-Select SubCategory-</option>
                          {subdata.map((x) => {
                            return (
                              <option value={x._id}>{x.subcategoryname}</option>
                            );
                          })}
                        </select>
                      </div>

                      <div class="form group ">
                        <label>Product Name</label>
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setpname(e.target.value)}
                        />
                      </div>

                      <div class="form group">
                        <label>Price</label>
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setprice(e.target.value)}
                        />
                      </div>

                      <div class="form group">
                        <label>Offer Price</label>
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setofferprice(e.target.value)}
                        />
                      </div>

                      <div class="form group">
                        <label>discription</label>
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setdiscription(e.target.value)}
                        />
                      </div>

                      <div className="form group">
                        <label>Pic</label>
                        <input
                          type="file"
                          class="form-control"
                          onChange={(e) => setpic(e.target.files[0])}
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

              <div class="tbl container ms-5 ps-5">
                <h2>product</h2>
                <table class="  table table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>S.in</th>
                      <th>Pic</th>
                      {/* <th>subCategoryid</th> */}
                      <th>Productname</th>
                      <th>Price</th>
                      <th>Offer Price</th>
                      <th>Discription</th>
                      <th>Achivement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mydata.map((e, hassan) => {
                      return (
                        <tr>
                          <td>{hassan + 1}</td>
                          <td>
                            <img
                              style={{ width: "80px" }}
                              src={"http://localhost:9000/" + e.pic}
                            />
                          </td>
                          {/* <td>{e.subcategory}</td> */}
                          <td>{e.productName}</td>
                          <td>{e.price}</td>
                          <td>{e.offerprice}</td>
                          <td>{e.discription}</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={()=>{openProductModal(e._id)}}
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

      {/* Product Edit Modal code  */}
      <div ref={mdProduct} className="mainproduct-div">
        <div className="mdproduct-div">
          <h2 style={{ textAlign: "center" }}>Edit Products</h2>
          {/* <label>Category Name</label>
          <br />
          <input
            type="text"
            value={a1}
            onChange={(e) => {
              seta1(e.target.value);
            }}
            placeholder="Category"
          />{" "}
          <br />
          <br />
          <label>Sub-Category</label>
          <br />
          <input
            type="text"
            value={b1}
            onChange={(e) => {
              setb1(e.target.value);
            }}
            placeholder="Sub-category"
          />{" "}
          <br />
          <br /> */}
          <label>Product Name</label>
          <br />
          <input
            type="text"
            value={c1}
            onChange={(e) => {
              setc1(e.target.value);
            }}
            placeholder="Product Name"
          />
          <br />
          <br />
          <label>Price</label>
          <br />
          <input
            type="text"
            value={d1}
            onChange={(e) => {
              setd1(e.target.value);
            }}
            placeholder="Price"
          />
          <label>Offer Price</label>
          <br />
          <input
            type="text"
            value={offerprice1}
            onChange={(e) => {
              setofferprice1(e.target.value);
            }}
            placeholder="offer price"
          />
          <label>Description</label>
          <br />
          <input
            type="text"
            value={discription1}
            onChange={(e) => {
              setdiscription1(e.target.value);
            }}
            placeholder="description"
          />
          <label>Pic</label>
          <br />
          <input
            type="file"
            onChange={(e) => {
              setpic1(e.target.files[0]);
            }}
          />
          <br />
          <br />
          <button onClick={update} className="btn btn-warning">
            Update
          </button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={closeProductModal} className="btn btn-dark">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
export default Product;
