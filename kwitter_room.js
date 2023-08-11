var firebaseConfig = {
    apiKey: "AIzaSyB2MNvNsRxkcIb_AWEyPxIb8mlpTHYEK-c",
    authDomain: "kwitter-ca917.firebaseapp.com",
    databaseURL: "https://kwitter-ca917-default-rtdb.firebaseio.com",
    projectId: "kwitter-ca917",
    storageBucket: "kwitter-ca917.appspot.com",
    messagingSenderId: "908040585876",
    appId: "1:908040585876:web:0a2b52a4b32f81b48b6a81"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

  function addroom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update ({
          purpose :"adding room name"
    });
    localStorage.set("room_name" , room_name);
    window.location = "kwitter_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row;

   
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}