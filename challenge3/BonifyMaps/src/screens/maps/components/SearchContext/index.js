import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import { DARKER_GRAY } from "src/constants";
import * as styles from "./Styles";

/**
 *
 * @name SearchContextView
 * @desc The view layer for users to search
 * @param {any} props
 * @returns {func} The Search React Component
 */
const SearchContextView = props => {
  const { onTextInputChange, onButtonPress } = props;
  return (
    <View style={styles.SearchContainerStyle}>
      <TextInput
        style={styles.TextInputStyle}
        onChangeText={onTextInputChange}
        onSubmitEditing={onButtonPress}
        placeholder={"Enter an address and tap the search button :)"}
      />
      <TouchableOpacity
        style={styles.IconContainerStyle}
        onPress={onButtonPress}
      >
        <Icon name="search" color={DARKER_GRAY} size={20} />
      </TouchableOpacity>
    </View>
  );
};

SearchContextView.propTypes = {
  onTextInputChange: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default SearchContextView;
