    // Register //
const auth = firebase.auth();
var user = auth.currentUser;

function Register(){
    var username = document.getElementById("usernameField").value;
    var password = document.getElementById("passField").value;
    auth.createUserWithUsernameAndPassword(username, password)
    .then ((userCredential) => {
            user = userCredential.user;
            console.log("Successfully Register");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error " + errorCode + " : " + errorMessage);
        });
    }
/*
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
        */