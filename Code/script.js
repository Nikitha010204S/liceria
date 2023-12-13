
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getDatabase,ref,set,get,child} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDoxkBXAj7Sw4f6Gr_sq-O1tKKGiHAsGUA",
    authDomain: "contact-6eb2c.firebaseapp.com",
    projectId: "contact-6eb2c",
    storageBucket: "contact-6eb2c.appspot.com",
    messagingSenderId: "722693543438",
    appId: "1:722693543438:web:f5cc3600be1bd81c638e5f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //get ref to database serviices
  const db=getDatabase(app);
document.getElementById("submit").addEventListener("click",function(e){
    set(ref(db,'user/' + document.getElementById("name").value),
    {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    });
    alert("received successful");
})
