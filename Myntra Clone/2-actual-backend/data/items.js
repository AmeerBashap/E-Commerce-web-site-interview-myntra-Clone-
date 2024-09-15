const fs = require('node:fs/promises');


async function getStoredItems() {
  const rawFileContent = await fs.readFile('items.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ;
  return storedItems;
}

exports.getStoredItems = getStoredItems;
// exports.storeItems = storeItems;