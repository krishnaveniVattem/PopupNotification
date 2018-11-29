import React, { Component } from 'react';
import Search from './Search.js'


class Login extends Component{
    
     
     constructor(props)
     {
         super(props);
         
         this.state={
            Users:{},            
            name:'',
            userid:''
            
         };
         this.fetchUser = this.fetchUser.bind(this);
         this.handleName = this.handleName.bind(this);
         this.handleUserid = this.handleUserid.bind(this);
         this.checkInput = this.checkInput.bind(this);
         Search.findAll(this.fetchUser);
     }
     
     fetchUser(data){
         this.setState({Users:data})
         console.log(this.state.Users)
         
       
     }
     
     handleName(event)
    {
        
        this.setState({name: event.target.value});
        
    }
    handleUserid(event)
    {
        
        this.setState({userid: event.target.value});
        
    }
     
    checkInput(){
        
        for(var i=0; i<this.state.Users.data.length; i++)
         {
            if( this.state.Users.data[i].username == this.state.name)
            {
                console.log("name matched")
                if(this.state.Users.data[i].userid == this.state.userid)
                {
                   
                    console.log("userid also matched")
                    console.log(this.props)
                    this.props.history.push(`/message/${this.state.userid}`)
                }
            }
            else
            {
                console.log("not matched")
            }
         }
    }
    
         
    render(){
                    
                
            
        return(
                <div className="MainContainer">
                    <div>
                        <h1>Welcome</h1>
                    </div>
                    <label id='name' >Name</label>
                    <input id='nameInput'  className="form-control col-sm-4 " value={this.state.name} onChange={this.handleName}  />
                    <label id='userid'>Userid</label>            
                    <input id='useridInput' className="form-control col-sm-3  " value={this.state.userid} onChange={this.handleUserid}  />
                    <button id='submmit' className="btn btn-primary " onClick={this.checkInput} >Submit</button>
                </div>
                )
    }
}
 export default Login
