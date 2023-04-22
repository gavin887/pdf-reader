require('dotenv').config();
const app = require('./src/app.js');

console.log("Listen on http://localhost:3000/ ...")
app.listen(3000);