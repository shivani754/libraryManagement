import React,{Component} from 'react';
import bookList from './recentBooksList.jsx';
import '.././App.css';
class Add extends Component{
  /*  constructor(){
        super();
        this.state=bookList;
        this.add=this.add.bind(this);
    }
   add(book)
   {
       let temp= {id:4,name:"B4",author:"A4",version:"1.1"};
       this.state.bookList.push(temp);
       this.setState({temp});
       
      /* let temp=bookList[book];
      this.state.bookList.push(temp);
      this.setState({temp});
      button----> <button className="addBtn" onClick={()=>this.add(document.getElementById("addbook").value)}>Add Book</button>
      */
  // }
    render(props){
        return (
            <div>
            <button className="addBtn" onClick={()=>this.props.onAdd()}>Add Book</button>
            </div>
        )
    }

}
export default Add;