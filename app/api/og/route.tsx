import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams.get('locale') ?? 'en'

  const copy: Record<string, { headline: string; sub: string; tagline: string }> = {
    en: {
      headline: 'Flexible Packaging\nManufacturer',
      sub: 'Polypropylene & polyethylene bags for food, bakery, retail, and industrial use. Custom sizes and print. B2B orders.',
      tagline: 'SIA — Riga, Latvia',
    },
    lv: {
      headline: 'Elastīgā iepakojuma\nRažotājs',
      sub: 'Polipropilēna un polietilēna maisi pārtikai, maiznīcām, mazumtirdzniecībai un rūpniecībai. Pielāgoti izmēri un druka.',
      tagline: 'SIA — Rīga, Latvija',
    },
    ru: {
      headline: 'Производитель\nГибкой Упаковки',
      sub: 'Пакеты из полипропилена и полиэтилена для пищевой, розничной и промышленной сферы. Нестандартные размеры, печать на заказ.',
      tagline: 'ООО — Рига, Латвия',
    },
  }

  const c = copy[locale] ?? copy.en
  const teal = '#00b294'
  const lines = c.headline.split('\n')

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0d1f2d 0%, #0f2a20 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '60px 72px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent circles */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(0,178,148,0.10)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-140px',
            left: '-40px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'rgba(0,178,148,0.06)',
            display: 'flex',
          }}
        />

        {/* Top: brand name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-1px',
              lineHeight: 1,
              display: 'flex',
            }}
          >
            VELPLEV
          </div>
          <div
            style={{
              fontSize: '17px',
              fontWeight: 500,
              color: teal,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              display: 'flex',
            }}
          >
            {c.tagline}
          </div>
        </div>

        {/* Middle: headline + description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {lines.map((line, i) => (
              <div
                key={i}
                style={{
                  fontSize: '62px',
                  fontWeight: 700,
                  color: i === 1 ? teal : '#ffffff',
                  lineHeight: 1.05,
                  letterSpacing: '-1.5px',
                  display: 'flex',
                }}
              >
                {line}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: '21px',
              color: 'rgba(255,255,255,0.60)',
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: '700px',
              display: 'flex',
            }}
          >
            {c.sub}
          </div>
        </div>

        {/* Bottom: tags + contact */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', gap: '14px' }}>
            {['PP & PE Bags', 'Custom Print', 'All Sizes', 'B2B'].map((tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(0,178,148,0.15)',
                  border: '1.5px solid rgba(0,178,148,0.45)',
                  borderRadius: '999px',
                  padding: '8px 22px',
                  color: teal,
                  fontSize: '15px',
                  fontWeight: 600,
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.35)',
              display: 'flex',
            }}
          >
            velplev@inbox.lv
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
