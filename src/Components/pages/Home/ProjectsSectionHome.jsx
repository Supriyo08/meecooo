import React, { useState } from 'react';
import styled from 'styled-components';
import Project1 from '../../../assets/RanvitAfroFoodP2.jpg'; // Replace with actual paths
import Project2 from '../../../assets/RhinoP1.jpg';
import Project3 from '../../../assets/PalashBariP1.jpg';
import Project4 from '../../../assets/PalashBariP2.jpg';


const projects = [
  { id: 1, src: Project1, title: 'Ranvit Afro Food LLP project 2' },
  { id: 2, src: Project2, title: 'Rhino park project' },
  { id: 3, src: Project3, title: 'Palash bari project' },
  { id: 4, src: Project4, title: 'Palash bari project2' },

];

const scaleUp = `
  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

const scaleDown = `
  @keyframes scaleDown {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ProjectSectionContainer = styled.div`
  position: relative;
  padding: 20px;
  overflow-x: auto;
  display: flex;
  gap: 20px;
  scroll-behavior: smooth;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ProjectCard = styled.div`
  display: inline-block;
  width: ${({ isActive }) => (isActive ? '300px' : '200px')};
  height: ${({ isActive }) => (isActive ? '200px' : '150px')};
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid transparent;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    animation: ${({ isActive }) => isActive ? scaleUp : scaleDown} 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 100px;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ isActive }) => (isActive ? '#000000' : '#ffffff')};
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const ProjectsSectionHome = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <ProjectSectionContainer>
        <h1 >
            Our Projects
        </h1>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          isActive={activeProject === project.id}
          onClick={() => setActiveProject(project.id)}
        >
          <img src={project.src} alt={project.title} />
          <Title isActive={activeProject === project.id}>{project.title}</Title>
        </ProjectCard>
      ))}
    </ProjectSectionContainer>
  );
};

export default ProjectsSectionHome;
