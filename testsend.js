const firebaseConfig ={
    apiKey: "AIzaSyBHqM14Ai6Kriexr29sy7ZXuIR7eOjvKPU",
    authDomain: "testchat-c44d8.firebaseapp.com",
    databaseURL: "https://testchat-c44d8-default-rtdb.firebaseio.com",
    projectId: "testchat-c44d8",
    storageBucket: "testchat-c44d8.appspot.com",
    messagingSenderId: "780474019289",
    appId: "1:780474019289:web:79077b454e94cdc6737dc8",
    measurementId: "G-70H6096HFQ"
};
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  

var name = localStorage.getItem("name");
function send()
{
    var name = localStorage.getItem("name");
    var msg =document.getElementById('msg_text').value;
    if(msg !=""){
        firebase.database().ref("messages").push({
            msg:msg,
            sender: name
        }).then(function(){
            document.getElementById('msg_text').value="";
        
        })
    }
}
let ref= firebase.database().ref("messages").on('child_added' , function(snapshot){
    var username = snapshot.val().sender;
    var msg =snapshot.val().msg;
    var html ="";
    let name = localStorage.getItem("name");
    if(username == name){
        html += "<div class='message_me' align='right'><p class='user'>" +username +"</p><p class='msg_me'>"+msg+"</p</div>";
        document.getElementById("box_messages").innerHTML += html;
        

    }
    else{
        html += "<div class='message_user' align='left'><p class='user'>" +username +"</p><p class='msg_user'>"+msg+"</p</div>";
        document.getElementById("box_messages").innerHTML += html;
        
    }
})