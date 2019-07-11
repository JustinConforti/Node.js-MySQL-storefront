var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var clothingProductSales = [];
let electronicProductSales = [];
let toolProductSales = [];
let furnitureProductSales = [];
let homeProductSales = [];

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
            message: "What would you like to do supervisor?",
            choices: ["View Products Sales by Department", "Create New Department"],
            name: "userChoice"
        }]).then(function (response) {
            let inquirerResponse = response.userChoice
            console.log(inquirerResponse)
            if (inquirerResponse === "View Products Sales by Department") {
                salesDepartment()
                return;
            } else if (inquirerResponse === "Create New Department") {
                newDepartment()
                return;
            }
        })
}

function salesDepartment() {
    console.log("enter sales")
    departmentSalesQuery()
}

function newDepartment() {
    console.log("enter new department")

}

function departmentSalesQuery() {
    var clothingProductSales = [];
    let electronicProductSales = [];
    let toolProductSales = [];
    let furnitureProductSales = [];
    let homeProductSales = [];
    console.log("in databaseQuery")
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        for (let i = 0; i < result.length; i++) {
            if (result[i].department_name === "Clothing") {
                console.log(result)
                let productSale = result[i].product_sales
                clothingProductSales.push(productSale)
            }
            if (result[i].department_name === "Electronics") {
                let productSale = result[i].product_sales
                electronicProductSales.push(productSale)
            }
            if (result[i].department_name === "Tools") {
                let productSale = result[i].product_sales
                toolProductSales.push(productSale)
            }
            if (result[i].department_name === "Furniture") {
                let productSale = result[i].product_sales
                furnitureProductSales.push(productSale)
            }
            if (result[i].department_name === "Home") {
                let productSale = result[i].product_sales
                homeProductSales.push(productSale)
            }
        }
        console.log(clothingProductSales)
        console.log(electronicProductSales)
        console.log(toolProductSales)
        console.log(furnitureProductSales)
        console.log(homeProductSales)

        

    })
}

