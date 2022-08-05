import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import Information from "./components/Information";
import Update from './components/Update';
import ErrorBoundary from './Error'
import "./styles.css"

function App() {
  return (
    <ErrorBoundary >
      <BrowserRouter >
        {/* <Link to="/">Principal</Link> */}
        <Routes>
          <Route exact path="/information" element={<Information />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
          <Route exact path="/" element={
            <div>
              <Link to="information">Information</Link>
            </div>}>
          </Route>
        </Routes>
      </BrowserRouter >
    </ErrorBoundary>
  )
}


export default App;
