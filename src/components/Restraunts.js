import React, { Component } from 'react'

export default class Restraunts extends Component {
    state = {
        resturants: []
    }
    async componentDidMount() {
        const { lat, long } = this.props;
        const url = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&&long=${long} `;
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'user-key': 'ca11f3179ff24e27cd60c149e9ca900c',
                'content-type':'application-json'
            }  
        });
        const resturants = await res.json();
        console.log(resturants);
        await this.setState(resturants);
    }
    render() {
        return (
            <div>
                <h1>Restraunts</h1>
                {this.state.resturants.map((shop, i) => 
                    <div key={i}> {shop.name} </div>
                )}
            </div>
        )
    }
}
