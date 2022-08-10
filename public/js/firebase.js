const firebaseConfig = {
    apiKey: "AIzaSyC1JonjLK__98qdLK7QLiU_r8YJA-zEJCQ",
    authDomain: "blog-shots.firebaseapp.com",
    projectId: "blog-shots",
    storageBucket: "blog-shots.appspot.com",
    messagingSenderId: "1021709297483",
    appId: "1:1021709297483:web:eba3c3cc3a1532c9f4eace"
  };
  

 firebase.initializeApp(firebaseConfig);

 let db=firebase.firestore();
 let auth=firebase.auth();

 const logoutUser=()=>{
   auth.signOut();
   location.reload();
 }