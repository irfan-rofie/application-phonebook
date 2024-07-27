package com.msig.phonebook.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msig.phonebook.exception.ResourceNotFoundException;
import com.msig.phonebook.model.Contact;
import com.msig.phonebook.repository.ContactRepository;

@Service
public class ContactService {
	
    @Autowired
    private ContactRepository contactRepository;

    public Contact addContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public Contact getContactById(Long id) {
        return contactRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contact not found"));
    }

    public Contact updateContact(Long id, Contact contactDetails) {
        Contact contact = contactRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contact not found"));
        contact.setName(contactDetails.getName());
        contact.setPhoneNumber(contactDetails.getPhoneNumber());
        contact.setEmail(contactDetails.getEmail());
        return contactRepository.save(contact);
    }

    public void deleteContact(Long id) {
        Contact contact = contactRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contact not found"));
        contactRepository.delete(contact);
    }
    
    public List<Contact> searchContactsByName(String name) {
        return contactRepository.findByNameContainingIgnoreCase(name);
    }
}
