import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import "./WineControls.css";

function WineControls( {cbChangedFilter, cbChangedSort, cbChangeOutputType} ) {

  const [filterValue, setFilterValue] = useState("all");
  const [sortValue, setSortValue] = useState("all");
  const [isShowPages, setIsShowPages] = useState("all");

  const location = useLocation();

  useEffect( () => {
    setFilterValue("all");
    setSortValue("all");
  }, [location]
  );

  function switchFilter(event) {
    cbChangedFilter(event.target.value);
    setFilterValue(event.target.value);
  };

  function switchSort(event) {
    cbChangedSort(event.target.value);
    setSortValue(event.target.value);
  };

  function switchIsShowPages(event) {
    const state = event.target.value === "page" ? true : false;
    setIsShowPages(event.target.value);
    cbChangeOutputType(state);
  };

 
}

WineControls.propTypes = {
  cbChangedFilter: PropTypes.func.isRequired,
  cbChangedSort: PropTypes.func.isRequired,
  cbChangeOutputType: PropTypes.func.isRequired,
};

export default WineControls;
