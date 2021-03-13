package com.lab.swapper.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.lab.swapper.model.Item;

@Service
public class ItemsService {
	
	private static List<Item> items = new ArrayList<Item>();

	  static {
	    items.add(new Item("1", "Galaxy", "Phone", "Nice phone by Samsung", "15-08-2018", "19-10-2019"));
	    items.add(new Item("2", "Iphone", "Phone", "Nice phone by Apple", "15-08-2017", "29-20-2019"));
	    items.add(new Item("3", "Huawei", "Phone", "Nice phone by Huawei", "21-11-2017", "31-10-2019"));
	    items.add(new Item("4", "As", "Phone", "Nice phone by Nu", "17-12-2016", "21-10-2019"));
	  }

	  public List<Item> findAll() {
	    return items;
	  }
}
