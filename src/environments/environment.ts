// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
      apiKey: "AIzaSyBo5Tmt4JN1sMcHPiggJKhmZi0c0Gdssvg",
      authDomain: "foodstack-8d671.firebaseapp.com",
      databaseURL: "https://foodstack-8d671.firebaseio.com",
      projectId: "foodstack-8d671",
      storageBucket: "foodstack-8d671.appspot.com",
      messagingSenderId: "501321408109"
  }
};
