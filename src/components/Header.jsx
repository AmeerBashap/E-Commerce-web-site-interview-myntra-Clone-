import React, { useRef ,useEffect} from 'react'
import { IoPerson } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { FaSearch } from "react-icons/fa";
import { searchActions } from '../store/SearchSlice';

const Header = () => {
const dispatch =useDispatch();
  const bag=useSelector(store=>store.Bag)
  const query=useSelector(store=>store.Search);
  const inp=useRef();
  const navigate=useNavigate();
  const username=useSelector(store=>store.user.username);
  console.log(" user name",username);

  
  const handleonclick=()=>{
const searchQuery=inp.current.value;
    dispatch(searchActions.setQuery(searchQuery))
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
   inp.current.value='';
  }
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="/">Home</Link>
          <Link to="/Men">Men</Link>
          <Link to="/Women">Women</Link>
          <Link to="/Kids">Kids</Link>
          {/* <a href="#">Home & Living</a> */}
          {/* <a href="#">Beauty</a> */}
        </nav>
        <div className="search_bar">
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
            // value={q}
            // onChange={(e)=>{
            //   dipatch(searchActions.setQuery(e.target.value))
            // }}
            ref={inp}
          />
     {/* <Link to={`/search-results?query=${encodeURIComponent(searchQuery)}`} > */}
{/* </Link> */}

     <FaSearch className="serachicon" onClick={handleonclick} />

        
        </div>
        <div className="action_bar">
          <div className="action_container action_container_profile">
          <IoPerson />
            <Link to="/Login&Signup" className="action_name profile">
              Profile
            </Link>
            {username==="user"?"":<p className="username"><b>Hello,{username}</b></p>}
            
          </div>
      {/* <div className="action_container">
            <FaRegHeart/>
            <span className="action_name wishlist">Wishlist</span>
          </div>*/}
          <div className="action_container " >
            <IoBagHandle/>
            <Link to="/bag" className="action_name Bag">Bag</Link>
            <span className="bag-item-count">{bag.length}</span>
          </div>
        </div>
      </header>
      {/* <hr /> */}
    </>
  )
}

export default Header