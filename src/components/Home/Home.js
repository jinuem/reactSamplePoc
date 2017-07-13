import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
   constructor(props) {
    super(props);
    this.state = {editing: false};
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
  }
  edit(){
    this.setState({editing:true})

  }
  remove(){
    this.props.deleteFromApp(this.props.index);
  }
  save(){


    this.setState({editing:false})
    this.props.updateToApp(this.refs.newComment.value,this.props.index)
  }

  editingMode(){
              return (
      <div className="commentContainer col-xs-12">
        <textarea ref="newComment" className="col-xs-12" defaultValue={this.props.children}></textarea> 
        <button onClick={this.save} className="btn btn-success col-xs-3">Save</button> 
        
      </div>
      );
  }

  normalMode(){

        return (
      <div className="commentContainer col-xs-12">
        <h4 className="commentText">{this.props.children}</h4> 
        <button onClick={this.edit} className="btn btn-primary col-xs-3 ">Edit</button> 
        <button onClick={this.remove} className="btn btn-danger col-xs-3 col-xs-offset-6">Remove</button> 
      </div>
    );

  }
  render() {
    if(this.state.editing){
      return this.editingMode();
    } else{
      return this.normalMode()
    }

  }
}

export default Home;    
