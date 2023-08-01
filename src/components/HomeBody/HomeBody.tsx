import { FC, MouseEvent } from "react";
import { LittleHeader } from "components/LittleHeader";
import { HomeDetails } from "../HomeDetails";
import styles from "./HomeBody.module.scss";

interface IHomeBodyProps {
  isAddActive: boolean;
  changeAddIsActive: (e: MouseEvent<HTMLElement>) => void;
}

const HomeBody: FC<IHomeBodyProps> = ({ isAddActive, changeAddIsActive }) => {
  return (
    <div className={styles.homeBodyWhenSideActive}>
      <LittleHeader />
      <HomeDetails
        isAddActive={isAddActive}
        changeAddIsActive={changeAddIsActive}
      />
    </div>
  );
};

export default HomeBody;
