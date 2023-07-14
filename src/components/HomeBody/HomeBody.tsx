import { LittleHeader } from "components/LittleHeader";
import { HomeDetails } from "../HomeDetails";
import styles from "./HomeBody.module.scss";

const HomeBody = () => {
  return (
    <div className={styles.homeBodyWhenSideActive}>
      <LittleHeader />
      <HomeDetails />
    </div>
  );
};

export default HomeBody;
