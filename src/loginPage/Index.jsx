import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    
  
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    
    console.log('Login submitted:', formData)
    navigate('/loginaccount')
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '520px',
        width: '100%'
      }}>
        {/* Heading */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: '900',
          color: '#000',
          marginBottom: '16px',
          lineHeight: '1.15',
          letterSpacing: '-0.5px'
        }}>
          Signin to your<br />PopX account
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '15px',
          color: '#666',
          marginBottom: '48px',
          lineHeight: '1.5',
          fontWeight: '400'
        }}>
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div style={{ marginBottom: '28px' }}>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: '700',
              color: '#7c3aed',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              
              style={{
                width: '100%',
                padding: '13px 14px',
                fontSize: '14px',
                border: errors.email ? '1.5px solid #ff4757' : '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#fff',
                color: '#333',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                if (!errors.email) {
                  e.target.style.borderColor = '#7c3aed'
                  e.target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                }
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = 'none'
                if (!errors.email) {
                  e.target.style.borderColor = '#e0e0e0'
                }
              }}
            />
            {errors.email && (
              <p style={{
                fontSize: '12px',
                color: '#ff4757',
                marginTop: '6px',
                margin: '6px 0 0 0'
              }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: '36px' }}>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: '700',
              color: '#7c3aed',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              
              style={{
                width: '100%',
                padding: '13px 14px',
                fontSize: '14px',
                border: errors.password ? '1.5px solid #ff4757' : '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#fff',
                color: '#333',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                if (!errors.password) {
                  e.target.style.borderColor = '#7c3aed'
                  e.target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                }
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = 'none'
                if (!errors.password) {
                  e.target.style.borderColor = '#e0e0e0'
                }
              }}
            />
            {errors.password && (
              <p style={{
                fontSize: '12px',
                color: '#ff4757',
                marginTop: '6px',
                margin: '6px 0 0 0'
              }}>
                {errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '13px 16px',
              fontSize: '15px',
              fontWeight: '700',
              color: '#fff',
              backgroundColor: '#b8b8b8',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
              textTransform: 'capitalize'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#a5a5a5'
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.12)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#b8b8b8'
              e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.08)'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
``