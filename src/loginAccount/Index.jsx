import { useState } from 'react'

export default function Index() {
  const [user] = useState({
    name: 'Merry Doe',
    email: 'Merry@Gmail.Com',
    bio: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam',
    image: 'https://i.pravatar.cc/150?img=47'
  })

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f8f8', 
      padding: '40px 20px' 
    }}>
      <div style={{ 
        maxWidth: '580px', 
        margin: '0 auto' 
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          marginBottom: '40px',
          color: '#1a1a1a'
        }}>
          Account Settings
        </h1>

        {/* Profile Card */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          padding: '40px 30px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
        }}>
          {/* Profile Image Area */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-start',
            marginBottom: '30px',
            position: 'relative'
          }}>
            <div style={{ position: 'relative', width: '120px', height: '120px' }}>
              <img
                src={user.image}
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
              {/* Badge */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '32px',
                height: '32px',
                backgroundColor: '#7c3aed',
                borderRadius: '50%',
                border: '3px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)'
              }}>
                🔒
              </div>
            </div>
          </div>

          {/* User Info */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              color: '#1a1a1a',
              margin: '0 0 8px 0'
            }}>
              {user.name}
            </h2>
            <p style={{ 
              fontSize: '14px', 
              color: '#666', 
              margin: '0',
              fontWeight: '500'
            }}>
              {user.email}
            </p>
          </div>

          {/* Divider */}
          <div style={{ 
            height: '1px', 
            backgroundColor: '#e0e0e0', 
            margin: '25px 0' 
          }}></div>

          {/* Bio */}
          <p style={{ 
            fontSize: '13px', 
            color: '#555', 
            lineHeight: '1.6',
            margin: '0',
            fontWeight: '400'
          }}>
            {user.bio}
          </p>

          {/* Divider */}
          <div style={{ 
            height: '1px', 
            backgroundColor: '#e0e0e0', 
            margin: '25px 0' 
          }}></div>

          {/* Edit Button */}
        
        </div>
      </div>
    </div>
  )
}
