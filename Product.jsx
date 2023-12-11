import React, { useEffect, useState } from "react";

function Product() {

    const ProductList = [
        { "name": "Apple", "price": 30 },
        { "name": "Mango", "price": 20 },
        { "name": "Gauva", "price": 10 }
    ]

    const [cartItems, setCartItems] = useState([{ "name": "Apple", "price": 30 }])
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(getPrice())
    }, [cartItems])




    function addItem(i) {
        let tempCart = ProductList.filter((item, index) => (i === index));
        setCartItems([...cartItems, ...tempCart]);
    }

    function removeItem(i) {
        let newcart = cartItems.filter((item, index) => (i !== index));
        setCartItems(newcart);
    }

    function getPrice() {
        let total = 0;
        cartItems.forEach((item, index) => (
            total += item.price
        ))
        return total;
    }

    function submit() {
        alert(`Total Price for ${cartItems.length} items is ${total}`)

    }



    return (
        <div>
            <h1>Products :-</h1>
            <ul>
                {ProductList.map((item, index) => (
                    < li key={index}>
                        <p>  {item.name} - {item.price}</p>
                        <button onClick={() => addItem(index)}>Add</button>
                    </li>
                )
                )
                }
            </ul>

            <h1>Cart Items :-</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <p>{item.name}-{item.price}</p>
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>

            <h3>Total: {total}</h3>
            <button onClick={() => submit()}>Submit</button>


        </div >
    );
}

export default Product;