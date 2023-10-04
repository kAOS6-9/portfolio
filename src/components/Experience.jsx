import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
  contentStyle={{background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={experience.icon} alt={experience.company_name} className="w-60%] h-[60%] object-contain" />
    </div>
  }>
    <div>
      <h3 className="text-white text-24px font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} flex justify-evenly items-center`}>Digital Alchemist</p>
        <h2 className={`${styles.sectionHeadText} flex justify-evenly items-center`}>Work Experience</h2>
      </motion.div>
      <motion.div variants={textVariant()} className="flex justify-center mt-6">
        <a href="Krunal_Shinde_Resume.pdf" download="Krunal_Shinde_Resume">
          <button className="button1" type="submit">
            <span className="button__text">Resume</span>
            <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
          </button>
        </a>
      </motion.div>
      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
            {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")