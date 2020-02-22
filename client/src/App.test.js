import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";
import Display from "./components/Display";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Display.js renders without crashing", () => {
  render(<Display />);
});

test("renders without crashing Women World Cup Players!!", () => {
  render(<h1>Women's World Cup Players!!</h1>);
});

test("renders without crashing, </button>", () => {
  render(<button>Display All Players</button>);
});
