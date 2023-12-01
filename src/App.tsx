import Header from "./components/header";
import Intro from "./components/intro";
import Skill from "./components/skill";

function App() {
  return (
    <div>
      <Header></Header>
      <main className='mt-[--header-height]'>
        <Intro />
        <Skill />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
