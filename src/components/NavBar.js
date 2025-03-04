import { ProductList } from "./ProductList";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-primary-subtle">
      <div className="container">
        <div className="d-flex w-100 justify-content-around align-items-center">
          <h3>Product Dashboard</h3>
          <div className="d-flex w-50 justify-content-evenly">
            <NavLink to="/" className="nav-link">
              Products
            </NavLink>
            <NavLink to="/cart" className="nav-link">
              Shopping Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
