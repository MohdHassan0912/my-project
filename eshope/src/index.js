import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Login from "./Admin/Login";
import Category from "./Admin/Category";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Admin/Dashboard";
import SubCategory from "./Admin/Sub Category";
import Product from "./Admin/Product";
import Order from "./Admin/Order";
import Cshope from "./cshop";
import Shop from "./shop";
import SinUp from "./signup";
import Userlogin from "./login";
import Cart from "./cart";
import {Provider} from "react-redux";
import store from "./store";
import Admindb from "./Admin/Admindb";
import UserOrder from "./userorder";
import Email from "./email";
import Changepass from "./changepass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashborad" element={<Dashboard />} />
          <Route exact path="/adminlogin" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/Category" element={<Category />} />
          <Route exact path="/Sub Category" element={<SubCategory />} />
          <Route exact path="/Order" element={<Order />} />
          <Route exact path="/Product" element={<Product />} />
          <Route exact path="/shop/:cid" element={<Shop />} />
          <Route exact path="/singup" element={<SinUp />} />
          <Route exact path="/Userlogin" element={<Userlogin />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/admindb" element={<Admindb/>} />
          <Route exact path="/userorder" element={<UserOrder/>} />
          <Route exact path="/email" element={<Email/>} />
          <Route exact path="/changepass" element={<Changepass/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
