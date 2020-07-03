import React,{Component} from 'react';
import '.././App.css';
export default class AddBookForm extends Component{
  render(){
      return(
        /*  <div>
              
              <input type="text" id="bid1" placeholder="enter book id" readOnly value={this.props.bookList.length}></input>
               <input id="bname1" type="text" placeholder="enter book name"></input>
             <input id="bauth1" type="text" placeholder="enter book author"></input>
                <input id="bver1" type="text" placeholder="enter version"></input>
                 <button  onClick={()=>this.props.onSubmit(
                     document.getElementById("bid1").value,
                     document.getElementById("bname1").value,
                     document.getElementById("bauth1").value,
                     document.getElementById("bver1").value
                 )}>Submit</button>
              
          </div>*/
          <div style={{marginLeft:'2vw',marginRight:'3vw',width:'96vw'}}>
    <div class="form-group">
      <label  id="lab1">Book Id</label>
      <input type="text" class="form-control" id="bid1" aria-describedby="emailHelp" 
      readOnly value={this.props.bookList.length} placeholder="Enter book id"/>
    </div>
    <div class="form-group">
      <label id="lab1">Book Name</label>
      <input type="text" class="form-control" id="bname1" placeholder="Enter book name"/>
    </div>
    <div class="form-group">
      <label  id="lab1" >Book Author</label>
      <input type="text" class="form-control" id="bauth1" placeholder="Enter book author"/>
    </div>
    <div class="form-group">
      <label id="lab1">Book Version</label>
      <input type="text" class="form-control" id="bver1" placeholder="Enter book version"/>
    </div>
    <button class="btn btn-primary" onClick={()=>this.props.onSubmit(
                      document.getElementById("bid1").value,
                      document.getElementById("bname1").value,
                      document.getElementById("bauth1").value,
                      document.getElementById("bver1").value
                  )}>Submit</button>
    </div>
        )
    }
  }


  //<input ref="name">
  //used-->this.refs.name.value
  //if we use value attribute then it is bydefault readOnly..to change this ..we need to use onChange={}