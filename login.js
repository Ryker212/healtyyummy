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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const CloudDB = db.collection("user")

async function AddDocument_CustomID(){
    CloudDB.document("User").set({
        Username : UsernameBox.value,
        Password : PasswordBox.value
    })
    .then(() => {
        console.log("Data saved")
        alert("Successfully")
      }).catch((error) => {
        console.log(error)
      })
}