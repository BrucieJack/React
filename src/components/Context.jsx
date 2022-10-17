import React from "react";

const TextContext = React.createContext();

const Three = (props) => {
  console.log(`Пропсы компонента 3:`);
  console.log({ props });
  return (
    <>
      <p>Компонент 3</p>
      <TextContext.Consumer>{({ number }) => <h1>число полученное из контекста: {number}</h1>}</TextContext.Consumer>
    </>
  );
};

const Two = (props) => {
  console.log(`Пропсы компонента 2:`);
  console.log({ props });
  return (
    <>
      <p>Компонент 2</p>
      <Three />
    </>
  );
};

const One = (props) => {
  console.log(`Пропсы компонента 1:`);
  console.log({ props });
  return (
    <>
      <p> Компонент 1</p>
      <Two />
    </>
  );
};

class Context extends React.Component {
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
          <One />
        </TextContext.Provider>
      </>
    );
  }
}

export { Context };
