import React, { useState, useEffect, useRef } from "react";
import { MultiSelect } from "@mantine/core";
import Loader from "../../shared/ui/Loader";

import Calendar from "react-calendar";
import "../../shared/components/Calendar/calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowUpFromBracket,
  faCheck,
  faCalenda,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaApple,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaUpload,
  FaWhatsapp,
} from "react-icons/fa";
import { Tab, Tabs, TabPanel } from "react-tabs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Profile_Picture from "../../assets/images/c041f60c443c14f5849fe6d2a106a7ff.png";
import Cry_Smyle from "../../style/icons/cry_smyle.jpg";

import imageCompression from "browser-image-compression";
import {
  ProfileEditing,
  LittleContainer,
  Header,
  EditingButtons,
  Section,
  EditingItem,
  ProfilePicture,
  EditingInputs,
  GenderButtons,
  MainInputs,
  PasswordSettings,
  PasswordSettingsInputs,
  Password,
  SosialMediaButtons,
  PictureUpload,
  PictureUploadComponents,
  PictureDropDown,
  StatusPedding,
  Compleated,
  SosialMediaSelection,
  SaveButton,
} from "./MyProfileEdit.styles";
import CustomBreadcrumb from "../../shared/components/breadcrumb";
import { myaxios, myaxiosprivate, updateToken } from "../../api/myaxios";
import { useForm } from "react-hook-form";
import { logout, useAuthSelector } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OtpModal from "../../shared/LoginSignUpSystem/ConnectionSystem/OtpModal";
import { Button1 } from "../../shared/LogIn-SingUp/Autho.style";
import { BiX } from "react-icons/bi";
import { Autocomplete, TextField } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { AiOutlineEye } from "react-icons/ai";
import { CgTrash } from "react-icons/cg";

// const SetProfileEditButtonsEvent = () => {
//   const edit_buttons = document.querySelectorAll(".editing-buttons");

//   for (const iterator of edit_buttons) {
//     iterator.addEventListener("click", (e) => {
//       OnSetProfileEditPathClick(e.currentTarget);
//     });
//   }
// };

// const OnSetProfileEditPathClick = (clicked) => {
//   let element_id = clicked.getAttribute("id");

//   switch (element_id) {
//     case "editing-buttons1":
//       document
//         .querySelector("#editing-buttons1")
//         .setAttribute(
//           "style",
//           "background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;"
//         );
//       document
//         .querySelector("#editing-buttons2")
//         .setAttribute("style", "background: white; border: 0;");
//       document
//         .querySelector("#editing-buttons3")
//         .setAttribute("style", "background: white; border: 0;");
//       document
//         .querySelector("#editing-buttons4")
//         .setAttribute("style", "background: white; border: 0;");
//       break;
//     case "editing-buttons2":
//       document
//         .querySelector("#editing-buttons1")
//         .setAttribute("style", "background: white; border: 0;");
//       document
//         .querySelector("#editing-buttons2")
//         .setAttribute(
//           "style",
//           "background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;"
//         );
//       document
//         .querySelector("#editing-buttons3")
//         .setAttribute("style", "background: white; border: 0;");
//       document
//         .querySelector("#editing-buttons4")
//         .setAttribute("style", "background: white; border: 0;");
//       break;
//     case "editing-buttons3":
//       document
//         .querySelector("#editing-buttons1")
//         .setAttribute("style", "background: white; border: 0;");
//       document
//         .querySelector("#editing-buttons2")
//         .setAttribute("style", "background: white; border: 0;");
//       document
//         .querySelector("#editing-buttons3")
//         .setAttribute(
//           "style",
//           "background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;"
//         );
//       document
//         .querySelector("#editing-buttons4")
//         .setAttribute("style", "background: white; border: 0;");
//       break;
//     case "editing-buttons4":
//       document
//         .querySelector("#editing-buttons1")
//         .setAttribute("style", "background: white; border: 0;");
//       document
//         .querySelector("#editing-buttons2")
//         .setAttribute("style", "background: white; border: 0;");
//       document
//         .querySelector("#editing-buttons3")
//         .setAttribute("style", "background: white; border: 0;");
//       document
//         .querySelector("#editing-buttons4")
//         .setAttribute(
//           "style",
//           "background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;"
//         );
//       break;
//   }
// };

const SetGenderButtonsClick = () => {
  let gender_buttuns = document.querySelectorAll(".gender_buttuns");

  for (const iterator of gender_buttuns) {
    iterator.addEventListener("click", (e) => {
      OnGenderButtonClick(e.currentTarget);
    });
  }
};

// const SetSaveAndCancelButtonsClick = () => {
//   let SaveAndCancel = document.querySelectorAll(".saveAndCancel");

//   for (const iterator of SaveAndCancel) {
//     iterator.addEventListener("click", (e) => {
//       OnClickSaveOrCancelButton(e.currentTarget);
//     });
//   }
// };

