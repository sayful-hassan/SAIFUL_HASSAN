import styles from './ProjectsStyles.module.css'
import netflix from '../../assets/netflix.jpg'
import artGallery from '../../assets/01-01-25.png'
import fmodels from '../../assets/About page (1).png'
import sayfStore from '../../assets/Flux_Dev_A_sleek_modern_3D_rendered_logo_for_a_professional_sh_1.jpeg'
import ProjectCard from '../../common/ProjectCard'
import Scalnova from '../../assets/Scalnova1.jpg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
          <ProjectCard 
           src={Scalnova} 
           link="https://github.com/sayful-hassan/Scalnova"
           h3="SCALNOVA"
         />
        <ProjectCard 
          src={artGallery} 
          link="https://github.com/sayful-hassan/ART-GALLERY"
          h3="ART GALLERY"
        />
         <ProjectCard 
          src={fmodels} 
          link="https://github.com/sayful-hassan/SAY--fmodels"
          h3="MODELING AGENCY"
        />
         <ProjectCard 
          src={sayfStore} 
          link="https://github.com/sayful-hassan/SAYF"
          h3="SHOPPING CART"
        />
        <ProjectCard 
          src={netflix} 
          link="https://github.com/sayful-hassan/Netflix"
          h3="Net Flix"
        />

      </div>
    </section>
  )
}

export default Projects
