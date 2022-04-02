import React, { memo, useContext, useState, useEffect } from 'react';
import styles from './_profile_dialog.module.scss';
import { MdClose } from "react-icons/md";
import { ThemeContext } from '../ProfileManagement';
import { newProfile } from '../../ProfileManagement/ProfileService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMinusCircle, FaPlus } from "react-icons/fa";

toast.configure({
    autoClose: 3000,
    draggable: false,
    limit: 3,
    style: {
        fontSize: '1.5rem'
    }
});
const options = [
    { code: "", name: "<Choose Icon Name>" },
    { code: "FaJava", name: "Java" },
    { code: "SiSpringboot", name: "Spring Boot" },
    { code: "FaHtml5", name: "HTML 5" },
    { code: "FaDatabase", name: "Database Access" },
    { code: "FaCss3", name: "CSS" },
    { code: "FaSass", name: "SASS" },
    { code: "FaJs", name: "JavaScript" },
    { code: "FaReact", name: "ReactJs" },
    { code: "FaGitAlt", name: "Git" },
    { code: "FaGithub", name: "Github" },
    { code: "DiMysql", name: "Mysql" },
    { code: "DiMsqlServer", name: "SQL Server" },
    { code: "GiTortoise", name: "Tortoise SVN" },
];
function ProfileDialog() {
    const providerValue = useContext(ThemeContext);
    const [id, setId] = useState(null);
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
    const [introductionUser, setIntroductionUser] = useState('');
    const [titleAboutMe, setTitleAboutMe] = useState('');
    const [task, setTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');
    // Education
    const [listSchool, setListSchool] = useState([{
        schoolName: '',
        course: '',
        major: ''
    }]);
    const [skillList, setSkillList] = useState([{
        name: '',
        technologyList: [{
            name: '',
            iconName: '',
            details: ''
        }]
    }]);
    const [projectList, setProjectList] = useState([{
        name: '',
        participationProcess: '',
        description: ''
    }])
    const [change, setChange] = useState(false);

    useEffect(() => {
        console.log(providerValue.currentProfileEdit);

        if (providerValue.currentProfileEdit) {
            const obj = providerValue.currentProfileEdit;
            if (obj?.id)
                setId(obj.id)
            // Personal Infor
            setFirstName(obj?.personalInformation?.firstName ? obj?.personalInformation?.firstName : '');
            setLastName(obj?.personalInformation?.lastName ? obj?.personalInformation?.lastName : '');
            setJob(obj?.personalInformation?.job ? obj?.personalInformation?.job : '');
            setAddress(obj?.personalInformation?.address ? obj?.personalInformation?.address : '');
            setLinkFacebook(obj?.personalInformation?.linkFacebook ? obj?.personalInformation?.linkFacebook : '');
            setLinkInstagram(obj?.personalInformation?.linkInstagram ? obj?.personalInformation?.linkInstagram : '');
            setLinkTwitter(obj?.personalInformation?.linkTwitter ? obj?.personalInformation?.linkTwitter : '');
            setLinkGithub(obj?.personalInformation?.linkGithub ? obj?.personalInformation?.linkGithub : '');
            setEmail(obj?.personalInformation?.email ? obj?.personalInformation?.email : '');
            setPhone(obj?.personalInformation?.phone ? obj?.personalInformation?.phone : '');
            // Introduce
            setSentenceWelcome(obj?.introduce?.sentenceWelcome ? obj?.introduce?.sentenceWelcome : '');
            setIntroductionUser(obj?.introduce?.introductionUser ? obj?.introduce?.introductionUser : '');
            setTitleAboutMe(obj?.introduce?.titleAboutMe ? obj?.introduce?.titleAboutMe : '');
            setTask(obj?.introduce?.task ? obj?.introduce?.task : '');
            setDescriptionTask(obj?.introduce?.descriptionTask ? obj?.introduce?.descriptionTask : '');
            // 
            if (obj?.educationList)
                setListSchool(obj.educationList);
            if (obj?.skillList)
                setSkillList(obj.skillList);
            if (obj?.projectList)
                setProjectList(obj.projectList);
        }
    }, [])

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
            case "sentenceWelcome":
                setSentenceWelcome(value);
                break;
            case "introductionUser":
                setIntroductionUser(value);
                break;
            case "titleAboutMe":
                setTitleAboutMe(value);
                break;
            case "task":
                setTask(value);
                break;
            case "descriptionTask":
                setDescriptionTask(value);
                break;
            default:
                break;
        }
    }

    const handleChangeSchoolData = (value, source, index) => {
        switch (source) {
            case "schoolName":
                listSchool[index].schoolName = value;
                break;
            case "course":
                listSchool[index].course = value;
                break;
            case "major":
                listSchool[index].major = value;
                break;
            default:
                break;
        }
        setChange(!change);
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
        } else if (address === '') {
            toast.warning("Let's fill address");
            return false;
        } else if (email === '') {
            toast.warning("Let's fill email");
            return false;
        } else if (phone === '') {
            toast.warning("Let's fill phone");
            return false;
        } else if (sentenceWelcome === '') {
            toast.warning("Let's fill sentence welcome");
            return false;
        } else if (introductionUser === '') {
            toast.warning("Let's fill introduction of user");
            return false;
        } else if (titleAboutMe === '') {
            toast.warning("Let's fill title of 'About Me'");
            return false;
        } else if (task === '') {
            toast.warning("Let's fill task");
            return false;
        } else if (descriptionTask === '') {
            toast.warning("Let's fill description task");
            return false;
        }
        return true;
    }

    const handleAddSchool = () => {
        setListSchool([...listSchool, {
            schoolName: '',
            course: '',
            major: ''
        }])
    }

    const handleDeleteSchool = (index) => {
        if (listSchool.length > 1) {
            let newListSchool = listSchool;
            newListSchool.splice(index, 1); //delete 1 element from 'index'
            return setListSchool([...newListSchool]);
        }
        toast.warning("At least a school")
    }

    const handleAddSkill = () => {
        setSkillList([...skillList, {
            name: '',
            technologyList: [{
                name: '',
                iconName: '',
                details: ''
            }]
        }])
    }

    const handleDeleteSkill = (index) => {
        if (skillList.length > 1) {
            skillList.splice(index, 1); //delete 1 element from 'index'
            setChange(!change)
            return;
        }
        toast.warning("At least a skill")
    }

    const handleChangeSkill = (value, source, indexSkill, indexTech) => {
        console.log("===========")
        console.log(value)
        switch (source) {
            case 'skillName':
                skillList[indexSkill].name = value;
                break;
            case 'technologyName':
                skillList[indexSkill].technologyList[indexTech].name = value;
                break;
            case 'iconName':
                if (value) {
                    skillList[indexSkill].technologyList[indexTech].iconName = value;
                }
                break;
            case 'details':
                skillList[indexSkill].technologyList[indexTech].details = value;
                break;
            default: break;
        }
        setChange(!change);
    }

    const handleAddTechnoloy = (index) => {
        skillList[index].technologyList.push({
            name: '',
            iconName: '',
            details: ''
        })
        setChange(!change)
    }

    const handleSubmit = () => {
        const obj = {
            id: id,
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
            },
            introduce: {
                sentenceWelcome: sentenceWelcome,
                introductionUser: introductionUser,
                titleAboutMe: titleAboutMe,
                task: task,
                descriptionTask: descriptionTask,
            },
            educationList: listSchool,
            skillList: skillList,
            projectList: projectList
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

    const handleDeleteTechnology = (indexTech, indexSkill) => {
        if (skillList[indexSkill].technologyList.length > 1) {
            skillList[indexSkill].technologyList.splice(indexTech, 1); //delete 1 element from 'index'
            setChange(!change)
            return;
        }
        toast.warning("At least a technology")
    }

    const handleChangeProject = (value, source, index) => {
        switch (source) {
            case "name":
                projectList[index].name = value;
                break;
            case "participationProcess":
                projectList[index].participationProcess = value;
                break;
            case "description":
                projectList[index].description = value;
                break;
            default:
                break;
        }
        setChange(!change);
    }

    const handleAddProject = () => {
        setProjectList([...projectList, {
            name: '',
            participationProcess: '',
            description: ''
        }])
    }

    const handleDeleteProject = (index) => {
        let newListProject = projectList;
        newListProject.splice(index, 1); //delete 1 element from 'index'
        return setProjectList([...newListProject]);
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
                        {/* Introduction User */}
                        <div className={styles.form}>
                            <input
                                type="text"
                                className={styles.formInput}
                                autoComplete="off"
                                placeholder=" "
                                value={introductionUser ? introductionUser : ''}
                                onChange={(input) => handleChange(input.target.value, "introductionUser")}
                            />
                            <label className={styles.formLabel}>Introduction Of User</label>
                        </div>
                        {/* Title About Me */}
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
                    {/* Education */}
                    <div className={styles.contentBox}>
                        {/* Title Form */}
                        <label className={styles.formLabelBig}>Education</label>
                        {listSchool.map((school, index) => (
                            <div className={styles.item} key={index}>
                                <h1>{index + 1}</h1>
                                {/* School name */}
                                <div className={styles.form}>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        autoComplete="off"
                                        placeholder=" "
                                        value={school?.schoolName ? school?.schoolName : ''}
                                        onChange={(input) => handleChangeSchoolData(input.target.value, "schoolName", index)}
                                    />
                                    <label className={styles.formLabel}>School Name</label>
                                </div>
                                {/* Course */}
                                <div className={styles.form}>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        autoComplete="off"
                                        placeholder=" "
                                        value={school?.course ? school?.course : ''}
                                        onChange={(input) => handleChangeSchoolData(input.target.value, "course", index)}
                                    />
                                    <label className={styles.formLabel}>Course</label>
                                </div>
                                <div className={styles.form}>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        autoComplete="off"
                                        placeholder=" "
                                        value={school?.major ? school?.major : ''}
                                        onChange={(input) => handleChangeSchoolData(input.target.value, "major", index)}
                                    />
                                    <label className={styles.formLabel}>Major</label>
                                </div>
                                {/* Delete from list school */}
                                <div
                                    className={styles.boxDeleteIcon}
                                    title="Delete"
                                    onClick={() => handleDeleteSchool(index)}
                                >
                                    <FaMinusCircle
                                        className={styles.iconTrashCan}
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Add school to list */}
                        <div className={styles.boxAddItem}>
                            <div
                                className={styles.boxItem}
                                onClick={() => handleAddSchool()}
                            >
                                <FaPlus className={styles.iconAddItem} />
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className={styles.contentBox}>
                        {/* Title Form */}
                        <label className={styles.formLabelBig}>Skills</label>
                        {skillList.map((skill, index) => (
                            <div className={styles.contentBox} key={index}>
                                {/* Skill name */}
                                <div
                                    className={styles.form}
                                    style={{
                                        width: "60%",
                                    }}>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        autoComplete="off"
                                        placeholder=" "
                                        value={skill?.name ? skill.name : ''}
                                        onChange={(input) => handleChangeSkill(input.target.value, "skillName", index)}
                                    />
                                    <label className={styles.formLabel}>{index + 1}. Skill Name</label>
                                </div>

                                {/* List icon service */}
                                <div className={styles.listIcon}>
                                    {/* Remove skill */}
                                    <div
                                        className={styles.boxItem}
                                        onClick={() => handleDeleteSkill(index)}
                                        title="Remove skill"
                                    >
                                        <FaMinusCircle
                                            className={styles.iconMinus}
                                        />
                                    </div>
                                </div>

                                {skill?.technologyList.map((technology, indexTech) => (
                                    <div className={styles.item} key={indexTech}>
                                        {/* Technology Name*/}
                                        <div className={styles.form}>
                                            <input
                                                type="text"
                                                className={styles.formInput}
                                                autoComplete="off"
                                                placeholder=" "
                                                value={technology?.name ? technology?.name : ''}
                                                onChange={(input) => handleChangeSkill(input.target.value, "technologyName", index, indexTech)}
                                                required="required"
                                            />
                                            <label className={styles.formLabel}>Technology</label>
                                        </div>

                                        {/* Icon Name */}
                                        <form>
                                            <select
                                                className={styles.selectIcon}
                                                value={technology?.iconName ? technology?.iconName : ''}
                                                onChange={(e) => handleChangeSkill(e.target.value, "iconName", index, indexTech)}
                                            >
                                                {options.map(opt => (
                                                    <option
                                                        key={opt.code}
                                                        value={opt.code}
                                                    >
                                                        {opt?.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </form>

                                        {/* Details */}
                                        <div className={styles.form}>
                                            <input
                                                type="text"
                                                className={styles.formInput}
                                                autoComplete="off"
                                                placeholder=" "
                                                value={technology?.details ? technology?.details : ''}
                                                onChange={(input) => handleChangeSkill(input.target.value, "details", index, indexTech)}
                                            />
                                            <label className={styles.formLabel}>Details</label>
                                        </div>

                                        {/* Delete technology */}
                                        <div
                                            className={styles.boxDeleteIcon}
                                            title="Delete"
                                            onClick={() => handleDeleteTechnology(indexTech, index)}
                                        >
                                            <FaMinusCircle
                                                className={styles.iconTrashCan}
                                            />
                                        </div>
                                    </div>
                                ))}

                                {/* Add technology to list */}
                                <div
                                    className={styles.boxAddItem}
                                    style={{
                                        margin: "2rem 0"
                                    }}
                                >
                                    <div
                                        className={styles.boxItem}
                                        onClick={() => handleAddTechnoloy(index)}
                                        title="Add technology"
                                    >
                                        <FaPlus className={styles.iconAddItem} />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Add skill to list */}
                        <div className={styles.boxAddItem}>
                            <div
                                className={styles.boxItem}
                                onClick={() => handleAddSkill()}
                                title="Add skill"
                            >
                                <FaPlus className={styles.iconAddItem} />
                            </div>
                        </div>
                    </div>

                    {/* Project */}
                    <div className={styles.contentBox}>
                        {/* Title Form */}
                        <label className={styles.formLabelBig}>Project</label>
                        {projectList.map((project, index) => (
                            <div className={styles.item} key={index}>
                                <h1>{index + 1}</h1>
                                {/* Project Name */}
                                <div className={styles.form}>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        autoComplete="off"
                                        placeholder=" "
                                        value={project?.name ? project?.name : ''}
                                        onChange={(input) => handleChangeProject(input.target.value, "name", index)}
                                    />
                                    <label className={styles.formLabel}>Project Name</label>
                                </div>
                                {/* Participation Process */}
                                <div className={styles.form}>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        autoComplete="off"
                                        placeholder=" "
                                        value={project?.participationProcess ? project?.participationProcess : ''}
                                        onChange={(input) => handleChangeProject(input.target.value, "participationProcess", index)}
                                    />
                                    <label className={styles.formLabel}>Participation Process</label>
                                </div>
                                {/* Description */}
                                <div className={styles.form}>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        autoComplete="off"
                                        placeholder=" "
                                        value={project?.description ? project?.description : ''}
                                        onChange={(input) => handleChangeProject(input.target.value, "description", index)}
                                    />
                                    <label className={styles.formLabel}>Description</label>
                                </div>
                                {/* Delete from list project */}
                                <div
                                    className={styles.boxDeleteIcon}
                                    title="Delete"
                                    onClick={() => handleDeleteProject(index)}
                                >
                                    <FaMinusCircle
                                        className={styles.iconTrashCan}
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Add project to list */}
                        <div className={styles.boxAddItem}>
                            <div
                                className={styles.boxItem}
                                onClick={() => handleAddProject()}
                            >
                                <FaPlus className={styles.iconAddItem} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Save */}
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
