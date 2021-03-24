const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const { router } = require('./routes')

const app = express();
app.use(cors());
app.use(express.json())


app.use('/ebs', router)
app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})