    // Register //
const auth = firebase.auth();
var user = auth.currentUser;

let Register_button = document.getElementById("Regbtn");
Register_button.addEventListener("click",Register);

function Register(){
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passwordField").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then ((userCredential) => {
                user = userCredential.user;
                console.log("Successfully Registered with ("+ user.email +")");
                console.log("Successfully Register");
                console.log("UID : "+ user.uid);

                firestore.collection("User").doc(emailField.value).collection("Infomation").doc("userLogin").set({
                    Email : emailField.value,
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