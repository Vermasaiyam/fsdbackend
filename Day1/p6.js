const fs = require('fs');

const write = (data) => {
    fs.writeFile("./mydir/data.txt", data, (err, data) => {
        if (err)
            console.log(err)
        else
            console.log("done")
    })
}
write("Helllo ");