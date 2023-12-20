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
import Fav from "./pages/Fav";

export default class App extends Component {

  constructor (props){
    super(props);

    this.state = {
      cartProducts: [],
      cartCheckOuts: [],
      fav: [],
    };
  }

  addToCart = (cartItem) => {
    const { cartProducts } = this.state;
    const existingProductIndex = cartProducts.findIndex(item => item.id === cartItem.id);
  
    if (existingProductIndex !== -1) {
      const updatedCartProducts = cartProducts.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + cartItem.quantity };
        }
        return item;
      });
  
      this.setState({ cartProducts: updatedCartProducts }, () => {
        console.log(this.state.cartProducts);
      });
    } else {
      this.setState({ cartProducts: [...cartProducts, cartItem] }, () => {
        console.log(this.state.cartProducts);
      });
    }
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

  addToFav = (product) => {
    let newFav = this.state.fav;
    var addedItem = newFav.find((c) => c.product.id === product.id);
    if (!addedItem) {
        newFav.push({product: product});
    }
    this.setState({fav: newFav});
};

removeToFav = (product) => {
    let newFav = this.state.fav.filter((c) => c.product.id !== product.id);
    this.setState({fav: newFav});
};





  render() {
    return (
      <div className="App">
        <Header cartProducts = {this.state.cartProducts}/>
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
          <Route path="/fav" element={<Fav fav={this.state.fav} removeToFav={this.removeToFav} addToCart={this.addToCart}/>}/>
        </Routes>
        <Footer />
      </div>
    );
  }
}
