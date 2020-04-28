import React, { Component } from 'react'

class Posts extends Component {
    state = {
        countries: []
    }
    
    componentDidMount() {
        fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then(data => this.setState({countries: data.Countries}));
    }

    render() {
        console.log(this.state.countries);
        const postItems = this.state.countries.map(post => (
            <div key={post.countryCode}>
                <h3>{post.Country}</h3>
                <p>New deaths today: {post.NewDeaths}</p>
                <p>New confirmed cases today: {post.NewConfirmed}</p>
                <p>Total deaths: {post.TotalDeaths}</p>
                <p>Total confirmed: {post.TotalConfirmed}</p>
                <p>New recovered: {post.NewRecovered}</p>
                <p>Total recovered: {post.TotalRecovered}</p>
                <hr></hr>
            </div>
        ));
        return (
            <div>
                <h1>Covid-19 Daily Statistics</h1>
                <p>Use cmd+f to search for a country</p>
                <p>Thanks to 'Coronavirus COVID19 API' for the data</p>
                <hr></hr>
                {postItems}
            </div>
        )
    }
}

export default Posts;