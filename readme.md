### Fatster react native documentation

React native, comme react.js est une nodejs based application, donc je suppose que vous avez déjà installé node.js sur votre ordinateur, sinon vous pouvez trouver l’exécutable sur cette page web :  https://nodejs.org/en/download/ . Avec nodejs npm sera installé, qui est le « node package manager » et ça va servir à installer les bibliothèques nécessaires pour l’exécution de l’application. Toutes les bibliothèques qui sont installées dans un nodejs based projet sont appelées dependencies et leur nom est enregistré dans le fichier package.json qui est stocké dans la racine du projet.

Une fois que nodejs est installé nous pouvons installer le react native environnement. Pour cela il faut tout d’abord installer le cli, c’est-à-dire le « commande line interface » qui va nous servir à exécuter les commandes d’installation d’une nouvelle application. Pour l’installer il faut ouvrir un terminal sur Windows et exécuter la commande npm install -g react-native-cli . La flag -g signifie que ce package va être installé globalement sur votre ordinateur et nous pouvons l’utiliser dans n’importe quel dossier. Ensuite pour créer un nouveau projet nous pouvons exécuter la commande react-native init MyProject mais le problème c’est que l’équipe de Fatster utilise Typescript pour le développement et cette commande va créer un projet un Javascript, donc non compatible avec l’application principale. Pour transformer un projet javascript en typescript il faut que nous installions typescript dans le projet comme une dependency (une dépendance) et les types et pour cela il faut exécuter, après la commande init que nous avons exécutée, la commande npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer. Ensuite il faut créer un fichier appelé tsconfig.json , qui sert à donner des instructions au typescript compiler, dans la racine de votre projet et dedans coller ça : 
```javascript {
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
} ```

Enfin il faut créer un fichier appelé jest.config.js, dans la racine, et coller dedans ça :
```javascript module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}; ```

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
```javascript 
npx react-native init AwesomeProject
npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
npm install --save axios
npm install redux react-redux --save
npm install @types/react-redux --save
npm install redux-saga --save
npm install --save redux-actions
npm i --save-dev @types/redux-actions ```

---

### Fatster Nestjs documentation

Nestjs est une nodejs based application, donc je suppose que vous avez déjà installé node.js sur votre ordinateur, sinon vous pouvez trouver l’exécutable sur cette page web :  https://nodejs.org/en/download/. Avec nodejs npm sera installé, qui est le « node package manager » et ça va servir à installer les bibliothèques nécessaires pour l’exécution de l’application. Toutes les bibliothèques qui sont installées dans un nodejs based projet sont appelées dependencies et leur nom est enregistré dans le fichier package.json qui est stocké dans la racine du projet.

Une fois que nodejs est installé nous pouvons installer le cli de nestjs en exécutant dans un terminal la commande npm i -g @nestjs/cli, c’est-à-dire le commande line interface qui va nous servir à exécuter les commandes de nestjs dans tous les dossier de notre ordinateur. La flag -g signifie que le package va être installé globalement dans notre ordinateur, donc accessible partout. 

Ensuite nous avons besoin du package TypeORM qui va gérer les tables de base de données, les requêtes etc. Pour cela il faut exécuter dans un terminal la commande npm i -g typeorm. Plus d’info sur TypeORM ici : https://typeorm.io/

Enfin il faut installer, toujours dans un terminal, le Typescript exécutable avec la commande npm i -g ts-node parce que Nestjs est écrit en Typescript et le code que nous allons écrire sera en Typescript, donc ce package va compiler et exécuter Typescript. C’est très probable que votre IDE vous demande d’installer Typescript globalement, si ce n’est pas fait déjà avec la commande npm i -g typescript@>=2.7. 

Une fois que toutes les installations sont faites nous pouvons créer un projet avec la commande nest new project-name. Le Nestjs cli que nous avons installé va créer une application minimale que nous pouvons ensuite agrandir. Quand la création d’un nouveau projet est terminée il faut qu’on installe dans le projet les dependencies pour typeorm et PostgreSQL, qui est la base de données que l’équipe de Fatster utilise. Pour cela il faut exécuter la commande npm i -S @nestjs/typeorm typeorm pg. 
Enfin il faut qu’on installe encore deux packages très importants, qui ne sont pas installés par défaut, d’abord npm i -s @nestjs/config pour configurer et utiliser des variables d’environnement pour la connexion à la base de données, et le deuxième et le npm i -s class-validator class-transformer qui va nous servir pour la sécurité. 
Plus d’information sur les modules, contollers et providers :
https://docs.nestjs.com/modules
https://docs.nestjs.com/controllers
https://docs.nestjs.com/providers
https://docs.nestjs.com/



Exemple de connexion avec une base de données. Dans le module central :
```javascript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';
import { UserModule } from "./user/user.module";
import { User } from "./entities/User";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_DATABASE,
    entities: [
      User,
    ],
    synchronize: Boolean(process.env.DB_SYNC)
    }),
    UserModule,
  ]
})
export class MyModule {} ```

Le config module va charger les variables d’environment par le fichier .env que nous créons sur la racine du projet. Le user module et l’entité user sont des exemples qu’on peut créer et on peut avoir plusieurs entités qui ont des relations entre elles et évidemment plusieurs modules, qui correspondent à une entité, exemple une entité de client, de produit etc. Exemple de fichier .env :
```javascript
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWD=yourpasswd
DB_DATABASE=database_name
DB_SYNC=true ```

Si la synchronisation est true à chaque fois que nous allons faire des changements dans les entités les tables de la bdd seront modifiées également, donc on risque de perde des data. Pour plus d’informations sur les entities :
https://typeorm.io/#/entities

Pour lancer l’application il faut exécuter la commande npm run start:dev dans un terminal à la racine du projet.
Quand une nouvelle application Nestjs est créée par défaut 5 fichiers sont créés : app.module.ts, app.controller.ts, app.service.ts, app.controller.spec.ts et main.ts mais c’est une bonne pratique de créer dans un autre dossier notre module avec son service et provider et d’exporter ce module dans le module du app. Comme ça nous pouvons avoir plusieurs modules indépendants qui peuvent être connectés avec le module central et il faut éviter d’utiliser le controller et le service du app, on peut même les supprimer. Par contre c’est le module central qui va charger la connexion à la bdd pour la rendre accessible aux autres modules. 

Use full links :
https://github.com/nestjsx/crud/wiki#why
https://www.learmoreseekmore.com/2020/09/nestjs-crud-postgresql.html
https://stackoverflow.com/questions/13142635/how-can-i-create-an-object-based-on-an-interface-file-definition-in-typescript
https://github.com/typestack/class-validator#installation
https://github.com/typeorm/typeorm/blob/master/docs/select-query-builder.md#getting-values-using-querybuilder
https://github.com/typestack/class-validator#samples
https://blog.bitsrc.io/understanding-generics-in-typescript-1c041dc37569
https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
https://typeorm.io/#/

Install PostgreSQL:
https://www.postgresql.org/download/
https://www.postgresqltutorial.com/



Bon courage 😊

