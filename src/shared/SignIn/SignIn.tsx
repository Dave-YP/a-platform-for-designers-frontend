import { FC, useState } from "react";
import "./SignIn.scss";
import useInput from "../../hooks/useInput";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import { SigninText } from "../../utils/constants";
import { enqueueSnackbar } from "notistack";

interface ISignInProps {
  openSignUpPopup: () => void;
  onClose: () => void;
}

const SignIn: FC<ISignInProps> = ({ openSignUpPopup, onClose }) => {
  const [error] = useState("");

  const email = useInput(
    "",
    {
      isEmpty: true,
      minLength: 6,
      maxLength: 70,
      isEmail: true,
    },
    { trim: true }
  );

  const password = useInput("", {
    isEmpty: true,
    minLength: 6,
    maxLength: 32,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    enqueueSnackbar({
      variant: "success",
      message: "Вы успешно вошли",
    });
    const values = {
      email,
    };
    console.log(values);

    onClose();
  }

  return (
    <form className="myAuthForm__signin-form" onSubmit={handleSubmit}>
      <MyInput data={email} label="E-mail" />
      <MyInput data={password} label="Password" variant="password" />

      <div className="myAuthForm__lower-part">
        {error && (
          <span className="myAuthForm__error myAuthForm__error_type_bottom">
            {error}
          </span>
        )}
        <a href="#" className="myAuthForm__forget-passwor">
          Забыли пароль?
        </a>
        <MyButton
          className="myAuthForm__button"
          type="submit"
          disabled={!!email.error || !!password.error || Boolean(error)}
        >
          Войти
        </MyButton>

        <p className="myAuthForm__question">
          {SigninText.isRegistredText}
          <span className="myAuthForm__login-btn" onClick={openSignUpPopup}>
            {SigninText.linkText}
          </span>
        </p>
      </div>
    </form>
  );
};

export default SignIn;