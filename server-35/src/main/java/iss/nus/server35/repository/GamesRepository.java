package iss.nus.server35.repository;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class GamesRepository {

    @Autowired
    MongoTemplate mongoTemplate;

    public List<String> getGames(Integer limit, Integer offset) {

        Query query = Query.query(new Criteria())
                            .limit(limit)
                            .skip(offset);

        List<Document> docs = mongoTemplate.find(query, Document.class, "games");

        return docs.stream()
                .map(x -> x.getString("name"))
                .toList();
    }
    
}
