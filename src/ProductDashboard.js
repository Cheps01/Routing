import "./styles.css";
import { NavBar } from "./components/NavBar";
import { ProductList } from "./components/ProductList";
import { ShoppingCart } from "./components/ShoppingCart";
import { ProductDetail } from "./components/ProductDetail";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((jsonData) => setProducts(jsonData))
      .catch((error) => console.error("Could not retreive data.", error));
  }, []);
  useEffect(() => {
    setShowAlert(true);
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [cart]);
  function handleAddToCart(product) {
    let repeated = false;
    cart.forEach((item) => {
      repeated = item.name === product.name;
    });
    if (repeated) return;
    setCart([
      ...cart,
      { name: product.name, price: product.price, quantity: 1 },
    ]);
  }
  function handleRemoveFromCart(product) {
    setCart(cart.filter((item) => item.name !== product.name));
  }
  function handleIncrease(product) {
    setCart(
      cart.map((item) => {
        let valueToChange = item.name === product.name;
        return {
          name: item.name,
          price: item.price,
          quantity: valueToChange ? item.quantity + 1 : item.quantity,
        };
      })
    );
  }
  function handleDecrease(product) {
    setCart(
      cart.map((item) => {
        let valueToChange = item.name === product.name && item.quantity > 1;
        return {
          name: item.name,
          price: item.price,
          quantity: valueToChange ? item.quantity - 1 : item.quantity,
        };
      })
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          {products.map((item, index) => (
            <Route
              key={index}
              path={`/${item.name}`}
              element={
                <ProductDetail
                  product={item}
                  onAddToCart={handleAddToCart}
                  showAlert={showAlert}
                />
              }
            />
          ))}
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart}
                onRemove={handleRemoveFromCart}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
