import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../slices/cart-slice";

function Cart() {
    const [total, setTotal] = useState(0);
    const { cart } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="container">
            {cart && cart.length ? (
                <div>
                    <div className="product-container">
                        {cart.map((item) => (
                            <div key={item.id} className="product">
                                <img
                                    className="image"
                                    src={item.image}
                                    alt={item.title}
                                />
                                <div className="item-details">
                                    <h3 className="title">{item.title}</h3>
                                    <p className="price">${item.price}</p>
                                    <button
                                        className="btn"
                                        onClick={() => handleRemoveFromCart(item.id)}
                                    >
                                        Remove from Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total">
                        <h3>Total: ${total.toFixed(2)}</h3>
                    </div>
                </div>
            ) : (
                <h2 className="empty">Cart is Empty</h2>
            )}
        </div>
    );
}

export default Cart;


