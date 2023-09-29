package com.TSF.Bank.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TSF.Bank.Entity.Customer;

public interface CustomerRepo extends JpaRepository <Customer , Integer> {
	Customer findByName(String name);
	
}
