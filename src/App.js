import React from 'react';
import axios from 'axios';
import SubmitNew from './SubmitNew';
function Get(){
  axios.get('https://localhost:44393/api/collection')
      .then(res => {
          const data = res.data;
          console.log(data);
      });
}
function App() {
  Get();
  return (
    <SubmitNew></SubmitNew>
  )
}

export default App;
