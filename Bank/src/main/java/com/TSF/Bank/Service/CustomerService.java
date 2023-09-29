package com.TSF.Bank.Service;

import java.util.List;

import com.TSF.Bank.Entity.Customer;

public interface CustomerService {
	
	List<Customer> getAllCustomers();
	Customer getCustById(int Id);
	
}
