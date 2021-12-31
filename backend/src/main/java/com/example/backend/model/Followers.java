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

import lombok.Data;

@Entity
@Data
@Table(name="followers")
public class Followers {

	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long followerId;
	@ManyToOne
	private Users user;
	private String followerUserName;
	

}