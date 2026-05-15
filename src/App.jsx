import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthProvider, { useAuth } from "../src/contexts/AuthProvider";
import ThemeProvider from "../src/contexts/ThemeProvider";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen">
              <Navbar />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/feed"
                  element={
                    <ProtectedRoute>
                      <Feed />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute>
                      <Settings />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
