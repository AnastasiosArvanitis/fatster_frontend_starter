npx react-native init AwesomeProject
npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
npm install --save axios
npm install redux react-redux --save
npm install @types/react-redux --save
npm install redux-saga --save
npm install --save redux-actions
npm i --save-dev @types/redux-actions

tsconfig.json
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

jest.config.js
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
