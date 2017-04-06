module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "globals": {
      __DEV__: true,
      __PRODUCTION__: true,
      __CLIENT__: true
    },
    "rules":{
        "no-console":0,
        "no-did-mount-set-state": 0
    },
    "parserOptions":{
     "ecmaFeatures":{
       "experimentalObjectRestSpread" :true
     }
   }
};
