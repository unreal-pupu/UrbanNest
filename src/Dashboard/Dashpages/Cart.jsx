import React from 'react'
import CartA from '../../assets/CartA.jpg'
import CartB from '../../assets/CartB.jpg'
import CartC from '../../assets/CartC.jpg'
import CartD from '../../assets/CartD.jpg'

const Cart = () => {
  return (
   <>
     <div className="cart-container">
    <div className="cart-header">
      <h1>Your food Cart</h1>
    </div>

    <div className="cart-items">
      <div className="cart-item">
        <div className="item-image">
          <img src={CartB} alt="" />
        </div>
        <div className="item-details">
          <span className="item-name">Spaghetti Bolognese</span>
          <div className="item-quantity">
            <button className="quantity-btn">-</button>
            <span className="quantity">1</span>
            <button className="quantity-btn">+</button>
          </div>
        </div>
        <div class="item-price">$15.99</div>
      </div>

      <div className="cart-item">
        <div className="item-image">
        <img src={CartC} alt="" />
        </div>
        <div className="item-details">
          <span className="item-name">Pooeyes Cajun Fries</span>
          <div className="item-quantity">
            <button className="quantity-btn">-</button>
            <span className="quantity">1</span>
            <button className="quantity-btn">+</button>
          </div>
        </div>
        <div class="item-price">$12.50</div>
      </div>

      <div className="cart-item">
        <div className="item-image">
        <img src={CartD} alt="" />
        </div>
        <div className="item-details">
          <span className="item-name">Iced Peach Green Tea</span>
          <div className="item-quantity">
            <button className="quantity-btn">-</button>
            <span className="quantity">1</span>
            <button className="quantity-btn">+</button>
          </div>
        </div>
        <div className="item-price">$18.00</div>
      </div>

      <div className="cart-item">
        <div className="item-image">
        <img src={CartA} alt="" />
        </div>
        <div className="item-details">
          <span className="item-name">Caesar Salad</span>
          <div className="item-quantity">
            <button className="quantity-btn">-</button>
            <span className="quantity">2</span>
            <button className="quantity-btn">+</button>
          </div>
        </div>
        <div className="item-price">$9.00</div>
      </div>
    </div>

    <div className="summary-section">
      <div className="summary-item">
        <span>Subtotal</span>
        <span id="subtotal">$55.49</span>
      </div>
      <div className="summary-item">
        <span>Tax (10%)</span>
        <span id="tax">$5.55</span>
      </div>
      <div className="summary-item">
        <span><strong>Total</strong></span>
        <span><strong id="total">$61.04</strong></span>
      </div>
    </div>

    <button className="checkout-btn">Proceed to Checkout</button>
  </div>

                  
   </>
  )
}

export default Cart