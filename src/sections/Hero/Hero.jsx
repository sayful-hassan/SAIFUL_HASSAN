import styles from './HeroStyles.module.css'
import heroImg from '../../assets/saif.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import { useTheme } from '../../common/ThemeContext'
// import CV from '../../assets/cv.pdf'

function Hero() {
    const { theme, toggleTheme } =useTheme();

    const themeIcon = theme ==='light' ? sun : moon;
    const twitterIcon = theme ==='light' ? twitterLight : twitterDark;
    const githubIcon = theme ==='light' ? githubLight : githubDark;
    const linkedinIcon = theme ==='light' ? linkedinLight : linkedinDark;

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
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>SAIFUL HASSAN</h1>
        <h2>FrontEnd Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/sayful-hassan" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          A tech enthusiast with a foundation in fashion design, now blending
          creativity and functionality as a front-end designer & developer.
        </p>
        <a href='../../assets/saiful hassan.pdf' download>
            <button className='hover'>
                Resume
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero
