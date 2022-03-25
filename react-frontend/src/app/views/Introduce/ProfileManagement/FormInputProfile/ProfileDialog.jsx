import React, { memo, useContext, useState, useEffect } from 'react';
import styles from './_profile_dialog.module.scss';
import { MdClose } from "react-icons/md";
import { ThemeContext } from '../ProfileManagement';
import { newProfile } from '../../ProfileManagement/ProfileService';
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
function ProfileDialog() {
    const providerValue = useContext(ThemeContext);
    // PersonalInformation
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [address, setAddress] = useState('')
    const [linkFacebook, setLinkFacebook] = useState('');
    const [linkInstagram, setLinkInstagram] = useState('');
    const [linkTwitter, setLinkTwitter] = useState('');
    const [linkGithub, setLinkGithub] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // Inrtroduce-AboutMe
    const [sentenceWelcome, setSentenceWelcome] = useState('');
    const [introductionUser, setintroductionUser] = useState('');
    const [titleAboutMe, setTitleAboutMe] = useState('');
    const [task, setTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');


    const handleClose = () => {
        providerValue.setIsOpenFormInputProfile(false)
    }

    const handleChange = (value, source) => {
        switch (source) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "job":
                setJob(value);
                break;
            case "dateOfBirth":
                setDateOfBirth(value);
                break;
            case "address":
                setAddress(value);
                break;
            case "linkFacebook":
                setLinkFacebook(value);
                break;
            case "linkInstagram":
                setLinkInstagram(value);
                break;
            case "linkTwitter":
                setLinkTwitter(value);
                break;
            case "linkGithub":
                setLinkGithub(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default:
                break;
        }
    }

    const validateProfile = () => {
        console.log("Validating..");
        if (firstName === '') {
            toast.warning("Let's fill first name");
            return false;
        } else if (lastName === '') {
            toast.warning("Let's fill last name");
            return false;
        } else if (job === '') {
            toast.warning("Let's fill job");
            return false;
        } else if (dateOfBirth === null) {
            toast.warning("Let's fill date of birth");
            return false;
        } else if (address === '') {
            toast.warning("Let's fill address");
            return false;
        } else if (email === '') {
            toast.warning("Let's fill email");
            return false;
        } else if (phone === '') {
            toast.warning("Let's fill phone");
            return false;
        }
        return true;
    }

    useEffect(() => {
    }, [])

    const handleSubmit = () => {
        const obj = {
            personalInformation: {
                firstName: firstName,
                lastName: lastName,
                job: job,
                dateOfBirth: dateOfBirth,
                address: address,
                linkFacebook: linkFacebook,
                linkInstagram: linkInstagram,
                linkTwitter: linkTwitter,
                linkGithub: linkGithub,
                email: email,
                phone: phone,
            }
        }

        if (localStorage.getItem('access_token') && validateProfile()) {
            newProfile(obj).then((res) => {
                if (res?.data) {
                    toast.success("Saved");
                    handleClose();
                    providerValue.handleLoadPageData();
                    return;
                }
                throw Error(res.status);
            }).catch(function (error) {
                toast.warning("Server error");
            });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.dialog}>
                {/* icon delete */}
                <div
                    className={styles.box}
                    onClick={() => handleClose()}
                >
                    <MdClose
                        className={styles.icon}
                    />
                </div>
                {/* Title */}
                <h2 className={styles.title}>
                    NEW PROFILE
                </h2>
                {/* Content */}
                <div className={styles.content}>
                    {/* Personal Information */}
                    <div className={styles.contentBox}>
                        {/* Title Form */}
                        <label className={styles.formLabelBig}>Personal Information</label>
                        {/* First Name */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={firstName ? firstName : ''}
                                onChange={(input) => handleChange(input.target.value, "firstName")}
                            />
                            <label className={styles.formLabel}>First Name</label>
                        </div>
                        {/* Last Name */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={lastName ? lastName : ''}
                                onChange={(input) => handleChange(input.target.value, "lastName")}
                            />
                            <label
                                className={styles.formLabel}
                            >
                                Last Name
                            </label>
                        </div>
                        {/* Job */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={job ?? job}
                                onChange={(input) => handleChange(input.target.value, "job")}
                            />
                            <label
                                className={styles.formLabel}
                            >
                                Job
                            </label>
                        </div>
                        {/* Date of birth */}
                        <div className={styles.form}>
                            <input
                                type="date"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={dateOfBirth ? dateOfBirth : ''}
                                onChange={(input) => handleChange(input.target.value, "dateOfBirth")}
                            />
                            <label
                                className={styles.formLabel}
                            >
                                Date Of Birth
                            </label>
                        </div>
                        {/* Address */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={address ? address : ''}
                                onChange={(input) => handleChange(input.target.value, "address")}
                            />
                            <label
                                className={styles.formLabel}
                            >
                                Address
                            </label>
                        </div>
                        {/* LinkFacebook */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={linkFacebook ? linkFacebook : ''}
                                onChange={(input) => handleChange(input.target.value, "linkFacebook")}
                            />
                            <label
                                className={styles.formLabel}
                            >
                                Link Facebook
                            </label>
                        </div>
                        {/* LinkInstagram */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={linkInstagram ? linkInstagram : ''}
                                onChange={(input) => handleChange(input.target.value, "linkInstagram")}
                            />
                            <label
                                className={styles.formLabel}
                            >
                                Link Instagram
                            </label>
                        </div>
                        {/* LinkTwitter */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={linkTwitter ? linkTwitter : ''}
                                onChange={(input) => handleChange(input.target.value, "linkTwitter")}
                            />
                            <label
                                className={styles.formLabel}
                            >
                                Link Twitter
                            </label>
                        </div>
                        {/* LinkGithub */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={linkGithub ? linkGithub : ''}
                                onChange={(input) => handleChange(input.target.value, "linkGithub")}
                            />
                            <label
                                className={styles.formLabel}
                            >
                                Link Github
                            </label>
                        </div>
                        {/* Email */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={email ? email : ''}
                                onChange={(input) => handleChange(input.target.value, "email")}
                            />
                            <label
                                className={styles.formLabel}
                            >
                                Email
                            </label>
                        </div>
                        {/* Phone */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={phone ? phone : ''}
                                onChange={(input) => handleChange(input.target.value, "phone")}
                            />
                            <label
                                className={styles.formLabel}
                            >
                                Phone
                            </label>
                        </div>
                    </div>

                    <br />
                    {/* Introduce */}
                    <div className={styles.contentBox}>
                        {/* Title Form */}
                        <label className={styles.formLabelBig}>Introduce</label>
                        {/* Sentence Welcome */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={sentenceWelcome ? sentenceWelcome : ''}
                                onChange={(input) => handleChange(input.target.value, "sentenceWelcome")}
                            />
                            <label className={styles.formLabel}>Sentence Welcome</label>
                        </div>
                        {/* Sentence Welcome */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={titleAboutMe ? titleAboutMe : ''}
                                onChange={(input) => handleChange(input.target.value, "titleAboutMe")}
                            />
                            <label className={styles.formLabel}>Title About Me</label>
                        </div>
                        {/* Task */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={task ? task : ''}
                                onChange={(input) => handleChange(input.target.value, "task")}
                            />
                            <label className={styles.formLabel}>Task</label>
                        </div>
                        {/* Description Task */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={descriptionTask ? descriptionTask : ''}
                                onChange={(input) => handleChange(input.target.value, "descriptionTask")}
                            />
                            <label className={styles.formLabel}>Description Task</label>
                        </div>
                    </div>

                    <br />
                    <div className={styles.contentBox}>
                        {/* Title Form */}
                        <label className={styles.formLabelBig}>Introduce</label>
                        {/* Sentence Welcome */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={sentenceWelcome ? sentenceWelcome : ''}
                                onChange={(input) => handleChange(input.target.value, "sentenceWelcome")}
                            />
                            <label className={styles.formLabel}>Sentence Welcome</label>
                        </div>
                        {/* Sentence Welcome */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={titleAboutMe ? titleAboutMe : ''}
                                onChange={(input) => handleChange(input.target.value, "titleAboutMe")}
                            />
                            <label className={styles.formLabel}>Title About Me</label>
                        </div>
                        {/* Task */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={task ? task : ''}
                                onChange={(input) => handleChange(input.target.value, "task")}
                            />
                            <label className={styles.formLabel}>Task</label>
                        </div>
                        {/* Description Task */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={descriptionTask ? descriptionTask : ''}
                                onChange={(input) => handleChange(input.target.value, "descriptionTask")}
                            />
                            <label className={styles.formLabel}>Description Task</label>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <button
                        type="button"
                        className={styles.btn}
                        onClick={() => handleSubmit()}
                    >
                        SAVE
                    </button>
                </div>
            </div>
        </div>
    )
}
export default memo(ProfileDialog);
