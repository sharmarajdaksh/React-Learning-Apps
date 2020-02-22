import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ce853.firebaseio.com/',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default instance;