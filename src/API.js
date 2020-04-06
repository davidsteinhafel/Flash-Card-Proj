import React from 'react'

const axios = require('axios');

async function makeRequest(){
    const config = {
        method: 'get',
        url: 'C:\Users\i69yo\Desktop\Study_Card_API_Package-master\study-cards-api\Controllers\CollectionController.cs'

    }
    let res = await axios(config)
    console.log(res.status);
}

makeRequest();
