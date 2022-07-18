import React from "react";
import Stars from "./Stars"

export default class ReviewForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      reviewInfo: {
        text: "",
        rating: "",
        author: ""
      }
    }
  }

  onNameChange = (event) => {
    this.setState(state => {
        const copyOfInfo = {...state.reviewInfo};
        copyOfInfo.author = event.target.value;
        return {reviewInfo: copyOfInfo}
    });
  }
  
  onTextChange = (event) => {
    this.setState(state => {
        const copyOfInfo = { ...state.reviewInfo};
        copyOfInfo.text = event.target.value;
        return {reviewInfo: copyOfInfo}
    });
  }
  
  addRating = (newRating) => {
        this.setState(state => {
        const copyOfInfo = { ...state.reviewInfo}
        copyOfInfo.rating = (newRating);
        return { reviewInfo: copyOfInfo }
    });
  }
  
  onUserSubmit = () => {
    const newReview = {
        text: this.state.reviewInfo.text,
        rating: this.state.reviewInfo.rating + '\u{2605}',
        author: this.state.reviewInfo.author
    }
    this.props.onSubmit(newReview);
    this.setState({reviewInfo: {author: '', text: ''}});
    this.changeChild.current.clearStars();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
          <div id="form">
              <h3>Write A Review!</h3>
              <Stars onChange={this.addRating} ref={this.changeChild}/>
              <input type="text" className="form-control" placeholder='Name' value={this.state.reviewInfo.author} onChange={this.onNameChange}/>
              <textarea className='form-control' placeholder="Please write your review here." value={this.state.reviewInfo.text} onChange={this.onTextChange} />
              <br/>
              <button className="btn btn-primary" type="button" onClick={this.onUserSubmit}>Post</button>
          </div>
          <br/><br/>
      </form>
  )
} 
}