package com.farming.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "crop_data")
public class CropRecommendation {
    @Id
    private String id;
    private String soilType;
    private double pH;
    private double moisture;
    private String recommendedCrop;

    public CropRecommendation(String soilType, double pH, double moisture, String recommendedCrop) {
        this.soilType = soilType;
        this.pH = pH;
        this.moisture = moisture;
        this.recommendedCrop = recommendedCrop;
    }
    public String getSoilType() {
        return soilType;
    }

    public double getpH() {
        return pH;
    }

    public double getMoisture() {
        return moisture;
    }
    public String getRecommendedCrop() {
        return recommendedCrop;
    }
}

