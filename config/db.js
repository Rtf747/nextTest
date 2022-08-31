import { createPool } from 'mysql2/promise';

//Aqui se hace la conexion con la DB y se colocan todos
//los datos necesarios para hacer la conexion

const pool = createPool({
 host: 'h1.host.filess.io',
 user: 'user_MySQLTest_6c6e079bd4',
 password: 'd7bcb558bd8cdb698a4d3edb06726525292f83cc',
 port: '3306',
 database: 'MySQLTest_b5356da278',
});

//Se debe exportar para poder llamarla desde otras instancias
//y asi poder ejecutar las queries que sean necesarias
export { pool };
