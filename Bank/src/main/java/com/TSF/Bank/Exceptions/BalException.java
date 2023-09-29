package com.TSF.Bank.Exceptions;

public class BalException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

		public BalException(String message, Throwable cause) {
			super(message, cause);
			// TODO Auto-generated constructor stub
		}

		public BalException(String message) {
			super(message);
			// TODO Auto-generated constructor stub
		}

		public BalException(Throwable cause) {
			super(cause);
			// TODO Auto-generated constructor stub
		}

}
