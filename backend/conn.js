var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"healthmate"
});

con.connect(function(error){
    if(error) throw error;
    console.log("successfully connected");
});

module.exports = con;
