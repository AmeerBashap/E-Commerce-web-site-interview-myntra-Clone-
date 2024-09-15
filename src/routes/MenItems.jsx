import React from 'react';
import HomeItem from '../components/HomeItem';
import { useSelector } from 'react-redux';

const MenItems = () => {
  const items = useSelector(store => store.items);
  return (
    <>
      <main>
        <div className="items-container">
          {items
            .filter(item => item.itemfor === "Men" || item.itemfor === "Everyone")// here first filters the array and return have map 
            .map(item => (
              <HomeItem key={item.id} item={item} />
            ))
          }
        </div>
      </main>
    </>
  );
}

export default MenItems;
