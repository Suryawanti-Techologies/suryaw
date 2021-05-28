let sideNav = document.getElementsByClassName("sideNavLink");
sideNavActive();

function sideNavActive() {
    setTimeout(function () {
        $(".sideNavLink").each(function (index) {
            $(this).removeClass("active");
        });
        switch (window.location.hash) {
            case '#DetailedDesign&Engineering':
                sideNav[0].classList.add("active");
                break;
            case '#SolarSiteSurvey':
                sideNav[1].classList.add("active");
                break;
            case '#Installation&Commissioning':
                sideNav[2].classList.add("active");
                break;
            case '#OwnersEngineering':
                sideNav[3].classList.add("active");
                break;
            case '#SolarPlantAudit':
                sideNav[4].classList.add("active");
                break;
            default:
                sideNav[0].classList.add("active");
                break;
        }
    }, 100);
}