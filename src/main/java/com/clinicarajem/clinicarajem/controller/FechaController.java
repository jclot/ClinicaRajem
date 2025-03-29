package com.clinicarajem.clinicarajem.controller;

import com.clinicarajem.clinicarajem.service.FechaService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FechaController {
    private final FechaService fechaService;

    public FechaController(FechaService fechaService) {
        this.fechaService = fechaService;
    }

    @GetMapping("/timetable")
    public String timetable(Model model) {

        String abrevMonth = fechaService.monthAbr();
        model.addAttribute("mesAbreviado", abrevMonth);

        return "timetable/timetable";
    }

}
