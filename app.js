const wol = require('wol');
const express = require('express')
const app = express()
const port = 3000

app.get('/:id', function (request, response) {

    var macaddress = request.params.id

    wol.wake(macaddress, function(error, result){
        if (error) {
            response.send(error)
        } else {
            response.send(`magic packet was sent to ${macaddress}`)
        }
      })

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))