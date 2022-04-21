    // Register //
const auth = firebase.auth();
var user = auth.currentUser;

let Register_button = document.getElementById("Regbtn");
Register_button.addEventListener("click",Register);

function Register(){
    var username = document.getElementById("usernameField").value;
    var password = document.getElementById("passwordField").value;

    auth.createUserWithUsernameAndPassword(username, password)
        .then ((userCredential) => {
                user = userCredential.user;
                console.log("Successfully Registered with ("+ user.username +")");
                console.log("Successfully Register");
                console.log("UID : "+ user.uid);

                firestore.collection("User").doc(usernameField.value).collection("Infomation").doc("userLogin").set({
                    Username : usernameField.value,
                    Password : passwordField.value,
                    UID      : user.uid
                })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error " + errorCode + " : " + errorMessage);
            });
        }