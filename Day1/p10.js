const fs = require('fs');

fs.rmdir('mydir', (err)=>{
    if (err) throw err;
    else console.log("Directory Deleted");
})