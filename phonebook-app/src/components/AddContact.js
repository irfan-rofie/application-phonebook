import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createContact } from '../services/ContactService';

const AddContact = () => {
    const [contact, setContact] = useState({ name: '', phoneNumber: '', email: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createContact(contact);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Contact</h2>
            <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="phoneNumber" value={contact.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
            <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddContact;