import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
const Home = () => {
  return (
    <div>
        <Main/>
        <Row title='UpComing' fetchURL={requests.requestUpcoming} RowId='1'/>
        <Row title='Popular' fetchURL={requests.requestPopular} RowId='2'/>
        <Row title='Trending' fetchURL={requests.requestTrending} RowId='3'/>
        <Row title='Top Rated' fetchURL={requests.requestTopRated} RowId='4'/>
        <Row title='Horror' fetchURL={requests.requestHorror} RowId='5'/>
    </div>
  )
}

export default Home