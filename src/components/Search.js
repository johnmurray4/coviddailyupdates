import React, { Component } from 'react'
import { SearchBar } from 'react-native-elements';

export default class Search extends Component {
    state = {
        search: ''
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <SearchBar
                placeholder="Search a country..."
                onChangeText={this.updateSearch}
                value={search}
            />
        )
    }
}
