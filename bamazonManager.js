//     * View Products for Sale

//     * View Low Inventory

//     * Add to Inventory

//     * Add New Product

//   * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices,
// and quantities.

//   * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

//   * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more"
//  of any item currently in the store.

//   * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.


var mysql = require("mysql");
var inquirer = require("inquirer")
var Table = require('easy-table')


var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
  });


connection.connect(function (err) {
  if (err) throw err;
  displayOptions()
});

function displayOptions() {

    inquirer
    .prompt([{
        type: "list",
        message: "Hello Fellow Manager -- What would you like to do today?",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
        name: "listedOptions"
    }
    ])
.then(function(inquirerResponse) {

    let response = inquirerResponse.listedOptions
    console.log(response.toString())

    switch(response) {
        case ("View Products for Sale"):
        fullProducts()
        break;
        case ("View Low Inventory"):
        lowInventory()
        break;
        case ("Add to Inventory"):
        addInventory()
        break;
        case ("Add New Product"):
        newProduct()
        break;
    }

})
}
function askPrompt() {
    inquirer
.prompt([{
    type: "list",
    message: "What would you like to do from here?",
    choices: ["Quit", "Another Option"],
    name: "listedOptions"
}
])
.then(function(inquirerResponse) {
    if (inquirerResponse.listedOptons === "Quit") {
        connection.end();
    } else {
        displayOptions()
    }
})

}
function fullProducts() {
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        let fullItemArray = [];
    
        for (let i = 0; i < result.length; i++) {
          let itemArray = {
            id: result[i].item_id,
            name: result[i].product_name,
            price: result[i].price,
            quantity: result[i].stock_quantity
          }
          fullItemArray.push(itemArray)
        }
        var t = new Table
        fullItemArray.forEach(function (product) {
          t.cell('Product Id', product.id)
          t.cell('name', product.name)
          t.cell('Price, USD', product.price, Table.number(2))
          t.cell('quantity', product.quantity)
          t.newRow()
        })
    
        console.log(t.toString())
})
}

function lowInventory() {
    console.log("low invetory")
}

function addInventory() {
    console.log("add invetory")
}

function newProduct() {
    console.log("new product")
}
