import AppRoutes from "./routes/AppRoutes";
import Cursor from "./components/Cursor/Cursor";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll />
      <Cursor />

      <AppRoutes />
    </>
  );
}

export default App;