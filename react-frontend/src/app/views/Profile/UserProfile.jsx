import React, { memo, useEffect, useState, createContext } from "react";
import styles from "./_user-profile.module.scss";
import Header from './Header/Header';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import { getProfileById } from './UserProfileService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillCaretUp } from "react-icons/ai";
import Footer from "./Footer/Footer";

toast.configure({
    autoClose: 3000,
    draggable: false,
    limit: 3,
    style: {
        fontSize: '1.5rem'
    }
});

export const ThemeContext = createContext();

function UserProfile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        let idProfile = document.location.href.split('=')[1];
        console.log("Current profile: " + idProfile);

        getProfileById(idProfile).then((res) => {
            if (res?.data) {
                setProfile(res?.data);
                return;
            }
            throw Error(res.status);
        }).catch(function (error) {
            toast.warning("Server error");
        });
    }, [])

    const providerValue = {
        profile
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    

    return (
        <>
            <ThemeContext.Provider value={providerValue}>
                <Header />
                <div className={styles.container}>
                    <Home />
                    <AboutMe />
                    <Education />
                    <Skills />
                    <Experience />
                    <Contact />
                    <Footer />
                </div>
            </ThemeContext.Provider>
            <div
                className={styles.backTotop}
                title="Back to top"
                onClick={() => scrollToTop()}
            >
                <AiFillCaretUp />
            </div>
        
        </>
    );
}

export default memo(UserProfile)