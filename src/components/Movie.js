import React from 'react';
import ReviewList from './ReviewList';

export default class Movie extends React.Component{
render() {
    return (
        <div class="movieContainer">
            <br />
            <img src={this.props.movie.image} className="movieBanner"></img>
            <div class="card-title">
                <br />
                <h2 class='center-text'>{this.props.movie.name}</h2>
            </div>
            <div class="card-text">
                <p class="center-text">{this.props.movie.synopsis}</p>
            </div>
            <div>
                <br />
                <h4 className='center-text'>Reviews</h4>
                <ReviewList reviews={this.props.movie.reviews} />
            </div>
      </div>
    );
  }
}