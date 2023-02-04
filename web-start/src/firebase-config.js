/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
	apiKey: "AIzaSyCLpvoajWGlcUeUY5v1wlXf4H_1vCRG1fo",
	authDomain: "friendlychat-henryhong1.firebaseapp.com",
	databaseURL:
		"https://friendlychat-henryhong1-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "friendlychat-henryhong1",
	storageBucket: "friendlychat-henryhong1.appspot.com",
	messagingSenderId: "639938833957",
	appId: "1:639938833957:web:37d219db283e72605cd9cc",
};

export function getFirebaseConfig() {
	if (!config || !config.apiKey) {
		throw new Error(
			"No Firebase configuration object provided." +
				"\n" +
				"Add your web app's configuration object to firebase-config.js"
		);
	} else {
		return config;
	}
}
