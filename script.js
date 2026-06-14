function suggestCareer() {
    let skill = document.getElementById("skillInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (skill === "python") {
        result.innerHTML = "Career Options: Python Developer, Data Analyst, AI Engineer";
    }
    else if (skill === "c") {
        result.innerHTML = "Career Options: Software Developer, Embedded Systems Engineer";
    }
    else if (skill === "java") {
        result.innerHTML = "Career Options: Java Developer, Backend Developer";
    }
    else if (skill === "communication") {
        result.innerHTML = "Career Options: HR, Marketing, Customer Support";
    }
    else {
        result.innerHTML = "Explore online courses and internships to improve your skills.";
    }
}