import React from 'react'

const axios = require('axios');

class API {
    
    async function Get(){
        axios.get('https://localhost:44393/api/collection')
            .then(res => {
                const persons = res.data;
                console.log(persons);
            });
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
    
}

