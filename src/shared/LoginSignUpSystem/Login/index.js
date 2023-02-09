import {
  Button1,
  Container,
  Title,
  ButtonSignUp,
  Paragraph,
  Button2,
  Facebook,
  Goapp,
  Google,
  Apple,
  FacebookP,
  GoogleP,
  AppleP,
  ButtonOR,
  Dispno,
  Email,
  Password,
  ForgotPassword,
} from "./Login.Styled";
import { BiX } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaApple, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useForm } from "react-hook-form";

import { myaxios } from "../../../api/myaxios";

function LoginSystem({ nextsteplog, backSign, setShowes }) {
  const [passwordUser, setPasswordUser] = useState("");
  const [emailUser, setEmailUser] = useState("");

  const [getErrorLogin, setErrorLogin] = useState();

  // Login Modal Open
  const [shower, setShower] = useState(false);
  // END MODAL LOGIN

  const { register, handleSubmit, formState } = useForm({
    reValidateMode: "onChange",
  });

  const clickEmail = () => {
    setShower(!shower);
  };

  const navigate = useNavigate();

  const [getUserAuthToken, setUserAuthToken] = useState();

  const handleLoginWithEmail = ({ values }) => {
    console.log(values);
    // myaxios.get("sanctum/csrf-cookie").then(() => {
    //   myaxios
    //     .post(
    //       "api/v1/login",
    //       {
    //         xsrfHeaderName: "X-XSRF-TOKEN",
    //         email,
    //         password,
    //       },
    //       {
    //         headers: {
    //           "Access-Control-Allow-Origin": "*",
    //           "Access-Control-Allow-Headers": "*",
    //           "content-type": "application/json",
    //           "Access-Control-Allow-Credentials": true,
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       //set response in local storage
    //       localStorage.setItem("user", JSON.stringify(response.data));
    //       localStorage.setItem("UserToken=", response.data.data.token);
    //       document.cookie = "UserToken=" + response.data.data.token;
    //       setUserAuthToken(response.data.data.token);
    //       document.cookie = "UserMessage=" + response.data.data.message;
    //       console.log(JSON.stringify(response.data));
    //       setErrorLogin("");
    //       navigate("/my-profile");
    //     })
    //     .catch(function (error) {
    //       setErrorLogin("Email or password is wrong");

    //       setTimeout(() => {
    //         setErrorLogin(" ");
    //       }, 5000);
    //     });
    // });
  };

  const [password, setPassword] = useState("password");

  return (
    <Container style={{ zIndex: "10" }}>
      <Button1
        onClick={() => {
          let body = document.querySelector("body");
          body.setAttribute("style", "overflow-y: scroll; overflow-x: hidden");
          setShowes(false);
        }}
      >
        <BiX style={{ fontSize: "20px" }} />
      </Button1>
      <Title>Log in</Title>
      <Paragraph>
        Not a user?<Button2 onClick={backSign}>Sign up</Button2>
      </Paragraph>
      <Facebook>
        <BsFacebook
          style={{ fontSize: "22px", color: "white", marginRight: "10px" }}
        />
        <LoginSocialFacebook
          appId="488149573514075"
          onResolve={(responseFb) => {
            console.log(responseFb);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookP>Facebook</FacebookP>
        </LoginSocialFacebook>
      </Facebook>
      <Goapp>
        <Google>
          <FaGoogle
            style={{ fontSize: "22px", marginRight: "10px", color: "#3800B0" }}
          />
          <GoogleP>Google</GoogleP>
        </Google>
        <Apple>
          <FaApple
            style={{ color: "white", fontSize: "25px", marginRight: "10px" }}
          />
          <AppleP>Apple</AppleP>
        </Apple>
      </Goapp>
      <ButtonOR onClick={clickEmail}>Or via email</ButtonOR>

      {shower ? (
        <Dispno>
          <form onSubmit={(values) => handleLoginWithEmail(values)}>
            <div
              style={{
                width: "100%",
              }}
            >
              <div className="flex justify-center">
                <Email
                  placeholder="Email"
                  onChange={(emailUser) => setEmailUser(emailUser.target.value)}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {formState.errors.email && (
                <p className="mx-14 mt-2 text-red-500 text-xs">
                  {formState.errors.email.message}
                </p>
              )}

              {getErrorLogin && (
                <p className="mx-14 mt-2 text-red-500 text-xs">
                  {getErrorLogin}
                </p>
              )}
            </div>
            <div
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <div className="relative flex justify-center">
                <Password
                  placeholder="Password"
                  type={password ? "password" : "text"}
                  onChange={(passwordUser) =>
                    setPasswordUser(passwordUser.target.value)
                  }
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <AiOutlineEye
                  className="eye_button cursor-pointer"
                  onClick={() => {
                    setPassword(!password);
                  }}
                  style={{ position: "absolute" }}
                />
              </div>
            </div>

            {formState.errors.password && (
              <p className="mx-14 mt-2 text-red-500 text-xs">
                {formState.errors.password.message}
              </p>
            )}

            <ForgotPassword onClick={nextsteplog}>
              Forgot password
            </ForgotPassword>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ButtonSignUp type="submit" onClick={handleSubmit}>
                Log in
              </ButtonSignUp>
            </div>
          </form>
        </Dispno>
      ) : (
        ""
      )}
    </Container>
  );
}

export default LoginSystem;
