// Profile
fetch('content/profile.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('tagline').textContent = data.tagline;
    document.getElementById('about').textContent = data.about;
    document.getElementById('email').textContent = data.email;
  });

// Skills
fetch('content/skills.json')
  .then(res => res.json())
  .then(skills => {
    const ul = document.getElementById('skills');
    skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      ul.appendChild(li);
    });
  });

// Projects & Labs
fetch('content/projects.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('projects-list');

    // Job Simulations
    if(data.jobSimulations) {
      const simHeader = document.createElement('h3');
      simHeader.textContent = "Job Simulations";
      container.appendChild(simHeader);

      data.jobSimulations.forEach(item => {
        const div = document.createElement('div');
        div.className = 'project';
        div.innerHTML = `
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <p><strong>Tools:</strong> ${item.tools}</p>
          ${item.certificate ? `<p><a href="${item.certificate}" target="_blank">View Certificate</a></p>` : ''}
        `;
        container.appendChild(div);
      });
    }

    // Labs
    if(data.labs) {
      const labHeader = document.createElement('h3');
      labHeader.textContent = "Labs";
      container.appendChild(labHeader);

      data.labs.forEach(item => {
        const div = document.createElement('div');
        div.className = 'project';
        div.innerHTML = `
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <p><strong>Tools:</strong> ${item.tools}</p>
        `;
        container.appendChild(div);
      });
    }
  });

// Certifications
fetch('content/certifications.json')
  .then(res => res.json())
  .then(certs => {
    const container = document.getElementById('certifications-list');
    certs.forEach(cert => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${cert.title}</strong> <a href="${cert.link}" target="_blank" class="btn">View Certificate</a>`;
      container.appendChild(li);
    });
  });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

