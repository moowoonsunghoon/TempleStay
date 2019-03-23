import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
        <div className="section0" ref={this.MyRef} style={{backgroundColor: 'red', height: this.props.height}} onWheel={this.props.WheelPage}>
        </div>
    );
  }
}

export default Header;
