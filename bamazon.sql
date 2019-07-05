DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(50) NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
    );
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Sunglasses", "Clothing", 10, 150), ("Sombrero", "Clothing", 20, 50), ("Macbook", "Electronics", 450, 10), ("Power Drill", "Tools", 45, 120), ("Wooden Chair", "Furniture", 125, 55), ("FlatScreen TV", "Electronics", 1450, 35), ("Nightstand Lamp", "Electronics", 40, 190), ("Blue Jeans", "Clothing", 35, 105), ("Candles", "Home", 05, 320), ("Dinner Table", "Furniture", 980, 53)
    
    
