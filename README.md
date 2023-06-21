![App screenshot](public/images/techblog.png)

## Description

This is a Blog Post website built with an MVC (Model-View-Controller) structure. It allows users to create an account, post their own blog entries, and comment on other user's blogs. This application is deployed on Heroku, and you can visit the site [here](https://techblog-2023-e186fd1c7525.herokuapp.com/).

## Table of Contents
- [Description](#description)
- [Installation](#installation)
  - [Database Seeding](#database-seeding)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory by running `cd Blog_Post`.
3. Install Node.js on your machine if you haven't already. You can download it from the official website: [https://nodejs.org/](https://nodejs.org/).
4. Install the necessary dependencies by running `npm install` in your terminal. This command will install the required packages listed in the package.json file.
5. Once the installation is complete, you can use the application by running `node server.js` in your terminal. This command will start the application.

## Database Seeding

After installing the dependencies, you need to set up the database configuration:

1. Create a `.env` file in your root directory and add the following variables, replacing `<VALUE>` with your actual data:

    ```env
    DB_NAME=<blog_post_db>
    DB_USER=<Your_MySQL_Username>
    DB_PASSWORD=<Your_MySQL_Password>
    ```

2. To seed the database with initial data, navigate to the project directory in your terminal.

3. Run the seed file by typing `node seeds/seeds.js` in your terminal. This command will create the necessary tables and fill them with the seed data.

4. If the seeding process is successful, you should see a confirmation message in your terminal.

## Usage

1. Open your preferred web browser and navigate to the hosted website.
2. Create your user profile to start blogging.
3. Click on the 'Create Post' button to write your blog post.
4. Interact with other users by leaving comments on their blogs.

## Dependencies

* bcrypt
* connect-session-sequelize
* dotenv
* express
* express-handlebars
* express-session
* mysql2
* sequelize

## Credits

* [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Sequelize](https://sequelize.org/): A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
* [Express](https://expressjs.com/): A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars): A view engine that uses the Handlebars templating library and follows the Express view engine API.
* [MySQL/MySQL2](https://www.npmjs.com/package/mysql2): A node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.
* [bcrypt](https://www.npmjs.com/package/bcrypt): A library to help you hash passwords.
* [dotenv](https://www.npmjs.com/package/dotenv): A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
* [express-session](https://www.npmjs.com/package/express-session): Simple session


## License

This project is licensed under the terms of the MIT license. For more details, see [the MIT License page](https://opensource.org/licenses/MIT).