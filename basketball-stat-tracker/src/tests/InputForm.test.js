import { render, screen } from "@testing-library/react";
import NewMatchForm from "../container/NewMatchForm";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Initial input form testing", () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<NewMatchForm />);
  });

  test("render a submit button", () => {
    expect(wrapper.find("#submit-btn").text()).toBe("Submit Teams");
  });
});
