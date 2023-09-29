package com.TSF.Bank.RestController;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TSF.Bank.Entity.Customer;
import com.TSF.Bank.Entity.Transactions;
import com.TSF.Bank.Exceptions.BalException;
import com.TSF.Bank.Exceptions.SameException;
import com.TSF.Bank.Repository.CustomerRepo;
import com.TSF.Bank.Repository.TransactionRepo;
import com.TSF.Bank.Service.TranService;
import com.TSF.Bank.payload.TranValidator;

import jakarta.validation.Valid;

@RestController
public class TransactRest {
	
	@Autowired
	private TranService Tran;

	
	@Autowired
	private CustomerRepo C;

	
	@GetMapping("/Transfers")
	public List<Transactions> getAllTransfers() {
		return Tran.getAllTransactions();
		
	}
	
	@PostMapping("/Transfers")
	public TranValidator AddTran(@Valid @RequestBody TranValidator Tra) {
		System.out.println("Received"+Tra);
		String name = Tra.getSname();
		String rec = Tra.getRname();
		
		Customer sender = C.findByName(name);
		System.out.println("Sender Found in REST");
		BigDecimal Bal = sender.getCur_bal();
		
		BigDecimal bal = Tra.getAmt_trans();
		if(bal.compareTo(Bal) >= 0) {
			throw new BalException("Amount Cannot be Greater or Equal to Current Balance");
		}
		System.out.println("Sender: "+name+"Rec "+rec);
		
		if(name.equals(rec)) {
			System.out.println("In Same");
			throw new SameException("Sender and Receiver Cannot be Same");
		}
		
		System.out.println("After Same");
		return Tran.AddTransaction(Tra);
		
	}
	
	
	

}

//@Autowired
//private TransactionRepo T;
//
//@Autowired
//private CustomerRepo C;
//
//public BigDecimal getBalance(String Sname) {
//	Customer sender = C.findByName(Sname);
//	System.out.println("Sender Found");
//	BigDecimal bal = sender.getCur_bal();
//	return bal;
//	
//}
//BigDecimal Bal = getBalance(Sname);
