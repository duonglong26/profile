package com.nduonglong02.mycv.domain;

import com.globits.core.domain.BaseObject;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_role")
public class UserRole extends BaseObject {
    @ManyToOne
    @JoinColumn(name = "role")
    private Role role;

    @ManyToOne
    @JoinColumn(name = "user")
    private User user;

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
