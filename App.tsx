import { Navigation } from "@navigation/Navigation";
import { AppProvider } from "@providers/AppProvider";

export default function App() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}
