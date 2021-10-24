const firebaseConfig = {
    apiKey: "AIzaSyCXeFSaBp8lo3e0Q8oNnULZhRL0UoEz2C4",
    authDomain: "project-36595.firebaseapp.com",
    databaseURL: "https://project-36595-default-rtdb.firebaseio.com",
    projectId: "project-36595",
    storageBucket: "project-36595.appspot.com",
    messagingSenderId: "321334540562",
    appId: "1:321334540562:web:1f06ec2ae10963286d5bcb",
    measurementId: "G-Q144FG22R7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
function adduser(){
    user_name = document.getElementById("username").value;
    localStorage.setItem("User_Name",user_name);
    window.location = "kwitter_room.html";
    
}