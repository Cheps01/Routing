import { NavLink } from "react-router-dom";

export function ProductList({ products }) {
  return (
    <div>
      <h3>Product List</h3>
      <ul className="list-group">
        {products.map((item, index) => (
          <div key={index} className="d-flex justify-content-center w-100">
            <li className="list-group-item w-75">
              <h4>
                <NavLink to={`/${item.name}`}>{item.name}</NavLink>
              </h4>
              <p>${item.price}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
