import React, { memo, useEffect, useState, createContext } from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import styles from './_profile_management.module.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaTrashAlt } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { ROOT_PATH } from "../../../../Const";
import { FaUser, FaPlus } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllProfile, deleteProfileById } from './ProfileService';
import ProfileDialog from './FormInputProfile/ProfileDialog';
import DialogAcceptDelete from '../../Components/DialogAccept/DialogAcceptDelete'

toast.configure({
    autoClose: 3000,
    draggable: false,
    limit: 3,
    style: {
        fontSize: '1.5rem'
    }
});

export const ThemeContext = createContext();

function ProfileManagement() {
    const [listProfile, setListProfile] = useState([]);
    const [isOpenFormInputProfile, setIsOpenFormInputProfile] = useState(false);
    const [isOpenFormAcceptDelete, setIsOpenFormAcceptDelete] = useState(false);
    const [currentIdDelete, setCurrentIdDelete] = useState("");
    useEffect(() => {
        handleLoadPageData();
    }, [])

    const handleLoadPageData = () => {
        if (localStorage.getItem('access_token')) {
            getAllProfile().then((res) => {
                if (res?.data) {
                    setListProfile(res.data);
                    // toast.success("Loaded data");
                    return;
                }
                throw Error(res.status);
            }).catch(function (error) {
                toast.warning("Server error");
            });
        }
    }

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

    const handleOpenFormInput = () => {
        setIsOpenFormInputProfile(!isOpenFormInputProfile);
    }

    const handleOpenFormDelete = (value) => {
        setIsOpenFormAcceptDelete(!isOpenFormAcceptDelete);
        setCurrentIdDelete(value);
    }

    const handleDeteleItem = (id) => {
        if (localStorage.getItem('access_token')) {
            deleteProfileById(id).then((res) => {
                if (res?.data) {
                    toast.success("Delete success");
                    handleLoadPageData();
                    return;
                }
                throw Error(res.status);
            }).catch(function (error) {
                toast.warning("Server error");
            });
        }
    }

    const providerValue = {
        setIsOpenFormInputProfile,
        setIsOpenFormAcceptDelete,
        handleDeteleItem,
        currentIdDelete,
        setCurrentIdDelete,
        handleLoadPageData
    };

    return (
        <>
            <ThemeContext.Provider value={providerValue}>
                {/* Dialog input profile */}
                {isOpenFormInputProfile &&
                    <ProfileDialog />
                }
                {/* Dialog accept delete profile */}
                {isOpenFormAcceptDelete &&
                    <DialogAcceptDelete />
                }

                <div className={styles.ourTeam}>
                    <div className={styles.title}>
                        Our Team
                    </div>
                    {/* List profile */}
                    <div className={styles.listMember}>
                        {/* profile information */}
                        {listProfile.map((member) => (
                            <div key={member.id} className={styles.memberCard}>
                                {/* icon delete */}
                                <div
                                    className={styles.boxIconTrash}
                                    onClick={() => handleOpenFormDelete(member.id)}
                                >
                                    <FaTrashAlt
                                        className={styles.icon}
                                    />
                                </div>
                                <div className={styles.cardImg}>
                                    <Link
                                        to={ROOT_PATH + "/user"}
                                        className={styles.name}
                                    >
                                        <FaUser
                                            className={clsx(styles.image, styles.iconUser)}
                                        />
                                    </Link>
                                </div>
                                <div className={styles.cardContent}>
                                    <Link
                                        to={ROOT_PATH + "/user"}
                                        className={styles.name}
                                    >
                                        {member?.personalInformation?.firstName + " " + member?.personalInformation?.lastName}
                                    </Link>
                                    <p className={styles.job}>
                                        {member?.personalInformation?.job}
                                    </p>

                                    {/* Danh sách link liên kết mạng xã hội */}
                                    <p className={styles.listIconsSocial}>
                                        <a
                                            href={member?.linkFb}
                                            onClick={() => handleLink(member?.personalInformation?.linkFacebook, 'facebook')}
                                        >
                                            <FaFacebook className={styles.icon} />
                                        </a>
                                        <a
                                            href={member?.linkTwitter}
                                            onClick={() => handleLink(member?.personalInformation?.linkTwitter, 'twitter')}
                                        >
                                            <FaTwitter className={styles.icon} />
                                        </a>
                                        <a
                                            href={member?.linkInstagram}
                                            onClick={() => handleLink(member?.personalInformation?.linkInstagram, 'instagram')}
                                        >
                                            <FaInstagram className={styles.icon} />
                                        </a>
                                        <a
                                            href={member?.linkGithub}
                                            onClick={() => handleLink(member?.personalInformation?.linkGithub, 'github')}
                                        >
                                            <GoMarkGithub className={styles.icon} />
                                        </a>
                                    </p>

                                </div>
                            </div>
                        ))}
                        <div className={clsx(styles.addMember)}>
                            <div
                                onClick={() => handleOpenFormInput()}
                                className={styles.box}
                            >
                                <FaPlus />
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeContext.Provider>
        </>
    );
}
export default memo(ProfileManagement);