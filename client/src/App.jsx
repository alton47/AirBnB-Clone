import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IndexPage from './pages/indexPage';

function App() {
  return (
    <Router>
      <Route path="/" component={IndexPage} />
    </Router>
  );
}

export default App;
