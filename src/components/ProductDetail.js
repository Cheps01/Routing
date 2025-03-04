import { useNavigate } from "react-router-dom";

export function ProductDetail({ product, onAddToCart, showAlert }) {
  const navigate = useNavigate();
  function backToProducts() {
    navigate("/");
  }
  return (
    <>
      <h3>Product Detail</h3>
      <div className="card">
        <div className="card-body">
          <h4>{product.name}</h4>
          <h5>${product.price}</h5>
          <p>{product.description}</p>
        </div>
      </div>
      <div className=" m-3  d-flex justify-content-center">
        <button
          className="btn btn-primary"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
        <button className="btn btn-warning" onClick={backToProducts}>
          Return to Products
        </button>
      </div>
      <div className="d-flex justify-content-center">
        {showAlert && (
          <div className="alert alert-success w-75">
            Product added to cart succesfuly.
          </div>
        )}
      </div>
    </>
  );
}
