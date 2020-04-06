import axios from 'axios';

export function SubmitCard(card){
    return axios.post('https://localhost:44393/api/card', card)
}