package com.godsplan.controller;


import com.godsplan.collection.Server;
import com.godsplan.service.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping
public class ServerController {

    @Autowired
    private ServerService service;


    @CrossOrigin("http://localhost:3000/")
    @PostMapping("create")
    @ResponseStatus(HttpStatus.CREATED)
    public Server createServer(@RequestBody Server server){
        return service.addServer(server);
    }


    @CrossOrigin("http://localhost:3000/")
    @GetMapping("/getAll")
    public List<Server> getServer(){
        return service.getAllServer();
    }


    @CrossOrigin("http://localhost:3000/")
    @GetMapping("/name/{name}")
    public List<Server> getServerByName(@PathVariable String name){
        return service.getByServerName(name);
    }


    @DeleteMapping("/delete/{id}")
    public String deleteServer(@PathVariable String id){
        return service.deleteServer(id);
    }





}
