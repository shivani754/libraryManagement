import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';  //for external css
import MainPage from './components/mainPage.jsx';
import RecentBooksList from './components/recentBooksList.jsx';
import AddBookForm from './components/addBookForm';
import EditBooks from './components/editBook.js';

class App extends Component
{
   constructor(){
      super();
      this.state={
         bookList:[
           /* {id:0,name:"B1",author:"A1",version:"1.1"},
            {id:1,name:"B2",author:"A2",version:"1.2"},
            {id:2,name:"B3",author:"A3",version:"1.3"},
            {id:3,name:"B4",author:"A4",version:"1.4"}*/
            
         ]
      }
      this.submit=this.submit.bind(this);
      this.remove=this.remove.bind(this);
      this.selectBook=this.selectBook.bind(this);
   }

   componentDidMount(){  //called after constructor therefore best place to fetch data
      console.log("Mounted");
      document.body.style.background={backgroundImage:'url(http://bestanimations.com/Books/harry-potter-books-magic-animated-gif.gif)'
      ,backgroundRepeat:'no-repeat',backgroundSize:'cover',minHeight: '100%',minWidth: '1024px'};
      fetch(' http://localhost:8081/bookList')  //make ajax or http request
      .then(res => {return res.json()})      //then method is callback method nd called by browser----res.json() will return json format
      .then(res => { 
         console.log(JSON.stringify(res));   //since json is object therefore we need to convert to string
         setTimeout(()=>{
            this.setState({bookList :res})
         },1000)
      })
   }
   selectBook(book){
      this.setState({selectEditBook: book })
   }
submit(id,name,auth,ver)
{
   let temp= {id:id,name:name,author:auth,version:ver};
   // this.state.bookList.push(temp);
    fetch('http://localhost:8081/Addbook',{
       method:"POST",
       headers:{
       "Content-Type":"application/json",
       },
       body:JSON.stringify(temp)
    })
    .then(res => {
       if(res.ok){return res.json();}
    })
    .then(res=>{
       alert(`New book: ${JSON.stringify(res)} added successfully.`);
    })
    
   /* setTimeout(()=>{
    this.setState({temp});
    },0);*/
}
   remove(index){
      fetch('http://localhost:8081/Delete/' +index,{
         method:"DELETE",
         headers:{
            "Content-Type":"application/json",
            }
      })
      .then(res => {
         if(res.ok){return res.json();}
      })
      .then(res=>{
         alert("deleted successfully");
      })
      this.setState(state=>({
          bookList:state.bookList.filter(books=>books.id !==index)
      }));
     }
     edit(editedBook){
      // let temp= {id:editedBook.id,name:editedBook.name,author:editedBook.auth,version:editedBook.ver};
     console.log(editedBook);
      fetch(' http://localhost:8081/bookList/'+editedBook.id,{
         method:"PUT",
         headers:{
            "Content-Type":"application/json",
            },
         body:JSON.stringify(editedBook)
      })
      .then(res => {
         if(res.ok){return res.json();}
      })
      .then(res=>{
         alert(`Book updated successfully.`);
      })
     }
   render(){
      const mystyle = {     //react css
         color: "white",
         backgroundColor: "black",
         padding: "10px",
         fontFamily: "Arial",
         textAlign:"center",
         textShadow: "-1px -1px 0px rgba(200, 200, 200, 0.3), 1px 1px 0px rgba(0, 0, 0, 0.8)"
       }
   return(
      <BrowserRouter>
       <h1 style={mystyle}>Welcome to the Library :)</h1> 
              <div className="row">
                 <div className="col">
                    <Navbar/>
                 </div>
              </div>
      <Switch>
         <Route path="/" exact component={MainPage}></Route>
         {/* <Route path="/RecentBooksList" component={RecentBooksList}/> */}
         <Route path="/RecentBooksList" render={()=><RecentBooksList bookList={this.state.bookList} remove={this.remove}
         editBook={this.selectBook}/>}/>
         <Route path="/AddBook" render={(props)=><AddBookForm bookList={this.state.bookList} onSubmit={this.submit}/>} />
         <Route path="/EditBooks" render={(props)=><EditBooks book={this.state.selectEditBook} editted={this.edit}/>} />
      </Switch>
      </BrowserRouter>
   )
}

}
export default App;










//json-server  --watch db.json
