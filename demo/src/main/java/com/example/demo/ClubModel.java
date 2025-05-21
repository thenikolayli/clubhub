package com.example.demo;

public class ClubModel {
    private String name;
    private String description;
    private String image_url;

    public ClubModel(String name, String description, String image_url) {
        this.name = name;
        this.description = description;
        this.image_url = image_url;
    }

    public String get_name() {
        return this.name;
    }

    public String get_description() {
        return this.description;
    }

    public String get_image_url() {
        return this.image_url;
    }

    @Override
    public String toString() {
        return "\nClub name: " + this.name +
        "\nClub description: " + this.description +
        "\nImage url: " + this.image_url;
    }
}
