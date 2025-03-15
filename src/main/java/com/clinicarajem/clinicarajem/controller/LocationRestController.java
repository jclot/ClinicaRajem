package com.clinicarajem.clinicarajem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.clinicarajem.clinicarajem.domain.Canton;
import com.clinicarajem.clinicarajem.domain.Provincia;
import com.clinicarajem.clinicarajem.service.LocationService;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class LocationRestController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/api/cantones/{provinciaId}")
    public Map<String, Canton> getCantonesByProvincia(@PathVariable String provinciaId) {
        Provincia provincia = locationService.getProvincias().get(provinciaId);
        if (provincia != null) {
            return provincia.getCantones();
        }
        return new LinkedHashMap<>();
    }

    @GetMapping("/api/distritos/{provinciaId}/{cantonId}")
    public Map<String, String> getDistritosByCanton(@PathVariable String provinciaId, @PathVariable String cantonId) {
        Provincia provincia = locationService.getProvincias().get(provinciaId);
        if (provincia != null) {
            Canton canton = provincia.getCantones().get(cantonId);
            if (canton != null) {
                return canton.getDistritos();
            }
        }
        return new LinkedHashMap<>();
    }
}
