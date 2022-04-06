import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
  return (
    <>
      <div id="nav"><Navbar /></div>
      <div id="main">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
