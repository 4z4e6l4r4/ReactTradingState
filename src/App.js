import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Footer from "./components/Footer";
import ProductsDetails from "./pages/ProductsDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";

export default class App extends Component {

  constructor (props){
    super(props);

    this.state = {
      cartProducts: [],
      cartCheckOuts: [],
    };
  }

  addToCart = (cartItem) => {

    this.setState({cartProducts:[...this.state.cartProducts, cartItem]});
    console.log(this.state.cartProducts);
  };

  clearCart = () => {

    this.setState({cartProducts:[]});
    console.log(this.state.cartProducts);
  };

  cartToCheckout = (cartProductItems) => {
    this.setState({
      cartCheckOuts: cartProductItems,

    });
    
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home addToCart = {this.addToCart}/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/product/:slug" element={<ProductsDetails AddToCart = {this.addToCart}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cartProducts = {this.state.cartProducts} cartToCheckout ={this.cartToCheckout}/>} />
          <Route path="/checkout" element={<Checkout cartCheckOuts = {this.state.cartCheckOuts} clearCart = {this.clearCart}/>} />
          <Route path="/orderTracking" element={<OrderTracking />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
