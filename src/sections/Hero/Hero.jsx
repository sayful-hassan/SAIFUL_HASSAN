import styles from './HeroStyles.module.css'
import heroImg from '../../assets/saiful.JPG'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
// import CV from '../../assets/cv.pdf'

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of Saiful Hassan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>SAIFUL HASSAN</h1>
        <h2>FrontEnd Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
          A tech enthusiast with a foundation in fashion design, now blending
          creativity and functionality as a front-end designer & developer.
        </p>
        <a href='' download>
            <button className='hover'>
                Resume
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero
