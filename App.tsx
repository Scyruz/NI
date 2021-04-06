import * as React from 'react';
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { assets as authenticationAssets, AuthenticationNavigator } from './src/Authentication';
import { LoadAssets } from './src/components';
import { theme } from "./src/components/Theme"
import firebase from "firebase";

const assets = [...authenticationAssets];
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Heavy": require("./assets/fonts/SF-Pro-Display-Heavy.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <ThemeProvider{...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets >
    </ThemeProvider>
  );
}
function firebaseConfig(firebaseConfig: any) {
  throw new Error('Function not implemented.');
}

