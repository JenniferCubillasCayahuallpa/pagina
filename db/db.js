const mysql = require('mysql2');


connection= mysql.createConnection({

    host:'queries.clglx50zvmgp.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'cubillas31',
    database:'Record',
    port:'3306'

    // Agreguen sus credenciales igual a la q está arriba 

    /*host:'',
    user:'',
    password:'',
    database:'Record',
    port:''*/

    /*host:'',
    user:'',
    password:'',
    database:'Record',
    port:''*/

});


connection.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('conectado correctamente')
    }
})


module.exports= connection;
