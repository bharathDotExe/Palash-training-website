import fs from 'fs';

const articles = JSON.parse(fs.readFileSync('./articles.json', 'utf8'));

// Convert the JSON array into a JS string where authorImage is a variable reference
let itemsStr = articles.map(a => {
    return `{
        id: ${a.id},
        title: ${JSON.stringify(a.title)},
        date: ${JSON.stringify(a.date)},
        author: ${JSON.stringify(a.author)},
        authorImage: trainerPhoto,
        category: ${JSON.stringify(a.category)},
        readTime: ${JSON.stringify(a.readTime)},
        excerpt: ${JSON.stringify(a.excerpt)},
        link: ${JSON.stringify(a.link)},
        isExternal: ${a.isExternal}
    }`;
}).join(',\n    ');

const fileContent = `import trainerPhoto from '../assets/trainer-photo.png';

export const blogPosts = [
    {
        id: 1,
        title: "I work hard… but why does no one notice it?",
        date: "October 12, 2023",
        author: "N. Madhuri Bedekar",
        authorImage: trainerPhoto,
        category: "Career Growth",
        readTime: "3 min read",
        excerpt: "That was the first thing she said when we met. She was a front desk executive with a big dream, to move into HR. But despite being sincere and dedicated, her career growth had stalled...",
        content: \`
      <p>That was the first thing she said when we met. She was a front desk executive with a big dream, to move into HR. But despite being sincere and dedicated, her career growth had stalled.</p>
      <p>She didn't want to just answer calls. She wanted to add value to her profile, contribute more, and be part of decision-making. Yet promotion after promotion passed her by.</p>
      <p>When we spoke, she admitted that her language skills, both writing and speaking weren't where they needed to be. Her emails weren't formal enough for corporate standards. Her spoken English lacked polish, and her pronunciation, especially the "S" and "Sh" sounds needed refining.</p>
      <p>We got to work. In just 3–6 weeks, her language became more precise, her pronunciation sharper, and her confidence higher. A couple of months later, her reporting head noticed the difference too.</p>
      <p>The result? She was offered a position in the HR department which was a milestone she had been chasing for years.</p>
      <p><strong>Growth has no boundaries when you combine effort with the right guidance.</strong></p>
    \`,
        link: "https://www.linkedin.com/pulse/i-work-hard-why-does-one-notice-madhuri-bedekar-vy6pc"
    },
    ${itemsStr}
];
`;

if (!fs.existsSync('./src/data')) {
    fs.mkdirSync('./src/data');
}
fs.writeFileSync('./src/data/blogPosts.js', fileContent);
console.log('src/data/blogPosts.js generated');
