import React, { useState } from 'react';

const VARIANTS = [
    {
        id: 1,
        label: 'Option 1 – Current Logo + Brightness Filter',
        description: 'Same logo image, CSS filter applied to boost vibrancy. Simple fix, no redesign needed.',
        badge: '✅ Applied',
        badgeColor: '#16a34a',
        render: () => (
            <img
                src="/logo.png"
                alt="Logo"
                style={{
                    height: '40px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'brightness(1.2) saturate(1.5) contrast(1.08)',
                }}
            />
        ),
    },
    {
        id: 2,
        label: 'Option 2 – Logo with Orange Glow Drop Shadow',
        description: 'Same logo with a glowing drop shadow in brand orange. Makes it "pop" against any background.',
        badge: '✨ Eye-catching',
        badgeColor: '#d97706',
        render: () => (
            <img
                src="/logo.png"
                alt="Logo"
                style={{
                    height: '40px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'brightness(1.15) saturate(1.4) drop-shadow(0 2px 8px rgba(233,85,36,0.55))',
                }}
            />
        ),
    },
    {
        id: 3,
        label: 'Option 3 – Transparent Background Logo',
        description: 'Logo remade without white box. Looks cleaner on the glass navbar — more premium feel.',
        badge: '⭐ Recommended',
        badgeColor: '#7c3aed',
        render: () => (
            <img
                src="/logo_v_transparent.png"
                alt="Logo"
                style={{
                    height: '40px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'brightness(1.1) saturate(1.3)',
                }}
            />
        ),
    },
    {
        id: 4,
        label: 'Option 4 – Icon Only (no text)',
        description: 'Just the Palash flower, no text. Bold, iconic, memorable at any size. Best for small screens.',
        badge: '🏆 Most Memorable',
        badgeColor: '#e95524',
        render: () => (
            <img
                src="/logo_v_icon.png"
                alt="Logo"
                style={{
                    height: '40px',
                    width: '40px',
                    objectFit: 'contain',
                    filter: 'brightness(1.2) saturate(1.5)',
                }}
            />
        ),
    },
    {
        id: 5,
        label: 'Option 5 – Flat Single-Color Icon',
        description: 'Minimal flat design in solid brand orange. Scales perfectly to tiny sizes. Best brand recall.',
        badge: '💡 Ultra Minimal',
        badgeColor: '#0369a1',
        render: () => (
            <img
                src="/logo_v_flat.png"
                alt="Logo"
                style={{
                    height: '40px',
                    width: '40px',
                    objectFit: 'contain',
                }}
            />
        ),
    },
];

