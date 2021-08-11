import { useState, useEffect } from 'react';
import './App.css';
import Header from './screens/header/Header'
import Navbar from './screens/navbar/Navbar';
import MidHeader from './screens/midHeader/MidHeader';
import Examples from './screens/examples/Examples';
import axios from 'axios'

let key = process.env.REACT_APP_key
let base = process.env.REACT_APP_base

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    let url = `https://api.airtable.com/v0/${base}/content?api_key=${key}`
    const getData = async() => {
      try {
        const res = await axios.get(url)
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div className="App">
      <Header />
      <Navbar />
      <MidHeader />
      <Examples data={data}/>
    </div>
  );
}

export default App;
