const mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'localhost',
    database:'crudnodejsmysql',
    user:'root',
    password:'',
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('conexion lista');
    }

})
conexion.query('SELECT * FROM customer',function(error,results,fields){
    if(error)
        throw error;
        results.forEach(result=>{
            console.log(result.nombre);
        }
            
            )
    }
)
conexion.end();