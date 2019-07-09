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
        return tString
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
            var managerRequest = inquirerResponse.itemAmount
            connection.query("SELECT * FROM products", function (err, result) {
                itemInfo = result[inquirerResponse.itemID - 1]
                itemName = itemInfo.product_name
                itemQuantity = itemInfo.stock_quantity
                newItemQuantity = parseInt(itemQuantity) + parseInt(inquirerResponse.itemAmount)
                updateDataBase(itemIDNumber, newItemQuantity, itemQuantity, managerRequest, itemName)
            })
        })
}

function updateDataBase(itemIDNumber, newItemQuantity, itemQuantity, managerRequest, itemName) {

    connection.query("UPDATE products SET ? WHERE ?",
        [{
                stock_quantity: newItemQuantity
            },
            {
                item_id: itemIDNumber + 1
            }
        ],
    )
    console.log("Restocking successful! You've added " + managerRequest + " units to " + itemName)
    console.log("Heres an updated list of products")
    fullProducts()
}

function newProduct() {
    console.log("new product")
    inquirer
        .prompt ([
            {
                type: "input",
                message: "What is the name of your new item?",
                name: "itemName"
            },
            {
                type: "input",
                message: "What is the price of this item?",
                name: "itemPrice"
            },
            {
                type:"input",
                message: "How many of these items do you have?",
                name: "itemQuantity"
            }
        ]).then(function(inquirerResponse) {
            connection.query(
                "INSERT INTO products SET ?",
                {
                  product_name: inquirerResponse.itemName,
                  price: inquirerResponse.itemPrice,
                  stock_quantity: inquirerResponse.itemQuantity
                })
                fullProducts()
        })
}