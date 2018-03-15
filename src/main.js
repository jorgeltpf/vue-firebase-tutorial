// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
let app;
let config = {
  apiKey: "AIzaSyARbllMRo64LqZbOShn0HuhzQKGh7UY-x4",
  authDomain: "test-vue-firebase-25619.firebaseapp.com",
  databaseURL: "https://test-vue-firebase-25619.firebaseio.com",
  projectId: "test-vue-firebase-25619",
  storageBucket: "",
  messagingSenderId: "124289654177"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});
