'use client';
import { useEffect, useState } from 'react';

const SkillSection = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/api/skills')
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);

  return (
    <div className="pt-5 mt-14" id="skills-container">
      <div className="container-marginal flex w-full flex-wrap gap-4 items-center justify-around">
        {/* {skills.map((skill, index) => (
          <div key={index} className="skill-tab">
            <div className="skill-image">
              <img src={skill.image} alt={skill.title} width={130} height={130} />
            </div>
            <div className="skill-title text-center mt-2">{skill.title}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SkillSection;
