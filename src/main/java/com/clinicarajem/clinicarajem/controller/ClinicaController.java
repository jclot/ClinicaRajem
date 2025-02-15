package com.clinicarajem.clinicarajem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClinicaController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/blog")
    public String blog() {
        return "blog/blog";
    }
}
