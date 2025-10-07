import React, {  useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinnner from './Spinnner'

function News(props) {
    const [articles,setArticles]=useState([])
    const [page,setPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)
    const [load,setload]=useState(true)
    const start=async()=>{
      setload(true)
      props.setProgress(10)
        const response= await fetch (`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c38ffcbe4f1f46fd9eeb66d76e22f0fd&pageSize=${props.pageSize}&page=${page}`);
        const prasedData=await response.json()
        props.setProgress(100)
        setload(false)
       setArticles(prasedData.articles)
       setTotalResults(prasedData.totalResults)

    }
    useEffect(()=>{

        start()
         // eslint-disable-next-line
    },[])

//Previous button
const handlePrevious=async()=>{
  setload(true)
  props.setProgress(10)
    const response= await fetch (`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c38ffcbe4f1f46fd9eeb66d76e22f0fd&pageSize=${props.pageSize}&page=${page-1}`);
   setPage(page-1)
    const prasedData=await response.json()
    props.setProgress(100)
    setload(false)
       setArticles(prasedData.articles)
}
//Next button
const handleNext=async()=>{
  setload(true)
  props.setProgress(10)
    const response= await fetch (`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c38ffcbe4f1f46fd9eeb66d76e22f0fd&pageSize=${props.pageSize}&page=${page+1}`);
    setPage(page+1)
    const prasedData=await response.json()
    props.setProgress(100)
    setload(false)
       setArticles(prasedData.articles)
}

  return (
    <div className='container'>
    {load &&<Spinnner/>}
    <div className='row'>

    {articles.map((element)=>{
        
       return <div className='col-md-4 my-2 'key={element.url}>
       <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} name={element.source.name}/>
        </div>
    })} 
    </div>
    <div className='d-flex justify-content-sm-between'>
    <button type="button" className={`btn btn-primary ${page===1?'disabled':''}`} onClick={handlePrevious}>Previous</button>
    <button type="button" className={`btn btn-primary ${page<Math.ceil(totalResults/props.pageSize)?'':'disabled'}`} onClick={handleNext}>Next</button>
    </div>
    </div>

  )
}

export default News
