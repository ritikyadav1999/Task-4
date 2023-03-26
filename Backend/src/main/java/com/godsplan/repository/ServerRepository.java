package com.godsplan.repository;

import com.godsplan.collection.Server;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ServerRepository extends MongoRepository<Server,String> {

    List<Server> findByName(String name);
}
