// ** React Imports
import { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "@layouts/components/navbar";
import { ToastContainer } from "react-toastify";
import GoTop from "../components/GoTop";
import { getShareInfo } from "@store/common/actions";
import { getCodeLanguage, getShareInfoSelector } from "@store/common/selectors";
import { useRouteMatch } from "react-router";

const blankUrl = [
  "/signup",
  "/login",
  "/forgot-username",
  "/forgot-password",
  "/verify",
  "/verify",
  "/active",
  "/accounts",
  "/active-code",
  "/confirm-v2",
  "/confirm-forgot-v2",
  "/loading",
  "/confirm-parent-v2",
  "/confirm-password-v2",
  "/referral",
  "/confirm-contract-otp",
];

const BlankLayout = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const convert = (url1 = "") => {
    const urlClone = url;

    const arr = urlClone.split("/");

    return "/" + arr[1];
  };

  console.log(convert(url));

  // ** States
  const [isMounted, setIsMounted] = useState(false);

  const codeLanguage = useSelector((state) => getCodeLanguage(state));
  const formData = useSelector((state) => getShareInfoSelector(state));

  useEffect(() => {
    dispatch(getShareInfo());
  }, [codeLanguage]);

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }
  const className = url.toLowerCase() === "/buycourse" ? "BuyCourse " : "";
  return (
    <Fragment>
      {blankUrl.includes(convert(url)) ? (
        children
      ) : (
        <div className={className}>
          <div className="app-content content">
            <div className="content-wrapper">
              <div className="content-header">
                <Navbar data={formData} />
              </div>
              <div className="content-body">{children}</div>
            </div>
          </div>
          {/* <GoTop scrollStepInPx="50" delayInMs="16.66" /> */}
        </div>
      )}

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default BlankLayout;
