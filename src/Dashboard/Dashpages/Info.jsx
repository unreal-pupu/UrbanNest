import React from 'react'

const Info = () => {
  return (
   <>
    <div className='order-form'>
      <h2>Place Your Delivery Order</h2>
        
            <label for="name">Full Name</label>
            <input type="text" id='name' name='name' placeholder='Enter your name' required/>

            <label for="address">Delivery Address</label>
            <input type="text" id='address' name='address' placeholder='Enter your delivery address' required/>

            <label for="phone">Phone Number</label>
            <input type="tel" id='phone' name='phone' placeholder='Enter your phone number ' required />
            

            <label for="item">Select Item</label>
            <select id="item" name="item">
                <option value="pizza">Pizza</option>
                <option value="burger">Burger</option>
                <option value="pasta">Pasta</option>
                <option value="salad">Salad</option>
                <option value="dessert">Dessert</option>
            </select>

            <label for="quantity">Quantity</label>
            <input type="number" id='quantity' name='quantity' min={1} max={10} value={1} required />
            <button type="submit">Submit Order</button>
    </div>
   </>
  )
}

export default Info