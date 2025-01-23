import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/netflix.jpg'
import freshBurger from '../../assets/olx3.jpg'
import hipsster from '../../assets/pinterest.png'
import fitlift from '../../assets/notion 1.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={viberr} 
          link="https://github.com/sayful-hassan/Netflix"
          h3="Net Flix"
          p="Streaming App"
        />
        <ProjectCard 
          src={freshBurger} 
          link=""
          h3="OLX"
          p="Buy & Sell everything"
        />
         <ProjectCard 
          src={hipsster} 
          link=""
          h3="Pinterest"
          p="Inspire Creativity"
        />
         <ProjectCard 
          src={fitlift} 
          link=""
          h3="Notion"
          p="Complete journal"
        />

      </div>
    </section>
  )
}

export default Projects
