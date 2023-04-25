require('dotenv').config();
const app = require('./src/app');


// const serverless = require('serverless-http');
// module.exports.handler = (event, context) => {
//     return serverless(app)(event, context);
// };


console.log("Listen on http://localhost:3000/ ...")
app.listen(3000);