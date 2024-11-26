// import { useEffect, useState } from "react";
// import "./home.css";
// import Cshope from "./cshop";
// const Home = () => {
//   return (
//     <>
//       <Cshope />

//       <div className="container-fluid">
//         <div id="demo" class="carousel slide" data-bs-ride="carousel">
//           <div class="carousel-indicators">
//             <button
//               type="button"
//               data-bs-target="#demo"
//               data-bs-slide-to="0"
//               class="active"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#demo"
//               data-bs-slide-to="1"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#demo"
//               data-bs-slide-to="2"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#demo"
//               data-bs-slide-to="3"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#demo"
//               data-bs-slide-to="4"
//             ></button>
//           </div>

//           <div class="carousel-inner">
//             <div class="carousel-item active">
//               <img
//                 className="r2"
//                 src={require("./image/img11.webp")}
//                 alt="Los Angeles"
//                 class="d-block"
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 className="r2"
//                 src={require("./image/img12.webp")}
//                 alt="Chicago"
//                 class="d-block"
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 className="r2"
//                 src={require("./image/img13.webp")}
//                 alt="New York"
//                 class="d-block"
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 className="r2"
//                 src={require("./image/img14.webp")}
//                 alt="New York"
//                 class="d-block"
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 className="r2"
//                 src={require("./image/img15.webp")}
//                 alt="New York"
//                 class="d-block"
//               />
//             </div>
//           </div>

//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-bs-target="#demo"
//             data-bs-slide="prev"
//           >
//             <span class="carousel-control-prev-icon"></span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-bs-target="#demo"
//             data-bs-slide="next"
//           >
//             <span class="carousel-control-next-icon"></span>
//           </button>
//         </div>
//       </div>

//       <div className="container-fluid bg-light m-3 p-3 ">
//         <h4>Beauty,Food,Toys & more</h4>
//         <div className="row">
//           <div className="col-2 ">
//             <img className="m1 " src={require("./image/img21.jpg")} />
//             <p className="text-center">
//               Best Truewireless Headph
//               <br />
//               Grab Now
//             </p>
//           </div>
//           <div className="col-2 ">
//             <img className="m1" src={require("./image/img22.webp")} />
//             <p className="text-center">
//               boAt SmartWatches
//               <br />
//               From 1099
//             </p>
//           </div>
//           <div className="col-2 ">
//             <img className="m1" src={require("./image/img23.jpg")} />
//             <p className="text-center">
//               ViewSonic Monitors
//               <br />
//               From 8000
//             </p>
//           </div>
//           <div className="col-2 ">
//             <img className="m1" src={require("./image/img27.webp")} />
//             <p className="text-center">
//               Noise SmartWatches
//               <br />
//               From 1099
//             </p>
//           </div>
//           <div className="col-2 ">
//             <img className="m1" src={require("./image/img25.jpg")} />
//             <p className="text-center ">
//               Best of shavers
//               <br />
//               From 1,649
//             </p>
//           </div>
//           <div className="col-2 bg-light ">
//             <img className="m1" src={require("./image/img5.jpg")} />
//             <p className="text-center ">Home And Furniture</p>
//           </div>
//         </div>
//       </div>
//       <div className="container-fluid p-3 m-3 ">
//         <div className="row">
//           <div className="col-4 bg-light">
//             <h4>World Cup Specials</h4>
//             <img className="pic6  p-4" src={require("./image/img42.jpg")} />
//             <img className="m3" src={require("./image/img43.jpg")} />
//             <img className="pic6" src={require("./image/img44.jpg")} />
//             <img className="m3" src={require("./image/img45.jpg")} />
//           </div>
//           <div className="col-8 bg-light">
//             <img className="c1" src={require("./image/img41.jpg")} />
//           </div>
//         </div>
//       </div>
//       <div className="container-fluid bg-light m-3 p-3 ">
//         <h4>Beauty,Food,Toys & more</h4>
//         <div className="row">
//           <div className="col-2 ">
//             <img className="m1 " src={require("./image/img48.jpg")} />
//             <p className="text-center">
//               Best Truewireless Headph
//               <br />
//               Grab Now
//             </p>
//           </div>
//           <div className="col-2 ">
//             <img className="m1" src={require("./image/img48.jpg")} />
//             <p className="text-center">
//               boAt SmartWatches
//               <br />
//               From 1099
//             </p>
//           </div>
//           <div className="col-2 ">
//             <img className="m1" src={require("./image/img49.jpg")} />
//             <p className="text-center">
//               ViewSonic Monitors
//               <br />
//               From 8000
//             </p>
//           </div>
//           <div className="col-2 ">
//             <img className="m1" src={require("./image/img47.jpg")} />
//             <p className="text-center">
//               Noise SmartWatches
//               <br />
//               From 1099
//             </p>
//           </div>
//           <div className="col-2 ">
//             <img className="m1" src={require("./image/img49.jpg")} />
//             <p className="text-center ">
//               Best of shavers
//               <br />
//               From 1,649
//             </p>
//           </div>
//           <div className="col-2 bg-light ">
//             <img className="m1" src={require("./image/img49.jpg")} />
//             <p className="text-center ">Home And Furniture</p>
//           </div>
//         </div>
//       </div>
//       <div className="container-fluid bg-dark m-2 p-5">
//         <div className="row">
//           <div className="col-2 text-light  c2">
//             <p>ABOUT</p>
//             Contant Us
//             <br />
//             About Us
//             <br />
//             Flipkart Stories
//             <br />
//             press
//             <br />
//             Corporate Information
//           </div>
//           <div className="col-2 text-light  c2">
//             <p>GROUP COMPANIES</p>
//             Myntra
//             <br />
//             Flipkart Wholesale
//             <br />
//             Cleartrip
//             <br />
//             Shopsy
//           </div>
//           <div className="col-2 text-light  c2">
//             <p>HELP</p>
//             payments
//             <br />
//             Shipping
//             <br />
//             cancellation & Returans
//             <br />
//             FAQ
//             <br />
//             Report Infringement
//           </div>
//           <div className="col-2 text-light  c2">
//             <p>CONSUMER POLICY</p>
//             Cancellation & Returans
//             <br />
//             Terms of Use
//             <br />
//             Privacy
//             <br />
//             Sitemap
//             <br />
//             Grievance Redressal
//             <br />
//             EPR Complinace
//           </div>
//           <div className="col-2 text-light  c2">
//             <p>Mall Us:</p>
//             Flipkart internet Private Limted,
//             <br />
//             Building Alyssa,Begonis &<br />
//             Clove Embassy Tech Village,
//             <br />
//             Outer Ring Road Devarabeesanahalli Village,
//             <br />
//             Bengaluru,56013,
//             <br />
//             karnataka,ndia
//             <br />
//             <i className="fa-fa facebook "></i>
//           </div>
//           <div className="col-2 text-light  c2">
//             <p>Register Office Address</p>
//             Flipkart Internet Private Limited
//             <br />
//             Building Alyssa,Begania &<br />
//             Clave Embassy Tech Village,
//             <br />
//             Outer Ring Road,Devarabeesanahalli Village <br />
//             Bengaluru,56013,
//             <br />
//             karnataka,ndia
//             <br />
//             CIN:U51109KA2012PTCO66107
//             <br />
//             Telephone 044-45614700/044-67415800
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Home;

