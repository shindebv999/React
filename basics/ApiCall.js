import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateUser() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        username: '',
        password: ''
    });

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Fetch the user data initially (for example, user with ID 1)
        axios.get("https://dummyjson.com/users/1")
            .then(res => {
                setUserData(res.data); // Set the user data for editing
            })
            .catch(err => {
                console.error("Error fetching user:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Make a PUT request to update the user details
        axios.put('https://dummyjson.com/users/1', userData)
            .then(res => {
                setMessage("User updated successfully!");
            })
            .catch(err => {
                console.error("Error updating user:", err);
                setMessage("Failed to update user.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <h1>Update User</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={userData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={userData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <select
                            name="gender"
                            value={userData.gender}
                            onChange={handleChange}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Update</button>
                    </div>
                </form>
            )}

            {message && <p>{message}</p>}
        </div>
    );
}
