import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Button from '../components/landing/Button';
import RoleCard from '../components/landing/RoleCard';
import Mailchimp from 'react-mailchimp-form';

import participants from '../img/involve_participant.png';
import educator from '../img/involve_educator.png';
import sponsor from '../img/involve_sponsor.png';
import expert from '../img/involve_expert.png';
import icon from '../img/icon.png';

import playbook1 from '../img/involve_playbook.pdf';

import './style.css';

const content = [
  {
    title: "Take part in the challenge",
    txt1: "Participate in a variety of in-person events and create innovative solutions in a team",
    icon1: icon,
    image: participants,
    playbook: playbook1
  },
  {
    title: "Offer your expertise",
    icon1: icon,
    icon2: icon,
    icon3: icon,
    icon4: icon,
    txt1: "Provide Feedback to the innovative teams",
    txt2: "Mentor our teams",
    txt3: "Judge the work",
    txt4: "Provide expertise and resources",
    image: expert,
    playbook: playbook1
  },
  {
    title: "Integrate D4SD into your educational offering",
    icon1: icon,
    icon2: icon,
    txt1: "Offer experiential learning opportunities to your students",
    txt2: "Implement a civic innovation class in your institution",
    image: educator,
    playbook: playbook1
  },
  {
    title: "Sponsor us",
    icon1: icon,
    icon2: icon,
    icon3: icon,
    txt1: "Provide funding and resources for the challenge",
    txt2: "Increase your brand awareness through D4SD events",
    txt3: "Explore business opportunities within the larger challenge",
    image: sponsor,
    playbook: playbook1
  }
]
class Involve extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="involve">
        <Navbar/>
          <br/><br/><br/><br/>
          <h2 className="text-center">Be Part of the Challenge!</h2>
          <br/><br/>
          <div style={{"width":"90%", "marginLeft":"5%"}}>
          <div className="d-flex flex-wrap justify-content-around">
          {content.map(content => (
            <div className="col-xs-3 col-md-3">
              <RoleCard
                title={content.title}
                txt1={content.txt1}
                txt2={content.txt2}
                txt3={content.txt3}
                txt4={content.txt4}
                image={content.image}
                playbook={content.playbook}
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  }
}

export default Involve;
