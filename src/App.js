import Homejs from "./Routes/Home";
import React, {useState, useEffect} from 'react'
import { Route, Routes} from "react-router-dom";
import Aboutjs from "./Routes/About";
import Servicesjs from "./Routes/Services";
import Contactjs from "./Routes/Contact";
import WDjs from "./Routes/WD";
import GD from "./Routes/GD";
import View from './Components/GDcomp/Viewmore'
import RiseLoader from 'react-spinners/RiseLoader'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="App">
      {
        loading ?
        <div className="loader">
          <RiseLoader
          size='30'
          color="#8e76d6"
          loading={loading}
          />
        </div>

        :
      <div>
        <Routes>
        <Route path='/' element={<Homejs/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Aboutjs/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Servicesjs/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Contactjs/>}/>
      </Routes>
      <Routes>
        <Route path='/Graphics Design Page' element={<GD/>}/>
      </Routes>
      <Routes>
        <Route path='/Web Design Page' element={<WDjs/>}/>
      </Routes>
      <Routes>
        <Route path='/Viewmore' element={<View/>}/>
      </Routes>
    </div>
      }
     </div>
  );
}

export default App;
