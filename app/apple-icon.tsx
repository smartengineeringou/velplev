import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#07489a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
          fontSize: 130,
          fontWeight: 800,
          color: '#e8ad47',
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: -6,
        }}
      >
        V
      </div>
    ),
    { ...size }
  )
}
