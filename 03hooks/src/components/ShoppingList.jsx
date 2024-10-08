import React, {useState} from 'react'

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = () => {
        if (name.trim() !== "" && quantity.trim() !== ""){
            setItems([...items, {name: name, quantity: quantity}])
            console.log(items)
            setName("")
            setQuantity("")
        }
    }

  return (
    <div>
        {
            items.map((item, index) => (
                <li key={index}>
                    <h1>{item.name}: {item.quantity}</h1>
                </li>
            ))
        }
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name'/>
        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='quantity' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ShoppingList