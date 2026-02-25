import React from 'react';

function Projects() {
  const projects = [
    { title: 'Dakila', description: 'Riot sa Jerome Agdao', link: '#' },
    { title: 'Love Story', description: 'What if we kiss at Milan Buhangin', link: '#' },
    { title: 'Deym SOn', description: 'Kinsay mangayo ug electricfan', link: '#' },
  ];

  return (
    <section id="projects" style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      <h2>Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '20px', width: '250px', borderRadius: '8px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
