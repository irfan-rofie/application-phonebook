import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getContacts, deleteContact, searchContacts } from '../services/ContactService';
import '../ContactList.css';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        if (name) {
            handleSearch();
        } else {
            loadContacts();
        }
    }, [name]);

    const handleSearch = async () => {
        const result = await searchContacts(name);
        setContacts(result.data);
    };

    const loadContacts = async () => {
        const result = await getContacts();
        setContacts(result.data);
    };

    const removeContact = async (id) => {
        await deleteContact(id);
        loadContacts();
    };

    return (
        <div className="contact-list">
            <h1 className="title">Contact List</h1>
            <div className="search-bar">
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Search contacts by name"
                />
            </div>
            <div className="contact-grid">
                {contacts.map(contact => (
                    <div className="contact-card" key={contact.id}>
                        <div className="contact-info">
                            <h2 className="contact-name">{contact.name}</h2>
                            <p className="contact-email">{contact.email}</p>
                            <p className="contact-phone">{contact.phoneNumber}</p>
                        </div>
                        <div className="contact-actions">
                            <Link to={`/edit/${contact.id}`} className="action-button edit-button">Edit</Link>
                            <button className="action-button delete-button"
                                onClick={() => removeContact(contact.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;