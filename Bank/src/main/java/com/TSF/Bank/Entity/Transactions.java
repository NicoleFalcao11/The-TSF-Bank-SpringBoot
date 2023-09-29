package com.TSF.Bank.Entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "Transactions")
public class Transactions {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Tran_Id")
	private int Tran_Id;
	
	
	@Column(name = "Send_Id")
	private int Send_Id;
	
	@Column(name = "Sname")
	private String Sname;
	

	@Column(name = "Rec_Id")
	private int Rec_Id;
	
	@Column(name = "Rname")
	private String Rname;
	
	@Column(name = "Date")
	@Temporal(TemporalType.TIMESTAMP)
	private LocalDateTime Date;
	
	@Column(name = "amt_trans")
	private BigDecimal amt_trans;
	
	public Transactions() {
		
	}

	public Transactions(int tran_Id, int send_Id, String sname, int rec_Id, String rname, LocalDateTime date,
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
		Sname = sname;
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
		this.amt_trans = amt_trans;
	}

	@Override
	public String toString() {
		return "Transactions [Tran_Id=" + Tran_Id + ", Send_Id=" + Send_Id + ", Sname=" + Sname + ", Rec_Id=" + Rec_Id
				+ ", Rname=" + Rname + ", Date=" + Date + ", amt_trans=" + amt_trans + "]";
	}

	
	
	
}
