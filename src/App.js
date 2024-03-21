import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import Index from './main/index';
import Switcher from './components/Switcher';
import IndexTwo from './main/index-two';
import IndexThree from './main/index-three';
import IndexDark from './main/index-dark';
import IndexRtl from './main/index-rtl';
import axios from 'axios';
import Error from './components/Error';


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const data = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      setData(data.data.user);
    } catch (error) {
      alert("Error Occured!")
    }
  }

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Index data={data} />} />
        <Route path="/index-two" element={<IndexTwo data={data} />} />
        <Route path="/index-three" element={<IndexThree data={data} />} />
        <Route path="/index-dark" element={<IndexDark data={data} />} />
        <Route path="/index-rtl" element={<IndexRtl data={data} />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Switcher />
    </BrowserRouter>
  );
}

export default App;
