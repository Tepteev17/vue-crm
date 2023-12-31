import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import loader from '@/components/loader.vue'
import VueSelect  from "vue-select";

const config = {
  apiKey: "AIzaSyC3AoGRV0JdjI3KpS60hun3UuyvFhRW_Vo",
  authDomain: "vue-crm-grafs.firebaseapp.com",
  projectId: "vue-crm-grafs",
  storageBucket: "vue-crm-grafs.appspot.com",
  messagingSenderId: "957526496132",
  appId: "1:957526496132:web:0888eaa2a193703ec6c3d1",
  measurementId: "G-DNFQK20NJV",
  databaseURL:'https://vue-crm-grafs-default-rtdb.firebaseio.com/'
};

let app

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(() => {
    if (!app){
    app = createApp(App).component('loader', loader).component("v-select", VueSelect).use(store).use(router).mount('#app')

    }
})

