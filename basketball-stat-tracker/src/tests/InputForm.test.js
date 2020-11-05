import { render, screen } from "@testing-library/react";
import Input from "../Container/InputForm";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Initial input form testing", () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  test("renders home page", () => {
    expect(wrapper.find("h1").text()).toContain("Welcome to Free Basketball Stat Tracker");
  });

  test("render a submit button", () => {
    expect(wrapper.find("#submit-btn").text()).toBe("Submit");
  });
});