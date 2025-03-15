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

    @GetMapping("/department")
    public String departments() {
        return "department/departments";
    }

    @GetMapping("/services/service-detail")
    public String serviceDetail() {
        return "services/service-detail";
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

    @GetMapping("/timetable")
    public String timetable() {
        return "timetable/timetable";
    }

    @GetMapping("/workinghours")
    public String workinghours() {
        return "workinghours/workinghours";
    }

    @GetMapping("/error404")
    public String error404() {
        return "error404";
    }

}
