package com.clinicarajem.clinicarajem.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

import org.springframework.stereotype.Service;

@Service
public class FechaService {
    public String monthAbr() {
        LocalDate date = LocalDate.now();
        DateTimeFormatter month = DateTimeFormatter.ofPattern("MMM", new Locale("es", "ES"));
        DateTimeFormatter year = DateTimeFormatter.ofPattern("yyyy", new Locale("es", "ES"));

        return date.format(month) + " " + date.format(year);
    }
}
