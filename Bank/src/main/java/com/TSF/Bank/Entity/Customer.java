package com.TSF.Bank.Entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "Customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Cust_Id")
	private int Cust_Id;
	
	@Column(name = "name" , length = 30)
	private String name;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "mobno")
	private String mobno;
	
	@Column(name = "acctno")
	private String acctno;
	
	
	@Column(name = "cur_bal")
	private BigDecimal cur_bal;
	
	public Customer() {
		//Default Constructor
	}

	public Customer(int cust_Id, String name, String email, String mobno, String acctno,
			BigDecimal cur_bal) {
		super();
		Cust_Id = cust_Id;
		this.name = name;
		this.email = email;
		this.mobno = mobno;
		this.acctno = acctno;
		this.cur_bal = cur_bal;
	}

	public int getCust_Id() {
		return Cust_Id;
	}

	public void setCust_Id(int cust_Id) {
		Cust_Id = cust_Id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobno() {
		return mobno;
	}

	public void setMobno(String mobno) {
		this.mobno = mobno;
	}

	public String getAcctno() {
		return acctno;
	}

	public void setAcctno(String acctno) {
		this.acctno = acctno;
	}

	public BigDecimal getCur_bal() {
		return cur_bal;
	}

	public void setCur_bal(BigDecimal cur_bal) {
		this.cur_bal = cur_bal;
	}

	@Override
	public String toString() {
		return "Customer [Cust_Id=" + Cust_Id + ", name=" + name + ", email=" + email + ", mobno=" + mobno + ", acctno="
				+ acctno + ", cur_bal=" + cur_bal + "]";
	}
	
	

}
