import { useLocation, useNavigate } from "react-router-dom";
import styles from './BackButton.module.css';

export default function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  function onNavigate() {
    navigate(location?.state?.from ?? '/');
  }

  return (<button className={styles.button} type='button' onClick={onNavigate}>Go Back</button>)
}
