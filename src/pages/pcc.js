import React from 'react';

const thing = {
  title: 'Pastoral Counseling Center',
  github: null,
  demo: 'https://pcc-test.netlify.com/',
  description:
    'A website made for a local non-profit counseling center in Flushing , New York',
  details: [
    'Built on GatsbyJS framework',
    "Built an email mailer using Ruby's Action Mailer",
    'Created using SCSS file to specifically apply CSS properties',
  ],
};

function mapProps(obj) {
  obj.values(item => {
    return item;
  });
}

const PccPage = () => (
  <div
    style={{
      margin: 'auto',
      width: '100%',
      textAlign: 'center',
    }}
  >
    App Info below: {mapProps(thing)}
  </div>
);

export default PccPage;
