async function connect(){
        if(global.connection && global.connection.state !== 'disconnected'){
            return global.connection;
        }

        const mysql = require("mysql2/promise");
        const connection = await mysql.createConnection("mysql://root:8245@localhost:3306/empresa");
        console.log("Conectou no MySQL!");
        global.connection = connection;
    return connection;
}

const db =connect();

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM cliente;');
    return rows;
}

async function insertCustomer(id,nome){
    const conn = await connect();
    const sql = 'INSERT INTO cliente(id,nome) VALUES (?,?);';
    const values = [id,nome];
    return await conn.query(sql, values);
}


insertCustomer(2,'DANIEL');

