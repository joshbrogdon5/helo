import React from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router';
import {connect} from 'react-redux'


const Nav = props => {
    console.log(props)
    const {location} = props;
    if(location.pathname === '/'){
        return ''
    }else{
    return(
        <div className="Nav">
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/post/:postid'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
            <p>{props}</p>
        </div>
    )
    }
}

function mapStateToProps(state){
    let {username, profile_pic} = state;
    return{
        username,
        profile_pic
    }
} 

export default connect(mapStateToProps)(withRouter(Nav));