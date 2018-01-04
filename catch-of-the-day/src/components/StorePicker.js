import React from 'react';

 // use capital for all component names
class StorePicker extends React.Component {
  // every component needs the render method
  render() {
    return (
      <form className="store-selector">
        { /* Hello this is a comment */}
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit"> Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;
