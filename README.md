# Welcome to Node.js-mySQL-StoreFront App 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/JustinConforti/Node.js-MySQL-storefront#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/JustinConforti/Node.js-MySQL-storefront/graphs/commit-activity)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://github.com/JustinConforti/Node.js-MySQL-storefront/blob/master/LICENSE)

> This application has three different versions and each view has access to multiple unique commands:

	------------- Customer view, Manager view, and a Supervisor view -------------

				
Customer View: (bamazonCustomer.js)

As you access the bamazon customer view, you will be greated and displayed a table (using package 'table-cli') of all available products in the store sorted by 
(ID, Product Name, Price($), Quantity)

![Alt text](/first_picture.jpg?raw=true "Initial Table")

After a three second delay the customer will be prompted for the Item ID of the product the customer is interested in buying and how many they would like

![Alt text](/second_picture.jpg?raw=true "First Prompt")

After the purchase is processed the product table is updated and redisplayed with appropriate changes, as well as a prompt showing the customers total amount of money spent. 

![Alt text](/third_picture.jpg?raw=true "Updated Table")


Manager View: (bamazonManager.js)

As you access the bamazon manager view, you will be greated and displayed four seperate options:

-View Products for Sale
-View Low Inventory
-Add to Inventory
-Add New Product
![Alt text](/fourth_picture.jpg?raw=true "Four Options")

View Products for Sale:

This option will display a full table of all items, price, and the amount in stock
![Alt text](/fifth_picture.jpg?raw=true "Full Table")

View Low Inventory:

This option will display a table of all items with an inventory of less than five. 
![Alt text](/sixth_picture.jpg?raw=true "Low Inventory")

Add to Inventory:

This option will prompt the user asking for the item ID of the product the manager wants to restock followed by a second prompt asking for how many of this item they would like restock.

![Alt text](/seventh_picture.jpg?raw=true "Restock Prompt")
and will display a full table of all items reflecting restock changes done by the manager.

Add New Product:

This option will prompt the user asking for the name of the new product name followed by a second prompt asking the manager for the price of this new item
followed by a final prompt asking the manager for how many of this new item they have.

![Alt text](/eighth_picture.jpg?raw=true "Prompts")

and will display a full table of all items including the new item the manager has added.
![Alt text](/nineth_picture.jpg?raw=true "final table")




Supervisor View: 

		(under construction coming soon)


Tools Used For This App:

Javascript
Node.js
mySQL Database

NPM Packages:
Cli-table
easy-table
inquirer
mysql




### 🏠 [Homepage](https://github.com/JustinConforti/Node.js-MySQL-storefront#readme)

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Author

👤 ** Justin Conforti**

* Github: [@JustinConforti](https://github.com/JustinConforti)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/JustinConforti/Node.js-MySQL-storefront/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2019 [ Justin Conforti](https://github.com/JustinConforti).

This project is [ISC](https://github.com/JustinConforti/Node.js-MySQL-storefront/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_