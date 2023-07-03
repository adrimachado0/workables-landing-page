import axios from 'axios';

const sendMail = async (email,) => {
    return axios.post('/api',{}, {
        params:{
            email:email
        }
    })
};

export default sendMail;