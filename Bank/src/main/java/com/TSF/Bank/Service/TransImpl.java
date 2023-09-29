package com.TSF.Bank.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TSF.Bank.Entity.Customer;
import com.TSF.Bank.Entity.Transactions;
import com.TSF.Bank.Repository.CustomerRepo;
import com.TSF.Bank.Repository.TransactionRepo;
import com.TSF.Bank.payload.TranValidator;


@Service
public class TransImpl implements TranService{
	
	@Autowired
	private TransactionRepo tr;
	
	@Autowired
	private CustomerRepo cr;
	
	@Autowired
	private ModelMapper model;
	
	
	@Override
	public List<Transactions> getAllTransactions() {
		// TODO Auto-generated method stub
		return tr.findAll();
	}

	@Override
	public TranValidator AddTransaction(TranValidator st) {
		// TODO Auto-generated method stub
		
		Transactions T = DTOtoStudent(st);
		T.setDate(LocalDateTime.now());
		System.out.println("Date Set");
		tr.save(T);
		System.out.println("Entity Saved");
		System.out.println("Rname = "+T.getRname());
		System.out.println("Sname = "+T.getSname());
		System.out.println("Amount "+T.getAmt_trans());
		
		String sname = T.getSname();
		System.out.println("Sname Found"+sname);
		Customer sender = cr.findByName(sname);
		System.out.println("Sender Found");
	
	    int sId = sender.getCust_Id();
		T.setSend_Id(sId);
		System.out.println("SID Set");
		BigDecimal bal = sender.getCur_bal();
		BigDecimal amt = T.getAmt_trans();
		BigDecimal sen_bal = bal.subtract(amt);
		sender.setCur_bal(sen_bal);
		
		cr.save(sender);
		System.out.println("Sender Saved");
		
		//Receiver
		String rname = T.getRname();
		Customer rec = cr.findByName(rname);
		System.out.println("Rec Found");
		int rid = rec.getCust_Id();
		System.out.println("Rec Id Found");
		T.setRec_Id(rid);
		System.out.println("Rec Id Set");
		BigDecimal balr = rec.getCur_bal();
		BigDecimal rec_balr = balr.add(amt);
		rec.setCur_bal(rec_balr);
		tr.save(T);
		System.out.println("T saved");
		cr.save(rec);
		System.out.println("Rec Saved");

		return StudenttoDTO(T);
	}
	
	
private Transactions DTOtoStudent(TranValidator s) {
		
	Transactions stu = model.map(s, Transactions.class);

		return stu;
		
	}
	
	private TranValidator StudenttoDTO(Transactions s) {
		
		TranValidator stu = model.map(s, TranValidator.class);

		return stu;
		
	}

}
