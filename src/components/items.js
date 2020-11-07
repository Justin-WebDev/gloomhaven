import React from 'react';
import axios from 'axios';
import Item from './item';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  getItems() {
    axios.get('/items')
      .then(data => {
          this.setState({ items: [...this.state.items, ...data.data] });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        <button type="button" onClick={this.getItems.bind(this)}>CLICK ME</button>
        <div>
          {this.state.items.map(item => Item(item.imageUrl))}
        </div>
      </div>
    )
  }
}
export default Items;