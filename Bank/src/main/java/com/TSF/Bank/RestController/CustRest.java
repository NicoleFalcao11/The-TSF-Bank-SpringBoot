package com.TSF.Bank.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.TSF.Bank.Entity.Customer;
import com.TSF.Bank.Service.CustomerService;

@RestController
public class CustRest {
	
	@Autowired
	private CustomerService cs;
	
	@GetMapping("/customers")
	public List<Customer> getAllCustomers() {
		return cs.getAllCustomers();
	}
	
	@GetMapping("/customers/{Id}")
	public Customer getCustById(@PathVariable int Id) {
		Customer c = cs.getCustById(Id);
		return c;
	}
	
	

}
