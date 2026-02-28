import fs from 'fs';
import https from 'https';

const urls = [
    "https://www.linkedin.com/pulse/micromanagement-productive-counterproductive-madhuri-bedekar-cpngc/",
    "https://www.linkedin.com/pulse/changing-trends-email-salutations-new-approach-madhuri-bedekar-ukipc/",
    "https://www.linkedin.com/pulse/who-actual-leader-madhuri-bedekar-unnkc/",
    "https://www.linkedin.com/pulse/how-i-assessed-madhuri-bedekar-z8wkc/",
    "https://www.linkedin.com/pulse/interview-madhuri-bedekar-jcalc/",
    "https://www.linkedin.com/pulse/survival-strongest-madhuri-bedekar-mbicc/",
    "https://www.linkedin.com/pulse/inside-out-madhuri-bedekar-go5fc/",
    "https://www.linkedin.com/pulse/mindful-mindless-madhuri-bedekar-wjl6c/",
    "https://www.linkedin.com/pulse/substance-abuse-use-madhuri-bedekar-ycblc/",
    "https://www.linkedin.com/pulse/why-arent-we-listening-madhuri-bedekar-ralae/",
    "https://www.linkedin.com/pulse/i-left-some-behind-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/endless-spam-calls-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/what-does-your-dp-convey-you-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/fireworks-its-impact-humans-animals-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/training-trainer-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/colors-speak-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/cutting-branches-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/can-recruiters-hear-us-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/procrastination-managing-deadlines-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/sunblock-sunscreen-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/we-walk-faith-sight-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/rising-abovestep-up-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/window-madhuri-bedekar/",
    "https://www.linkedin.com/pulse/pills-over-counter-choice-necessity-madhuri-bedekar/"
];

async function fetchUrl(url) {
    return new Promise((resolve) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', () => resolve(''));
    });
}

function extractMeta(html, property) {
    const regex = new RegExp(`<meta property="${property}" content="([^"]+)">`);
    const match = html.match(regex);
    return match ? match[1] : '';
}

async function run() {
    const results = [];
    let id = 2; // starting from 2 since article 1 is already there
    for (const url of urls) {
        process.stdout.write(`Fetching ${url}... `);
        const html = await fetchUrl(url);

        let title = extractMeta(html, 'og:title') || extractMeta(html, 'twitter:title') || '';
        let desc = extractMeta(html, 'og:description') || extractMeta(html, 'twitter:description') || '';

        // Clean up title
        title = title.replace(/ \| LinkedIn$/, '').replace(/ - N\.Madhuri Bedekar$/, '');
        if (!title && html) {
            const titleMatch = html.match(/<title>([^<]+)<\/title>/);
            if (titleMatch) title = titleMatch[1].replace(/ \| LinkedIn$/, '');
        }

        console.log(title ? 'Success' : 'Failed');

        results.push({
            id: id++,
            title: title || 'LinkedIn Article',
            date: '2023 / 2024',
            author: 'N. Madhuri Bedekar',
            category: 'Professional Development',
            readTime: '3 min read',
            excerpt: desc || 'Read the full article on LinkedIn to discover more insights and perspectives from N. Madhuri Bedekar.',
            link: url,
            isExternal: true
        });

        // delay to avoid rate limiting
        await new Promise(r => setTimeout(r, 600));
    }

    fs.writeFileSync('./articles.json', JSON.stringify(results, null, 2));
    console.log('Done writing to articles.json');
}

run();
