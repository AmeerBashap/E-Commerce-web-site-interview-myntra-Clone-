async function fetchData() {
  // List of random company names
  const randomCompanies = ["TaTa", "TechCorp", "InnoVentures", "GlobalGoods", "PrimeProducts"];

  try {
    const response = await fetch("https://dummyjson.com/products/search?q=dress");
    const data = await response.json();

    const keys = data.products.map((product, index) => ({
      id: (index + 1).toString(),
      image: product.images[0] || "https://via.placeholder.com/150",
      itemfor: product.category || "Everyone", // Adjust this based on your product data structure
      company: product.brand || randomCompanies[Math.floor(Math.random() * randomCompanies.length)],
      item_name: product.title || "Unknown",
      original_price: product.price || 0,
      current_price: product.price ? product.price * 1.1 : 0, // Assuming a 10% increase for current price
      discount_percentage: product.discountPercentage || 0,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: { stars: 5, count: 10 }
    }));

    return keys;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Usage
fetchData().then((keys) => {
  console.log(keys);
  // Store the result in an array
  const resultArray = keys;
  console.log(resultArray); // Now you can use resultArray as needed
});
