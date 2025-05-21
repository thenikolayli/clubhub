package com.example.demo;

import org.bson.Document;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoClient;

public class GetCollection {
    public static MongoCollection<Document> get_collection(String name) {
        String uri = "mongodb://localhost:27017";

        try (MongoClient mongo_client = MongoClients.create(uri)) {
            MongoDatabase database = mongo_client.getDatabase("main");
            
            return database.getCollection(name);
        }
    }
}
