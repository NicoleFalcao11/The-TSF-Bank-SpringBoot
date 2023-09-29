package com.TSF.Bank.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TSF.Bank.Entity.Customer;
import com.TSF.Bank.Repository.CustomerRepo;


@Service
public class CustServiceImpl implements CustomerService{
	

	@Autowired
	private CustomerRepo cr ;
	
	@Override
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return cr.findAll();
	}

	@Override
	public Customer getCustById(int Id) {
		// TODO Auto-generated method stub
		Optional<Customer> optionalCust = cr.findById(Id);
		Customer cust = optionalCust.get();
		return cust;
	}

}
