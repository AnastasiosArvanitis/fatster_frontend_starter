Fatster react native documentation

React native, comme react.js est une nodejs based application, donc je suppose que vous avez déjà installé node.js sur votre ordinateur, sinon vous pouvez trouver l’exécutable sur cette page web :  https://nodejs.org/en/download/ . Avec nodejs npm sera installé, qui est le « node package manager » et ça va servir à installer les bibliothèques nécessaires pour l’exécution de l’application. Toutes les bibliothèques qui sont installées dans un nodejs based projet sont appelées dependencies et leur nom est enregistré dans le fichier package.json qui est stocké dans la racine du projet.

Une fois que nodejs est installé nous pouvons installer le react native environnement. Pour cela il faut tout d’abord installer le cli, c’est-à-dire le « commande line interface » qui va nous servir à exécuter les commandes d’installation d’une nouvelle application. Pour l’installer il faut ouvrir un terminal sur Windows et exécuter la commande npm install -g react-native-cli . La flag -g signifie que ce package va être installé globalement sur votre ordinateur et nous pouvons l’utiliser dans n’importe quel dossier. Ensuite pour créer un nouveau projet nous pouvons exécuter la commande react-native init MyProject mais le problème c’est que l’équipe de Fatster utilise Typescript pour le développement et cette commande va créer un projet un Javascript, donc non compatible avec l’application principale. Pour transformer un projet javascript en typescript il faut que nous installions typescript dans le projet comme une dependency (une dépendance) et les types et pour cela il faut exécuter, après la commande init que nous avons exécutée, la commande npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer. Ensuite il faut créer un fichier appelé tsconfig.json , qui sert à donner des instructions au typescript compiler, dans la racine de votre projet et dedans coller ça : 
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}

Enfin il faut créer un fichier appelé jest.config.js, dans la racine, et coller dedans ça :
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};

Jest est l’application qui va exécuter votre app dans l’émulateur ou dans un portable via USB.
Sinon vous pouvez toujours installer un template de react native en typescript qui va nous faire ça automatiquement, mais ça peut poser des problèmes, et c’est pour ça que je préfère vous expliquer d’abord comment installer typescript sans le template. Pour cela il faut exécuter la commande : npm react-native init MyApp --template react-native-template-typescript. 
Plus de détails sur react native et typescript dans ce lien : https://reactnative.dev/docs/typescript
Plus de détails sur l’installation sur ce lien : 
https://reactnative.dev/docs/environment-setup

Pour exécuter l’application il y a deux solutions, sur un portable ou sur l’Android emulator avec la commande npm run android. Je suppose que comme vous venez d’une formation vous savez comment installer l’emulator, sinon ici https://reactnative.dev/docs/environment-setup dans la section « Android development environment ». Notez qu’il faut au moins 16G de RAM pour faire fonctionner l’emulator, sinon vous pouvez exécuter l’application sur un portable via USB. Les instructions sont ici : https://reactnative.dev/docs/running-on-device .

Dans la documentation officielle de react native vous allez voir qu’ils proposent « Expo » comme une autre solution pour installer et exécuter une application react native. Expo est un framework très puissant mais non utilisé par l’équipe Fatster, donc il ne faut pas l’utiliser. 

Si malgré tout ça vous n’arrivez pas à mettre en place un projet j’ai mis à votre disposition un projet sur GitHub prêt à utiliser. Vous pouvez le trouver sur ce lien :
https://github.com/AnastasiosArvanitis/fatster_frontend_starter

Si vous avez Git déjà installé vous pouvez exécuter la commande : 
git clone https://github.com/AnastasiosArvanitis/fatster_frontend_starter.git dans un terminal, sinon vous pouvez télécharger le projet en format zip un appuyant sur le bouton vert, ou c’est marqué « Code »,  que vous allez voir sur la page GitHub du repo mentionné précédemment. Une fois que le projet est sur votre ordinateur il faut exécuter la commande npm install dans un terminal qui est dans la racine du projet pour installer tous les dépendances, il faut donc avoir installé nodejs avant en tout cas. Dans ce projet il y a déjà installé Redux et Redux-saga, comme l’équipe de développeurs chez Fatster font pour gérer le state global et il y a un exemple d’utilisation. Je vous encourage donc même si vous n’utilisez pas ce projet de le regarder. Il vaut mieux regarder le « History » du projet sur GitHub pour voir avec quel ordre j’ai créé les fichiers du Redux-saga.
Dans ce repo vous allez trouver également un simple de l’architecture que les devs chez Fatster ont mis en place, donc en tout cas c’est bien de jeter un coup d’œil.

Use full links:
https://reactnative.dev/docs/typescript
https://reactnative.dev/docs/intro-react
https://www.freecodecamp.org/news/redux-for-beginners-the-brain-friendly-guide-to-redux/
https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
https://medium.com/@KevinBGreene/surviving-the-typescript-ecosystem-working-with-types-and-type-definitions-3539baf26627
https://lodash.com/
https://blog.bitsrc.io/top-10-react-hook-libraries-ca284ab3ae1d
très important pour saga:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
https://redux-saga.js.org/docs/introduction/GettingStarted

Bon courage 😊


npx react-native init AwesomeProject
npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
npm install --save axios
npm install redux react-redux --save
npm install @types/react-redux --save
npm install redux-saga --save
npm install --save redux-actions
npm i --save-dev @types/redux-actions

