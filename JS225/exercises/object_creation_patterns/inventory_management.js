function ItemManager() {}
ItemManager.items = [];

ItemManager.create = function (name, category, quantity) {
  if (this.isValidItem(name, category, quantity)) {
    let sku = this.createSku(name, category);
    this.items.push({sku, name, category, quantity });
  } else {
    return false;
  }
}

ItemManager.isValidItem = function (name, category, quantity) {
  return (name.replaceAll(' ', '').length >= 5 &&
    category.split(' ').length === 1 &&
    category.length >= 5 &&
    quantity !== undefined);
}

ItemManager.createSku = function (name, category) {
  let sku = '';
  nameArr = name.split(' ');
  if (nameArr.length > 1 && nameArr[0].length === 2) {
    sku = nameArr[0][0].slice(0,1) + nameArr[1][0]
  } else {
    sku = name.slice(0,3)
  }
  sku += category.slice(0, 2);
  return sku.toUpperCase();
}

ItemManager.getItem = function (sku) {
  return this.items.find(item => item.sku === sku);
}

ItemManager.getItemIndex = function (sku) {
  for (let i = 0; i < this.items.length; i += 1) {
    if (this.items[i].sku === sku) return i;
  }
  return -1;
}

ItemManager.update = function (sku, obj) {
  let item = ItemManager.getItem(sku);
  Object.keys(obj).forEach(key => {
    item[key] = obj[key];
  });
}

ItemManager.delete = function (sku) {
  this.items.splice(ItemManager.getItemIndex(sku), 1);
}

ItemManager.inStock = function () {
  return this.items.filter(item => item.quantity > 0);
}

ItemManager.itemsInCategory = function (category) {
  return this.items.filter(item => item.category === category);
}

function ReportManager() { };
ReportManager.items = {};

ReportManager.init = function (itemManager) { ReportManager.items = itemManager };

ReportManager.createReporter = function (sku) {
  let item = this.items.getItem(sku);
  return {
    itemInfo() {
      for (let key in item) {
        console.log(`${key}: ${item[key]}`);
      }
    }
  }
}

ReportManager.reportInStock = function () {
  let item_names = this.items.inStock().map(item => item.name);
  console.log(item_names.join(', '));
}


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10