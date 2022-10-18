import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, color: "red", ref: React.createRef() };
    this.handleReduce = this.handleReduce.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  handleReduce() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  changeColor(color) {
    this.setState({
      color: color,
    });
  }

  handleIncrement() {
    if (this.state.counter !== 3) {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  }

  componentDidMount() {
    alert("Создался!");
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    if (previousState.color !== "green") {
      this.changeColor("green");
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter > 3) {
      return false;
    } else {
      return true;
    }
  }

  getSnapshotBeforeUpdate(previousProps, previousState) {
    return previousState.ref.current;
  }

  render() {
    return (
      <div>
        <h1 ref={this.state.ref} style={{ color: this.state.color }}>
          {this.state.counter}
        </h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleReduce}>-</button>
      </div>
    );
  }
}

export default LifeCycle;
