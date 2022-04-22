    // Login //
const firestore = firebase.firestore();
var user = auth.currentUser;

let Login_Button = document.getElementById("Logbtn");
Login_Button.addEventListener("click",Login);

function Login(){
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passwordField").value;

    auth.signInWithEmailAndPassword(email, password)
        .then ((userCredential) => {
                user = userCredential.user;
                console.log("Successfully Sign In");
                console.log("UID :"+ user.uid);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error " + errorCode + " : " + errorMessage);
            });
        }