import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpMoEKNnhnywd4URkRItb2Pb4uF2zftYI",
  authDomain: "gallery-f59b1.firebaseapp.com",
  projectId: "gallery-f59b1",
  storageBucket: "gallery-f59b1.appspot.com",
  messagingSenderId: "552441944522",
  appId: "1:552441944522:web:ddaa047803bc24a1e9d733",
  measurementId: "G-XMSBQP35MM"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the images collection in Firestore
const db = firebase.firestore();
const imagesCollection = db.collection("images");

function displayImages() {
  imagesCollection.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        const imageUrl = data.url;
        const imageTitle = data.title || "";
        const imageDescription = data.description || "";

        // Create an image element
        const img = document.createElement("img");
        img.src = imageUrl;

        // Create a div element for the image's title and description
        const div = document.createElement("div");
        div.innerHTML = `<h3>${imageTitle}</h3><p>${imageDescription}</p>`;

        // Append the div element to the img element
        img.appendChild(div);

        // Append the img element to the gallery container
        document.getElementById("gallery").appendChild(img);
      });
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    });
}


displayImages();

