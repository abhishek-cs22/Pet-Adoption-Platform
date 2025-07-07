// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         axios.post(`${process.env.REACT_APP_API_URL}/user/login`, { email, password })
//             .then(result => {
//                 console.log(result);
//                 if (result.data === "Success") {
//                     alert('Login successful!');
//                     navigate('/abc');
//                 } else {
//                     alert('Incorrect password! Please try again.');
//                 }
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
//             <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
                
//                 <h2 className="mb-4 text-center text-primary">Login as Pet Parent</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3 text-start">
//                         <label htmlFor="email" className="form-label"><strong>Email Address</strong></label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             id="email"
//                             placeholder="Enter email"
//                             onChange={(event) => setEmail(event.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3 text-start">
//                         <label htmlFor="password" className="form-label"><strong>Password</strong></label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             id="password"
//                             placeholder="Enter password"
//                             onChange={(event) => setPassword(event.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary w-100">Login As Pet Parent</button>
//                 </form>

//                 <div className="text-center mt-3">
//                     <p className="mb-2">Don&apos;t have an account?</p>
//                     <Link to='/register' className="btn btn-outline-secondary w-100">Register As Pet Parent</Link>
//                     <button onClick={() => navigate('/admin')} className="btn btn-primary w-100">Login As Admin</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_API_URL}/user/login`, { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    alert('Login successful!');
                    navigate('/abc');
                } else {
                    alert('Incorrect password! Please try again.');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div 
            className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" 
            style={{ backgroundColor: '#f8f9fa' }} // Light gray background instead of blue
        >
            <div 
                className="bg-white p-5 rounded-4 shadow-lg w-100"
                style={{ maxWidth: '400px' }}
            >
                <h2 className="mb-4 text-center text-primary fw-bold">Welcome Back</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                        <input
                            type="email"
                            className="form-control rounded-3"
                            id="email"
                            placeholder="Enter your email"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control rounded-3"
                            id="password"
                            placeholder="Enter your password"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Login as Pet Parent
                    </button>
                </form>

                <div className="text-center">
                    <p className="mb-2 text-muted">Don’t have an account?</p>
                    <Link to='/register' className="btn btn-outline-primary w-100 mb-2">
                        Register as Pet Parent
                    </Link>
                    <button 
                        onClick={() => navigate('/admin')} 
                        className="btn btn-secondary w-100"
                    >
                        Login as Admin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
