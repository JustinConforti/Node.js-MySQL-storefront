var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');


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
    let fullArrayNames = [];
    let fullArrayOverHead = [];
    console.log("in databaseQuery")
    connection.query("SELECT * FROM departments", function (err, result) {
         console.log(result)
         if (err) throw err;
         for (let i = 0; i < result.length; i++) {
             fullArrayNames.push(result[i].department_name)
             fullArrayOverHead.push(result[i].over_head_costs)
         }
            for (let i=0; i< result.department_name.length; i++) {

            
              if (result[i].department_name === fullArrayNames[i]) {
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
         
        

         let clothingAdd = clothingProductSales.reduce((t, v) => t + v);
         let electronicAdd = electronicProductSales.reduce((t, v) => t + v);
         let toolAdd = toolProductSales.reduce((t, v) => t + v);
         let furnitureAdd = furnitureProductSales.reduce((t, v) => t + v);
         let homeAdd = homeProductSales.reduce((t, v) => t + v)
         console.log(clothingAdd, electronicAdd, toolAdd, furnitureAdd, homeAdd)
             printTable(clothingAdd, electronicAdd, toolAdd, furnitureAdd, homeAdd)

    })
}


function printTable (prod1, prod2, prod3, prod4, prod5){

    connection.query("SELECT over_head_costs FROM departments", function (err, result) {
        console.log(result)
        var t = new Table({
            head: ['Id', 'Department Name', 'Over_Head_Costs', 'Product_Sales', 'Total_Profit']
          , colWidths: [5, 20, 15, 15, 15]
        });
        for (let i = 0; i < fullItemArray.length; i++) {
        t.push(
          [fullItemArray[i].id, fullItemArray[i].name, fullItemArray[i].price, fullItemArray[i].quantity, fullItemArray[i].product_sales]
        
        );}
          console.log(t.toString())
          setTimeout(start, 2000);
        })
}
