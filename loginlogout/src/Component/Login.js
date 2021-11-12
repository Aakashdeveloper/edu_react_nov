import React,{Component} from 'react';

const LoginUrl = "https://developerjwt.herokuapp.com/api/auth/login";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state={
            email:'',
            password:'',
            message:''
        }
    }
    handleInput = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(LoginUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk', data.token)
                this.props.history.push('/profile')
            }
        })

    }
    render(){
        return(
            <div className="panel panel-success">
                <div className="panel-heading">
                    Login
                </div>
                <div className="panel-body">
                    <h2 style={{color:'red'}}>{this.state.message}</h2>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" name="email" value={this.state.email} 
                        onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" name="password" value={this.state.password} 
                        onChange={this.handleInput}/>
                    </div>
                    <button className="btn btn-info" onClick={this.handleSubmit}>
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

export default Login;