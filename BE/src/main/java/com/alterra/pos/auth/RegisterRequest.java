package com.alterra.pos.auth;

import com.alterra.pos.entity.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String name;
    private String position;
    private String phone;
    private String username;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
}
