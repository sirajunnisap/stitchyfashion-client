function generateCV() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const universities = document.querySelectorAll('#university');
    const majors = document.querySelectorAll('#major');
    const graduationYears = document.querySelectorAll('#graduation-year');
    const companies = document.querySelectorAll('#company');
    const positions = document.querySelectorAll('#position');
    const employmentYears = document.querySelectorAll('#employment-year');
    const skills = document.querySelectorAll('#skill');
    const interests = document.querySelectorAll('#interest');
    // Create the CV content dynamically
    let cvContent = `
              <h2 class="section-header">Personal Information</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
          `;
    // Add Education section
    cvContent += `<h2 class="section-header">Education</h2>`;
    for (let i = 0; i < universities.length; i++) {
      const university = universities[i].value;
      const major = majors[i].value;
      const graduationYear = graduationYears[i].value;
      cvContent += `
                  <div class="dynamic-field">
                      <p><strong>University:</strong> ${university}</p>
                      <p><strong>Major:</strong> ${major}</p>
                      <p><strong>Graduation Year:</strong> ${graduationYear}</p>
                  </div>
              `;
    }
    // Add Work Experience section
    cvContent += `<h2 class="section-header">Work Experience</h2>`;
    for (let i = 0; i < companies.length; i++) {
      const company = companies[i].value;
      const position = positions[i].value;
      const employmentYear = employmentYears[i].value;
      cvContent += `
                  <div class="dynamic-field">
                      <p><strong>Company:</strong> ${company}</p>
                      <p><strong>Position:</strong> ${position}</p>
                      <p><strong>Employment Year:</strong> ${employmentYear}</p>
                  </div>
              `;
    }
    // Add Skills section
    cvContent += `<h2 class="section-header">Skills</h2>`;
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i].value;
      cvContent += `
                  <div class="dynamic-field">
                      <p><strong>Skill:</strong> ${skill}</p>
                  </div>
              `;
    }
    // Add Interests section
    cvContent += `<h2 class="section-header">Interests</h2>`;
    for (let i = 0; i < interests.length; i++) {
      const interest = interests[i].value;
      cvContent += `
                  <div class="dynamic-field">
                      <p><strong>Interest:</strong> ${interest}</p>
                  </div>
              `;
    }
    // Render the CV content to the page
    const cvContainer = document.createElement('div');
    cvContainer.classList.add('cv-container');
    cvContainer.innerHTML = cvContent;
    // Clear any previous CV content and append the new one
    const oldCvContainer = document.querySelector('.cv-container');
    if (oldCvContainer) {
      oldCvContainer.remove();
    }
    document.body.appendChild(cvContainer);
  }

  function addField(sectionId) {
    const section = document.getElementById(sectionId);
    const field = document.createElement('div');
    field.classList.add('dynamic-field');
    switch (sectionId) {
      case 'education-section':
        field.innerHTML = `
                      <div class="form-group">
                          <label for="university">University:</label>
                          <input type="text" id="university" class="form-control" placeholder="XYZ University">
                      </div>
                      <div class="form-group">
                          <label for="major">Major:</label>
                          <input type="text" id="major" class="form-control" placeholder="Computer Science">
                      </div>
                      <div class="form-group">
                          <label for="graduation-year">Graduation Year:</label>
                          <input type="text" id="graduation-year" class="form-control" placeholder="2023">
                      </div>
                      <button class="remove-field-btn" onclick="removeField(this)">Remove</button>
                  `;
        break;
      case 'work-experience-section':
        field.innerHTML = `
                      <div class="form-group">
                          <label for="company">Company:</label>
                          <input type="text" id="company" class="form-control" placeholder="ABC Inc.">
                      </div>
                      <div class="form-group">
                          <label for="position">Position:</label>
                          <input type="text" id="position" class="form-control" placeholder="Software Engineer">
                      </div>
                      <div class="form-group">
                          <label for="employment-year">Employment Year:</label>
                          <input type="text" id="employment-year" class="form-control" placeholder="2019 - 2022">
                      </div>
                      <button class="remove-field-btn" onclick="removeField(this)">Remove</button>
                  `;
        break;
      case 'skills-section':
        field.innerHTML = `
                      <div class="form-group">
                          <label for="skill">Skill:</label>
                          <input type="text" id="skill" class="form-control" placeholder="JavaScript">
                      </div>
                      <button class="remove-field-btn" onclick="removeField(this)">Remove</button>
                  `;
        break;
      case 'interests-section':
        field.innerHTML = `
                      <div class="form-group">
                          <label for="interest">Interest:</label>
                          <input type="text" id="interest" class="form-control" placeholder="Playing Guitar">
                      </div>
                      <button class="remove-field-btn" onclick="removeField(this)">Remove</button>
                  `;
        break;
      default:
        break;
    }
    section.appendChild(field);
  }

  function removeField(button) {
    const field = button.parentElement;
    field.remove();
  }

  function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
  }
export { generateCV, addField, removeField,toggleMenu };