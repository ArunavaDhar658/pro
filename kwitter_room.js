 var firebaseConfig = {
    apiKey: "AIzaSyBi8SgIQ61PiOdh2ZhYOHwTL8vbb6BRXJo",
    authDomain: "kwitter-social-website-3c323.firebaseapp.com",
    databaseURL: "https://kwitter-social-website-3c323-default-rtdb.firebaseio.com",
    projectId: "kwitter-social-website-3c323",
    storageBucket: "kwitter-social-website-3c323.appspot.com",
    messagingSenderId: "172870248806",
    appId: "1:172870248806:web:efcfc0da6265495ac8c0a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom()
{
    room_name=document.getElementById("room_name").value;
    
    firebase.database().ref("/").child("room_name").update
    (
    {
        purpose:"adding room name"
    }
    );
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function getData()
{
    firebase.database().ref("/").on ('value',function(snapshot)
    {
       document.getElementById("output").innerHTML="";
    snapshot.forEach(function(snapshot)
    {
       childKey=childSnapshot.key;
      Room_names=childkey;
    console.log("Room Name-"+Room_names);
    row="<div class='room_name' id="+Room_Names+"onclick='redirectToRoomName(this.id)'>#+Room_Names+</div><hr>";
    document.getElementById("output").innerHTML+=row;
    }
  );
}
  );
}

getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout()
{
   localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
