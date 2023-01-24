# Frontend_backed_DjReact
# getpatient 

import axios from "axios";
import React from "react";

function getpatient(){
    return axios.get('http://127.0.0.1:8000/patient/') # connection with django urls 
    .then( res => {

    return res.data

    })
}
export default getpatient;
