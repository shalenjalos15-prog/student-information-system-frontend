import { useState } from "react";
import InputField from "../components/common/InputField";
import logo from "../assets/school_logo.png";
import "../styles/Login.css";

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (error) {
            setError("");
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        if (formData.username.trim() === "") {
            setError("Username is required.");
            return;
        }

        if (formData.password.trim() === "") {
            setError("Password is required.");
            return;
        }

        console.log(formData);
    };

    return (
        <div className="login-page">
            <div className="row justify-content-center align-items-center h-100 w-100 m-0">
                <div className="col-12 d-flex justify-content-center">
                    <div className="login-card">
                        
                        <div className="text-center">
                            <img
                                src={logo}
                                alt="School Logo"
                                className="school-logo"
                            />
                            <h1 className="system-title">
                                Student Information System
                            </h1>
                            <p className="system-subtitle">
                                Manage. Organize. Empower.
                            </p>
                        </div>

                        <div className="error-container">
                            {error ? (
                                <div className="alert alert-danger py-1 px-3 m-0 text-center small w-100">
                                    {error}
                                </div>
                            ) : (
                                <div className="error-placeholder"></div>
                            )}
                        </div>

                        <div className="form-fields">
                            <InputField
                                label="Username"
                                type="text"
                                placeholder="Enter your username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                icon="bi-person-fill"
                            />

                            <InputField
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                icon="bi-lock-fill"
                            />
                        </div>

                        <button
                            className="btn login-btn w-100"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;