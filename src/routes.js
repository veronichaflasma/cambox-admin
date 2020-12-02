import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./views/Dashboard";
import Customers from "./views/Customers";
import Products from "./views/Products";
import Errors from "./views/Errors";
import Mitra from "./views/Mitra";
import Transaction from "./views/Transaction";
import Login from "./views/Login";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/customers",
    layout: DefaultLayout,
    component: Customers
  },
  {
    path: "/products",
    layout: DefaultLayout,
    component: Products
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/transaction",
    layout: DefaultLayout,
    component: Transaction
  },
  {
    path: "/mitra",
    layout: DefaultLayout,
    component: Mitra
  },
 
];
