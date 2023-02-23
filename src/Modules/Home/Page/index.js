import "../bootstrap.scss";
import "../responsive.scss";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import queryString from "query-string";

// @selector
import { getUserData } from "@store/user/selector";
import { getCodeLanguage } from "@store/common/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const userInfo = useSelector(getUserData);
  const codeLanguage = useSelector((state) => getCodeLanguage(state));

  console.log("userInfo", userInfo);

  return (
    <div className="home__page">
      <h1>pham le song tuan</h1>
    </div>
  );
};
export default Home;
