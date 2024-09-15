
const express = require('express');
const  Router=express.Router();
const { getStoredItems } = require('../data/items');


Router.get("/",async (req, res) => {
  const storedItems = await getStoredItems();
  await Promise.resolve(); // Resolve immediately without delay
  res.json({ items: storedItems });
})

module.exports=Router;
