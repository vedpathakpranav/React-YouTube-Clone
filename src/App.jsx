import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainBox from './components/MainBox'
import Style from './css/App.module.css'

const App = () => {
  return (
    <>
      <div className={Style.layout}>
        <Navbar />
        <div className={Style.mainLayout}>
           <Sidebar />
            <MainBox/>
       </div>
      </div>
    </>
  )
}

export default App