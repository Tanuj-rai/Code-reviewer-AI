require('dotenv').config()
console.log('GROQ_API_KEY:', process.env.GROQ_API_KEY);
const app = require("./src/app.js")


app.listen(3000, (req, res)=>{
    console.log("Server is running on port 3000")
})