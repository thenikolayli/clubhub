package com.example.demo;

import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;

import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class GetCollection {
    private static final CodecRegistry pojoCodecRegistry = CodecRegistries.fromRegistries(
        MongoClientSettings.getDefaultCodecRegistry(),
        CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build())
    );

    private static final MongoClient mongoClient = MongoClients.create("mongodb://mongo:27017");
    
    private static final MongoDatabase database = mongoClient.getDatabase("main").withCodecRegistry(pojoCodecRegistry);

    public static MongoCollection<ClubModel> getClubCollection() {
        return database.getCollection("clubs", ClubModel.class);
    }
}
