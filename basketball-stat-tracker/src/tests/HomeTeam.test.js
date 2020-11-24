import { render, screen } from "@testing-library/react";
import HomeTeam from "../component/HomeTeamForm";
import App from "../App";

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Home Team Roster Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeTeam />);
  })
  test("renders home page", () => {
    expect(wrapper.find('h2').text()).toContain("Home Team Roster");
  });

  test("add player button", () => {
    wrapper.find("#add-player").simulate("click")
    expect(wrapper.state("homeTeamPlayers").length).toBe(1)
    expect(wrapper.state("playerComponent").length).toBe(1)
  })
  
});
