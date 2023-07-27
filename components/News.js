import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=> {
 
  const[articles,setArticles]= useState([]);
  const[loading,setLoading]= useState(true);
  const[page,setPage]= useState(1);
  const[totalResults,settotalResults]= useState(0);
  

  
 const updateNews = async()=>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}}&pageSize=${props.pageSize}`;
   
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(loading.false);
    props.setProgress(100);
  }
useEffect(()=>{
  updateNews();
},);
  
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=61924b647daa493abcd25e9f5df57755&page=1&pageSize=${props.pageSize}`;
    //setState({loading:true});
    //let data = await fetch(url);
    //let parsedData = await data.json();
    //setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,  loading:false})
   
 const handlepreclick = async () => {
  //  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=61924b647daa493abcd25e9f5df57755&page=${state.page + 1}&pageSize=${props.pageSize}`;
    //setState({loading:true});
    //let data = await fetch(url);
    //let parsedData = await data.json();
    //setState({
      //page: state.page + 1,
      //articles: parsedData.articles,
      //loading:false
    //})
    setPage(page -1);
    updateNews();

  }
 const handlenextclick = async () => {
   // if (state.page + 1 > Math.ceil(state.totalResults / props.pagesize)) {


   // } else {



    //  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=61924b647daa493abcd25e9f5df57755&page=${state.page + 1}&pageSize=${props.pageSize}`;
    //  setState({loading:true});
     // let data = await fetch(url);
     // let parsedData = await data.json();
      //setState({
        //page: state.page + 1,
        //articles: parsedData.articles,
      
      //loading:false
      //})
   //}


  //}
  setPage(page +1);
  updateNews()
  }
 const fetchMoreData = async() => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    
    setArticles(articles.concat( parsedData.articles));
    settotalResults(parsedData.totalResults);
    setLoading(loading.false);
   
    
  };

  
  return (
      <>
      <div className='container my-3'>

        <h2 className='text-center'style={{margin:'40px  0px'}}> newsmonkey - Top Headlines</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<h4 className='my-3'>Loading...</h4>}
        >
        <div className='container'>
        < div className=' row'>
          {articles.map((articles) => {

            return <div className='col-md-3' key={articles.url}>
              <NewsItem tittle={articles.tittle ? articles.tittle:""} descryption={articles.description ? articles.description:"" } urlToImage={articles.urlToImage} newsUrl={articles.url} author={articles.author}date={articles.publishedAt} source={articles.source.name} />
            </div>
             })}
         </div>
         </div>

        </InfiniteScroll>

    
          <div className=' container d-flex justify-content-between'>
            <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlepreclick}> &larr; previous</button>
            <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handlenextclick}> next &rarr; </button>

          </div>
 
        </div>
      
</>

    );
            }
                

           
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category:'science',
  
}
News.propTypes = {
  country:PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  category:PropTypes.string.isRequired,
}
export default News