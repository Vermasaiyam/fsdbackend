const fs = require('fs');

const write = (data) => {
    fs.writeFile("./data.txt", data, (err, data) => {
        if (err)
            console.log(err)
        else
            console.log("dome")
    })
}
write("Helllo ");