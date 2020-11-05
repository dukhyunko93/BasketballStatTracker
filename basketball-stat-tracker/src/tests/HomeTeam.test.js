import { render, screen } from "@testing-library/react";
import HomeTeam from "../Container/HomeTeam";
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
    expect(wrapper.find('h1').text()).toContain("Home Team Roster");
  });

  test("render home team name", () => {
    wrapper.find("#home-team").simulate('change', {target: {name: "homeTeam", value:"StrawHats"}})
    expect(wrapper.find("#home-team").props().value).toBe("StrawHats")
  })

  test("add player button", () => {
    wrapper.find("#add-player").simulate("click")
    expect(wrapper.state("homeTeamPlayers").length).toBe(1)
    expect(wrapper.state("playerComponenet").length).toBe(1)
  })
  
});
