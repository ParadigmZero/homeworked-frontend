import css from "./Header.module.css";
import logo from "../../assets/HomeWorkedLogo.png";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const navigateHome = () => history.push("/");

  return (
    <div className={css.header}>
      <div className={css.leftHeader}>
        <div className={css.logo}>
          <button onClick={navigateHome} className={css.logo}>
            <img src={logo} alt="logo" />
          </button>
        </div>
        <div>
          <button className={css.logoBtn} onClick={navigateHome}>
            <h1 className={css.title}>HomeWorked</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;