package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.Followers;

public interface FollowerRepository extends JpaRepository<Followers,Long>{

}
