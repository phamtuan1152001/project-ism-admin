import "../bootstrap.scss";
import "../responsive.scss";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCodeLanguage } from "@store/common/selectors";
import queryString from "query-string";
import { getDataHomeAction } from "@Modules/Home/Store/actions";
import {
  getDataHome,
  getLoadingDataHomeSelector,
} from "@Modules/Home/Store/selectors";
import { useHistory, useLocation } from "react-router";

const Home = () => {
  const dispatch = useDispatch();
  const codeLanguage = useSelector((state) => getCodeLanguage(state));
  const formData = useSelector((state) => getDataHome(state));
  const loading = useSelector((state) => getLoadingDataHomeSelector(state));

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.search === "?dk") {
      history.push("/download");
    }
  }, [JSON.stringify(location.search)]);

  useEffect(() => {
    if (location.state?.scroll) {
      window.scrollTo(0, window.innerHeight + 200);
      return;
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getDataHomeAction());
  }, [codeLanguage]);

  return <div className="home__page"></div>;
};
export default Home;
