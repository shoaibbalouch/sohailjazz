import React from 'react'

const NewsItem=(props)=> {
  
    let { tittle, descryption, urlToImage, newsUrl, author, date ,source} = props;
    return (

      <div>
        <div className="card" >
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span className="  badge rounded-pill bg-danger">
              {source} </span>
              </div>
          <img src={!urlToImage ? "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/19/c93ba436-8961-455a-a2fa-c82b8c02dd1c/thumbnail/1200x630g2/51b2576a5b15ad7239796c018b88a285/gettyimages-1541245766.jpg?v=95745651c879c36458baff76f9d6c670" : urlToImage} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{descryption}</p>
            <p className="card-text"><small className="text-muted">By{!author ? "unknown" : author}on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="blank" className="btn  btn-sn btn-dark">Read More</a>
          </div>
        </div>


      </div>
    )
  
}
export default NewsItem
