import React from "react";
import { One } from "./components/One";
import { Two } from "./components/Two";
import { Three } from "./components/Three";

const TextContext = React.createContext();

class ContextPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  handleChange(event) {
    this.setState({ number: event.target.value });
  }

  render() {
    return (
      <>
        <h3>Введите число:</h3>
        <input
          type="number"
          value={this.state.number}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <TextContext.Provider value={{ number: this.state.number }}>
          <One>
            <Two>
              <Three>
                <TextContext.Consumer>{({ number }) => <h1>число полученное из контекста: {number}</h1>}</TextContext.Consumer>
              </Three>
            </Two>
          </One>
        </TextContext.Provider>
      </>
    );
  }
}

export { ContextPage };
