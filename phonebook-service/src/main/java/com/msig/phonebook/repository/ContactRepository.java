package com.msig.phonebook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.msig.phonebook.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
	
	List<Contact> findByNameContainingIgnoreCase(String name);
}
