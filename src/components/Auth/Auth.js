import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register, login} from './../../ducks/reducer';

class Auth extends Component {
    constructor(){
        super()

        this.state={
            username: '',
            password: ''
        }
    }


    handleUsername(username){
        this.setState({
            username: username
        })
    }

    handlePassword(password){
        this.setState({
            password: password
        })
    }

    render(){
        const {id, username, profile_pic, login, register} = this.props;
        return(
            <div>
                <input placeholder="Username" value={this.state.username} onChange={e => this.handleUsername(e.target.value)} type="text"/>
                <input placeholder="Password" value={this.state.password} onChange={e => this.handlePassword(e.target.value)} type="text"/>
                <button onClick={login}>Login</button>
                <button onClick={register}>Register</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    let {id, username, profile_pic} = state;
    return {
        id,
        username,
        profile_pic
    }
}

export default connect(mapStateToProps, {login, register})(Auth);