import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello,I'm Isaac  <br />
        Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
        I am web developer that have the passion and dedication to learn and build applications.I am confiendent in my skils and all I ask for is a chance to showcase my ability.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Isaac7app'}>More About Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;