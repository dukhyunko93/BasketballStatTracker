import { render, screen } from "@testing-library/react";
import AwayTeam from "../component/AwayTeamForm";

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Away Team Roster Testing", () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<AwayTeam />);
  })
  test("renders Away page", () => {
    expect(wrapper.find('h2').text()).toContain("Away Team Roster");
  });
});
