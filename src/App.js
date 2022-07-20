import Information from "./components/Information";
import ErrorBoundary from './Error'
import "./styles.css"

function App() {
  return (
    <ErrorBoundary >
      <Information />
    </ErrorBoundary>
  )


}


export default App;
