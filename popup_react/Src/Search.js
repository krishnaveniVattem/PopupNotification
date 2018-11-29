let axios = require('axios');
const  Base_url = "http://127.0.0.1:8000/";
var url="";
 var Search ={


findAll:function(callback){
    url=Base_url+'admin';
    axios.get(url)
    
            .then(response=>{
                debugger;
                console.log("hdjdjdjd")
                if(callback){
                    console.log("djdjd")
                   console.log(response)
                    callback(response)
                }
            })
}

 }
 
 module.exports=Search;


