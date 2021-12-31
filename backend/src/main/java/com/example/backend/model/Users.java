package com.example.backend.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;


@Entity
@Table(name="users")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Users {
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long userId;
	 @Column(unique = true)
	private String userName;
	private String profilePic;
	private int noOfPosts;
	private int followers;
	private int following;
	private String password;
	
	@OneToMany(mappedBy="user",cascade=CascadeType.REMOVE)
	private List<Posts> post=new ArrayList<Posts>();
	
	@OneToMany(mappedBy="user",cascade=CascadeType.REMOVE)
	private List<Followers> follower=new ArrayList<Followers>();

	
	
}
