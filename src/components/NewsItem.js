import React, { Component } from "react";
import "./NewsItem.css";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source } =
      this.props;

    return (
      <div className="card">
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-dark"
          // style={{ left: '90%', zIndex: '1' }}
        >
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://static.toiimg.com/thumb/msid-77210738,width-1070,height-580,imgsize-127229,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="News Thumbnail"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{description}</p>
          <p class="card-text">
            <small class="text-body-secondary">
              {" "}
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-outline-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
