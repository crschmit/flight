package com.cooksys.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DateCmp {

	public static Integer date = 1;
	
	@Autowired
	public Integer getDate() {
		int d = date;
		date++;
		return d;
	}
}
