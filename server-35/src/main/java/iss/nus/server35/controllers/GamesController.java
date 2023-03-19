package iss.nus.server35.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import iss.nus.server35.service.GamesService;

@Controller
@ResponseBody
@RequestMapping(path="/api", produces=MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins="*")
public class GamesController {

    @Autowired
    GamesService gamesService;
    
    @GetMapping("/games")
    @CrossOrigin(origins="*")
    public ResponseEntity<List<String>> getGames(@RequestParam Integer limit, 
                                            @RequestParam Integer offset) {
        
        List<String> names = gamesService.getGames(limit, offset);
        
        return ResponseEntity.ok().body(names);
        
    }

}
