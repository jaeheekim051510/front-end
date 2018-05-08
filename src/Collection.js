import React from 'react';
import EachData from './EachData'
import SearchBar from './SearchBar'
import axios from 'axios';

class Collection extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [],
            dataDisplay: []
          }
        }

    handleSearchChange = (searchValue) => {
        this.setState({
            dataDisplay: this.state.data.filter(
                values => values.attributes.business_name.toLowerCase().includes(searchValue.toLowerCase())
            )
        })
    }
    
    componentDidMount(){
        axios.get(`http://localhost:1337`)
            .then(res => {
                console.log(JSON.stringify(res));
            const data = res.data.data;
            this.setState({
            data: data,
            dataDisplay:data
            });
        });
    }

    render () {
    return (
        <div id="collection">
            <div className="search-bar">
                Search Business <SearchBar 
                    handleSearchChange={this.handleSearchChange}
                    data={this.state.data} />
            </div>
        <div className="business">
        {this.state.dataDisplay.map(info => 
        <EachData key={info.id} {...info}/>
        )}
        </div>
        </div>
    );
}
}

export default Collection;