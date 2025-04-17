// package com.clinicarajem.clinicarajem.service;

// import java.time.LocalDateTime;

// import org.springframework.stereotype.Service;

// import com.clinicarajem.clinicarajem.domain.Subscriber;
// import com.clinicarajem.clinicarajem.repository.SubscriberRepository;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class SubscriberService {
//     private final SubscriberRepository subscriberRepository;

//     public Subscriber save(String email) {
//         if (!email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$")) {
//             throw new IllegalArgumentException("El formato del correo es inválido.");
//         }
//         if (subscriberRepository.findByEmail(email).isPresent()) {
//             throw new IllegalArgumentException("Este email ya está suscrito.");
//         }
//         return subscriberRepository.save(
//                 Subscriber.builder()
//                         .email(email)
//                         .subscribedAt(LocalDateTime.now())
//                         .build());
//     }
// }
