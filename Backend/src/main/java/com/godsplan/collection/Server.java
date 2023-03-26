package com.godsplan.collection;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="server")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Server {

    @Id
    private String id;
    private String name;
    private String language;
    private String framework;

}
