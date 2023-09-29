package com.TSF.Bank.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TSF.Bank.Entity.Transactions;

public interface TransactionRepo extends JpaRepository<Transactions , Integer> {

}
