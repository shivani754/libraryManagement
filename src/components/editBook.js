import React,{Component} from 'react';


export default class EditBooks extends Component{
    render(){
      /* let bookList=this.props.bookList.map(book=>book);*/
        return(
            <form onSubmit={this.handleSubmit}>
            <div style={{marginLeft:'2vw',marginRight:'3vw',width:'96vw',color:'white'}}>
                <div class="form-row">
                <div class="form-group col-md-6">
                        <label >Book id</label>
                       <input type="text" class="form-control" id="bid" defaultValue={this.props.book.id} />
                    </div>
                    <div class="form-group col-md-6">
                        <label >Book Name</label>
                       <input type="text" class="form-control" id="bname" defaultValue={this.props.book.name} />
                    </div>
                   <div class="form-group col-md-6">
                        <label >Book Author</label>
                        <input type="text" class="form-control" id="bauth" defaultValue={this.props.book.author}/>
                   </div>
                   <div class="form-group col-md-6">
                        <label >Book Version</label>
                       <input type="text" class="form-control" id="bver" defaultValue={this.props.book.version} />
                    </div>
              </div>
              <button type="submit" class="btn btn-primary" >Submit</button>
            </div>
            </form>
        )
    }
    handleSubmit =(event) =>{
        event.preventDefault();
        //console.log("shivani");
        let temp={
            id:document.getElementById("bid").value,
            name:document.getElementById("bname").value,
            author:document.getElementById("bauth").value,
            version:document.getElementById("bver").value
        }
        this.props.editted(temp);
    }
}
