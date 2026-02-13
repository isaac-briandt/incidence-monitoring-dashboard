import { AppLayout } from "./components/layout/AppLayout";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <AppLayout />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
