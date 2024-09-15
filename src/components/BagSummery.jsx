import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const BagSummery = () => {
  const bagItems=useSelector(store=>store.Bag)
  console.log("baglen",bagItems.length);
  let CONVENIENCE_FEES=99;
  
  const items=useSelector(store=>store.items)
  const finalItems=items.filter(item=>{
    const itemIndex=bagItems.indexOf(item.id);
    return itemIndex>=0;
  })

 let totalItem = bagItems.length;
 let totalMRP = 0;
 let totalDiscount = 0;

 finalItems.forEach(bagItem => {
   totalMRP += bagItem.original_price;
   totalDiscount += bagItem.original_price - bagItem.current_price;
 });
 
 if(bagItems.length===0){
  CONVENIENCE_FEES=0
 }


 
 let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

const navigate=useNavigate()
 const handlePlaceOrder=()=>{
  navigate("/PlaceOrder");
  console.log("place order");
 }

  return (
    <>
    <div className="bag-summary">
    
      <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni" onClick={handlePlaceOrder}>PLACE ORDER</div>
  </button>
  </div>
    </>
  )
}

export default BagSummery