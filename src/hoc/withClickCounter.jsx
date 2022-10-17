import React from "react";

const withClickCounter = (WrappedComponent) => {
  class ClickCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { clicks: 0 };
    }

    handleClick = () => {
      this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
    };

    render() {
      return (
        <div onClick={this.handleClick}>
          <h2>Колличество нажатий: {this.state.clicks}</h2>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  return ClickCounter;
};

export { withClickCounter };
