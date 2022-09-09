import React from "react";

function CartItem(props) {
  const { title, thumbnail, images, price, description } = props;
  return (
    <div className="card  card_item">
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img
          title="photo"
          src={images.length === true ? images : thumbnail}
          className="img-fluid"
        />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          />
        </a>
      </div>
      <div className="card-body p-3">
        <h5 className="card-title">{title}</h5>
        <p className="card-text pb-5">{description}</p>
        <div className="bottom_content ">
          <a href="#!" className="btn btn-primary">
            add to cart
          </a>
          <span>{price} $</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
