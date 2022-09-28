const header = document.getElementById("header-container");
const emergencyTasks = document.querySelector("section.emergency-tasks");
const emergencyTasksTitle = document.querySelectorAll("section.emergency-tasks div h3");
const noEmergencyTasks = document.querySelector("section.no-emergency-tasks");
const noEmergencyTasksTitle = document.querySelectorAll("section.no-emergency-tasks div h3");
const footer = document.querySelector("footer");

header.style.backgroundColor = "#00b069";
emergencyTasks.style.backgroundColor = "#ff9f84";

for(i = 0; i < emergencyTasksTitle.length; i += 1){
    emergencyTasksTitle[i].style.backgroundColor = "#A500F3";
}

noEmergencyTasks.style.backgroundColor = "#F9DB5E";

for(i = 0; i < emergencyTasksTitle.length; i += 1){
    noEmergencyTasksTitle[i].style.backgroundColor = "#232525";
}

footer.style.backgroundColor = "#003533";