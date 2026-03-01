import React from 'react';

export default function LogoTest() {
    const commonStyle = {
        color: '#E62A2B', // Single color: Palash Red
        fontSize: '2rem',
        margin: '0',
        lineHeight: '1.2'
    };

    const containerStyle = {
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        minHeight: '100vh',
        backgroundColor: '#F8F9FA'
    };

    const cardStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
    };

    const labelStyle = {
        fontSize: '0.9rem',
        color: '#64748B',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: 'bold'
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: '#1E1B4B' }}>Logo Style Preview</h1>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#64748B' }}>
                All logos are shown in the primary brand color (Palash Red: #E62A2B). Review the typography options below.
            </p>

            {/* Style 1: Modern & Bold (Montserrat) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 1: Modern & Bold (Montserrat)</span>
                <div style={{ ...commonStyle, fontFamily: '"Montserrat", sans-serif', fontWeight: '800', letterSpacing: '-1px' }}>
                    PALASH <span style={{ fontWeight: '600' }}>Training</span>
                </div>
            </div>

            {/* Style 2: Elegant & Classic (Playfair Display) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 2: Elegant & Classic (Playfair Display)</span>
                <div style={{ ...commonStyle, fontFamily: '"Playfair Display", serif', fontWeight: '700' }}>
                    PALASH <span style={{ fontStyle: 'italic', fontWeight: '600' }}>Training</span>
                </div>
            </div>

            {/* Style 3: Sophisticated & Authoritative (Cinzel) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 3: Sophisticated & Authoritative (Cinzel)</span>
                <div style={{ ...commonStyle, fontFamily: '"Cinzel", serif', fontWeight: '700' }}>
                    PALASH <span style={{ fontWeight: '600' }}>TRAINING</span>
                </div>
            </div>

            {/* Style 4: Soft & Approachable Script (Satisfy) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 4: Soft & Approachable Script (Satisfy)</span>
                <div style={{ ...commonStyle, fontFamily: '"Satisfy", cursive', fontSize: '2.5rem' }}>
                    Palash Training
                </div>
            </div>

            {/* Style 5: Tech-Forward & Distinct (Righteous) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 5: Tech-Forward & Distinct (Righteous)</span>
                <div style={{ ...commonStyle, fontFamily: '"Righteous", sans-serif' }}>
                    PALASH <span style={{ opacity: 0.9 }}>Training</span>
                </div>
            </div>

            {/* Style 6: Bold & Condensed (Bebas Neue) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 6: Bold & Condensed (Bebas Neue)</span>
                <div style={{ ...commonStyle, fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '1px' }}>
                    PALASH <span style={{ opacity: 0.9 }}>TRAINING</span>
                </div>
            </div>

            {/* Style 7: Professional & Sturdy (Roboto Slab) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 7: Professional & Sturdy (Roboto Slab)</span>
                <div style={{ ...commonStyle, fontFamily: '"Roboto Slab", serif', fontWeight: '800' }}>
                    PALASH <span style={{ fontWeight: '600' }}>Training</span>
                </div>
            </div>

            {/* Style 8: Modern & Industrial (Oswald) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 8: Modern & Industrial (Oswald)</span>
                <div style={{ ...commonStyle, fontFamily: '"Oswald", sans-serif', fontWeight: '700', textTransform: 'uppercase' }}>
                    Palash <span style={{ fontWeight: '500' }}>Training</span>
                </div>
            </div>

            {/* Style 9: Playful & Friendly (Caveat) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 9: Playful & Friendly (Caveat)</span>
                <div style={{ ...commonStyle, fontFamily: '"Caveat", cursive', fontWeight: '700', fontSize: '3rem' }}>
                    Palash Training
                </div>
            </div>

            {/* Style 10: Vintage & Expressive (Lobster) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 10: Vintage & Expressive (Lobster)</span>
                <div style={{ ...commonStyle, fontFamily: '"Lobster", cursive' }}>
                    Palash Training
                </div>
            </div>

            <h2 style={{ textAlign: 'center', margin: '4rem 0 2rem', color: '#1E1B4B' }}>Black Logo Options</h2>

            {/* Style 11: Bold Display (Anton) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 11: High Impact (Anton)</span>
                <div style={{ ...commonStyle, color: '#000000', fontFamily: '"Anton", sans-serif', letterSpacing: '1px' }}>
                    PALASH <span style={{ opacity: 0.8 }}>TRAINING</span>
                </div>
            </div>

            {/* Style 12: Fun & Dynamic (Bungee) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 12: Urban & Dynamic (Bungee)</span>
                <div style={{ ...commonStyle, color: '#000000', fontFamily: '"Bungee", sans-serif' }}>
                    PALASH TRAINING
                </div>
            </div>

            {/* Style 13: Elegant Script (Dancing Script) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 13: Flowing Script (Dancing Script)</span>
                <div style={{ ...commonStyle, color: '#000000', fontFamily: '"Dancing Script", cursive', fontSize: '2.5rem', fontWeight: '700' }}>
                    Palash Training
                </div>
            </div>

            {/* Style 14: Friendly & Rounded (Fredoka) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 14: Friendly & Rounded (Fredoka)</span>
                <div style={{ ...commonStyle, color: '#000000', fontFamily: '"Fredoka", sans-serif', fontWeight: '600' }}>
                    PALASH <span style={{ fontWeight: '400' }}>Training</span>
                </div>
            </div>

            {/* Style 15: Classic Brush (Pacifico) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 15: Casual Brush (Pacifico)</span>
                <div style={{ ...commonStyle, color: '#000000', fontFamily: '"Pacifico", cursive', fontSize: '2.2rem' }}>
                    Palash Training
                </div>
            </div>

            {/* Style 16: Bold Serif (Abril Fatface) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 16: Magazine Editorial (Abril Fatface)</span>
                <div style={{ ...commonStyle, color: '#000000', fontFamily: '"Abril Fatface", serif' }}>
                    PALASH <span style={{ opacity: 0.8 }}>Training</span>
                </div>
            </div>

            {/* Style 17: Tech & Structured (Russo One) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 17: Structured & Tech (Russo One)</span>
                <div style={{ ...commonStyle, color: '#000000', fontFamily: '"Russo One", sans-serif' }}>
                    PALASH TRAINING
                </div>
            </div>

            {/* Style 18: Wide & Spaced (Syncopate) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 18: Wide & Modern (Syncopate)</span>
                <div style={{ ...commonStyle, color: '#000000', fontFamily: '"Syncopate", sans-serif', fontWeight: '700', fontSize: '1.5rem' }}>
                    PALASH <span style={{ opacity: 0.7 }}>TRAINING</span>
                </div>
            </div>

            {/* Style 19: Contemporary Serif (Zilla Slab) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 19: Contemporary Slab (Zilla Slab)</span>
                <div style={{ ...commonStyle, color: '#000000', fontFamily: '"Zilla Slab", serif', fontWeight: '700' }}>
                    PALASH <span style={{ fontWeight: '500', fontStyle: 'italic' }}>Training</span>
                </div>
            </div>

            {/* Style 20: Edgy Marker (Permanent Marker) */}
            <div style={cardStyle}>
                <span style={labelStyle}>Style 20: Edgy & Bold (Permanent Marker)</span>
                <div style={{ ...commonStyle, color: '#000000', fontFamily: '"Permanent Marker", cursive' }}>
                    Palash Training
                </div>
            </div>
        </div>
    );
}
