import React from 'react'

function NewsItem(props) {
  return (
    <>
    <div className="card" style={{width: "18rem"}}>
    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger">{props.name}</span>
  <img src={props.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.url} className="btn btn-primary">Read More</a>
  </div>
</div>

    </>
  )
}

export default NewsItem
