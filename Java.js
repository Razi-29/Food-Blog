      function signUp() {
            let firstname = prompt("What is your first name?");
            alert("👋🏼 " + firstname + "!")
            let email = prompt("what is your email?");
            let country = prompt("What country are you from?");
            country = country.toLowerCase().trim();
            if (country === "france") {
                let page = document.querySelector("body");
                page.innerHTML = "Bonjour 👋🏼" + firstname + "!" + " Thank you joining our newsletter!" + "<br>" + "An email was sent to " + email
            } else {
                if (country !== "france") {
                    let page = document.querySelector("body");
                    page.innerHTML = "Thank you " + firstname + "!" + " Thank you joining our newsletter!" + "<br>" + "An email was sent to " + email
                }
            }

        }
        let signupButton = document.querySelector("button");
        signupButton.addEventListener("click", signUp);