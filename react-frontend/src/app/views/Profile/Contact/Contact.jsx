import React, { memo, useState, useEffect, useContext } from 'react'
import styles from './_contact.module.scss';
import * as Fa from "react-icons/fa";
import { ThemeContext } from '../UserProfile';
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
function Contact() {
  const providerValue = useContext(ThemeContext);
  const [profile, setProfile] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (providerValue?.profile) {
      setProfile(providerValue.profile);
    }
  })

  const handleSubmit = () => {
    toast.info("We will develop this service in future")
  }

  return (
    <div className={styles.contact} id='contact'>
      <p className={styles.title}>Contact</p>
      <div className={styles.block}>
        {/* Information to contact */}
        <div className={styles.formInformation}>
          <h2 >Get In Touch</h2>
          <p className={styles.slogan}>Let's build something great together</p>
          {/* Address */}
          <div className={styles.content}>
            <div className={styles.box}>
              <Fa.FaWarehouse className={styles.icon} />
            </div>
            <p>
              {profile?.personalInformation?.address}
            </p>
          </div>
          {/* Email */}
          <div className={styles.content}>
            <div className={styles.box}>
              <Fa.FaMailBulk className={styles.icon} />
            </div>
            <p>
              {profile?.personalInformation?.email}
            </p>
          </div>
          {/* Phone */}
          <div className={styles.content}>
            <div className={styles.box}>
              <Fa.FaPhoneAlt className={styles.icon} />
            </div>
            <p>
              {profile?.personalInformation?.phone}
            </p>
          </div>
        </div>
        {/* Form send feedback */}
        <div className={styles.formFeedBack}>
          <h2 >Your Feedback</h2>
          <input
            type="text"
            placeholder='Name'
          />
          <input
            type="text"
            placeholder='Email'
          />
          <input
            type="text"
            placeholder='Phone number'
          />
          <textarea
            type="text"
            placeholder='Message'
          />

          <div className={styles.boxSend}>
            <button
              className={styles.btn}
              onClick={() => handleSubmit()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Contact)