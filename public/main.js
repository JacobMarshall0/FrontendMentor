const solutionsList = document.getElementById("solutions-grid")
const WIPheader = document.getElementById("WIP-h3")
const WIPList = document.getElementById("WIP")

fetch("./public/frontendmentor.json")
.then((response) => response.json())
.then(json => {

    WIPCounter = 0;

    Object.entries(json.problems).forEach(problem => {
        let problemData = problem[1]
        
        let title = problemData.title;
        let difficulty = problemData.difficulty;
        let difficultyLevel = problemData.difficultyLevel;
        let directory = problemData.directory;
        let challengeURL = problemData.challengeURL;
        let WIPstatus = problemData.WIP;

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
        
        (WIPstatus) ? WIPList.appendChild(item) : solutionsList.appendChild(item);
        
        if (WIPstatus == true) {
            WIPCounter += 1;
        }
    });

    if (WIPCounter > 0) {
        WIPheader.innerText = "Works in Progress:"
    }
})
// Should probably add a .catch


