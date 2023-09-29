package com.TSF.Bank.payload;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;

import com.TSF.Bank.Entity.Customer;
import com.TSF.Bank.Exceptions.BalException;
import com.TSF.Bank.Repository.CustomerRepo;
import com.TSF.Bank.Repository.TransactionRepo;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;



public class TranValidator {

	private int Tran_Id;
	
	private int Send_Id;
	
	@NotEmpty(message = "Sender Name Cannot be Null")
	private String Sname;
	
    private int Rec_Id;
	
    @NotEmpty(message = "Receiver Name Cannot be Null")
	private String Rname;
	
	private LocalDateTime Date;
	
	
	@DecimalMin(value = "1" , message  = "Amount cannot be 0")
	@Positive(message = "Amount Cannot be Negative")
	private BigDecimal amt_trans;

	public TranValidator(int tran_Id, int send_Id, String sname, int rec_Id, String rname, LocalDateTime date,
			BigDecimal amt_trans) {
		super();
		Tran_Id = tran_Id;
		Send_Id = send_Id;
		Sname = sname;
		Rec_Id = rec_Id;
		Rname = rname;
		Date = date;
		this.amt_trans = amt_trans;
	}
	
	public TranValidator() {
		
	}
	
//	@Autowired
//	private TransactionRepo T;
//	
//	@Autowired
//	private CustomerRepo C;
//	
//	public BigDecimal getBalance(String Sname) {
//		Customer sender = C.findByName(Sname);
//		System.out.println("Sender Found");
//		BigDecimal bal = sender.getCur_bal();
//		return bal;
//		
//	}
//	BigDecimal Bal = getBalance(Sname);
	

	public int getTran_Id() {
		return Tran_Id;
	}

	public void setTran_Id(int tran_Id) {
		Tran_Id = tran_Id;
	}

	public int getSend_Id() {
		return Send_Id;
	}

	public void setSend_Id(int send_Id) {
		Send_Id = send_Id;
	}

	public String getSname() {
		return Sname;
	}

	public void setSname(String sname) {

        this.Sname = sname;
    }

	public int getRec_Id() {
		return Rec_Id;
	}

	public void setRec_Id(int rec_Id) {
		Rec_Id = rec_Id;
	}

	public String getRname() {
		return Rname;
	}

	public void setRname(String rname) {
		Rname = rname;
	}

	public LocalDateTime getDate() {
		return Date;
	}

	public void setDate(LocalDateTime date) {
		Date = date;
	}

	public BigDecimal getAmt_trans() {
		return amt_trans;
	}

	public void setAmt_trans(BigDecimal amt_trans) {
		
//         if(amt_trans.compareTo(Bal) >= 0) {
//        	 throw new BalException("Amount Cannot be Greater or Equal to Current Balance");
//         }
        this.amt_trans = amt_trans;
    }
	
	
}

