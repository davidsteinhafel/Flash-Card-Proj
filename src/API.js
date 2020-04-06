import React from 'react'

const axios = require('axios');

async function Get(){
    const config = {
        method: 'get',
        url: 'https://localhost:44393/api/collection'

    }
    let res = await axios(config)
    console.log(res.data);
}
async function Post(){
    const config = {
        method: 'Post',
        url: 'https://localhost:44393/api/collection'

    }
    let res = await axios(config)
    console.log(res.status);
}
async function Put(){
    const config = {
        method: 'Put',
        url: 'https://localhost:44393/api/collection'

    }
    let res = await axios(config)
    console.log(res.status);
}
async function Delete(){
    const config = {
        method: 'Delete',
        url: 'https://localhost:44393/api/collection'

    }
    let res = await axios(config)
    console.log(res.status);
}

makeRequest();
