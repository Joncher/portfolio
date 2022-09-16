import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Modal } from 'react-rainbow-components';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/Bar.js';
import ProjectCard from '../components/ProjectCard';

import pccPic from '../assets/images/PCC.png';
import woodhavenSmokePic from '../assets/images/woodhaven-smokeshop';
import bbbPic from '../assets/images/BBB.png';
import simonggPic from '../assets/images/SimonGG.png';
import profilePic from '../assets/images/profile_pic.png';
import sgResourcePic from '../assets/images/sg-resource.png'
import Scroll from '../components/Scroll';
import ProjectInfo from '../components/ProjectInfo';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

function IndexPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');
  function handleProjectClick(props) {
    setIsOpen(!isOpen);
    setActive(<ProjectInfo props={props} />);
  }
  return (
    <Layout>
      <SideBar sections={sections} />

      <div id="main">
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">
                Hi! I'm <strong>John Oncher</strong>
              </h2>
              <h2>I'm a Full Stack Developer using React and Rails</h2>
              <p>Here are my most recent projects.</p>
            </header>

            <footer>
              <Scroll type="id" element={'portfolio'}>
                <a href="#portfolio" className="button">
                  Show me
                </a>
              </Scroll>
            </footer>
          </div>
        </section>

        <section id="portfolio" className="two">
          <div className="container">
            <header>
              <h2>Portfolio</h2>
            </header>

            <p>
              Here are some of my most recent projects. Feel free to click on
              them to get more info.
            </p>

            <div className="row">
              <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)}>
                {active}
              </Modal>
              <div className="col-4 col-12-mobile">
                <ProjectCard
                  title=" Woodhaven Smokeshop"
                  pic={woodhavenSmokePic}
                  github={null}
                  demo="https://woodhaven-smokeshop.netlify.app/"
                  description="  A site built for a client to bring more awareness to their business"
                  details={[
                    "Built on Astro Web Development framework",
                    "Constructed site to highest performance & SEO standards",
                    "Worked with client to provide multiple revisions until contract was completed"
                  ]}
                  onClick={e => handleProjectClick(e)}
                />
              </div>
              <div className="col-4 col-12-mobile">
                <ProjectCard
                  title=" New Life SG Resources Site"
                  pic={sgResourcePic}
                  github={null}
                  demo="https://nlf-sg-resources.netlify.app/blog/"
                  description="  A Blog site that allows users to engage with small group content"
                  details={[
                    'Built on GatsbyJS framework',
                    "Created a user friendly CMS for user to easily add content to site",
                    "Manage videos and other blog resources for client"
                  ]}
                  onClick={e => handleProjectClick(e)}
                />
              </div>
              <div className="col-4 col-12-mobile">
                <ProjectCard
                  title="  Pastoral Counseling Center Website"
                  pic={pccPic}
                  github={null}
                  demo="https://pcc-test.netlify.com/"
                  description="  A website made for a local non-profit counseling center in Flushing,New York"
                  details={[
                    'Built on GatsbyJS framework',
                    "Built an email mailer using Ruby's Action Mailer",
                    'Created using SCSS file to specifically apply CSS property',
                  ]}
                  onClick={e => handleProjectClick(e)}
                />
              </div>
          </div>
          </div>
        </section>


        <section id="about" className="three">
          <div className="container">
            <header>
              <h2>About Me</h2>
            </header>

            <a href="/#" className="image featured">
              <img src={profilePic} alt="" />
            </a>

            <p>
              Full stack web developer with a background in logistics and
              communication. I grew interested in JavaScript and coding and
              decided to become a web developer when I discovered that they
              could help me translate my creative skills into tangible
              solutions. Committed and collaborative team player with strong
              communication and interpersonal skills. Adaptable, result-driven
              individual with an ability to handle high stress and complex
              environments.
            </p>
          </div>
        </section>

        <section id="contact" className="four">
          <div className="container">
            <header>
              <h2>Contact</h2>
            </header>

            <p>
              Feel free to reach out to me if you have any new opportunities or
              free lance projects.
            </p>

            <p>
              You can contact me by email at johnoncher@gmail.com
            </p>
          </div>
        </section>
      </div>

      <PageFooter />
    </Layout>
  );
}

export default IndexPage;
