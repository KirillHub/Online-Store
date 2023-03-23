## Setting up development environment 🛠

## Stack technologies 🗄

- React
- Typescript
- PostgreSQL
- Express
- Sequelize

## Setting up development environment 🛠

- Install [postgreSQL](https://www.postgresql.org/) if you don't have it already and create a database named `online_store`.
- `git clone https://github.com/KirillHub/Online-Store.git`
- Create an empty `.env` file in `/server`, copy `/api/.env.example` contents into it, and fill in your database username and password.
- `npm run install-dependencies`
- `cd api && npm run dev`
- `cd client && npm run dev` in another terminal tab
- App should now be running on `http://localhost:5000/`
