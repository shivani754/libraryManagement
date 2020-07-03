import React,{Component, version} from 'react';
import '.././App.css';
import Add from './addBook.js';
import {Link} from 'react-router-dom';
import AddBookForm from './addBookForm.js';
import EditBooks from './editBook';
import {BrowserRouter,Route } from 'react-router-dom';
/*class EditBook extends Component{
    constructor()
    {
        super();
       /* this.state={
            name:this.props.bookList.name ,
            auth:this.props.bookList.author,
            ver:this.props.bookList.version
        }*/
 
       /* this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event)
    {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render()
   {
       return(
    <div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label >Book Name</label>
           <input type="text" class="form-control" id="bname" value={this.props.bookList.name} 
           onChange={this.handleChange}/>
        </div>
       <div class="form-group col-md-6">
            <label >Book Author</label>
            <input type="text" class="form-control" id="bauth" value={this.props.bookList.author}
            onChange={this.handleChange}/>
       </div>
  </div>
  <div class="form-group">
       <label for="inputAddress">Book Version</label>
       <input type="text" class="form-control" id="bver" value={this.props.bookList.version} 
       onChange={this.handleChange}/>
  </div>
  <button type="submit" class="btn btn-primary" onSubmit={this.handleSubmit}>Submit</button>
</div>
   )
}
}*/
export default class RecentBooksList extends Component
{
    constructor(props)
    {
       super(props);
  /*  this.state={
        bookList:[
           {id:0,name:"B1",author:"A1",version:"1.1"},
           {id:1,name:"B2",author:"A2",version:"1.2"},
           {id:2,name:"B3",author:"A3",version:"1.3"},
           {id:3,name:"B4",author:"A4",version:"1.4"}
           
        ]
     }*/
   //  this.editBook=this.editBook.bind(this);
     this.add=this.add.bind(this);
    // this.handleClick=this.handleClick.bind(this);
  //   this.delete=this.delete.bind(this);
    }
    // submit(id,name,auth,ver)
    // {
    //     let temp= {id:id,name:name,author:auth,version:ver};
    //     this.state.bookList.push(temp);
    //     this.setState({temp});
    // }
   /* handleClick=(event)=>{
        return <AddBookForm></AddBookForm>
    }*/
    
    add()
    {
        let id=document.getElementById("bid").value;
        let name=document.getElementById("bname").value;
        let auth=document.getElementById("bauth").value;
        let ver=document.getElementById("bver").value;
        let temp= {id:id,name:name,author:auth,version:ver};
        this.props.bookList.push(temp);
        this.setState({temp});
        
       /* let temp=bookList[book];
       this.state.bookList.push(temp);
       this.setState({temp});
       button----> <button className="addBtn" onClick={()=>this.add(document.getElementById("addbook").value)}>Add Book</button>
       */
    }
  /* delete(index){
     this.setState(state=>({
         bookList:state.bookList.filter(books=>books.id !==index)
     }));
    }*/
    /*
    delete(p)
    {
        this.setState{
            bookList:delete this.state.bookList[p];
        }
    }
    button-----><td><button className="btn1" onClick={() => this.delete(book.id)}>Delete</button></td>
    */
    /*delete(book){
        this.setState(state=>({
            bookList:state.bookList.filter(books=>books.name !==book)
        })); 
    }
    button-----> <td><button className="btn1" onClick={() => this.delete(book.name)}>Delete</button></td>
    */
   
    render(){
        return(
            <div>
            <table className="table table-bordered"
             style={{backgroundImage:'url(https://i.pinimg.com/originals/cd/39/68/cd3968c976ddb03a2c7fdfed05763458.jpg)',
             marginLeft:'2vw',marginRight:'3vw',width:'96vw',borderStyle:'outset',borderWidth:'0.5vw',
             borderColor:'rgb(37, 47, 65)'
            }}>
                <thead>
                    <tr>
                <td><input type="text" id="bid" placeholder="enter book id" readOnly value={this.props.bookList.length}></input></td>
                        <td><input id="bname" type="text" placeholder="enter book name"></input></td>
                        <td><input id="bauth" type="text" placeholder="enter book author"></input></td>
                        <td><input id="bver" type="text" placeholder="enter version"></input></td>
                        <td>  <Add onAdd={this.add}></Add></td>
                        </tr>
                    <tr>
                        <th>Book Id</th>
                        <th>Book Name</th>
                        <th>Book Author</th>
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.bookList.map((book)=>{
                         return <tr>
                        <td>{book.id}</td>
                         <td>{book.name}</td>
                         <td>{book.author}</td>
                         <td>{book.version}</td>
                         <td><button className="btn1" onClick={() => {this.props.remove(book.id)}}>Delete</button>
                             <button className="btn1" onClick={() => this.props.editBook(book)}>
                             <Link to='/EditBooks' style={{color:"black",textDecoration:"none"}}>Edit</Link></button>
                         {/* <td><button className="btn1" onClick={() => this.delete(book.id)}>Delete</button></td>  */}
                         </td>
                     </tr>
                    })}
                </tbody>
            </table>
           {/* <AddBookForm onSubmit={this.submit}></AddBookForm> */}
            <button className="Addbtn2"><Link to="/AddBook" style={{color:"black",textDecoration:"none"}}>Add</Link></button>        
            {/* <button className="Addbtn2" onClick={this.handleClick}>Add Book</button> */}
            </div>
        )
    }
}
