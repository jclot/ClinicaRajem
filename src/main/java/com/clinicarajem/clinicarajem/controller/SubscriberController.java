// package com.clinicarajem.clinicarajem.controller;

// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.servlet.mvc.support.RedirectAttributes;

// import com.clinicarajem.clinicarajem.service.SubscriberService;

// import lombok.RequiredArgsConstructor;

// @Controller
// @RequiredArgsConstructor
// public class SubscriberController {
//     private final SubscriberService subscriberService;

//     @PostMapping("/subscribe")
//     public String subscribe(@RequestParam("email") String email, RedirectAttributes redirectAttributes) {
//         try {
//             subscriberService.save(email);
//             redirectAttributes.addFlashAttribute("message", "¡Suscripción exitosa!");
//         } catch (Exception e) {
//             redirectAttributes.addFlashAttribute("error", e.getMessage());
//         }
//         return "redirect:/";
//     }
// }
