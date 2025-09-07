package com.farming.repository;

import com.farming.model.CropRecommendation;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CropRepository extends MongoRepository<CropRecommendation, String> {
}

