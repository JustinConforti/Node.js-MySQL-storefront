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
        .prompt([
            {
                type: "list",
                message: "What would you like to do supervisor?",
                choices: ["View Products Sales by Department", "Create New Department"],
                name: "userChoice"
            }
        ]).then(function(inquirerResponse) {
            console.log(inquirerResponse)
            if (inquirerResponse === "View Products Sales by Department") {
                salesDepartment()
            } else {
                newDepartment()
            }
        })
}

function salesDepartment() {
    console.log("enter sales")

}

function newDepartment() {
    console.log("enter new department")

}