package com.TSF.Bank.Service;

import java.util.List;

import com.TSF.Bank.Entity.Transactions;
import com.TSF.Bank.payload.TranValidator;

public interface TranService {
	
	List<Transactions> getAllTransactions();
	TranValidator AddTransaction(TranValidator T);

}
