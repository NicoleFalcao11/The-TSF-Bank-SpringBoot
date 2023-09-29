package com.TSF.Bank.Exceptions;

public class SameException extends RuntimeException {
	
		private static final long serialVersionUID = 1L;

			public SameException(String messages, Throwable cause) {
				super(messages, cause);
				// TODO Auto-generated constructor stub
			}

			public SameException(String messages) {
				super(messages);
				// TODO Auto-generated constructor stub
			}

			public SameException(Throwable cause) {
				super(cause);
				// TODO Auto-generated constructor stub
			}

	}


