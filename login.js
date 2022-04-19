const firebaseConfig = {
    apiKey: "AIzaSyA8EzeDcC1eWSYeoGZRyXpupi5ToZhn1Ew",
    authDomain: "g1-zes.firebaseapp.com",
    projectId: "g1-zes",
    storageBucket: "g1-zes.appspot.com",
    messagingSenderId: "166111315060",
    appId: "1:166111315060:web:3e53d459e6a016f0e3fd21",
    measurementId: "G-F1SCBC03LR"
    };
    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    var user = auth.currentUser;

    function Login(){
        var username = document.getElementById("usernameField").value;
        var password = document.getElementById("passField").value;

    auth.signInWithEmailAndPassword(username, password)
    .then ((result) => {
        user = result.user;

        console.log("Successfully Sign In");
        console.log(result.user);

        })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error " + errorCode + " : " + errorMessage);
        });
    }