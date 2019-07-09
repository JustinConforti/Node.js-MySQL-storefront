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
            message: "What would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Quit"],
            name: "listedOptions"
        }])
        .then(function (inquirerResponse) {

            let response = inquirerResponse.listedOptions
            console.log(response.toString())

            switch (response) {
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
                case ("Quit"):
                    connection.end();
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
        }])
        .then(function (inquirerResponse) {
            if (inquirerResponse.listedOptons === "Quit") {
                connection.end();
            } else {
                displayOptions()
            }
        })

}

function fullProducts() {
    console.log("----------------------------------------------")
    console.log("      ----- Full Inventory List ------   ")
    console.log("----------------------------------------------")
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
        let tString = t.toString()
        console.log(tString)
        displayOptions()
    })

}

function lowInventory() {
    let lowStock = [];
    console.log("----------------------------------------------")
    console.log("      ----- Low Inventory List ------   ")
    console.log("----------------------------------------------")
    connection.query("SELECT * FROM products", function (err, result) {
        for (let i = 0; i < result.length; i++) {
            if (result[i].stock_quantity <= 5) {
                lowStock.push(result[i])
            }
        }
        var t = new Table
        lowStock.forEach(function (product) {
            t.cell('Product Id', product.item_id)
            t.cell('name', product.product_name)
            t.cell('Price, USD', product.price, Table.number(2))
            t.cell('quantity', product.stock_quantity)
            t.newRow()
        })
        let tString = t.toString()
        console.log(tString)
        displayOptions()
    })
}


function addInventory() {
    console.log("add invetory")
    inquirer
        .prompt([{
                type: "input",
                message: "What Item Would You Like To Restock?",
                name: "itemID"
            },
            {
                type: "input",
                message: "How Many Units Would You Like To Add?",
                name: "itemAmount"
            }
        ])
        .then(function (inquirerResponse) {
            var newItemQuantity = 0;
            let itemIDNumber = inquirerResponse.itemID - 1
            console.log(itemIDNumber)
            connection.query("SELECT * FROM products", function (err, result) {
                itemInfo = result[inquirerResponse.itemID - 1]
                console.log(itemInfo)
                itemQuantity = itemInfo.stock_quantity
                console.log(itemQuantity)
                newItemQuantity = parseInt(itemQuantity) + parseInt(inquirerResponse.itemAmount)
                console.log(newItemQuantity)
                console.log(itemIDNumber)
            })
            connection.query("UPDATE products SET ? WHERE ?",
                [{
                        stock_quantity: newItemQuantity
                    },
                    {
                        item_id: itemIDNumber + 1
                    }
                ],
                console.log("Second" + newItemQuantity)
            )
        })
}


function newProduct() {
    console.log("new product")
}