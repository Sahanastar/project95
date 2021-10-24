//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBA0B59tcxq781yVsw8IXQQIDB6TuWYZ8s",
    authDomain: "kwitter-20bad.firebaseapp.com",
    databaseURL: "https://kwitter-20bad-default-rtdb.firebaseio.com",
    projectId: "kwitter-20bad",
    storageBucket: "kwitter-20bad.appspot.com",
    messagingSenderId: "1088949199706",
    appId: "1:1088949199706:web:fa2bfcf61d72f29ca8c963"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

var user_name = localStorage.getItem("User_Name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function adduser() {
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("Room_Name",room_name);
  firebaseConfig.databaseURL().ref("/").child(room_name).update({
    purpose : "adding user"
  });
  window.location = "kwiter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row= 	"<div class= room_name+ id="+Room_names+"redirectToRoomName(this.id)>#"+Room_names+"</div>"
document.getElementById("output").innerHTML+= row
//End code
});});}
getData();

function redirectToRoomName(Sahana) {
  console.log("room name" + Sahana);
  localStorage.setItem(Sahana);
  window.location = "kwiter_page.html";
}

