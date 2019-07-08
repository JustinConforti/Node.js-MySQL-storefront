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

    console.log(inquirerResponse)
})
}
