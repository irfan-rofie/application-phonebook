import React, { useState } from 'react';
import { searchContacts } from '../services/ContactService';

const SearchContact = () => {
    const [name, setName] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const result = await searchContacts(name);
        setResults(result.data);
    };

    return (
        <div>
            <h2>Search Contacts</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name to search" />
            <button onClick={handleSearch}>Search</button>
            <div>
                {results.map(contact => (
                    <div key={contact.id}>
                        <h3>{contact.name}</h3>
                        <p>{contact.phoneNumber}</p>
                        <p>{contact.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchContact;