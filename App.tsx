import "react-native-gesture-handler";

import { Provider } from "react-redux";
import store from "./src/stores";
import Routes from "./src/routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
