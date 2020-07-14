import React from "react";
import { shallow } from "enzyme";
import App from "../src/App";

describe("<App/>", () => {
  it("the component successfully presents the username", () => {
    const component = shallow(<App name="Test Template" />);

    expect(component.find("div").html()).toContain("Test Template");
  });
});
