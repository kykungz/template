Add Capacitor to an existing project.

```sh
# Initialize Capacitor
yarn add @capacitor/core @capacitor/cli --dev
yarn cap init --web-dir build # Change web-dir according to your static exported web directory

# Add platforms
yarn cap add android
yarn cap add ios
# yarn cap add electron
```
