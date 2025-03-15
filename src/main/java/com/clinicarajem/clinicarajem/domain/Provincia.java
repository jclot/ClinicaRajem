package com.clinicarajem.clinicarajem.domain;

import java.util.Map;

public class Provincia {
    private String nombre;
    private Map<String, Canton> cantones;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Map<String, Canton> getCantones() {
        return cantones;
    }

    public void setCantones(Map<String, Canton> cantones) {
        this.cantones = cantones;
    }
}
