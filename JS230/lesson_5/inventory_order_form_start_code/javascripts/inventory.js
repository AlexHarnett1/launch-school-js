var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      // $("#order_date").text(date.toUTCString());
      document.getElementById('order_date').textContent = date.toUTCString();
    },
    cacheTemplate: function() {
      // var $iTmpl = $("#inventory_item").remove();
      // this.template = $iTmpl.html();
      // console.log($iTmpl.html());

      var iTmpl = document.getElementById('inventory_item');
      this.template = iTmpl.innerHTML;
      iTmpl.remove();
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function(itemNode) {
      // var id = this.findID($item),
      //     item = this.get(id);

      // item.name = $item.find("[name^=item_name]").val();
      // item.stock_number = $item.find("[name^=item_stock_number]").val();
      // item.quantity = $item.find("[name^=item_quantity]").val();

      var id = this.findID(itemNode),
        item = this.get(id);

      item.name = itemNode.querySelector("[name^=item_name]").value;
      item.stock_number = itemNode.querySelector("[name^=item_stock_number]").value;
      item.quantity = itemNode.querySelector("[name^=item_quantity]").value;
    },
    newItem: function(e) {
      // e.preventDefault();
      // var item = this.add(),
      //     $item = $(this.template.replace(/ID/g, item.id));
      // $("#inventory").append($item);

      e.preventDefault();
      var item = this.add();
      var itemHTML = this.template.replace(/ID/g, item.id);
      var itemNode = document.createElement('tr');
      document.getElementById("inventory").appendChild(itemNode);
      itemNode.outerHTML = itemHTML;

    },
    findParent: function(e) {
      // return $(e.target).closest("tr");
      return e.target.closest("tr");
    },
    findID: function (item) {
      //return +$item.find("input[type=hidden]").val();
      return +item.querySelector('input[type=hidden]').value;
    },
    deleteItem: function(e) {
      // e.preventDefault();
      // var $item = this.findParent(e).remove();
      // this.remove(this.findID($item));

      e.preventDefault();
      var item = this.findParent(e);
      item.remove();
      this.remove(this.findID(item));
    },
    updateItem: function (e) {
      // var $item = this.findParent(e);
      //this.update($item);

      var item = this.findParent(e);
      console.log(item);
      this.update(item);
    },
    bindEvents: function() {
      // $("#add_item").on("click", $.proxy(this.newItem, this));
      document.getElementById("add_item").addEventListener('click', (e) => {
        this.newItem(e);
      });
      document.getElementById("inventory").addEventListener("click", "a.delete", (e) => {
        this.deleteItem(e);
      });
      document.getElementById("inventory").addEventListener("blur", ":input", (e) => {
        this.updateItem(e)
      });
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

// $($.proxy(inventory.init, inventory));
document.addEventListener('DOMContentLoaded', e => inventory.init.bind(inventory)());
