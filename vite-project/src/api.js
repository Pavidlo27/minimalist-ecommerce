import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA0Td7JxhDGaC4GDxjWZbMgtcu5TnWnO58",
  authDomain: "minimalist-ecomerce.firebaseapp.com",
  projectId: "minimalist-ecomerce",
  storageBucket: "minimalist-ecomerce.appspot.com",
  messagingSenderId: "20752940568",
  appId: "1:20752940568:web:eee3e5e17aa6f125010d6d",
  measurementId: "G-FXFBP37M08",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "products");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, "products", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}
