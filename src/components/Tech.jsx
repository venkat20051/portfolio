// export default SectionWrapper(Tech, '');
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills, programmingLanguages, certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from './canvas';
// import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
// import { SectionWrapper } from '../hoc';
const Tech = ({ index, title, icon }) => {
  const [animatedLevels, setAnimatedLevels] = useState(
    skills.map(() => 0) // Start with 0% fill
  );

  useEffect(() => {
    let timeouts = skills.map((skill, index) =>
      setTimeout(() => {
        setAnimatedLevels((prevLevels) => {
          const newLevels = [...prevLevels];
          newLevels[index] = skill.percentage;
          return newLevels;
        });
      }, index * 100) // Staggered animation
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <motion.section
      className="py-16"
      variants={fadeIn("up", "spring", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }} // Ensures animation plays when visible
    >

      {/* Skills Section */}
      <motion.div variants={textVariant()}>
        <center>
          <h2 className={styles.sectionHeadTextLight}>Skills</h2></center>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
        {skills.map((skill, index) => {
          const radius = 40;
          const circumference = 2 * Math.PI * radius;
          const progress = (animatedLevels[index] / 100) * circumference;

          return (
            <motion.div
              key={skill.name}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              className="flex flex-col items-center"
            >
              {/* Circular Progress */}
              {/* <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r={radius} stroke="gray" strokeWidth="8" fill="transparent" opacity="0.3" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="white"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  strokeLinecap="round"
                  whileInView={{ strokeDashoffset: circumference - progress }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0.2 }}
                />
                <text x="50" y="50" textAnchor="middle" dy="8" fontSize="18" fill="white" fontWeight="bold">
                  {animatedLevels[index]}%
                </text>
              </svg> */}
              <svg width="100" height="100" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle cx="50" cy="50" r={radius} stroke="gray" strokeWidth="8" fill="transparent" opacity="0.3" />

                {/* Animated Progress Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="white"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  strokeLinecap="round"
                  whileInView={{ strokeDashoffset: circumference - progress }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0.2 }}
                />

                {/* Show Tick Mark When 100% */}
                {animatedLevels[index] === 100 && (
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fontSize="30"
                    fill="white"
                    fontWeight="bold"
                    color="red"
                  >
                    ✔️
                  </text>
                )}
              </svg>

              <p className="text-white mt-2 text-center">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Programming Languages */}
      <motion.div variants={textVariant()} style={{ marginTop: "50px" }}>
        {/* <p className={styles.sectionSubTextLight}>My skills</p> */}
        <center><h2 className={styles.sectionHeadTextLight}>Programming Languages</h2></center>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div variants={textVariant()} className="text-center mt-16 mb-10">
        <h2 className={styles.sectionHeadTextLight}>Certifications</h2>
      </motion.div>

      {/* Certification Cards Container */}

      <center>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center items-center gap-8 px-4 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="relative bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl w-[250px] sm:w-[300px] flex flex-col items-center"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                {/* Title */}
                <h3 className="text-lg font-bold text-white text-center mt-2">{cert.title}</h3>

                {/* Certification Image */}
                <img src={cert.image} alt={cert.name} className="w-full h-70 object-cover rounded-xl mt-2" />

                {/* Description */}
                <p className="text-gray-300 text-sm mt-2 text-justify">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </center>


    </motion.section>
  );
};

export default Tech;
