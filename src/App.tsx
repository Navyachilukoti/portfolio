import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import './App.css'

const AppContainer = styled.div`
  min-height: 100vh;
  background: #0f172a;
  color: #e2e8f0;
  padding: 2rem;
  position: relative;
  overflow-x: hidden;
  font-family: 'Inter', 'SF Mono', 'Fira Code', monospace;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(100, 255, 218, 0.08) 0%, transparent 70%),
      radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    animation: glow 15s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.7; }
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`

const NavLink = styled.a`
  color: #e2e8f0;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const MainContent = styled.main`
  position: relative;
  z-index: 1;
  padding-top: 4rem;
`

const BackgroundGrid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.07;
  background: 
    linear-gradient(90deg, rgba(100, 255, 218, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(100, 255, 218, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  transform: perspective(1000px) rotateX(60deg);
  transform-origin: top;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background: linear-gradient(to bottom,
      rgba(100, 255, 218, 0) 0%,
      rgba(100, 255, 218, 0.1) 50%,
      rgba(100, 255, 218, 0) 100%);
    animation: scan 8s linear infinite;
  }

  @keyframes scan {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }
`

const MatrixRain = styled.div`
  position: fixed;
  color: rgba(100, 255, 218, 0.15);
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap;
  z-index: 0;
  pointer-events: none;
  animation: matrixRain 20s linear infinite;
  opacity: 0.1;

  @keyframes matrixRain {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
`

const TechIcon = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
  animation: float 20s infinite linear;
  filter: blur(1px);

  svg {
    width: 100%;
    height: 100%;
    fill: rgba(100, 255, 218, 0.5);
  }

  @keyframes float {
    0% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 0;
    }
    10% { opacity: 0.15; }
    90% { opacity: 0.15; }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
`

const HexGrid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' stroke='rgba(100, 255, 218, 0.2)' fill='none'/%3E%3C/svg%3E");
  background-size: 60px 60px;
  animation: pulse 10s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.08; }
    50% { opacity: 0.12; }
  }
`

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
`

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #e2e8f0;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #8892b0;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`

const Section = styled.section`
  padding: 6rem 0;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const AboutText = styled.div`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }
`

const EducationCard = styled(motion.div)`
  background: rgba(99, 102, 241, 0.05);
  padding: 2rem;
  border-radius: 12px;
  color: #e2e8f0;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 1.5rem;
`

const EducationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Degree = styled.h4`
  color: #64ffda;
  font-size: 1.2rem;
`

const School = styled.p`
  color: #e2e8f0;
  font-size: 1rem;
`

const Date = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const SkillItem = styled(motion.div)`
  background: rgba(99, 102, 241, 0.05);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  color: #e2e8f0;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  color: rgba(100, 255, 218, 0.8);
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    opacity: 0.8;
  }
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const ProjectCard = styled(motion.div)`
  background: rgba(99, 102, 241, 0.05);
  padding: 2rem;
  border-radius: 12px;
  color: #e2e8f0;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 1rem;
`

const ProjectDescription = styled.p`
  color: #8892b0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
`

const AchievementCard = styled(motion.div)`
  background: rgba(99, 102, 241, 0.05);
  padding: 2rem;
  border-radius: 12px;
  color: #e2e8f0;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`

const AchievementTitle = styled.h3`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 1.5rem;
`

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`

const AchievementItem = styled.li`
  color: #8892b0;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '•';
    color: #64ffda;
    position: absolute;
    left: 0;
  }
