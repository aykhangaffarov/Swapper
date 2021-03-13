package com.lab.swapper.model;

public class Item {
	private String id;
	private String name;
	private String categoryId;
	private String description;
	private String releaseDate;
	private String createdAt;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}
	public String getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
	
	public Item(String id, String name, String categoryId, String description, String releaseDate, String createdAt) {
		super();
		this.id = id;
		this.name = name;
		this.categoryId = categoryId;
		this.description = description;
		this.releaseDate = releaseDate;
		this.createdAt = createdAt;
	}
	
}
