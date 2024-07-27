import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getContactById, updateContact } from '../services/ContactService';

const EditContact = () => {
    const [contact, setContact] = useState({ name: '', phoneNumber: '', email: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadContact();
    }, []);

    const loadContact = async () => {
        const result = await getContactById(id);
        setContact(result.data);
    };

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateContact(id, contact);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Contact</h2>
            <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="phoneNumber" value={contact.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
            <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required />
            <button type="submit">Update</button>
        </form>
    );
};

export default EditContact;