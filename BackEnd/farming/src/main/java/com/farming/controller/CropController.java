package com.farming.controller;

import com.farming.model.CropRecommendation;
import com.farming.service.CropService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/crops")
@CrossOrigin(origins = "*")
public class CropController{
    @Autowired
    private CropService cropService;

    @PostMapping("/recommend")
    public CropRecommendation getCropRecommendation(@RequestBody CropRecommendation cropData) {
        return cropService.recommendCrop(cropData.getSoilType(), cropData.getpH(), cropData.getMoisture());
    }
}

