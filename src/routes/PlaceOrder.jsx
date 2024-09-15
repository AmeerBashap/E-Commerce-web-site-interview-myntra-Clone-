import React from 'react'
import { useSelector } from 'react-redux'

const PlaceOrder = () => {
  const bagstore=useSelector(store=>store.Bag);
  console.log("bag items no",bagstore);
  const items=useSelector(store=>store.items);
  // console.log("totalitems", items[0].id);
  const actualitems = items.filter((item) => {
    return bagstore.includes(item.id);
  });
  
  console.log("common", actualitems.id)

  return (
    <div id='placeOrderbody'>
    <div className="PlaceOrder">
    <img id='paymentgif'  src="images/payment.gif" alt="" />
    <h1 id='placeheading'> You Have SuccessFully Placed The Order Please Visit Again </h1>

     {/* <h1> ameer </h1> */}
     {actualitems.map((item)=>(
      <>
      <div className="bag-item-container">
    <div className="item-left-part">
    <img className="bag-item-img" src={item.image}/>
    </div>
    <div className="item-right-part">
      <div className="company">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price-container">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">{item.return_period} days</span> return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">{item.delivery_date}</span>
      </div>
    </div>

    <div className="remove-from-cart"></div>

  </div>
    </>
    ))}
    </div> 
    </div>
  )
}

export default PlaceOrder