import { useEffect, useState } from "react";
import "./home.css";
import Cshope from "./cshop";

const Home = () => {
  return (
    <>
      <Cshope />

      <div className="container-fluid">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="3"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="4"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="r2 d-block"
                src={require("./image/img11.webp")}
                alt="Los Angeles"
              />
            </div>
            <div className="carousel-item">
              <img
                className="r2 d-block"
                src={require("./image/img12.webp")}
                alt="Chicago"
              />
            </div>
            <div className="carousel-item">
              <img
                className="r2 d-block"
                src={require("./image/img13.webp")}
                alt="New York"
              />
            </div>
            <div className="carousel-item">
              <img
                className="r2 d-block"
                src={require("./image/img14.webp")}
                alt="New York"
              />
            </div>
            <div className="carousel-item">
              <img
                className="r2 d-block"
                src={require("./image/img15.webp")}
                alt="New York"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      <div className="container-fluid bg-light m-3 p-3">
        <h4>Beauty, Food, Toys & More</h4>
        <div className="row">
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img21.jpg")} />
            <p className="text-center">
              Best Truewireless Headph
              <br />
              Grab Now
            </p>
          </div>
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img22.webp")} />
            <p className="text-center">
              boAt SmartWatches
              <br />
              From 1099
            </p>
          </div>
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img23.jpg")} />
            <p className="text-center">
              ViewSonic Monitors
              <br />
              From 8000
            </p>
          </div>
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img27.webp")} />
            <p className="text-center">
              Noise SmartWatches
              <br />
              From 1099
            </p>
          </div>
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img25.jpg")} />
            <p className="text-center">
              Best of shavers
              <br />
              From 1,649
            </p>
          </div>
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img5.jpg")} />
            <p className="text-center">Home And Furniture</p>
          </div>
        </div>
      </div>

      
      <div className="container-fluid p-3 m-3">
  <div className="row ">
    <div className="col-12 col-md-4 bg-light">
      <h4>Best Gadgets & Appliances</h4>
<div className="row">
      <div className=" n2 col-6">
        <img className="m2 img-fluid" src={require("./image/img70.webp")}  />
        <p className="h5 pt-2 ps-4">
          Mobiles
          <br /><p className="text-success">Min. 50% Off</p>
        </p>
      </div>

      <div className=" n2 col-6">
        <img className="m2 img-fluid" src={require("./image/img71.webp")}  />
        <p className="h5 pt-2 ps-4">
          Cameras
          <br /><p className="text-success">Min. 30% Off</p>
        </p>
      </div>

      <div className=" n2 col-6">
        <img className="m2 img-fluid" src={require("./image/img72.webp")}  />
        <p className="h5 pt-2 ps-4">
          Tower PCs
          <br /><p className="text-success">Min. 50% Off</p>
        </p>
      </div>

      <div className=" n2 col-6">
        <img className="m2 img-fluid" src={require("./image/img74.webp")}  />
        <p className="h5 pt-2 ps-4">
          Projectors
          <br /><p className="text-success">Min. 50% Off</p>
        </p>
      </div>
      </div>
    </div>

    <div className="col-12 col-md-8 bg-light">
      <img className="c1 img-fluid" src={require("./image/img41.jpg")} />
    </div>
  </div>
</div>


      <div className="container-fluid bg-light m-3 p-3 ">
        <h4>LG Double Door,TV,Projector And Washin Machine</h4>
        <div className="row">
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img48.jpg")} />
            <p className="text-center">
              LG Double Door
            </p>
          </div>
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img47.jpg")} />
            <p className="text-center">
              LG Singal Door 
              
            </p>
          </div>
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img73.webp")} />
            <p className="text-center">
            Projector
            </p>
          </div>
          <div className="col-2 n1 mt-4">
            <img className="m1 mt-4" src={require("./image/img82.jpg")} />
            <p className="text-center">
              LG Electronics
            </p>
          </div>
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img49.jpg")} />
            <p className="text-center">
            Washin Machine
            </p>
          </div>
          <div className="col-2 n1 mt-4">
            <img className="m1" src={require("./image/img49.jpg")} />
            <p className="text-center">Washin Machine</p>
          </div>
        </div>
      </div>

      <div className="container-fluid footer m-2 p-5">
        <div className="row">
          <div className="col-2 text-light c2">
            <p className="text-dark">ABOUT:</p>
            Contant Us
            <br />
            About Us
            <br />
            Flipkart Stories
            <br />
            press
            <br />
            Corporate Information
          </div>
          <div className="col-2 text-light c2">
            <p className="text-dark">GROUP COMPANIES:</p>
            Myntra
            <br />
            Flipkart Wholesale
            <br />
            Cleartrip
            <br />
            Shopsy
          </div>
          <div className="col-2 text-light c2">
            <p className="text-dark">HELP:</p>
            payments
            <br />
            Shipping
            <br />
            cancellation & Returns
            <br />
            FAQ
            <br />
            Report Infringement
          </div>
          <div className="col-2 text-light c2">
            <p className="text-dark">CONSUMER POLICY:</p>
            Cancellation & Returns
            <br />
            Terms of Use
            <br />
            Privacy
            <br />
            Sitemap
            <br />
            Grievance Redressal
            <br />
            EPR Compliance
          </div>
          <div className="col-2 text-light c2">
            <p className="text-dark">Mail Us:</p>
            Flipkart Internet Private Limited,
            <br />
            Building Alyssa, Begonia &<br />
            Clove Embassy Tech Village,
            <br />
            Outer Ring Road, Devarabeesanahalli Village,
            <br />
            Bengaluru, 560013,
            <br />
            Karnataka, India
            <br />
            <i className="fa-brands fa-facebook  "></i>
            <i className="fa-brands fa-whatsapp p-1"></i>
            <i className="fa-brands fa-youtube p-1 "></i>
            <i className="fa-brands fa-instagram p-1"></i>
          </div>
          <div className="col-2 text-light c2">
            <p className="text-dark">Register Office Address</p>
            Flipkart Internet Private Limited
            <br />
            Building Alyssa, Begonia &<br />
            Clove Embassy Tech Village,
            <br />
            Outer Ring Road, Devarabeesanahalli Village
            <br />
            Bengaluru, 560013,
            <br />
            Karnataka, India
            <br />
            CIN: U51109KA2012PTCO66107
            <br />
            Telephone 044-45614700/044-67415800
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
