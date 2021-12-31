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
@Data
public class Comments {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int commentsId;
	private String description;
	@ManyToOne
	@JsonBackReference

	private Posts post;
}
	