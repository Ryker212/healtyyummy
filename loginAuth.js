const auth = firebase.auth();
var user = auth.currentUser;

let Login_Button = document.getElementById("ButID_Login");
Login_Button.addEventListener("click",Login);

function Login(){
    var username = document.getElementById("usernameField").value;
    var password = document.getElementById("passField").value;
    auth.signInWithUsernameAndPassword(username, password)
    .then ((userCredential) => {
            user = userCredential.user;
            console.log("Successfully Sign In");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error " + errorCode + " : " + errorMessage);
        });
    }