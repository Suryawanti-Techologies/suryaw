$.getJSON("../projects/projects.json", function (data) {
    let designAndEngineeringContainer = document.getElementById('designAndEngineering');
    let solarSiteSurveyContainer = document.getElementById('solarSiteSurvey');
    let installationAndComissioningContainer = document.getElementById('installationAndComissioning');
    let ownersEngineeringContainer = document.getElementById('ownersEngineering');

    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let row0 = document.createElement('div');
    let row1 = document.createElement('div');
    let row2 = document.createElement('div');
    let row3 = document.createElement('div');
    row0.className = "row";
    row1.className = "row";
    row2.className = "row";
    row3.className = "row";

    let colCount = [0, 0, 0, 0];

    let data1 = [],
        data2 = [];

    for (let i = 0; i < data.projects.length; i++) {
        if (data.projects[i].capacityUnit.toUpperCase().trim() == "MW") {
            data1.push(data.projects[i]);
        } else {
            data2.push(data.projects[i]);
        }
    }

    bubbleSort(data1);
    bubbleSort(data2);
    data.projects = data1.concat(data2);

    for (let i = 0; i < data.projects.length; i++) {
        ul.innerHTML = '';
        let scopeText = ''

        if (data.projects[i].scope.length > 1) {
            for (let j = 0; j < data.projects[i].scope.length; j++) {
                li.innerHTML = data.projects[i].scope[j];
                ul.innerHTML += li.outerHTML;
            }
            scopeText = ul.outerHTML
        } else {
            scopeText = data.projects[i].scope[0];
        }

        cardHtml = `
        <div class="col-10 col-sm-9 col-md-6 col-lg-4 col-xl-4">
            <div class="img-container mt-5">
                <img src="/img/projects/projects/${data.projects[i].imgFile}" alt="">
                <div class="overlay">
                    <div class="overlay-text w-100">
                        <h6 class="text-center">${data.projects[i].capacityValue} ${data.projects[i].capacityUnit} Project - ${data.projects[i].location}</h6>
                        <table>
                            <tr>
                                <td>Capacity:</td>
                                <td>${data.projects[i].capacityValue} ${data.projects[i].capacityUnit} ${data.projects[i].capacitySuffix} </td>
                            </tr>
                            <tr>
                                <td>Location:</td>
                                <td>${data.projects[i].location}</td>
                            </tr>
                            <tr>
                                <td>Scope:</td>
                                <td>${scopeText}</td>
                            </tr>
                            <tr>
                                <td>Year:</td>
                                <td>${data.projects[i].year}</td>
                            </tr>
                            <tr>
                                <td>Client:</td>
                                <td>${data.projects[i].client}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            `

        switch (data.projects[i].category) {
            case "designAndEngineering":
                designAndEngineeringContainer.firstElementChild.innerHTML += cardHtml;
                break;

            case "solarSiteSurvey":
                solarSiteSurveyContainer.firstElementChild.innerHTML += cardHtml;
                break;

            case "installationAndComissioning":
                installationAndComissioningContainer.firstElementChild.innerHTML += cardHtml;
                break;

            case "ownersEngineering":
                ownersEngineeringContainer.firstElementChild.innerHTML += cardHtml;
                break;

            default:
                break;
        }



    }
});

function bubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].capacityValue < arr[j + 1].capacityValue) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}