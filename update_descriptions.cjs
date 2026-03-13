const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src', 'data', 'galleryData.json');
let data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const descriptions = {
  "apec-business-communication": "Empowering professionals with advanced business communication strategies through our exclusive APEC training sessions. Participants engaged in interactive workshops focusing on active listening, effective articulation, and corporate leadership.",
  "bsda-airport-ground-staff-communication-skills": "Comprehensive communication skills training tailored for airport ground staff at BSDA. Our program focuses on enhancing passenger interactions, handling difficult situations, and maintaining clear, professional dialogue in a fast-paced aviation environment.",
  "hdfc": "Customized corporate training sessions for HDFC employees, aimed at elevating business communication and interpersonal skills to drive better customer relationships and team collaboration.",
  "ielts": "Rigorous IELTS preparatory programs designed to help students achieve top band scores. Our interactive batches focus on mastering reading, writing, listening, and speaking modules with proven strategies.",
  "iomedia": "Dynamic English language and communication workshops at IOMEDIA. We focused on bridging communication gaps and fostering a more collaborative and articulate corporate culture.",
  "it": "Specialized soft skills and team-building interventions for IT professionals. The training emphasized effective teamwork, cohesive communication, and breaking silos in a tech-driven workplace.",
  "lexicon": "Engaging classroom activities and conflict management sessions at Lexicon Management Institute. Preparing future HR leaders with practical skills in employee relations and organizational behavior.",
  "liver-biliary-hospital": "Professional communication and soft skills training for healthcare staff at the Liver & Biliary Hospital. Ensuring compassionate patient care, clear medical communication, and effective teamwork under pressure.",
  "misc-pics": "A collection of engaging training sessions, workshops, and team-building activities highlighting our diverse approach to skill development across various corporate and educational domains."
};

data = data.map(item => ({
  ...item,
  description: descriptions[item.id] || item.description
}));

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log("Updated descriptions in galleryData.json");
