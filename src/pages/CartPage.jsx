import React from 'react';
import useCartStore from "../zustand/store";
import '../css/CartPage.css'

const CartPage = () => {
    const cartItems = useCartStore((state) => state.items);
    const clearCart = useCartStore((state) => state.clearCart);
    const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
    const removeItem = useCartStore((state) => state.removeItem);

    const handleClearCart = () => {
        clearCart();
    };

    const increaseQuantity = (item) => {
        updateItemQuantity(item.id, item.quantity + 1);
    };

    const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
            updateItemQuantity(item.id, item.quantity - 1);
        }
    };

    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    return (
        <div className="cart">
            <h1>Cart Items - ({cartItems.length})</h1>
            <button onClick={handleClearCart} className="clear-cart">Clear Cart</button>
            {cartItems?.map((item, index) => (
                <div key={index} className="cart-item">
                    <img src={item.image} alt={item.title} className="item-image"/>
                    <div className="item-details">
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <p>{item.description}</p>
                        <div className="quantity-control">
                            <button onClick={() => decreaseQuantity(item)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item)}>+</button>
                        </div>
                        <button onClick={() => handleRemoveItem(item.id)} className="remove-item">Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartPage;
