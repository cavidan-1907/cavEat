import React from 'react'
import Card from "../component/Card"
import Banner from "../component/Banner"
import Top from "../component/crud/Top"
import Chef from "../component/crud/Chef"
import Services from '../component/Services'
function Home() {
  return (
    <div>
      <Banner/>
      <Card/>
      <Services/>
      <Top/>
      <Chef/>

    </div>
  )
}

export default Home
