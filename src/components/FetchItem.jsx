import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../store/itemSlice'
import fetchStatusActions from '../store/fetchStatusSlice'

const FetchItem = () => {

  const fetchStatus=useSelector((store)=> store.fetchStatus)
  console.log("status",fetchStatus)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(fetchStatus.fetchDone) return
    const controller=new AbortController();
    const signal=controller.signal;
    // dispatch(fetchStatusActions.markFetchingStarted()) 
    fetch("http://localhost:8080/items", signal)
    .then((res)=>  res.json())
    .then(({items})=>{
    //  dispatch(fetchStatusActions.markFetchingFinished()) 
      dispatch(itemActions.addIntialItems(items[0]))
      // console.log("items fetch",items[0]);

    })
    return ()=>{
      controller.abort();
    };
  },[fetchStatus])
  return (
    <>
      {/* fetchdone:{fetchStatus.fetchDone}
      Currently Fetching:{fetchStatus.currentlyFetching} */}
   
    </>
  )
}

export default FetchItem