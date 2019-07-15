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
![Alt text](/first_picture.jpg?raw=true "Optional Title")

After a three second delay the customer will be prompted for the Item ID of the product the customer is interested in buying and how many
 (picture here of command line asking for item ID)

After a purchase the table is updated and redisplayed with appropriate changes, as well as a prompt showing the customers total amount of money spent. 




Manager View: (bamazonManager.js)

As you access the bamazon manager view, you will be greated and displayed four seperate options:

-View Products for Sale
-View Low Inventory
-Add to Inventory
-Add New Product
(picture of display of 4 options)

View Products for Sale:

This option will display a full table of all items, price, and the amount in stock
(picture of table)

View Low Inventory:

This option will display a table of all items with an inventory of less than five. 
(picture of low inventory table)

Add to Inventory:

This option will prompt the user asking for the item ID of the product the manager wants to restock.
(picture of restock item prompt)
followed by a second prompt asking for how many of this item they would like restock.
(picture of second prompt)
and will display a full table of all items reflecting restock changes done by the manager.

Add New Product:

This option will prompt the user asking for the name of the new product name
(picture of first prompt)
a second prompt will appear asking the manager for the price of this new item.
(picture of second prompt)
and a third prompt will appear asking the manager for how many of this new item they have.
(picture of third prompt)
and will display a full table of all items including the new item the manager has added.
(picture of fourth prompt)




Supervisor View: 

		(under construction coming soon)



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