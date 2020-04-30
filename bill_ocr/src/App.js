import React, { useState, useEffect } from "react";
import axios from "axios";
import Tesseract from "tesseract.js";
import { baseUrl } from "./config/config";
import { BrowserRouter as Router } from "react-router-dom";

import Dashboard from "./containers/Dashboard/Dashboard";

export default function App() {
    return (
        <Router>
            <Dashboard />
        </Router>
    );
}

// export default function App(props) {
//     const [file, setFile] = useState(null);
//     const [data, setData] = useState(null);
//     const [fileName, setFileName] = useState(null);

//     useEffect(() => {
//         axios.get(baseUrl + "all").then(({ data }) => setData(data));
//     }, []);
//     const handleChange = (e) => {
//         console.log(e.target.files[0]);
//         setFile(e.target.files[0]);
//         setFileName(e.target.files[0].name);
//     };

//     // form submition
//     const fileSubmit = () => {
//         let formData = new FormData();
//         formData.append("file", file);
//         axios
//             .post(baseUrl + "upload/bill/5ea95881c6c28f47a8eeadb8", formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             })
//             .then(({ data }) => console.log(data));
//     };

//     return (
//         <div className='container'>
//             <div className='custom-file'>
//                 <input
//                     type='file'
//                     onChange={handleChange}
//                     className='custom-file-input'
//                     id='customFile'
//                 />
//                 <label className='custom-file-label' htmlFor='customFile'>
//                     {fileName ? fileName : "Choose file"}
//                 </label>
//             </div>
//             <button className='btn btn-block btn-success' onClick={fileSubmit}>
//                 SUBMIT
//             </button>
//             {data &&
//                 data.map((item) => (
//                     <div key={item._id}>
//                         <img src={item.bill_img} alt='hello' />
//                     </div>
//                 ))}
//         </div>
//     );
// }
