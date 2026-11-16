import myslq from "mysql/promiss";

const conexao = myslq.createPool({
   host : process.env.DB_HOST,
   post : Namber(process.env.DB_PORT),
   user : process.env.DB_USER,
   name : process.env.DB_NAME,
   passaword : process.env.DB_PASSAWORD,
   waitForConnection : true ,
   connectionLimit : 10
})

export default conexao;