const app = require('./app')
const {error} = require('./helpers/response')
require('dotenv').config();
const requireDir = require('require-dir');

requireDir('./routes/admin');
require('../src/models');


app.use((err, req, res, next) => {
    res.json(error(err.message));
});
app.get('/',(req,res)=>{
    return res.send('server is up and running')
})


const server = app.listen(process.env.PORT, async () => {
    console.log(`app is listening on port: ${process.env.PORT} `);
});


module.exports = {app, server}