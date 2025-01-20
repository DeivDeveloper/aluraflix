import { Link, useLocation } from "react-router-dom";
import styles from "./Button.module.css";

export const Button = ({ url, children }) => {
  const currentPage = useLocation();

  let buttonClass = "";

  if (currentPage.pathname === "/") {
    if (url === "./") {
      buttonClass = styles.highlightedButton;
    } else {
      buttonClass = styles.button;
    }
  } else if (currentPage.pathname === "/addvideo") {
    if (url === "./addvideo") {
      buttonClass = styles.highlightedButton;
    } else {
      buttonClass = styles.button;
    }
  } else buttonClass = styles.button;

  return (
    <Link to={url} className={buttonClass}>
      {children}
    </Link>
  );
};

const FormButton = ({ type, children }) => {
  const buttonClass =
    type === "submit" ? styles.highlightedButton : styles.button;
  return (
    <button className={buttonClass} type={type}>
      {children}
    </button>
  );
};

export default FormButton;
