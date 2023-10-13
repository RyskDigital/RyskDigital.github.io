async function addBubbles(sourcePath, parentElementId) {
    const response = await fetch(sourcePath);
    const jsonData = await response.json();
    jsonData.forEach((element) => {
        const newDiv = document.createElement("div");
        const newPara = document.createElement("p");
        newPara.innerText = element;
        newDiv.appendChild(newPara);
        newDiv.className = "skill-bubble";
        document.getElementById(parentElementId).appendChild(newDiv);
    });
}

addBubbles("./data/software.json", "software-bubble-container");
addBubbles("./data/skills.json", "skill-bubble-container");

async function addExpCards(sourcePath, parentElementId) {
    const response = await fetch(sourcePath);
    const jsonData = await response.json();

    function processExperienceData(jsonObject) {
        const expCardDiv = document.createElement("div");
        expCardDiv.className = "exp-card";

        // Populate job info
        const jobInfoDiv = document.createElement("div");
        jobInfoDiv.className = "job-info";
        const title = document.createElement("h5");
        title.innerHTML = jsonObject["title"];
        const dates = document.createElement("p");
        dates.innerHTML = jsonObject["dates"];
        const company = document.createElement("h6");
        company.innerHTML = jsonObject["company"];
        const location = document.createElement("p");
        location.innerHTML = jsonObject["location"];
        const jobInfoArray = [title, dates, company, location];
        jobInfoArray.forEach((element) => {
            jobInfoDiv.appendChild(element);
        });
        expCardDiv.appendChild(jobInfoDiv);

        // Populate role description
        const roleDiv = document.createElement("div");
        const role = document.createElement("p");
        role.className = "highlight-text";
        role.innerHTML = "Role:";
        const description = document.createElement("p");
        description.className = "exp-description";
        description.innerHTML = jsonObject["description"];
        const roleArray = [role, description];
        roleArray.forEach((element) => {
            roleDiv.appendChild(element);
        });
        expCardDiv.appendChild(roleDiv);

        document.getElementById(parentElementId).appendChild(expCardDiv);
    }

    jsonData.forEach(processExperienceData);
}

addExpCards("./data/experience.json", "exp-card-container");
