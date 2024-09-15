import React from 'react'
import {BagActions} from '../store/BagSlice'
import { useDispatch } from 'react-redux';
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';

const HomeItem = ({item}) => {
  const dispatch=useDispatch();

  const bagItems=useSelector(store=>store.Bag);
  const elementFound=bagItems.indexOf(item.id)>=0;
  return (
    <div>
       <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound?  
<button type="button" className=" btn-add-bag btn btn-danger" onClick={()=>{dispatch(BagActions.removeFromBag(item.id))}}><MdDelete/>    Remove</button>:
   <button type="button" className=" btn-add-bag btn btn-success" onClick={()=>{dispatch(BagActions.addToBag(item.id))}}><IoIosAddCircle/>   Add to cart</button>
       }
   
    </div>
    </div>
  )
}

export default HomeItem