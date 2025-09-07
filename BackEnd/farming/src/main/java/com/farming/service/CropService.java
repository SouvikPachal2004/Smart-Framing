package com.farming.service;

import com.farming.model.CropRecommendation;
import com.farming.repository.CropRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CropService {
    @Autowired
    private CropRepository cropRepository;

    public CropRecommendation recommendCrop(String soilType, double pH, double moisture) {
        if (pH > 6.5 && moisture > 50) {
            return new CropRecommendation(soilType, pH, moisture, "Rice");
        } else {
            return new CropRecommendation(soilType, pH, moisture, "Wheat");
        }
    }
}

