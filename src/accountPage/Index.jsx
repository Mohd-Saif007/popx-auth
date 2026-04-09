import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Index() {
  const [formData, setFormData] = useState({
    fullName: 'merry Doe',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      isAgency: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Account created successfully!')
  }

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
      <div style={{ maxWidth: '550px', width: '100%' }} className="px-3">
        <h1 className="fw-bold mb-5" style={{ fontSize: '2.5rem' }}>Create your PopX account</h1>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="form-label fw-semibold" style={{ color: '#7c3aed' }}>
              Full Name<span className="text-danger ms-1">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Merry Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={{ borderColor: '#e5e7eb', height: '45px', fontSize: '0.95rem' }}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="form-label fw-semibold" style={{ color: '#7c3aed' }}>
              Phone number<span className="text-danger ms-1">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              name="phoneNumber"
              placeholder="Merry Doe"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              style={{ borderColor: '#e5e7eb', height: '45px', fontSize: '0.95rem' }}
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="form-label fw-semibold" style={{ color: '#7c3aed' }}>
              Email address<span className="text-danger ms-1">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Merry Doe"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ borderColor: '#e5e7eb', height: '45px', fontSize: '0.95rem' }}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold" style={{ color: '#7c3aed' }}>
              Password<span className="text-danger ms-1">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Merry Doe"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ borderColor: '#e5e7eb', height: '45px', fontSize: '0.95rem' }}
            />
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label className="form-label fw-semibold" style={{ color: '#7c3aed' }}>
              Company name
            </label>
            <input
              type="text"
              className="form-control"
              name="companyName"
              placeholder="Merry Doe"
              value={formData.companyName}
              onChange={handleChange}
              style={{ borderColor: '#e5e7eb', height: '45px', fontSize: '0.95rem' }}
            />
          </div>

          {/* Are you an Agency */}
          <div className="mb-5">
            <label className="form-label fw-semibold" style={{ color: '#7c3aed' }}>
              Are you an Agency?<span className="text-danger ms-1">*</span>
            </label>
            <div className="d-flex gap-4 mt-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="agency"
                  id="agencyYes"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  disabled
                  style={{ width: '24px', height: '24px', cursor: 'default', accentColor: '#7c3aed' }}
                />
                <label className="form-check-label ms-2" htmlFor="agencyYes" style={{ fontSize: '1rem', cursor: 'default' }}>
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="agency"
                  id="agencyNo"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  disabled
                  style={{ width: '24px', height: '24px', cursor: 'default', accentColor: '#d3d3d3', opacity: '0.6' }}
                />
                <label className="form-check-label ms-2" htmlFor="agencyNo" style={{ fontSize: '1rem', cursor: 'default', opacity: '0.6' }}>
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Create Account Button */}
          <Link to={"/createaccount"}
            type="submit"
            className="btn w-100 fw-semibold"
            style={{
              backgroundColor: '#7c3aed',
              color: 'white',
              height: '50px',
              fontSize: '1.1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  )
}
