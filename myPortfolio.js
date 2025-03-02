// Array of possible skills to add (you can expand this)
const skills = ["JavaScript", "Python", "React", "Node.js", "Git"];
let skillIndex = 0;

// Get DOM elements
const skillsList = document.getElementById("skills-list");
const addSkillButton = document.getElementById("add-skill");

// Add event listener to the button
addSkillButton.addEventListener("click", function() {
    if (skillIndex < skills.length) {
        // Create a new <li> element
        const newSkill = document.createElement("li");
        newSkill.textContent = skills[skillIndex];
        
        // Append it to the skills list
        skillsList.appendChild(newSkill);
        
        // Move to the next skill
        skillIndex++;
        
        // Disable button if all skills are added
        if (skillIndex === skills.length) {
            addSkillButton.textContent = "No More Skills to Add!";
            addSkillButton.disabled = true;
        }
    }
});