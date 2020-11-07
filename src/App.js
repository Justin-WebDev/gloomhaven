
import React from "react";
import Items from "./components/items";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Items />
      </div>
    );
  }
}

export default App;