`

const CertificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const CertificationCard = styled(motion.div)`
  background: rgba(99, 102, 241, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`

const ContactSection = styled.section`
  padding: 6rem 0;
  text-align: center;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #8892b0;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`

const SocialLink = styled.a`
  color: #64ffda;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #4cd8b2;
  }
`

function App() {
  return (
    <AppContainer>
      <Header>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#achievements">Achievements</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </Header>

      <HexGrid />
      <BackgroundGrid />
      
      {/* Matrix Rain Effect */}
      {[...Array(8)].map((_, i) => (
        <MatrixRain
          key={i}
          style={{
            left: `${i * 12.5}%`,
            animationDelay: `${Math.random() * 20}s`,
          }}
        >
          {Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join(' ')}
        </MatrixRain>
      ))}

      {/* Floating Tech Icons */}
      {[...Array(12)].map((_, i) => (
        <TechIcon
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
          }}
        >
          <svg viewBox="0 0 24 24">
            {i % 4 === 0 && <path d="M12 1.5c-2.363 0-4.5.86-6.161 2.38l-1.346-1.346A.75.75 0 0 0 3 3.5v4a.75.75 0 0 0 .75.75h4a.75.75 0 0 0 .53-1.281L6.927 5.616A6.5 6.5 0 0 1 12 3.5a6.5 6.5 0 1 1-6.5 6.5.75.75 0 0 0-1.5 0A8 8 0 1 0 12 1.5zm-.657 10.907a.75.75 0 0 0-1.061 0l-2.829 2.828a.75.75 0 0 0 1.061 1.061L11 13.81V20a.75.75 0 0 0 1.5 0v-6.19l2.486 2.486a.75.75 0 0 0 1.061-1.061l-2.829-2.828a.75.75 0 0 0-1.061 0z" />}
            {i % 4 === 1 && <path d="M3 3h18v18H3V3zm16.5 1.5H4.5v15h15v-15zM6.75 6.75h10.5v1.5H6.75v-1.5zm0 3h10.5v1.5H6.75v-1.5zm0 3h10.5v1.5H6.75v-1.5z"/>}
            {i % 4 === 2 && <path d="M20.205 7.007c-.213-.21-.687-.363-1.426-.363h-7.38v2.27h4.233c.405 0 .704.09.897.273.21.186.315.45.315.788 0 .34-.106.606-.315.79-.193.183-.492.274-.896.274h-4.234v2.273h4.233c.405 0 .704.088.897.27.21.186.315.45.315.79 0 .34-.106.606-.315.79-.193.183-.492.273-.896.273h-4.234l.002 2.274h7.38c.74 0 1.213-.153 1.426-.362.21-.21.315-.474.315-.79 0-.317-.106-.58-.315-.79z"/>}
            {i % 4 === 3 && <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>}
          </svg>
        </TechIcon>
      ))}

      <MainContent>
        <HeroSection>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Navya Sri Chilukoti
          </Name>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Computer Science Student
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Passionate about creating innovative solutions and exploring the intersection of technology and creativity.
          </Description>
        </HeroSection>

        <Section id="about">
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </SectionTitle>
          <AboutContent>
            <AboutText>
              <p>
                I am a dedicated Computer Science student with a passion for software development and problem-solving. 
                My journey in technology is driven by a desire to create impactful solutions that make a difference.
              </p>
              <p>
                Currently pursuing my degree, I'm actively seeking opportunities to apply my knowledge in real-world projects 
                and contribute to innovative solutions. I'm particularly interested in full-stack development and emerging technologies.
              </p>
            </AboutText>
            <EducationCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <EducationTitle>Education</EducationTitle>
              <EducationDetails>
                <EducationItem>
                  <Degree>Bachelor of Science in Computer Science</Degree>
                  <School>ST. MARTIN'S ENGINEERING COLLEGE, Secunderabad, Telangana</School>
                  <Date>2021 - 2025 | CGPA: 8.0</Date>
                </EducationItem>
                <EducationItem>
                  <Degree>Intermediate</Degree>
                  <School>NARAYANA IIT ACADEMY, Kukatpally, Telangana</School>
                  <Date>2019 - 2021 | Percentage: 93%</Date>
                </EducationItem>
                <EducationItem>
                  <Degree>Secondary Education</Degree>
                  <School>TVR MODEL HIGH SCHOOL, Jeedimetla, Telangana</School>
                  <Date>CGPA: 10</Date>
                </EducationItem>
              </EducationDetails>
            </EducationCard>
          </AboutContent>
        </Section>

        <Section id="skills">
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </SectionTitle>
          <SkillsGrid>
            <SkillItem
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <SkillIcon>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1.5c-2.363 0-4.5.86-6.161 2.38l-1.346-1.346A.75.75 0 0 0 3 3.5v4a.75.75 0 0 0 .75.75h4a.75.75 0 0 0 .53-1.281L6.927 5.616A6.5 6.5 0 0 1 12 3.5a6.5 6.5 0 1 1-6.5 6.5.75.75 0 0 0-1.5 0A8 8 0 1 0 12 1.5zm-.657 10.907a.75.75 0 0 0-1.061 0l-2.829 2.828a.75.75 0 0 0 1.061 1.061L11 13.81V20a.75.75 0 0 0 1.5 0v-6.19l2.486 2.486a.75.75 0 0 0 1.061-1.061l-2.829-2.828a.75.75 0 0 0-1.061 0z" />
                </svg>
              </SkillIcon>
              Programming Languages
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#8892b0' }}>
                Python, Java, JavaScript, TypeScript
              </p>
            </SkillItem>
            <SkillItem
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <SkillIcon>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </SkillIcon>
              Web Development
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#8892b0' }}>
                React, HTML, CSS, Node.js
              </p>
            </SkillItem>
            <SkillItem
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <SkillIcon>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v18H3V3zm16.5 1.5H4.5v15h15v-15zM6.75 6.75h10.5v1.5H6.75v-1.5zm0 3h10.5v1.5H6.75v-1.5zm0 3h10.5v1.5H6.75v-1.5z"/>
                </svg>
              </SkillIcon>
              Database
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#8892b0' }}>
                SQL, MongoDB, PostgreSQL
              </p>
            </SkillItem>
            <SkillItem
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <SkillIcon>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.236 1.82.625 2.625 1.147l.147-.147a3 3 0 0 1 4.243 0 3 3 0 0 1 0 4.243l-.147.147A8.01 8.01 0 0 1 24 13.5v3a3 3 0 0 1-3 3h-.205c-.236.933-.625 1.82-1.147 2.625l.147.147a3 3 0 0 1 0 4.243 3 3 0 0 1-4.243 0l-.147-.147A8.01 8.01 0 0 1 13.5 24h-3a3 3 0 0 1-3-3v-.205a8.01 8.01 0 0 1-2.625-1.147l-.147.147a3 3 0 0 1-4.243 0 3 3 0 0 1 0-4.243l.147-.147A8.01 8.01 0 0 1 0 13.5v-3a3 3 0 0 1 3-3h.205c.236-.933.625-1.82 1.147-2.625l-.147-.147a3 3 0 0 1 0-4.243 3 3 0 0 1 4.243 0l.147.147A8.01 8.01 0 0 1 10.5 0h3a3 3 0 0 1 3 3v.205c.933.236 1.82.625 2.625 1.147l.147-.147a3 3 0 0 1 4.243 0 3 3 0 0 1 0 4.243l-.147.147A8.01 8.01 0 0 1 24 10.5v3a3 3 0 0 1-3 3h-.205a8.01 8.01 0 0 1-1.147 2.625l.147.147a3 3 0 0 1 0 4.243 3 3 0 0 1-4.243 0l-.147-.147A8.01 8.01 0 0 1 13.5 24h-3a3 3 0 0 1-3-3v-.205A8.01 8.01 0 0 1 5.25 19.5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h.205A8.01 8.01 0 0 1 7.5 8.25V5.25zm3 0a1.5 1.5 0 0 0-1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 0-1.5-1.5h-3z"/>
                </svg>
              </SkillIcon>
              Tools & Technologies
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#8892b0' }}>
                Git, Docker, AWS, Agile
              </p>
            </SkillItem>
          </SkillsGrid>
        </Section>

        <Section id="projects">
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
            <a 
              href="https://github.com/Navyachilukoti"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                marginLeft: '1rem',
                fontSize: '1rem',
                color: '#64ffda',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                verticalAlign: 'middle'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>🔗</span> More on GitHub
            </a>
          </SectionTitle>
          <ProjectGrid>
            <ProjectCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectTitle>
                Manufacturing Industry 4.0: Mechanical Fault Classification
                <a 
                  href="https://github.com/Navyachilukoti/Mechanical-faults-ML.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    marginLeft: '1rem', 
                    fontSize: '1rem', 
                    color: '#64ffda',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>🔗</span> GitHub
                </a>
              </ProjectTitle>
              <ProjectDescription>
                Developed an advanced machine learning system for classifying mechanical faults and predicting potential failures in manufacturing equipment. 
                The system integrates real-time monitoring and analytics to improve operational efficiency and reduce maintenance costs.
              </ProjectDescription>
              <TechStack>
                <TechTag>Machine Learning</TechTag>
                <TechTag>Python</TechTag>
                <TechTag>Data Analytics</TechTag>
                <TechTag>Real-time Monitoring</TechTag>
              </TechStack>
            </ProjectCard>

            <ProjectCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProjectTitle>
                AI Fault Detection System for Aircraft Engines
                <a 
                  href="https://github.com/Navyachilukoti/Aircraft-crack-detection.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    marginLeft: '1rem', 
                    fontSize: '1rem', 
                    color: '#64ffda',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>🔗</span> GitHub
                </a>
              </ProjectTitle>
              <ProjectDescription>
                Created an innovative fault detection system for aircraft engines using machine learning and predictive analytics. 
                Implemented neural networks and digital twin technology to create virtual engine replicas for accurate simulations and AI-driven diagnostics.
              </ProjectDescription>
              <TechStack>
                <TechTag>Neural Networks</TechTag>
                <TechTag>Digital Twin</TechTag>
                <TechTag>Predictive Analytics</TechTag>
                <TechTag>Sensor Data Analysis</TechTag>
              </TechStack>
            </ProjectCard>

            <ProjectCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ProjectTitle>
                A Deep Learning Model for Detecting Malicious Activity for Mobile Edge Security
                <a 
                  href="https://github.com/Navyachilukoti/dnn-training-tool.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    marginLeft: '1rem', 
                    fontSize: '1rem', 
                    color: '#64ffda',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>🔗</span> GitHub
                </a>
              </ProjectTitle>
              <ProjectDescription>
                Developed an advanced deep learning model to detect and prevent malicious activities in mobile edge computing environments. 
                The system utilizes neural networks and real-time analysis to enhance mobile security and protect against cyber threats.
              </ProjectDescription>
              <TechStack>
                <TechTag>Deep Learning</TechTag>
                <TechTag>Python</TechTag>
                <TechTag>Neural Networks</TechTag>
                <TechTag>Mobile Security</TechTag>
              </TechStack>
            </ProjectCard>
          </ProjectGrid>
        </Section>

        <Section id="achievements">
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Achievements & Certifications
          </SectionTitle>

          <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AchievementTitle>Achievements</AchievementTitle>
            <AchievementList>
              <AchievementItem>Technical Lead in college coding club named "Code Hoppers Club"</AchievementItem>
              <AchievementItem>Runners-up in "Metaloop" Hackathon organised by "Deeploop Technologies"</AchievementItem>
              <AchievementItem>Participated in "Megathon" organised by IIIT Hyderabad and found a solution for "KonnectNxt"</AchievementItem>
              <AchievementItem>Hosted several events in college and has expertise in Public Speaking</AchievementItem>
            </AchievementList>
          </AchievementCard>

          <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AchievementTitle>Certifications</AchievementTitle>
            <CertificationGrid>
              <CertificationCard
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                CS50: Introduction to Computer Science
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#64ffda' }}>HarvardX</p>
              </CertificationCard>
              <CertificationCard
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                CS50: Web Programming with Python and Javascript
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#64ffda' }}>HarvardX</p>
              </CertificationCard>
              <CertificationCard
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Data Science Micro-Internship
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#64ffda' }}>IBM Skillsbuild CSRBOX</p>
              </CertificationCard>
              <CertificationCard
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Generative AI Micro-Internship
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#64ffda' }}>IBM Skillsbuild CSRBOX</p>
              </CertificationCard>
            </CertificationGrid>
          </AchievementCard>
        </Section>

        <ContactSection id="contact">
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </SectionTitle>
          <ContactInfo>
            <ContactItem>
              <span>📧</span>
              <a href="mailto:chilukotinavyasri@gmail.com" style={{ color: '#64ffda', textDecoration: 'none' }}>
                chilukotinavyasri@gmail.com
              </a>
            </ContactItem>
            <ContactItem>
              <span>📍</span>
              <span>Hyderabad, India</span>
            </ContactItem>
          </ContactInfo>
          <SocialLinks>
            <SocialLink 
              href="https://www.linkedin.com/in/navya-sri-chilukoti-b85a41213" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink 
              href="https://github.com/Navyachilukoti" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </SocialLink>
          </SocialLinks>
        </ContactSection>
      </MainContent>
    </AppContainer>
  );
}

export default App;
