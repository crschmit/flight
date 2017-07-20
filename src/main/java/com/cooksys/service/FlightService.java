package com.cooksys.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.cooksys.component.DateCmp;
import com.cooksys.component.FlightGenerator;
import com.cooksys.pojo.Flight;

@Service
public class FlightService {

	@Autowired
	FlightGenerator generator;
	
	@Autowired
	DateCmp date;

	private ArrayList<Flight> flightList = new ArrayList<>();
	
	public ArrayList<Flight> getDailyFlightList()
	{
		return flightList;
	}
	
	//The fixedDelay parameter determines how often a new day is generated as expressed in milliseconds
	@Scheduled(fixedDelay=120000)
	private void refreshFlights()
	{
		flightList = generator.generateNewFlightList();
	}
	
}
