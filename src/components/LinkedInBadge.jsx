import { useEffect } from 'react';

export default function LinkedInBadge() {
    useEffect(() => {
        // LinkedIn script needs to be re-run on component mount for React
        // First clean up any old scripts to force a re-parse
        const oldScript = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]');
        if (oldScript) {
            oldScript.remove();
        }

        const script = document.createElement('script');
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="light"
                data-type="HORIZONTAL"
                data-vanity="madhuri-bedekar-75840920"
                data-version="v1"
            >
                {/* Fallback link MUST have text or the LinkedIn script fails. Hiding it securely. */}
                <a
                    className="badge-base__link LI-simple-link"
                    href="https://in.linkedin.com/in/madhuri-bedekar-75840920?trk=profile-badge"
                    style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }}
                >
                    N. Madhuri Bedekar
                </a>
            </div>
        </div>
    );
}
