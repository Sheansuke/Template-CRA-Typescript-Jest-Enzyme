import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import App from "../components/App/App";

describe("<App />", () => {
  test("counter", () => {
    const component = mount(<App />);
    const button = component.find("button").first();
    button.simulate("click");
    expect(toJson(component)).toMatchSnapshot();
    expect(component.find("div").text()).toEqual("1");
  });
});
