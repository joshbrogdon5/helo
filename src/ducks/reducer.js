import axios from 'axios';

const initialState={
    username: '',
    id: 0,
    profile_pic: '',
}

const LOGIN = "LOGIN"
const REGISTER = "REGISTER"


export default function reducer(state=initialState, action){
    switch(action.type){
        case REGISTER:
            return Object.assign({}, state, {user: action.payload.username, pic: action.payload.profile_pic})
        case LOGIN:
            return Object.assign({}, state, {user: action.payload.username, pic: action.payload.profile_pic, id: action.payload.id })

        default: return state;
    }
}


export function register(obj, history){
    return{
        type: REGISTER,
        payload: axios.post('/api/register', obj).then(response => {
            history.push('/dashboard');
            return response.data;
        })
    }
}

export function login(obj, history){
    return {
        type: LOGIN,
        payload: axios.post('/api/login', obj).then(response => {
            history.push('/dashboard')
            return response.data
        })
    }
}