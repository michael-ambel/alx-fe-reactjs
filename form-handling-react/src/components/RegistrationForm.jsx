import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.username === '' && formData.email === '' && formData.password === '' ){
            console.log("Fild can not be blank");
        }else{
           console.log(formData); 
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <input
                type="email"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
        
    );
};

export default RegistrationForm;