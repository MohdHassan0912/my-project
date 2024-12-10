import { useEffect, useRef } from "react";
import { Cookies, useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [cookie, createcookie, removecookie] = useCookies();
  const jump = useNavigate();
  useEffect(() => {
    if (cookie["admincookie"] == null) {
      jump("/adminlogin");
    }
  }, []);
  const Logout = () => {
    removecookie("admincookie");
    jump("/adminlogin");
  };

  // const baricon = useRef();
  // const sidekaro = () => {
  //   // baricon.current.classList.add("khiskao");
  //   baricon.current.classList.toggle("khiskao");
  // };
  return (
    <>
      <div className="dashboard-div bg-dark">
        <div className="d-flex">
          <Link className="link" to="/admindb">
            <h3 className="p-2">Dashboard</h3>
          </Link>
          <i
          // onClick={sidekaro}
          // className="menu-icon p-1 mt-2 ms-3 fa fa-bars"
          ></i>
        </div>

        <ul>
          <li>
            <Link className="link" to="/Category">
              Category
            </Link>
          </li>
          <li>
            <Link className="link" to="/Sub Category">
              Sub Category
            </Link>
          </li>
          <li>
            <Link className="link" to="/Order">
              Order
            </Link>
          </li>
          <li>
            <Link className="link" to="/Product">
              product
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className=" col-10 bg-dark p-1 text-center text-light ">
            <h1>Dashboard</h1>
          </div>
          <div className="col-2 text-center p-3 bg-light  ">
            <button onClick={Logout} className="btn btn-primary">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid">
        <div
          className="row text-light d-flex justify-content-around bg-warning p-2"
          style={{ padding: "0px" }}
        >
          <div className="col-4 bg-info ms-5 ps-5">
            <h1>Total Orders</h1>
            <h2>8</h2>
          </div>
          <div className="col-4 bg-success">
            <h1>Cancel Orders</h1>
            <h2>2</h2>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 ">
              <table className="table table-hover mt-2">
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>Yasir</td>
                    <td>yasir@gmail.com</td>
                    <td>
                      28-Aug-2024 <br />
                      03:19:23 pm
                    </td>
                    <td>Pending</td>
                    <td>Rs. 3900</td>
                    <td>
                      <button className="btn btn-info">View Details</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Dashboard;
