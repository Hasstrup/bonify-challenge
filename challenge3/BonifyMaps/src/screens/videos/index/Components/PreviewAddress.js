import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { PreviewAddressStyle as styles } from '../Styles';

 /**
 * @name PreviewAddress
 * @param {any} props
 * @desc Renders the selected location, address to the user
 * @returns {func} React Component
 * 
 */
export const PreviewAddress = (props) => (
    <TouchableOpacity style={styles.topContainer}> 
        <Text style={styles.textContent}> 1, Aminu, Street Surulere</Text>
    </TouchableOpacity>
)

PreviewAddress.propTypes = {
    address: PropTypes.string.isRequired,
    handleButtonPress: PropTypes.func
}
