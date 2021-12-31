package com.example.backend.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
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
@Table(name="posts")
@Data

public class Posts {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long postId;
	private String pic;
	@ManyToOne
	@JsonBackReference

	private Users user;
	private int likes;
	
	@OneToMany(mappedBy="post",cascade=CascadeType.REMOVE)
	private List<Comments> comment=new ArrayList<Comments>();
}
