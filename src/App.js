import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import * as comment from './service/comment';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {comments:[]};
    this.removeComment = this.removeComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.getComment = this.getComment.bind(this);
    this.addNew = this.addNew.bind(this);
  }
  componentDidMount (){
    
     this.getComment();
     //comment.fetchComments()
  }

  getComment(){
        
        
           comment.fetchComments().then((data)=>{
             console.log(data)
            var newData = this.state.comments.concat([data]);  
            this.setState({comments: data});
            console.log(this.state.comments)
         });
          
    
  }
  removeComment(i){
    var commentsCopy =this.state.comments;
    commentsCopy.splice(i,1);
    this.setState({comments:commentsCopy})
  }

  updateComment(updateText,i,id){
        comment.updateComment(updateText,id).then((response)=>{
             var commentsCopy = this.state.comments;
             commentsCopy[i].TEXT = updateText;
             this.setState({comments:commentsCopy})
         });
    
  }
  addNew(event){
    event.preventDefault();
            let newText =  new Object();
            newText.TEXT =   this.refs.new.value;
            comment.addComment(newText.TEXT).then((response)=>{
                console.log(response)
                var commentsCopy = this.state.comments;
                commentsCopy.push(newText);
                this.setState({comments:commentsCopy})
         });

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

        {this.state.comments.map((comment,i) => {
                                    return(
                                  <Home key={i} index={i} commentId={comment.ID} deleteFromApp={this.removeComment} updateToApp={this.updateComment} >
                                      {comment.TEXT}
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
