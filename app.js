// Init Github
const github = new Github;
//Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if (userText !== ''){
        github.getUser(userText)
            .then(data => {
                console.log(data);
                // ui.clearProfiles();
                if (data.profile.message === "Not Found"){
                    // Show Alert
                    ui.showAlert("User not found.","alert alert-danger");
                    ui.clearProfile();
                }
                else {
                    ui.clearAlert();
                    //Show Profiles
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    }
    else {
        //Clear Profiles
        ui.clearProfile();
        ui.clearAlert();
    }
});