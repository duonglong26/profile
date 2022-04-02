import React, { memo } from 'react'
import styles from './_contact.module.scss';
import * as Fa from "react-icons/fa";

function Contact() {
  return (
    <div className={styles.contact} id='contact'>
      <p className={styles.title}>Contact</p>
      <div className={styles.block}>
        {/* Thông tin liên lạc */}
        <div className={styles.formInformation}>
          <h2 >Get In Touch</h2>
          <p className={styles.slogan}>Let's build something great together</p>
          {/* Địa chỉ */}
          <div className={styles.content}>
            <div className={styles.box}>
              <Fa.FaWarehouse className={styles.icon} />
            </div>
            <p>
              Vinh Thinh-Dai Ang-Thanh-Tri-Ha Noi
            </p>
          </div>
          {/* Email */}
          <div className={styles.content}>
            <div className={styles.box}>
              <Fa.FaMailBulk className={styles.icon} />
            </div>
            <p>
              nduonglong02@gmail.com
            </p>
          </div>
          {/* Phone */}
          <div className={styles.content}>
            <div className={styles.box}>
              <Fa.FaPhoneAlt className={styles.icon} />
            </div>
            <p>
              0962524547
            </p>
          </div>
        </div>
        {/* Form gửi phản hồi */}
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
            <button className={styles.btn}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Contact)