// const OnClickSaveOrCancelButton = (clicked) => {
//   clicked.preventDefault();
//   let saveAndCancelid = clicked.getAttribute("id");

//   switch (saveAndCancelid) {
//     case "save_button":
//       document
//         .querySelector("#save_button")
//         .setAttribute(
//           "style",
//           "background: #3801B0; border-radius: 8px; color: #FFFFFF;"
//         );
//       document
//         .querySelector("#cancel_button")
//         .setAttribute(
//           "style",
//           "background: #FFFFFF; color: #3800B0; border: 2px solid #3800B0;"
//         );
//       break;
//     case "cancel_button":
//       document
//         .querySelector("#save_button")
//         .setAttribute(
//           "style",
//           "background: #FFFFFF; color: #3800B0; border: 2px solid #3800B0;"
//         );
//       document
//         .querySelector("#cancel_button")
//         .setAttribute(
//           "style",
//           "background: #3800B0; border-radius: 8px; color: #FFFFFF;"
//         );
//       break;
//   }
// };

function MyVerticallyCenteredModal(props) {
  // const [password, setPassword] = useState("");
  const [reason, setReason] = useState();
  const [reasons, setReasons] = useState([]);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setError("");
    myaxios
      .get("/api/v1/settings/reasons/get")
      .then(({ data }) => {
        setReasons(data.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  const handleDelete = async (otp) => {
    props.onHide();
    await myaxiosprivate
      .get("/api/v1/profiles/delete?", {
        params: {
          type: reason,
          // password,
          comment,
          otp,
        },
      })
      .then((res) => {
        props.confirm();
      })
      .catch((err) => setError(err.message));
  };

  const showOtpModal = async () => {
    setStatus(true);
    await myaxiosprivate
      .get("api/v1/profiles/change/get-code")
      .then(({ data }) => {
        setShow(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // if (error) {
  //   return <div className="flex justify-center items-center h-96">{error}</div>;
  // }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop={show ? false : true}
        className={show && "!hidden"}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete your account
          </Modal.Title>
          <Button1 onClick={props.onHide}>
            <BiX style={{ fontSize: "20px" }} />
          </Button1>
        </Modal.Header>
        <Modal.Body>
          {/* <h1 className="enter-password-title">
          Enter password to allow deletion
        </h1>
        <Password
          className="info_input"
          placeholder="Password"
          value={password}
          type={password ? "password" : "text"}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
          <div className="delete-causes-items-container">
            <p>Reason for deleting the account (optional)</p>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              >
                {reasons?.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    value={item.id}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <div className="reson-text-input flex flex-col">
            <input
              type="text"
              className="info_input mt-2"
              placeholder="Describe your reason"
              disabled={reason !== "Other"}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={showOtpModal}>Delete account</Button>
        </Modal.Footer>
      </Modal>
      {show && (
        <OtpModal
          handleRegister={handleDelete}
          status={status}
          show={setShow}
        />
      )}
    </>
  );
}

// const OnGenderButtonClick = (clicked) => {
//   let element_id = clicked.getAttribute("id");

//   switch (element_id) {
//     case "female":
//       document
//         .querySelector("#female")
//         .setAttribute(
//           "style",
//           " background: #ECEEF7; border: 2px solid #2D3043; border-radius: 8px; z-index: 3;"
//         );
//       document
//         .querySelector("#male")
//         .setAttribute(
//           "style",
//           "background: #FFFFFF; border: 2px solid #ECEEF7; border-radius: 8px; z-index: 0"
//         );
//       break;
//     case "male":
//       document
//         .querySelector("#male")
//         .setAttribute(
//           "style",
//           " background: #ECEEF7; border: 2px solid #2D3043; border-radius: 8px; z-index: 3"
//         );
//       document
//         .querySelector("#female")
//         .setAttribute(
//           "style",
//           "background: #FFFFFF; border: 2px solid #ECEEF7; border-radius: 8px; z-index: 0"
//         );
//       break;
//   }
// };

function DeleteAccountConfirmSmyle(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    localStorage.clear();
    dispatch(logout());
    updateToken(null);
    navigate("/");
    window.location.reload();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Account deleted
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cry-smyle">
          <img src={Cry_Smyle} className="cry-smyle-image" />
        </div>
        <p className="deleted-account-wish-to-user">
          It is a pity that you are leaving us, but we will be glad to see you
          again.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDelete}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ProfileEdit = () => {
  const [isOpened, SetOpenOrClose] = useState(false);
  const [countryName, SetCountryName] = useState("Select Country");
  const [password, setPassword] = useState("password");
  const [modalShow, setModalShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const OnSeclectCountry = (country) => {
    SetCountryName(country.innerHTML);
    document
      .querySelector(".countries-list")
      .setAttribute("style", "display: none");
    SetOpenOrClose(false);
  };

  const setClickOnOptions = () => {
    const options = document.querySelectorAll(".option");

    for (const iterator of options) {
      iterator.addEventListener("click", (e) => {
        OnSeclectCountry(e.currentTarget);
      });
    }
  };

  // useEffect(() => {
  //   setClickOnOptions();
  //   SetProfileEditButtonsEvent();
  //   SetGenderButtonsClick();
  //   // SetSaveAndCancelButtonsClick();
  // });

  // const data = [
  //   {
  //     label: "Travel",
  //     value: 1,
  //   },
  //   {
  //     label: "Bussiness",
  //     value: 2,
  //   },
  // ];

  // ==============================================UPDATE SOCIAL LINKS===============================================================

  const [SocialInputs, setSocialInputs] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    tiktok: "",
    telegram: "",
    whatsapp: "",
  });
  const [getSocialLinksUser, setGetSocialLinksUser] = useState();

  const UpdateSocialLinkUser = () => {
    myaxiosprivate
      .post("/api/v1/profiles/social/links/update", {
        facebook: SocialInputs.facebook,
        instagram: SocialInputs.instagram,
        twitter: SocialInputs.twitter,
        tiktok: SocialInputs.tiktok,
        telegram: SocialInputs.telegram,
        whatsapp: SocialInputs.whatsapp,
      })
      .then(({ data }) => {
        enqueueSnackbar(data.message);
      })
      .catch((err) => {
        enqueueSnackbar(err.message);
      });
  };
  // =============================================================================================================================

  // ===============================================GET SOCIAL LINKS==============================================================

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    const result = { ...SocialInputs, [name]: value };
    setSocialInputs(result);
  };

  useEffect(() => {
    setError("");
    myaxiosprivate
      .get("/api/v1/profiles/social/links")
      .then((res) => {
        setGetSocialLinksUser(res.data.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    const {
      facebook = "",
      instagram = "",
      twitter = "",
      tiktok = "",
      telegram = "",
      whatsapp = "",
    } = getSocialLinksUser || {};
    setSocialInputs({
      facebook,
      instagram,
      twitter,
      tiktok,
      telegram,
      whatsapp,
    });
  }, [getSocialLinksUser]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    reValidateMode: "onChange",
    mode: "all",
  });
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [dateValue, setDateValue] = useState(new Date());
  const [file, setFile] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const [error, setError] = useState(""); //error use in ui
  const [interestId, setInterestId] = useState([]);
  const [clicked, setClicked] = useState(userInfo?.gender?.id);
  const [stripeStatus, setStripeStatus] = useState();
  const [data, setData] = useState([]);
  const [minDate, setMinDate] = useState(() => {
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 18);
    return minDate;
  });
  useEffect(() => {
    myaxiosprivate("/api/v1/users/categories/get")
      .then(({ data }) =>
        setData(data.data.map((obj) => ({ value: obj.id, label: obj.name })))
      )
      .catch((err) => setError(err.message));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCountryAndUserData = async () => {
      setLoading(true);
      setError("");
      await myaxiosprivate
        .get("/api/v1/settings/countries/get")
        .then((res) => {
          setAllCountries(
            res.data.data.map(({ id, name }) => {
              return { name: name, id: id };
            })
          );
        })
        .catch((err) => {
          setError(err.message);
        });
      setError("");
      await myaxiosprivate
        .get("/api/v1/profiles/edit")
        .then(({ data }) => {
          setUserInfo(data.data);
          setStripeStatus(data.data.stripe_connect);
          data.data.interests?.forEach((item) =>
            setInterestId((prevInterestId) => [...prevInterestId, item.id])
          );
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    fetchCountryAndUserData();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    code &&
      myaxiosprivate
        .post("/api/v1/profiles/stripe_connect", {
          stripe_id: code,
        })
        .then(
          ({ data }) => enqueueSnackbar(data.message),
          setStripeStatus(true),
          history.replaceState(null, "", window.location.pathname)
        );
  }, []);

  const handleStripeConnect = () => {
    let clientId = process.env.REACT_APP_STRIPE_CLIENT_TEST_ID;
    let scope = "read_write";
    const authorizeUrl = `https://connect.stripe.com/express/oauth/authorize?response_type=code&client_id=${clientId}&scope=${scope}`;
    window.location.href = authorizeUrl;
  };
  useEffect(() => {
    if (userInfo) {
      setValue("full_name", userInfo.full_name);
      setValue("email", userInfo.email);
      setValue(
        "country",
        userInfo?.country?.id ? userInfo.country.id : userInfo.country
      );
      setValue("dob", userInfo.dob);
      setValue("number", userInfo.number);
      setValue(
        "about",
        typeof userInfo?.about === "string" ? userInfo.about : ""
      );
    }
  }, []);
  const handleCalendarChange = (e) => {
    setDateValue(new Date(e));
    setShowCalendar(!showCalendar);
  };
  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    setUserInfo({ ...userInfo, avatar: file && URL.createObjectURL(file) });
  }, [file]);
  // const handleChangeUserInfo = (e) => {
  //   const { name, value } = e.target;
  //   setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  // };

  useEffect(() => {
    setUserInfo({ ...userInfo, dob: dateValue });
  }, [dateValue]);
  const countryFinder = () => {
    const countryName = allCountries.filter(
      (item) => item.id === userInfo.country
    );
    return countryName[0]?.name;
  };
  const handleGenderSelect = (e) => {
    setClicked(e);
    if (e === "male") {
      setUserInfo({ ...userInfo, gender: 1 });
    } else {
      setUserInfo({ ...userInfo, gender: 2 });
    }
  };
  // ============================================================================================================================

  // ===================================================UPDATE PROFILE INFORMATION===============================================
  const [interestErr, setInterestErr] = useState("");
  const handleUpdateInfoProfile = async ({
    full_name,
    country,
    email,
    number,
    slug,
    about,
  }) => {
    // e.preventDefault();
    const uniqueArr = [
      ...new Set(
        typeof userInfo.interests[0] === "object"
          ? interestId
          : userInfo.interests
      ),
    ];
    const selectedCountry = allCountries.find(
      (item) => item.name === (country ? country : userInfo.country)
    );

    const formData = new FormData();
    formData.append("full_name", full_name);
    formData.append("email", email);
    formData.append("username", slug);
    formData.append("phone", number);
    formData.append("about", about);
    formData.append(
      "dob",
      moment(userInfo.dob || dateValue).format("DD.MM.YYYY")
    );
    formData.append("interests", uniqueArr.length ? uniqueArr : " ");
    formData.append("file", file);
    formData.append("country", selectedCountry?.id);
    formData.append("gender", userInfo.gender?.id ?? userInfo.gender);

    await myaxiosprivate
      .post("/api/v1/profiles/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        enqueueSnackbar(
          data.message !== "" ? data.message : "Update is successfull"
        );
        location.reload();
      })
      .catch((err) => {
        enqueueSnackbar(err.message);
      });
  };

  // ============================================================================================================================
  // =======================================================VERIFICATION PASSPORT API============================================
  const [selectPassport, setSelectPassport] = useState(null);
  const handleVerifyPassport = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectPassport);
    try {
      await myaxiosprivate
        .post("/api/v1/profiles/verify", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          enqueueSnackbar(data.message);
          location.reload();
        });
    } catch (err) {
      enqueueSnackbar(err.message);
    }
  };
  const [show, setShow] = useState(false);
  const [passwordError, setNewPasswordError] = useState("");
  const showOtpModal = async () => {
    if (new_password.length < 5) {
      setNewPasswordError("password must be at least 5 symbols");
    } else {
      await myaxiosprivate
        .get("api/v1/profiles/change/get-code", {
          params: {
            email: userInfo.email,
          },
        })
        .then(({ data }) => {
          setStatus(true);
          setShow(true);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };
  const [oldPassword, setOldPass] = useState();
  const [new_password, setNewPassword] = useState();
  const [status, setStatus] = useState(false);
  const [showOldPass, setShowOld] = useState();
  const handleNewPassword = async (otp) => {
    await myaxiosprivate
      .post("/api/v1/profiles/store/password", {
        code: Number(otp),
        password: oldPassword,
        new_password,
      })
      .then(
        ({ data }) => enqueueSnackbar("Password succesfully changed."),
        location.reload()
      )
      .catch((err) => enqueueSnackbar(err.message));
  };
  // ============================================================================================================================
  // ======================================================= GET COUNTRIES ============================================
  // var getCountryList = [];
  const calendarRef = useRef(null);
  useEffect(() => {
    const closeCalendar = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", closeCalendar);
    return () => {
      document.removeEventListener("mousedown", closeCalendar);
    };
  }, [showCalendar]);
  const breadCrumb = [
    {
      title: "Main",
      to: "/",
    },
    {
      title: "Profile",
      to: "/my-profile",
    },
    {
      title: "Edit Profile Information",
    },
  ];

  const [imagePreview, setImagePreview] = useState(null);
  const [checked, setChecked] = useState("personalInfo");
  if (loading) {
    return <Loader />;
  }
  // =================================================================================================================
  return (
    <ProfileEditing>
      <LittleContainer>
        <Header>
          {/*<p className="top-buttons">*/}
          {/*  Main {">"} Profile {">"} Edit Profile Information*/}
          {/*</p>*/}
          <p className="top-buttons">
            <CustomBreadcrumb links={breadCrumb} />
          </p>
          <h1 className="main-page-title">Edit Information</h1>
          <Tabs defaultValue="personalinfo" className="!w-full">
            <EditingButtons>
              <div className="insider">
                <Tab
                  value="personalinfo"
                  className={
                    checked === "personalInfo" &&
                    " border-[3px] border-[#3800B0]  rounded-[8px]"
                  }
                >
                  <button
                    className={`editing-buttons ${
                      checked === "personalInfo" &&
                      "!bg-[#EBE5F7] rounded-[8px] !text-[#3800B0]"
                    } outline-none focus:outline-none`}
                    onClick={() => setChecked("personalInfo")}
                  >
                    Personal info
                  </button>
                </Tab>
                <Tab
                  value="passwordlogin"
                  className={
                    checked === "passwordlogin" &&
                    " border-[3px] border-[#3800B0]  rounded-[8px]"
                  }
                >
                  <button
                    className={`editing-buttons outline-none focus:outline-none ${
                      checked === "passwordlogin" &&
                      "!bg-[#EBE5F7] rounded-[8px] !text-[#3800B0]"
                    }`}
                    onClick={() => setChecked("passwordlogin")}
                  >
                    Password
                  </button>
                </Tab>
                <Tab
                  value="verification"
                  className={
                    checked === "verification" &&
                    " border-[3px] border-[#3800B0]  rounded-[8px]"
                  }
                >
                  <button
                    className={`editing-buttons outline-none focus:outline-none ${
                      checked === "verification" &&
                      "!bg-[#EBE5F7] rounded-[8px] !text-[#3800B0]"
                    }`}
                    onClick={() => setChecked("verification")}
                  >
                    Verification
                  </button>
                </Tab>
                <Tab
                  value="payment"
                  className={
                    checked === "payment" &&
                    " border-[3px] border-[#3800B0]  rounded-[8px]"
                  }
                >
                  <button
                    className={`editing-buttons  outline-none focus:outline-none ${
                      checked === "payment" &&
                      "!bg-[#EBE5F7] rounded-[8px] !text-[#3800B0]"
                    }`}
                    e
                    onClick={() => setChecked("payment")}
                  >
                    Payment
                  </button>
                </Tab>
              </div>
            </EditingButtons>
            <TabPanel className="md:ml-5" value="personalinfo">
              <Section>
                <form onSubmit={handleSubmit(handleUpdateInfoProfile)}>
                  <EditingItem>
                    <ProfilePicture>
                      <figure className="image-figure">
                        <img
                          src={
                            !userInfo.avatar
                              ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                              : `${userInfo.avatar}`
                          }
                          className="profile-pucture"
                        />
                      </figure>
                      <div
                        className="content-container"
                        onClick={() => {
                          const dialog =
                            document.querySelector(".file-uploader");
                          dialog.click();
                        }}
                      >
                        <p className="upload-profile-picture">
                          Upload profile photo
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="file-uploader"
                          style={{ display: "none" }}
                        />
                      </div>
                    </ProfilePicture>
                    {errors.full_name && (
                      <p className="mx-14 mt-2 text-red-500 text-xs">
                        {errors.full_name.message}
                      </p>
                    )}
                    <EditingInputs>
                      <input
                        type="text"
                        name="full_name"
                        // value={getUserInfoProfile.full_name}
                        defaultValue={userInfo.full_name}
                        // onChange={handleChangeUserInfo}
                        placeholder="Full name"
                        className="editing-inputs !rounded-none md:!w-[550px]"
                        {...register("full_name", {
                          required: "Full name is required",
                          min: 8,
                        })}
                      />
                    </EditingInputs>
                  </EditingItem>
                  <GenderButtons>
                    <button
                      type="button"
                      onClick={(e) => handleGenderSelect(e.target.id)}
                      className={
                        userInfo.gender.id === 1 || clicked === "male"
                          ? "clicked gender_buttuns male-button"
                          : "gender_buttuns male-button"
                      }
                      id="male"
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleGenderSelect(e.target.id)}
                      className={
                        userInfo.gender.id === 2 || clicked === "female"
                          ? "clicked gender_buttuns female-button"
                          : "gender_buttuns female-button"
                      }
                      id="female"
                    >
                      Female
                    </button>
                  </GenderButtons>
                  <MainInputs>
                    <div className="seclect-container">
                      {/* <div
                        className="country-selection"
                        // onClick={() => {
                        //   if (isOpened == false) {
                        //     document
                        //       .querySelector(".countries-list")
                        //       .setAttribute("style", "display: block");
                        //     SetOpenOrClose(true);
                        //   } else {
                        //     document
                        //       .querySelector(".countries-list")
                        //       .setAttribute("style", "display: none");
                        //     SetOpenOrClose(false);
                        //   }
                        // }}
                      > */}
                      {errors.country && (
                        <p className="mx-10 mb-1 text-red-500 text-xs">
                          {errors.country.message}
                        </p>
                      )}
                      {/* <h5 className="country-name">
                          {userInfo.country.name
                            ? userInfo.country.name
                            : countryFinder()}
                        </h5> */}
                      {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                      {/* </div> */}
                      <Autocomplete
                        isOptionEqualToValue={(option, value) =>
                          option.name === value
                        }
                        defaultValue={
                          userInfo?.country?.name
                            ? userInfo.country.name
                            : countryFinder()
                        }
                        className="!block !z-0 countries-list !rounded-none !border-0 hover:!border-0 focus:!border-0"
                        options={allCountries}
                        onInputChange={(e, value) =>
                          setUserInfo({
                            ...userInfo,
                            country: value,
                          })
                        }
                        sx={{
                          // border: "1px solid blue",

                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                            {
                              border: "none",
                            },
                        }}
                        getOptionLabel={(option) => {
                          return option.name ? option.name : option;
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            className="!border-0"
                            placeholder="Select country"
                          />
                        )}
                      />
                      {/* <ul className="countries-list">
                        {allCountries.map((country) => (
                          <li
                            key={country.id}
                            value={country.name}
                            onClick={() =>
                              setUserInfo({
                                ...userInfo,
                                country: country.id,
                              })
                            }
                            id={country.id}
                            className="option"
                          >
                            {country.name}
                          </li>
                        ))}
                      </ul> */}
                    </div>
                    {errors.email && (
                      <p className="mx-10 mt-2 text-red-500 text-xs">
                        {errors.email.message}
                      </p>
                    )}
                    <div className="email-container">
                      <input
                        type="email"
                        defaultValue={userInfo.email}
                        {...register("email", {
                          required: "Email is required",
                        })}
                        name="email"
                        className="info-input-email"
                        placeholder="Email"
                      />

                      {/* <a href='#' className='change-button'>Change</a> */}
                    </div>
                    <div className="email-container !block !bg-transparent">
                      {errors.number && (
                        <p className="text-red-500 text-xs">
                          {errors.number.message}
                        </p>
                      )}
                      <input
                        onInput={(e) => {
                          if (e.target.value.length > e.target.maxLength) {
                            e.target.value = e.target.value.slice(
                              0,
                              e.target.maxLength
                            );
                          }
                        }}
                        type="number"
                        defaultValue={userInfo.number}
                        name="number"
                        maxLength={15}
                        className="info-input-email"
                        placeholder="Phone Number"
                        {...register("number", {
                          minLength: 7,
                          maxLength: {
                            value: 15,
                            message: "Number can be max 15 symbols",
                          },
                        })}
                      />
                      {/* <a href='#' className='change-button'>Change</a> */}
                    </div>
                    <div
                      ref={calendarRef}
                      className="max-w-[550px] w-[90%] md:w-[550px]"
                    >
                      <input
                        type="text"
                        value={moment(userInfo.dob).format("DD.MM.YYYY")}
                        readOnly
                        className="info_input !w-full"
                        placeholder="Date of birth"
                        onFocus={() => setShowCalendar(true)}
                      />
                      <Calendar
                        defaultValue={userInfo.dob}
                        locale="en-EN"
                        closeCalendar={true}
                        next2Label={false}
                        prev2Label={false}
                        minDate={new Date(1921, 0, 1)}
                        maxDate={minDate}
                        onChange={handleCalendarChange}
                        value={new Date(userInfo.dob)}
                        className={showCalendar ? "!w-full" : "hide"}
                      />
                    </div>
                    {errors.slug && (
                      <p className="mx-14 mt-2 text-red-500 text-xs">
                        {errors.slug.message}
                      </p>
                    )}
                    <div className="wish-me-input-title">
                      <h5 className="wish-me-title">wish.me/</h5>
                      <input
                        type="text"
                        name="slug"
                        // value={getUserInfoProfile.slug}
                        defaultValue={userInfo.slug}
                        // onChange={handleChangeUserInfo}
                        className="info_input-small"
                        placeholder="username"
                        {...register("slug", {
                          required: "Username is required",
                        })}
                      />
                    </div>
                    <div className="main-title-container">
                      <p className="main-title">
                        Select your interests so that our partners give you only
                        relevant gifts (maximum 5):
                      </p>
                    </div>
                    <div className="interests-input-container">
                      <div className="multi-select !block">
                        {interestErr && (
                          <p className=" text-red-500 text-xs">{interestErr}</p>
                        )}
                        <MultiSelect
                          className="info_input-multi"
                          data={data}
                          defaultValue={[...new Set(interestId)]}
                          onChange={(e) =>
                            setUserInfo({ ...userInfo, interests: e })
                          }
                          placeholder="Interests"
                          maxSelectedValues={data.length}
                        />
                      </div>
                    </div>
                    {errors.about && (
                      <p className="mx-2 mt-2 text-red-500 text-xs">
                        {errors.about.message}
                      </p>
                    )}
                    <div className="text-area-container">
                      <textarea
                        rows={5}
                        cols={5}
                        name="about"
                        // value={getUserInfoProfile.about}
                        defaultValue={userInfo.about}
                        // onChange={handleChangeUserInfo}
                        {...register("about", {
                          minLength: {
                            value: 10,
                            message:
                              "About should be at least 10 characters long",
                          },
                        })}
                        className="text-area"
                        placeholder="About you"
                      />
                    </div>

                    <div className="buttons-container">
                      <button
                        className="saveAndCancel save-button"
                        type="submit"
                        id="save_button"
                      >
                        Save
                      </button>
                      <button
                        className="saveAndCancel cancel-button"
                        type="button"
                        id="cancel_button"
                        onClick={() => setModalShow(true)}
                      >
                        Delete account
                      </button>
                    </div>
                  </MainInputs>
                </form>
              </Section>
            </TabPanel>
            <TabPanel className="md:ml-10" value="password">
              <PasswordSettings>
                <p className="password-change-title">Change password</p>
                {passwordError && (
                  <p className="mt-2 text-red-500 text-xs">{passwordError}</p>
                )}
                {/* <PasswordSettingsInputs> */}
                <div className="!relative  max-md:w-full">
                  <Password
                    className=""
                    value={oldPassword}
                    onChange={(e) => setOldPass(e.target.value)}
                    placeholder="Old Password"
                    type={showOldPass ? "password" : "text"}
                  />
                  <AiOutlineEye
                    className={
                      password
                        ? "eye_button top-[50px] right-8 text-black absolute cursor-pointer hover:text-gray-300"
                        : "eye_button top-[50px] right-8 absolute cursor-pointer hover:text-black"
                    }
                    onClick={() => {
                      setShowOld(!showOldPass);
                    }}
                  />
                </div>

                {/* </PasswordSettingsInputs> */}
                {/* <PasswordSettingsInputs> */}
                <div className="!relative  max-md:w-full">
                  <Password
                    className=""
                    value={new_password}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                    type={password ? "password" : "text"}
                  />
                  <AiOutlineEye
                    className={
                      password
                        ? "eye_button top-[50px] right-8 text-black absolute cursor-pointer hover:text-gray-300"
                        : "eye_button top-[50px] right-8 absolute cursor-pointer hover:text-black"
                    }
                    onClick={() => {
                      setPassword(!password);
                    }}
                  />
                </div>

                {/* </PasswordSettingsInputs> */}
                <div className="confirm-button">
                  <button
                    className="password-save-button text-white  md:ml-1"
                    onClick={showOtpModal}
                  >
                    Save
                  </button>
                </div>
                {show && (
                  <OtpModal
                    show={setShow}
                    handleRegister={handleNewPassword}
                    status={status}
                  />
                )}
                {/* <h1 className="connect-sosial-netwok-title ml-3 ">
                  Connect social networks
                </h1> */}
                {/* <SosialMediaButtons>
                  {/* <button className="facebook-button">
                    <FaFacebook className="facebook-icon" />
                    <h1 className="facebook-title" style={{ margin: "0" }}>
                      Disconnect Facebook
                    </h1>
                  </button>
                  <button className="google-button">
                    <FaGoogle className="google-icon" />
                    <h1 className="google-title" style={{ margin: "0" }}>
                      Connect Google
                    </h1>
                  </button>
                  <button className="apple-button">
                    <FaApple className="apple-icon" />
                    <h1 className="apple-title" style={{ margin: "0" }}>
                      Connect Apple
                    </h1>
                </SosialMediaButtons> 
                  </button> */}
              </PasswordSettings>
            </TabPanel>
            <TabPanel className="md:ml-10" value="verification">
              {userInfo.verify === null && (
                <StatusPedding className="status-padding pb-8">
                  <h1 className="status-pedding-title">Status pending</h1>
                  <p className="status-pedding-main-title">
                    Your documents have been sent for verification! Moderators
                    will <br />
                    review your application as soon as possible. Thanks for
                    waiting
                  </p>
                  <h5
                    className="contact-administration-title"
                    onClick={() => {
                      document
                        .querySelector(".status-padding")
                        .setAttribute("style", "display: none");
                      document
                        .querySelector(".compleated")
                        .setAttribute("style", "display: block");
                    }}
                  >
                    Contact the administration
                  </h5>
                </StatusPedding>
              )}
              {userInfo.verify === false && (
                <PictureUploadComponents className="picture-upload">
                  <form onSubmit={handleVerifyPassport}>
                    <p className="title">
                      To start fundraising for yourself, you need to pass
                      verification. To <br /> do this, just send a photo of your
                      passport.
                    </p>
                    <input
                      type="file"
                      onChange={(e) => setSelectPassport(e.target.files[0])}
                      name="photo-uploader"
                      id="photo-uploader"
                    />
                    {selectPassport && (
                      <div className="relative w-fit mt-2">
                        <img
                          src={
                            selectPassport &&
                            URL.createObjectURL(selectPassport)
                          }
                          className="w-[100px] h-[80px] md:w-[160px] md:h-[120px] rounded-md m-1"
                        />
                        <CgTrash
                          onClick={() => setSelectPassport(null)}
                          className="absolute text-[#2D008D] bg-slate-200 w-[24px] h-[24px] right-2 top-2 rounded-full"
                        />
                      </div>
                    )}
                    <PictureDropDown>
                      <div
                        className="upload-icon-and-title"
                        onClick={() => {
                          const dialog =
                            document.querySelector("#photo-uploader");
                          dialog.click();
                        }}
                      >
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        <h1 className="upload-picture-title">
                          Upload picture of Passport
                        </h1>
                      </div>
                    </PictureDropDown>
                    <div className="upload-picture-treams">
                      <h5 className="trems-head-title">The photo must be</h5>
                      <ul className="pictures-upload-treams-list">
                        <li className="pictures-upload-treams-list-item">
                          Original. Do not change or edit.
                        </li>
                        <li className="pictures-upload-treams-list-item">
                          Light. Make sure there is enought light when shooting
                        </li>
                        <li className="pictures-upload-treams-list-item">
                          Clear. All information should be easy to read
                        </li>
                      </ul>
                    </div>
                    <div className="send-btn-passport">
                      <button
                        type="submit"
                        className="save-to-verification"
                        onClick={() => {
                          document
                            .querySelector(".picture-upload")
                            .setAttribute("style", "display: none");
                          document
                            .querySelector(".status-padding")
                            .setAttribute("style", "display: block");
                          window.scrollTo(0, 0);
                        }}
                      >
                        Send to verification
                      </button>
                    </div>
                  </form>
                </PictureUploadComponents>
              )}
              {userInfo.verify && (
                <Compleated className="compleated">
                  <div className="compleated-icon">
                    <div className="compleated-icon-item">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  </div>
                  <h1 className="verification-compleated-title">
                    Verification passed successfully
                  </h1>
                  <p className="moderator-compleating">
                    Moderator verificated your info. Thank you!
                  </p>
                  <h5 className="contact-administration-title">
                    Contact the administration
                  </h5>
                </Compleated>
              )}
              <PictureUpload></PictureUpload>
            </TabPanel>
            <TabPanel value="payment">
              <StatusPedding className="status-padding ">
                <h1 className="status-pedding-title">Connect payment system</h1>
                <p className="status-pedding-main-title">
                  To start fundraising yourself you need to connect to your
                  stripe account.
                </p>

                <SosialMediaButtons>
                  <button
                    className="bg-[#3800B0] p-3 md:p-0 md:w-[440px] h-[56px] text-white rounded-md my-2 hover:shadow-md hover:bg-[#2D008D]"
                    onClick={handleStripeConnect}
                  >
                    <p className="apple-title" style={{ margin: "0" }}>
                      {stripeStatus
                        ? "Connect another stripe account"
                        : "Connect to stripe account"}
                    </p>
                  </button>
                </SosialMediaButtons>
              </StatusPedding>
              {/* <SosialMediaSelection>
                <div className="sosial-media">
                  <FaFacebook className="facebook"></FaFacebook>
                  <input
                    type="text"
                    name="facebook"
                    value={SocialInputs.facebook}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your Facebook link"
                  />
                </div>
                <div className="sosial-media">
                  <FaInstagram className="instagram"></FaInstagram>
                  <input
                    type="text"
                    name="instagram"
                    value={SocialInputs.instagram}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your Instagram link"
                  />
                </div>
                <div className="sosial-media">
                  <FaTwitter className="twitter"></FaTwitter>
                  <input
                    type="text"
                    name="twitter"
                    value={SocialInputs.twitter}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your Twitter link"
                  />
                </div>
                <div className="sosial-media">
                  <FaTiktok className="tiktok"></FaTiktok>
                  <input
                    type="text"
                    name="tiktok"
                    value={SocialInputs.tiktok}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your TikTok link"
                  />
                </div>
                <div className="sosial-media">
                  <FaTelegram className="telegram"></FaTelegram>
                  <input
                    type="text"
                    name="telegram"
                    value={SocialInputs.telegram}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your Telegram link"
                  />
                </div>
                <div className="sosial-media">
                  <FaWhatsapp className="whatsapp"></FaWhatsapp>
                  <input
                    type="text"
                    name="whatsapp"
                    value={SocialInputs.whatsapp}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your Whatsapp link"
                  />
                </div>
                <SaveButton>
                  <button
                    onClick={UpdateSocialLinkUser}
                    className="save-button"
                  >
                    Save
                  </button>
                </SaveButton>
              </SosialMediaSelection> */}
            </TabPanel>
          </Tabs>
        </Header>
      </LittleContainer>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        confirm={() => setConfirm(true)}
      />
      <DeleteAccountConfirmSmyle
        show={confirm}
        onHide={() => setConfirm(false)}
      />
    </ProfileEditing>
  );
};

export default ProfileEdit;
