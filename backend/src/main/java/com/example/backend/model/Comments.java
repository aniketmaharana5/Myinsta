package com.example.backend.model;
import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;


@Entity
@Table(name="comments")

public class Comments {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int commentsId;
	private String description;
	@ManyToOne
	@JsonBackReference

	private Posts post;
	
	
	
	public Comments() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Comments(int commentsId, String description, Posts post) {
		super();
		this.commentsId = commentsId;
		this.description = description;
		this.post = post;
	}
	public int getCommentsId() {
		return commentsId;
	}
	public void setCommentsId(int commentsId) {
		this.commentsId = commentsId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Posts getPost() {
		return post;
	}
	public void setPost(Posts post) {
		this.post = post;
	}
	
	
}
	