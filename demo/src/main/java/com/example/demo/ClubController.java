package com.example.demo;

import java.util.ArrayList;

import org.bson.conversions.Bson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import static com.mongodb.client.model.Filters.eq;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.InsertOneResult;


@RestController
public class ClubController {
    @PostMapping("/api/club")
    public ResponseEntity<InsertOneResult> createClub(@RequestBody ClubModel club) {
        MongoCollection<ClubModel> clubCollection = GetCollection.getClubCollection();
        InsertOneResult result = clubCollection.insertOne(club);

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @GetMapping("/api/club")
    public ResponseEntity<ArrayList<ClubModel>> getClubList(@RequestParam int number, @RequestParam int skip) {
        MongoCollection<ClubModel> clubCollection = GetCollection.getClubCollection();
        FindIterable<ClubModel> clubIterable = clubCollection.find();
        clubIterable.skip(skip);
        clubIterable.limit(number);

        ArrayList<ClubModel> clubList = new ArrayList<>();
        clubIterable.into(clubList);

        return new ResponseEntity<>(clubList, HttpStatus.OK);
    }

    @DeleteMapping("/api/club")
    public ResponseEntity<DeleteResult> deleteClub(@RequestParam String name) {
        MongoCollection<ClubModel> clubCollection = GetCollection.getClubCollection();
        Bson deleteQuery = eq("name", name);
        DeleteResult result = clubCollection.deleteOne(deleteQuery);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
