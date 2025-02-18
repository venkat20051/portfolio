import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { useState } from 'react';

const Tech = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px',
           backdropFilter: 'blur(8px)',
           background: 'rgba(255, 255, 255, 0.3)',
           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
           borderRadius: '10px',
        }}>
          My Skills
        </h2>

        {/* Skills Progress Bars */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>HTML</h4>
            <div style={{ backgroundColor: '#dcdcdc', borderRadius: '10px', height: '15px', width: '100%' }}>
              <div style={{ backgroundColor: '#787878', height: '100%', borderRadius: '10px', width: '90%' }}></div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>CSS</h4>
            <div style={{ backgroundColor: '#dcdcdc', borderRadius: '10px', height: '15px', width: '100%' }}>
              <div style={{ backgroundColor: '#787878', height: '100%', borderRadius: '10px', width: '85%' }}></div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>JavaScript</h4>
            <div style={{ backgroundColor: '#dcdcdc', borderRadius: '10px', height: '15px', width: '100%' }}>
              <div style={{ backgroundColor: '#787878', height: '100%', borderRadius: '10px', width: '80%' }}></div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>React</h4>
            <div style={{ backgroundColor: '#dcdcdc', borderRadius: '10px', height: '15px', width: '100%' }}>
              <div style={{ backgroundColor: '#787878', height: '100%', borderRadius: '10px', width: '85%' }}></div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>Node.js</h4>
            <div style={{ backgroundColor: '#dcdcdc', borderRadius: '10px', height: '15px', width: '100%' }}>
              <div style={{ backgroundColor: '#787878', height: '100%', borderRadius: '10px', width: '75%' }}></div>
            </div>
          </div>
        </div>

        <h3
  style={{
    fontSize: '20px', // Smaller font size for mobile
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    backdropFilter: 'blur(8px)', 
    padding: '10px',
    background: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }}
>
  Programming Languages
</h3>
<div
  style={{
    display: 'flex',
    flexWrap: 'wrap', // Allows wrapping in small screens
    justifyContent: 'center',
    gap: '20px', // Reduced gap for mobile
    padding: '15px', // Smaller padding
  }}
>
  {[
    {
      src: "https://www.freeiconspng.com/uploads/c--logo-icon-0.png",
      alt: "C++"
    },
    {
      src: "https://th.bing.com/th/id/OIP.asy5P05Rv7-zEkUsMC1ehQAAAA?w=280&h=280&rs=1&pid=ImgDetMain",
      alt: "Python"
    },
    {
      src: "https://th.bing.com/th/id/OIP.jzI0f-YL6nO4LwLDGvZHfgHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
      alt: "Java"
    },
    {
      src: "https://www.ingenioempresa.com/wp-content/uploads/2022/09/C-Language.png",
      alt: "C"
    }
  ].map((item, index) => (
    <div key={index} style={{ textAlign: 'center', width: '50px' }}>
      <img
        src={item.src}
        alt={item.alt}
        style={{
          width: '70px', // Slightly smaller images for better fit
          height: '70px',
          objectFit: 'contain',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
      />
    </div>
  ))}
</div>


        {/* Certifications Section */}
        <h3
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop:'20px',
            marginBottom: '20px',
            backdropFilter: 'blur(8px)', // Adds blur effect
            padding: '10px',
            background: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
          }}
        >
          Certifications
        </h3>
        <div
  style={{
    textAlign: 'center',
    backdropFilter: 'blur(10px)', // Adds blur effect to the container
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
  }}
>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    }}
  >
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        padding: '15px',
        width: '250px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <img
        src="https://images.credly.com/size/680x680/images/2210b6fe-0eda-415a-8aba-6c1400566728/ITS-Badges_Java_1200px.png"
        alt="IT Pearson"
        style={{
          width: '50px',
          height: '50px',
          marginBottom: '10px',
          objectFit: 'contain',
        }}
      />
      <p
        style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#333',
        }}
      >
        IT Pearson Java
      </p>
    </div>

    <div
      style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        padding: '15px',
        width: '250px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <img
        src="https://images.credly.com/images/572de0ba-2c59-4816-a59d-b0e1687e45ee/image.png"
        alt="RedHat"
        style={{
          width: '50px',
          height: '50px',
          marginBottom: '10px',
          objectFit: 'contain',
        }}
      />
      <p
        style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#333',
        }}
      >
        RedHat System Administrator
      </p>
    </div>

    <div
      style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        padding: '15px',
        width: '250px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <img
        src="https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png"
        alt="CCNA"
        style={{
          width: '50px',
          height: '50px',
          marginBottom: '10px',
          objectFit: 'contain',
        }}
      />
      <p
        style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#333',
        }}
      >
        CCNA Introduction to Networks
      </p>
    </div>
  </div>
</div>


      </div>
    </>
    // <>
    //   <motion.div variants={textVariant()}>
    //     <p className={styles.sectionSubTextLight}>My skills</p>
    //     <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
    //   </motion.div>

    //   <div className="flex flex-wrap justify-center gap-10 mt-14">
    //     {technologies.map((technology) => (
    //       <div className="w-28 h-28" key={technology.name}>
    //         <BallCanvas icon={technology.icon} />
    //       </div>
    //     ))}
    //   </div>
    // </>
  );
};

export default SectionWrapper(Tech, '');
