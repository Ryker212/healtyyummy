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