package com.godsplan.service;

import com.godsplan.collection.Server;
import com.godsplan.repository.ServerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ServerService {

    @Autowired
    private ServerRepository repository;

//    CRUD Operations



//    Create
    public Server addServer(Server server){
        server.setId(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(server);
    }


//    Read
    public List<Server> getAllServer(){
        return repository.findAll();
    }

//    Get by Server Name
    public List<Server> getByServerName(String name){
        return repository.findByName(name);
    }

//    Delete
    public String deleteServer(String id){
        repository.deleteById(id);
        return "Server object is Delete successfully.";
    }

}
