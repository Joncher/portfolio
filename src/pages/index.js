import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/Bar.js';
import ProjectCard from '../components/ProjectCard';

import pccPic from '../assets/images/PCC.png';
import overtrackPic from '../assets/images/Overtrack.png';
import bbbPic from '../assets/images/BBB.png';
import simonggPic from '../assets/images/SimonGG.png';
import profilePic from '../assets/images/profile_pic.png';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>John Oncher</strong>
              <br />
              Full-Stack developer
            </h2>
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
            Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <ProjectCard title="Counseling Center Website" pic={pccPic} />
            </div>
            <div className="col-4 col-12-mobile">
              <ProjectCard title="Overtrack" pic={overtrackPic} />
              <ProjectCard title="Simon.GG" pic={simonggPic} />
            </div>
            <div className="col-4 col-12-mobile">
              <ProjectCard title="Better Bookshelf Brand" pic={bbbPic} />
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
            decided to become a web developer when I discovered that they could
            help me translate my creative skills into tangible solutions.
            Committed and collaborative team player with strong communication
            and interpersonal skills. Adaptable, result-driven individual with
            an ability to handle high stress and complex environments.
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
            free lance projects that
          </p>

          <form method="post" action="#" autoComplete="off">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autocomplete="new-password"
                />
              </div>
              <div className="col-6 col-12-mobile">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  autocomplete="new-password"
                />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>

              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
