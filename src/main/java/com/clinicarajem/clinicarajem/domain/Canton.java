package com.clinicarajem.clinicarajem.domain;

import java.util.Map;

public class Canton {
    private String nombre;
    private Map<String, String> distritos;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Map<String, String> getDistritos() {
        return distritos;
    }

    public void setDistritos(Map<String, String> distritos) {
        this.distritos = distritos;
    }
}
