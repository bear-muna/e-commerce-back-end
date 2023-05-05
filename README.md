# E-Commerce Back-End

## Description
Welcome to the E-commerce back end! Here you will be able to manage and operate categories, products, and tags within your database and display them using an API. This application consists of node.js, express.js, sequelize, and mysql. This application uses sequelize and express to route the e-commerce database with the server and client. Many challenges came from this application. Once challenge was trying to get used to sequelize syntax. With new syntax, comes a learning curve, but with repetition, sequelize began to get a lot easier to use. Another challenge was understanding a many-to-many relationship between Tags and Products. Understanding that a many-to-many relationship requires a separte table of tracking the relationships helped construct that relationship.
After this application, my understanding of CRUD applications has solidified.

## Installation
There are several steps to install this application. You will need to install node.js and mysql on your computer. Then complete the following steps within your terminal:
1. 'npm i' - install the necessary npm packages
2. .env  - change the .env.EXAMPLE file to .env and add 'root' to DB_USER and '<your-password>' for DB_PASSWORD
3. Run the mysql schema file to create the database
4. 'npm run seed' - seed the tables
5. 'node server.js' - start the server

## Usage
To use this application, you will need to have completed all of the steps within the 'Installation' section. After, you will have to open your own API client such as 'Insomnia' and use various routes to perform CRUD operations on the database. The routes can be found in the 'api' folder of this application. 

## Screenrecording
![Demo of Application](./screenrecording/Untitled_%20May%204%2C%202023%208_07%20PM.gif)

## Links
Github Repository: https://github.com/bear-muna/e-commerce-back-end