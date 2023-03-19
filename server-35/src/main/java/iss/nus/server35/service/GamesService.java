package iss.nus.server35.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import iss.nus.server35.repository.GamesRepository;

@Service
public class GamesService {

    @Autowired
    GamesRepository gamesRepo;
    
    public List<String> getGames(Integer limit, Integer offset) {
        return gamesRepo.getGames(limit, offset);
    }

}
