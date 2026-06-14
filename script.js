function careerGuide() {

let skill = document.getElementById("skillInput").value.toLowerCase();

let output = document.getElementById("output");

let careers = "";
let tips = "";

switch(skill){

case "python":

careers = `
<h3>Career Opportunities</h3>
<ul>
<li>Python Developer</li>
<li>AI Engineer</li>
<li>Machine Learning Engineer</li>
<li>Data Scientist</li>
<li>Automation Engineer</li>
</ul>`;

tips = `
<h3>Improve Your Skills</h3>
<ul>
<li>Learn Data Structures & Algorithms</li>
<li>Build Mini Projects</li>
<li>Learn Django & Flask</li>
<li>Practice on HackerRank</li>
<li>Learn Machine Learning</li>
</ul>`;

break;

case "c":

careers = `
<h3>Career Opportunities</h3>
<ul>
<li>Software Developer</li>
<li>Embedded Engineer</li>
<li>System Programmer</li>
<li>Firmware Developer</li>
<li>Cyber Security Analyst</li>
</ul>`;

tips = `
<h3>Improve Your Skills</h3>
<ul>
<li>Master Pointers</li>
<li>Practice Problem Solving</li>
<li>Learn Data Structures</li>
<li>Build Console Projects</li>
<li>Understand Memory Management</li>
</ul>`;

break;

case "java":

careers = `
<h3>Career Opportunities</h3>
<ul>
<li>Java Developer</li>
<li>Android Developer</li>
<li>Backend Developer</li>
<li>Software Engineer</li>
<li>Cloud Developer</li>
</ul>`;

tips = `
<h3>Improve Your Skills</h3>
<ul>
<li>Learn Spring Boot</li>
<li>Build Web Applications</li>
<li>Practice OOP Concepts</li>
<li>Learn Database Management</li>
<li>Create GitHub Projects</li>
</ul>`;

break;

default:

careers = `
<h3>General Career Suggestions</h3>
<ul>
<li>Software Developer</li>
<li>UI/UX Designer</li>
<li>Data Analyst</li>
<li>Cloud Engineer</li>
<li>Digital Marketer</li>
<li>Entrepreneur</li>
</ul>`;

tips = `
<h3>Skill Development Tips</h3>
<ul>
<li>Learn Coding Daily</li>
<li>Complete Certifications</li>
<li>Build Real Projects</li>
<li>Attend Workshops</li>
<li>Create LinkedIn Profile</li>
<li>Contribute to Open Source</li>
<li>Participate in Hackathons</li>
</ul>`;
}

let motivation = [
"Success starts with a single step.",
"Stay consistent and opportunities will come.",
"Your future is created by what you do today.",
"Small improvements every day lead to big results.",
"Believe in yourself and keep learning."
];

let quote = motivation[Math.floor(Math.random()*motivation.length)];

output.innerHTML =
careers +
tips +
"<h3>Motivation</h3><p>"+quote+"</p>";
}