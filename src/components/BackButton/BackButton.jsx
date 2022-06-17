import { useNavigate } from "react-router-dom";
import styles from './BackButton.module.css';

export default function BackButton() {
  const navigate = useNavigate();

  return (<button className={styles.button} type='button' onClick={() => navigate(-1)}>Go Back</button>)
}
