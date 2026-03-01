import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, urlToImage, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-warning" style={{left:'85%',zIndex:'1'}}>
                {source}
              </span>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              
              ...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              {" "}
              <small className="text-muted">
                By {!author ? "Unknown Author" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              className="btn btn-sm btn-dark"
              target="_blank"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
