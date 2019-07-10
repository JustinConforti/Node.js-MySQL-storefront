DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(50) NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    product_sales INT NULL,
    PRIMARY KEY (item_id)
    );
    
    INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
    VALUES ("Sunglasses", "Clothing", 10, 150, 400), ("Sombrero", "Clothing", 20, 50, 250), ("Macbook", "Electronics", 450, 10, 32000), ("Drill", "Tools", 45, 120, 24000), ("Chair", "Furniture", 125, 55, 42500), ("TV", "Electronics", 1450, 35, 13000), ("Lamp", "Electronics", 40, 190, 32000), ("Jeans", "Clothing", 35, 105, 3900), ("Candles", "Home", 05, 320, 400), ("Table", "Furniture", 980, 53, 41500);
    
    CREATE TABLE departments (
		department_id INT NOT NULL AUTO_INCREMENT,
        department_name VARCHAR(50) NOT NULL,
        over_head_costs INT NOT NULL,
        PRIMARY KEY (department_id)
        );
        
	INSERT INTO departments (department_name, over_head_costs)
    VALUES ("Clothing", 2100), ("Electronics", 35000), ("Tools", 21000), ("Furniture", 45000), ("Home", 28000)
