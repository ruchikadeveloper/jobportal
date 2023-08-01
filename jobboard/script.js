$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll>150){
            $(".navbar").css("background","#222");
            $(".navbar").css("box-shadow","rgba(0,0,0,0.1) 0px 4px 12px");
        }
        else{
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shadow","none");
        }
    })
});



//scrolling
var navbarHeight = $(".navbar").outHeight();

$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html.body").animate({
        scrollTop:$(targetHref).offset().top-navbarHeight

}, 1000)
    e.preventDefault();

});



















// Function to open signup modal
function openSignupModal() {
    var modal = document.getElementById("signupModal");
    modal.style.display = "block";
}

// Function to close signup modal
function closeSignupModal() {
    var modal = document.getElementById("signupModal");
    modal.style.display = "none";
}

// Function to open login modal
function openLoginModal() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "block";
}

// Function to close login modal
function closeLoginModal() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "none";
}

// Function to handle signup form submission
function handleSignupFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;
    var phone = document.getElementById("signupPhoneNumber").value;
    var dob = document.getElementById("signupDOB").value;

    // Perform basic form validation (you can add more validation as needed)
    if (!username || !email || !password || !phone || !dob) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Show a success message (in a real app, you would send data to the server here)
    alert("Signup successful! Welcome, " + username + "!");
    closeSignupModal();

    // Clear the form fields (optional, you can remove this if you don't want to clear the form)
    document.getElementById("signupUsername").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPassword").value = "";
    document.getElementById("signupPhoneNumber").value = "";
    document.getElementById("signupDOB").value = "";
}

// Function to handle login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Perform basic form validation (you can add more validation as needed)
    if (!email || !password) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Show a success message (in a real app, you would send data to the server here)
    alert("Login successful! Welcome back!");
    closeLoginModal();

    // Clear the form fields (optional, you can remove this if you don't want to clear the form)
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
}

// Add event listeners to the signup and login forms
var signupForm = document.getElementById("signupForm");
var loginForm = document.getElementById("loginForm");
signupForm.addEventListener("submit", handleSignupFormSubmit);
loginForm.addEventListener("submit", handleLoginFormSubmit);







// Function to handle search
function handleSearch(event) {
    // Check if the "Enter" key is pressed (key code 13)
    if (event.keyCode === 13) {
        // Get the search input value
        var searchInput = document.querySelector(".search-input").value;

        // Perform the search logic here (for demonstration purposes, we'll just show an alert with the search query)
        if (searchInput.trim() === "") {
            alert("Please enter a search keyword.");
            return;
        } else {
            alert("Performing search for: " + searchInput);
            // You can add the actual search logic here, such as making an API call or filtering results on the page.
        }
    }
}

// Add event listener to the search input field for the "keydown" event
var searchInputField = document.querySelector(".search-input");
searchInputField.addEventListener("keydown", handleSearch);

































