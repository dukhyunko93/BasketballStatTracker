import { render, screen } from "@testing-library/react";
import App from "../App";

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Home Page Testing", () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  test("renders initial input form", () => {
    expect(wrapper.find('InputForm'));
  });
});
