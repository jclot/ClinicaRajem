package com.clinicarajem.clinicarajem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class ClinicarajemApplication {

	public static void main(String[] args) {

		if (System.getenv("SPRING_PROFILES_ACTIVE") == null) {
            Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
            dotenv.entries().forEach(entry -> 
                System.setProperty(entry.getKey(), entry.getValue())
            );
        }
		SpringApplication.run(ClinicarajemApplication.class, args);
	}

}
