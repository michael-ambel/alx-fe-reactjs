import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '', email: '' });
    const [errors, setErrors] = useState({ usernameError: '', passwordError: '', emailError: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.username){
            setErrors((prevState) => ({...prevState, usernameError:'Username can not be empty'}))
        }
        if(!formData.email){
            setErrors((prevState) => ({...prevState, emailError:'Email can not be empty'}))
        }
        if(!formData.password){
            setErrors((prevState) => ({...prevState, passwordError:'Password can not be empty'}))
        }
        
        else{
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
            <div>{errors.usernameError}</div>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <div>{errors.emailError}</div>
            <input
                type="email"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <div>{errors.passwordError}</div>
            <button type="submit">Submit</button>
        </form>
        
    );
};

export default RegistrationForm;