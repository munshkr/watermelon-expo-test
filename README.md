# watermelon-expo-test

## Development

These are the instructions for building and running a development build for
Android and iOS. Replace `android` for `ios` where necessary.

First create a development build:

```
npm run build:android:dev
```

You can also build it locally (if you have Android Studio, and the SDK and NDK
installed):

```
npm run build:android:dev -- --local
```

Finally, start the Android server:

```
npm run start:android
```
