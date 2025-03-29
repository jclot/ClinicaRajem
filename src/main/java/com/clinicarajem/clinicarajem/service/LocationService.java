package com.clinicarajem.clinicarajem.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.core.io.ClassPathResource;

import com.clinicarajem.clinicarajem.domain.Provincia;
import com.clinicarajem.clinicarajem.domain.Canton;
import org.springframework.beans.factory.InitializingBean;
import java.io.IOException;
import java.util.Map;
import java.util.LinkedHashMap;

@Service
public class LocationService implements InitializingBean {

    private Map<String, Provincia> provincias = new LinkedHashMap<>();

    @Override
    public void afterPropertiesSet() throws Exception {
        try {
            ClassPathResource resource = new ClassPathResource(
                    "static/json/provincias_cantones_distritos_costa_rica.json");
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(resource.getInputStream());

            JsonNode provinciasNode = root.get("provincias");
            provinciasNode.fields().forEachRemaining(entry -> {
                String provinciaId = entry.getKey();
                JsonNode provinciaNode = entry.getValue();

                Provincia provincia = new Provincia();
                provincia.setNombre(provinciaNode.get("nombre").asText());

                Map<String, Canton> cantones = new LinkedHashMap<>();
                JsonNode cantonesNode = provinciaNode.get("cantones");
                cantonesNode.fields().forEachRemaining(cantonEntry -> {
                    String cantonId = cantonEntry.getKey();
                    JsonNode cantonNode = cantonEntry.getValue();

                    Canton canton = new Canton();
                    canton.setNombre(cantonNode.get("nombre").asText());

                    Map<String, String> distritos = new LinkedHashMap<>();
                    JsonNode distritosNode = cantonNode.get("distritos");
                    distritosNode.fields().forEachRemaining(distritoEntry -> {
                        String distritoId = distritoEntry.getKey();
                        String distritoNombre = distritoEntry.getValue().asText();
                        distritos.put(distritoId, distritoNombre);
                    });

                    canton.setDistritos(distritos);
                    cantones.put(cantonId, canton);
                });

                provincia.setCantones(cantones);
                provincias.put(provinciaId, provincia);
            });

        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Total provincias cargadas: " + provincias.size());
    }

    public Map<String, Provincia> getProvincias() {
        return provincias;
    }
}
