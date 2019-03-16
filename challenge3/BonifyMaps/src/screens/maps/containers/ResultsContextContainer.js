import React from 'react'
import { View, Text } from 'react-native';
import ResultsContextView from '../components/ResultsContextView';

export default class ResultsContextContainer extends Component {
    render() {
        // TODO: this should take the current context 
        // and a bunch of navigation options
        return (
            <ResultsContextView />
        )
    }
}