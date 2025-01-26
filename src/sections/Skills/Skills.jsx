import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill='HTML'/>
           <SkillList src={checkMarkIcon} skill='CSS'/>
           <SkillList src={checkMarkIcon} skill='JAVASCRIPT'/>
           <SkillList src={checkMarkIcon} skill='BOOTSTRAP'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill='REACT'/>
           <SkillList src={checkMarkIcon} skill='NODE'/>
           <SkillList src={checkMarkIcon} skill='MONGODB'/>
           <SkillList src={checkMarkIcon} skill='EXPRESS'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill='GIT'/>
           <SkillList src={checkMarkIcon} skill='HANDLEBARS'/>
           <SkillList src={checkMarkIcon} skill='PHOTOSHOP'/>
           <SkillList src={checkMarkIcon} skill='ILLUSTRATOR'/>
           <SkillList src={checkMarkIcon} skill='FIREBASE'/>
        </div>
        <hr/>

    </section>
  )
}

export default Skills