export default function LogoTest() {
    const [selected, setSelected] = useState(null);

    return (
        <main style={{ minHeight: '100vh', background: '#f8f4f0', padding: '40px 16px 80px', fontFamily: 'Inter, sans-serif' }}>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <span style={{
                    display: 'inline-block', background: 'rgba(233,85,36,0.1)', color: '#e95524',
                    fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', padding: '5px 16px', borderRadius: '50px', marginBottom: '12px'
                }}>
                    Logo Preview
                </span>
                <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', fontWeight: 800, color: '#1a1a2e', margin: '0 0 10px' }}>
                    Logo Variants — <span style={{ color: '#e95524' }}>Mobile View</span>
                </h1>
                <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
                    Each card shows how the logo looks on a real mobile navbar. Tap any to mark your choice.
                </p>
            </div>

            {/* Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '420px', margin: '0 auto' }}>
                {VARIANTS.map(v => {
                    const isSelected = selected === v.id;
                    return (
                        <div
                            key={v.id}
                            onClick={() => setSelected(v.id)}
                            style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: isSelected
                                    ? '0 0 0 3px #e95524, 0 8px 32px rgba(233,85,36,0.25)'
                                    : '0 4px 20px rgba(0,0,0,0.10)',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.25s ease, transform 0.2s ease',
                                transform: isSelected ? 'scale(1.015)' : 'scale(1)',
                                background: '#fff',
                            }}
                        >
                            {/* ── Mobile Navbar Mockup ── */}
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
                                backdropFilter: 'blur(10px)',
                                borderBottom: '1.5px solid rgba(233,85,36,0.25)',
                                padding: '10px 16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                minHeight: '60px',
                                position: 'relative',
                            }}>
                                {/* Animated orange border shimmer */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(90deg, #f38b2a44, #f5b66a44, #f38b2a44)',
                                    borderRadius: 0, pointerEvents: 'none', opacity: 0.3,
                                }} />

                                {/* Logo */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1 }}>
                                    {v.render()}
                                    {(v.id === 1 || v.id === 2 || v.id === 3) && (
                                        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                                            <span style={{
                                                fontFamily: "'Chonburi', cursive",
                                                fontSize: '18px', fontWeight: 400, color: '#e95524', whiteSpace: 'nowrap'
                                            }}>PALASH <span style={{ color: '#e95524' }}>Training</span></span>
                                            <span style={{ fontSize: '10px', color: '#888', marginTop: '2px' }}>A journey towards skill development</span>
                                        </div>
                                    )}
                                    {v.id === 4 && (
                                        <span style={{
                                            fontFamily: "'Chonburi', cursive",
                                            fontSize: '20px', color: '#e95524', fontWeight: 400
                                        }}>PALASH Training</span>
                                    )}
                                    {v.id === 5 && (
                                        <span style={{
                                            fontFamily: "'Chonburi', cursive",
                                            fontSize: '20px', color: '#e95524', fontWeight: 400
                                        }}>PALASH Training</span>
                                    )}
                                </div>

                                {/* Hamburger */}
                                <div style={{
                                    display: 'flex', flexDirection: 'column', gap: '5px',
                                    padding: '8px', zIndex: 1
                                }}>
                                    {[0, 1, 2].map(i => (
                                        <div key={i} style={{ width: '22px', height: '2.5px', background: '#374151', borderRadius: '2px' }} />
                                    ))}
                                </div>
                            </div>

                            {/* ── Fake page content below navbar ── */}
                            <div style={{ background: '#f9fafb', padding: '16px', minHeight: '80px' }}>
                                <div style={{ height: '10px', background: '#e5e7eb', borderRadius: '6px', marginBottom: '8px', width: '70%' }} />
                                <div style={{ height: '8px', background: '#e5e7eb', borderRadius: '6px', marginBottom: '8px', width: '90%' }} />
                                <div style={{ height: '8px', background: '#e5e7eb', borderRadius: '6px', width: '55%' }} />
                            </div>

                            {/* ── Label Card ── */}
                            <div style={{ padding: '16px 20px 20px', background: '#fff' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a1a2e' }}>{v.label}</span>
                                </div>
                                <span style={{
                                    display: 'inline-block',
                                    background: v.badgeColor + '18',
                                    color: v.badgeColor,
                                    fontSize: '0.75rem', fontWeight: 700,
                                    padding: '3px 10px', borderRadius: '50px', marginBottom: '8px',
                                    border: `1px solid ${v.badgeColor}40`
                                }}>{v.badge}</span>
                                <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>{v.description}</p>
                            </div>

                            {/* ── Selection Indicator ── */}
                            {isSelected && (
                                <div style={{
                                    background: 'linear-gradient(135deg, #e95524, #f9a825)',
                                    color: '#fff', textAlign: 'center',
                                    padding: '10px', fontSize: '0.9rem', fontWeight: 700
                                }}>✅ You selected this option!</div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            {selected && (
                <div style={{
                    position: 'fixed', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(135deg, #e95524, #f9a825)',
                    color: '#fff', textAlign: 'center',
                    padding: '16px 20px', fontSize: '1rem', fontWeight: 700,
                    boxShadow: '0 -4px 20px rgba(233,85,36,0.35)',
                    zIndex: 999
                }}>
                    Option {selected} selected — tell the developer to apply it! 🎉
                </div>
            )}
        </main>
    );
}
