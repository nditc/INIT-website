import { useEffect, useState } from 'react'
import Banner from '../components/Home/Banner'
import Intro from '../components/Home/Intro'

const Home = () => {
  const [homeData, setHomeData] = useState({})

  const getData = async () => {
    try {
      const data = await fetch('json/home.json')
      const objData = await data.json()
      if (objData) setHomeData(objData)
    } catch (error) {
      // console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Banner />
      <Intro homeData={homeData} />
    </>
  )
}

export default Home
