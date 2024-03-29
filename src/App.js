import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Compounts/Form";
// import App from './App';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);