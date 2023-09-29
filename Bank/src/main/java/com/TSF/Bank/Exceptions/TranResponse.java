package com.TSF.Bank.Exceptions;

public class TranResponse {
	
	private int status;
	private String messages;
	private long timestamp;
	
	public TranResponse() 
	{
	}

	public TranResponse(int status, String messages, long timestamp) {
		super();
		this.status = status;
		this.messages = messages;
		this.timestamp = timestamp;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return messages;
	}

	public void setMessage(String messages) {
		this.messages = messages;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

}
