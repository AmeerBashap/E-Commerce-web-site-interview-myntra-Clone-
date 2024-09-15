import React from 'react'
import HomeItem from '../components/HomeItem';
import { useSelector } from 'react-redux';

const QueryResults = () => {
  const items = useSelector(store => store.items)
  const {query} =useSelector(store=>store.Search)


  const searchTerm = query; // The word to search 

const searchItems = (items, term) => {// powerfull function  to search key words used   (Search engine)
  return items.filter(item => {
    return Object.values(item).some(value => 
      typeof value === 'string' && value.toLowerCase().includes(term.toLowerCase())
    );
  });
};
const results = searchItems(items, searchTerm);
  return (
    <>
      <main>
        <div className="items-container">
          {results
            .map(item => (
              <HomeItem key={item.id} item={item} />
            ))
          }
        </div>
      </main>
    </>
  );
}

export default QueryResults