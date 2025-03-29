package com.clinicarajem.clinicarajem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.clinicarajem.clinicarajem.service.LocationService;

@Controller
public class ClinicaController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/services")
    public String service() {
        return "services/service";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact/contact-us";
    }

    @GetMapping("/appointment")
    public String appointmentForm(Model model) {
        model.addAttribute("provincias", locationService.getProvincias());
        return "appointment/appointment";
    }

    @GetMapping("/workinghours")
    public String workinghours() {
        return "workinghours/workinghours";
    }

    @GetMapping("/error404")
    public String error404() {
        return "error404";
    }

    @GetMapping("/gallery")
    public String gallery() {
        return "gallery/gallery";
    }

    @GetMapping("/team-single")
    public String teamSingle() {
        return "team/team-single";
    }

    @GetMapping("/faqs")
    public String faqs() {
        return "legal/faqs";
    }

}
