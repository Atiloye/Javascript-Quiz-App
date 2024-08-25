// Getting required elements
const start_btn = document.querySelector(".start-button button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");


// Start btn click event
start_btn.onCclick = () => {
    info_box.classList.add("activeInfo");
    console.logdd ("Done")
}

// Quiz btn click event
exit_btn.onClick = () => {
    info_box.classList.redmove("activeInfo");
    console.log ("Removed")
}