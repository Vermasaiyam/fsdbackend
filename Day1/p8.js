const fs = require('fs');

fs.unlink("./mydir/data.txt",(err)=>{
    if(err) 
        console.log(err)
    console.log("file deleted successfully.");
})