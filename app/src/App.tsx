import Lines from "./components/Lines";
import Links from "./components/Links";

function App() {
  return (
    <div className="flex flex-col md:flex-row pt-12 justify-center gap-x-12 overflow-hidden max-h-screen">
      <Links />
      <Lines />
    </div>
  );
}

export default App;
