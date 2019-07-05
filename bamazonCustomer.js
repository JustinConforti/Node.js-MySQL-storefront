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

    connection.connect(function(err) {
        if (err) throw err;
        displayItems()
    });
    let title = "ID" + "    " + "Product Name" + "   " + "Price" + "    " + "Stock Quantity"

    function displayItems() {
        connection.query("SELECT * FROM products", function(err, result) {
            if (err) throw err;

            inquirer
                .prompt([{
                    name: "choice",
                    type: "display",
                    choices: function() {
                        let choiceArray = [];
                        console.log(title)
                        for (let i = 0; i < result.length; i++) {
                            let itemID = result[i].item_id;
                            let productName = result[i].product_name;
                            // let departmentName = result[i].department_name;
                            let price = result[i].price;
                            let stockQuantity = result[i].stock_quantity;
                            console.log("---------------------")
                            console.log(itemID + "     " + productName   + "     " + price + "      " + stockQuantity);
                            console.log("---------------------")

                        }
                
                    }
                }]
                 )
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
        .then(function(err, answer) {
            
    }


  