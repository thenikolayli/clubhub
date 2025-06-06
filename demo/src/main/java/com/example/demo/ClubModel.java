package com.example.demo;

import org.bson.codecs.pojo.annotations.BsonCreator;
import org.bson.codecs.pojo.annotations.BsonProperty;

public class ClubModel {
    private final String name;
    private final String description;
    private final String imageUrl;

    @BsonCreator
    public ClubModel(@BsonProperty("name") String name,
                     @BsonProperty("description") String description,
                     @BsonProperty("imageUrl") String imageUrl) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return this.name;
    }

    public String getDescription() {
        return this.description;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    @Override
    public String toString() {
        return "\nClub name: " + this.name +
        "\nClub description: " + this.description +
        "\nImage url: " + this.imageUrl;
    }
}
