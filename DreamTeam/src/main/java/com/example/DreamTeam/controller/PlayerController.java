package com.example.DreamTeam.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/players")
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    TeamRepository teamRepository;

    @PutMapping(value = "/{id}/team/{teamId}")
    public void updatedPlayer(@PathVariable long id, @PathVariable long teamId){
        Player player = playerRepository.getOne(id);
        Team team = teamRepository.getOne(teamId);
        team.addPlayer(player);
        player.addTeam(team);
        playerRepository.save(player);
    }
}
