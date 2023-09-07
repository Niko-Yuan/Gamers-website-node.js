module.exports = {
  HOST: "dpg-cjsmgcm3m8ac73doojs0-a.oregon-postgres.render.com",
  USER: "gamers_user",
  PASSWORD: "769HrOyjYS6pAPx89bvwU65a6wY08Jra",
  DB: "gamers",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};