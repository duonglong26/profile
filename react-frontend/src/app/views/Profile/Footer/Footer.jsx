import React, { memo, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../../../../Const";
import styles from "./_footer.module.scss";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineBehance,
  AiOutlineCodepen,
} from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaSkype } from "react-icons/fa";
import { ThemeContext } from "../UserProfile";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure({
    autoClose: 3000,
    draggable: false,
    limit: 3,
    style: {
        fontSize: '1.5rem'
    }
});

function Footer() {
  const providerValue = useContext(ThemeContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (providerValue?.profile) {
      setProfile(providerValue.profile);
    }
  })

  const handleLink = (url, type) => {
    if (url === null || url === "") {
        switch (type) {
            case 'facebook':
                toast.error("Facebook link not found");
                break;
            case 'instagram':
                toast.error("Instagram link not found");
                break;
            case 'twitter':
                toast.error("Twitter link not found");
                break;
            case 'github':
                toast.error("Github link not found");
                break;
            case 'behance':
                toast.error("Behance link not found");
                break;
            case 'codepen':
                toast.error("Codepen link not found");
                break;
            case 'messenger':
                toast.error("Messenger link not found");
                break;
            case 'skype':
                toast.error("Skype link not found");
                break;
            default:
                return;
        }
    } else {
        toast.info("Go to the URL: " + url);
    }
}

  return (
    <footer className={styles.footer}>
      <div className={styles.title}>MY PROFILE</div>
      <div className={styles.iconContainer}>
        <a
            href={profile?.personalInformation?.linkFacebook}
            onClick={() => handleLink(profile?.personalInformation?.linkFacebook, 'facebook')}
        >
            <AiFillFacebook className={styles.icon} />
        </a>
        
        <a
            href={profile?.personalInformation?.linkTwitter}
            onClick={() => handleLink(profile?.personalInformation?.linkTwitter, 'twitter')}
        >
            <AiFillTwitterCircle className={styles.icon} />
        </a>

        <a
            href={profile?.personalInformation?.linkInstagram}
            onClick={() => handleLink(profile?.personalInformation?.linkInstagram, 'instagram')}
        >
           <AiOutlineInstagram className={styles.icon} />
        </a>
        
        <a
            href={profile?.personalInformation?.linkGithub}
            onClick={() => handleLink(profile?.personalInformation?.linkGithub, 'github')}
        >
           <GoMarkGithub className={styles.icon} />
        </a>
        
        <a
            onClick={() => handleLink(null, 'behance')}
        >
           <AiOutlineBehance className={styles.icon} />
        </a>
        
        <a
            onClick={() => handleLink(null, 'codepen')}
        >
           <AiOutlineCodepen className={styles.icon} />
        </a>
        
        <a
            onClick={() => handleLink(null, 'messenger')}
        >
           <BsMessenger className={styles.icon} />
        </a>

        <a
            onClick={() => handleLink(null, 'skype')}
        >
           <FaSkype className={styles.icon} />
        </a>
      </div>
      <div className={styles.subtitle}>Copyright 2022</div>
    </footer>
  );
}
export default Footer;
