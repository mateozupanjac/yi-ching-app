import Loader from "../components/UI/Loader.js";
import { useSelector } from "react-redux";
const YiChingPage = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <section className="yichingSection">
      {isLoading && <Loader timeout={3000} />}
    </section>
  );
};

export default YiChingPage;
