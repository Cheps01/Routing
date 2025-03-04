export function ShoppingCart({ cart, onRemove, onIncrease, onDecrease }) {
  return (
    <div>
      <h2>Cart</h2>
      <div className="container">
        {cart.map((item, index) => (
          <div key={index} className="row">
            <div className="col">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Amount: {item.quantity}</p>
            </div>
            <div className="col">
              <button
                className="btn btn-primary m-1"
                onClick={() => onIncrease(item)}
              >
                +
              </button>
              <button
                className="btn btn-warning m-1"
                onClick={() => onDecrease(item)}
              >
                -
              </button>
              <button
                className="btn btn-danger m-1"
                onClick={() => onRemove(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
