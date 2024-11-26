import { useNavigate, useParams } from "react-router-dom";
import Cshope from "./cshop";
import { useEffect, useState } from "react";
import{useCookies} from "react-cookie";
import { useDispatch } from "react-redux";
const Shop = () => {
  let [subcatdata, setsubcatdata] = useState([]);
  let [productdata, setproductdata] = useState([]);

  const { cid } = useParams();
  const jump=useNavigate();
  const[cookie,setcookie,removecookie]=useCookies();
  const dispatch=useDispatch();

  const loadsubcategory = async (x) => {
    const re = await fetch("http://localhost:9000/subCategory", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ categoryid: x }),
    });
    const data = await re.json();
    setsubcatdata(data);
  };
  useEffect(() => {
    loadsubcategory(cid);
    setproductdata([]);
  }, [cid]);

  const loadproduct = async (x) => {
    const re = await fetch("http://localhost:9000/product", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ subcatid: x }),
    })
    const data = await re.json();
    setproductdata(data);
  };

  const [q,setq]=useState(0);
  const addtocart=async(x,y,z,a)=>{
    if(cookie["mycookie"]!==null)
    {
      const re=await fetch("http://localhost:9000/cart",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({productid:x,productname:y,price:z,pic:a,username:cookie["mycookie"]})
      });
         const data=await re.json();
      alert(data.msg);
      dispatch({type:"plus"})
      // setq(q+1)   
        }
    else{
      jump("userlogin");
    }
   
  };

  return (
    <>
      <Cshope p={q} />
 
      <div className="container-fluid bg-warning  bg-light">
        <div className="row ">
          <div className="col-3 sub-pic ">
            <ul>
          <div className="card">
              {subcatdata.map((x) => {
                return (
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      loadproduct(x._id);
                    }}
                  >
                    <img src={"http://localhost:9000/" + x.subcategorypic} />
                    <h4>{x.subcategoryname}</h4>
                  </li>
                );
              })}
            </div>
            </ul>
          </div>
          <div className="col-9 pro-pic">
            <div className="row">
              {productdata.map((x) => {
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
                        <button className="btn btn-primary" onClick={()=>{addtocart(x._id,x.productName,x.offerprice,x.pic)}}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
            
        </div>
      </div> 

    </>
  )
};
export default Shop;
