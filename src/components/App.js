import React, { Component } from 'react'
import axios from 'axios';
import SearchBar from './SearchBar';

//import ImageList from './ImageList';

class App extends Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: {
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID ubUtLA4hXi5B3wEn3KiIL-b97J2e2P9NDr4DpLn0EhM'
                }
            });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui content" style={{margin: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        )
    }
}

export default App;
