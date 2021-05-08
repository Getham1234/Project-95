//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBHDUdMs36c2Usz6EJhwO1FI47KK1PiGJk",
      authDomain: "kwitter-project-5a533.firebaseapp.com",
      projectId: "kwitter-project-5a533",
      storageBucket: "kwitter-project-5a533.appspot.com",
      messagingSenderId: "1012912674989",
      appId: "1:1012912674989:web:e11c1d5ff2e78dc2430e24"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name")
    room_name = localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

