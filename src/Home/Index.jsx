import { Link } from "react-router-dom"

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="text-center" style={{ maxWidth: '500px' }}>
        <h1 className="fw-bold mb-3">Welcome to PopX</h1>
        <p className="text-muted mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        <div className="d-grid gap-2">
          <Link to="/accountpage" className="btn" style={{ backgroundColor: '#7c3aed', color: 'white' }}>
            Create Account
          </Link>
          <Link to="/loginpage" className="btn" style={{ backgroundColor: '#d8bfd8', color: 'black' }}>
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
