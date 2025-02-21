package com.clinicarajem.clinicarajem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClinicaController {

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
    public String appointment() {
        return "appointment/appointment";
    }

}
