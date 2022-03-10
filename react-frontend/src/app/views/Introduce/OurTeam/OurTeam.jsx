import React, { memo } from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import styles from './_our-team.module.scss';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { ROOT_PATH } from "../../../../Const";
import { FaUser } from "react-icons/fa";
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
const listMembers = [
    {
        id: 1,
        name: "Dương Long",
        img: '../../../../../public/assets/images/nduonglong02.jpg',
        job: "Java Backend Developer",
        linkFb: 'https://www.facebook.com/duonglong26/',
        linkTwitter: null,
        linkInstagram: 'https://www.instagram.com/longnd02/',
        linkGithub: 'https://github.com/duonglong26'
    },
    {
        id: 2,
        name: "Tuấn Hiển",
        img: '#',
        job: "Grap",
        linkFb: null,
        linkTwitter: null,
        linkInstagram: null,
        linkGithub: null
    },
    {
        id: 3,
        name: "Đình Thắng",
        img: null,
        job: "Information Technology",
        linkFb: null,
        linkTwitter: null,
        linkInstagram: null,
        linkGithub: null
    }
]

function OurTeam() {

    const handleLink = (url, type) => {
        console.log(url);
        console.log(type);
        if (url === null) {
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
                default:
                    return;
            }
        }
    }
    return (
        <>
            <div className={styles.ourTeam}>
                <div className={styles.title}>
                    Our Team
                </div>
                {/* Danh sách thành viên */}
                <div className={styles.listMember}>
                    {/* Thông tin thành viên */}
                    {listMembers.map((member) => (
                        <div key={member.id} className={styles.memberCard}>
                            <div className={styles.cardImg}>
                                {/* {member?.img &&
                                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                                    <img
                                        class={styles.image}
                                        src={member.img}
                                        alt={`Photo of ${member?.name}`}
                                    />
                                } */}
                                <Link
                                    to={ROOT_PATH + "/user-profile"}
                                    className={styles.name}
                                >
                                    <FaUser
                                        className={clsx(styles.image, styles.iconUser)}
                                    />
                                </Link>
                            </div>
                            <div className={styles.cardContent}>
                                <Link
                                    to={ROOT_PATH + "/user-profile"}
                                    className={styles.name}
                                >
                                    {member?.name}
                                </Link>
                                <p className={styles.job}>
                                    {member?.job}
                                </p>

                                {/* Danh sách link liên kết mạng xã hội */}
                                <p className={styles.listIconsSocial}>
                                    <a
                                        href={member?.linkFb}
                                        onClick={() => handleLink(member?.linkFb, 'facebook')}
                                    >
                                        <FaFacebook className={styles.icon} />
                                    </a>
                                    <a
                                        href={member?.linkTwitter}
                                        onClick={() => handleLink(member?.linkTwitter, 'twitter')}
                                    >
                                        <FaTwitter className={styles.icon} />
                                    </a>
                                    <a
                                        href={member?.linkInstagram}
                                        onClick={() => handleLink(member?.linkInstagram, 'instagram')}
                                    >
                                        <FaInstagram className={styles.icon} />
                                    </a>
                                    <a
                                        href={member?.linkGithub}
                                        onClick={() => handleLink(member?.linkGithub, 'github')}
                                    >
                                        <GoMarkGithub className={styles.icon} />
                                    </a>
                                </p>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}
export default memo(OurTeam);