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
          background: '#0f504b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 32,
          fontSize: 120,
          fontWeight: 700,
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: -4,
        }}
      >
        V
      </div>
    ),
    { ...size }
  )
}
