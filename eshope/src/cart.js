import { useEffect, useRef, useState } from "react";
import Cshope from "./cshop";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

const Cart = () => {
  let [cartdata, setcartdata] = useState([]);
  const [cookie, createcookie, removecookie] = useCookies();
  const jump = useNavigate();
  const dispatch = useDispatch();
  const [tot, settot] = useState(0);
  const [gt, setgt] = useState(0);
  const [gst, setgst] = useState(0);
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [zip, setzip] = useState("");
  const [state, setstate] = useState("select");

  const t1=useRef();
  const t2=useRef();
  const t3=useRef();
  const t4=useRef();
  const t5=useRef();
  const t6=useRef();

  const loadcart = async (x) => {
    const re = await fetch("http://localhost:9000/cart/" + x, {
      method: "GET",
      headers: { "Content-type": "appliction/json" },
    });
    const data = await re.json();
   // alert(data.length);
    var tot1 = 0;
    for (var i = 0; i < data.length; i++) {
      tot1 = tot1 + (data[i].price * data[i].quantity);
    }
    settot(tot1);
    var gst = (tot1 * 18) / 100;
    setgt(tot1 + gst + 50);
    setgst(gst);
    setcartdata(data);
  };

  useEffect(() => {
    if (cookie["mycookie"] == null) {
      jump("/");
    }
    loadcart(cookie["mycookie"]);
  }, []);

  const deleterecord = async (x) => {
    if (window.confirm("Want to delete")) {
      const re = await fetch("http://localhost:9000/cart", {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ cid: x }),
      });

      const data = await re.json();
      alert(data.msg);
    }
  };
  const updatecart = async (x, y, z) => {
    const re = await fetch("http://localhost:9000/cart", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ cid: x, qty: y, op: z }),
    });
    const data = await re.json();
    loadcart(cookie["mycookie"]);
    dispatch({type:z});
  };


  // if(name[name.length-1===name.toLowerCase])
  const placeorder = async () => {
    var re=/^\d{10}$/;
    var re1=/^\d{6}$/;
   if(name[0]===name[0].toLowerCase()||name===""|| name[0]===""|| name[name.length-1]===" "){
    setname(name.trim());
    alert("enter name");
    t1.current.focus();
   }
   else if(mobile===""){
    alert("please enter mobile");
    t2.current.focus();
   }
   else if(!mobile.match(re)){
    alert("please enter valid mobile")
    t2.current.focus();
   }
   else if(address===""){
    alert("enter address");
    t3.current.focus();
   }
   else if(city===""){
    alert("enter city");
    t4.current.focus();
   }
   else if(state===""){
    alert("enter state");
    t5.current.focus();
   }
   else if(!zip.match(re1)){
    
    alert("enter zip");
    t6.current.focus();
   }
   else{
    const re = await fetch("http://localhost:9000/order", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        uname: cookie["mycookie"],
        amount:gt,
        name: name,
        address: address,
        mobile: mobile,
        state: state,
        city: city,
        zip: zip,
      }),
    });
    const data = await re.json();
    alert(data.msg);
    loadcart(cookie["mycookie"]);
  }
  };

  return (
    <>
      <Cshope />
      <div className="container-fluid  p-2">
        <div className="row">
          <div className="col-8 b">
            <table className="table table-bordered m-2">
              <thead className="table-dark">
                <tr>
                  <th>1</th>
                  <th>pic</th>
                  <th>productName</th>
                  <th>price</th>
                  <th>QNT</th>
                  <th>Total</th>
                  <th>Actiom</th>
                </tr>
              </thead>
              <tbody>
                {cartdata.map((x, hassan) => {
                  return (
                    <tr>
                      <td>{hassan + 1}</td>
                      <td>
                        <img
                          style={{ width: "80px" }}
                          src={"http://localhost:9000/" + x.pic}
                        />
                      </td>
                      <td>{x.productName}</td>
                      <td>{x.price}</td>
                      <td>{x.quantity}</td>
                      <td>{x.quantity * x.price}</td>
                      <td>
                        <i
                          onClick={() => updatecart(x._id, x.quantity, "plus")}
                          style={{
                            padding: "5px 7px",
                            backgroundColor: "green",
                            cursor: "pointer",
                          }}
                          class="fa-solid fa-plus"
                        ></i>{" "}
                        &nbsp;
                        <i
                          onClick={() => updatecart(x._id, x.quantity, "minus")}
                          style={{
                            cursor: "pointer",
                            padding: "5px 7px",
                            backgroundColor: "red",
                          }}
                          class="fa-solid fa-minus"
                        ></i>
                        &nbsp;&nbsp;
                        <button
                          onClick={() => {
                            deleterecord(x._id);
                          }}
                          className="fa-solid fa-trash"
                        ></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h6>Total : {tot}</h6>
            <h6>Delivary Charge : 50</h6>
            <h6>GST : {gst}</h6>
            <h2>Grand-Total : {gt}</h2>
            <div class="form-group col-md-6">
              <label for="inputCity">Name</label>
              <input ref={t1}
                type="text"
                value={name}
                onChange={(e) => {
                  
                  setname(e.target.value);
                }}
                className="form-control"
                id="inputCity"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity">Mobile</label>
              <input ref={t2}
                type="text"
                onChange={(e) => {
                  setmobile(e.target.value);
                }}
                className="form-control"
                id="inputCity"
              />
            </div>
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input ref={t3}
                type="text"
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input ref={t4}
                  type="text"
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                  className="form-control"
                  id="inputCity"
                />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select ref={t5}
                  id="inputState" 
                  onChange={(e) => {
                    setstate(e.target.value);
                  }}
                  className="form-control">
                  <option value="select">Select State</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Uttrakhand">Uttrakhand</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input ref={t6}
                  type="text"
                  onChange={(e) => {
                    setzip(e.target.value);
                  }}
                  className="form-control"
                  id="inputZip"
                />
              </div>
            </div>
            <br />
            <button
              type="button"
              onClick={placeorder}
              className="btn btn-danger w-50"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
