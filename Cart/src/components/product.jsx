import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cart-slice";

function Product({ product }) {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);

    const isProductInCart = cart.some(item => item.id === product.id);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
    }

    const handleToggleCart = () => {
        if (isProductInCart) {
            handleRemoveFromCart();
        } else {
            handleAddToCart();
        }
    }

    return (
        <div className="product">
            <img
                className="image"
                src={product.image}
                alt={product.title}
            />
            <h3 className="title">{product.title}</h3>
            <button onClick={handleToggleCart} className="btn">
                {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
        </div>
    );
}

export default Product;
