import { AccessModifierPopup } from "components/AccessModifierPopup";
import { BoardBackground } from "components/BoardBackground";
import { CloseBoard } from "components/CloseBoard";
import { CreateBoardPopupRender } from "components/CreateBoardPopupRender";
import { DeleteBoardPopup } from "components/DeleteBoardPopup";
import { EditCard } from "components/EditCard";
import { Layout } from "components/Layout";
import RoutesComponent from "components/RoutesComponent/RoutesComponent";
import { TaskDescription } from "components/TaskDescription";
import { ToastContainer } from "react-toastify";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.leyout_content}>
      <ToastContainer />
      <Layout>
        <RoutesComponent />
      </Layout>
      <TaskDescription />
      <EditCard />
      <CreateBoardPopupRender />
      <AccessModifierPopup />
      <BoardBackground />
      <CloseBoard />
      <DeleteBoardPopup />
    </div>
  );
}

export default App;
