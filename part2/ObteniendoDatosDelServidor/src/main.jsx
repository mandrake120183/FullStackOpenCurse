import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import App from './App'

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App notes={notes} />
      </React.StrictMode>
    )
    console.log('response.data', response.data)
  })
  .catch(error => {
    console.error('Error fetching data:', error)
  })


//ReactDOM.createRoot(document.getElementById('root')).render(
  //<App />
//  <App notes={notes} />
//)