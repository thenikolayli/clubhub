package com.example.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClubController {
    @PostMapping("/api/club")
    public ClubModel create_club(@RequestBody ClubModel club) {
        System.out.println(club);

        return club;
    }
}
