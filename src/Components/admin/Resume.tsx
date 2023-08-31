import React from 'react';
import './resume.css'
import { generateCV, addField, removeField } from './cvFunctions';
import Home from './Home';

const Resume: React.FC = () => {
  
  return (

    <div>
      <div className="w-1/5">
        <Home />
      </div>
      <div className='w-4/5' >
      <div className='bg-white'>
      <div >
        <h1 className='text-center bg-white '>
          "From Designer to Mentor:Apply Now to Inspire Future Fashion Creators"
        </h1>
      </div>
     <div className="cv-container">
    <h2 className="section-header">Personal Information</h2>
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" className="form-control" placeholder="John Doe"/>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" className="form-control" placeholder="johndoe@example.com"/>
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" className="form-control" placeholder="123-456-7890"/>
    </div>

    <div id="education-section">
      <h2 className="section-header">Education</h2>
      <div className="dynamic-field">
        <div className="form-group">
          <label htmlFor="university">University:</label>
          <input type="text" id="university" className="form-control" placeholder="XYZ University"/>
        </div>
        <div className="form-group">
          <label htmlFor="major">Major:</label>
          <input type="text" id="major" className="form-control" placeholder="Computer Science"/>
        </div>
        <div className="form-group">
          <label htmlFor="graduation-year">Graduation Year:</label>
          <input type="text" id="graduation-year" className="form-control" placeholder="2023"/>
        </div>
        <button className="remove-field-btn" onClick={() =>removeField(this)}>Remove</button>
      </div>
    </div>

    <div id="work-experience-section">
      <h2 className="section-header">Work Experience</h2>
      <div className="dynamic-field">
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" className="form-control" placeholder="ABC Inc."/>
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" className="form-control" placeholder="Software Engineer"/>
        </div>
        <div className="form-group">
          <label htmlFor="employment-year">Employment Year:</label>
          <input type="text" id="employment-year" className="form-control" placeholder="2019 - 2022"/>
        </div>
        <button className="remove-field-btn" onClick={()=>removeField(this)}>Remove</button>
      </div>
    </div>

    <div id="skills-section">
      <h2 className="section-header">Skills</h2>
      <div className="dynamic-field">
        <div className="form-group">
          <label htmlFor="skill">Skill:</label>
          <input type="text" id="skill" className="form-control" placeholder="JavaScript"/>
        </div>
        <button className="remove-field-btn" onClick={() =>removeField(this)}>Remove</button>
      </div>
    </div>

    <div id="interests-section">
      <h2 className="section-header">Interests</h2>
      <div className="dynamic-field">
        <div className="form-group">
          <label htmlFor="interest">Interest:</label>
          <input type="text" id="interest" className="form-control" placeholder="Playing Guitar"/>
        </div>
        <button className="remove-field-btn" onClick={() =>removeField(this)}>Remove</button>
      </div>
    </div>
    <button className="btn-generate" onClick={generateCV}>Generate CV</button>
        <button className="btn-generate" onClick={() => addField('education-section')}>Add Another Education</button>
        <button className="btn-generate" onClick={() => addField('work-experience-section')}>Add Work Experience</button>
        <button className="btn-generate" onClick={() => addField('skills-section')}>Add Skill</button>
        <button className="btn-generate" onClick={() => addField('interests-section')}>Add Interest</button>
  </div>

      <iframe src="index.html" title="CV Maker" width="100%" height="800px" />
    </div>
      </div>
    </div>
    
  );
};

export default Resume;