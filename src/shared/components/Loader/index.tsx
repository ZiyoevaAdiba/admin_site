import ReactLoading from "react-loading";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="loader">
      <ReactLoading type={"bubbles"} color="green" />
    </div>
  );
};
