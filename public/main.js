const solutionsList = document.getElementById("solutions-grid")
const WIPheader = document.getElementById("WIP-h3")
const WIPList = document.getElementById("WIP")


// Need to refactor this massively, can half number of lines by using simple if statement for WIP
fetch("./public/frontendmentor.json")
.then((response) => response.json())
.then(json => {
    Object.entries(json.problems).forEach(problem => {
        let problemData = problem[1]
        
        let title = problemData.title;
        let difficulty = problemData.difficulty;
        let difficultyLevel = problemData.difficultyLevel;
        let directory = problemData.directory;
        let challengeURL = problemData.challengeURL;

        let item = document.createElement("div")
        item.innerHTML = `
                <li class="solution-card">
                    <a class="solution-link" href="${directory}">
                        <div class="solution-image">
                            <img src="./${directory}/resources/design/desktop-design.jpg" alt="Image of ${title}">
                        </div>
                        <div class="card-text">
                            <h3 class="title">${title}</h3>
                            <div class="difficulty-icon" id="${difficulty}">
                              <span class="number" id="${difficulty}">${difficultyLevel}</span>
                              <span class="text" id="${difficulty}">${difficulty}</span>
                            </div>
                            <a href="${challengeURL}">Frontend Mentor Challenge</a>
                            <a href="https://github.com/JacobMarshall0/FrontendMentor/tree/master/${directory}">Github Repository</a>
                        </div>
                    </a>
                </li>`;
        solutionsList.appendChild(item)
    });
    
    // This section can be merged into the above, with an if statement and a json attribute for WIP

    if (Object.entries(json.WIP).length > 0) {
        WIPheader.classList.remove("hidden")
    }
    Object.entries(json.WIP).forEach(problem => {
        let problemData = problem[1]
        
        let title = problemData.title;
        let difficulty = problemData.difficulty;
        let difficultyLevel = problemData.difficultyLevel;
        let directory = problemData.directory;
        let challengeURL = problemData.challengeURL;

        let item = document.createElement("div")
        item.innerHTML = `
                <li class="solution-card">
                    <a class="solution-link" href="${directory}">
                        <div class="solution-image">
                            <img src="./${directory}/resources/design/desktop-design.jpg" alt="Image of ${title}">
                        </div>
                        <div class="card-text">
                            <h3 class="title">${title}</h3>
                            <div class="difficulty-icon" id="${difficulty}">
                              <span class="number" id="${difficulty}">${difficultyLevel}</span>
                              <span class="text" id="${difficulty}">${difficulty}</span>
                            </div>
                            <a href="${challengeURL}">Frontend Mentor Challenge</a>
                            <a href="https://github.com/JacobMarshall0/FrontendMentor/tree/master/${directory}">Github Repository</a>
                        </div>
                    </a>
                </li>`;
        WIPList.appendChild(item)
    });
})



