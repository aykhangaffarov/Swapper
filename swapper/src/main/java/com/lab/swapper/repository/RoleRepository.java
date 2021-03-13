package com.lab.swapper.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lab.swapper.model.ERole;
import com.lab.swapper.model.Role;



public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
