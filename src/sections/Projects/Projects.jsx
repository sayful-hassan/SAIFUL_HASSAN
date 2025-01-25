import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/netflix.jpg'
import freshBurger from '../../assets/01-01-25.png'
import hipsster from '../../assets/EDIT.png'
import fitlift from '../../assets/Flux_Dev_A_sleek_modern_3D_rendered_logo_for_a_professional_sh_1.jpeg'
import ProjectCard from '../../common/ProjectCard'

function projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={viberr} 
          link="https://github.com/sayful-hassan/Netflix"
          h3="Net Flix"
          // p="Streaming App"
        />
        <ProjectCard 
          src={freshBurger} 
          link="https://github.com/sayful-hassan/ART-GALLERY"
          h3="ART GALLERY"
          // p="Buy & Sell everything"
        />
         <ProjectCard 
          src={hipsster} 
          link="https://github.com/sayful-hassan/SAY--fmodels"
          h3="MODELING AGENCY"
          // p="Inspire Creativity"
        />
         <ProjectCard 
          src={fitlift} 
          link="https://github.com/sayful-hassan/SHOPPING-CART"
          h3="SHOPPING CART"
          // p="Complete journal"
        />

      </div>
    </section>
  )
}

export default projects
