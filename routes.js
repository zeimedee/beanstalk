const express = require('express');
const router = express.Router();

router.route('/get').get((req,res)=>{
    res.send('get method')
});

router.route('/post').post((req,res)=>{
    res.send('post method')
});

router.route('/put').put((req,res)=>{
    res.send('put method')
})

router.route('/delete').delete((req,res)=>{
    res.send('delete method')
})



module.exports = { router };