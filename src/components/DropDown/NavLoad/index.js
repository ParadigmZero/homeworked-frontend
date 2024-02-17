import css from "./NavLoad.module.css";

function NavLoad({ icon, popupClick }) {
  return (
    <li className={css.navItem}>
      <div className={css.iconButton} onClick={popupClick}>
        {icon}
      </div>
    </li>
  );
}

export default NavLoad;
