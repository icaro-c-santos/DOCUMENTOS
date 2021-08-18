const express = require('express');
const app = express();

app.use((req,resp)=>{
    resp.send('ola gente!');
})
app.listen(3000, ()=>{
    console.log('HELLO WORLD!');
})