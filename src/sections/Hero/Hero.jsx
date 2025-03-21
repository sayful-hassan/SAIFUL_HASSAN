import styles from './HeroStyles.module.css'
import heroImg from '../../assets/saif.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import behanceLight from '../../assets/Behance-light.svg'
import behanceDark from '../../assets/Behance-dark.svg'
import { useTheme } from '../../common/ThemeContext'
import cv from '../../assets/Saiful-hassan.CV.pdf'

function Hero() {
    const { theme, toggleTheme } =useTheme();

    const themeIcon = theme ==='light' ? sun : moon;
    const twitterIcon = theme ==='light' ? twitterLight : twitterDark;
    const githubIcon = theme ==='light' ? githubLight : githubDark;
    const behanceIcon = theme ==='light' ? behanceDark : behanceLight;

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
        <h2>Full stack Developer & Designer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/sayful-hassan" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.behance.net/saiful_hassan" target="_blank">
            <img src={behanceIcon} alt="Behance icon" />
          </a>
        </span>
        <p className={styles.description}>
          A tech enthusiast with a foundation in fashion design, now blending
          creativity and functionality as a full stack developer & designer.
        </p>
        <a href={cv} download>
            <button className='hover'>
                Resume
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero
