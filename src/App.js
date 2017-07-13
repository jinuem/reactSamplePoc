import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

class App extends Component {
     constructor(props) {
    super(props);
    this.state = {comments: ['This is First','This is Second','This is Third']};
    this.removeComment = this.removeComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.addNew = this.addNew.bind(this);

  }
  removeComment(i){
    var commentsCopy =this.state.comments;
    commentsCopy.splice(i,1);
    this.setState({comments:commentsCopy})
  }

  updateComment(updateText,i){
    var commentsCopy = this.state.comments;
    commentsCopy[i] = updateText;
    this.setState({comments:commentsCopy})
  }
  addNew(event){
    event.preventDefault();
    let newText =    this.refs.new.value;
    var commentsCopy = this.state.comments;
    commentsCopy.push(newText);
    this.setState({comments:commentsCopy})
  }

  render() {
    return (
     <div className="container-fluid">
      <Header />

      <div className="col-xs-4 col-xs-offset-4">
        <div className="row">
      <div className="col-xs-12">
        <form onSubmit={this.addNew}>
        <textarea className="col-xs-12" ref="new" required placeholder="Type New Comment Here to add"></textarea> 
        <button className="btn btn-success col-xs-12" type="submit" >Add New List</button>
        </form>
      </div>
      </div>
      <div className="row">
        {this.state.comments.map((text,i) => {
                                    return(
                                  <Home key={i} index={i}  deleteFromApp={this.removeComment} updateToApp={this.updateComment} >
                                      {text}
                                    </Home>
                                    ) 
                          })}
      </div>
      </div>
      </div>
    );
  }
}

export default App;
