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
room_name=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push
    (
    {
        name:user_name,
        message:msg,
        like:0
    }
    );
    document.getElementById("msg").value;
}
function getData()
{
    firebase.database().ref("/"+Room_names).on ('value',function(snapshot)
    {
       document.getElementById("output").innerHTML="";
    snapshot.forEach(function(snapshot)
    {
       childKey=childSnapshot.key;
        childData=childSnapshot.val();
        if (childKey!="purpose")
            {
                firebase_message_id=childKey;
                message_data=childData;
                //Start Code
                console.log(firebase_message_id);
                console.log=(message_data);
                name=message_data['name'];
                message=message_data['message'];
                like=message data['like'];
                name_with_tag="<h4>"+name+"<img class='user-tick' src='tick.png'></h4>";
                message_with_tag="<h4 class='message h4'>"+message+"<h4>";
                like_button="<button class='btn btn-warning' id="+firebase_message_id+"value"+like+"onclick='updateLike(this.id)'>";
                span_with_id="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
                row="name_with_tag+message_with_tag+like_button+span_with_tag";
                document.getElementById("output").innerHTML+=row;
                //End Code
            }
    }
                     );
    }
                                                );
}
getData();
function updateLike(message_id)
{
    console.log("clicked on like button-"+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update
    (
    {
        like:updated_likes
    }
    );
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}