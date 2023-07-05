import axios from "axios";

const almacenarCorreo = async (email,) => {
    return axios.post('http://localhost:5000/correo',{}, {
        params:{
            email:email
        }
    })
};

export default almacenarCorreo;