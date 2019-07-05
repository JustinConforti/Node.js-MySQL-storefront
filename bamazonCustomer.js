var mysql = require("mysql");
var inquirer = require("inquirer")
let title = "ID" + "    " + "Product Name" + "   " + "Price" + "    " + "Stock Quantity"


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

    connection.connect(function(err) {
        if (err) throw err;
        displayItems()
    });

    function displayItems() {
        connection.query("SELECT * FROM products", function(err, result) {
            if (err) throw err;
                        console.log(title)
                        for (let i = 0; i < result.length; i++) {
                            let itemID = result[i].item_id;
                            let productName = result[i].product_name;
                            // let departmentName = result[i].department_name;
                            let price = result[i].price;
                            let stockQuantity = result[i].stock_quantity;
                            console.log("---------------------")
                            console.log(itemID + "  ||  " + productName+ "  ||   " + price + "    ||  " + stockQuantity);
                            console.log("---------------------")

                        }
                 start();
        })
}

    function start() {
        inquirer
            .prompt ([
                {
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
        .then(function(user) {
            let userItem = user.itemID
            let userRequest = user.quantity
            console.log(user.itemID)
           connection.query("SELECT * FROM products", function(err, result) {
                console.log(result)
            quantityOfItem = result[userItem - 1].stock_quantity
            
            if(quantityOfItem < userRequest) {
                console.log("No can do! Insufficent quantity, try again.")
                start()
                return;
            } else {
                console.log("Sure, can do!")
                updateDatabase(userItem, quantityOfItem, userRequest)
            }
    })
})
    }

    function updateDatabase(userItem, quantityOfItem, userRequest ) {
        console.log("User Info: " +userItem, quantityOfItem, userRequest)
        let newStock = quantityOfItem - userRequest
        console.log(newStock)
        connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newStock
              },
              {
                item_id: userItem
              }
            ],
            function(error) {
              if (error) throw error;
              console.log("Database successfully updated");
              displayItems();
            }
          );
        }

    

