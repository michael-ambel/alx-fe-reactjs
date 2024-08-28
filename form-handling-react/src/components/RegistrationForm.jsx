import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState({ usernameError: '', emailError: '', passwordError: '' });
    const { username, password, email } = formData;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username){
            setErrors((prevState) => ({...prevState, usernameError:'Username can not be empty'}))
        }
        if (!email){
            setErrors((prevState) => ({...prevState, emailError:'Email can not be empty'}))
        }
        if (!password){
            setErrors((prevState) => ({...prevState, passwordError:'Password can not be empty'}))
        }
        
        else{
           console.log(formData);
           setErrors({ usernameError: '', emailError: '', passwordError: '' })
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
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
                type="text"
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