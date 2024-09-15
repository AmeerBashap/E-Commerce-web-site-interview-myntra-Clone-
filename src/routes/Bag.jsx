import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BagSummery from '../components/BagSummery'
import BagItem from '../components/BagItem'
import { useSelector } from 'react-redux'
import EmptyBag from '../components/EmptyBag'
import { Outlet } from 'react-router-dom'

const Bag = () => {
  const bagItems=useSelector(store=>store.Bag)
  const items=useSelector(store=>store.items)


  const finalItems=items.filter(item=>{
    const itemIndex=bagItems.indexOf(item.id);
    return itemIndex>=0;
  })
  console.log("final items lenght",finalItems.length);

  return (
    <>
    <main className="main">
      <div className="bag-page">
        <div className="bag-items-container"> 

          {finalItems.length===0?<EmptyBag></EmptyBag>:
          
          finalItems.map(item=><BagItem key={item.id} item={item}/>)}
        </div>
        <BagSummery/>
      </div>
    </main>
    </>
  )
}

export default Bag