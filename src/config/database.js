require('dotenv').config({
  path:process.env.NODE_ENV == "test" ? ".env.test" : ".env"
})


module.exports = {
  host:process.env.DB_HOST,
  username:process.env.DB_USER,
  password:process.env.DB_PASS,
  database:process.env.DB_NAME,
  dialect:process.env.DB_DIALECT || "postgress",
  storage:"./__test__/database.sqlite",
  operalorsAliases: false,
  logging:false,
  define:{
    timestamps:true, // marca a data de criacao e atualizacao
    underscored:true,
    underscoredAll:true
  }
}