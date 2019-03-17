import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { GRAY_COLOR } from 'src/Constants';
import * as styles from './Styles'



/**
 * 
 * @name SearchContextView 
 * @desc The view layer for users to search
 * @param {any} props 
 * @returns {func} The Search React Component
 */
const SearchContextView = (props) => {
    return (
        <View style={styles.SearchContainerStyle}> 
            <TextInput style={styles.TextInputStyle}/>
            <TouchableOpacity style={styles.IconContainerStyle}> 
                <Icon
                  name='search'
                  color={GRAY_COLOR}
                  size={20}
                />
            </TouchableOpacity>
        </View>
    )
}

SearchContextView.propTypes = {
    onTextInputChange: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired
}

export default SearchContextView