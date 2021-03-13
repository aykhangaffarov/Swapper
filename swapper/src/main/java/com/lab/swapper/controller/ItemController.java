package com.lab.swapper.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lab.swapper.model.Item;
import com.lab.swapper.service.ItemsService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class ItemController {
	private ItemsService itemService;
	
	ItemController(ItemsService itemService) {
		this.itemService = itemService;
	}

	  @GetMapping("/items")
	  public List<Item> getAllItems() {
	    return itemService.findAll();
	  }

}
