// import { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
// import { Link, useNavigate } from "react-router-dom";

// const Cshope = ({ p }) => {
//   let [cdata, setcdata] = useState([]);
//   const [cookie, createcookie, removecookie] = useCookies();
//   const jump = useNavigate();

//   const getcdata = async () => {
//     const re = await fetch("http://localhost:9000/category", {
//       method: "GET",
//       headers: { "Content-type": "application/json" },
//     });
//     const data = await re.json();
//     setcdata(data);
//   };

//   useEffect(() => {
//     getcdata();
//   }, []);

//   const logout = () => {
//     removecookie("mycookie");
//     jump("/");
//   };

//   return (
//     <>
//       <div className="container-fluid p-2 bg-light ">
//         <div className="row ">
//           <div className="col-2   text-end">
//             <img className="pic1 bg-light" src={require("./image/img.png")} />
//           </div>
//           <div className="col-5 pt-3">
//             <i className="fa-solid fa-magnifying-glass "></i>
//             <input
//               className="r1"
//               type="text"
//               placeholder="Search For Product,Brand and More"
//             />
//           </div>
//           <div class="col-2 text-center   pt-3">
//             <button
//               type="button"
//               class=" bt1 bg-light dropdown-toggle"
//               data-bs-toggle="dropdown"
//             >
//               {/* <img className='pic2 ' src={require("./image/img2.png")} /> */}
//               Order
//             </button>
//             <ul class="dropdown-menu">
//               <li>
//                 <a class="dropdown-item" href="#">
//                   MyProfile
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Flipkart Plus Zone
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Order
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Wishlist
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Reward
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   GiftCard
//                 </a>
//               </li>
//               <li class="dropdown-divider"></li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   SinUp
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="col-1   pt-3">
//             <button className="btn btn-outline-primary ">
//               <Link to="/Cart">
//                 <i className="cart-icon fa fa-shopping-cart">
//                   <div className="count-cart">{p}</div>
//                 </i>
//               </Link>
//             </button>
//           </div>
//           <div className="col-2   pt-3 ">
//             <div class="col-2 text-center   pt-1">
//               <button
//                 type="button"
//                 class="btn btn-outline-primary"
//                 data-bs-toggle="dropdown"
//               >
//                 Logout
//               </button>
//               <ul class="dropdown-menu">
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     MyProfile
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Flipkart Plus Zone
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Order
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Wishlist
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Reward
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     GiftCard
//                   </a>
//                 </li>
//                 <li class="dropdown-divider"></li>
//                 <li className="m-2" onClick={logout}>
//                   Logout
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container-fluid m-3 text-center ">
//         <div className="d-flex b">
//           {cdata.map((x) => {
//             return (
//               <Link to={"/shop/" + x._id}>
//                 <div className="card m-1">
//                   <div style={{ textAlign: "center" }}>
//                     <img
//                       className="card-img-top c-pic"
//                       src={"http://localhost:9000/" + x.categorypic}
//                       alt="card image"
//                     />
//                   </div>
//                   <div className="card-body">
//                     <h4 className="card-title">{x.categoryname}</h4>
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
// export default Cshope;

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Cshope = () => {
  const [cdata, setcdata] = useState([]);
  const [cookie, createcookie, removecookie] = useCookies();
  const jump = useNavigate();
  const p = useSelector((state) => state.Cartitem);
  const dispatch = useDispatch();

  const getcdata = async () => {
    const re = await fetch("http://localhost:9000/category", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await re.json();
    setcdata(data);
  };

  useEffect(() => {
    loadcart(cookie["mycookie"]);
    getcdata();
  }, []);

  const logout = () => {
    removecookie("mycookie");
    jump("/");
  };

  const loadcart = async (x) => {
    const re = await fetch("http://localhost:9000/cart/" + x, {
      method: "GET",
      headers: { "Content-type": "appliction/json" },
    });
    const data = await re.json();

    var csum = 0;
    for (var i = 0; i < data.length; i++) {
      csum = csum + parseInt(data[i].quantity);
    }

    dispatch({ type: "cval", cdata: csum });
  };

  const [sproductdata, setsproductdata] = useState([]);

  const loadsproduct = async (x) => {
    const re = await fetch("http://localhost:9000/sproduct", {
      method: "PATCH",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({ pname: x }),
    });
    const data = await re.json();
    setsproductdata(data);
  };

  return (
    <>
      <div className="container-fluid p-3 header">
        <div className="row align-items-center">
          <div className="col-12 col-md-2 text-center text-md-start  d-flex  text-light">
            <img className="pic1" src={require("./image/jhola.png")} />
            <h2 className="pt-2">shopify</h2>
          </div>
          <div className="col-12 col-md-4 mt-2  mt-md-0">
            <div className="input-group inpt-div border">
              <i className="fa-solid fa-magnifying-glass pt-2 r1"></i>
              <input
                onChange={(e) => {
                  loadsproduct(e.target.value);
                }}
                className=" inpt-header"
                type="text"
                placeholder="Search For Product, Brand and More"
              />
            </div>
          </div>

          <div className="col-12 col-md-4 dd mt-md-0">
            <ul>
              <li>
              <Link to="/">
                <a href="" className="menu">
                  Home
                </a>
                </Link>
              </li>
              <li>
              <Link to="/shop/:cid">
                <a href="" className="menu">
                  Shop
                </a>
                </Link>
              </li>
              <li>
              <Link to="/Men">
                <a href="" className="menu">
                  Men
                </a>
                </Link>
              </li>
              <li>
              <Link to="/Woman">
                <a href="" className="menu">
                  Woman
                </a>
                </Link>
              </li>
              <li>
                <a href="" className="menu">
                  About
                </a>
              </li>
              <li>
                <a href="" className="menu">
                  Content
                </a>
              </li>
            </ul>
            {/* <button
              type="button"
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Order
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  MyProfile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Flipkart Plus Zone
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Order
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Reward
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  GiftCard
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </ul> */}
          </div>
          <div className="col-12 col-md-1 text-end mt-2 mt-md-0 ">
            {/* <button className="btn btn-outline-primary"> */}
            <Link to="/Cart" className="text-decoration-none">
              <i className="cart-icon fa fa-shopping-cart">
                <div className="count-cart">{p}</div>
              </i>
            </Link>
            {/* </button> */}
          </div>
          <div className="col-12 col-md-1 text-end mt-2 mt-md-0">
            <div className="dropdown">
              <i
                className="h4 fa fa-user text-light"
                data-bs-toggle="dropdown"
              ></i>
              <ul className="dropdown-menu">
                <Link to="/changepass">
                  {/* {" "} */}
                  <li>
                    <a class="dropdown-item" href="#">
                      Change Password
                    </a>
                  </li>
                </Link>

                <li>
                  <Link to="/userorder" className="dropdown-item">
                    UserOrder
                  </Link>
                </li>
                {/* {
                  cookie["mycookie"]==null?<li><Link class="dropdown-item" to="/userlogin">Login</Link></li>:<li><a class="dropdown-item" onClick={logout}>Logout</a></li>
              } */}
                {cookie["mycookie"] == null ? (
                  <li>
                    <Link class="dropdown-item" to="/userlogin">
                      Login
                    </Link>
                  </li>
                ) : (
                  <li>
                    <a class="dropdown-item" onClick={logout}>
                      Logout
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid m-3 ">
        <div className="row">
          {cdata.map((x) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-2 mb-3 cdata"
              key={x._id}
            >
              <Link to={`/shop/${x._id}`} className="text-decoration-none">
                <div className="card  d-flex text-center">
                  <div className=" w-100 text-center">
                    <img
                      className=" bg-success"
                      style={{ width: "40%" }}
                      src={`http://localhost:9000/${x.categorypic}`}
                      alt={x.categoryname}
                    />
                  </div>
                  <div className="card-body  text-center">
                    <h5 className="card-title">{x.categoryname}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        {sproductdata.map((x) => {
          return (
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top "
                  style={{ width: "100px" }}
                  src={"http://localhost:9000/" + x.pic}
                  alt="card image"
                />
                <div className="card-body ">
                  <h4 className="card-title">{x.productName}</h4>
                  <p className="card-text">
                    price:
                    <del>
                      <span className="text-danger">{x.price}</span>
                    </del>
                    &nbsp;&nbsp;{x.offerprice}
                  </p>
                  <p>{x.discription}</p>
                  {/* <button className="btn btn-primary" onClick={()=>{addtocart(x._id,x.productName,x.offerprice,x.pic)}}> */}
                  {/* Add to Cart
                        </button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cshope;
