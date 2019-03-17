import React, { useState } from "react";
import PropTypes from 'prop-types';
import SearchContextView from "../components/SearchContext";
import * as MapActions from "src/Actions";

/**
 * 
 * @name SearchContiner
 * @desc handles the underlying logic for the search feature
 * @param {any} props 
 * @returns 
 */
const SearchContainer = props => {
  const [searchText, setSearchText] = useState("");
  const onInputChange = text => setSearchText(text);
  const onButtonPress = () => {
    const { handleAddressChange, handleErrorCallback } = props;
    MapActions.handleAddressChange(
      searchText,
      handleAddressChange,
      handleErrorCallback
    );
  };
  return (
    <SearchContextView
      onTextInputChange={onInputChange}
      searchText={searchText}
      onButtonPress={onButtonPress}
    />
  );
};

SearchContainer.PropTypes = {
    handleAddressChange: PropTypes.func,
    handleErrorCallback: PropTypes.func
}
export default SearchContainer;
