import Autocomplete from 'react-autocomplete';
import React from 'react';

class SearchBar extends React.Component {
    constructor (props) {
    super(props)
    this.state = {
        value: '',
      }
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value})
        this.props.handleSearchChange(e.target.value)
    }
    
    render() {
    //no drop down showing when input has no value.
    var searchData = [];
    if (this.state.value !== '') {
      searchData = this.props.data;
    } else {
      searchData = [];
    }

      return (
        <Autocomplete
          items={searchData}
          shouldItemRender={(item, value) => item.attributes.business_name.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item.attributes.business_name}
          renderItem={(item, highlighted) =>
            <div key={item.id}>
              {item.attributes.business_name}
            </div>
          }
          value={this.state.value}
          onChange={this.handleChange}
        />
      )
    }
  }

  export default SearchBar;