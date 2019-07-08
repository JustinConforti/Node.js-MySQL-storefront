var mysql = require("mysql");
var inquirer = require("inquirer")
var Table = require('easy-table')
var userTotalSpent = 0;



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
  displayItems()
});

function displayItems() {
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
    start();
  })
}

function start() {
  inquirer
    .prompt([{
        name: "itemID",
        type: "input",
        message: "Which item would you like to buy? Insert the item's ID",
      },

      {
        name: "quantity",
        type: "input",
        message: "How many of these items would you like to buy? Enter a number",
      }
    ])
    .then(function (user) {
      let userItem = user.itemID
      let userRequest = user.quantity
      connection.query("SELECT * FROM products", function (err, result) {
        quantityOfItem = result[userItem - 1].stock_quantity

        if (quantityOfItem < userRequest) {

          console.log("             \nNo can do! Insufficent quantity, try again.")
          start()
          return;
        } else {
          console.log("             Sure, can do! Processing order now ")
          updateDatabase(userItem, quantityOfItem, userRequest)
        }
      })
    })
}

function updateDatabase(userItem, quantityOfItem, userRequest) {
  let newStock = quantityOfItem - userRequest
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [{
        stock_quantity: newStock
      },
      {
        item_id: userItem
      }
    ],
    function (error) {
      if (error) throw error;
      console.log("Database successfully updated");
      updateUserTotal(userItem, userRequest);
    }
  );
}

function updateUserTotal(userItem, userRequest) {
  let listOfPrices = [];
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    for (let i = 0; i < result.length; i++) {
      listOfPrices.push(result[i].price)
    }
    let userTotal = listOfPrices[userItem - 1] * userRequest
    userTotalSpent = userTotalSpent + userTotal
    console.log("You have spend a total of: " + userTotalSpent + "$")
  })

  displayItems();
}