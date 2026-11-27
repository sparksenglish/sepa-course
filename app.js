/* SEPA Course app. Upload this one file into Drive › SEPA Course › Content. */
/* ===== app1.js ===== */
/* SEPA Course app code, part 1 of 3. Generated from the prototype. Upload to Drive › SEPA Course › Content. */
const LOGO = SEPA_LOGO;
const LEVELS = [
  {id:"ls", name:"Little Sparks", age:"3–6 yrs", cefr:"CEFR A0", short:"LS"},
  {id:"sk", name:"Sparks Kids", age:"7–9 yrs", cefr:"CEFR A0–A2.2", short:"SK"},
  {id:"st", name:"Sparks Teen", age:"10–14 yrs", cefr:"CEFR A1–B1", short:"ST"},
  {id:"sp", name:"Sparks Teen+", age:"15–18 yrs", cefr:"CEFR A1–B2", short:"T+"}
];
const R = __D.R;
const TREE = {id:"root", title:"Practical Classroom English", eyebrow:"Sparks English", children:[
  {id:"u1", eyebrow:"Unit 1", title:"Everyday Classroom Routines", children:[
    {id:"sa", eyebrow:"Section A", title:"Beginning the lesson", kind:"section", children:["a1","a2","a3","a4","a5","a6"]},
    {id:"sb", eyebrow:"Section B", title:"Running the lesson", kind:"section", children:["b1","b2","b3","b4","b5"]},
    {id:"sc", eyebrow:"Section C", title:"Ending the lesson", kind:"section", children:["c1","c2","c3","c4","c5","c6"]},
    {id:"sd", eyebrow:"Essentials", title:"Giving instructions", kind:"section", children:["d1","d2","d3"]}
  ]},
  {id:"u2", eyebrow:"Unit 2", title:"Involving the Learners", children:[
    {id:"u2a", eyebrow:"Section A", title:"Getting students to join in", kind:"section", children:["e1","e2","e3","e4"]},
    {id:"u2b", eyebrow:"Section B", title:"Classroom etiquette", kind:"section", children:["f1","f2","f3","f4","f5"]},
    {id:"u2c", eyebrow:"Section C", title:"Confirming and encouraging", kind:"section", children:["g1","g2","g3","g4"]},
    {id:"u2d", eyebrow:"Essentials", title:"Asking Yes/No questions", kind:"section", children:["h1","h2","h3"]}
  ]},
  {id:"u3", eyebrow:"Unit 3", title:"Managing the Classroom", children:[
    {id:"u3a", eyebrow:"Section A", title:"The physical environment", kind:"section", children:["i1","i2","i3","i4","i5","i6"]},
    {id:"u3b", eyebrow:"Section B", title:"The learning environment", kind:"section", children:["j1","j2","j3","j4"]},
    {id:"u3c", eyebrow:"Section C", title:"Using the classroom creatively", kind:"section", children:["k1","k2","k3","k4","k5"]},
    {id:"u3d", eyebrow:"Essentials", title:"Polite ways of asking", kind:"section", children:["l1","l2","l3"]}
  ]},
  {id:"u4", eyebrow:"Unit 4", title:"Working with the Textbook", children:[
    {id:"u4a", eyebrow:"Section A", title:"Using the textbook", kind:"section", children:["m1","m2","m3","m4","m5","m6"]},
    {id:"u4b", eyebrow:"Section B", title:"Using the basic text", kind:"section", children:["n1","n2","n3","n4","n5","n6"]},
    {id:"u4c", eyebrow:"Section C", title:"Managing exercises", kind:"section", children:["o1","o2","o3","o4","o5","o6"]},
    {id:"u4d", eyebrow:"Essentials", title:"Or and Wh- questions", kind:"section", children:["p1","p2","p3"]}
  ]},
  {id:"u5", eyebrow:"Unit 5", title:"Using Technology", children:[
    {id:"u5a", eyebrow:"Section A", title:"Displaying information", kind:"section", children:["q1","q2","q3","q4","q5"]},
    {id:"u5b", eyebrow:"Section B", title:"Listening and the language lab", kind:"section", children:["r1","r2","r3"]},
    {id:"u5c", eyebrow:"Section C", title:"Using a computer", kind:"section", children:["s1","s2"]},
    {id:"u5d", eyebrow:"Essentials", title:"Suggestions and advice", kind:"section", children:["t1","t2","t3"]}
  ]},
  {id:"u6", eyebrow:"Unit 6", title:"Developing Skills", children:[
    {id:"u6a", eyebrow:"Section A", title:"The spoken language", kind:"section", children:["v1","v2","v3","v4","v5","v6"]},
    {id:"u6b", eyebrow:"Section B", title:"The written language", kind:"section", children:["w1","w2","w3","w4","w5"]},
    {id:"u6c", eyebrow:"Section C", title:"Academic and thinking skills", kind:"section", children:["x1","x2","x3","x4","x5","x6","x7"]},
    {id:"u6d", eyebrow:"Essentials", title:"More about Wh- questions", kind:"section", children:["y1","y2","y3"]}
  ]}
]};
const SEC = __D.SEC, BOOK = __D.BOOK;
(function(){ const u3 = TREE.children.find(u => u.id === "u3"); const sb = u3.children.find(s => s.id === "u3b"); if (!sb.children.includes("j5")) sb.children.push("j5", "j6"); })();
const AP = __D.AP;
const T2_UNITS = [
 {
  "id": "u7",
  "eyebrow": "Unit 1",
  "title": "Parent Feedback",
  "topic": "topic2",
  "goal": "I can share a child's progress, explain test results and agree next steps with a parent.",
  "children": [
   {
    "id": "t2c1",
    "eyebrow": "Core",
    "title": "Core lessons",
    "kind": "section",
    "children": [
     "pf1",
     "pf2",
     "pf3"
    ]
   },
   {
    "id": "t2l1",
    "eyebrow": "Library",
    "title": "Phrase library",
    "kind": "section",
    "children": [
     "pf4",
     "pf5",
     "pf6"
    ]
   }
  ]
 },
 {
  "id": "u8",
  "eyebrow": "Unit 2",
  "title": "Handling Parent Concerns",
  "topic": "topic2",
  "goal": "I can respond calmly to a parent's concern, say no politely and follow up.",
  "children": [
   {
    "id": "t2c2",
    "eyebrow": "Core",
    "title": "Core lessons",
    "kind": "section",
    "children": [
     "pc1",
     "pc2",
     "pc3"
    ]
   },
   {
    "id": "t2l2",
    "eyebrow": "Library",
    "title": "Phrase library",
    "kind": "section",
    "children": [
     "pc4",
     "pc5",
     "pc6"
    ]
   }
  ]
 },
 {
  "id": "u9",
  "eyebrow": "Unit 3",
  "title": "Working with Colleagues",
  "topic": "topic2",
  "goal": "I can make suggestions, agree and disagree politely, and ask colleagues for help.",
  "children": [
   {
    "id": "t2c3",
    "eyebrow": "Core",
    "title": "Core lessons",
    "kind": "section",
    "children": [
     "cw1",
     "cw2",
     "cw3"
    ]
   },
   {
    "id": "t2l3",
    "eyebrow": "Library",
    "title": "Phrase library",
    "kind": "section",
    "children": [
     "cw4",
     "cw5",
     "cw6"
    ]
   }
  ]
 },
 {
  "id": "u10",
  "eyebrow": "Unit 4",
  "title": "Reporting to Leaders",
  "topic": "topic2",
  "goal": "I can report updates and issues to my leader, ask for support and ask for approval.",
  "children": [
   {
    "id": "t2c4",
    "eyebrow": "Core",
    "title": "Core lessons",
    "kind": "section",
    "children": [
     "rl1",
     "rl2",
     "rl3"
    ]
   },
   {
    "id": "t2l4",
    "eyebrow": "Library",
    "title": "Phrase library",
    "kind": "section",
    "children": [
     "rl4",
     "rl5",
     "rl6"
    ]
   }
  ]
 },
 {
  "id": "u11",
  "eyebrow": "Unit 5",
  "title": "Marketing and Parents Academy",
  "topic": "topic2",
  "goal": "I can soft-sell a trial class, present at Parents Academy and answer programme questions.",
  "children": [
   {
    "id": "t2c5",
    "eyebrow": "Core",
    "title": "Core lessons",
    "kind": "section",
    "children": [
     "mp1",
     "mp2",
     "mp3"
    ]
   },
   {
    "id": "t2l5",
    "eyebrow": "Library",
    "title": "Phrase library",
    "kind": "section",
    "children": [
     "mp4",
     "mp5",
     "mp6"
    ]
   }
  ]
 },
 {
  "id": "u12",
  "eyebrow": "Unit 6",
  "title": "Centre Events",
  "topic": "topic2",
  "goal": "I can host centre events, welcome guests and introduce speakers.",
  "children": [
   {
    "id": "t2c6",
    "eyebrow": "Core",
    "title": "Core lessons",
    "kind": "section",
    "children": [
     "ce1",
     "ce2",
     "ce3"
    ]
   },
   {
    "id": "t2l6",
    "eyebrow": "Library",
    "title": "Phrase library",
    "kind": "section",
    "children": [
     "ce4",
     "ce5",
     "ce6"
    ]
   }
  ]
 }
];
TREE.children.push(...T2_UNITS);
const T2_CORE = ["pf1", "pf2", "pf3", "pc1", "pc2", "pc3", "cw1", "cw2", "cw3", "rl1", "rl2", "rl3", "mp1", "mp2", "mp3", "ce1", "ce2", "ce3"];
const APEX = n => { for (const p of AP) for (const part of (p.parts || [])) for (const x of part.ex) if (x.n === n) return x; return null; };
function stressQs(){
  const x = APEX("1.2"); if (!x || !x.key) return [];
  return x.key.map((k, i) => {
    const words = k.replace(/[?,.!]/g, "").split(/\s+/), hit = words.find(w => /<u>/.test(w)) || words[0], right = hit.replace(/<\/?u>/g, "");
    const plain = words.map(w => w.replace(/<\/?u>/g, "")).filter(w => w && w !== right);
    const good = plain.filter(w => w.length > 2 && !/^(the|and|has|was)$/i.test(w));
    const pool = [...good.slice().reverse(), ...plain].filter((w, j, a) => a.indexOf(w) === j);
    const pick = pool.slice(0, 2);
    return {q:`Which word carries the main stress? “${x.items[i]}”`, o:[right, ...pick]};
  });
}
function wordStressQs(){
  const x = APEX("1.7"); if (!x || !x.words) return [];
  const ord = ["1st syllable", "2nd syllable", "3rd syllable"];
  return x.words.map(([w, shown, s]) => ({q:`Which syllable is stressed in “${w}”?`, o:[ord[s - 1], ...ord.filter((o, i) => i !== s - 1)]}));
}
const QUIZ = __D.QUIZ;
const PRACTICE_EX = {u1:{listen:["1.8", "1.9", "1.10"], speak:["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7"]}};
const SUBMIT = {speak:"recording", write:"writing"};
const QL_INTRO = "Three parts. A: listen to five things someone says and choose what they're doing. B: listen to a conversation or talk and answer five questions. C: listen and choose the best reply. Play each recording as often as you like.";
const QR_INTRO = "Three parts. A: read a text and answer five questions. B: choose the word or phrase that completes each sentence. C: choose the most appropriate thing to say in each situation.";
function QL(o){ return {intro:QL_INTRO, level:o.level, groups:[
  {h:"Part A · What is the " + (o.speaker || "teacher") + " doing?", qs:o.a.map(([say, ...opts]) => ({q:"What is the " + (o.speaker || "teacher") + " doing?", say, o:opts}))},
  {h:"Part B · " + o.bh, talk:o.talk, qs:o.b.map(([q, ...opts]) => ({q, o:opts}))},
  {h:"Part C · Listen and choose the best reply", qs:o.c.map(([say, ...opts]) => ({q:"What's the best reply?", say, sayWho:o.who || "S", o:opts}))}]}; }
function QR(o){ return {intro:QR_INTRO, level:o.level, groups:[
  {h:"Part A · " + o.ah, passage:o.passage, qs:o.a.map(([q, ...opts]) => ({q, o:opts}))},
  {h:"Part B · Complete the sentence", qs:o.b.map(([q, ...opts]) => ({q, o:opts}))},
  {h:"Part C · What's the most appropriate thing to say?", qs:o.c.map(([q, ...opts]) => ({q, o:opts}))}]}; }
const NODES = {}, LEAVES = [];
(function idx(n, parent){
  NODES[n.id] = n; n.parent = parent || null;
  if (n.children) n.children = n.children.map(c => {
    if (typeof c === "string") { const l = idx({id:c, title:R[c].title, leaf:true}, n); LEAVES.push(l); return l; }
    return idx(c, n);
  });
  return n;
})(TREE);
const UNITS = TREE.children;
UNITS.forEach((u, i) => u.color = `var(--u${(i % 6) + 1})`);
const unitOf = n => { while (n && n.parent && n.parent.id !== "root") n = n.parent; return n; };
const T1_GOALS = {
  u1:"I can run the beginning, middle and end of a lesson in English.",
  u2:"I can get students to take part and respond politely in English.",
  u3:"I can manage space, attention and activities in English.",
  u4:"I can guide students through the textbook and exercises in English.",
  u5:"I can use the board, screens and devices in English.",
  u6:"I can run listening, speaking, reading and writing activities in English."
};
UNITS.forEach(u => { if (!u.topic) { u.topic = "topic1"; u.goal = T1_GOALS[u.id]; } });
const T2_ESS = {
  u7:{t:"Reporting progress clearly", items:[["Start positive", "Open with a strength and a real example from class."], ["Compared to…", "Show change over time: Compared to the start of the term, she can now…"], ["Soften weaknesses", "Still finds it a bit challenging, not quite there yet."], ["Suggest, don't instruct", "It might be a good idea to… If I were you, I'd…"]]},
  u8:{t:"Calm, diplomatic language", items:[["Acknowledge first", "I understand why you're concerned. Thank you for telling me."], ["Check understanding", "Let me make sure I understand: you feel…"], ["No plus an alternative", "I'm afraid we can't…, but here's what we can offer."], ["Promise only what you can do", "I'll look into this and get back to you by Friday."]]},
  u9:{t:"Polite suggestions and disagreement", items:[["Suggest with questions", "Have you thought about…? What if we…?"], ["Agree before you disagree", "I see your point, but… That's a good point, although…"], ["Asking a favour", "Could I ask you a favour? Would you be able to…?"], ["Close on teamwork", "Let's find a solution that works for both of us."]]},
  u10:{t:"Clear, professional updates", items:[["Lead with the headline", "Everything is on track, apart from one issue."], ["Problem plus action", "Say what happened and what you've already done about it."], ["Ask, don't demand", "Would it be okay if…? I'd like to ask for your approval for…"], ["Show ownership", "I'll report back on how it goes. I'll have it ready by Wednesday."]]},
  u11:{t:"Persuasive but honest language", items:[["Feature, then benefit", "Small classes, which means she'll speak in every lesson."], ["Use what you saw", "I noticed she was very confident when…"], ["No pressure", "There's no pressure. Take your time to decide."], ["Pass on what you don't know", "Our admin team can explain the payment options."]]},
  u12:{t:"Signposting a speech or event", items:[["Opening", "Good afternoon, parents, families and students. Welcome to…"], ["Moving on", "Next… It's my pleasure to introduce… Please welcome…"], ["Handling changes", "We have a small change to the programme. Thank you for your patience."], ["Closing", "That brings us to the end of today's event. Have a safe trip home."]]}
};
UNITS.forEach(u => { if (T2_ESS[u.id] && !u.ess) u.ess = T2_ESS[u.id]; });
const SKILLS = {listen:"Listening", read:"Reading", speak:"Speaking", write:"Writing"};
const TOPICS = [
  {id:"topic1", n:1, title:"Practical Classroom English", ill:"classroom",
   desc:"The English you use inside the lesson: routines, instructions, involving learners and managing the class.",
   tasks:{listen:"Listen to a recorded lesson. Note the classroom phrases the teacher uses at the start, middle and end.", read:"Read a lesson transcript. Find the unclear or incorrect classroom English and improve it.", speak:"Record a short lesson run-through (start, middle and end) using only classroom English. Your trainer uses this recording for your Topic 1 speaking level.", write:"Write the classroom English script for one full lesson you'll teach."}},
  {id:"topic2", n:2, title:"Beyond Classroom English", ill:"parents",
   desc:"The English you use outside the lesson: with parents, colleagues and leaders, in marketing and Parents Academy, and at centre events.",
   tasks:{listen:"Listen to recorded PTM and OPT conversations. Note each parent's questions and concerns.", read:"Read an OPT result and a progress report. Prepare the key points you would explain to the parent.", speak:"Do the Topic 2 speaking task with your trainer: a parent conversation role-play, a graduation opening and a short discussion. Your trainer records your Topic 2 speaking level.", write:"Write a PTM follow-up message to a parent, and a short Parents Academy summary of the program."}},
  {id:"topic3", n:3, title:"Professional English Proficiency", ill:"proficiency", soon:true,
   desc:"IELTS-style listening, reading, writing and speaking practice on education themes, ending with a full mock test.",
   plan:{listen:"Talks and conversations about education", read:"Education texts with IELTS question types", write:"Describing data and writing opinion essays", speak:"Interview practice, cue cards and discussion"}}
];
TOPICS.forEach(t => t.units = UNITS.filter(u => u.topic === t.id));
const topicOf = u => TOPICS.find(t => t.id === u.topic);
const topicLeaves = tid => LEAVES.filter(x => unitOf(x).topic === tid);
const NT = {
  L:{name:"Language comment", ic:"L", desc:"Additional phrases and comments on classroom language."},
  I:{name:"Idiomatic phrase", ic:"!", desc:"Idioms for use mainly with advanced learners."},
  P:{name:"Teaching tip", ic:"→", desc:"Pedagogical pointers: classroom management and ideas for running your class in English."},
  M:{name:"Mistake", ic:"✗", desc:"A typical classroom English error, shown with the correct version."},
  S:{name:"Student response", ic:"S", desc:"Phrases you can encourage your students to use."},
  X:{name:"See also", ic:"»", desc:"Cross-references to other units and sections."}
};
function load(k, d){ try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch(e){ return d; } }
function save(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
let level = load("pce-level-v", "sk");
if (!LEVELS.some(l => l.id === level)) level = "sk";
let stars = load("pce-stars2", []);
let lastSeen = load("sepa-last", null);
const PR = Object.assign({p:{}, t:{}, o:{}, q:{}, sub:{}, tw:{}, nr:[], sp:{}, dr:{}, wu:{}, bc:{}, start:null, goal:10}, load("sepa-practice", {}));
const FILTER = {topic1:"u1", topic2:"all"};
const app = document.getElementById("app");
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function fmt(s){ return esc(s).replace(/\(([^)]+)\)/g, '<em class="act">($1)</em>'); }
function clean(t){ return t.replace(/\([^)]*\)/g, "").replace(/…/g, ", ").replace(/\s\/\s|\//g, " or ").trim(); }
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; };
const I = {
  speak:'<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 6h3l4-3v10l-4-3H2z" fill="currentColor"/><path d="M11 5.5a3.5 3.5 0 010 5M12.8 3.6a6 6 0 010 8.8" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  save:'<svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 2.5h10v15l-5-3.5-5 3.5z" stroke="currentColor" stroke-width="1.8" fill="currentColor" fill-opacity="var(--fo,0)" stroke-linejoin="round"/></svg>',
  chev:'<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M4.5 7l4.5 4.5L13.5 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  back:'<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M14 4l-7 7 7 7" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrow:'<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  search:'<svg width="22" height="22" viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6" stroke="currentColor" stroke-width="2" fill="none"/><path d="M13 13l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  check:'<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  audio:'<svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 12v-1a7 7 0 0114 0v1" stroke="currentColor" stroke-width="1.8" fill="none"/><rect x="2.5" y="11.5" width="4" height="6" rx="1.5" fill="currentColor"/><rect x="13.5" y="11.5" width="4" height="6" rx="1.5" fill="currentColor"/></svg>'
};
const UICON = {
  u1:'<path d="M6 21V4h12v17M3 21h18M14.5 12.5h.01"/>',
  u2:'<path d="M8 13V5.5a1.5 1.5 0 013 0V11M11 10V3.5a1.5 1.5 0 013 0V10M14 10V5a1.5 1.5 0 013 0v8a6 6 0 01-6 6h-1a5 5 0 01-4-2l-3-4a1.5 1.5 0 012.4-1.8L8 13"/>',
  u3:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="3" y="14" width="7" height="6" rx="1.5"/><rect x="14" y="14" width="7" height="6" rx="1.5"/>',
  u4:'<path d="M4 19V5a2 2 0 012-2h13v16H6a2 2 0 00-2 2 2 2 0 002 2h13M8 7h7"/>',
  u5:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  u6:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
  u7:'<path d="M4 5h16v10H9l-5 4z M8 9h8M8 12h5"/>',
  u8:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4"/>',
  u9:'<circle cx="8" cy="6" r="2.5"/><circle cx="16" cy="6" r="2.5"/><path d="M3 20v-2.5A4.5 4.5 0 017.5 13M21 20v-2.5a4.5 4.5 0 00-4.5-4.5M2 16h20"/>',
  u10:'<path d="M6 2h9l4 4v16H6zM15 2v4h4M9 14l2 2 4-4"/>',
  u11:'<rect x="3" y="3" width="18" height="12" rx="1.5"/><path d="M12 15v3M8 21l4-3 4 3M7 11l3-3 3 2 4-4"/>',
  u12:'<path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5M22 9v6"/>'
};
const uicon = u => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${UICON[u.id] || UICON.u1}</svg>`;
const ILL = {
  classroom:`<rect class="k-t" x="8" y="10" width="104" height="70" rx="12"/><rect class="k-d" x="18" y="16" width="70" height="44" rx="5"/><text x="53" y="45" text-anchor="middle" font-size="18" class="k-s">ABC</text><rect class="k-y" x="30" y="61" width="46" height="4" rx="2"/><circle class="k-sk" cx="96" cy="38" r="8"/><path class="k-h" d="M88 36a8 8 0 0116 0c-3-2-6-3-8-3s-5 1-8 3z"/><rect class="k-g" x="86" y="47" width="20" height="26" rx="8"/><path class="o" d="M88 52l-10-8"/><circle class="k-y" cx="22" cy="80" r="0"/>`,
  parents:`<rect class="k-t" x="8" y="10" width="104" height="70" rx="12"/><rect class="k-s" x="14" y="16" width="38" height="20" rx="8"/><path class="k-s" d="M24 34l-4 8 10-6z"/><text x="33" y="30" text-anchor="middle" font-size="10" class="k-i">Hello!</text><rect class="k-y" x="66" y="20" width="40" height="18" rx="8"/><path class="k-y" d="M92 36l6 7-1-8z"/><text x="86" y="32" text-anchor="middle" font-size="9" class="k-i">Hi, Miss!</text><circle class="k-sk" cx="40" cy="52" r="8"/><path class="k-h" d="M32 50a8 8 0 0116 0c-2-3-5-4-8-4s-6 1-8 4z"/><rect class="k-g" x="30" y="61" width="20" height="19" rx="8"/><circle class="k-sk" cx="80" cy="52" r="8"/><path class="k-h" d="M72 52a8 8 0 0116 0c0-6-4-9-8-9s-8 3-8 9z"/><rect class="k-b" x="70" y="61" width="20" height="19" rx="8"/><circle class="k-sk" cx="96" cy="64" r="5"/><rect class="k-y" x="90" y="70" width="12" height="10" rx="5"/>`,
  proficiency:`<rect class="k-t" x="8" y="10" width="104" height="70" rx="12"/><rect class="k-s" x="22" y="18" width="62" height="52" rx="4"/><path class="o" d="M32 30h40M32 38h40M32 46h26"/><path class="k-y" d="M78 58l-6 20 8-5 6 6 2-20z"/><path class="k-g" d="M88 58l6 20-8-5-6 6-2-20z"/><circle class="k-y" cx="84" cy="54" r="13"/><path class="k-d" d="M84 46l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z"/>`,
  level:`<rect class="k-t" x="8" y="10" width="104" height="70" rx="12"/><rect class="k-y" x="24" y="56" width="14" height="18" rx="3"/><rect class="k-g" x="44" y="46" width="14" height="28" rx="3"/><rect class="k-d" x="64" y="34" width="14" height="40" rx="3"/><path class="o" d="M22 44l18-10 14 6 26-20"/><path class="o" d="M70 20h10v10"/><circle class="k-sk" cx="96" cy="44" r="7"/><rect class="k-b" x="88" y="52" width="16" height="22" rx="7"/>`,
  listen:`<rect class="k-t" x="8" y="10" width="104" height="70" rx="12"/><path class="o" d="M36 54v-6a24 24 0 0148 0v6" style="stroke-width:6;stroke:var(--deep)"/><rect class="k-g" x="28" y="50" width="16" height="22" rx="6"/><rect class="k-g" x="76" y="50" width="16" height="22" rx="6"/><path class="o" d="M100 40c4 4 4 12 0 16M106 34c7 8 7 20 0 28" style="stroke:var(--yellow);stroke-width:3"/>`,
  read:`<rect class="k-t" x="8" y="10" width="104" height="70" rx="12"/><path class="k-g" d="M20 30c14-6 26-6 40 2v40c-14-8-26-8-40-2z"/><path class="k-y" d="M100 30c-14-6-26-6-40 2v40c14-8 26-8 40-2z"/><path class="ow" d="M28 40c8-3 16-3 24 1M28 49c8-3 16-3 24 1M68 41c8-4 16-4 24-1M68 50c8-4 16-4 24-1"/>`,
  speak:`<rect class="k-t" x="8" y="10" width="104" height="70" rx="12"/><rect class="k-d" x="48" y="18" width="24" height="38" rx="12"/><path class="o" d="M38 46a22 22 0 0044 0M60 68v8M50 76h20"/><path class="o" d="M92 30c4 3 4 11 0 14M98 24c7 6 7 20 0 26M28 30c-4 3-4 11 0 14M22 24c-7 6-7 20 0 26" style="stroke:var(--yellow);stroke-width:3"/>`,
  write:`<rect class="k-t" x="8" y="10" width="104" height="70" rx="12"/><rect class="k-s" x="24" y="18" width="52" height="58" rx="4"/><path class="o" d="M33 32h32M33 41h32M33 50h20"/><path class="k-y" d="M82 70l26-30 7 6-26 30-10 4z"/><path class="k-d" d="M104 44l7 6 4-5-7-6z"/>`
};
const ill = (k, cls = "ill") => `<svg class="${cls}" viewBox="0 0 120 90" aria-hidden="true">${ILL[k]}</svg>`;
const SKILL_ILL = {listen:"listen", read:"read", speak:"speak", write:"write"};
function ring(p, size, sw, label = true){
  const r = (size - sw) / 2, c = 2 * Math.PI * r, h = size / 2;
  return `<span class="ring" style="width:${size}px;height:${size}px"><svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${h}" cy="${h}" r="${r}" style="fill:none;stroke:var(--track);stroke-width:${sw}"/>${p > 0 ? `<circle cx="${h}" cy="${h}" r="${r}" style="fill:none;stroke:var(--primary);stroke-width:${sw};stroke-linecap:round" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${(c * (1 - p / 100)).toFixed(2)}" transform="rotate(-90 ${h} ${h})"/>` : ""}</svg>${label ? `<b style="font-size:${Math.round(size * .24)}px">${p}%</b>` : ""}</span>`;
}
function book(id){
  if (BOOK[id]) return BOOK[id];
  const r = R[id], notes = [];
  if (r.tip) notes.push([0, "P", r.tip, []]);
  (r.mistakes || []).forEach(m => notes.push([0, "M", m.why, ["x:" + m.w, "v:" + m.r]]));
  return {groups: r.phrases.map(p => [p]), notes};
}
const isStar = k => stars.some(s => s.k === k);
const lv = id => LEVELS.find(l => l.id === id);
const lvVars = l => `--lc:var(--${l.id})`;
const ntVar = t => `--nc:var(--n${t})`;
function speak(text, who){
  try {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    (Array.isArray(text) ? text : [[who || "T", text]]).forEach(([w, t]) => {
      const c = clean(t); if (!c) return;
      const u = new SpeechSynthesisUtterance(c); u.lang = "en-GB"; u.rate = .92; u.pitch = w === "S" ? 1.25 : /^[PCL]$/.test(w) ? .85 : 1;
      speechSynthesis.speak(u);
    });
  } catch(e){}
}
const pkey = (id, gi) => id + "_" + gi;
function phrasePct(id, gi, map){ const e = (map || PR.p)[pkey(id, gi)]; return e ? (e.l ? 50 : 0) + (e.s ? 50 : 0) : 0; }
function routinePct(id, map){ const n = book(id).groups.length; let s = 0; for (let gi = 0; gi < n; gi++) s += phrasePct(id, gi, map); return Math.round(s / n); }
function avgPct(leaves, map){ if (!leaves.length) return 0; return Math.round(leaves.reduce((a, l) => a + routinePct(l.id, map), 0) / leaves.length); }
const topicPct = (tid, map) => avgPct(topicLeaves(tid), map);
const unitPct = (u, map) => avgPct(LEAVES.filter(l => unitOf(l) === u), map);
function todayCount(){ const d = today(); return Object.values(PR.p).filter(e => e.s && e.d === d).length; }
const saidCount = map => Object.values(map || PR.p).filter(e => e.s).length;
const unitKeys = u => Object.keys(SKILLS).map(k => u.id + "_" + k);
const unitTasksDone = (u, t) => unitKeys(u).filter(k => (t || PR.t)[k]).length;
const tasksDone = (tid, t) => TOPICS.find(x => x.id === tid).units.reduce((a, u) => a + unitTasksDone(u, t), 0);
const tasksTotal = tid => TOPICS.find(x => x.id === tid).units.length * 4;
const unitCore = u => LEAVES.filter(l => unitOf(l) === u && CORE.has(l.id));
/* Learn more: the lessons beyond the core. Not needed to finish a unit, but worth learning. */
const STAR = '<svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.8l-5.1 2.7 1-5.7-4.1-4 5.7-.8z" fill="currentColor"/></svg>';
const unitMore = u => LEAVES.filter(l => unitOf(l) === u && !CORE.has(l.id));
const moreDone = (u, map) => unitMore(u).filter(l => routinePct(l.id, map) === 100).length;
const unitMastered = u => unitMore(u).length > 0 && moreDone(u) === unitMore(u).length;
const moreUnits = () => TOPICS.filter(t => !t.soon).flatMap(t => t.units);
const moreDoneAll = map => moreUnits().reduce((a, u) => a + moreDone(u, map), 0);
const moreTotal = () => moreUnits().reduce((a, u) => a + unitMore(u).length, 0);
const nextMoreIn = u => unitMore(u).find(l => routinePct(l.id) < 100);
function nextMore(){
  for (const t of TOPICS.filter(x => !x.soon)) {
    if (!topicUnlocked(t)) break;
    for (const u of t.units) { const l = nextMoreIn(u); if (l) return l; }
  }
  return null;
}
const CORE = new Set(["a2","a6","b2","b3","c2","c5","e1","e4","f4","g2","j2","j3","j4","n1","n3","o5","q1","v4","v6", ...T2_CORE]);
const coreOf = tid => topicLeaves(tid).filter(l => CORE.has(l.id));
const coreDone = (tid, p) => coreOf(tid).filter(l => routinePct(l.id, p) === 100).length;
const openedIn = (tid, o) => topicLeaves(tid).filter(l => (o || PR.o)[l.id]).length;
function topicDone(tid, p, t){ return Math.round((coreDone(tid, p) + tasksDone(tid, t)) / (coreOf(tid).length + tasksTotal(tid)) * 100); }
function overallDone(p, t){ const ts = TOPICS.filter(x => !x.soon); const tot = ts.reduce((a, x) => a + coreOf(x.id).length + tasksTotal(x.id), 0); const got = ts.reduce((a, x) => a + coreDone(x.id, p) + tasksDone(x.id, t), 0); return Math.round(got / tot * 100); }
const freeAccess = () => PG.trainer;
function topicUnlocked(t){ if (freeAccess() || t.n === 1) return true; const prev = TOPICS.find(x => x.n === t.n - 1); return !!prev && coreDone(prev.id) === coreOf(prev.id).length && tasksDone(prev.id) === tasksTotal(prev.id); }
function tasksUnlocked(t){ return freeAccess() || coreDone(t.id) === coreOf(t.id).length; }
const prevUnit = u => { const us = topicOf(u).units, i = us.indexOf(u); return i > 0 ? us[i - 1] : null; };
function unitLock(u){
  if (freeAccess()) return null;
  const t = topicOf(u);
  if (!topicUnlocked(t)) return {why:"topic", text:`Complete Topic ${t.n - 1} first.`};
  const pu = prevUnit(u);
  if (pu && unitTasksDone(pu) < 4) return {why:"prev", unit:pu, text:`Finish the ${pu.eyebrow} tasks first (${unitTasksDone(pu)} of 4 done).`};
  const left = unitCore(u).filter(l => routinePct(l.id) < 100);
  if (left.length) return {why:"core", lesson:left[0], text:`Complete the core lessons in ${u.eyebrow} first (${unitCore(u).length - left.length} of ${unitCore(u).length} done).`};
  return null;
}
function unitTasksOpen(u){ return !unitLock(u); }
function lessonUnlocked(l){ return freeAccess() || topicUnlocked(topicOf(unitOf(l))); }
function nextLesson(){
  for (const t of TOPICS.filter(x => !x.soon)) {
    if (!topicUnlocked(t)) break;
    for (const u of t.units) {
      const l = unitCore(u).find(x => routinePct(x.id) < 100); if (l) return l;
      const k = Object.keys(SKILLS).find(k => !PR.t[u.id + "_" + k]); if (k) return {unit:u, k};
    }
  }
  return null;
}
const TC = {topic1:"var(--blue)", topic2:"var(--green)", topic3:"var(--soon)"};
const TSHORT = {topic1:"English inside the lesson", topic2:"English with parents, colleagues, leaders and at centre events", topic3:"IELTS-style practice in all four skills"};
const SICON = {
  listen:'<svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 12v-1a7 7 0 0114 0v1" stroke="currentColor" stroke-width="1.8" fill="none"/><rect x="2.5" y="11.5" width="4" height="6" rx="1.5" fill="currentColor"/><rect x="13.5" y="11.5" width="4" height="6" rx="1.5" fill="currentColor"/></svg>',
  read:'<svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 4.5c2.5-1 5-1 8 1 3-2 5.5-2 8-1v11c-2.5-1-5-1-8 1-3-2-5.5-2-8-1z M10 5.5v11" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/></svg>',
  speak:'<svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><rect x="7" y="2" width="6" height="10" rx="3" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M4 9.5a6 6 0 0012 0M10 15.5V18" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>',
  write:'<svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><path d="M13.5 3.5l3 3L7 16H4v-3z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/></svg>'
};
const ICHART = '<svg width="24" height="24" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 16l5-5 3 3 6-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 7h4v4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const LOCK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>';
let prDirty = false, prWriting = false, prTimer = null;
function persist(){ if (!PR.start) PR.start = today(); save(prKey(), PR); prDirty = true; clearTimeout(prTimer); prTimer = setTimeout(flushPR, 900); }
async function flushNow(){ clearTimeout(prTimer); while (prWriting) await new Promise(r => setTimeout(r, 200)); await flushPR(); }
async function flushPR(){
  if (!PG.db || !PG.me) { prDirty = false; return; }
  if (prWriting) { prTimer = setTimeout(flushPR, 600); return; }
  prWriting = true; prDirty = false;
  try { await PG.db.doc("progress/" + PG.me).set({p:PR.p, t:PR.t, o:PR.o, q:PR.q, sub:PR.sub, tw:PR.tw, nr:PR.nr || [], sp:PR.sp || {}, dr:PR.dr || {}, wu:PR.wu || {}, bc:PR.bc || {}, start:PR.start, goal:PR.goal, updatedAt:new Date().toISOString()}); PG.saveFail = false; }
  catch(e){ PG.saveFail = true; prDirty = true; clearTimeout(prTimer); prTimer = setTimeout(() => { if (navigator.onLine !== false) flushPR(); }, 60000); }
  prWriting = false;
}
function markListen(id, gi){ const k = pkey(id, gi), e = PR.p[k] || {}; if (!e.l) { PR.p[k] = Object.assign({}, e, {l:1}); persist(); } }
function toggleSaid(id, gi){ const k = pkey(id, gi), e = Object.assign({}, PR.p[k] || {}); if (e.s) { e.s = 0; delete e.d; } else { e.s = 1; e.l = 1; e.d = today(); } PR.p[k] = e; persist(); return !!e.s; }
let current = null, pendingOpen = null;
function go(id){ if (location.hash.slice(1) === id) route(); else location.hash = id; }
addEventListener("hashchange", () => { if (location.hash.slice(1) !== current) route(); });
function route(){
  if (!SESSION) return showSignIn();
  const h = location.hash.slice(1) || "home";
  current = h;
  try { speechSynthesis.cancel(); } catch(e){}
  const n = NODES[h], t = TOPICS.find(x => x.id === h);
  let page = "home", html;
  const tk = h.match(/^(topic\d)-(tasks|listen|read|speak|write)$/), ut = h.match(/^(u\d+)-(listen|read|speak|write)$/);
  if (h === "topics") { page = "topics"; html = topicsPage(); }
  else if (t) { page = "topics"; html = t.soon ? soonPage(t) : topicPage(t, "phrases"); }
  else if (ut && NODES[ut[1]]) { page = "tasks"; html = unitTaskPage(NODES[ut[1]], ut[2]); }
  else if (tk) { const tt = TOPICS.find(x => x.id === tk[1]); page = tk[2] === "tasks" ? "topics" : "tasks"; html = tk[2] === "tasks" ? (tt.soon ? soonPage(tt) : topicPage(tt, "tasks")) : taskPage(tt, tk[2]); }
  else if (h === "tasks" || h === "audio" || AP.some(p => p.id === h)) { page = "tasks"; html = tasksPage(); }
  else if (h === "me") { page = "me"; html = mePage(); }
  else if (h === "saved") { page = "me"; html = savedPage(); }
  else if (h === "trainer") { page = "me"; html = trainerPage(); }
  else if (h === "search") { page = "home"; html = searchPage(); }
  else if (h === "rubric") { page = PG.trainer ? "review" : "me"; html = rubricPage(); }
  else if (h === "review") { page = "review"; html = reviewPage(); setTimeout(fillNames, 0); }
  else if (h === "rvitem") { page = "review"; html = rvItemPage(); setTimeout(fillNames, 0); }
  else if (h === "content") { page = "review"; html = contentPage(); }
  else if (h === "notifs") { page = "home"; html = notifsPage(); }
  else if (h === "challenges") { page = "home"; html = challengesPage(); }
  else if (/^drill-\d{4}-\d{2}-\d{2}$/.test(h)) { page = "home"; html = drillPage(h.slice(6)); }
  else if (n && n.leaf) { page = "topics"; html = routinePage(n); }
  else if (n && n.kind === "section") { page = "topics"; html = unitPage(unitOf(n)); }
  else if (n && n.parent && n.parent.id === "root") { page = "topics"; html = unitPage(n); }
  else html = homePage();
  app.innerHTML = html;
  document.querySelectorAll("[data-nav]").forEach(b => { if (b.dataset.nav === page) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
  after(h, n);
}
function after(h, n){
  if (n && n.leaf && pendingOpen != null) {
    const d = document.getElementById("g" + pendingOpen); pendingOpen = null;
    if (d) { d.open = true; d.scrollIntoView({block:"center"}); return; }
  }
  scrollTo(0, 0);
  if (h === "search") { const i = document.getElementById("q"); i.focus(); i.oninput = () => { document.getElementById("results").innerHTML = results(i.value); }; }
  if (h === "trainer") mountProgress();
  setupChal();
  if (h === "home" || h === "me") fillHello();
  if (h === "notifs" || h === "me") fillNames();
  if (h === "notifs") markNotifsRead();
}
const backBtn = (to, label) => `<button class="iconbtn" data-go="${to}" aria-label="${esc(label)}">${I.back}</button>`;
const LVNAME = ["Beginner (A1)", "Elementary (A2)", "Intermediate (B1)", "Upper-intermediate (B2)", "Advanced (C1)"];
const IC2 = {
  bulb:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2V17h5v-1.1c0-.8.4-1.5 1-2A6 6 0 0012 3z"/></svg>',
  trophy:'<svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10v5a5 5 0 01-10 0z" fill="var(--orange)"/><path d="M7 6H4v1.5A3.5 3.5 0 007.5 11M17 6h3v1.5A3.5 3.5 0 0116.5 11" fill="none" stroke="var(--orange)" stroke-width="1.8"/><path d="M12 14v3M8.5 20h7l-1-3h-5z" fill="var(--orange)" stroke="var(--orange)" stroke-width="1.2" stroke-linejoin="round"/></svg>',
  unlock:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 017.7-1.5"/></svg>',
  bolt:'<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="currentColor"/></svg>',
  muscle:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 18c3 2 9 2 13 0 2-1 3-3 3-5 0-3-3-5-6-4l-2-4c-1-2-3-2-4-1l1 3-3 1 1 3c-2 1-3 4-3 7z"/></svg>'
};
const coreTotal = () => TOPICS.filter(x => !x.soon).reduce((a, x) => a + coreOf(x.id).length, 0);
const coreDoneAll = () => TOPICS.filter(x => !x.soon).reduce((a, x) => a + coreDone(x.id), 0);
function levelCard(){
  const lvl = myLevel(), nx = nextLesson(), done = coreDoneAll(), tot = coreTotal();
  const lvb = PG.trainer ? null : myLive().band;
  const lvText = PG.trainer ? "Trainer view" : lvl != null ? `${LVL[lvl]} · band ${fmtB(lvb)}` : "No results yet";
  let cur = "";
  if (nx && nx.unit) cur = `<button class="curr" data-go="${nx.unit.id}-${nx.k}"><span class="av">${SICON[nx.k]}</span><span class="cx"><b>Start my next task: ${esc(TASK_NAME[nx.k])}</b><small class="cunit">${esc(nx.unit.eyebrow)} · ${esc(nx.unit.title)} · Step 2 · ${unitTasksDone(nx.unit)} of 4 tasks done</small></span>${I.arrow}</button>`;
  else if (nx) { const u = unitOf(nx), started = routinePct(nx.id) > 0 || PR.o[nx.id]; cur = `<button class="curr" data-go="${nx.id}"><span class="av" style="--u:${u.color}">${uicon(u)}</span><span class="cx"><b>${started ? "Continue my last lesson" : "Start my next lesson"}</b><small class="cunit">${esc(u.eyebrow)} · ${esc(u.title)} · Step 1 · ${unitCore(u).filter(x => routinePct(x.id) === 100).length} of ${unitCore(u).length} core lessons done</small></span>${I.arrow}</button>`; }
  if (!nx && !PG.trainer) { const m = nextMore(); if (m) { const mu = unitOf(m); cur = `<button class="curr" data-go="${m.id}"><span class="av" style="--u:${mu.color}">${uicon(mu)}</span><span class="cx"><b>Keep learning: ${esc(m.title)}</b><small class="cunit">Learn more · ${esc(mu.eyebrow)} · ${esc(mu.title)} · ${moreDone(mu)} of ${unitMore(mu).length} done</small></span>${I.arrow}</button>`; } }
  const area = nx ? (nx.unit ? nx.unit.title : unitOf(nx).title) : "";
  return `<section class="lvcard" aria-label="Your level and progress">
    <p class="lvl">Level: <b>${esc(lvText)}</b></p>
    ${area ? `<p class="tipl">${IC2.bulb}<span>Complete this ${nx.unit ? "task" : "lesson"} to improve your skills in ${esc(area.toLowerCase())}</span></p>` : `<p class="tipl">${IC2.bulb}<span>You've completed every core lesson and task available. Well done!</span></p>`}
    <div class="lvprog"><p><b>${done}</b> out of <b>${tot}</b> core lessons</p>${IC2.trophy}</div>
    <span class="bar lvbar" aria-hidden="true"><i style="width:${tot ? Math.round(done / tot * 100) : 0}%"></i></span>
    ${PG.trainer ? "" : `<p class="lvmore">${STAR}<span><b>${moreDoneAll()}</b> of ${moreTotal()} Learn more lessons done</span></p>`}
    ${cur}
  </section>`;
}
const DAYMS = 864e5;
const dayNum = (dstr) => { const s = PR.start || today(); return Math.max(1, Math.round((new Date(dstr + "T00:00:00") - new Date(s + "T00:00:00")) / DAYMS) + 1); };
const addDays = (dstr, n) => { const x = new Date(dstr + "T00:00:00"); x.setDate(x.getDate() + n); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`; };
function challengeFor(dstr){
  const saved = (PR.dr || {})[dstr];
  if (saved && saved.items) return chMeta(saved.items, saved.starter);
  const open = TOPICS.filter(t => !t.soon && topicUnlocked(t)), ids = new Set(open.flatMap(t => topicLeaves(t.id)).map(l => l.id));
  const pool = Object.entries(PR.p).filter(([k, e]) => e.s && e.d && e.d < dstr).map(([k, e]) => { const i = k.lastIndexOf("_"); return {id:k.slice(0, i), gi:+k.slice(i + 1), d:e.d}; })
    .filter(x => ids.has(x.id) && book(x.id).groups[x.gi]).sort((a, b) => a.d.localeCompare(b.d) || hashStr(dstr + a.id + a.gi) - hashStr(dstr + b.id + b.gi));
  if (pool.length >= 5) return chMeta(pool.slice(0, 5).map(({id, gi}) => ({id, gi})), false);
  const nx = nextLesson(), l = nx && !nx.unit ? nx : open.length ? topicLeaves(open[0].id)[0] : null;
  if (!l) return null;
  return chMeta(book(l.id).groups.slice(0, 5).map((g, gi) => ({id:l.id, gi})), true);
}
function chMeta(items, starter){
  const words = items.reduce((a, x) => a + book(x.id).groups[x.gi][0].split(/\s+/).length, 0) / Math.max(1, items.length);
  const units = [...new Set(items.map(x => unitOf(NODES[x.id])))];
  return {items, starter, type:starter ? "Starter practice" : "Phrase review", title:`${items.length} phrases ${starter ? "to get started" : "to review"}`, from:units.map(u => `Topic ${topicOf(u).n} · ${u.eyebrow}`).join(", "), diff:words <= 6 ? 1 : words <= 10 ? 2 : 3};
}
const chDone = dstr => !!((PR.dr || {})[dstr] || {}).done;
function drillPage(dstr){
  const c = challengeFor(dstr), back = `<button class="back" data-go="home">${I.back} Home</button>`;
  if (!c) return back + `<div class="empty">No review today. Open a lesson to start practising phrases.</div>`;
  PR.dr = PR.dr || {}; if (!PR.dr[dstr]) { PR.dr[dstr] = {items:c.items, starter:c.starter}; persist(); }
  const said = PR.dr[dstr].said || {}, all = c.items.every((x, i) => said[i]);
  return back + `<header class="pagehead" style="--u:var(--deep)"><span class="k">Daily challenge · Day ${dayNum(dstr)}${dstr === today() ? " · Today" : ""}</span><h2>${esc(c.title)}</h2><p>${c.starter ? "Your first phrases. Listen, say each one aloud, then tap I said it." : "Phrases you haven't said for a while. Try to say each one from memory first, then listen and check. Tap I said it when you've said it aloud."}</p></header>
  <div class="drill">${c.items.map((x, i) => { const g = book(x.id).groups[x.gi], l = NODES[x.id]; return `<section class="card dcard${said[i] ? " ok" : ""}"><small>${esc(l.title)} · ${esc(unitOf(l).eyebrow)}</small><p class="dph">${fmt(g[0])}</p><div class="acts"><button class="btn" data-drlisten="${x.id}|${x.gi}">${I.speak} Listen</button><button class="btn${said[i] ? "" : " primary"}" data-drsaid="${dstr}|${i}" aria-pressed="${!!said[i]}">${said[i] ? `${I.check} I said it` : "I said it"}</button><button class="linkbtn" data-open="${x.id}|${x.gi}">Open the lesson</button></div></section>`; }).join("")}</div>
  ${chDone(dstr) ? `<div class="notice">${I.check} Challenge complete. Come back tomorrow for a new one.</div>` : `<button class="btn primary wide" data-drdone="${dstr}"${all ? "" : " disabled"}>${all ? "Finish today's challenge" : `Say all ${c.items.length} phrases to finish`}</button>`}`;
}
const bolts = d => `<span class="bolts" aria-label="Difficulty ${d} of 3">${[1, 2, 3].map(i => `<span class="${i <= d ? "on" : ""}">${i <= d ? IC2.bolt : ""}</span>`).join("")}</span>`;
function challengeCard(dstr, isToday){
  const c = challengeFor(dstr); if (!c) return "";
  const done = chDone(dstr), future = dstr > today();
  if (future) return `<div class="chal locked" aria-label="Day ${dayNum(dstr)}, opens later"><div class="chtop"><b>Day ${dayNum(dstr)}</b>${LOCK}</div><small>Opens ${dstr === addDays(today(), 1) ? "tomorrow" : esc(fmtDate(dstr))}</small><p class="cht">A new challenge</p><div class="chdiff">Difficulty level: ${bolts(0)}</div></div>`;
  return `<button class="chal${done ? " done" : ""}" data-go="drill-${dstr}"><div class="chtop"><b>Day ${dayNum(dstr)} · ${isToday ? "Today" : dstr === addDays(today(), -1) ? "Yesterday" : esc(fmtDate(dstr))}</b>${done ? `<span class="done-tag">${I.check}</span>` : IC2.unlock}</div><small>${esc(c.type)}${!isToday && !done ? " · Catch up" : ""}</small><p class="cht">${esc(c.title)}</p><div class="chdiff">Difficulty level: ${bolts(c.diff)}</div></button>`;
}
const CH_DAYS = 2;
const chDays = () => { const n = Math.min(dayNum(today()), CH_DAYS), out = []; for (let i = 0; i < n; i++) out.push(addDays(today(), -i)); return out; };
function setupChal(){
  const r = document.getElementById("chrow"), dots = document.getElementById("chdots"); if (!r) return;
  const n = r.children.length; let idx = +r.dataset.start || 0;
  const goTo = (i, smooth = true) => {
    idx = Math.max(0, Math.min(n - 1, i));
    r.scrollTo({left: idx * r.clientWidth, behavior: smooth && !matchMedia("(prefers-reduced-motion: reduce)").matches ? "smooth" : "auto"});
    if (dots) [...dots.children].forEach((s, j) => { s.classList.toggle("on", j === idx); s.setAttribute("aria-current", j === idx ? "true" : "false"); });
  };
  requestAnimationFrame(() => goTo(idx, false));
  let x0 = null, s0 = 0, moved = false;
  r.addEventListener("pointerdown", e => { if (e.button > 0) return; x0 = e.clientX; s0 = r.scrollLeft; moved = false; });
  const move = e => { if (x0 == null) return; const dx = e.clientX - x0; if (Math.abs(dx) > 6) { moved = true; r.classList.add("drag"); } if (moved) r.scrollLeft = s0 - dx; };
  const end = e => { if (x0 == null) return; const dx = (e.clientX ?? x0) - x0; x0 = null; r.classList.remove("drag"); const w = r.clientWidth; goTo(dx < -w * .12 ? idx + 1 : dx > w * .12 ? idx - 1 : idx); };
  addEventListener("pointermove", move); addEventListener("pointerup", end); addEventListener("pointercancel", end);
  r.addEventListener("click", e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  r.addEventListener("wheel", e => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) { e.preventDefault(); if (!r._lock) { r._lock = true; goTo(idx + (e.deltaX > 0 ? 1 : -1)); setTimeout(() => r._lock = false, 450); } } }, {passive:false});
  r.addEventListener("keydown", e => { if (e.key === "ArrowRight") { goTo(idx + 1); e.preventDefault(); } if (e.key === "ArrowLeft") { goTo(idx - 1); e.preventDefault(); } });
  if (dots) dots.addEventListener("click", e => { const b = e.target.closest("button"); if (b) { e.stopPropagation(); goTo([...dots.children].indexOf(b)); } });
  addEventListener("resize", () => goTo(idx, false));
}
function homePage(){
  const learned = saidCount();
  let h = `<header class="top"><img class="logo" src="${LOGO}" alt="Sparks English" width="150" height="30"><button class="iconbtn" data-go="search" aria-label="Search phrases">${I.search}</button>${bellBtn()}<button class="avbtn" data-go="me" aria-label="My account"><span data-initial>${esc(((PG.name || "Y").trim().charAt(0) || "Y").toUpperCase())}</span></button></header>
  <div><h1 class="title" style="display:flex;justify-content:center;align-items:center;gap:.32em">${window.SEPA_ICON ? `<img alt="" src="${window.SEPA_ICON}" style="height:1.15em;width:1.15em;flex:none;margin-top:-.06em">` : ""}SEPA Course</h1><p class="sub hello">Sparks English Proficiency Acceleration Course</p></div>
  ${levelCard()}
  <section class="sec" aria-label="Daily challenges"><h2 class="h2">Daily challenges</h2>
    ${(() => { const ds = [...chDays().reverse(), addDays(today(), 1)], ti = ds.length - 2;
      return `<div class="chrow" id="chrow" data-start="${ti}" tabindex="0" aria-label="Daily challenges. Use the left and right arrow keys to move between days.">${ds.map(d => challengeCard(d, d === today())).join("")}</div>
      <div class="chdots" id="chdots">${ds.map((d, i) => `<button type="button" class="${i === ti ? "on" : ""}" aria-label="Day ${dayNum(d)}"></button>`).join("")}</div>
      <p class="chhint">Swipe left or right to see other days</p>`; })()}</section>
  <section class="sec" aria-label="Phrases learned"><div class="rowhead2"><h2 class="h2">Learning phrases</h2><button class="linky2" data-go="search">Phrase bank</button></div>
    <p class="learned">${IC2.muscle}<span><b>${learned}</b> phrase${learned === 1 ? " has" : "s have"} already been learned</span></p></section>
  <section class="sec" aria-label="Topics"><h2 class="h2">Your course</h2><div class="tlist">${TOPICS.map(topicCard).join("")}</div></section>`;
  return h;
}
function challengesPage(){
  const t0 = today(), days = [];
  for (let i = 0; i < Math.min(dayNum(t0), CH_DAYS); i++) days.push(addDays(t0, -i));
  const done = days.filter(chDone).length;
  return `<button class="back" data-go="home">${I.back} Home</button>
  <header class="pagehead" style="--u:var(--deep)"><span class="k">Daily challenges</span><h2>Day ${dayNum(t0)}</h2><p>A short review every day: say 5 phrases you've practised before. Phrases you haven't said for a while come back first. ${done} of the last ${days.length} challenge${days.length > 1 ? "s" : ""} done.</p></header>
  <div class="chlist">${challengeCard(addDays(t0, 1))}${days.map((d, i) => challengeCard(d, i === 0)).join("")}</div>`;
}
function topicCard(t){
  const locked = !t.soon && !topicUnlocked(t), p = t.soon ? 0 : topicDone(t.id);
  const meta = t.soon ? `<span class="tag">Coming soon</span>` : locked ? `<span class="lockline">${LOCK} Complete Topic ${t.n - 1} to unlock</span>` : `<span class="tbar"><span class="bar" aria-hidden="true"><i style="width:${p}%"></i></span><b>${p}%</b></span>`;
  return `<button class="tcard${locked ? " locked" : ""}${t.soon ? " soon" : ""}" style="--u:${TC[t.id]}" data-go="${t.id}"><span class="num">TOPIC ${t.n}</span><h3>${esc(t.title)}</h3><p>${esc(TSHORT[t.id])}${t.soon ? "" : ` · ${t.units.length} units`}</p>${meta}</button>`;
}
async function fillHello(){
  if (!PG.user) return;
  let n = ""; try { n = (await PG.user.name()) || ""; } catch(e){}
  PG.name = n;
  document.querySelectorAll("[data-hello]").forEach(el => { if (n) el.textContent = `Hi, ${n.split(" ")[0]}`; });
  document.querySelectorAll("[data-myname]").forEach(el => { el.textContent = n || "You"; });
  document.querySelectorAll("[data-initial]").forEach(el => { el.textContent = (n || "Y").trim().charAt(0).toUpperCase(); });
  document.querySelectorAll("[data-myemail]").forEach(el => { el.textContent = PG.email || ""; el.hidden = !PG.email; });
}
function topicsPage(){
  return `<header class="pagehead" style="--u:var(--deep)"><span class="k">SEPA course</span><h2>Topics</h2><p>Three topics, taken in order. Inside a topic, every lesson is open. Complete its core lessons and skills tasks to unlock the next topic.</p></header>
  <div class="tlist">${TOPICS.map(topicCard).join("")}</div>`;
}
function topicHead(t){
  return `<button class="back" data-go="topics">${I.back} All topics</button>
  <header class="pagehead" style="--u:${TC[t.id]}"><span class="k">SEPA · Topic ${t.n}${t.soon ? " · Coming soon" : ""}</span><h2>${esc(t.title)}</h2><p>${esc(t.desc)}</p>${t.soon || !topicUnlocked(t) ? "" : `<p class="phmeta">${coreDone(t.id)} of ${coreOf(t.id).length} core lessons complete · ${tasksDone(t.id)} of 4 skills tasks done</p>`}</header>`;
}
function topicPage(t, tab){
  if (!topicUnlocked(t)) return lockedTopicPage(t);
  return topicHead(t) + `<p class="lead">Work through the units in order. In each unit: <b>1</b> learn the core lessons, <b>2</b> do the four tasks, <b>3</b> move on to the next unit. Finish all ${t.units.length} units to open ${TOPICS.find(x => x.n === t.n + 1) ? `Topic ${t.n + 1}` : "the next topic"}.</p>
  <div class="ucards">${t.units.map(unitCard).join("")}</div>
  <p class="sub">${coreDone(t.id)} of ${coreOf(t.id).length} core lessons and ${tasksDone(t.id)} of ${tasksTotal(t.id)} unit tasks done. Looking for a phrase? <button class="linkbtn" data-go="search">Search the phrase bank</button></p>`;
}
const TASK_ORDER = ["listen", "read", "write", "speak"];
const TASK_NAME = {listen:"Listening quiz", read:"Reading quiz", write:"Writing task", speak:"Speaking role-play"};
function nextUnitOf(u){ const t = topicOf(u), us = t.units, i = us.indexOf(u); if (i < us.length - 1) return us[i + 1]; const nt = TOPICS.find(x => x.n === t.n + 1); return nt && !nt.soon ? nt.units[0] : null; }
function unitState(u){
  const cores = unitCore(u), cd = cores.filter(l => routinePct(l.id) === 100).length, td = unitTasksDone(u), t = topicOf(u), pu = prevUnit(u);
  const waiting = !freeAccess() && (!topicUnlocked(t) || !!(pu && unitTasksDone(pu) < 4));
  return {cores, cd, td, pu, waiting, done:cd === cores.length && td === 4, stage:cd < cores.length ? 1 : td < 4 ? 2 : 3};
}
const nextTaskOf = u => TASK_ORDER.find(k => !PR.t[u.id + "_" + k]);
function unitStepper(u, s){
  const st = (i) => s.done || s.stage > i ? "done" : s.stage === i ? "cur" : "";
  return `<ol class="ustep" aria-label="Your path through this unit">
    <li class="${st(1)}"><span class="un">${s.stage > 1 || s.done ? I.check : 1}</span><span><b>Learn</b><small>${s.cd} of ${s.cores.length} core lessons</small></span></li>
    <li class="${st(2)}"><span class="un">${s.stage > 2 || s.done ? I.check : 2}</span><span><b>Show what you can do</b><small>${s.td} of 4 tasks</small></span></li>
    <li class="${s.done ? "done cur" : ""}"><span class="un">${s.done ? I.check : 3}</span><span><b>Move on</b><small>${s.done ? "Unit complete" : "Next unit"}</small></span></li></ol>`;
}
function lessonStatus(l){ const p = routinePct(l.id); return p === 100 ? `<span class="done-tag">${I.check}</span>` : `<span class="lstat">${p ? `${p}%` : "Start"}</span>`; }
function unitPage(u){
  const t = topicOf(u);
  if (!topicUnlocked(t)) return lockedTopicPage(t);
  const s = unitState(u), lk = unitLock(u), nu = nextUnitOf(u), extra = LEAVES.filter(l => unitOf(l) === u && !CORE.has(l.id));
  let h = `<button class="back" data-go="${t.id}">${I.back} Topic ${t.n}: ${esc(t.title)}</button>
  <header class="pagehead" style="--u:${u.color}"><span class="k">Topic ${t.n} · ${esc(u.eyebrow)}</span><h2>${esc(u.title)}</h2>${u.goal ? `<p>${esc(u.goal)}</p>` : ""}</header>`;
  if (s.waiting && s.pu) h += `<p class="notice">This unit starts after the <b>${esc(s.pu.eyebrow)}</b> tasks. You can look at its lessons now. <button class="linkbtn" data-go="${s.pu.id}">Go to ${esc(s.pu.eyebrow)}</button></p>`;
  h += unitStepper(u, s);
  const firstCore = s.cores.find(l => routinePct(l.id) < 100);
  h += `<section class="card ustage${s.stage === 1 ? " cur" : ""}"><div class="ushead"><span class="un">${s.cd === s.cores.length ? I.check : 1}</span><div><b>Step 1 · Learn the core lessons</b><small>Listen to every phrase, say it aloud and tap <b>I said it</b>. ${s.cd} of ${s.cores.length} complete.</small></div></div>
    <div class="rows">${s.cores.map(l => `<button class="rowi${l === firstCore ? " next" : ""}" data-go="${l.id}"><span class="thumb" style="--u:${u.color}">${uicon(u)}</span><span class="txt"><b>${esc(l.title)}</b><small>${book(l.id).groups.length} phrases${l === firstCore ? " · Up next" : ""}</small></span>${lessonStatus(l)}</button>`).join("")}</div></section>`;
  if (extra.length) {
    const md = extra.filter(l => routinePct(l.id) === 100).length, nm = extra.find(l => routinePct(l.id) < 100);
    h += `<details class="card ustage more" data-lmore="1"${lmoreOpen() ? " open" : ""}><summary class="ushead"><span class="un">${STAR}</span><div><b>Learn more · ${md} of ${extra.length} done${md === extra.length ? " · Unit mastered" : ""}</b><small>Not needed to finish the unit, but you'll use these phrases in class. Learn them to reach your target level faster.${nm ? ` Up next: ${esc(nm.title)}.` : ""}</small></div><span class="lmchev" aria-hidden="true">${I.arrow}</span></summary>
    <div class="rows">${extra.map(l => `<button class="rowi${l === nm ? " next" : ""}" data-go="${l.id}"><span class="thumb" style="--u:${u.color}">${uicon(u)}</span><span class="txt"><b>${esc(l.title)}</b><small>${book(l.id).groups.length} phrases${l === nm ? " · Up next" : ""}</small></span>${lessonStatus(l)}</button>`).join("")}</div></details>`;
  }
  const nk = nextTaskOf(u);
  h += `<section class="card ustage${s.stage === 2 ? " cur" : ""}${lk ? " off" : ""}"><div class="ushead"><span class="un">${s.td === 4 ? I.check : lk ? LOCK : 2}</span><div><b>Step 2 · Show what you can do</b><small>${lk ? esc(lk.text) : `Four tasks, best done in this order. ${s.td} of 4 done.`}</small></div></div>
    <div class="list">${TASK_ORDER.map(k => taskRow(u, k, !lk)).join("")}</div>${!lk && nk ? `<button class="btn primary wide" data-go="${u.id}-${nk}">${s.td ? "Continue" : "Start"} with the ${esc(lc(TASK_NAME[nk]))} ${I.arrow}</button>` : ""}</section>`;
  h += `<section class="card ustage${s.done ? " cur" : ""}${s.done ? "" : " off"}"><div class="ushead"><span class="un">${s.done ? I.check : 3}</span><div><b>Step 3 · Move on</b><small>${s.done ? (nu ? `${esc(u.eyebrow)} complete. ${topicOf(nu) !== t ? `Topic ${t.n} is complete too!` : ""}` : "You've finished every open unit. Topic 3 is coming soon.") : `Finish the four tasks to open ${nu ? esc(topicOf(nu) !== t ? `Topic ${topicOf(nu).n}` : nu.eyebrow) : "the next step"}.`}</small></div></div>
    ${s.done && nu ? `<button class="btn primary wide" data-go="${nu.id}">Go to ${topicOf(nu) !== t ? `Topic ${topicOf(nu).n} · ` : ""}${esc(nu.eyebrow)}: ${esc(nu.title)} ${I.arrow}</button>` : ""}</section>`;
  if (u.ess) h += `<details class="essbox"><summary>Essentials: ${esc(u.ess.t)}</summary><ul>${u.ess.items.map(([a, b]) => `<li><b>${esc(a)}:</b> ${esc(b)}</li>`).join("")}</ul></details>`;
  return h;
}
function unitCard(u){
  const s = unitState(u), cur = !s.done && !s.waiting && (nextLesson() || {});
  const isNext = cur && (cur === u || cur.unit === u || unitOf(cur) === u);
  const badge = s.done ? `<span class="ubadge done">${I.check} Complete</span>` : s.waiting ? `<span class="ubadge wait">${LOCK} After ${esc(s.pu.eyebrow)}</span>` : isNext ? `<span class="ubadge now">You're here</span>` : `<span class="ubadge">In progress</span>`;
  return `<button class="ucard${isNext ? " now" : ""}${s.waiting ? " wait" : ""}" data-go="${u.id}" style="--u:${u.color}"><span class="thumb">${uicon(u)}</span><span class="txt"><small>${esc(u.eyebrow)}</small><b>${esc(u.title)}</b><span class="umeta"><span>Lessons ${s.cd}/${s.cores.length}</span><span>Tasks ${s.td}/4</span>${unitMore(u).length ? `<span>Learn more ${moreDone(u)}/${unitMore(u).length}</span>` : ""}${badge}${unitMastered(u) ? `<span class="ubadge mast">${STAR} Unit mastered</span>` : ""}</span></span>${I.arrow}</button>`;
}
function lessonNext(l){
  const u = unitOf(l), core = CORE.has(l.id), p = routinePct(l.id);
  if (!core) {
    if (p < 100) return `<div class="nextstep"><b>${STAR} Learn more</b><p>Not needed to finish ${esc(u.eyebrow)}, but you'll use these phrases in class. Say every phrase aloud and tap <b>I said it</b>. ${p}% done.</p></div>`;
    const nm = nextMoreIn(u);
    if (nm) return `<div class="nextstep ok"><b>${I.check} Lesson learned</b><p>Next in Learn more: ${esc(nm.title)}. ${moreDone(u)} of ${unitMore(u).length} done in ${esc(u.eyebrow)}.</p><button class="btn primary" data-go="${nm.id}">Next lesson ${I.arrow}</button></div>`;
    return `<div class="nextstep ok"><b>${STAR} ${esc(u.eyebrow)} mastered</b><p>You've learned every Learn more lesson in this unit. Well done!</p><button class="btn primary" data-go="${u.id}">Back to ${esc(u.eyebrow)} ${I.arrow}</button></div>`;
  }
  if (p < 100) return `<div class="nextstep muted"><b>To finish this lesson</b><p>Say every phrase aloud and tap <b>I said it</b>. ${p}% done.</p></div>`;
  const nl = unitCore(u).find(x => routinePct(x.id) < 100), lk = unitLock(u), nk = nextTaskOf(u);
  if (nl) return `<div class="nextstep ok"><b>${I.check} Lesson complete</b><p>Next core lesson in ${esc(u.eyebrow)}: ${esc(nl.title)}.</p><button class="btn primary" data-go="${nl.id}">Next lesson ${I.arrow}</button></div>`;
  if (lk) return `<div class="nextstep ok"><b>${I.check} All core lessons in ${esc(u.eyebrow)} done</b><p>${esc(lk.text)} Then this unit's tasks open.</p><button class="btn primary" data-go="${lk.unit ? lk.unit.id : u.id}">Go to ${esc(lk.unit ? lk.unit.eyebrow : u.eyebrow)} ${I.arrow}</button>${nextMoreIn(u) ? `<p class="alt">Or keep learning: <button class="linkbtn" data-go="${nextMoreIn(u).id}">${esc(nextMoreIn(u).title)}</button> (Learn more)</p>` : ""}</div>`;
  if (nk) return `<div class="nextstep ok"><b>${I.check} All core lessons in ${esc(u.eyebrow)} done</b><p>Step 2: show what you can do in four tasks. Start with the ${esc(lc(TASK_NAME[nk]))}.</p><button class="btn primary" data-go="${u.id}-${nk}">Start the ${esc(lc(TASK_NAME[nk]))} ${I.arrow}</button>${nextMoreIn(u) ? `<p class="alt">Or keep learning: <button class="linkbtn" data-go="${nextMoreIn(u).id}">${esc(nextMoreIn(u).title)}</button> (Learn more)</p>` : ""}</div>`;
  return `<div class="nextstep ok"><b>${I.check} ${esc(u.eyebrow)} is complete</b><button class="btn primary" data-go="${u.id}">See your unit ${I.arrow}</button></div>`;
}
function taskStepper(u, k){
  return `<ol class="tstep" id="tstep" aria-label="Unit tasks">${TASK_ORDER.map((x, i) => { const dn = !!PR.t[u.id + "_" + x]; return `<li class="${dn ? "done" : ""}${x === k ? " cur" : ""}"><button data-go="${u.id}-${x}"${x === k ? ' aria-current="step"' : ""}><span class="un">${dn ? I.check : i + 1}</span>${SKILLS[x]}</button></li>`; }).join("")}</ol>`;
}
function taskNext(u, k){
  if (!PR.t[u.id + "_" + k]) return "";
  const nk = nextTaskOf(u), nu = nextUnitOf(u), t = topicOf(u);
  if (nk) return `<div class="nextstep ok"><b>${I.check} ${esc(TASK_NAME[k])} done</b><p>Next task in ${esc(u.eyebrow)}: the ${esc(lc(TASK_NAME[nk]))}. ${4 - unitTasksDone(u)} to go.</p><button class="btn primary" data-go="${u.id}-${nk}">Go to the ${esc(lc(TASK_NAME[nk]))} ${I.arrow}</button></div>`;
  return `<div class="nextstep ok big"><b>${I.check} ${esc(u.eyebrow)} complete!</b><p>${nu ? `You've finished all four tasks. ${topicOf(nu) !== t ? `Topic ${t.n} is complete, and Topic ${topicOf(nu).n} is now open.` : `${nu.eyebrow} is now open.`}` : "You've finished every open unit. Topic 3 is coming soon."}</p>${nu ? `<button class="btn primary" data-go="${nu.id}">Go to ${esc(nu.eyebrow)}: ${esc(nu.title)} ${I.arrow}</button>` : `<button class="btn primary" data-go="me">See your progress ${I.arrow}</button>`}</div>`;
}
function updateTaskNext(key){
  const [uid, k] = key.split("_"), u = NODES[uid]; if (!u) return;
  const a = document.getElementById("tnext"); if (a) a.innerHTML = taskNext(u, k);
  const b = document.getElementById("tstep"); if (b) b.outerHTML = taskStepper(u, k);
}
function lockedTopicPage(t){
  const prev = TOPICS.find(x => x.n === t.n - 1);
  return topicHead(t) + `<div class="lockbox">${LOCK}<b>Topic ${t.n} is locked</b><p>Complete Topic ${prev.n} first: its ${coreOf(prev.id).length} core lessons (${coreDone(prev.id)} done) and its ${tasksTotal(prev.id)} unit tasks (${tasksDone(prev.id)} done).</p><button class="btn primary" data-go="${prev.id}">Go to Topic ${prev.n} ${I.arrow}</button></div>`;
}
function taskPage(t, k){ return topicPage(t, "tasks"); }
function taskDesc(u, k){ const key = u.id + "_" + k; return (k === "listen" || k === "read") ? (QUIZ[key] ? QUIZ[key].intro : "") : ((UT[u.id] || {})[k] || ""); }
function unitTaskPage(u, k){
  const t = topicOf(u), key = u.id + "_" + k, d = PR.t[key], ut = UT[u.id] || {};
  const head = `<button class="back" data-go="${u.id}">${I.back} ${esc(u.eyebrow)}: ${esc(u.title)}</button>
  <header class="pagehead" style="--u:${TC[t.id]}"><span class="k">Topic ${t.n} · ${esc(u.eyebrow)} · ${esc(u.title)}${d ? " · Done" : ""}</span><h2>${SKILLS[k]}</h2><p>${esc(taskDesc(u, k))}</p></header>`;
  const lk = unitLock(u);
  if (lk) { const btn = lk.why === "core" ? `<button class="btn primary" data-go="${lk.lesson.id}">Go to ${esc(lk.lesson.title)} ${I.arrow}</button>` : lk.why === "prev" ? `<button class="btn primary" data-go="${lk.unit.id}">Go to ${esc(lk.unit.eyebrow)} ${I.arrow}</button>` : `<button class="btn primary" data-go="topics">See all topics ${I.arrow}</button>`;
    return head + `<div class="lockbox">${LOCK}<b>This task is locked</b><p>${esc(lk.text)}</p>${btn}</div>`; }
  let h = head + taskStepper(u, k);
  if (k === "write" && ut.writeList) h += `<section class="card"><h2>${u.id === "u1" ? "Choose two situations" : "Reply to these"}</h2><ol class="exlist">${ut.writeList.map(x => `<li>${esc(x)}</li>`).join("")}</ol></section>`;
  h += exercisesHTML(u.id, k);
  if (QUIZ[key] && (k === "listen" || k === "read")) h += quizHTML(key);
  if (k === "speak") h += feedbackHTML2(key) + twistHTML(key) + recordHTML(key);
  if (k === "write") h += feedbackHTML2(key) + writeHTML(key);
  return h + `<div id="tnext">${taskNext(u, k)}</div>`;
}
const QSTATE = {};
function hashStr(s){ let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h); }
function rng(seed){ let a = hashStr(seed) >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function shuffleIdx(n, seed){ const idx = [...Array(n).keys()], r = rng(seed); for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; } return idx; }
function order(q){ return shuffleIdx(q.o.length, q.q + (q.say || "") + q.o[0]); }
function quizHTML(key){
  const Q = QUIZ[key], st = QSTATE[key] || {ans:{}}, res = PR.q[key];
  let n = 0, h = `<section class="sec quiz" id="quiz-${key}"><h2 class="h2">Quiz · ${quizN(key)} questions</h2>`;
  if (res && !st.checked) h += `<p class="notice">Your last score: <b>${res.s} / ${res.n}</b> · best ${res.best} / ${res.n}. You can take it again.</p>`;
  Q.groups.forEach((g, gi) => {
    h += `<div class="qgroup"><h3 class="blocktitle" style="margin:0">${esc(g.h)}</h3>`;
    if (g.audio) { const x = APEX(g.audio); if (x) h += `<audio controls preload="none" src="${x.a}" aria-label="Recording: ${esc(g.h)}"></audio>`; }
    if (g.tts) h += `<button class="btn" data-tts="${g.tts}" style="align-self:flex-start">${I.speak} Play the conversation</button>${st.checked ? `<details class="essbox"><summary>Show the transcript</summary><div class="dlg" style="--lc:var(--u3);margin-bottom:12px">${R[g.tts].dlg.lines.map(([w, x]) => `<div class="ln ${w === "P" ? "s" : ""}"><span class="who">${w}</span><div class="bub">${fmt(x)}</div></div>`).join("")}</div></details>` : ""}`;
    if (g.talk) h += `<button class="btn" data-talk="${key}|${gi}"${g.talkAudio ? ` data-src="${esc(g.talkAudio)}"` : ""} style="align-self:flex-start">${I.speak} Play the ${g.talk.every(l => l[0] === g.talk[0][0]) ? "talk" : "conversation"}</button>${st.checked ? `<details class="essbox"><summary>Show the transcript</summary><div class="dlg" style="--lc:var(--u3);margin-bottom:12px">${g.talk.map(([w, x]) => `<div class="ln ${w === "T" ? "" : "s"}"><span class="who" aria-label="${WHO[w] || w}">${w}</span><div class="bub">${esc(x)}</div></div>`).join("")}</div><p class="hiddennote" style="font-style:normal;margin:0">${[...new Set(g.talk.map(l => l[0]))].map(w => `${w} = ${WHO[w] || w}`).join(", ")}</p></details>` : ""}`;
    if (g.passage) h += `<div class="passage">${g.passage.map(p => `<p>${esc(p)}</p>`).join("")}</div>`;
    g.qs.forEach((q, qi) => {
      const id = `${gi}_${qi}`, num = ++n, pick = st.ans[id];
      h += `<fieldset class="qq${st.checked ? (pick === 0 ? " ok" : " no") : ""}"><legend><span class="qn">${num}</span>${esc(q.q)}</legend>${q.say ? `<button class="btn" type="button" data-say="${esc(q.say)}"${q.sayWho ? ` data-who="${q.sayWho}"` : ""}${q.audio ? ` data-src="${esc(q.audio)}"` : ""} style="align-self:flex-start">${I.speak} Play</button>` : ""}${order(q).map(oi => `<label class="opt${st.checked && oi === 0 ? " right" : ""}${st.checked && pick === oi && oi !== 0 ? " wrongpick" : ""}"><input type="radio" name="q-${key}-${id}" value="${oi}"${pick === oi ? " checked" : ""}${st.checked ? " disabled" : ""}><span>${esc(q.o[oi])}</span></label>`).join("")}${st.checked ? `<p class="qfb">${pick === 0 ? `${I.check} Correct` : `Correct answer: ${esc(q.o[0])}`}</p>${q.say ? `<p class="hiddennote" style="margin:0;font-style:normal">You heard: “${esc(q.say)}”</p>` : ""}` : ""}</fieldset>`;
    });
    h += `</div>`;
  });
  if (st.checked) { const s = st.score; const qb = /^u\d+_(listen|read)$/.test(key) ? quizBand(s, n, key) : null, ff = PR.q[key] && PR.q[key].tries > 1;
  h += `<div class="scorebox" id="score-${key}"><b>${s} / ${n}</b>${qb != null ? `<span class="qband">${schip(qb)}${ff ? `<small>Your level uses your first try (${firstScore(PR.q[key])} / ${n}).</small>` : ""}</span>` : ""}<span>${s === n ? "Perfect score!" : s >= n * .8 ? "Great work." : s >= n * .5 ? "Good effort. Check the answers marked above." : "Check the answers above, then try again."}</span><button class="btn" data-retry="${key}">Try again</button></div>`; }
  else h += `<div class="qsubmit"><button class="btn primary wide" data-submitq="${key}">Submit answers</button><p class="qerr" id="qerr-${key}" role="alert"></p></div>`;
  return h + `</section>`;
}
const WHO = {T:"Teacher", S:"Student", P:"Parent or guest", C:"Colleague", L:"Leader"};
function rerenderQuiz(key){ const sec = document.getElementById("quiz-" + key); if (sec) sec.outerHTML = quizHTML(key); }
function submitQuiz(key){
  const Q = QUIZ[key], ans = {}; let n = 0, s = 0, missing = 0;
  Q.groups.forEach((g, gi) => g.qs.forEach((q, qi) => { n++; const id = `${gi}_${qi}`, el = document.querySelector(`input[name="q-${key}-${id}"]:checked`); if (!el) missing++; else { ans[id] = +el.value; if (+el.value === 0) s++; } }));
  if (missing) {
    const e = document.getElementById("qerr-" + key); if (e) e.textContent = `Answer all ${n} questions first. ${missing} still to go.`;
    const first = [...document.querySelectorAll(`#quiz-${key} fieldset`)].find(f => !f.querySelector("input:checked")); if (first) first.scrollIntoView({block:"center"});
    return;
  }
  QSTATE[key] = {ans, checked:true, score:s};
  const old = PR.q[key] || {};
  PR.q[key] = {s, n, best:Math.max(s, old.best || 0), tries:(old.tries || 0) + 1, at:today(), first:old.first != null ? old.first : old.s != null ? old.s : s, fa:old.fa || old.at || today()};
  if (!key.endsWith("speak")) PR.t[key] = PR.t[key] || today();
  persist(); rerenderQuiz(key); updateTaskNext(key);
  const sb = document.getElementById("score-" + key); if (sb) sb.scrollIntoView({block:"center"});
}
const MIC = '<svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><rect x="7" y="2" width="6" height="10" rx="3" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M4 9.5a6 6 0 0012 0M10 15.5V18" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>';
const wc = t => (t || "").trim() ? t.trim().split(/\s+/).length : 0;
function recordHTML(key){
  const sub = PR.sub[key];
  return `<section class="sec" id="sub-${key}"><h2 class="h2">Your recording</h2><p class="lead">Record yourself doing the task above, then upload it here. <b>Record now</b> opens your phone's recorder or camera. You can also choose a recording you already have.</p>
  ${sub && sub.id ? `<div class="subcard"><b>${I.check} Recording submitted</b><small>${esc(sub.name || "Recording")} · ${esc(fmtDate(sub.at))}</small>${audioTag(sub.id)}<small>Upload a new recording to replace it.</small></div>` : ""}
  <div class="acts"><label class="btn primary filebtn">${MIC} Record now<input type="file" accept="audio/*,video/*" capture="user" data-upload="${key}" class="sr"></label><label class="btn filebtn">Choose a file<input type="file" accept="audio/*,video/*" data-upload="${key}" class="sr"></label></div>
  <p class="pgstatus" id="ust-${key}" role="status"></p></section>`;
}
function writeHTML(key){
  const sub = PR.sub[key] || {};
  return `<section class="sec" id="sub-${key}"><h2 class="h2">Your writing</h2><p class="lead">Write your answer here. If you wrote it by hand, you can attach a photo or PDF instead.</p>
  <label class="field"><span>Your text</span><textarea id="wt-${key}" rows="10" maxlength="6000">${esc(sub.text || "")}</textarea></label>
  <p class="hiddennote" id="wc-${key}" style="margin:0;font-style:normal">${wc(sub.text)} words</p>
  ${sub.file ? `<p class="subcard" style="margin:0"><b>${I.check} Attached:</b> <a href="${esc(blobSrc(sub.file))}" target="_blank" rel="noopener">${esc(sub.fname || "your file")}</a></p>` : ""}
  <div class="acts"><button class="btn primary" data-savewrite="${key}">${sub.text ? "Update my writing" : "Submit my writing"}</button><label class="btn filebtn">Attach a photo or PDF<input type="file" accept="image/png,image/jpeg,image/webp,application/pdf" data-attach="${key}" class="sr"></label></div>
  <p class="pgstatus" id="ust-${key}" role="status">${sub.at ? `Submitted ${esc(fmtDate(sub.at))}.` : ""}</p></section>`;
}
async function getAssets(){ if (SESSION && SESSION.mode === "demo") return DEMO.assets; try { return window.claude && window.claude.use ? await window.claude.use("assets") : null; } catch(e){ return null; } }
const noUpload = () => PG.state === "off" ? "Sign in with your Sparks account to upload." : "Uploading isn't available on your account yet. Ask your trainer for Contributor access, or send your file to your trainer directly.";
function uploadError(err){
  const c = err && err.code;
  return c === "too_large" ? "This file is over 20 MB. Record a shorter take, or record audio only." : c === "convert" ? "This file type can't be converted on this device. Record as M4A or MP4, or choose a different file." : c === "unsupported_type" ? "This file type isn't supported. Choose a photo (JPG or PNG) or a PDF." : c === "rate_limited" ? "Too many uploads at once. Wait a moment, then try again." : c === "quota_or_state" ? "The course storage is full. Tell your trainer." : "Couldn't upload. Check your connection, then try again.";
}
async function toUploadable(file, onProg){
  const t = (file.type || "").toLowerCase(), ext = ((file.name || "").split(".").pop() || "").toLowerCase();
  const direct = {"video/mp4":"video/mp4", "video/webm":"video/webm", "audio/mp4":"video/mp4", "audio/x-m4a":"video/mp4", "audio/m4a":"video/mp4", "audio/webm":"video/webm"}[t] || {m4a:"video/mp4", mp4:"video/mp4", webm:"video/webm"}[ext];
  if (direct && file.size <= 20 * 1024 * 1024) return {blob:file, type:direct};
  const AC = window.AudioContext || window.webkitAudioContext;
  const mime = window.MediaRecorder && ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find(m => MediaRecorder.isTypeSupported(m));
  if (!AC || !mime) throw {code:"convert"};
  const ctx = new AC();
  let buf; try { await ctx.resume(); buf = await ctx.decodeAudioData(await file.arrayBuffer()); } catch(e){ ctx.close(); throw {code:"convert"}; }
  const dest = ctx.createMediaStreamDestination(), src = ctx.createBufferSource(); src.buffer = buf; src.connect(dest);
  const rec = new MediaRecorder(dest.stream, {mimeType:mime, audioBitsPerSecond:64000}), chunks = [];
  rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
  const stopped = new Promise(r => rec.onstop = r), ended = new Promise(r => src.onended = r);
  rec.start(1000); const t0 = ctx.currentTime; src.start();
  const iv = setInterval(() => onProg(Math.min(1, (ctx.currentTime - t0) / buf.duration)), 500);
  await ended; rec.stop(); await stopped; clearInterval(iv); ctx.close();
  const blob = new Blob(chunks, {type:mime.split(";")[0]});
  if (blob.size > 20 * 1024 * 1024) throw {code:"too_large"};
  return {blob, type:mime.startsWith("audio/mp4") ? "video/mp4" : "video/webm"};
}
async function handleRecording(key, file, inp){
  const st = document.getElementById("ust-" + key); if (!file || !st) return;
  const assets = await getAssets();
  if (!assets) { st.textContent = noUpload(); inp.value = ""; return; }
  try {
    st.textContent = "Preparing your recording…";
    const up = await toUploadable(file, p => { st.textContent = `Converting your recording on this device… ${Math.round(p * 100)}%`; });
    st.textContent = "Uploading…";
    const r = await assets.upload(up.blob, {type:up.type});
    PR.sub[key] = {id:r.id, name:file.name || "Recording", at:today(), twist:twistText(key)};
    PR.t[key] = PR.t[key] || today(); persist(); await flushNow();
    const sec = document.getElementById("sub-" + key); if (sec) sec.outerHTML = recordHTML(key);
    const s2 = document.getElementById("ust-" + key); if (s2) s2.textContent = "Uploaded. Your trainer can listen to it now."; updateTaskNext(key);
  } catch(err){ st.textContent = uploadError(err); }
  inp.value = "";
}
async function handleAttach(key, file, inp){
  const st = document.getElementById("ust-" + key); if (!file || !st) return;
  const ok = ["image/png", "image/jpeg", "image/webp", "application/pdf"];
  if (!ok.includes(file.type)) { st.textContent = uploadError({code:"unsupported_type"}); inp.value = ""; return; }
  if (file.size > 20 * 1024 * 1024) { st.textContent = uploadError({code:"too_large"}); inp.value = ""; return; }
  const assets = await getAssets();
  if (!assets) { st.textContent = noUpload(); inp.value = ""; return; }
  try {
    st.textContent = "Uploading…";
    const r = await assets.upload(file, {type:file.type});
    PR.sub[key] = Object.assign({}, PR.sub[key], {file:r.id, fname:file.name || "your file", at:today()});
    PR.t[key] = PR.t[key] || today(); persist(); await flushNow();
    const sec = document.getElementById("sub-" + key); if (sec) sec.outerHTML = writeHTML(key);
    const s2 = document.getElementById("ust-" + key); if (s2) s2.textContent = "Attached. Your trainer can see it now."; updateTaskNext(key);
  } catch(err){ st.textContent = uploadError(err); }
  inp.value = "";
}
async function saveWriting(key, btn){
  const ta = document.getElementById("wt-" + key), st = document.getElementById("ust-" + key), text = ta.value.trim();
  if (!text) { st.textContent = "Write your answer first, or attach a photo or PDF."; ta.focus(); return; }
  PR.sub[key] = Object.assign({}, PR.sub[key], {text, at:today()});
  PR.t[key] = PR.t[key] || today();
  btn.disabled = true; persist(); await flushNow(); btn.disabled = false;
  btn.textContent = "Update my writing";
  st.textContent = PG.db ? "Submitted. Your trainer can read it now." : "Saved in this browser. Sign in with your Sparks account so your trainer can read it."; updateTaskNext(key);
}
function resultsCard(q, sub, t, rvs){
  const tm = t || PR.t, rvm = rvs || PG.myReviews || {};
  const blocks = TOPICS.filter(x => !x.soon).map(tp => tp.units.map(u => {
    const any = unitKeys(u).some(k => q[k] || sub[k] || tm[k]);
    const rows = Object.keys(SKILLS).map(k => {
      const key = u.id + "_" + k, r = q[key], s = sub[key];
      let media = "";
      if (s && s.twist) media += `<small class="lead">Twist: ${esc(s.twist)}</small>`;
      if (s && s.id) media += `${audioTag(s.id)}`;
      if (s && s.text) media += `<details class="essbox"><summary>Read the writing (${wc(s.text)} words)</summary><p class="wtext">${esc(s.text)}</p></details>`;
      if (s && s.file) media += `<a href="${esc(blobSrc(s.file))}" target="_blank" rel="noopener">Open the attached file</a>`;
      if (rvm[key]) media += fbkHTML(key, rvm[key], true);
      const rb = rvm[key] && rvm[key].band != null ? rvm[key].band : null;
      const v = r ? `${r.s} / ${r.n}${r.best > r.s ? ` · best ${r.best}` : ""} · score ${fmtS(quizBand(firstScore(r), r.n, key))}` : rb != null ? `Score ${fmtS(rb)}` : s ? "Submitted" : "";
      return `<div class="rrow"><b>${SKILLS[k]}</b>${v ? `<span class="rv">${v}</span>` : `<span class="lvnone">Not yet</span>`}${media ? `<div class="rmedia">${media}</div>` : ""}</div>`;
    }).join("");
    return `<details class="essbox"${any ? "" : ""}><summary>Topic ${tp.n} · ${esc(u.eyebrow)} · ${esc(u.title)} <span class="lvnone">· ${unitTasksDone(u, tm)} of 4</span></summary>${rows}</details>`;
  }).join("")).join("");
  return `<div class="card"><h2>Unit task results</h2>${blocks}</div>`;
}
function soonPage(t){
  return topicHead(t) + `<div class="tasks">${Object.keys(SKILLS).map(k => `<div class="taskc soon"><span class="k"><span class="tic" aria-hidden="true">${SICON[k]}</span>${SKILLS[k]}</span><p>${esc(t.plan[k])}</p></div>`).join("")}</div>
  <div class="empty">This topic ends with a full IELTS-style mock test and your final speaking interview. Practice materials will appear here when they're ready.</div>`;
}
function noteHTML(nt){
  const [, t, text, ex] = nt;
  const items = (ex || []).map(x => x.startsWith("x:") ? `<li><span class="wrong">${fmt(x.slice(2))}</span></li>` : x.startsWith("v:") ? `<li><span class="right">${fmt(x.slice(2))}</span></li>` : `<li>${fmt(x)}</li>`).join("");
  return `<div class="note" style="${ntVar(t)}"><div class="ntag"><i aria-hidden="true">${NT[t].ic}</i>${NT[t].name}</div><div>${fmt(text)}</div>${items ? `<ul>${items}</ul>` : ""}</div>`;
}
function phraseRow(id, gi, ai, p){
  const k = `${id}|${gi}|${ai}`, on = isStar(k);
  return `<span>${fmt(p)}</span><button class="ic" data-say="${esc(p)}" aria-label="Listen">${I.speak}</button><button class="ic star" data-star="${k}" aria-pressed="${on}" aria-label="${on ? "Remove from saved" : "Save phrase"}" style="--fo:${on ? 1 : 0}">${I.save}</button>`;
}
const watchHTML = ms => `<section class="watch" style="${ntVar("M")}"><h3 class="blocktitle" style="color:var(--nM);margin:0">Watch out</h3>${ms.map(m => `<div class="w"><span>${fmt(m[2])}</span>${(m[3] || []).map(x => x.startsWith("x:") ? `<span class="wrong">${fmt(x.slice(2))}</span>` : x.startsWith("v:") ? `<span class="right">${fmt(x.slice(2))}</span>` : `<span>${fmt(x)}</span>`).join("")}</div>`).join("")}</section>`;
function epSummary(id, gi, g, extra){
  const p = phrasePct(id, gi);
  return `<span class="eprng" id="er${gi}">${ring(p, 52, 6)}<small>Phrase ${gi + 1}</small></span><span class="eptxt"><b>${fmt(g[0])}</b><small>${extra}</small></span><span class="chev">${I.chev}</span>`;
}
function routinePage(l){
  const id = l.id, b = book(id), u = unitOf(l), t = topicOf(u), r = R[id];
  if (!lessonUnlocked(l)) {
    const TL0 = topicLeaves(t.id), prev = TL0[TL0.indexOf(l) - 1];
    return `<button class="back" data-go="topics">${I.back} All topics</button><div class="lockbox">${LOCK}<b>${esc(l.title)} is locked</b><p>${topicUnlocked(t) ? `Open the lesson before it first: <b>${esc(prev.title)}</b>.` : `Finish Topic ${t.n - 1} first.`}</p>${topicUnlocked(t) ? `<button class="btn primary" data-go="${prev.id}">Open ${esc(prev.title)} ${I.arrow}</button>` : ""}</div>`;
  }
  lastSeen = id; save("sepa-last", id);
  if (!PR.o[id] && !freeAccess()) { PR.o[id] = today(); persist(); }
  const low = level === "ls" || level === "sk", last = b.groups.length - 1;
  const notesFor = gi => b.notes.filter(n => (n[0] === gi + 1 || (gi === last && n[0] > b.groups.length)) && n[1] !== "M" && !(r.dlg && n[0] === 0));
  const mistakes = b.notes.filter(n => n[1] === "M"), general = b.notes.filter(n => n[0] === 0 && n[1] !== "M");
  const L = lv(level);
  let h = `<button class="back" data-go="${u.id}">${I.back} ${esc(u.title)}</button>
  <header class="pagehead" style="--u:${u.color}"><span class="k">Topic ${t.n} · ${esc(u.eyebrow)} · ${esc(u.title)}</span><h2>${esc(l.title)}</h2>${CORE.has(id) ? `<p><span class="ctag on">Core lesson</span> Tap <b>I said it</b> on every phrase to complete it.</p>` : `<p><span class="ctag lib">Learn more</span> Not needed to finish the unit, but you'll use these phrases in class.</p>`}</header>
  <p class="lead">${esc(u.title)}${l.parent.kind === "section" && t.id === "topic1" ? ` · ${esc(l.parent.title)}` : ""}. Learn ${b.groups.length} key phrase${b.groups.length > 1 ? "s" : ""} for this moment. Listen to each one, then say it aloud and tap <b>I said it</b>.</p>
  <section class="sec"><h2 class="h2">Phrases <span class="lead" style="font-size:15px;font-weight:700" id="rpct">· ${routinePct(id)}% practised</span></h2><div class="eps">`;
  b.groups.forEach((g, gi) => {
    let ns = notesFor(gi); if (low) ns = ns.filter(n => n[1] !== "I");
    const extra = [g.length > 1 ? `${g.length - 1} more way${g.length > 2 ? "s" : ""} to say it` : "", ns.length ? `${ns.length} note${ns.length > 1 ? "s" : ""}` : ""].filter(Boolean).join(" · ") || "Tap to practise";
    const said = !!(PR.p[pkey(id, gi)] || {}).s;
    h += `<details class="ep" id="g${gi}"><summary>${epSummary(id, gi, g, extra)}</summary><div class="body">
      <div class="acts"><button class="btn primary" data-listen="${id}|${gi}">${I.speak} Listen</button><button class="btn" data-said="${id}|${gi}" aria-pressed="${said}">${said ? `${I.check} I said it` : "I said it"}</button></div>
      <ul class="alts">${g.map((p, ai) => `<li>${phraseRow(id, gi, ai, p)}</li>`).join("")}</ul>
      ${ns.length ? `<div class="notes">${ns.map(noteHTML).join("")}</div>` : ""}
    </div></details>`;
  });
  h += `</div></section>`;
  h += practiseHTML(id);
  if (r.dlg) {
    const tips = b.notes.filter(n => n[1] === "P");
    if (tips.length) h += `<section class="sec"><h2 class="h2">Tip</h2><div class="notes">${tips.map(noteHTML).join("")}</div></section>`;
    if (mistakes.length) h += watchHTML(mistakes);
    const kind = r.dlg.kind, lab = kind === "Model speech" ? "Teacher's speech · (pause) means stop for a moment" : kind === "Model message" ? "WhatsApp · T = teacher, P = parent" : "T = teacher, P = parent";
    h += `<section class="sec"><h2 class="h2">${esc(kind)}</h2><div class="dlg" style="--lc:${u.color}"><div class="dlg-top"><span>${esc(lab)}</span><button class="ic" id="playDlg" aria-label="Listen">${I.speak}</button></div>
      ${r.dlg.lines.map(([w, x]) => `<div class="ln ${w === "P" ? "s" : ""}"><span class="who" aria-label="${w === "P" ? "Parent" : "Teacher"}">${w}</span><div class="bub">${fmt(x)}</div></div>`).join("")}</div></section>`;
  } else if (r.levels) {
    if (mistakes.length) h += watchHTML(mistakes);
    const dl = r.levels[level];
    h += `<section class="sec"><h2 class="h2">In class: example dialogue</h2><div class="filters" role="group" aria-label="Choose a Sparks level">${LEVELS.map(x => `<button class="chipbtn" data-level="${x.id}" aria-pressed="${x.id === level}" style="${lvVars(x)}"><span class="d"></span>${esc(x.name)}</button>`).join("")}</div><div class="dlg" style="${lvVars(L)}"><div class="dlg-top"><span>${esc(L.name)} · ${esc(L.age)} · T = teacher, S = student</span><button class="ic" id="playDlg" aria-label="Listen to the dialogue">${I.speak}</button></div>
      ${dl.lines.map(([w, x]) => w === "A" ? `<div class="ln a">${esc(x)}</div>` : `<div class="ln ${w === "S" ? "s" : ""}"><span class="who" aria-label="${w === "S" ? "Student" : "Teacher"}">${w}</span><div class="bub">${fmt(x)}</div></div>`).join("")}
      <div class="tipline"><b>For ${esc(L.name)}:</b> ${esc(dl.note)}</div></div></section>`;
    if (general.length) h += `<section class="sec"><h2 class="h2">Notes</h2><div class="notes">${general.map(noteHTML).join("")}</div></section>`;
  }
  h += `<div id="lnext">${lessonNext(l)}</div>`;
  return h;
}
const SPREC = {};
function playAll(id){
  const gs = book(id).groups, au = (R[id] || {}).audio || [];
  try { speechSynthesis.cancel(); } catch(e){}
  if (curAudio) { curAudio.pause(); curAudio = null; }
  if (gs.every((g, gi) => au[gi])) { let i = 0; const next = () => { if (i >= gs.length) return; curAudio = new Audio(au[i++]); curAudio.onended = next; curAudio.play().catch(() => {}); }; next(); return; }
  speak(gs.map(g => ["T", g[0]]));
}
function practiseHTML(id){
  const gs = book(id).groups, rec = SPREC[id], done = PR.sp && PR.sp[id];
  return `<section class="sec spk" id="spk-${id}"><h2 class="h2">Practise speaking${done ? ` <span class="ctag on">${I.check} Practised ${esc(fmtDate(done))}</span>` : ""}</h2>
  <div class="card spcard"><ol class="psteps">
    <li><b>Listen to the model</b><p>Hear all ${gs.length} phrases in a row.</p><button class="btn" data-spmodel="${id}">${I.speak} Play the model</button></li>
    <li><b>Record yourself</b><p>Say all the phrases in order, as if you were in the situation. On a phone this opens your recorder.</p><label class="btn primary filebtn">${MIC} ${rec ? "Record again" : "Record myself"}<input type="file" accept="audio/*,video/*" capture="user" data-sprec="${id}" class="sr"></label></li>
    <li><b>Compare</b>${rec ? `<p>Play yours, then the model. Listen for stress, pauses and any words you missed.</p><audio controls id="spa-${id}" src="${esc(rec)}"></audio><div class="acts"><button class="btn" data-spmine="${id}">Play mine</button><button class="btn" data-spmodel="${id}">${I.speak} Play the model</button></div>` : `<p>Your recording appears here once you've made it.</p>`}</li>
    <li><b>Redo what you want to improve</b><p>Tap a phrase to go back to it, listen again and say it.</p><div class="redo">${gs.map((g, gi) => `<button class="chip" data-spredo="${id}|${gi}">${gi + 1}. ${esc(g[0].length > 46 ? g[0].slice(0, 44) + "…" : g[0])}</button>`).join("")}</div></li>
  </ol>
  <p class="hiddennote" style="margin:0;font-style:normal">Your recording stays on this device and isn't sent to your trainer. This practice isn't scored.</p>
  ${done ? "" : `<button class="btn wide" data-spdone="${id}">${I.check} I've practised this lesson</button>`}</div></section>`;
}
let curAudio = null;
function playPhrase(id, gi){
  const src = ((R[id] || {}).audio || [])[gi];
  try { speechSynthesis.cancel(); } catch(e){}
  if (curAudio) { curAudio.pause(); curAudio = null; }
  if (src) { curAudio = new Audio(src); curAudio.play().catch(() => speak(book(id).groups[gi][0])); return; }
  speak(book(id).groups[gi][0]);
}
function refreshEpisode(id, gi){
  const b = book(id), el = document.getElementById("er" + gi);
  if (el) el.innerHTML = `${ring(phrasePct(id, gi), 52, 6)}<small>Phrase ${gi + 1}</small>`;
  const rp = document.getElementById("rpct"); if (rp) rp.textContent = `· ${routinePct(id)}% practised`;
  const ln = document.getElementById("lnext"); if (ln) ln.innerHTML = lessonNext(NODES[id]);
}
const INDEX = [];
LEAVES.forEach(l => {
  INDEX.push({l, gi:null, text:l.title, low:l.title.toLowerCase()});
  book(l.id).groups.forEach((g, gi) => g.forEach(p => INDEX.push({l, gi, text:p, low:p.toLowerCase()})));
});
function hl(text, terms){
  let s = esc(text);
  terms.forEach(t => { if (t) s = s.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
  return s;
}
const ulab = u => `Topic ${topicOf(u).n} · ${u.eyebrow}`;
function results(q){
  const terms = q.toLowerCase().trim().split(/\s+/).filter(t => t.length > 1);
  if (!terms.length) return `<div class="empty">Type a word or situation, for example <b>late</b>, <b>homework</b>, <b>progress</b> or <b>graduation</b>.</div>`;
  const hits = INDEX.filter(x => terms.every(t => x.low.includes(t)));
  hits.sort((a, b) => (a.gi === null ? 0 : 1) - (b.gi === null ? 0 : 1));
  if (!hits.length) return `<div class="empty">No phrases found for “${esc(q)}”. Try a shorter or different word.</div>`;
  const shown = hits.slice(0, 60);
  return `<p class="hiddennote" style="margin:0">${hits.length} result${hits.length > 1 ? "s" : ""}${hits.length > 60 ? ", showing the first 60" : ""}</p><div class="list">${shown.map(x => `<button class="result" data-open="${x.l.id}|${x.gi === null ? "" : x.gi}"><span>${x.gi === null ? `<b>${hl(x.text, terms)}</b><small>Phrase set · ${esc(ulab(unitOf(x.l)))}</small>` : `${hl(x.text, terms)}<small>${esc(x.l.title)} · ${esc(ulab(unitOf(x.l)))}</small>`}</span>${I.arrow}</button>`).join("")}</div>`;
}
function searchPage(){
  return `<div class="pagebar">${backBtn("home", "Home")}<h1 class="title">Search</h1><span></span></div><label class="sr" for="q">Search phrases</label><div class="searchbox">${I.search}<input id="q" type="search" placeholder="Search phrases and topics" autocomplete="off"></div><div id="results" class="list">${results("")}</div>`;
}
function savedPage(){
  let h = `<div class="pagebar">${backBtn("me", "Me")}<h1 class="title">Saved phrases</h1><span></span></div>`;
  if (!stars.length) return h + `<div class="empty">Nothing saved yet. Open a phrase, then press the bookmark next to any way of saying it. Saved phrases stay in this browser.</div>`;
  const by = {}; stars.forEach(s => (by[s.rid] = by[s.rid] || []).push(s));
  LEAVES.filter(l => by[l.id]).forEach(l => {
    h += `<section class="sec"><button class="linkrow" data-go="${l.id}"><span>${esc(l.title)} <small class="lead" style="font-weight:600">· ${esc(ulab(unitOf(l)))}</small></span>${I.arrow}</button><div class="list">${by[l.id].map(s => `<div class="result" style="cursor:default"><span>${fmt(s.t)}</span><button class="ic" data-say="${esc(s.t)}" aria-label="Listen">${I.speak}</button><button class="ic star" data-star="${s.k}" aria-pressed="true" style="--fo:1" aria-label="Remove from saved">${I.save}</button></div>`).join("")}</div></section>`;
  });
  return h;
}
const TASK_EX = PRACTICE_EX;
const TASK_EX_LEAD = {speak:"Start here. Read each item aloud first, then play the recording and compare. It gets you ready for the role-play below.", listen:"Start here. Listen to real lesson extracts and answer the questions. They get you ready for the quiz below."};
/* Learn more card: open or closed, remembered on this device */
function lmoreOpen(){ try { return localStorage.getItem("sepa-lmore") === "1"; } catch(e){ return false; } }
document.addEventListener("toggle", e => { const d = e.target; if (d && d.dataset && d.dataset.lmore) { try { localStorage.setItem("sepa-lmore", d.open ? "1" : "0"); } catch(er){} } }, true);
/* warm-ups added by trainers (Content: Warm-ups tab), set by content.js */
let WARM = [];
function taskExercises(tid, k){
  const ns = (TASK_EX[tid] || {})[k] || [], out = [];
  AP.forEach(p => (p.parts || []).forEach(part => part.ex.forEach(x => { if (ns.includes(x.n)) out.push({x, part, u:NODES[p.unit]}); })));
  const parts = {}, u = NODES[tid];
  if (u) WARM.filter(w => w.u === tid && w.k === k).forEach(w => {
    const h = w.s || "More practice", part = parts[h] || (parts[h] = {h});
    const key = w.ans && w.ans.length && w.ans.length === (w.qs || []).length ? w.ans : null;
    out.push({x:{n:String(out.length + 1), t:w.t, ins:w.ins, a:w.a, items:(w.qs || []).length ? w.qs : null, key, keyNote:!key && w.ans && w.ans.length ? w.ans.join(" · ") : null}, part, u});
  });
  return out;
}
function exHTML(x, u){
  return `<article class="pc ex" style="--u:${u.color}"><div class="exhead"><span class="n">${esc(x.n)}</span><h4>${esc(x.t)}</h4></div><div class="exbody">
    ${x.ins ? `<p style="margin:0">${esc(x.ins)}</p>` : ""}
    <audio controls preload="none" src="${x.a}" aria-label="Recording ${esc(x.n)}"></audio>
    ${x.items ? `<ol class="exlist">${x.items.map((t, j) => `<li>${fmt(t)}${x.key ? `<span class="ans" hidden>${x.key[j]}</span>` : ""}</li>`).join("")}</ol>` : ""}${x.keyNote ? `<p class="ans" hidden style="margin:0">${esc(x.keyNote)}</p>` : ""}
    ${x.table ? `<div class="tablewrap"><table><thead><tr>${x.table.head.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${x.table.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div><p class="hiddennote" style="margin:0">For example: Number 3, please. Tim.</p>` : ""}
    ${x.words ? `<ol class="words">${x.words.map(w => `<li><span>${esc(w[0])}</span><span class="ans" hidden>${esc(w[1])} · ${w[2] === 1 ? "1st" : w[2] === 2 ? "2nd" : "3rd"} syllable</span></li>`).join("")}</ol>` : ""}
    ${x.qs ? `<h5 class="blocktitle" style="margin:4px 0 0">Questions</h5><ol class="exlist">${x.qs.map((q, j) => `<li>${esc(q)}${x.qkey ? `<span class="ans" hidden>${esc(x.qkey[j])}</span>` : ""}</li>`).join("")}</ol>` : ""}
    ${x.key || x.qkey || x.words || x.keyNote ? `<button class="chipbtn" data-answers="1" style="--lc:var(--green);align-self:flex-start">Show answers</button>` : ""}
  </div></article>`;
}
function exercisesHTML(tid, k){
  const ex = taskExercises(tid, k); if (!ex.length) return "";
  const wk = tid + "_" + k, wd = (PR.wu || {})[wk];
  let h = `<details class="essbox warm${wd ? " wdone" : ""}"${wd ? "" : " open"}><summary>${wd ? `${I.check} ` : ""}${k === "speak" ? "Warm-up: pronunciation practice" : "Warm-up: real lesson extracts"} (${ex.length} exercise${ex.length > 1 ? "s" : ""})${wd ? " · Done" : ""}</summary><div class="sec" style="padding-bottom:14px"><p class="lead">${TASK_EX_LEAD[k]} Use headphones if you can.</p>`, last = null;
  ex.forEach(({x, part, u}) => {
    if (part !== last) { h += `<h3 class="blocktitle" style="margin:8px 0 0">${esc(part.h)}</h3>${part.note ? `<p class="hiddennote" style="margin:0;font-style:normal">${esc(part.note)}</p>` : ""}`; last = part; }
    h += exHTML(x, u);
  });
  return h + `<div class="wubar">${wd ? `<span class="done-tag">${I.check}</span><b>Warm-up done</b><button class="linkbtn" data-wudone="${wk}">Undo</button>` : `<button class="btn primary" data-wudone="${wk}">${I.check} Mark warm-up done</button>`}</div></div></details>`;
}
const exCount = (tid, k) => taskExercises(tid, k).length;
const quizN = key => QUIZ[key] ? QUIZ[key].groups.reduce((a, g) => a + g.qs.length, 0) : 0;
function taskMeta(uid, k){ return (k === "listen" || k === "read") ? `Quiz · ${quizN(uid + "_" + k)} questions` : k === "speak" ? "Role-play recording" : "Writing task"; }
function taskStatus(uid, k){
  const key = uid + "_" + k, r = PR.q[key];
  if (!PR.t[key]) return r ? `Last score ${r.s} / ${r.n}` : "To do";
  return r ? `Done · score ${r.s} / ${r.n}` : "Done";
}
/* END app1.js */
/* ===== app2.js ===== */
/* SEPA Course app code, part 2 of 3. Generated from the prototype. Upload to Drive › SEPA Course › Content. */
function taskRow(u, k, open){
  const d = PR.t[u.id + "_" + k];
  if (!open) return `<div class="result locked" aria-disabled="true"><span class="ic" aria-hidden="true">${SICON[k]}</span><span><b>${SKILLS[k]}</b><small>${taskMeta(u.id, k)} · Locked</small></span>${LOCK}</div>`;
  return `<button class="result" data-go="${u.id}-${k}"><span class="ic" aria-hidden="true">${SICON[k]}</span><span><b>${SKILLS[k]}</b><small>${taskMeta(u.id, k)} · ${taskStatus(u.id, k)}${exCount(u.id, k) ? ((PR.wu || {})[u.id + "_" + k] ? " · Warm-up ✓" : d ? "" : " · Start with the warm-up") : ""}</small></span>${d ? `<span class="done-tag">${I.check}</span>` : I.arrow}</button>`;
}
function tasksPage(){
  const cur = TOPICS.find(t => !t.soon && topicUnlocked(t) && tasksDone(t.id) < tasksTotal(t.id));
  const nx = nextLesson();
  let h = (nx ? `<button class="curr" data-go="${nx.unit ? `${nx.unit.id}-${nx.k}` : unitOf(nx).id}"><span class="av">${nx.unit ? SICON[nx.k] : uicon(unitOf(nx))}</span><span class="cx"><b>${nx.unit ? `Your next task: ${esc(TASK_NAME[nx.k])}` : `Next: finish the ${esc(unitOf(nx).eyebrow)} core lessons`}</b><small class="cunit">Topic ${topicOf(nx.unit || unitOf(nx)).n} · ${esc((nx.unit || unitOf(nx)).eyebrow)} · ${esc((nx.unit || unitOf(nx)).title)}</small></span>${I.arrow}</button>` : "") + `<header class="pagehead" style="--u:var(--deep)"><span class="k">SEPA course</span><h2>Unit tasks</h2><p>Every unit has four tasks: a listening quiz and a reading quiz (15 questions each), a writing task and a speaking role-play. Units open in order: finish one unit's tasks to open the next, once its core lessons are done.</p></header><div class="tlist">`;
  TOPICS.forEach(t => {
    const locked = !t.soon && !topicUnlocked(t), p = t.soon || locked ? 0 : Math.round(tasksDone(t.id) / tasksTotal(t.id) * 100);
    const sub = t.soon ? "Coming soon" : locked ? `Locked · complete Topic ${t.n - 1} first` : `${tasksDone(t.id)} of ${tasksTotal(t.id)} tasks done`;
    h += `<details class="ttopic${locked ? " locked" : ""}${t.soon ? " soon" : ""}" style="--u:${TC[t.id]}"${t === cur ? " open" : ""}><summary><span class="tt"><small>Topic ${t.n}</small><b>${esc(t.title)}</b><span class="ts2">${sub}</span></span>${t.soon || locked ? `<span class="lockic">${LOCK}</span>` : ring(p, 48, 6)}<span class="chev">${I.chev}</span></summary><div class="tbody">`;
    if (t.soon) h += `<div class="list">${Object.keys(SKILLS).map(k => `<div class="result locked" aria-disabled="true"><span class="ic" aria-hidden="true">${SICON[k]}</span><span><b>${SKILLS[k]}</b><small>${esc(t.plan[k])} · Coming soon</small></span></div>`).join("")}</div>`;
    else if (locked) h += `<p class="lead">${LOCK} Complete every core lesson and unit task in Topic ${t.n - 1} to open this topic.</p>`;
    else t.units.forEach(u => {
      const lk = unitLock(u), open = !lk;
      h += `<details class="utask${open ? "" : " locked"}"${open && unitTasksDone(u) < 4 ? " open" : ""}><summary><span><b>${esc(u.eyebrow)} · ${esc(u.title)}</b><small>${open ? `${unitTasksDone(u)} of 4 done` : esc(lk.text)}</small></span>${open ? ring(Math.round(unitTasksDone(u) / 4 * 100), 40, 5, false) : `<span class="lockic" style="width:40px;height:40px">${LOCK}</span>`}</summary><div class="list">${Object.keys(SKILLS).map(k => taskRow(u, k, open)).join("")}</div></details>`;
    });
    h += `</div></details>`;
  });
  return h + `</div>`;
}
let RVF = "todo", RVSEL = null, RVNAV = [];
const RVQ = {topic:"", skill:"", time:"", q:"", sort:"new"};
let TASKS_TAB = null;
function setNav(trainer){
  const b = document.querySelector('.tabbar [data-nav="tasks"], .tabbar [data-nav="review"]'); if (!b) return;
  if (TASKS_TAB == null) TASKS_TAB = b.innerHTML;
  if (!trainer) { b.dataset.nav = "tasks"; b.setAttribute("aria-label", "Tasks"); b.innerHTML = TASKS_TAB; return; }
  b.dataset.nav = "review"; b.setAttribute("aria-label", "Review");
  b.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/><path d="M8.5 10.5l2 2 4-4"/></svg>Review';
}
const keyLabel = key => { const [uid, k] = key.split("_"), u = NODES[uid]; return u ? `Topic ${topicOf(u).n} · ${u.eyebrow} · ${SKILLS[k]}` : key; };
const isReviewed = (s, rv) => !!rv && rv.band != null && String(rv.at || "") >= String(s.at || "");
function reviewItems(){
  const out = [];
  Object.entries(PG.practice || {}).forEach(([pid, dd]) => Object.entries((dd && dd.sub) || {}).forEach(([key, s]) => {
    if (s && (s.id || s.text || s.file)) out.push({pid, key, s, rv:((PG.reviews || {})[pid] || {})[key]});
  }));
  return out.sort((a, b) => String(b.s.at || "").localeCompare(String(a.s.at || "")));
}
const rvId = x => `${x.pid}|${x.key}`;
const rvStatus = x => isReviewed(x.s, x.rv) ? "done" : "todo";
function rvFiltered(){
  const t = today(), back = n => addDays(t, -n), q = RVQ.q.trim().toLowerCase();
  let list = reviewItems().filter(x => {
    const tid = topicOfKey(x.key), sk = x.key.split("_")[1];
    if (RVF !== "all" && rvStatus(x) !== RVF) return false;
    if (RVQ.topic && tid !== RVQ.topic) return false;
    if (RVQ.skill && sk !== RVQ.skill) return false;
    if (RVQ.time === "today" && x.s.at !== t) return false;
    if (RVQ.time && RVQ.time !== "today" && String(x.s.at || "") < back(+RVQ.time)) return false;
    if (q && !String(PG.names[x.pid] || "").toLowerCase().includes(q)) return false;
    return true;
  });
  if (RVQ.sort === "old") list = list.reverse();
  return list;
}
function reviewPage(){
  if (!PG.trainer) return `<div class="empty">The review page is for SEPA trainers.</div>`;
  const opt = (k, v, l) => `<option value="${v}"${RVQ[k] === v ? " selected" : ""}>${l}</option>`;
  return `<header class="pagehead" style="--u:var(--deep)"><span class="k">Trainer</span><h2>Review</h2><p>Speaking and writing tasks from every participant. Open one to score it with the topic's rubric and add a comment.</p><button class="btn" data-go="rubric" style="align-self:flex-start;margin-top:4px">Open the rubric</button></header>
  <section class="card rvbox">
    <div class="chips" role="group" aria-label="Status" id="rvchips">${rvChips()}</div>
    <div class="rvfilters">
      <label class="rvsearch">${I.search}<span class="sr">Search by participant name</span><input id="rvq" type="search" placeholder="Search participant" autocomplete="off" value="${esc(RVQ.q)}"></label>
      <label><span class="sr">Topic</span><select data-rvq="topic">${opt("topic", "", "All topics")}${TOPICS.filter(t => !t.soon).map(t => opt("topic", t.id, `Topic ${t.n}`)).join("")}</select></label>
      <label><span class="sr">Task</span><select data-rvq="skill">${opt("skill", "", "All tasks")}${opt("skill", "speak", "Speaking")}${opt("skill", "write", "Writing")}</select></label>
      <label><span class="sr">Submitted</span><select data-rvq="time">${opt("time", "", "Any time")}${opt("time", "today", "Today")}${opt("time", "7", "Last 7 days")}${opt("time", "30", "Last 30 days")}</select></label>
      <label><span class="sr">Sort</span><select data-rvq="sort">${opt("sort", "new", "Newest first")}${opt("sort", "old", "Oldest first")}</select></label>
    </div>
    <div id="rvlist">${rvListHTML()}</div>
  </section>
  <button class="nextbox" data-go="trainer"><span><b>Participants and assessments</b><small>Add participants and score assessments</small></span>${I.arrow}</button>`;
}
function rvChips(){
  const all = reviewItems(), n = s => all.filter(x => s === "all" || rvStatus(x) === s).length;
  return [["todo", "To review"], ["done", "Scored"], ["all", "All"]].map(([v, l]) => `<button class="chip" data-rvf="${v}" aria-pressed="${RVF === v}">${l} <b>${n(v)}</b></button>`).join("");
}
function rvRow(x){
  const ok = isReviewed(x.s, x.rv), sk = x.key.split("_")[1];
  const pill = ok ? `<span class="rvpill done">Score ${fmtS(x.rv.band)}</span>` : x.rv ? `<span class="rvpill re">Resubmitted</span>` : `<span class="rvpill todo">To review</span>`;
  return `<button class="rvrow" data-rvopen="${esc(rvId(x))}"><span class="rvic" aria-hidden="true">${SICON[sk]}</span><span class="rvmain"><span class="rvname"><b data-name="${esc(x.pid)}">${esc(PG.names[x.pid] || "…")}</b></span><small>${esc(keyLabel(x.key))} · submitted ${esc(fmtDate(x.s.at))}</small></span><span class="rvend">${pill}<span class="btn ${ok ? "" : "primary "}sm">${ok ? "Open" : "Review"}</span></span></button>`;
}
function rvListHTML(){
  const list = rvFiltered(), filt = RVQ.topic || RVQ.skill || RVQ.time || RVQ.q.trim();
  const reset = filt ? ` <button class="linkbtn" data-rvreset="1">Clear filters</button>` : "";
  if (!list.length) return `<div class="empty" style="margin:0">${RVF === "todo" && !filt ? "Nothing waiting. New speaking and writing tasks will appear here." : "No tasks match these filters."}${reset}</div>`;
  return `<p class="rvcount">${list.length} task${list.length === 1 ? "" : "s"}${reset}</p><div class="rvrows">${list.map(rvRow).join("")}</div>`;
}
function renderRvList(){ const l = document.getElementById("rvlist"), c = document.getElementById("rvchips"); if (l) l.innerHTML = rvListHTML(); if (c) c.innerHTML = rvChips(); fillNames(); }
function rvItemPage(){
  if (!PG.trainer) return `<div class="empty">The review page is for SEPA trainers.</div>`;
  const all = reviewItems(), x = all.find(y => rvId(y) === RVSEL);
  const back = `<div class="pagebar"><button class="iconbtn" data-go="review" aria-label="Back to the review list">${I.back}</button><h1 class="title">Review</h1><span></span></div>`;
  if (!x) return back + `<div class="empty">This task isn't available. Go back to the list.</div>`;
  const nav = RVNAV.includes(RVSEL) ? RVNAV : all.map(rvId), i = nav.indexOf(RVSEL), prev = nav[i - 1], next = nav[i + 1];
  return back + `<div class="rvnav"><button class="btn sm" data-rvnav="${esc(prev || "")}"${prev ? "" : " disabled"}>${I.back} Previous</button><span>${i + 1} of ${nav.length}</span><button class="btn sm" data-rvnav="${esc(next || "")}"${next ? "" : " disabled"}>Next ${I.arrow}</button></div>${rvCard(x)}`;
}
function rvCard({pid, key, s, rv}){
  const id = `${pid}|${key}`, ok = isReviewed(s, rv);
  let media = "";
  if (s.twist) media += `<p class="lead" style="margin:0;font-size:14px">Situation: ${esc(s.twist)}</p>`;
  if (s.id) media += `${audioTag(s.id)}`;
  if (s.text) media += `<details class="essbox"${s.id ? "" : " open"}><summary>Writing (${wc(s.text)} words)</summary><p class="wtext">${esc(s.text)}</p></details>`;
  if (s.file) media += `<a class="rvlink" href="${esc(blobSrc(s.file))}" target="_blank" rel="noopener">Open the attached file</a>`;
  return `<article class="card rv"><div class="rvhead"><div><b data-name="${esc(pid)}">…</b><small>${esc(keyLabel(key))} · submitted ${esc(fmtDate(s.at))}</small></div><span class="ctag${ok ? "" : " newtag"}">${ok ? `Score ${fmtS(rv.band)}` : rv ? "Rescore" : "New"}</span></div>${media}
  ${rubricBox(id, key, rv)}
  <label class="field"><span>Comment for the participant</span><textarea id="rvt-${esc(id)}" rows="3" placeholder="One strength and one thing to work on">${esc(rv ? rv.c : "")}</textarea></label>
  <div class="acts" style="align-items:center"><button class="btn primary" data-rvsave="${esc(id)}">${rv ? "Update score and feedback" : "Send score and feedback"}</button><span class="pgstatus" id="rvs-${esc(id)}" role="status">${rv ? `Sent ${esc(fmtDate(rv.at))}` : ""}</span></div></article>`;
}
async function saveReview(id, btn){
  const i = id.indexOf("|"), pid = id.slice(0, i), key = id.slice(i + 1);
  const ta = document.getElementById("rvt-" + id), st = document.getElementById("rvs-" + id), c = ta.value.trim();
  const crit = key.endsWith("_write") ? WCRIT : CRIT, b = {};
  crit.forEach(([k]) => { const v = pickVal(`rv-${id}`, k); if (v != null) b[k] = v; });
  if (Object.keys(b).length < 4) { st.textContent = "Choose a score for all four criteria first."; const f = crit.find(([k]) => b[k] == null); const s = f && document.getElementById(`rv-${id}-${f[0]}`); if (s) s.focus(); return; }
  btn.disabled = true; st.textContent = "Sending…";
  const docv = Object.assign({}, (PG.reviews || {})[pid] || {}, {[key]:{c, b, band:avgBand(crit.map(([k]) => b[k])), by:PG.me, at:today()}});
  try { await PG.db.doc("reviews/" + pid).set(docv); PG.reviews[pid] = docv; const cr = PG.cohort.find(r => r.id === pid); if (cr && !cr.trainer) PG.db.doc("scores/" + pid).update({trainer:PG.me}).catch(() => {}); st.textContent = "Sent. The participant can see it now."; btn.textContent = "Update score and feedback"; const nx = RVNAV[RVNAV.indexOf(id) + 1]; if (current === "rvitem" && nx) st.insertAdjacentHTML("beforeend", ` <button class="linkbtn" data-rvnav="${esc(nx)}">Next task</button>`); }
  catch(e){ st.textContent = "Couldn't send. Check your connection and try again."; }
  btn.disabled = false;
}
function rerenderReview(){
  updateBell(); if (current === "notifs") { route(); return; }
  if (current === "trainer" && PG.sel) refreshProgress();
  if (current === "review") renderRvList();
  if (current === "rvitem") { const tag = document.querySelector(".rv .ctag"), x = reviewItems().find(y => rvId(y) === RVSEL); if (tag && x) { const ok = isReviewed(x.s, x.rv); tag.className = "ctag" + (ok ? "" : " newtag"); tag.textContent = ok ? `Score ${fmtS(x.rv.band)}` : x.rv ? "Rescore" : "New"; } }
}
function rubricBox(id, key, rv){
  const w = key.endsWith("_write"), crit = w ? WCRIT : CRIT, b = (rv && rv.b) || {}, tid = topicOfKey(key), t = TOPICS.find(x => x.id === tid);
  return `<div class="rubric"><div class="rbhead"><b>${w ? "Writing" : "Speaking"} rubric · Topic ${t.n}</b><span class="rbrange">Scores ${SCALE[tid].map(i => LVBAND[i]).join(" · ")} · target ${LVBAND[TARGET[tid]]}</span></div>${crit.map(([k, n]) => critField("rv-" + id, k, n, b[k], tid)).join("")}<p class="rbtotal" id="rbt-${esc(id)}">${rbTotal(crit, b)}</p></div>`;
}
function rbTotal(crit, b){ const v = crit.map(([k]) => b[k] != null && b[k] !== "" ? +b[k] : null); return v.every(x => x != null) ? `Task score ${schip(avgBand(v))}` : `<span class="lvnone">Task score: choose all four</span>`; }
function fbkHTML(key, rv, small){
  const crit = key.endsWith("_write") ? WCRIT : CRIT;
  const parts = rv.b ? crit.filter(([k]) => rv.b[k] != null).map(([k, n]) => `<span>${n} <b>${fmtS(rv.b[k])}</b></span>`).join("") : "";
  return `<${small ? "div" : "section"} class="fbk${small ? " sm" : ""}"><small>Trainer feedback · ${esc(fmtDate(rv.at))}</small>${rv.band != null ? `<div class="fbband">${schip(rv.band)}<div class="fbcrit">${parts}</div></div>` : ""}${rv.c ? `<p>${esc(rv.c)}</p>` : ""}</${small ? "div" : "section"}>`;
}
function feedbackHTML2(key){ const rv = (PG.myReviews || {})[key]; return rv ? fbkHTML(key, rv, false) : ""; }
let RBT = null;
function rubricPage(){
  const sk = RBT || (PG.trainer ? "topic1" : curTopic().id), sc = SCALE[sk], tt = TOPICS.find(t => t.id === sk);
  const tabs = [["baseline", "Baseline"], ["topic1", "Topic 1"], ["topic2", "Topic 2"], ["topic3", "Topic 3"]];
  const crits = list => list.map(([k, n]) => `<details class="essbox"><summary>${n}</summary><div class="rbcols">${sc.map(i => `<div class="rbcol"><span class="lvchip score l${i}">Score ${LVBAND[i]}${tt && i === TARGET[sk] ? " · target" : ""}</span>${rubList(rubText(sk, k, i))}</div>`).join("")}</div></details>`).join("");
  const quizRule = sk === "topic1" ? "under 50% = score 3 · 50% or more = 4 · 80% or more = 5" : sk === "topic2" ? "under 80% = score 5 · 80% or more = 6" : sk === "topic3" ? "under 80% = score 6 · 80% or more = 7" : "the baseline has no unit quizzes.";
  return `<div class="pagebar">${PG.trainer ? backBtn("review", "Review") : backBtn("me", "Me")}<h1 class="title">How levels work</h1><span></span></div>
  <p class="sub">SEPA reports CEFR levels with an IELTS-style band. Each topic is scored on its own range, so you can see progress from topic to topic.</p>
  <section class="card"><h2>Topic ranges</h2><div class="tablewrap"><table class="bd" style="min-width:0"><thead><tr><th scope="col">Stage</th><th scope="col">Scores used</th><th scope="col">Target</th></tr></thead><tbody>
    <tr><th scope="row">Baseline assessment</th><td>3 to 7</td><td><span class="lvnone">Placement</span></td></tr>
    ${TOPICS.map(t => `<tr><th scope="row">Topic ${t.n}: ${esc(t.title)}</th><td>${SCALE[t.id].map(i => LVBAND[i]).join(" · ")}</td><td>${schip(LVBAND[TARGET[t.id]])} <small class="lvnone">(${LVL[TARGET[t.id]]})</small></td></tr>`).join("")}</tbody></table></div>
    <p class="hiddennote" style="margin:0;font-style:normal">Scores follow IELTS bands. Averages are rounded to the nearest half score. On the progress page, scores are read as levels: under 3.5 A1, 3.5 to 4.0 A2, 4.5 to 5.0 B1, 5.5 to 6.0 B2, 6.5 and above C1.</p></section>
  <section class="card"><h2>How the proficiency level is worked out</h2><ol class="steps">
    <li><b>Listening and reading quizzes</b> are marked automatically on the topic's range. The first try counts.</li>
    <li><b>Writing and speaking tasks</b> are scored by the trainer: a score for each of four criteria, using the topic's rubric below. The task score is their average.</li>
    <li><b>Assessments</b> use the same rubric: the baseline on the full range, each topic assessment on that topic's range.</li>
    <li><b>Topic targets</b> show each skill's level from that topic's results only.</li>
    <li>The <b>overall level</b> averages the four skills, each from its ${RECENT} most recent results.</li></ol></section>
  <section class="card"><h2>Rubric</h2><p class="lead" style="margin:0;font-size:15px">Adapted from the IELTS Speaking and Writing band descriptors and rewritten for each topic.</p>
    <div class="filters" role="group" aria-label="Choose a stage">${tabs.map(([k, l]) => `<button class="chipbtn" data-rbt="${k}" aria-pressed="${k === sk}" style="--lc:var(--deep)">${l}</button>`).join("")}</div>
    <p class="hiddennote" style="margin:0;font-style:normal"><b>${sk === "baseline" ? "Baseline: placement on the full range." : `Topic ${tt.n}: ${esc(tt.title)}.`}</b> ${sk === "topic1" ? "Speaking: the classroom role-play. Writing: written instructions for the class." : sk === "topic2" ? "Speaking: the unit role-play with a parent, colleague or leader, or an event speech. Writing: the unit's message, update or script." : sk === "topic3" ? "IELTS-style speaking and writing practice." : "Uses Topic 1 wording for A1 to B1, Topic 2 for B2 and Topic 3 for C1."}</p>
    <h3 class="blocktitle" style="margin:4px 0 0">Speaking</h3>${crits(CRIT)}
    <h3 class="blocktitle" style="margin:4px 0 0">Writing</h3>${crits(WCRIT)}
    <h3 class="blocktitle" style="margin:4px 0 0">Listening and reading</h3><p class="lead" style="margin:0;font-size:15px">Unit quizzes: ${esc(quizRule)}</p>${crits([["L", "Listening (assessments)"], ["R", "Reading (assessments)"]])}</section>`;
}
const BELL = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 003.4 0"/></svg>';
function notifItems(){
  const out = [];
  if (!PG.me) return out;
  if (PG.trainer) {
    reviewItems().filter(x => !isReviewed(x.s, x.rv)).forEach(x => out.push({id:`sub:${x.pid}:${x.key}:${x.s.at}`, at:x.s.at, ic:x.key.split("_")[1], pid:x.pid,
      t:`submitted ${keyLabel(x.key)}${x.rv ? " again" : ""}. Ready to score.`, go:"rvitem", rv:rvId(x)}));
  } else {
    Object.entries(PG.myReviews || {}).forEach(([key, rv]) => { if (!rv || !rv.at) return;
      if (rv.bc) { out.push({id:`rv:${key}:${rv.atIso || rv.at}`, at:rv.at, ic:"chart", t:`Your trainer reviewed your Bootcamp Day ${rv.bc} homework${rv.res === "revise" ? ": please update it" : ""}. Open it to read the feedback.`, go:`bc${rv.bc}`}); return; }
      const [uid, k] = key.split("_");
      out.push({id:`rv:${key}:${rv.at}`, at:rv.at, ic:k, t:`Your trainer scored your ${keyLabel(key)} task${rv.band != null ? `: score ${fmtS(rv.band)}` : ""}. Open it to read the feedback.`, go:`${uid}-${k}`}); });
    const cp = (PG.mine && PG.mine.cp) || {};
    CPS.forEach(c => { const e = cp[c.k]; if (e && entryBand(e) != null) out.push({id:`cp:${c.k}:${e.date || ""}`, at:e.date || "", ic:"chart", t:`Your ${lc(c.t)} results are ready.`, go:"me"}); });
    TOPICS.filter(t => !t.soon).forEach(t => {
      if (t.n > 1 && topicUnlocked(t)) { const prev = TOPICS.find(x => x.n === t.n - 1), ds = prev.units.flatMap(u => unitKeys(u).map(k => PR.t[k])).filter(x => typeof x === "string").sort();
        out.push({id:`topic:${t.id}`, at:ds[ds.length - 1] || "", ic:"open", t:`Topic ${t.n}: ${t.title} is now open.`, go:t.id}); }
      if (!topicUnlocked(t)) return;
      t.units.forEach(u => { if (unitLock(u)) return; const pu = prevUnit(u);
        const ds = [...unitCore(u).flatMap(l => book(l.id).groups.map((g, gi) => (PR.p[pkey(l.id, gi)] || {}).d)), ...(pu ? unitKeys(pu).map(k => PR.t[k]) : [])].filter(x => typeof x === "string").sort();
        out.push({id:`open:${u.id}`, at:ds[ds.length - 1] || PR.start || "", ic:"open", t:`Topic ${t.n} · ${u.eyebrow} tasks are open: listening, reading, writing and speaking.`, go:`${u.id}-listen`}); });
    });
  }
  return out.sort((a, b) => String(b.at).localeCompare(String(a.at)));
}
const unreadCount = () => { const r = new Set(PR.nr || []); return notifItems().filter(x => !r.has(x.id)).length; };
function bellBtn(){ const n = unreadCount(); return `<button class="iconbtn bellbtn" id="bell" data-go="notifs" aria-label="Notifications${n ? `, ${n} unread` : ""}">${BELL}${n ? `<span class="nbadge" aria-hidden="true">${n > 9 ? "9+" : n}</span>` : ""}</button>`; }
function updateBell(){ const b = document.getElementById("bell"); if (b) b.outerHTML = bellBtn(); }
const NICON = {speak:SICON.speak, write:SICON.write, listen:SICON.listen, read:SICON.read, chart:ICHART, open:IC2.unlock};
function notifsPage(){
  const items = notifItems(), read = new Set(PR.nr || []);
  let h = `<div class="pagebar">${backBtn("home", "Home")}<h1 class="title">Notifications</h1><span></span></div>`;
  if (!items.length) return h + `<div class="empty">${PG.trainer ? "Nothing new. Speaking and writing tasks waiting to be scored will appear here." : "No notifications yet. Trainer feedback, your assessment results and newly opened tasks will appear here."}</div>`;
  h += `<section class="card nlist">${items.map(x => `<button class="nrow${read.has(x.id) ? "" : " unread"}" data-ngo="${esc(x.go)}"${x.rv ? ` data-nrv="${esc(x.rv)}"` : ""}><span class="nic" aria-hidden="true">${NICON[x.ic] || BELL}</span><span class="ntx"><span>${x.pid ? `<b data-name="${esc(x.pid)}">${esc(PG.names[x.pid] || "…")}</b> ` : ""}${esc(x.t)}</span><small>${x.at ? esc(fmtDate(x.at)) : ""}${read.has(x.id) ? "" : `<span class="ndot">New</span>`}</small></span>${I.arrow}</button>`).join("")}</section>`;
  return h;
}
function markNotifsRead(){ const ids = notifItems().map(x => x.id), cur = new Set(PR.nr || []); if (ids.every(i => cur.has(i))) return; PR.nr = [...new Set([...ids, ...(PR.nr || [])])].slice(0, 400); persist(); }
function myTrainerCard(){
  const tid = PG.mine && PG.mine.trainer, c = PG.trInfo || {};
  if (!tid) return `<section class="card mytr"><h2>My trainer</h2><p class="lead" style="margin:0">Your trainer will appear here once they're assigned to you. They review your speaking and writing tasks and run your assessments.</p></section>`;
  const row = (k, label, v) => v ? `<div class="trrow"><small>${label}</small><span class="trval" id="trv-${k}">${esc(v)}</span><button class="btn sm" data-copy="trv-${k}">Copy</button></div>` : "";
  return `<section class="card mytr"><h2>My trainer</h2><div class="who"><span class="avatar">${esc(((PG.names[tid] || "T").charAt(0)).toUpperCase())}</span><div><b data-name="${esc(tid)}">${esc(PG.names[tid] || "…")}</b><small>Reviews your tasks and runs your assessments</small></div></div>
    ${row("wa", "WhatsApp", c.wa)}${row("em", "Email", c.email)}${c.note ? `<p class="hiddennote" style="margin:0;font-style:normal">${esc(c.note)}</p>` : ""}${!c.wa && !c.email ? `<p class="hiddennote" style="margin:0;font-style:normal">Your trainer hasn't added contact details yet.</p>` : ""}</section>`;
}
function contactCard(){
  const c = PG.trDraft || PG.myContact || {}, f = (k, label, type, ph) => `<label class="field"><span>${label}</span><input id="tr-${k}" type="${type}" value="${esc(c[k] || "")}" placeholder="${ph}" autocomplete="off"></label>`;
  return `<section class="card trform"><h2>Your contact details</h2><p class="lead" style="margin:0;font-size:15px">Your participants see these on their Me page, in a "My trainer" card.</p>
    <div class="fgrid">${f("wa", "WhatsApp number", "tel", "0812 3456 7890")}${f("email", "Email", "email", "name@sparks.id")}</div>${f("note", "When you reply", "text", "Weekdays, 9:00 to 17:00")}
    <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><button class="btn primary" id="trSave">Save contact details</button><span class="pgstatus" id="trStatus" role="status">${esc(PG.trMsg || "")}</span></div></section>`;
}
async function saveContact(btn){
  const st = document.getElementById("trStatus"), v = k => (document.getElementById("tr-" + k).value || "").trim(), c = {wa:v("wa"), email:v("email"), note:v("note"), at:today()};
  btn.disabled = true; st.textContent = "Saving…";
  try { await PG.db.doc("trainers/" + PG.me).set(c); PG.myContact = c; PG.trDraft = null; PG.trMsg = "Saved. Your participants can see these now."; const s2 = document.getElementById("trStatus"); if (s2) s2.textContent = PG.trMsg; setTimeout(() => { PG.trMsg = ""; }, 4000); }
  catch(e){ st.textContent = "Couldn't save. Check your connection, then try again."; }
  btn.disabled = false;
}
function trainerLine(r){
  return r.trainer ? `Trainer: <b data-name="${esc(r.trainer)}">${esc(PG.names[r.trainer] || "…")}</b>${r.trainer === PG.me ? " (you)" : ` <button class="linkbtn" data-assign="1">Make me their trainer</button>`}` : `No trainer assigned yet. <button class="linkbtn" data-assign="1">Make me their trainer</button>`;
}
async function assignMe(){
  try { const ref = PG.db.doc("scores/" + PG.sel); if (PG.cohort.some(r => r.id === PG.sel)) await ref.update({trainer:PG.me}); else await ref.set({cp:{}, trainer:PG.me, addedAt:new Date().toISOString()}); } catch(e){}
}
function copyText(id){
  const el = document.getElementById(id); if (!el) return;
  const done = () => { const b = document.querySelector(`[data-copy="${id}"]`); if (b) { b.textContent = "Copied"; setTimeout(() => { b.textContent = "Copy"; }, 1500); } };
  const sel = () => { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  try { navigator.clipboard.writeText(el.textContent).then(done, sel); } catch(e){ sel(); }
}
const clone = v => v == null ? v : JSON.parse(JSON.stringify(v));
let ORIG = null;
function captureOrig(){
  if (ORIG) return; ORIG = {};
  UNITS.forEach(u => { ORIG[u.id] = {goal:u.goal, ess:clone(u.ess), ut:clone(UT[u.id] || null), quiz:{listen:clone(QUIZ[u.id + "_listen"]), read:clone(QUIZ[u.id + "_read"])},
    lessons:Object.fromEntries(LEAVES.filter(l => unitOf(l) === u).map(l => [l.id, {title:l.title, rtitle:R[l.id] && R[l.id].title, phrases:clone(R[l.id] && R[l.id].phrases), audio:clone(R[l.id] && R[l.id].audio), book:clone(BOOK[l.id] || null)}]))}; });
}
function applyContent(){
  captureOrig();
  UNITS.forEach(u => {
    const o = ORIG[u.id], c = PG.content[u.id] || {};
    u.goal = c.goal != null ? c.goal : o.goal; u.ess = c.ess !== undefined ? c.ess : clone(o.ess);
    if (o.ut || c.tasks) UT[u.id] = Object.assign(clone(o.ut) || {}, c.tasks || {});
    ["listen", "read"].forEach(k => { const v = (c.quiz || {})[k] || o.quiz[k]; if (v) QUIZ[u.id + "_" + k] = clone(v); });
    Object.entries(o.lessons).forEach(([id, ol]) => {
      const cl = (c.lessons || {})[id] || {}, n = NODES[id];
      n.title = cl.title || ol.title; if (R[id]) R[id].title = cl.title || ol.rtitle;
      if (ol.book) { const bk = clone(ol.book); (cl.phrases || []).forEach((p, i) => { if (bk.groups[i] && p) bk.groups[i][0] = p; }); BOOK[id] = bk; if (R[id]) R[id].audio = cl.audio || clone(ol.audio) || []; }
      else if (R[id]) { R[id].phrases = cl.phrases || clone(ol.phrases); R[id].audio = cl.audio || clone(ol.audio) || []; }
    });
  });
}
let CE = {uid:"u1", tab:"unit", lid:null, qk:"listen", qd:null, msg:""};
const ceUnits = () => TOPICS.filter(t => !t.soon).flatMap(t => t.units);
const lines = id => (document.getElementById(id) || {value:""}).value.split("\n").map(x => x.trim()).filter(Boolean);
const val = id => ((document.getElementById(id) || {value:""}).value || "").trim();
function contentPage(){
  if (!PG.trainer) return `<div class="empty">Course content can only be edited by SEPA trainers.</div>`;
  const u = NODES[CE.uid], t = topicOf(u), c = PG.content[u.id];
  const tabs = [["unit", "Unit"], ["lessons", "Lessons"], ["tasks", "Writing and speaking"], ["quiz", "Quizzes"]];
  return `<div class="pagebar">${backBtn("trainer", "Trainer tools")}<h1 class="title">Course content</h1><span></span></div>
  <p class="sub">Edit the words participants see. Changes are saved for everyone and can be reset to the original at any time.</p>
  <section class="card cebox">
    <label class="field"><span>Unit</span><select id="ce-unit">${TOPICS.filter(x => !x.soon).map(x => `<optgroup label="Topic ${x.n}: ${esc(x.title)}">${x.units.map(v => `<option value="${v.id}"${v.id === u.id ? " selected" : ""}>${esc(v.eyebrow)} · ${esc(v.title)}${PG.content[v.id] ? " (edited)" : ""}</option>`).join("")}</optgroup>`).join("")}</select></label>
    ${c ? `<p class="cenote">Edited ${esc(fmtDate(c.at || ""))}. <button class="linkbtn" data-cereset="${u.id}">Reset this unit to the original</button></p>` : ""}
    <div class="tabs" role="tablist">${tabs.map(([k, l]) => `<button class="tab" role="tab" aria-selected="${CE.tab === k}" data-cetab="${k}">${l}</button>`).join("")}</div>
    <div id="cebody">${ceBody(u)}</div>
    <div class="cesave"><button class="btn primary" id="ceSave">Save changes</button><span class="pgstatus" id="ceStatus" role="status">${esc(CE.msg)}</span></div>
  </section>`;
}
function ceBody(u){
  if (CE.tab === "unit") { const e = u.ess || {t:"", items:[]};
    return `<label class="field"><span>Unit goal ("I can…")</span><textarea id="ce-goal" rows="2">${esc(u.goal || "")}</textarea></label>
    <label class="field"><span>Essentials box title</span><input id="ce-esst" type="text" value="${esc(e.t || "")}"></label>
    <label class="field"><span>Essentials tips, one per line, as "Heading: tip"</span><textarea id="ce-essi" rows="5">${esc((e.items || []).map(([a, b]) => `${a}: ${b}`).join("\n"))}</textarea></label>`; }
  if (CE.tab === "lessons") {
    const ls = LEAVES.filter(l => unitOf(l) === u); if (!CE.lid || !ls.some(l => l.id === CE.lid)) CE.lid = ls[0].id;
    const l = NODES[CE.lid], fixed = !!BOOK[l.id], b = book(l.id), au = (R[l.id] || {}).audio || [];
    return `<label class="field"><span>Lesson</span><select id="ce-lesson">${ls.map(x => `<option value="${x.id}"${x.id === l.id ? " selected" : ""}>${esc(x.title)}${CORE.has(x.id) ? " (core)" : R[x.id] && R[x.id].lib ? " (library)" : ""}</option>`).join("")}</select></label>
    <label class="field"><span>Lesson title</span><input id="ce-ltitle" type="text" value="${esc(l.title)}"></label>
    <label class="field"><span>Phrases, one per line, in order${fixed ? ` (keep all ${b.groups.length} lines: this lesson's notes are linked to each phrase)` : ""}</span><textarea id="ce-phr" rows="${Math.min(14, b.groups.length + 2)}">${esc(b.groups.map(g => g[0]).join("\n"))}</textarea></label>
    <label class="field"><span>Audio links, one per line, in the same order. Leave a line empty to use text-to-speech.</span><textarea id="ce-aud" rows="${Math.min(14, b.groups.length + 2)}" placeholder="https://… (optional)">${esc(b.groups.map((g, i) => au[i] || "").join("\n"))}</textarea></label>
    <p class="cenote">Practice is linked to each phrase's position. Changing the wording keeps participants' progress; adding, removing or reordering phrases can change which phrases count as practised.</p>`; }
  if (CE.tab === "tasks") { const ut = UT[u.id] || {};
    return `<label class="field"><span>Writing task</span><textarea id="ce-write" rows="3">${esc(ut.write || "")}</textarea></label>
    ${ut.writeList ? `<label class="field"><span>Writing situations, one per line</span><textarea id="ce-wlist" rows="5">${esc(ut.writeList.join("\n"))}</textarea></label>` : ""}
    <label class="field"><span>Speaking task</span><textarea id="ce-speak" rows="3">${esc(ut.speak || "")}</textarea></label>
    <label class="field"><span>Speaking: what to include, one per line</span><textarea id="ce-inc" rows="4">${esc((ut.inc || []).join("\n"))}</textarea></label>
    <label class="field"><span>Speaking situations, one per line (participants can switch between them)</span><textarea id="ce-tw" rows="5">${esc((ut.twists || []).join("\n"))}</textarea></label>`; }
  const key = u.id + "_" + CE.qk;
  if (!CE.qd || CE.qd.key !== key) CE.qd = {key, q:clone(QUIZ[key])};
  const Q = CE.qd.q;
  return `<div class="filters" role="group" aria-label="Quiz">${[["listen", "Listening quiz"], ["read", "Reading quiz"]].map(([k, l]) => `<button class="chipbtn" data-ceqk="${k}" aria-pressed="${CE.qk === k}" style="--lc:var(--deep)">${l}</button>`).join("")}</div>
  <p class="cenote">The first option in each list is the correct answer. Participants see the options in a mixed order.</p>
  <label class="field"><span>Instructions</span><textarea id="ce-qi" rows="2">${esc(Q.intro || "")}</textarea></label>
  ${Q.groups.map((g, gi) => `<fieldset class="cegroup"><legend>Part ${gi + 1}</legend>
    <label class="field"><span>Heading</span><input id="ce-g${gi}-h" type="text" value="${esc(g.h || "")}"></label>
    ${g.talk ? `<label class="field"><span>Recording of the whole conversation (optional link). Leave empty to use text-to-speech.</span><input id="ce-g${gi}-ta" type="text" value="${esc(g.talkAudio || "")}" placeholder="https://…"></label>` : ""}
    ${g.talk ? `<label class="field"><span>Conversation (read aloud), one line each as "T: …". T = teacher, S = student, P = parent or guest, C = colleague, L = leader</span><textarea id="ce-g${gi}-talk" rows="${g.talk.length + 1}">${esc(g.talk.map(([w, x]) => `${w}: ${x}`).join("\n"))}</textarea></label>` : ""}
    ${g.passage ? `<label class="field"><span>Reading text, one paragraph per line</span><textarea id="ce-g${gi}-pas" rows="${g.passage.length + 2}">${esc(g.passage.join("\n"))}</textarea></label>` : ""}
    ${g.audio || g.tts ? `<p class="cenote">This part plays a recording from the course. You can edit its questions below.</p>` : ""}
    ${g.qs.map((q, qi) => `<div class="ceq"><div class="ceqh"><b>Question ${qi + 1}</b>${g.qs.length > 1 ? `<button class="linkbtn" data-cerm="${gi}|${qi}">Remove</button>` : ""}</div>
      <label class="field"><span>Question</span><input id="ce-q${gi}-${qi}" type="text" value="${esc(q.q || "")}"></label>
      ${q.say != null ? `<label class="field"><span>What participants hear (read aloud)</span><input id="ce-s${gi}-${qi}" type="text" value="${esc(q.say)}"></label><label class="field"><span>Recording (optional link). Leave empty to use text-to-speech.</span><input id="ce-a${gi}-${qi}" type="text" value="${esc(q.audio || "")}" placeholder="https://…"></label>` : ""}
      <label class="field"><span>Options, one per line. Correct answer first.</span><textarea id="ce-o${gi}-${qi}" rows="3">${esc((q.o || []).join("\n"))}</textarea></label></div>`).join("")}
    <button class="btn sm" data-ceadd="${gi}">Add a question</button></fieldset>`).join("")}`;
}
function ceCollectQuiz(){
  const Q = CE.qd.q; Q.intro = val("ce-qi");
  Q.groups.forEach((g, gi) => {
    g.h = val(`ce-g${gi}-h`);
    if (g.talk) { const ta = val(`ce-g${gi}-ta`); if (ta) g.talkAudio = ta; else delete g.talkAudio; }
    if (g.talk) g.talk = lines(`ce-g${gi}-talk`).map(x => { const m = x.match(/^([TSPCL])\s*:\s*(.+)$/); return m ? [m[1], m[2]] : ["T", x]; });
    if (g.passage) g.passage = lines(`ce-g${gi}-pas`);
    g.qs.forEach((q, qi) => { q.q = val(`ce-q${gi}-${qi}`); if (q.say != null) { q.say = val(`ce-s${gi}-${qi}`); const a = val(`ce-a${gi}-${qi}`); if (a) q.audio = a; else delete q.audio; } q.o = lines(`ce-o${gi}-${qi}`); });
  });
}
function ceRender(){ const b = document.getElementById("cebody"); if (b) b.innerHTML = ceBody(NODES[CE.uid]); }
async function ceSave(btn){
  const u = NODES[CE.uid], cur = clone(PG.content[u.id]) || {}, st = document.getElementById("ceStatus");
  if (CE.tab === "unit") { cur.goal = val("ce-goal"); const items = lines("ce-essi").map(x => { const i = x.indexOf(":"); return i > 0 ? [x.slice(0, i).trim(), x.slice(i + 1).trim()] : [x, ""]; }); cur.ess = items.length ? {t:val("ce-esst") || "Essentials", items} : null; }
  if (CE.tab === "lessons") {
    const l = NODES[CE.lid], ph = lines("ce-phr"), au = (document.getElementById("ce-aud").value || "").split("\n").map(x => x.trim());
    if (!ph.length) { st.textContent = "Add at least one phrase."; return; }
    if (BOOK[l.id] && ph.length !== book(l.id).groups.length) { st.textContent = `Keep exactly ${book(l.id).groups.length} phrases in this lesson (you have ${ph.length}).`; return; }
    if (au.some(x => x && !/^https:\/\//.test(x))) { st.textContent = "Audio links must start with https://"; return; }
    cur.lessons = cur.lessons || {}; cur.lessons[l.id] = {title:val("ce-ltitle") || l.title, phrases:ph, audio:ph.map((p, i) => au[i] || null)};
  }
  if (CE.tab === "tasks") { const t = {write:val("ce-write"), speak:val("ce-speak"), inc:lines("ce-inc"), twists:lines("ce-tw")}; if (document.getElementById("ce-wlist")) t.writeList = lines("ce-wlist"); cur.tasks = t; }
  if (CE.tab === "quiz") {
    ceCollectQuiz(); const bad = CE.qd.q.groups.flatMap((g, gi) => g.qs.map((q, qi) => (!q.q || q.o.length < 2) ? `Part ${gi + 1}, question ${qi + 1}` : null)).filter(Boolean);
    const links = CE.qd.q.groups.flatMap(g => [g.talkAudio, ...g.qs.map(q => q.audio)]).filter(Boolean);
    if (links.some(x => !/^https:\/\//.test(x))) { st.textContent = "Audio links must start with https://"; return; }
    if (bad.length) { st.textContent = `Each question needs a question and at least two options. Check: ${bad.slice(0, 3).join("; ")}.`; return; }
    cur.quiz = cur.quiz || {}; cur.quiz[CE.qk] = clone(CE.qd.q);
  }
  cur.at = today(); cur.by = PG.me;
  btn.disabled = true; st.textContent = "Saving…";
  try { await PG.db.doc("content/" + u.id).set(cur); PG.content[u.id] = cur; applyContent(); CE.msg = "Saved. Participants see the change now."; st.textContent = CE.msg; }
  catch(e){ st.textContent = "Couldn't save. Check your connection, then try again."; }
  btn.disabled = false;
}
async function ceReset(uid){
  const st = document.getElementById("ceStatus");
  try { await PG.db.doc("content/" + uid).delete(); delete PG.content[uid]; applyContent(); CE.qd = null; CE.msg = "Unit reset to the original content."; route(); }
  catch(e){ if (st) st.textContent = "Couldn't reset. Check your connection, then try again."; }
}
const myLive = () => liveLevel(PR.q, PG.myReviews, (PG.mine && PG.mine.cp) || {});
function myLevel(){ return PG.trainer ? null : myLive().lvl; }
function practiceCard(p, t){
  return `<div class="card"><h2>Course progress</h2><div class="prow"><b>Overall</b><span>${overallDone(p, t)}%</span><span class="bar" aria-hidden="true"><i style="width:${overallDone(p, t)}%"></i></span></div>${TOPICS.map(x => x.soon ? `<div class="prow"><b>Topic ${x.n}: ${esc(x.title)}</b><span class="lvnone">Soon</span></div>` : `<div class="prow"><b>Topic ${x.n}: ${esc(x.title)}</b><span>${topicDone(x.id, p, t)}%</span><span class="bar" aria-hidden="true"><i style="width:${topicDone(x.id, p, t)}%"></i></span></div><p class="lead" style="margin:-4px 0 0;font-size:14px">${coreDone(x.id, p)} of ${coreOf(x.id).length} core lessons complete · ${tasksDone(x.id, t)} of ${tasksTotal(x.id)} unit tasks done</p>`).join("")}<p class="lead" style="margin:0;font-size:14px">${saidCount(p)} phrases said aloud in total.</p></div>`;
}
function mePage(){
  let h = `<h1 class="title">Me</h1>
  <section class="card acct"><div class="who"><span class="avatar" data-initial>Y</span><div><small class="k2">Signed in as</small><b data-myname>${esc(PG.name || "You")}</b><small data-myemail${PG.email ? "" : " hidden"}>${esc(PG.email || "")}</small><span class="roles"><span class="role">${PG.trainer ? "SEPA trainer" : "SEPA participant"}</span>${SESSION && SESSION.mode === "demo" ? `<span class="role demo">Demo account</span>` : ""}</span></div></div>
    <div class="acts"><button class="btn" data-acct="switch">Switch account</button><button class="btn" data-acct="logout">Log out</button></div>${SESSION && SESSION.mode === "demo" ? `<p class="hiddennote" style="margin:0;font-style:normal">Demo changes are kept in this browser only.</p>` : ""}</section>`;
  if (PG.trainer) h += `<button class="cont" data-go="trainer"><span class="thumb" style="--u:var(--u3);width:56px;height:56px;border-radius:14px">${ICHART}</span><span class="t"><b>Trainer tools</b><small>Score assessments and see each participant's progress</small></span>${I.arrow}</button>`;
  else h += speakingCard() + myTrainerCard();
  h += practiceCard(PR.p, PR.t) + resultsCard(PR.q, PR.sub, PR.t);
  if (PG.state === "off") h += `<p class="notice">You're not signed in, so your practice is saved in this browser only. Sign in with your Sparks account to keep it and share it with your trainer.</p>`;
  else if (PG.saveFail) h += `<p class="notice">Some of your practice hasn't reached the server yet. It's saved on this device and is sent automatically when the connection is back.</p>`;
  h += `<div class="card"><button class="linkrow" data-go="saved"><span>Saved phrases (${stars.length})</span>${I.arrow}</button><button class="linkrow" data-go="tasks"><span>Unit tasks</span>${I.arrow}</button></div>
  <div class="card"><h2>My class</h2><p class="lead" style="margin:0">Example dialogues in Topic 1 follow the level you teach.</p><div class="levels">${LEVELS.map(l => `<button class="lvbtn" data-level="${l.id}" aria-pressed="${l.id === level}" style="${lvVars(l)}"><span class="dot">${l.short}</span><span><b>${esc(l.name)}</b><small>${esc(l.age)}</small></span></button>`).join("")}</div></div>
  <details class="essbox"><summary>How the SEPA Course works</summary><div class="prose" style="padding-bottom:14px"><p>The Sparks English Proficiency Acceleration Course has three topics: <b>Practical Classroom English</b> (inside the lesson), <b>Beyond Classroom English</b> (parents and Sparks events) and <b>Professional English Proficiency</b> (IELTS-style practice, coming soon).</p><p>Every unit has four tasks: a listening quiz and a reading quiz (15 questions each, which you can retake), a writing task, and a speaking role-play you record and upload. A unit's tasks open when its core lessons are complete.</p><p>Inside a topic, every lesson is open, so you can use it as a phrase library too. In each lesson, listen to each phrase and tap <b>I said it</b> after you say it aloud. Each ring fills as you practise. Complete the lessons marked <b>Core</b> and every unit task to unlock the next topic.</p><p>Each topic is scored on its own CEFR range with an IELTS-style band: Topic 1 from A1 to B1, Topic 2 from B1 to B2 and Topic 3 from B2 to C1. Quizzes are marked automatically, and your trainer scores your writing, speaking and assessments with the topic's rubric. <button class="linkbtn" data-go="rubric">How levels work</button>. Only you and your trainers can see your levels and practice.</p></div></details>`;
  return h;
}
const lc = t => /^Topic/.test(t) ? t : t.toLowerCase();
function liveChips(lv){
  return `<div class="skchips">${SKL.map(([k, n]) => { const s = lv.skills[k]; return `<div><small>${n}</small>${bchip(s.b)}<small class="skn">${s.items.length ? `${s.items.length} result${s.items.length === 1 ? "" : "s"}` : "No results"}</small></div>`; }).join("")}</div>`;
}
function curTopic(){ const ts = TOPICS.filter(t => !t.soon); return ts.find(t => topicUnlocked(t) && topicDone(t.id) < 100) || ts[ts.length - 1]; }
function targetsHTML(lv){
  return `<div class="tgts">${lv.topics.map(x => `<div class="tgt${x.t.soon ? " soon" : ""}"><div class="tgth"><span><small>Topic ${x.t.n}</small><b>${esc(x.t.title)}</b></span><span class="tgtt">Target ${chip(x.target)}</span></div>${x.t.soon && !x.any ? `<p class="lvnone" style="margin:0">Coming soon</p>` : `<div class="tgsk">${SKL.map(([k, n]) => { const b = x.skills[k].b, ok = b != null && cefrOf(b) >= x.target; return `<span class="${ok ? "ok" : ""}"><small>${n}</small>${b == null ? `<span class="lvnone">–</span>` : `${ok ? I.check : ""}${LVL[cefrOf(b)]}`}</span>`; }).join("")}</div><p class="tgm">${x.met === 4 ? `${I.check} Target reached in all four skills` : `${x.met} of 4 skills at ${LVL[x.target]}`}</p>`}</div>`).join("")}</div>`;
}
function liveHTML(lv, mine){
  const open = lv.topics.filter(x => !x.t.soon), ctl = open.find(x => x.met < 4) || open[open.length - 1], ct = ctl.t;
  const head = lv.band == null ? `<p class="lead" style="margin:0">${mine ? "No results yet. Your level appears after your first unit quiz or your baseline assessment." : "No results yet."}</p>`
    : `<div class="bigl"><span class="bandnum l${lv.lvl}"><b>${LVL[lv.lvl]}</b><small>band ${fmtB(lv.band)}</small></span><div class="bigtx"><b>${esc(LVNAME[lv.lvl])}</b><span class="lead">${esc(`Topic ${ct.n} target: ${LVL[TARGET[ct.id]]}. ${ctl.met === 4 ? "Reached in all four skills." : `${ctl.met} of 4 skills there so far.`}`)}</span></div></div>${liveChips(lv)}`;
  return `${head}
  <h3 class="blocktitle" style="margin:6px 0 0">Topic targets</h3>${targetsHTML(lv)}
  ${lv.band == null ? "" : `<details class="essbox"><summary>Results behind ${mine ? "your" : "this"} level</summary>${SKL.map(([k, n]) => `<div class="evrow"><b>${n}</b>${lv.skills[k].items.length ? lv.skills[k].items.map(x => `<span>${esc(x.src)}${x.at ? ` · ${esc(fmtDate(x.at))}` : ""} ${bchip(x.b)}</span>`).join("") : `<span class="lvnone">No results yet</span>`}</div>`).join("")}</details>`}
  <p class="hiddennote" style="margin:0;font-style:normal">Each topic is scored on its own range: Topic 1 from A1 to B1, Topic 2 from B1 to B2, Topic 3 from B2 to C1. Your overall level uses each skill's ${RECENT} most recent results. <button class="linkbtn" data-go="rubric">How levels work</button></p>`;
}
function speakingCard(){
  if (PG.state === "loading") return `<div class="card"><h2>Proficiency level</h2><p class="lead" style="margin:0">Loading…</p></div>`;
  if (PG.state === "off") return `<div class="card"><h2>Proficiency level</h2><p class="lead" style="margin:0">Sign in to see your proficiency level.</p></div>`;
  const cp = (PG.mine && PG.mine.cp) || {}, done = CPS.filter(c => entryBand(cp[c.k]) != null), latest = done[done.length - 1];
  return `<div class="card"><h2>Proficiency level</h2>${liveHTML(myLive(), true)}
  <h3 class="blocktitle" style="margin:6px 0 0">Assessments with your trainer</h3>${journeySVG(cp)}${stopsHTML(cp)}
  ${latest ? `<details class="essbox"><summary>Levels at each assessment</summary>${breakdownHTML(cp)}</details>${feedbackHTML(cp[latest.k], latest)}` : ""}</div>`;
}
function trainerPage(){ return `<div id="prog" class="progwrap"><div class="empty">Loading…</div></div>`; }
const LVL = ["A1", "A2", "B1", "B2", "C1"], LVBAND = [3, 4, 5, 6, 7], RECENT = 3;
const SCALE = {baseline:[0, 1, 2, 3, 4], topic1:[0, 1, 2], topic2:[2, 3], topic3:[3, 4]};
const TARGET = {topic1:2, topic2:3, topic3:4};
const CP_TOPIC = {t1:"topic1", t2:"topic2", final:"topic3"};
const cpScale = k => SCALE[CP_TOPIC[k] || "baseline"];
const CRIT = [["f", "Fluency and coherence"], ["v", "Vocabulary"], ["g", "Grammar"], ["p", "Pronunciation"]];
const WCRIT = [["wt", "Task response"], ["wc", "Coherence and cohesion"], ["wl", "Vocabulary"], ["wg", "Grammar"]];
const CPS = [
  {k:"baseline", s:"Start", t:"Baseline assessment", d:"Placement at the start of SEPA, scored on the full range from A1 to C1, including the speaking interview"},
  {k:"t1", s:"Topic 1", t:"Topic 1 assessment", d:"Scored on the Topic 1 range, A1 to B1. Target: B1"},
  {k:"t2", s:"Topic 2", t:"Topic 2 assessment", d:"Scored on the Topic 2 range, B1 to B2. Target: B2"},
  {k:"final", s:"Final", t:"Final assessment", d:"Topic 3 · coming soon. Scored on the Topic 3 range, B2 to C1. Target: C1", soon:true}
];
const PG = {content:{}, names:{}, myContact:null, trDraft:null, trId:null, trInfo:null, unsubs:[], reviews:{}, myReviews:{}, email:"", name:"", state:"loading", db:null, user:null, me:null, trainer:false, mine:null, cohort:[], practice:{}, sel:null, cpSel:"baseline", q:"", hits:[], msg:"", saveFail:false};
const SKL = [["L", "Listening"], ["R", "Reading"], ["W", "Writing"], ["S", "Speaking"]];
const LEGACY = {"Below B1":4, "A1":3, "A2":4, "B1":5, "B2":6, "C1":7};
const toBand = v => typeof v === "number" ? v : v == null || v === "" ? null : LEGACY[v] != null ? LEGACY[v] : isNaN(+v) ? null : +v;
const halfRound = x => Math.round(x * 2) / 2;
const avgBand = arr => { const a = arr.filter(x => x != null); return a.length ? halfRound(a.reduce((s, x) => s + x, 0) / a.length) : null; };
const cefrOf = b => b == null ? null : b < 3.5 ? 0 : b < 4.5 ? 1 : b < 5.5 ? 2 : b < 6.5 ? 3 : 4;
const fmtB = b => b == null ? "–" : (+b).toFixed(1);
const fmtS = b => b == null ? "–" : Number.isInteger(+b) ? String(+b) : (+b).toFixed(1);
const schip = b => b == null ? `<span class="lvnone">–</span>` : `<span class="lvchip score l${cefrOf(b)}">${fmtS(b)}</span>`;
function critBand(e, list){ const v = list.map(([k]) => toBand(e[k])); return v.every(x => x != null) ? avgBand(v) : null; }
function entryBands(e){ if (!e) return {}; const w = critBand(e, WCRIT); return {L:toBand(e.L), R:toBand(e.R), W:w != null ? w : toBand(e.W), S:critBand(e, CRIT)}; }
function entryBand(e){ const b = entryBands(e); return avgBand(SKL.map(([k]) => b[k])); }
function skillLvl(e, k){ return cefrOf(entryBands(e)[k]); }
function prof(e){ return cefrOf(entryBand(e)); }
function overall(e){ return cefrOf(entryBands(e).S); }
const chip = l => l == null ? `<span class="lvnone">–</span>` : `<span class="lvchip l${l}">${LVL[l]}</span>`;
const bchip = b => b == null ? `<span class="lvnone">–</span>` : `<span class="lvchip l${cefrOf(b)}">${LVL[cefrOf(b)]} · ${fmtB(b)}</span>`;
const topicOfKey = key => { const u = NODES[String(key).split("_")[0]]; return u ? topicOf(u).id : "topic1"; };
function quizLevel(s, n, key){ const p = s / n, sc = SCALE[topicOfKey(key)] || SCALE.topic1; return sc.length === 3 ? (p >= .8 ? sc[2] : p >= .5 ? sc[1] : sc[0]) : (p >= .8 ? sc[1] : sc[0]); }
function quizBand(s, n, key){ return n ? LVBAND[quizLevel(s, n, key)] : null; }
const firstScore = r => r.first != null ? r.first : r.s;
const unitName = uid => NODES[uid] ? `${NODES[uid].eyebrow}` : uid;
function evidence(q, rv, cp){
  const ev = [];
  Object.entries(q || {}).forEach(([key, r]) => { const m = key.match(/^(u\d+)_(listen|read)$/); if (!m || !r || !r.n) return; ev.push({k:m[2] === "listen" ? "L" : "R", b:quizBand(firstScore(r), r.n, key), at:r.fa || r.at || "", tid:topicOfKey(key), src:`${unitName(m[1])} ${m[2] === "listen" ? "listening" : "reading"} quiz`}); });
  Object.entries(rv || {}).forEach(([key, r]) => { const m = key.match(/^(u\d+)_(write|speak)$/); if (!m || !r || r.band == null) return; ev.push({k:m[2] === "write" ? "W" : "S", b:r.band, at:r.at || "", tid:topicOfKey(key), src:`${unitName(m[1])} ${m[2] === "write" ? "writing" : "speaking"} task`}); });
  CPS.forEach(c => { const e = (cp || {})[c.k]; if (!e) return; const b = entryBands(e); SKL.forEach(([k]) => { if (b[k] != null) ev.push({k, b:b[k], at:e.date || "", tid:CP_TOPIC[c.k] || null, src:c.t}); }); });
  return ev;
}
function skillsFrom(ev){
  const skills = {};
  SKL.forEach(([k]) => { const items = ev.filter(x => x.k === k).sort((a, b) => String(b.at).localeCompare(String(a.at))).slice(0, RECENT); skills[k] = {b:avgBand(items.map(x => x.b)), items}; });
  return skills;
}
function liveLevel(q, rv, cp){
  const ev = evidence(q, rv, cp), skills = skillsFrom(ev), band = avgBand(SKL.map(([k]) => skills[k].b));
  const topics = TOPICS.map(t => { const s = skillsFrom(ev.filter(x => x.tid === t.id)), tg = TARGET[t.id]; return {t, target:tg, skills:s, met:SKL.filter(([k]) => s[k].b != null && cefrOf(s[k].b) >= tg).length, any:SKL.some(([k]) => s[k].b != null)}; });
  return {skills, band, lvl:cefrOf(band), count:SKL.filter(([k]) => skills[k].b != null).length, topics};
}
const pidLive = id => liveLevel(qmap(id), (PG.reviews || {})[id] || {}, ((PG.cohort.find(r => r.id === id) || {}).cp) || {});
const RUB = __D.RUB;   // in course.json (private): rubrics
function rubText(scaleKey, k, lv){
  if (RUB.any[k]) return RUB.any[k][lv] || [];
  if (scaleKey !== "baseline") return (RUB[scaleKey][k] || {})[lv] || [];
  return (RUB[lv <= 2 ? "topic1" : lv === 3 ? "topic2" : "topic3"][k] || {})[lv] || [];
}
const rubList = arr => arr.length ? `<ul class="rbdl">${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
function critField(pre, k, n, val, scaleKey, cls, hint){
  const v = toBand(val), sc = SCALE[scaleKey].slice().reverse(), cur = v == null ? null : sc.find(i => LVBAND[i] === v);
  return `<div class="crit" data-scale="${scaleKey}"><div class="crhead"><label for="${esc(pre)}-${k}">${n}</label><select id="${esc(pre)}-${k}" class="rbsel ${cls || ""}" data-rb="${esc(pre)}|${k}"><option value="">Score</option>${sc.map(i => `<option value="${LVBAND[i]}"${cur === i ? " selected" : ""}>${LVBAND[i]}</option>`).join("")}</select></div>
  <ul class="rbrows" id="rbd-${esc(pre)}-${k}">${sc.map(i => `<li data-v="${LVBAND[i]}"${cur === i ? ' class="on"' : ""}><b>${LVBAND[i]}</b><span>${esc(rubText(scaleKey, k, i).join(" "))}</span></li>`).join("")}</ul>${hint ? `<p class="rbhint">${hint}</p>` : ""}</div>`;
}
const pickVal = (pre, k) => { const s = document.getElementById(pre + "-" + k); return s && s.value !== "" ? +s.value : null; };
function fmtDate(d){ try { return new Date(d + "T00:00:00").toLocaleDateString("en-GB", {day:"numeric", month:"short", year:"numeric"}); } catch(e){ return d; } }
function journeySVG(cp){
  const W = 360, H = 206, L = 64, Rr = 30, T = 14, B = 46, lo = 2, hi = 8, cw = (W - L - Rr) / 3;
  const x = i => L + i * cw, y = b => T + (hi - Math.max(lo, Math.min(hi, b))) / (hi - lo) * (H - T - B);
  let s = `<svg class="jchart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Overall level at each assessment, with each topic's target.">`;
  const fi = CPS.findIndex(c => c.soon);
  if (fi >= 0) s += `<rect x="${x(fi) - 20}" y="${T - 6}" width="40" height="${H - T - B + 12}" rx="12" style="fill:none;stroke:var(--line);stroke-width:1.5" stroke-dasharray="4 4"/>`;
  LVL.forEach((n, l) => {
    s += `<line x1="${L}" x2="${W - Rr}" y1="${y(LVBAND[l])}" y2="${y(LVBAND[l])}" style="stroke:var(--line);stroke-width:1"/>`;
    s += `<text x="${L - 8}" y="${y(LVBAND[l]) + 4}" text-anchor="end" class="jt">${n} · ${fmtB(LVBAND[l])}</text>`;
  });
  CPS.forEach((c, i) => {
    s += `<text x="${x(i)}" y="${H - B + 22}" text-anchor="middle" class="jx">${c.s}</text>`;
    const tid = CP_TOPIC[c.k];
    if (tid) { const ty = y(LVBAND[TARGET[tid]]); s += `<line x1="${x(i) - 14}" x2="${x(i) + 14}" y1="${ty}" y2="${ty}" style="stroke:var(--green);stroke-width:3;stroke-linecap:round"/><text x="${x(i)}" y="${H - B + 38}" text-anchor="middle" class="jt goal">target ${LVL[TARGET[tid]]}</text>`; }
  });
  const pts = CPS.map((c, i) => ({i, b:entryBand(cp[c.k])})).filter(p => p.b != null);
  if (pts.length > 1) s += `<polyline points="${pts.map(p => `${x(p.i)},${y(p.b)}`).join(" ")}" style="fill:none;stroke:var(--blue);stroke-width:3;stroke-linejoin:round;stroke-linecap:round"/>`;
  pts.forEach((p, j) => { s += `<circle cx="${x(p.i)}" cy="${y(p.b)}" r="${j === pts.length - 1 ? 8 : 6}" style="fill:var(--blue);stroke:var(--surface);stroke-width:3"/><text x="${x(p.i) + 12}" y="${y(p.b) - 8}" class="jx">${LVL[cefrOf(p.b)]}</text>`; });
  return s + `</svg>`;
}
function stopsHTML(cp){
  return `<div class="stops">${CPS.map(c => {
    const e = cp[c.k], b = entryBand(e);
    return `<div class="stop${c.soon ? " soon" : ""}"><small>${esc(c.s)}${CP_TOPIC[c.k] ? ` · target ${LVL[TARGET[CP_TOPIC[c.k]]]}` : ""}</small><b>${esc(c.t)}</b>${c.soon && b == null ? `<span class="lvnone">Coming with Topic 3</span>` : b == null ? `<span class="lvnone">Not yet</span>` : bchip(b)}${e && e.date ? `<small>${esc(fmtDate(e.date))}</small>` : ""}</div>`;
  }).join("")}</div>`;
}
function breakdownHTML(cp){
  const cell = (c, v) => `<td>${c.soon && !cp[c.k] ? `<span class="lvnone">Soon</span>` : bchip(v)}</td>`;
  const sub = list => list.map(([q, m]) => `<tr class="subrow"><th scope="row">${m}</th>${CPS.map(c => { const v = cp[c.k] ? toBand(cp[c.k][q]) : null; return `<td>${v == null ? `<span class="lvnone">–</span>` : `${LVL[cefrOf(v)]} · ${fmtB(v)}`}</td>`; }).join("")}</tr>`).join("");
  return `<div class="tablewrap"><table class="bd"><thead><tr><th scope="col">Skill</th>${CPS.map(c => `<th scope="col">${esc(c.s)}</th>`).join("")}</tr></thead><tbody>
  <tr class="totrow"><th scope="row">Overall</th>${CPS.map(c => cell(c, entryBand(cp[c.k]))).join("")}</tr>
  ${SKL.map(([k, n]) => `<tr><th scope="row">${n}</th>${CPS.map(c => cell(c, entryBands(cp[c.k])[k])).join("")}</tr>${k === "W" ? sub(WCRIT) : k === "S" ? sub(CRIT) : ""}`).join("")}
  </tbody></table></div>`;
}
function feedbackHTML(e, c){
  if (!e || !(e.strength || e.focus || e.practise)) return "";
  return `<h3 class="blocktitle" style="margin:4px 0 0">Feedback from your ${esc(lc(c.t))}</h3><div class="fb">${e.strength ? `<div><small>Strength</small><p>${esc(e.strength)}</p></div>` : ""}${e.focus ? `<div><small>To work on</small><p>${esc(e.focus)}</p></div>` : ""}${e.practise ? `<div><small>Where to practise</small><p>${esc(e.practise)}</p></div>` : ""}</div>`;
}
function mountProgress(){
  const el = document.getElementById("prog"); if (!el) return;
  el.addEventListener("change", e => { if (e.target.matches(".pgsel")) previewOverall(); });
  el.addEventListener("input", e => { if (e.target.id === "pgq") onSearch(e.target.value); });
  el.addEventListener("focusin", e => { if (e.target.id === "pgq" && !PG.q && !PG.hits.length) onSearch(""); });
  renderProgress();
}
function refreshProgress(){
  if (current === "trainer") {
    if (PG.trainer && PG.sel) { const c = document.getElementById("pgChart"); if (c) { c.innerHTML = selChart(); const lvb = document.getElementById("pgLive"); if (lvb) lvb.innerHTML = liveHTML(pidLive(PG.sel), false); const pc = document.getElementById("pgPractice"); if (pc) pc.innerHTML = selPractice(); const pr = document.getElementById("pgResults"); if (pr && !pr.contains(document.activeElement)) pr.innerHTML = resultsCard(qmap(PG.sel), smap(PG.sel), tmap(PG.sel), (PG.reviews || {})[PG.sel] || {}); return; } }
    renderProgress(); return;
  }
  const busy = /^(topic\d|u\d+)-(listen|read|speak|write)$/.test(current || "");
  if (!busy && (current === "me" || current === "home" || current === null || current === "topics" || TOPICS.some(t => current && current.startsWith(t.id)))) { const y = scrollY; route(); scrollTo(0, y); }
}
function renderProgress(){
  const el = document.getElementById("prog"); if (!el) return;
  if (!PG.trainer) { el.innerHTML = `<div class="pagebar">${backBtn("me", "Me")}<h1 class="title">Trainer tools</h1><span></span></div><div class="empty">${PG.state === "loading" ? "Loading…" : "Trainer tools are for SEPA trainers. Ask the course admin to add you as a trainer."}</div>`; return; }
  const refocus = document.activeElement && document.activeElement.id === "pgq";
  el.innerHTML = PG.sel ? trainerDetail() : trainerList();
  if (refocus) { const q = document.getElementById("pgq"); if (q) { q.focus(); q.setSelectionRange(q.value.length, q.value.length); } }
  fillNames();
  if (!PG.sel) renderHits();
}
const pmap = id => (PG.practice[id] && PG.practice[id].p) || {};
const tmap = id => (PG.practice[id] && PG.practice[id].t) || {};
const omap = id => (PG.practice[id] && PG.practice[id].o) || {};
const qmap = id => (PG.practice[id] && PG.practice[id].q) || {};
const smap = id => (PG.practice[id] && PG.practice[id].sub) || {};
function trainerList(){
  const rows = PG.cohort.slice().sort((a, b) => String(a.addedAt || "").localeCompare(String(b.addedAt || "")));
  return `<div class="pagebar">${backBtn("me", "Me")}<h1 class="title">Trainer tools</h1><span></span></div>
  <button class="nextbox" data-go="content"><span><b>Course content</b><small>Edit any text in the course: topics, units, lessons, phrases, quizzes, tasks and rubrics</small></span>${I.arrow}</button>
  ${contactCard()}
  <p class="sub">${rows.length} participant${rows.length === 1 ? "" : "s"}. <b>Now</b> is the current band from unit tasks and assessments. Each participant sees only their own levels and practice.</p>
  <section class="sec"><h2 class="h2">Participants</h2>${rows.length ? `<div class="tablewrap"><table class="bd cohort"><thead><tr><th scope="col">Participant</th><th scope="col">Now</th>${CPS.map(c => `<th scope="col">${esc(c.s)}</th>`).join("")}<th scope="col">Course</th><th scope="col">Learn more</th></tr></thead><tbody>${rows.map(r => `<tr><th scope="row"><button class="linkbtn" data-pid="${esc(r.id)}"><span data-name="${esc(r.id)}">…</span></button></th><td>${bchip(pidLive(r.id).band)}</td>${CPS.map(c => `<td>${c.soon && !(r.cp || {})[c.k] ? `<span class="lvnone">Soon</span>` : bchip(entryBand((r.cp || {})[c.k]))}</td>`).join("")}<td>${overallDone(pmap(r.id), tmap(r.id))}%</td><td>${moreDoneAll(pmap(r.id))}/${moreTotal()}</td></tr>`).join("")}</tbody></table></div>` : `<div class="empty">No participants yet. Add the first one below.</div>`}</section>
  <section class="sec"><h2 class="h2">Add a participant</h2><label class="sr" for="pgq">Search by name</label><div class="searchbox">${I.search}<input id="pgq" type="search" placeholder="Search by name" autocomplete="off" value="${esc(PG.q)}"></div><div id="pgHits" class="list"></div>${PG.msg ? `<p class="pgstatus" role="status">${esc(PG.msg)}</p>` : ""}</section>`;
}
function renderHits(){
  const box = document.getElementById("pgHits"); if (!box) return;
  const have = new Set(PG.cohort.map(r => r.id));
  box.innerHTML = PG.hits.slice(0, 8).map(h => `<div class="result" style="cursor:default"><span>${esc(h.name || "Someone")}</span>${have.has(h.id) ? `<span class="lvnone">Added</span>` : `<button class="chipbtn" data-add="${esc(h.id)}" style="--lc:var(--green)">Add</button>`}</div>`).join("");
}
let sTimer = null;
function onSearch(q){
  PG.q = q; clearTimeout(sTimer);
  sTimer = setTimeout(async () => {
    let hits = []; try { hits = await PG.user.search(q); } catch(e){}
    if (PG.q !== q) return;
    PG.hits = (hits || []).filter(h => !h.isMe); renderHits();
  }, 250);
}
async function addParticipant(id){
  PG.msg = "";
  if (!PG.cohort.some(r => r.id === id)) {
    try { await PG.db.doc("scores/" + id).set({cp:{}, trainer:PG.me, addedAt:new Date().toISOString()}); }
    catch(e){ PG.msg = "Couldn't add this participant. Check that you have Editor access, then try again."; }
  }
  PG.q = ""; PG.hits = []; renderProgress();
}
function selRow(){ return PG.cohort.find(r => r.id === PG.sel) || {id:PG.sel, cp:{}}; }
function selChart(){ const cp = selRow().cp || {}; return `${journeySVG(cp)}${stopsHTML(cp)}`; }
function selPractice(){ return practiceCard(pmap(PG.sel), tmap(PG.sel)); }
function trainerDetail(){
  const r = selRow(), e = (r.cp || {})[PG.cpSel] || {}, c = CPS.find(x => x.k === PG.cpSel);
  return `<div class="pagebar"><button class="iconbtn" data-pgback="1" aria-label="All participants">${I.back}</button><h1 class="title" data-name="${esc(r.id)}">…</h1><span></span></div>
  <p class="sub trline">${trainerLine(r)}</p>
  <section class="card"><h2>Current level</h2><div id="pgLive">${liveHTML(pidLive(PG.sel), false)}</div></section>
  <section class="card" id="pgChart">${selChart()}</section>
  <div id="pgPractice">${selPractice()}</div>
  <div id="pgResults">${resultsCard(qmap(PG.sel), smap(PG.sel), tmap(PG.sel), (PG.reviews || {})[PG.sel] || {})}</div>
  <section class="card pgform"><h2>Record an assessment</h2>
    <div class="filters" role="group" aria-label="Checkpoint">${CPS.map(x => x.soon ? `<span class="chipbtn" aria-disabled="true" style="--lc:var(--line);opacity:.6;cursor:default">${esc(x.s)} · coming with Topic 3</span>` : `<button class="chipbtn" data-cp="${x.k}" aria-pressed="${x.k === PG.cpSel}" style="--lc:var(--deep)">${esc(x.s)}</button>`).join("")}</div>
    <p class="hiddennote" style="margin:0;font-style:normal"><b>${esc(c.t)}:</b> ${esc(c.d)}</p>
    <p class="hiddennote" style="margin:0;font-style:normal">Choose a score for each skill (${cpScale(PG.cpSel).map(i => LVBAND[i]).join(" · ")}). The rubric under each one shows what each score means. Leave a skill blank if it wasn't assessed. The participant sees it straight away. <button class="linkbtn" data-go="rubric">See the rubric</button></p>
    <h3 class="blocktitle" style="margin:4px 0 0">Listening and reading</h3>
    <div class="fgrid">${[["L", "Listening"], ["R", "Reading"]].map(([k, n]) => critField("pg", k, n, e[k], CP_TOPIC[PG.cpSel] || "baseline", "pgsel", quizHint(k))).join("")}</div>
    <h3 class="blocktitle" style="margin:4px 0 0">Writing: four criteria</h3>
    <div class="fgrid">${WCRIT.map(([k, n]) => critField("pg", k, n, e[k], CP_TOPIC[PG.cpSel] || "baseline", "pgsel")).join("")}</div>
    <h3 class="blocktitle" style="margin:4px 0 0">Speaking: four criteria</h3>
    <div class="fgrid">${CRIT.map(([k, n]) => critField("pg", k, n, e[k], CP_TOPIC[PG.cpSel] || "baseline", "pgsel")).join("")}</div>
    <button type="button" class="linkbtn" data-pgclear="1" style="align-self:flex-start">Clear all choices</button>
    <p class="ovl" id="pgOverall">${ovlHTML(e)}</p>
    <label class="field"><span>Date of the assessment</span><input id="pg-date" type="date" value="${esc(e.date || today())}"></label>
    <label class="field"><span>Strength (one clear example)</span><textarea id="pg-strength" rows="2">${esc(e.strength || "")}</textarea></label>
    <label class="field"><span>To work on (one clear focus)</span><textarea id="pg-focus" rows="2">${esc(e.focus || "")}</textarea></label>
    <label class="field"><span>Where to practise in the hub</span><input id="pg-practise" type="text" value="${esc(e.practise || "")}" placeholder="Topic 2, Unit 4 PTM, Reporting strengths"></label>
    <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><button class="btn primary" id="pgSave">Save ${esc(c.s)} level</button><span id="pgStatus" class="pgstatus" role="status"></span></div>
  </section>`;
}
function quizHint(k){
  const q = qmap(PG.sel), sk = k === "L" ? "listen" : "read", tid = CP_TOPIC[PG.cpSel];
  const v = avgBand(Object.entries(q).filter(([key, r]) => key.endsWith("_" + sk) && /^u\d+_/.test(key) && r && r.n && (!tid || topicOfKey(key) === tid)).map(([key, r]) => quizBand(firstScore(r), r.n, key)));
  return v != null ? `Unit quizzes${tid ? ` in Topic ${TOPICS.find(t => t.id === tid).n}` : ""} so far: score ${fmtS(v)} (first tries).` : "No unit quiz results here yet.";
}
const ovlHTML = e => { const b = entryBands(e); return `Writing: ${schip(b.W)} &nbsp; Speaking: ${schip(b.S)} &nbsp; Overall: ${schip(entryBand(e))}`; };
function formEntry(){ const e = {}; [["L"], ["R"], ...WCRIT, ...CRIT].forEach(([k]) => { const v = pickVal("pg", k); if (v != null) e[k] = v; }); return e; }
function previewOverall(){ const o = document.getElementById("pgOverall"); if (o) o.innerHTML = ovlHTML(formEntry()); }
async function saveCheck(btn){
  const st = document.getElementById("pgStatus"), e = formEntry();
  const nc = CRIT.filter(([k]) => e[k] != null).length, nw = WCRIT.filter(([k]) => e[k] != null).length;
  if (!Object.keys(e).length) { st.textContent = "Choose at least one level first."; return; }
  if (nw > 0 && nw < 4) { st.textContent = "For writing, choose a level for all four criteria, or leave all four blank."; return; }
  if (nc > 0 && nc < 4) { st.textContent = "For speaking, choose a level for all four criteria, or leave all four blank."; return; }
  e.date = document.getElementById("pg-date").value || today();
  ["strength", "focus", "practise"].forEach(k => e[k] = document.getElementById("pg-" + k).value.trim());
  btn.disabled = true; st.textContent = "Saving…";
  try {
    const ref = PG.db.doc("scores/" + PG.sel);
    if (PG.cohort.some(r => r.id === PG.sel)) await ref.update(Object.assign({cp:{[PG.cpSel]: e}, updatedAt:new Date().toISOString()}, selRow().trainer ? {} : {trainer:PG.me}));
    else await ref.set({cp:{[PG.cpSel]: e}, trainer:PG.me, addedAt:new Date().toISOString()});
    st.textContent = "Saved. The participant can see this now.";
  } catch(err){ st.textContent = "Couldn't save. Check your connection and that you have Editor access, then try again."; }
  btn.disabled = false;
}
async function fillNames(){
  const els = [...document.querySelectorAll("[data-name]")]; if (!els.length || !PG.user) return;
  const ids = [...new Set(els.map(x => x.dataset.name))], fresh = ids.filter(i => PG.names[i] == null);
  let ps = {}; try { ps = await PG.user.profiles(ids); } catch(e){}
  ids.forEach(i => { if (ps[i] && ps[i].name) PG.names[i] = ps[i].name; });
  els.forEach(x => { const p = ps[x.dataset.name]; x.textContent = (p && p.name) || PG.names[x.dataset.name] || "Someone"; });
  if (current === "review" && RVQ.q.trim() && fresh.some(i => PG.names[i])) renderRvList();
}
function progClick(t){
  const d = t.dataset;
  if (d.pid) { PG.sel = d.pid; const cp = selRow().cp || {}; PG.cpSel = (CPS.find(c => !c.soon && !cp[c.k]) || CPS[0]).k; renderProgress(); scrollTo(0, 0); return true; }
  if (d.pgback) { PG.sel = null; renderProgress(); return true; }
  if (d.cp) { PG.cpSel = d.cp; renderProgress(); return true; }
  if (d.pgclear) { document.querySelectorAll("#prog select.pgsel").forEach(s => { s.value = ""; }); document.querySelectorAll("#prog .rbrows li.on").forEach(li => li.classList.remove("on")); previewOverall(); return true; }
  if (d.add) { addParticipant(d.add); return true; }
  if (t.id === "pgSave") { saveCheck(t); return true; }
  return false;
}
let BOOTGEN = 0;
async function boot(){
  const gen = ++BOOTGEN, live = () => gen === BOOTGEN;
  let db = null, user = null;
  // Backend: demo accounts use an in-browser store; "account" uses the signed-in Claude account.
  // Apps Script: the same calls go to the server (Sheets for docs, Drive for files), keyed by the signed-in email.
  if (SESSION.mode === "demo") { db = DEMO.db; user = DEMO.user(SESSION.uid); }
  else { try { if (window.claude && window.claude.use) [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]); } catch(e){} }
  if (!live()) return;
  if (!db || !user) { PG.state = "off"; return refreshProgress(); }
  PG.db = db; PG.user = user;
  try { PG.me = await user.id(); PG.trainer = await user.canEdit(); const m = await user.me(); PG.name = m.name || ""; PG.email = m.email || ""; } catch(e){}
  if (!live()) return;
  setNav(PG.trainer);
  if (PG.trainer && (current === "tasks")) { const y = scrollY; route(); scrollTo(0, y); }
  if (!PG.me) { PG.state = "off"; return refreshProgress(); }
  const fail = () => { if (!live()) return; PG.state = "error"; refreshProgress(); };
  const sub = (ref, cb, err) => PG.unsubs.push(ref.onSnapshot(x => { if (live()) cb(x); }, err || (() => {})));
  sub(db.collection("content"), qs => { const m = {}; qs.docs.forEach(x => m[x.id] = JSON.parse(JSON.stringify(x.data() || {}))); PG.content = m; applyContent();
    if (current === "content") { if (!(document.activeElement && /^(TEXTAREA|INPUT|SELECT)$/.test(document.activeElement.tagName))) { const y = scrollY; route(); scrollTo(0, y); } }
    else if (!/^(u\d+|topic\d)-(listen|read|speak|write)$|^rvitem$|^trainer$/.test(current || "")) { const y = scrollY; route(); scrollTo(0, y); } });
  let firstPR = true;
  sub(db.doc("progress/" + PG.me), s => {
    if (prDirty || prWriting) return;
    if (s.exists) {
      const d = JSON.parse(JSON.stringify(s.data() || {}));
      PR.p = d.p || {}; PR.t = d.t || {}; PR.o = d.o || {}; PR.q = d.q || {}; PR.sub = d.sub || {}; PR.tw = d.tw || {}; PR.nr = d.nr || []; PR.sp = d.sp || {}; PR.dr = d.dr || {}; PR.wu = d.wu || {}; PR.bc = d.bc || {}; PR.start = d.start || PR.start; PR.goal = d.goal || PR.goal; save(prKey(), PR);
      if (!firstPR) refreshProgress();
    } else if (Object.keys(PR.p).length || Object.keys(PR.t).length || Object.keys(PR.o).length || Object.keys(PR.q).length) persist();
    if (firstPR) { firstPR = false; refreshProgress(); }
  });
  if (PG.trainer) {
    sub(db.collection("scores"), qs => { PG.cohort = qs.docs.map(x => Object.assign({id:x.id}, x.data() || {})); PG.state = "ready"; refreshProgress(); }, fail);
    sub(db.collection("progress"), qs => { const m = {}; qs.docs.forEach(x => m[x.id] = x.data() || {}); PG.practice = m; if (current === "trainer") refreshProgress(); else rerenderReview(); });
    sub(db.doc("trainers/" + PG.me), s => { PG.myContact = s.exists ? s.data() : null; if (current === "trainer" && !PG.sel && !PG.trDraft) renderProgress(); });
    sub(db.collection("reviews"), qs => { const m = {}; qs.docs.forEach(x => m[x.id] = JSON.parse(JSON.stringify(x.data() || {}))); PG.reviews = m; rerenderReview(); });
    sub(db.collection("bootcamp"), qs => { const m = {}; qs.docs.forEach(x => m[x.id] = JSON.parse(JSON.stringify(x.data() || {}))); PG.bcAll = m; if (window.SEPA_bcChanged) SEPA_bcChanged(); });
  } else {
    sub(db.doc("reviews/" + PG.me), s => { PG.myReviews = s.exists ? s.data() : {}; updateBell(); if (/^u\d+-(speak|write)$|^bc[123]$|^bootcamp$/.test(current || "") || current === "me") { if (!(document.activeElement && /^(TEXTAREA|INPUT)$/.test(document.activeElement.tagName))) { const y = scrollY; route(); scrollTo(0, y); } } });
    sub(db.doc("bootcamp/" + PG.me), s => { PG.bc = s.exists ? JSON.parse(JSON.stringify(s.data() || {})) : {}; if (window.SEPA_bcChanged) SEPA_bcChanged(); });
    sub(db.doc("scores/" + PG.me), s => { PG.mine = s.exists ? s.data() : null; PG.state = "ready";
      const tid = PG.mine && PG.mine.trainer;
      if (tid && tid !== PG.trId) { PG.trId = tid; sub(db.doc("trainers/" + tid), t => { PG.trInfo = t.exists ? t.data() : null; if (current === "me") { const y = scrollY; route(); scrollTo(0, y); } }); }
      refreshProgress(); updateBell(); }, fail);
  }
}
const UT = __D.UT;   // in course.json (private): unit task instructions
const STAGES = ["Changing languages", "Getting attention", "Moving to a new activity", "Describing the new activity", "Setting a time limit", "Checking everything is clear", "Starting work", "Checking how students are doing", "Giving a time warning", "Checking who has finished", "Stopping the activity"];
const U1_STAGE_ITEMS = [["Now I'll use English again.", 0], ["Right, everyone.", 1], ["Let's move on to something else.", 2], ["Now we'll read the story on page 12.", 3], ["You have five minutes.", 4], ["Is that clear?", 5], ["OK. Away you go.", 6], ["Are you all managing?", 7], ["Just a couple more minutes.", 8], ["Have you all finished?", 9], ["OK. Could you stop now, please?", 10], ["Eyes on me, please, everybody.", 1], ["You've got ten minutes for this.", 4], ["One more minute, then we'll check.", 8], ["Right, pens down, please.", 10]];
function pickOthers(arr, i, n, seed){ const idx = arr.map((_, j) => j).filter(j => j !== i); return shuffleIdx(idx.length, seed).slice(0, n).map(j => arr[idx[j]]); }
QUIZ.u1_listen = {intro:"Listen to 15 things a teacher says during a lesson. For each one, choose which stage of the lesson it belongs to. Play each one as often as you like.", groups:[
  {h:"What stage of the lesson is this?", qs:U1_STAGE_ITEMS.map(([s, i]) => ({q:"Which stage of the lesson is this?", say:s, o:[STAGES[i], ...pickOthers(STAGES, i, 2, s)]}))}]};
/* END app2.js */
/* ===== app3.js ===== */
/* SEPA Course app code, part 3 of 3. Generated from the prototype. Upload to Drive › SEPA Course › Content. */
QUIZ.u1_read = {intro:"Read four short scenes from the start of a Sparks lesson. At each numbered moment, choose what the teacher should say.", groups:[
  {h:"Scene A: Monday morning", passage:["It's Monday morning and it's raining heavily. Your first lesson is about to begin, and you're in the corridor outside your classroom. Most of the students are already inside.", "Raka arrives, and you greet him (1). He is carrying his school bag and a football. Raka's locker is in the corridor, so you suggest he leaves the football there (2).", "Nadia arrives in a very wet raincoat, which you don't want in the classroom (3). Two students are still chatting in the corridor (4)."], qs:[
    {q:"(1) You greet Raka.", o:["Good morning, Raka. How was your weekend?", "Morning. You are late?", "Hello Raka, why you come so early?"]},
    {q:"(2) You suggest he leaves the football in his locker.", o:["Why don't you leave your football in your locker?", "You cannot bring ball. Out!", "Put your ball to locker."]},
    {q:"(3) You don't want Nadia's wet raincoat in the classroom.", o:["Could you hang your wet raincoat outside, please?", "Your coat is wet. Don't.", "Take off coat wet, please."]},
    {q:"(4) Two students are still in the corridor.", o:["Come on in, you two. We're about to start.", "Why you are still outside?", "You two, enter now quickly!"]}]},
  {h:"Scene B: A new class", passage:["You go into the classroom. A moment later there's a knock at the door and Dimas appears. You invite him in (5). He leaves the door open (6).", "You greet the whole class and say you hope everybody had a good weekend (7). You ask Sari, one of the shyer students, how she is (8).", "You have never taught this class English before, so you introduce yourself (9) and tell them when their English lessons are (10)."], qs:[
    {q:"(5) You invite Dimas in.", o:["Come in, Dimas.", "Who is it? Enter.", "Yes? What?"]},
    {q:"(6) Dimas leaves the door open.", o:["Could you close the door behind you, please?", "Door!", "You forget the door close."]},
    {q:"(7) You hope everybody had a good weekend.", o:["I hope you all had a nice weekend.", "Did you have nice weekend all?", "Your weekend is good I hope."]},
    {q:"(8) You ask Sari how she is.", o:["How are you today, Sari?", "Sari, you are fine or not?", "Sari, answer me, how are you?"]},
    {q:"(9) You introduce yourself.", o:["Let me introduce myself. I'm Miss Rina, and I'm your new English teacher.", "My name is Rina Miss, your teacher.", "I am introduce myself, Rina."]},
    {q:"(10) You tell them when their English lessons are.", o:["We'll have English on Mondays and Thursdays.", "English is every Monday and Thursday day.", "We meet in Monday and in Thursday."]}]},
  {h:"Scene C: The register", passage:["You're halfway through the term and you're taking the register (11). One of the students tells you that Putri is absent. You wonder if anyone has seen her (12).", "Kevin, who has been away for two weeks, is back in class. You welcome him back (13)."], qs:[
    {q:"(11) You start taking the register.", o:["Let's see who's here today.", "I check you all present or not.", "Now absent time."]},
    {q:"(12) You ask if anyone knows where Putri is.", o:["Does anybody know where Putri is?", "Where is Putri, anybody?", "Who know Putri?"]},
    {q:"(13) You welcome Kevin back.", o:["Welcome back, Kevin! It's good to see you again.", "Kevin, you are back finally.", "Oh Kevin, long time no see you."]}]},
  {h:"Scene D: Getting started", passage:["You want to start the lesson, but first you need everyone's attention. Dina is chatting with her neighbour (14).", "The door opens and Bayu comes in. He's twenty minutes late. You ask for an explanation (15)."], qs:[
    {q:"(14) You get everyone's attention, including Dina.", o:["Right, everyone. Eyes on me, please. Dina, that means you too.", "Hey! Quiet!", "Everybody stop talk now."]},
    {q:"(15) You ask Bayu why he is late.", o:["You're twenty minutes late, Bayu. What happened?", "Why you late twenty minutes?", "Late again! Sit."]}]}
]};
function unitPool(u){
  const rs = LEAVES.filter(l => unitOf(l) === u && l.parent.eyebrow !== "Essentials");
  const pairs = [], max = Math.max(...rs.map(r => book(r.id).groups.length));
  for (let i = 0; i < max; i++) rs.forEach(r => { const g = book(r.id).groups[i]; if (g) pairs.push({r, g}); });
  return {rs, pairs};
}
function genUnitQuizzes(u){
  const {rs, pairs} = unitPool(u); if (rs.length < 3) return;
  const titles = rs.map(r => r.title), even = pairs.filter((_, i) => i % 2 === 0), odd = pairs.filter((_, i) => i % 2 === 1);
  const L = [...even, ...odd].slice(0, 15), Rd = [...odd, ...even].slice(0, 15);
  if (!QUIZ[u.id + "_listen"]) QUIZ[u.id + "_listen"] = {intro:"Listen to 15 things a teacher says. For each one, choose the situation the teacher is in. Play each one as often as you like.", groups:[
    {h:`${u.title}: what is the teacher doing?`, qs:L.map(({r, g}) => ({q:"Which situation is the teacher in?", say:g[0], o:[r.title, ...pickOthers(titles, titles.indexOf(r.title), 2, g[0])]}))}]};
  if (!QUIZ[u.id + "_read"]) QUIZ[u.id + "_read"] = {intro:"Read each situation and choose the best thing to say.", groups:[
    {h:`${u.title}: what would you say?`, qs:Rd.map(({r, g}) => {
      const right = g[1] || g[0], others = rs.filter(x => x !== r);
      const wrong = pickOthers(others.map(x => x.id), -1, 2, right + r.id).map(id => book(id).groups[hashStr(id + right) % book(id).groups.length][0]);
      return {q:`Situation: ${r.title}. What could you say?`, o:[right, ...wrong.filter(w => w !== right)].slice(0, 3)};
    })}]};
}
UNITS.forEach(genUnitQuizzes);
const twistIdx = key => { const l = (UT[key.split("_")[0]] || {}).twists || []; if (!l.length) return -1; const v = PR.tw[key]; return v != null ? v % l.length : hashStr(key + (PG.me || "")) % l.length; };
const twistText = key => { const l = (UT[key.split("_")[0]] || {}).twists || [], i = twistIdx(key); return i >= 0 ? l[i] : ""; };
function situationHTML(key){ const t = twistText(key); return t ? `<section class="twist" id="tw-${key}"><small>Your situation</small><b>${esc(t)}</b><button class="linky" data-twist="${key}">Change situation</button></section>` : ""; }
function twistHTML(key){
  const ut = UT[key.split("_")[0]] || {}, t = twistText(key), partner = ut.partner;
  return `<section class="card howto"><h2>How to do this task</h2><ol class="steps">
    <li>Read your situation below. It's what happens in your role-play.</li>
    <li>${partner ? `Ask someone to play ${partner}. If no one can, say your part and pause where ${partner} would answer.` : key.startsWith("u12_") ? "Imagine the families are in front of you, and speak as you would at the event." : "Imagine your students are in front of you. You can also ask colleagues to play the students."}</li>
    <li>Record yourself on your phone. Speak naturally and use phrases from this unit. Don't read from a script.</li>
    <li>Upload your recording below. Your trainer will listen and give you feedback.</li></ol></section>
  ${situationHTML(key)}
  ${ut.inc ? `<section class="card"><h2>What to include</h2><ul class="checks">${ut.inc.map(x => `<li>${esc(x)}</li>`).join("")}</ul></section>` : ""}`;
}
const SESSION_KEY = "sepa-session";
let SESSION = load(SESSION_KEY, null);
const prKey = () => "sepa-practice:" + ((window.SEPA && SEPA.me && SEPA.me.uid) || "anon");
function resetPR(){ Object.keys(PR).forEach(k => delete PR[k]); Object.assign(PR, {p:{}, t:{}, o:{}, q:{}, sub:{}, tw:{}, nr:[], sp:{}, dr:{}, wu:{}, bc:{}, start:null, goal:10}, load(prKey(), {})); }
function startApp(fresh){
  if (!SESSION) return showSignIn();
  document.body.classList.remove("signedout");
  resetPR();
  if (fresh) history.replaceState(null, "", "#home");
  route(); boot();
}
function signIn(sess){ SESSION = sess; save(SESSION_KEY, sess); AUTH = {step:"signin"}; startApp(true); }
async function signOut(){
  try { await flushNow(); } catch(e){}
  BOOTGEN++;
  PG.unsubs.forEach(u => { try { u && u(); } catch(e){} });
  Object.assign(PG, {bc:null, bcAll:null, content:{}, names:{}, myContact:null, trDraft:null, trId:null, trInfo:null, unsubs:[], reviews:{}, myReviews:{}, email:"", name:"", state:"loading", db:null, user:null, me:null, trainer:false, mine:null, cohort:[], practice:{}, sel:null, cpSel:"baseline", q:"", hits:[], msg:"", saveFail:false});
  SESSION = null; try { localStorage.removeItem(SESSION_KEY); } catch(e){}
  setNav(false); AUTH = {step:"signin"};
  history.replaceState(null, "", "#home");
  showSignIn();
}
let AUTH = {step:"signin"};
const DEMO_CODE = "246810";
function showSignIn(){
  current = null;
  document.body.classList.add("signedout");
  app.innerHTML = signInHTML();
  scrollTo(0, 0);
  const f = app.querySelector("input:not([type=checkbox])"); if (f && AUTH.step !== "signin") f.focus();
}
function signInHTML(){
  const a = AUTH, msg = a.msg ? `<p class="authmsg${a.ok ? " ok" : ""}" role="alert">${esc(a.msg)}</p>` : "";
  let card;
  if (a.step === "code") card = `<span class="eyebrow">${a.reset ? "Reset your password" : "First sign-in"}</span><h2>Check your email</h2>
    <p class="authsub">We sent a 6-digit sign-in code to <b>${esc(a.email)}</b>. It works for 10 minutes.</p>
    <p class="authdemo-note"><b>Demo:</b> no email is sent. Your code is <b>${DEMO_CODE}</b>.</p>
    <form class="authform" data-form="code"><label class="field"><span>Sign-in code</span><input id="au-code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="6 digits"></label>${msg}
    <div class="authrow"><button class="btn primary authbtn" type="submit">Continue</button><button type="button" class="linkbtn" data-auth="resend">Send a new code</button></div></form>
    <hr><button type="button" class="linkbtn" data-auth="back">Back to sign in</button>`;
  else if (a.step === "newpw") card = `<span class="eyebrow">${a.reset ? "Reset your password" : "First sign-in"}</span><h2>Create your password</h2>
    <p class="authsub">For <b>${esc(a.email)}</b>. Use at least 8 characters. You'll sign in with this from now on.</p>
    <form class="authform" data-form="newpw"><label class="field"><span>New password</span><input id="au-pw1" type="password" autocomplete="new-password"></label>
    <label class="field"><span>Type it again</span><input id="au-pw2" type="password" autocomplete="new-password"></label>
    <label class="showpw"><input type="checkbox" data-auth-show="1"> Show password</label>${msg}
    <div class="authrow"><button class="btn primary authbtn" type="submit">Save and sign in</button></div></form>
    <hr><button type="button" class="linkbtn" data-auth="back">Back to sign in</button>`;
  else card = `<span class="eyebrow">Sparks English Proficiency Acceleration Course</span><h2>Sign in to SEPA</h2>
    <p class="authsub">Use the email your trainer registered for your batch.</p>
    <form class="authform" data-form="signin"><label class="field"><span>Email</span><input id="au-email" type="email" autocomplete="username" value="${esc(a.email || "")}" placeholder="name@example.com"></label>
    <label class="field"><span>Password</span><input id="au-pw" type="password" autocomplete="current-password" placeholder="Password"></label>
    <label class="showpw"><input type="checkbox" data-auth-show="1"> Show password</label>${msg}
    <div class="authrow"><button class="btn primary authbtn" type="submit">Sign in</button><button type="button" class="linkbtn" data-auth="forgot">Forgot password?</button></div></form>
    <hr><p class="authsub">First time, or no password yet? We'll email you a sign-in code, then you create your password.</p>
    <button type="button" class="btn authout" data-auth="code">Email me a sign-in code</button>`;
  const demo = DEMO.list().map(x => `<div class="demoacct"><span class="dav ${x.role}">${esc(x.name.charAt(0))}</span><div><b>${esc(x.name)}</b><small>${x.role === "trainer" ? "Trainer" : "Learner"} · ${esc(x.email)} · password <code>${esc(x.demoPw)}</code></small></div><button type="button" class="btn${x.role === "trainer" ? "" : " primary"}" data-auth="demo" data-email="${esc(x.email)}">Sign in</button></div>`).join("");
  return `<div class="auth">
  <section class="authhero"><span class="k">Welcome to</span><h1 style="display:flex;align-items:center;gap:.3em">${window.SEPA_ICON ? `<img alt="" src="${window.SEPA_ICON}" style="height:1.15em;width:1.15em;flex:none;margin-top:-.06em">` : ""}SEPA Course</h1><p class="lead">Sparks English Proficiency Acceleration Course: the English you need to teach, talk with parents and grow your level.</p>
    <ol class="authtopics">${TOPICS.map(t => `<li><span>${t.n}</span><div><b>${esc(t.title)}</b><small>${t.soon ? "Coming soon" : esc(TSHORT[t.id])}</small></div></li>`).join("")}</ol>
    <p class="authhow">Practise the phrases, finish the four skills tasks in each unit, and your trainer tracks your CEFR level along the way.</p></section>
  <section class="card authcard"><img class="logo" src="${LOGO}" alt="Sparks English" width="170" height="34">${card}</section>
  <section class="card authdemos"><h2>Try a demo account</h2><p class="authsub">Two sample accounts with sample progress, so you can see the course as a trainer and as a learner. Sign in as the trainer to give feedback, then log out and sign in as the learner to see it.</p>${demo}
    <button type="button" class="linkbtn" data-auth="resetdemo">Reset the demo data</button></section>
  <p class="authalt">Preview only: <button type="button" class="linkbtn" data-auth="account">continue with my Claude account</button> to use the real course data.</p>
  </div>`;
}
function authSet(p){ AUTH = Object.assign({}, AUTH, {msg:"", ok:false}, p); showSignIn(); }
const normEmail = v => String(v || "").trim().toLowerCase();
async function authSubmit(form){
  const f = form.dataset.form, btn = form.querySelector("[type=submit]");
  if (f === "signin") {
    const email = normEmail(document.getElementById("au-email").value), pw = document.getElementById("au-pw").value;
    if (!email || !pw) return authSet({email, msg:"Enter your email and password."});
    const acc = DEMO.account(email);
    if (!acc) return authSet({email, msg:"We couldn't find an account for this email. Check the spelling, or ask your trainer to register you. In this preview, use a demo account below."});
    btn.disabled = true;
    if (!(await DEMO.checkPw(email, pw))) return authSet({email, msg:"That password isn't right. Try again, or choose Forgot password."});
    return signIn({mode:"demo", uid:acc.uid, email});
  }
  if (f === "code") {
    const c = document.getElementById("au-code").value.replace(/\D/g, "");
    if (c !== DEMO_CODE) return authSet({msg:"That code isn't right. Check the email and try again."});
    return authSet({step:"newpw"});
  }
  if (f === "newpw") {
    const a = document.getElementById("au-pw1").value, b = document.getElementById("au-pw2").value;
    if (a.length < 8) return authSet({msg:"Use at least 8 characters."});
    if (a !== b) return authSet({msg:"The two passwords don't match."});
    btn.disabled = true;
    await DEMO.setPw(AUTH.email, a);
    const acc = DEMO.account(AUTH.email);
    return signIn({mode:"demo", uid:acc.uid, email:AUTH.email});
  }
}
function authClick(t){
  const k = t.dataset.auth;
  if (k === "demo") { const acc = DEMO.account(t.dataset.email); return signIn({mode:"demo", uid:acc.uid, email:acc.email}); }
  if (k === "account") return signIn({mode:"account"});
  if (k === "back") return authSet({step:"signin"});
  if (k === "resetdemo") { DEMO.reset(); return authSet({step:"signin", ok:true, msg:"Demo data reset to the starting sample."}); }
  if (k === "code" || k === "forgot" || k === "resend") {
    const inp = document.getElementById("au-email"), email = inp ? normEmail(inp.value) : AUTH.email;
    if (!email) return authSet({msg:"Enter your email first, then we'll send the code."});
    if (!DEMO.account(email)) return authSet({email, msg:"We couldn't find an account for this email. Ask your trainer to register you. In this preview, use a demo email such as learner@sepa.demo."});
    return authSet({step:"code", email, reset:k === "forgot" ? true : k === "resend" ? AUTH.reset : false, ok:k === "resend", msg:k === "resend" ? "We sent a new code." : ""});
  }
}
document.addEventListener("change", e => { if (e.target.dataset && e.target.dataset.authShow) app.querySelectorAll('.auth input[type=password], .auth input[data-pw]').forEach(i => { i.dataset.pw = 1; i.type = e.target.checked ? "text" : "password"; }); });
const DEMO = {list:() => [], account:() => null, checkPw:async () => false, setPw:async () => {}, reset(){}, db:null, assets:null, user:() => null, blob:() => ""};
const blobSrc = id => id ? "#blob:" + id : "";
function audioTag(id){
  const s = blobSrc(id);
  return s ? `<audio controls preload="none" src="${esc(s)}"></audio>` : `<p class="demoaudio">${id === "demo:sample" ? "Sample recording: there's no audio in the demo." : "Demo recordings play until the page reloads."}</p>`;
}
document.addEventListener("click", e => {
  const t = e.target.closest("button, [data-go]"); if (!t) return;
  if (progClick(t)) return;
  if (t.dataset.go) return go(t.dataset.go);
  if (t.dataset.nav) return go(t.dataset.nav);
  if (t.dataset.src && (t.dataset.say || t.dataset.talk)) { try { speechSynthesis.cancel(); } catch(e){} if (curAudio) curAudio.pause(); curAudio = new Audio(t.dataset.src); curAudio.play().catch(() => { if (t.dataset.say) speak(t.dataset.say, t.dataset.who); else { const [k, gi] = t.dataset.talk.split("|"); speak(QUIZ[k].groups[+gi].talk); } }); return; }
  if (t.dataset.say) return speak(t.dataset.say, t.dataset.who);
  if (t.dataset.talk) { const [k, gi] = t.dataset.talk.split("|"); return speak(QUIZ[k].groups[+gi].talk); }
  if (t.dataset.open) { const [id, gi] = t.dataset.open.split("|"); pendingOpen = gi === "" || gi == null ? null : +gi; return go(id); }
  if (t.dataset.filter) { const [tid, f] = t.dataset.filter.split("|"); FILTER[tid] = f; const y = scrollY; route(); scrollTo(0, y); return; }
  if (t.dataset.listen) { const [id, gi] = t.dataset.listen.split("|"); playPhrase(id, +gi); markListen(id, +gi); refreshEpisode(id, +gi); return; }
  if (t.dataset.said) {
    const [id, gi] = t.dataset.said.split("|"), on = toggleSaid(id, +gi);
    t.setAttribute("aria-pressed", on); t.innerHTML = on ? `${I.check} I said it` : "I said it"; refreshEpisode(id, +gi); return;
  }
  if (t.dataset.submitq) return submitQuiz(t.dataset.submitq);
  if (t.dataset.retry) { const k = t.dataset.retry; QSTATE[k] = {ans:{}}; rerenderQuiz(k); const s = document.getElementById("quiz-" + k); if (s) s.scrollIntoView(); return; }
  if (t.dataset.tts) return speak(R[t.dataset.tts].dlg.lines);
  if (t.dataset.twist) { const k = t.dataset.twist, l = (UT[k.split("_")[0]] || {}).twists || []; PR.tw[k] = (twistIdx(k) + 1) % l.length; persist(); const s = document.getElementById("tw-" + k); if (s) s.outerHTML = situationHTML(k); return; }
  if (t.dataset.savewrite) return saveWriting(t.dataset.savewrite, t);
  if (t.dataset.acct) return signOut();
  if (t.dataset.auth) return authClick(t);
  if (t.dataset.ngo) { if (t.dataset.nrv) { RVSEL = t.dataset.nrv; RVNAV = rvFiltered().map(rvId); } return go(t.dataset.ngo); }
  if (t.dataset.copy) return copyText(t.dataset.copy);
  if (t.dataset.cetab) { CE.tab = t.dataset.cetab; CE.msg = ""; const y = scrollY; route(); scrollTo(0, y); return; }
  if (t.dataset.ceqk) { CE.qk = t.dataset.ceqk; CE.msg = ""; const y = scrollY; route(); scrollTo(0, y); return; }
  if (t.dataset.ceadd) { ceCollectQuiz(); CE.qd.q.groups[+t.dataset.ceadd].qs.push({q:"", o:["", "", ""]}); ceRender(); return; }
  if (t.dataset.cerm) { ceCollectQuiz(); const [gi, qi] = t.dataset.cerm.split("|").map(Number); CE.qd.q.groups[gi].qs.splice(qi, 1); ceRender(); return; }
  if (t.dataset.cereset) return ceReset(t.dataset.cereset);
  if (t.id === "ceSave") return ceSave(t);
  if (t.dataset.drlisten) { const [id, gi] = t.dataset.drlisten.split("|"); return playPhrase(id, +gi); }
  if (t.dataset.drsaid) { const [d, i] = t.dataset.drsaid.split("|"), r = PR.dr[d], x = r.items[+i]; r.said = r.said || {}; r.said[i] = !r.said[i];
    if (r.said[i]) { const k = pkey(x.id, x.gi); PR.p[k] = Object.assign({}, PR.p[k], {l:1, s:1, d:today()}); } persist(); const y = scrollY; route(); scrollTo(0, y); return; }
  if (t.dataset.drdone) { const r = PR.dr[t.dataset.drdone]; r.done = today(); persist(); const y = scrollY; route(); scrollTo(0, y); return; }
  if (t.id === "trSave") return saveContact(t);
  if (t.dataset.assign) return assignMe();
  if (t.dataset.spmodel) return playAll(t.dataset.spmodel);
  if (t.dataset.spmine) { const a = document.getElementById("spa-" + t.dataset.spmine); if (a) { try { speechSynthesis.cancel(); } catch(e){} a.currentTime = 0; a.play(); } return; }
  if (t.dataset.spredo) { const [id, gi] = t.dataset.spredo.split("|"), dd = document.getElementById("g" + gi); if (dd) { dd.open = true; dd.scrollIntoView({block:"center"}); const b = dd.querySelector("[data-listen]"); if (b) b.focus({preventScroll:true}); } return; }
  if (t.dataset.spdone) { const id = t.dataset.spdone; PR.sp[id] = today(); persist(); const s = document.getElementById("spk-" + id); if (s) s.outerHTML = practiseHTML(id); return; }
  if (t.dataset.rbt) { RBT = t.dataset.rbt; const y = scrollY; route(); scrollTo(0, y); return; }
  if (t.dataset.rvf) { RVF = t.dataset.rvf; document.querySelectorAll("[data-rvf]").forEach(b => b.setAttribute("aria-pressed", b.dataset.rvf === RVF)); renderRvList(); return; }
  if (t.dataset.rvreset) { Object.assign(RVQ, {topic:"", skill:"", time:"", q:""}); const y = scrollY; route(); scrollTo(0, y); return; }
  if (t.dataset.rvopen) { RVSEL = t.dataset.rvopen; RVNAV = rvFiltered().map(rvId); return go("rvitem"); }
  if (t.dataset.rvnav) { if (!t.dataset.rvnav) return; RVSEL = t.dataset.rvnav; route(); return; }
  if (t.dataset.rvsave) return saveReview(t.dataset.rvsave, t);
  if (t.dataset.task) { const k = t.dataset.task; if (PR.t[k]) delete PR.t[k]; else PR.t[k] = today(); persist(); route(); return; }
  if (t.id === "goalBtn") { const p = document.getElementById("goalPick"); p.hidden = !p.hidden; t.setAttribute("aria-expanded", !p.hidden); return; }
  if (t.dataset.goal) { PR.goal = +t.dataset.goal; persist(); route(); return; }
  if (t.dataset.level) { level = t.dataset.level; save("pce-level-v", level); const y = scrollY; route(); scrollTo(0, y); return; }
  if (t.dataset.star) {
    const k = t.dataset.star, i = stars.findIndex(s => s.k === k);
    if (i >= 0) stars.splice(i, 1); else { const [rid, gi, ai] = k.split("|"); stars.push({k, rid, t: book(rid).groups[+gi][+ai]}); }
    save("pce-stars2", stars);
    if (current === "saved") { const y = scrollY; route(); scrollTo(0, y); return; }
    const on = isStar(k); t.setAttribute("aria-pressed", on); t.style.setProperty("--fo", on ? 1 : 0); t.setAttribute("aria-label", on ? "Remove from saved" : "Save phrase");
    return;
  }
  if (t.dataset.answers) { const box = t.closest(".exbody"), show = t.textContent === "Show answers"; box.querySelectorAll(".ans").forEach(a => a.hidden = !show); t.textContent = show ? "Hide answers" : "Show answers"; return; }
  if (t.id === "playDlg") { const l = NODES[current], r = R[l.id]; return speak(r.dlg ? r.dlg.lines : r.levels[level].lines.filter(x => x[0] !== "A")); }
});
document.addEventListener("change", e => {
  const el = e.target;
  if (el.classList && el.classList.contains("rbsel")) {
    const [pre, k] = el.dataset.rb.split(/\|(?=[A-Za-z]+$)/), dd = document.getElementById(`rbd-${pre}-${k}`);
    if (dd) dd.querySelectorAll("li").forEach(li => li.classList.toggle("on", li.dataset.v === el.value));
    if (pre.startsWith("rv-")) { const id = pre.slice(3), crit = id.endsWith("_write") ? WCRIT : CRIT, b = {}; crit.forEach(([q]) => { const v = pickVal(pre, q); if (v != null) b[q] = v; }); const t = document.getElementById("rbt-" + id); if (t) t.innerHTML = rbTotal(crit, b); }
  }
  if (el.dataset && el.dataset.upload) return handleRecording(el.dataset.upload, el.files && el.files[0], el);
  if (el.dataset && el.dataset.attach) return handleAttach(el.dataset.attach, el.files && el.files[0], el);
  if (el.type === "radio" && el.name && el.name.startsWith("q-")) { const k = el.name.split("-")[1], er = document.getElementById("qerr-" + k); if (er) er.textContent = ""; }
});
document.addEventListener("submit", e => { if (e.target.closest(".auth")) { e.preventDefault(); authSubmit(e.target); } });
document.addEventListener("input", e => { if (e.target.id && e.target.id.startsWith("tr-")) { PG.trDraft = PG.trDraft || Object.assign({}, PG.myContact || {}); PG.trDraft[e.target.id.slice(3)] = e.target.value; } });
document.addEventListener("change", e => { if (e.target.dataset && e.target.dataset.sprec) { const id = e.target.dataset.sprec, f = e.target.files && e.target.files[0]; if (f) { if (SPREC[id]) URL.revokeObjectURL(SPREC[id]); SPREC[id] = URL.createObjectURL(f); const s = document.getElementById("spk-" + id); if (s) s.outerHTML = practiseHTML(id); } e.target.value = ""; } });
document.addEventListener("change", e => { if (e.target.id === "ce-unit") { CE.uid = e.target.value; CE.qd = null; CE.lid = null; CE.msg = ""; route(); } else if (e.target.id === "ce-lesson") { CE.lid = e.target.value; CE.msg = ""; ceRender(); } });
document.addEventListener("change", e => { const k = e.target.dataset && e.target.dataset.rvq; if (k) { RVQ[k] = e.target.value; renderRvList(); } });
document.addEventListener("input", e => { if (e.target.id === "rvq") { RVQ.q = e.target.value; renderRvList(); return; } });
document.addEventListener("input", e => { const el = e.target; if (el.id && el.id.startsWith("wt-")) { const c = document.getElementById("wc-" + el.id.slice(3)); if (c) c.textContent = `${wc(el.value)} words`; } });
/* END app3.js */
/* ===== content.js ===== */
/* SEPA Course — content.js (loaded after app3.js, before bridge.js).
   1. Applies trainer edits (the "Current" column of the Content tabs in the SEPA Sheet) on top of the original course.
   2. The Course content editor for trainers: every part of the course, saved into the same Sheet cells. */

/* =================== applying edits =================== */
var SEPA_CROOT = { R: R, BOOK: BOOK, SEC: SEC, AP: AP, QUIZ: QUIZ, TOPICS: TOPICS, NODES: NODES, UT: UT, RUB: RUB, TSHORT: TSHORT, CRIT: CRIT, WCRIT: WCRIT, CPS: CPS };
var SEPA_APPLIED = {};   // key -> original value (to restore when an edit is removed)
window.__CONTENT_V = window.__CONTENT_V || null;

function sepaSlot(key) {
  var segs = key.split('/'), o = SEPA_CROOT[segs[0]];
  for (var i = 1; i < segs.length - 1; i++) {
    if (o == null) return null;
    var s = segs[i];
    o = Array.isArray(o) && !/^\d+$/.test(s) ? o.find(function (x) { return x && (x.id === s || x.k === s); }) : o[s];
  }
  if (o == null || typeof o !== 'object') return null;
  var last = segs[segs.length - 1];
  if (Array.isArray(o) && !/^\d+$/.test(last)) return null;
  return { o: o, p: last };
}
function sepaGet(key) {
  var m = /^(BANDS|TARGET)\/(topic\d+)$/.exec(key);
  if (m) return m[1] === 'BANDS' ? (SCALE[m[2]] || []).slice() : TARGET[m[2]];
  var sl = sepaSlot(key);
  if (!sl) return undefined;
  var v = sl.o[sl.p];
  return Array.isArray(v) ? v.slice() : v;
}
function sepaSet(key, v) {
  var m = /^(BANDS|TARGET)\/(topic\d+)$/.exec(key);
  if (m) {
    if (m[1] === 'BANDS') {
      if (Array.isArray(v)) { SCALE[m[2]] = v; return; }
      var r = /(\d)\s*[-–]\s*(\d)/.exec(String(v)), idx = [];
      if (r) LVBAND.forEach(function (b, i) { if (b >= +r[1] && b <= +r[2]) idx.push(i); });
      if (idx.length) SCALE[m[2]] = idx;
    } else {
      var t = typeof v === 'number' ? v : LVBAND.indexOf(+String(v).trim());
      if (t >= 0) TARGET[m[2]] = t;
    }
    return;
  }
  var sl = sepaSlot(key);
  if (!sl) return;
  var cur = sl.o[sl.p];
  sl.o[sl.p] = Array.isArray(cur) && typeof v === 'string' ? v.split('\n').map(function (x) { return x.trim(); }).filter(Boolean) : v;
  // a lesson name is shown from two places
  var ln = /^NODES\/([^/]+)\/title$/.exec(key);
  if (ln && R[ln[1]] && typeof v === 'string') R[ln[1]].title = v;
}
function sepaApplyContent(map) {
  map = map || {};
  // warm-ups added by trainers travel with the edits
  try { var w = map.WARM; WARM = Array.isArray(w) ? w : typeof w === 'string' && w ? JSON.parse(w) : []; } catch (e) { WARM = []; }
  window.SEPA_BOOTDATA = map.BOOT && typeof map.BOOT === 'object' ? map.BOOT : null;
  Object.keys(SEPA_APPLIED).forEach(function (k) {
    if (!(k in map)) { sepaSet(k, SEPA_APPLIED[k]); delete SEPA_APPLIED[k]; }
  });
  Object.keys(map).forEach(function (k) {
    if (k === 'WARM' || k === 'BOOT') return;
    if (!(k in SEPA_APPLIED)) { var o = sepaGet(k); if (o === undefined) return; SEPA_APPLIED[k] = o; }
    sepaSet(k, map[k]);
  });
  // the search list is built from lesson names and phrases
  try {
    INDEX.length = 0;
    LEAVES.forEach(function (l) {
      INDEX.push({ l: l, gi: null, text: l.title, low: l.title.toLowerCase() });
      book(l.id).groups.forEach(function (g, gi) { g.forEach(function (p) { INDEX.push({ l: l, gi: gi, text: p, low: String(p).toLowerCase() }); }); });
    });
  } catch (e) {}
}
// the old editor's way of applying edits is replaced by the Sheet
applyContent = function () {};
sepaApplyContent(window.__CONTENT || {});

/** Called when the server reports a new content version: fetch, apply, and refresh the page if nobody is typing. */
window.SEPA_refreshContent = async function () {
  try {
    var r = await SEPA.call('content', { have: window.__CONTENT_V });
    if (r.same) return;
    window.__CONTENT = r.map; window.__CONTENT_V = r.v;
    try { localStorage.setItem('sepa-content', JSON.stringify({ v: r.v, map: r.map })); } catch (e) {}
    sepaApplyContent(r.map);
    var a = document.activeElement, typing = a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName);
    if (!typing && current !== 'content') { var y = window.scrollY; route(); scrollTo(0, y); }
  } catch (e) {}
};

/* =================== Course content editor (trainers) =================== */
var CE2 = { tab: 'Lessons', uid: 'u1', q: '', cache: {}, dirty: {}, loading: false, err: '', msg: '', open: {} };
var CE_TABS = [
  ['Topics', 'Topic names and descriptions'],
  ['Units', 'Unit names, goals, tips and section headings'],
  ['Lessons', 'Lesson names, teaching tips, watch-outs and example dialogues'],
  ['Phrases', 'Phrases, other ways to say them, notes and recordings'],
  ['Quizzes', 'Listening and reading quizzes'],
  ['Tasks', 'Writing and speaking tasks'],
  ['Rubrics', 'Rubric descriptors, criteria, band ranges and targets'],
  ['Audio practice', 'Topic 1 audio practice exercises'],
  ['Warm-ups', 'Add listening and speaking warm-ups, with recordings, to any unit. They show at the top of the unit\'s Listening or Speaking task.']
];
var CE_NOUNIT = { Topics: 1, Rubrics: 1 };
function ceUnitsFor(tab) {
  var us = TOPICS.filter(function (t) { return !t.soon; }).flatMap(function (t) { return t.units; });
  if (tab === 'Warm-ups') return us;
  if (tab === 'Audio practice') us = us.filter(function (u) { return AP.some(function (a) { return a.unit === u.id && a.parts; }); });
  return us;
}
function ceKey() { return CE2.tab + '|' + (CE_NOUNIT[CE2.tab] ? '' : CE2.uid); }
function ceLoad() {
  var key = ceKey();
  if (CE2.cache[key] || CE2.loading) return;
  CE2.loading = true; CE2.err = '';
  SEPA.call('contentRows', { tab: CE2.tab, uid: CE_NOUNIT[CE2.tab] ? '' : CE2.uid }).then(function (r) {
    CE2.cache[key] = r.rows; CE2.loading = false; ceRender();
  }).catch(function (e) { CE2.loading = false; CE2.err = e.message || 'Could not load.'; ceRender(); });
}
function ceEff(r) { return r[4].trim() ? r[4] : r[3]; }   // r: [key, where, field, original, current, problem, type, topic]
function ceVal(r) { return CE2.dirty[r[0]] != null ? CE2.dirty[r[0]] : ceEff(r); }
function ceRowHTML(r) {
  var k = r[0], v = ceVal(r), changed = v !== r[3], long = r[6] === 'long' || r[6] === 'lines' || v.length > 90;
  var dirty = CE2.dirty[k] != null;
  return '<div class="cerow' + (changed ? ' changed' : '') + (dirty ? ' dirty' : '') + '" data-cerow="' + esc(k) + '">' +
    '<label class="cefield" for="ce_' + esc(k) + '">' + esc(r[2]) + (changed ? ' <span class="ctag on">Edited</span>' : '') + '</label>' +
    '<textarea id="ce_' + esc(k) + '" data-cek="' + esc(k) + '" rows="' + (long ? Math.min(8, Math.max(2, Math.ceil(v.length / 70) + (v.split('\n').length - 1))) : 1) + '"' + (r[6] === 'link' ? ' placeholder="Drive link (Share › Copy link). Empty = text-to-speech"' : '') + '>' + esc(v) + '</textarea>' +
    (changed ? '<p class="ceorig"><span>Original:</span> ' + esc(r[3] || '(empty)') + ' <button type="button" class="linkbtn" data-cereset="' + esc(k) + '">Use original</button></p>' : '') +
    (r[5] ? '<p class="ceprob" role="alert">' + esc(r[5]) + ' This edit isn\'t shown to participants until it\'s fixed.</p>' : '') +
    '</div>';
}
function ceBodyHTML() {
  if (CE2.tab === 'Warm-ups') return wuBodyHTML();
  if (CE2.err) return '<p class="authmsg" role="alert">' + esc(CE2.err) + '</p><button class="btn" data-ceretry="1">Try again</button>';
  var rows = CE2.cache[ceKey()];
  if (!rows) { ceLoad(); return '<p class="pgstatus">Loading…</p>'; }
  var q = CE2.q.trim().toLowerCase();
  if (q) rows = rows.filter(function (r) { return (r[1] + ' ' + r[2] + ' ' + r[3] + ' ' + r[4]).toLowerCase().indexOf(q) >= 0; });
  if (!rows.length) return '<div class="empty">' + (q ? 'Nothing matches “' + esc(CE2.q) + '”.' : 'Nothing to edit here.') + '</div>';
  var groups = [], by = {};
  rows.forEach(function (r) { var g = (CE_NOUNIT[CE2.tab] && r[7] ? r[7] + ' · ' : '') + r[1]; if (!by[g]) { by[g] = []; groups.push(g); } by[g].push(r); });
  var edited = rows.filter(function (r) { return ceVal(r) !== r[3]; }).length, probs = rows.filter(function (r) { return r[5]; }).length;
  return '<p class="sub">' + rows.length + ' items' + (edited ? ' · ' + edited + ' edited' : '') + (probs ? ' · <b style="color:var(--bad)">' + probs + ' with a problem</b>' : '') + '</p>' +
    groups.map(function (g, i) {
      var list = by[g], ed = list.filter(function (r) { return ceVal(r) !== r[3]; }).length, open = CE2.open[ceKey() + '|' + g] != null ? CE2.open[ceKey() + '|' + g] : (groups.length <= 3 || !!q || i === 0);
      return '<details class="essbox cegroup" data-ceg="' + esc(g) + '"' + (open ? ' open' : '') + '><summary>' + esc(g) + ' <small>· ' + list.length + (ed ? ' · ' + ed + ' edited' : '') + '</small></summary><div class="cerows">' + list.map(ceRowHTML).join('') + '</div></details>';
    }).join('');
}
function ceDirtyCount() { return Object.keys(CE2.dirty).length; }
function ceBarHTML() {
  var n = ceDirtyCount();
  return '<div class="cesave"><button class="btn primary" data-cesave="1"' + (n ? '' : ' aria-disabled="true"') + '>' + (n ? 'Save ' + n + ' change' + (n > 1 ? 's' : '') : 'Save changes') + '</button>' +
    (n ? '<button class="btn" data-cediscard="1">Discard</button>' : '') + '<span class="pgstatus" id="ceStatus" role="status">' + esc(CE2.msg) + '</span></div>';
}
contentPage = function () {
  if (!PG.trainer) return '<div class="empty">Course content can only be edited by SEPA trainers.</div>';
  var info = CE_TABS.find(function (t) { return t[0] === CE2.tab; }) || CE_TABS[0], us = ceUnitsFor(CE2.tab);
  if (!CE_NOUNIT[CE2.tab] && !us.some(function (u) { return u.id === CE2.uid; })) CE2.uid = us.length ? us[0].id : '';
  return '<div class="pagebar">' + backBtn('trainer', 'Trainer tools') + '<h1 class="title">Course content</h1><span></span></div>' +
    '<p class="sub">Edit any text participants see. Changes are saved for everyone and appear within a minute. “Use original” puts back the original text. You can also edit in bulk in the SEPA Course data Sheet: the tabs that start with <b>Content:</b>, column <b>Current</b>.</p>' +
    '<section class="card cebox">' +
      '<div class="cetabs" role="tablist">' + CE_TABS.map(function (t) { return '<button class="chip" role="tab" data-cetab="' + esc(t[0]) + '" aria-selected="' + (t[0] === CE2.tab) + '">' + esc(t[0]) + '</button>'; }).join('') + '</div>' +
      '<p class="hiddennote" style="font-style:normal;margin:0">' + esc(info[1]) + '</p>' +
      '<div class="fgrid">' +
        (CE_NOUNIT[CE2.tab] ? '' : '<label class="field"><span>Unit</span><select id="ce2-unit">' + TOPICS.filter(function (t) { return !t.soon; }).map(function (t) {
          var tu = us.filter(function (u) { return topicOf(u) === t; });
          return tu.length ? '<optgroup label="Topic ' + t.n + ': ' + esc(t.title) + '">' + tu.map(function (u) { return '<option value="' + u.id + '"' + (u.id === CE2.uid ? ' selected' : '') + '>' + esc(u.eyebrow + ': ' + u.title) + '</option>'; }).join('') + '</optgroup>' : '';
        }).join('') + '</select></label>') +
        (CE2.tab === 'Warm-ups' ? '' : '<label class="field"><span>Find</span><input id="ce2-q" type="search" placeholder="Search this list" value="' + esc(CE2.q) + '" autocomplete="off"></label>') +
      '</div>' +
      (CE2.tab === 'Warm-ups' ? '' : ceBarHTML()) +
      '<div id="ceBody">' + ceBodyHTML() + '</div>' +
      (CE2.tab === 'Warm-ups' ? '' : ceBarHTML()) +
    '</section>';
};
function ceRender() {
  var b = document.getElementById('ceBody');
  if (!b) return;
  b.innerHTML = ceBodyHTML();
  ceBars();
}
function ceBars() { document.querySelectorAll('.cebox .cesave').forEach(function (el) { el.outerHTML = ceBarHTML(); }); }
function ceFind(k) { var rows = CE2.cache[ceKey()] || []; return rows.find(function (r) { return r[0] === k; }); }
function ceLeave() { return !(ceDirtyCount() || wuDirty()) || confirm('You have unsaved changes. Leave without saving?'); }

document.addEventListener('input', function (e) {
  if (current !== 'content') return;
  var t = e.target;
  if (t.dataset && t.dataset.cek) {
    var r = ceFind(t.dataset.cek); if (!r) return;
    if (t.value === ceEff(r)) delete CE2.dirty[r[0]]; else CE2.dirty[r[0]] = t.value;
    var row = t.closest('.cerow'); if (row) row.classList.toggle('dirty', CE2.dirty[r[0]] != null);
    CE2.msg = ''; ceBars();
  } else if (t.id === 'ce2-q') { CE2.q = t.value; clearTimeout(CE2.qt); CE2.qt = setTimeout(ceRender, 200); }
});
document.addEventListener('change', function (e) {
  if (current !== 'content' || e.target.id !== 'ce2-unit') return;
  if (!ceLeave()) { e.target.value = CE2.uid; return; }
  CE2.dirty = {}; WU.edit = null; WU.dirty = false; CE2.uid = e.target.value; CE2.msg = ''; route();
});
document.addEventListener('toggle', function (e) {
  var d = e.target; if (!d.dataset || d.dataset.ceg == null) return;
  CE2.open[ceKey() + '|' + d.dataset.ceg] = d.open;
}, true);
document.addEventListener('click', async function (e) {
  if (current !== 'content') return;
  var t = e.target.closest('[data-cetab],[data-cereset],[data-cesave],[data-cediscard],[data-ceretry]');
  if (!t) return;
  e.preventDefault();
  if (t.dataset.cetab) { if (t.dataset.cetab === CE2.tab || !ceLeave()) return; CE2.dirty = {}; WU.edit = null; WU.dirty = false; CE2.tab = t.dataset.cetab; CE2.q = ''; CE2.msg = ''; return route(); }
  if (t.dataset.ceretry) { CE2.err = ''; WU.err = ''; return ceRender(); }
  if (t.dataset.cereset) {
    var r = ceFind(t.dataset.cereset); if (!r) return;
    if (r[4].trim()) CE2.dirty[r[0]] = r[3]; else delete CE2.dirty[r[0]];
    var row = t.closest('.cerow'); if (row) row.outerHTML = ceRowHTML(r);
    return ceBars();
  }
  if (t.dataset.cediscard) { CE2.dirty = {}; CE2.msg = ''; return ceRender(); }
  if (t.dataset.cesave) {
    var keys = Object.keys(CE2.dirty);
    if (!keys.length) { CE2.msg = 'Nothing to save yet. Edit a box first.'; return ceBars(); }
    var changes = keys.map(function (k) { var r = ceFind(k), v = CE2.dirty[k]; return { k: k, v: r && v.trim() === r[3].trim() ? '' : v }; });
    CE2.msg = 'Saving…'; ceBars();
    try {
      var res = await SEPA.call('contentSave', { changes: changes });
      var rows = CE2.cache[ceKey()] || [];
      changes.forEach(function (ch) {
        var r = rows.find(function (x) { return x[0] === ch.k; }); if (!r) return;
        r[4] = ch.v; r[5] = (res.problems || {})[ch.k] || '';
        if (!r[5]) delete CE2.dirty[ch.k];
      });
      Object.keys(CE2.cache).forEach(function (k) { if (k !== ceKey()) delete CE2.cache[k]; });
      window.__CONTENT = res.map; window.__CONTENT_V = res.v;
      try { localStorage.setItem('sepa-content', JSON.stringify({ v: res.v, map: res.map })); } catch (er) {}
      sepaApplyContent(res.map);
      var np = Object.keys(res.problems || {}).length;
      CE2.msg = np ? 'Saved, but ' + np + ' item' + (np > 1 ? 's have a problem' : ' has a problem') + ' (shown in red). Fix and save again.' : 'Saved. Everyone sees the change within a minute.';
      ceRender();
    } catch (err) { CE2.msg = err.message || "Couldn't save. Try again."; ceBars(); }
  }
});

/* =================== Warm-ups added by trainers =================== */
/* Rows of the "Content: Warm-ups" tab: {id, u, k, o, s, t, ins, a, qs, ans, show, prob, row} */
var WU = { rows: null, loading: false, err: '', edit: null, dirty: false, msg: '', busy: false };
var WU_TASK = { listen: 'Listening', speak: 'Speaking' };
function wuDirty() { return !!(WU.edit && WU.dirty); }
function wuLoad(force) {
  if ((WU.rows && !force) || WU.loading) return;
  WU.loading = true; WU.err = '';
  SEPA.call('warmRows', {}).then(function (r) { WU.rows = r.rows; WU.loading = false; ceRender(); })
    .catch(function (e) { WU.loading = false; WU.err = e.message || 'Could not load.'; ceRender(); });
}
function wuOrig(uid, k) { return ((TASK_EX[uid] || {})[k] || []).length; }
function wuFormHTML(w) {
  var isNew = !w.id;
  return '<form class="wuform" data-wuform="' + esc(w.id || 'new') + '">' +
    '<div class="fgrid">' +
      '<label class="field"><span>Task</span><select name="k">' + Object.keys(WU_TASK).map(function (k) { return '<option value="' + k + '"' + (w.k === k ? ' selected' : '') + '>' + WU_TASK[k] + '</option>'; }).join('') + '</select></label>' +
      '<label class="field"><span>Order</span><input name="o" type="number" min="1" step="1" value="' + esc(w.o || '') + '" placeholder="Last"></label>' +
    '</div>' +
    '<label class="field"><span>Title</span><input name="t" value="' + esc(w.t || '') + '" placeholder="For example: A teacher starts the lesson" required></label>' +
    '<label class="field"><span>Section heading <small>(optional, groups warm-ups under one heading)</small></span><input name="s" value="' + esc(w.s || '') + '" placeholder="More practice"></label>' +
    '<label class="field"><span>Instructions</span><textarea name="ins" rows="2" placeholder="For example: Listen and answer the questions.">' + esc(w.ins || '') + '</textarea></label>' +
    '<div class="field"><span>Recording</span>' +
      '<div class="wurec"><label class="btn"><input type="file" accept="audio/*,video/mp4" data-wufile="1" hidden>' + (w.a ? 'Replace recording' : 'Upload recording') + '</label>' +
      '<input name="a" value="' + esc(w.a || '') + '" placeholder="…or paste a Drive link (Share › Copy link)"></div>' +
      '<small class="hiddennote wustat" style="font-style:normal">Uploads go into Drive › SEPA Course › Course audio › Warm-ups. MP3 or M4A, up to 20 MB.</small>' +
      (w.a ? '<audio controls preload="none" src="' + esc(w.a) + '"></audio>' : '') +
    '</div>' +
    '<label class="field"><span>Questions or items <small>(one per line)</small></span><textarea name="qs" rows="4" placeholder="1 per line">' + esc((w.qs || []).join('\n')) + '</textarea></label>' +
    '<label class="field"><span>Answers <small>(optional, one per line, in the same order; shown with “Show answers”)</small></span><textarea name="ans" rows="3">' + esc((w.ans || []).join('\n')) + '</textarea></label>' +
    '<label class="wucheck"><input type="checkbox" name="show"' + (w.show === false ? '' : ' checked') + '> Show to participants</label>' +
    (w.prob ? '<p class="ceprob" role="alert">' + esc(w.prob) + ' Participants don\'t see this warm-up until it\'s fixed.</p>' : '') +
    '<div class="wubtns"><button class="btn primary" type="submit"' + (WU.busy ? ' aria-disabled="true"' : '') + '>' + (isNew ? 'Add warm-up' : 'Save') + '</button><button class="btn" type="button" data-wucancel="1">Cancel</button>' +
      (isNew ? '' : '<button class="btn danger" type="button" data-wudel="' + esc(w.id) + '">Delete</button>') +
      '<span class="pgstatus" role="status">' + esc(WU.msg) + '</span></div>' +
  '</form>';
}
function wuBodyHTML() {
  if (WU.err) return '<p class="authmsg" role="alert">' + esc(WU.err) + '</p><button class="btn" data-ceretry="1">Try again</button>';
  if (!WU.rows) { wuLoad(); return '<p class="pgstatus">Loading…</p>'; }
  var uid = CE2.uid, u = NODES[uid];
  if (!u) return '<div class="empty">Choose a unit.</div>';
  return Object.keys(WU_TASK).map(function (k) {
    var list = WU.rows.filter(function (w) { return w.u === uid && w.k === k; }).sort(function (a, b) { return (a.o || 999) - (b.o || 999) || a.row - b.row; });
    var orig = wuOrig(uid, k), adding = WU.edit && WU.edit.id === '' && WU.edit.k === k;
    return '<section class="wusec"><h3 class="blocktitle">' + WU_TASK[k] + ' task warm-ups</h3>' +
      (orig ? '<p class="hiddennote" style="font-style:normal;margin:0">This unit also has ' + orig + ' original warm-up' + (orig > 1 ? 's' : '') + ' (shown first). Edit them in <button class="linkbtn" data-cetab="Audio practice">Audio practice</button>.</p>' : '') +
      (list.length ? '' : (orig ? '' : '<p class="hiddennote" style="font-style:normal;margin:0">No warm-ups yet.</p>')) +
      list.map(function (w) {
        var editing = WU.edit && WU.edit.id === w.id;
        return '<div class="wuitem' + (w.prob ? ' bad' : '') + (w.show === false ? ' hid' : '') + '">' +
          (editing ? wuFormHTML(w) :
            '<div class="wuhead"><div><b>' + esc(w.t || '(no title)') + '</b><small>' + (w.s ? esc(w.s) + ' · ' : '') + ((w.qs || []).length) + ' question' + ((w.qs || []).length === 1 ? '' : 's') + (w.a ? ' · recording' : ' · <b style="color:var(--bad)">no recording</b>') + (w.show === false ? ' · hidden' : '') + '</small>' +
            (w.prob ? '<p class="ceprob" role="alert">' + esc(w.prob) + '</p>' : '') + '</div><button class="btn" data-wuedit="' + esc(w.id) + '">Edit</button></div>') +
        '</div>';
      }).join('') +
      (adding ? '<div class="wuitem">' + wuFormHTML(WU.edit) + '</div>' : '<button class="btn" data-wuadd="' + k + '">+ Add a ' + WU_TASK[k].toLowerCase() + ' warm-up</button>') +
    '</section>';
  }).join('') + '<p class="hiddennote" style="font-style:normal">You can also add warm-ups in bulk in the SEPA Course data Sheet, tab <b>Content: Warm-ups</b> (one row per warm-up).</p>';
}
function wuFormData(form) {
  var g = function (n) { return form.elements[n] ? form.elements[n].value : ''; };
  var lines = function (s) { return String(s).split('\n').map(function (x) { return x.trim(); }).filter(Boolean); };
  return { id: form.dataset.wuform === 'new' ? '' : form.dataset.wuform, u: CE2.uid, k: g('k'), o: g('o'), s: g('s').trim(), t: g('t').trim(), ins: g('ins').trim(), a: g('a').trim(), qs: lines(g('qs')), ans: lines(g('ans')), show: !!form.elements.show.checked };
}
function wuAfterSave(res) {
  WU.rows = res.rows;
  window.__CONTENT = res.map; window.__CONTENT_V = res.v;
  try { localStorage.setItem('sepa-content', JSON.stringify({ v: res.v, map: res.map })); } catch (er) {}
  sepaApplyContent(res.map);
}
function wuReadFile(file) {
  return new Promise(function (ok, bad) {
    var r = new FileReader();
    r.onload = function () { ok(String(r.result).split(',')[1] || ''); };
    r.onerror = function () { bad(new Error("Couldn't read this file.")); };
    r.readAsDataURL(file);
  });
}
document.addEventListener('click', async function (e) {
  if (current !== 'content') return;
  var t = e.target.closest('[data-wuadd],[data-wuedit],[data-wucancel],[data-wudel]');
  if (!t) return;
  e.preventDefault();
  if (WU.busy) return;
  if ((t.dataset.wuadd || t.dataset.wuedit) && wuDirty() && !confirm('You have unsaved changes. Leave without saving?')) return;
  WU.msg = '';
  if (t.dataset.wuadd) { WU.edit = { id: '', k: t.dataset.wuadd, show: true }; WU.dirty = false; return ceRender(); }
  if (t.dataset.wuedit) { WU.edit = WU.rows.find(function (w) { return w.id === t.dataset.wuedit; }) || null; WU.dirty = false; return ceRender(); }
  if (t.dataset.wucancel) { WU.edit = null; WU.dirty = false; return ceRender(); }
  if (t.dataset.wudel) {
    if (!confirm('Delete this warm-up? Participants will no longer see it.')) return;
    WU.busy = true; WU.msg = 'Deleting…'; ceRender();
    try { wuAfterSave(await SEPA.call('warmDelete', { id: t.dataset.wudel })); WU.edit = null; WU.dirty = false; WU.msg = ''; }
    catch (err) { WU.msg = err.message || "Couldn't delete. Try again."; }
    WU.busy = false; ceRender();
  }
});
document.addEventListener('submit', async function (e) {
  var form = e.target;
  if (current !== 'content' || !form.dataset || form.dataset.wuform == null) return;
  e.preventDefault();
  if (WU.busy) return;
  var d = wuFormData(form);
  if (!d.t) { WU.msg = 'Write a title first.'; return ceRender(); }
  WU.busy = true; WU.msg = 'Saving…'; WU.edit = Object.assign({}, WU.edit, d); ceRender();
  try {
    var res = await SEPA.call('warmSave', d);
    wuAfterSave(res);
    var saved = WU.rows.find(function (w) { return w.id === res.id; });
    if (saved && saved.prob) { WU.edit = saved; WU.msg = 'Saved, but there is a problem (shown in red). Fix it and save again.'; }
    else { WU.edit = null; WU.msg = ''; CE2.msg = ''; }
    WU.dirty = false;
  } catch (err) { WU.msg = err.message || "Couldn't save. Try again."; }
  WU.busy = false; ceRender();
});
document.addEventListener('input', function (e) { if (current === 'content' && e.target.closest && e.target.closest('.wuform')) WU.dirty = true; });
document.addEventListener('change', async function (e) {
  var inp = e.target;
  if (current !== 'content' || !inp.dataset || !inp.dataset.wufile || !inp.files || !inp.files[0]) return;
  var form = inp.closest('form'), file = inp.files[0], stat = form.querySelector('.wustat');
  if (file.size > 20 * 1024 * 1024) { stat.textContent = 'This file is over 20 MB. Choose a shorter recording.'; return; }
  WU.dirty = true; WU.busy = true; stat.textContent = 'Uploading ' + file.name + '…';
  try {
    var b64 = await wuReadFile(file);
    var r = await SEPA.call('warmAudio', { b64: b64, mime: file.type || 'audio/mpeg', name: file.name });
    form.elements.a.value = r.link;
    stat.textContent = 'Uploaded: ' + file.name + '. Press ' + (form.dataset.wuform === 'new' ? 'Add warm-up' : 'Save') + ' to keep it.';
  } catch (err) { stat.textContent = err.message || "Couldn't upload. Try again."; }
  WU.busy = false;
});

/* participants: "Mark warm-up done" on a task page */
document.addEventListener('click', function (e) {
  var t = e.target.closest('[data-wudone]');
  if (!t) return;
  e.preventDefault();
  var k = t.dataset.wudone;
  PR.wu = PR.wu || {};
  if (PR.wu[k]) delete PR.wu[k]; else PR.wu[k] = today();
  persist();
  var y = scrollY; route(); scrollTo(0, y);
});
/* END content.js */
/* ===== bridge.js ===== */
/* SEPA Course — Bridge (loaded after App1..3). Connects the app to Apps Script:
   - db / user / assets: the same calls the prototype used, now backed by the Sheet and Drive through api().
     Changes from other people arrive by polling: every 30 s for trainers, 60 s for participants, and on returning to the tab.
   - course audio and uploaded recordings are fetched through the server and played from memory.
   - adds: participant registration, English voice choice, progress saved in batches (every 8 s and when leaving the page). */

(function () {
  var S = window.SEPA;
  var clone = function (v) { return v == null ? v : JSON.parse(JSON.stringify(v)); };
  var same = function (a, b) { return JSON.stringify(a) === JSON.stringify(b); };

  /* =================== records (db) =================== */
  var DOCS = {};   // path -> {v, exists, data}
  var COLLS = {};  // coll -> {v, docs:{id:data}}
  var LIS = [];    // {path|coll, cb, on, got}
  var syncing = false, again = false, timer = null;

  function dsnap(path) {
    var c = DOCS[path];
    return { exists: !!(c && c.exists), id: path.split('/')[1], data: function () { return c && c.exists ? clone(c.data) : null; } };
  }
  function csnap(coll) {
    var c = COLLS[coll] || { docs: {} };
    return { docs: Object.keys(c.docs).map(function (id) { return { id: id, data: function () { return clone(c.docs[id]); } }; }) };
  }
  function ready(x) { return x.path ? !!DOCS[x.path] : !!COLLS[x.coll]; }
  function emit(x) {
    if (!x.on || !ready(x)) return;
    x.got = true;
    try { x.cb(x.path ? dsnap(x.path) : csnap(x.coll)); } catch (e) { setTimeout(function () { throw e; }); }
  }
  function emitFor(paths, colls) {
    LIS.slice().forEach(function (x) {
      if (!x.on) return;
      if ((x.path && paths[x.path]) || (x.coll && colls[x.coll]) || !x.got) setTimeout(function () { emit(x); }, 0);
    });
  }
  function listen(x) {
    x.on = true; LIS.push(x);
    if (ready(x)) setTimeout(function () { emit(x); }, 0);
    kick(20);
    return function () { x.on = false; var i = LIS.indexOf(x); if (i >= 0) LIS.splice(i, 1); };
  }

  /* local echo, so the page updates straight away */
  function localPut(path, data) {
    var parts = path.split('/'), coll = parts[0], id = parts[1], p = {}, c = {};
    if (data == null) { if (DOCS[path]) DOCS[path] = { v: DOCS[path].v, exists: false, data: null }; if (COLLS[coll]) delete COLLS[coll].docs[id]; }
    else { if (DOCS[path] || LIS.some(function (x) { return x.path === path; })) DOCS[path] = { v: DOCS[path] ? DOCS[path].v : -1, exists: true, data: clone(data) }; if (COLLS[coll]) COLLS[coll].docs[id] = clone(data); }
    p[path] = 1; c[coll] = 1; emitFor(p, c);
  }
  function stamp(path, v) { if (DOCS[path] && v > DOCS[path].v) DOCS[path].v = v; }

  async function sync() {
    if (syncing) { again = true; return; }
    var watch = [], seen = {};
    LIS.forEach(function (x) {
      if (!x.on) return;
      var k = x.path ? 'd:' + x.path : 'c:' + x.coll;
      if (seen[k]) return; seen[k] = 1;
      watch.push(x.path ? { t: 'd', p: x.path, v: DOCS[x.path] ? DOCS[x.path].v : -1 } : { t: 'c', p: x.coll, v: COLLS[x.coll] ? COLLS[x.coll].v : -1 });
    });
    if (!watch.length || !S.me) return;
    syncing = true;
    try {
      var r = await S.call('sync', { watch: watch }), paths = {}, colls = {};
      if (r.cv && r.cv !== window.__CONTENT_V && window.SEPA_refreshContent) window.SEPA_refreshContent();
      (r.res || []).forEach(function (res, i) {
        var w = watch[i];
        if (!res || res.err) return;
        if (w.t === 'd') {
          var old = DOCS[w.p];
          if (!old || old.exists !== res.exists || !same(old.data, res.data)) paths[w.p] = 1;
          DOCS[w.p] = { v: res.v, exists: res.exists, data: res.exists ? res.data : null };
        } else {
          var c = COLLS[w.p];
          if (!c) { c = COLLS[w.p] = { v: -1, docs: {} }; colls[w.p] = 1; }
          (res.docs || []).forEach(function (d) {
            if (!same(c.docs[d.id], d.data)) colls[w.p] = 1;
            c.docs[d.id] = d.data;
            var dp = w.p + '/' + d.id;
            if (DOCS[dp] && d.v > DOCS[dp].v) { if (!same(DOCS[dp].data, d.data)) paths[dp] = 1; DOCS[dp] = { v: d.v, exists: true, data: clone(d.data) }; }
          });
          (res.removed || []).forEach(function (id) { if (c.docs[id] !== undefined) { delete c.docs[id]; colls[w.p] = 1; } });
          c.v = Math.max(c.v, res.v);
        }
      });
      emitFor(paths, colls);
    } catch (e) {
      LIS.forEach(function (x) { if (x.on && !x.got && x.err) { try { x.err(e); } catch (er) {} } });
    } finally {
      syncing = false;
      if (again) { again = false; kick(50); } else kick();
    }
  }
  function kick(ms) {
    clearTimeout(timer);
    // Ask the server for changes when the app opens, comes back to the screen, goes back online, or after a save.
    // Between those: trainers on scoring pages every 2 minutes, everyone else every 10 minutes (was 30-60 s).
    var scoring = typeof current !== 'undefined' && /^(trainer|review|rvitem)$/.test(String(current || ''));
    var every = S.me && S.me.role === 'trainer' && scoring ? 120000 : 600000;
    timer = setTimeout(function () { if (document.visibilityState === 'hidden') return kick(); sync(); }, ms == null ? every : ms);
  }

  function docRef(path) {
    return {
      onSnapshot: function (cb, err) { return listen({ path: path, cb: cb, err: err }); },
      get: async function () { var r = await S.call('dbGet', { path: path }); DOCS[path] = { v: r.v, exists: r.exists, data: r.data }; return dsnap(path); },
      set: async function (v) { var data = clone(v); localPut(path, data); var r = await S.call('dbSet', { path: path, data: data }); stamp(path, r.v); },
      update: async function (v) { var r = await S.call('dbUpdate', { path: path, data: clone(v) }); localPut(path, r.data); stamp(path, r.v); },
      delete: async function () { localPut(path, null); var r = await S.call('dbDelete', { path: path }); stamp(path, r.v); }
    };
  }
  var DB = {
    doc: docRef,
    collection: function (coll) { return { onSnapshot: function (cb, err) { return listen({ coll: coll, cb: cb, err: err }); } }; }
  };

  /* =================== people =================== */
  var NAMES = {};
  var USER = {
    id: async function () { return S.me.uid; },
    canEdit: async function () { return S.me.role === 'trainer'; },
    isOwner: async function () { return false; },
    me: async function () { return { id: S.me.uid, name: S.me.name || '', email: S.me.email || null }; },
    name: async function () { return S.me.name || ''; },
    profiles: async function (ids) {
      var need = ids.filter(function (i) { return !NAMES[i]; });
      if (need.length) { var got = await S.call('profiles', { ids: need }); Object.keys(got).forEach(function (k) { if (got[k] && got[k].name) NAMES[k] = got[k]; }); }
      var out = {}; ids.forEach(function (i) { out[i] = NAMES[i] || { id: i, name: '' }; }); return out;
    },
    search: async function (q) { return S.call('search', { q: q }); }
  };

  /* =================== files =================== */
  function toB64(blob) {
    return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(String(r.result).split(',')[1] || ''); }; r.onerror = function () { rej({ code: 'read' }); }; r.readAsDataURL(blob); });
  }
  var ASSETS = {
    upload: async function (blob, opts) {
      if (blob.size > 20 * 1024 * 1024) throw { code: 'too_large' };
      var b64 = await toB64(blob);
      try {
        var r = await S.call('upload', { name: blob.name || 'recording', mime: (opts && opts.type) || blob.type || 'application/octet-stream', b64: b64 });
        return { id: r.id, url: '#blob:' + r.id };
      } catch (e) { throw { code: 'server', message: e.message }; }
    }
  };

  window.claude = { use: async function (n) { return n === 'db' ? DB : n === 'user' ? USER : n === 'assets' ? ASSETS : null; } };

  /* =================== audio and attachments through the server =================== */
  var URLS = {}, MISSING = {};
  var isFileRef = function (src) {
    src = String(src || '');
    if (!src || /^(blob:|data:)/.test(src)) return false;
    if (src.indexOf('#blob:') === 0) return true;
    if (/drive\.google\.com|docs\.google\.com/.test(src)) return true;
    if (/^https?:/i.test(src)) return false;
    return /\.(mp3|m4a|mp4|wav|ogg|oga|webm|aac)$/i.test(src);
  };
  var looksLocal = function (src) { src = String(src || ''); return !!src && !/^(https?:|blob:|data:)/i.test(src); };
  function b64Blob(b64, mime) { var bin = atob(b64), n = bin.length, u = new Uint8Array(n); for (var i = 0; i < n; i++) u[i] = bin.charCodeAt(i); return new Blob([u], { type: mime }); }
  // Website only: a recording is kept on the device after its first play (Cache Storage), so it plays offline.
  // Kept copies are checked again after 7 days, so a recording replaced in Drive comes through.
  var MEDIA_CACHE = 'sep-media-v1', MEDIA_DAYS = 7;
  function mediaKey(src) { return new Request(new URL('sep-media/' + encodeURIComponent(src), location.href).href); }
  function mediaGet(src, anyAge) {
    if (!S.web || !window.caches) return Promise.resolve(null);
    return caches.open(MEDIA_CACHE).then(function (c) { return c.match(mediaKey(src)); }).then(function (res) {
      if (!res) return null;
      var at = Number(res.headers.get('x-sep-at') || 0);
      if (!anyAge && navigator.onLine !== false && Date.now() - at > MEDIA_DAYS * 864e5) return null;
      return res.blob();
    }).catch(function () { return null; });
  }
  function mediaPut(src, blob) {
    if (!S.web || !window.caches) return;
    caches.open(MEDIA_CACHE).then(function (c) {
      return c.put(mediaKey(src), new Response(blob, { headers: { 'Content-Type': blob.type || 'application/octet-stream', 'x-sep-at': String(Date.now()) } }));
    }).catch(function () {});
  }
  function resolveSrc(src) {
    if (!isFileRef(src)) return Promise.reject(new Error('Not a recording: ' + src));
    if (MISSING[src] && Date.now() - MISSING[src] < 300000) return Promise.reject(new Error('Recording not available yet.'));
    if (!URLS[src]) URLS[src] = mediaGet(src).then(function (hit) {
      if (hit) return hit;
      return S.call('file', { ref: src }).then(function (r) { var b = b64Blob(r.b64, r.mime); mediaPut(src, b); return b; })
        .catch(function (e) { return mediaGet(src, true).then(function (old) { if (old) return old; throw e; }); });
    }).then(function (blob) { delete MISSING[src]; var u = URL.createObjectURL(blob); RESOLVED[src] = u; return u; })
      .catch(function (e) { delete URLS[src]; if (e && e.code !== 'network') MISSING[src] = Date.now(); throw e; });
    return URLS[src];
  }
  window.SEPA_resolveSrc = resolveSrc;

  // a short message at the bottom of the screen when sound fails, with the browser's reason
  var toastTimer = null;
  function soundNote(msg) {
    var el = document.getElementById('sepa-toast');
    if (!el) {
      el = document.createElement('div'); el.id = 'sepa-toast'; el.setAttribute('role', 'status');
      el.style.cssText = 'position:fixed;left:50%;bottom:92px;transform:translateX(-50%);z-index:60;max-width:min(92vw,480px);padding:10px 16px;border-radius:14px;background:var(--ink,#16210F);color:var(--bg,#fff);font-weight:700;font-size:14px;box-shadow:0 10px 30px -12px rgba(0,0,0,.5);text-align:center';
      document.body.appendChild(el);
    }
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.hidden = true; }, 6000);
  }
  window.SEPA_soundNote = soundNote;
  var RESOLVED = {};  // src -> playable URL, filled as soon as a recording has arrived

  // new Audio(src): play once the file has arrived (falls back to text-to-speech where the app already does)
  var NativeAudio = window.Audio;
  function SAudio(src) {
    var a = new NativeAudio();
    if (src != null && src !== '') {
      if (RESOLVED[src]) { a.src = RESOLVED[src]; }   // already fetched: plays within the tap
      else if (isFileRef(src)) {
        var ready = resolveSrc(src).then(function (u) { a.src = u; });
        var nplay = NativeAudio.prototype.play;
        a.play = function () {
          return ready.then(function () { return nplay.call(a); }).catch(function (e) {
            if (e && e.name === 'NotAllowedError') soundNote('Tap play again: the recording has just finished loading.');
            throw e;
          });
        };
      } else if (looksLocal(src)) {
        a.play = function () { return Promise.reject(new Error('No recording')); };  // e.g. "1.8": the app reads the line aloud instead
      } else a.src = src;
    }
    return a;
  }
  SAudio.prototype = NativeAudio.prototype;
  window.Audio = SAudio;

  // <audio src="audio/ap1/1_1.mp3"> or <audio src="#blob:..."> in the page: load when it scrolls into view
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); fill(e.target); } });
  }, { rootMargin: '200px' }) : null;
  document.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t.tagName === 'AUDIO' && t.dataset.ref && t.src) soundNote('This recording could not play (' + ((t.error && t.error.code) ? 'media error ' + t.error.code : 'unknown error') + ').');
  }, true);
  function fill(el) {
    var ref = el.dataset.ref;
    resolveSrc(ref).then(function (u) { el.src = u; }).catch(function () {
      if (el.dataset.failed) return; el.dataset.failed = 1;
      el.insertAdjacentHTML('afterend', '<p class="hiddennote" style="margin:4px 0 0;font-style:normal">This recording isn\'t available yet.</p>');
    });
  }
  function prefetch(src) { if (isFileRef(src) && !RESOLVED[src]) resolveSrc(src).catch(function () {}); }
  var bio = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { bio.unobserve(e.target); prefetch(e.target.dataset.src); } });
  }, { rootMargin: '300px' }) : null;
  function scan(node) {
    if (!node || node.nodeType !== 1) return;
    var btns = node.matches && node.matches('[data-src]') ? [node] : node.querySelectorAll ? node.querySelectorAll('[data-src]') : [];
    Array.prototype.forEach.call(btns, function (b) { if (isFileRef(b.dataset.src)) { if (bio) bio.observe(b); else prefetch(b.dataset.src); } });
    var list = node.tagName === 'AUDIO' || node.tagName === 'VIDEO' ? [node] : node.querySelectorAll ? node.querySelectorAll('audio[src],video[src]') : [];
    Array.prototype.forEach.call(list, function (el) {
      var src = el.getAttribute('src');
      if (!src || !(looksLocal(src) || isFileRef(src))) return;
      el.removeAttribute('src'); el.dataset.ref = src; el.preload = 'none';
      if (io) io.observe(el); else fill(el);
    });
  }
  new MutationObserver(function (ms) {
    ms.forEach(function (m) { Array.prototype.forEach.call(m.addedNodes, scan); });
    var id = decodeURIComponent(location.hash.slice(1));
    try { if (R[id] && R[id].audio) R[id].audio.forEach(function (x) { if (x) prefetch(x); }); } catch (e) {}
  })
    .observe(document.getElementById('app'), { childList: true, subtree: true });

  // links to uploaded photos/PDFs: <a href="#blob:ID">
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#blob:"]');
    if (!a) return;
    e.preventDefault(); e.stopPropagation();
    var w = window.open('', '_blank');
    var label = a.textContent; a.textContent = 'Opening…';
    resolveSrc(a.getAttribute('href')).then(function (u) {
      a.textContent = label;
      if (w) { w.location.href = u; return; }
      var d = document.createElement('a'); d.href = u; d.download = label || 'file'; document.body.appendChild(d); d.click(); d.remove();
    }).catch(function (err) { a.textContent = label; if (w) w.close(); alert(err.message || 'This file is no longer available.'); });
  }, true);

  window.SEPA_DB = DB;
  window.SEPA_SYNC = function () { kick(0); };
  window.SEPA_RESET = function () { DOCS = {}; COLLS = {}; NAMES = {}; MISSING = {}; Object.keys(URLS).forEach(function (k) { delete URLS[k]; }); };
})();

/* =================== changes to the app's own functions =================== */

// sign-in screens come from Core (real accounts, no demo)
showSignIn = function () { current = null; SEPA.showSignIn(); };
authSubmit = function (form) { return SEPA.authSubmit(form); };
authClick = function (t) { return SEPA.authClick(t); };
(function () {
  var appSignOut = signOut;
  signOut = async function () { await appSignOut(); await SEPA.afterSignOut(); };
})();

// uploads: any recording, photo or PDF up to 20 MB goes up as it is (no converting on the phone)
getAssets = async function () { return window.claude.use('assets'); };
toUploadable = async function (file) {
  if (file.size > 20 * 1024 * 1024) throw { code: 'too_large' };
  var t = (file.type || '').toLowerCase(), ext = ((file.name || '').split('.').pop() || '').toLowerCase();
  if (!t) t = { m4a: 'audio/mp4', mp3: 'audio/mpeg', wav: 'audio/wav', aac: 'audio/aac', ogg: 'audio/ogg', webm: 'audio/webm', mp4: 'video/mp4', '3gp': 'audio/3gpp', amr: 'audio/amr' }[ext] || 'application/octet-stream';
  return { blob: file, type: t };
};
(function () {
  var appUploadError = uploadError;
  uploadError = function (err) { return err && err.code === 'server' && err.message ? err.message : appUploadError(err); };
})();
audioTag = function (id) { return id ? '<audio controls preload="none" src="#blob:' + esc(id) + '"></audio>' : ''; };

// text-to-speech: an English voice, preferring voices installed on the device (online voices can fail silently).
var SEPA_VOICE = null;
function sepaPickVoice() {
  try {
    var vs = speechSynthesis.getVoices(), L = function (v) { return String(v.lang || '').replace('_', '-'); };
    var pick = function (re, local) { return vs.find(function (v) { return re.test(L(v)) && (local == null || !!v.localService === local); }); };
    SEPA_VOICE = pick(/^en-GB/i, true) || pick(/^en-US/i, true) || pick(/^en/i, true) || pick(/^en-GB/i) || pick(/^en-US/i) || pick(/^en/i) || null;
  } catch (e) { SEPA_VOICE = null; }
}
try { sepaPickVoice(); speechSynthesis.addEventListener('voiceschanged', sepaPickVoice); } catch (e) {}
var sepaSpeakJob = 0, sepaLastSpoke = 0;
speak = function (text, who) {
  if (!('speechSynthesis' in window)) { SEPA_soundNote('This browser cannot read text aloud. Try Chrome.'); return; }
  var ss = window.speechSynthesis, job = ++sepaSpeakJob;
  var items = (Array.isArray(text) ? text : [[who || 'T', text]]).map(function (p) { return [p[0], clean(String(p[1] || ''))]; }).filter(function (p) { return p[1]; });
  if (!items.length) return;
  var wasBusy = ss.speaking || ss.pending;
  try { ss.cancel(); } catch (e) {}
  if (!SEPA_VOICE) sepaPickVoice();
  function run(useVoice) {
    if (job !== sepaSpeakJob) return;
    var started = false;
    try { ss.resume(); } catch (e) {}
    items.forEach(function (p, i) {
      var u = new SpeechSynthesisUtterance(p[1]);
      if (useVoice && SEPA_VOICE) { u.voice = SEPA_VOICE; u.lang = String(SEPA_VOICE.lang).replace('_', '-'); } else u.lang = 'en-GB';
      u.rate = .92; u.pitch = p[0] === 'S' ? 1.25 : /^[PCL]$/.test(p[0]) ? .85 : 1;
      if (i === 0) {
        u.onstart = function () { started = true; };
        u.onerror = function (e) {
          if (started || job !== sepaSpeakJob || e.error === 'interrupted' || e.error === 'canceled') return;
          started = true;
          if (useVoice && SEPA_VOICE) run(false); else SEPA_soundNote('Read aloud did not work (' + e.error + '). Check the volume, or try Chrome.');
        };
      }
      ss.speak(u);
    });
    // nothing started: try once more with the browser's own English voice
    setTimeout(function () {
      if (started || job !== sepaSpeakJob || ss.speaking) return;
      if (useVoice && SEPA_VOICE) { try { ss.cancel(); } catch (e) {} setTimeout(function () { run(false); }, 80); }
      else SEPA_soundNote('Read aloud did not start. Check the volume, and that an English voice is installed on this device.');
    }, 1500);
  }
  // Chrome (especially on Android) drops speech queued straight after cancel() of earlier speech, so give cancel a moment.
  // (The app may already have cancelled before calling speak, so "recently spoke" counts as busy too.)
  var recent = Date.now() - sepaLastSpoke < 4000;
  sepaLastSpoke = Date.now();
  if (wasBusy || recent) setTimeout(function () { run(true); }, 150); else run(true);
};

// progress: saved every 8 seconds while practising, and straight away when the page is hidden
persist = function () {
  if (!PR.start) PR.start = today();
  save(prKey(), PR);
  prDirty = true;
  clearTimeout(prTimer);
  prTimer = setTimeout(flushPR, 8000);
};
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') { if (prDirty) flushNow(); }
  else if (SEPA.me) SEPA_SYNC();
});

// trainers: register a participant who isn't on the list yet (course admins can also add trainers)
(function () {
  var appTrainerList = trainerList;
  var isAdmin = function () { var me = window.SEPA && window.SEPA.me; return !!(me && me.admin); };
  trainerList = function () {
    var d = PG.regDraft || {}, tr = isAdmin() && d.role === 'trainer';
    return appTrainerList() + '<section class="sec" id="regsec"><details class="essbox"' + (PG.regOpen ? ' open' : '') + '><summary>' + (isAdmin() ? 'Not on the list? Register a new participant or trainer' : 'Not on the list? Register a new participant') + '</summary>' +
      '<form class="pgform" id="regform" style="margin-top:12px">' +
      (isAdmin() ? '<div class="field"><span>Register as</span><div class="regrole" role="radiogroup">' +
        '<label><input type="radio" name="reg-role" value="participant"' + (tr ? '' : ' checked') + '> Participant</label>' +
        '<label><input type="radio" name="reg-role" value="trainer"' + (tr ? ' checked' : '') + '> Trainer</label></div></div>' : '') +
      '<div class="fgrid">' +
      '<label class="field"><span>Full name</span><input id="reg-name" autocomplete="off" required value="' + esc(d.name || '') + '"></label>' +
      '<label class="field"><span>Email</span><input id="reg-email" type="email" autocomplete="off" required value="' + esc(d.email || '') + '"></label>' +
      (tr ? '' : '<label class="field"><span>Batch</span><input id="reg-batch" autocomplete="off" placeholder="For example: Batch 2" value="' + esc(d.batch || '') + '"></label>') + '</div>' +
      (tr ? '<p class="hiddennote" style="margin:0;font-style:normal;color:var(--ink)"><b>Trainers can see every participant, score their work and change course content.</b> If this email is already a participant, they become a trainer.</p>' : '') +
      '<div class="acts" style="align-items:center"><button class="btn primary" type="submit">' + (tr ? 'Register trainer' : 'Register and add') + '</button><span class="pgstatus" id="reg-st" role="status"></span></div>' +
      '<p class="hiddennote" style="margin:0;font-style:normal">They can sign in straight away: open the course link and choose "Email me a sign-in code".</p></form></details></section>';
  };
  document.addEventListener('input', function (e) {
    var id = e.target && e.target.id; if (!/^reg-(name|email|batch)$/.test(id || '')) return;
    PG.regDraft = PG.regDraft || {}; PG.regDraft[id.slice(4)] = e.target.value;
  });
  document.addEventListener('change', function (e) {
    if (!e.target || e.target.name !== 'reg-role') return;
    PG.regDraft = PG.regDraft || {}; PG.regDraft.role = e.target.value;
    var y = scrollY; renderProgress(); scrollTo(0, y);
  });
  document.addEventListener('toggle', function (e) { if (e.target.closest && e.target.closest('#regsec')) PG.regOpen = e.target.open; }, true);
  document.addEventListener('submit', async function (e) {
    if (!e.target || e.target.id !== 'regform') return;
    e.preventDefault();
    var st = document.getElementById('reg-st'), btn = e.target.querySelector('[type=submit]');
    var name = document.getElementById('reg-name').value, email = document.getElementById('reg-email').value, bEl = document.getElementById('reg-batch'), batch = bEl ? bEl.value : '';
    var rr = e.target.querySelector('[name=reg-role]:checked'), role = rr ? rr.value : 'participant';
    if (role === 'trainer' && !confirm('Make ' + (name || email) + ' a trainer? Trainers can see every participant and change course content.')) return;
    btn.disabled = true; st.textContent = 'Registering…';
    try {
      var r = await SEPA.call('register', { name: name, email: email, batch: batch, role: role });
      PG.names = PG.names || {}; PG.names[r.id] = r.name;
      PG.regOpen = false; PG.regDraft = null;
      if (role === 'trainer') {
        PG.msg = r.promoted ? r.name + ' is now a trainer. They see the trainer pages next time they open the app.' : r.existed ? r.name + ' is already a trainer.' : r.name + ' is registered as a trainer.';
        return renderProgress();
      }
      await addParticipant(r.id);
      PG.msg = r.existed ? r.name + ' was already registered, and is now on your list.' : r.name + ' is registered and on your list.';
      renderProgress();
    } catch (err) { st.textContent = err.message || "Couldn't register. Try again."; btn.disabled = false; }
  });
})();

/* =================== wide screens: sidebar menu and wider pages (tablet 768 px+, laptop 1100 px+) =================== */
(function () {
  var css = [
    '.tabbar .sblogo{display:none}',
    '@media (min-width:768px){',
    ' body:not(.signedout){--sbw:88px;padding-left:var(--sbw)}',
    ' body:not(.signedout) .tabbar{top:0;bottom:0;right:auto;width:var(--sbw);border-top:0;border-right:1px solid var(--line);padding:20px 10px 16px;overflow-y:auto}',
    ' body:not(.signedout) .tabbar nav{display:flex;flex-direction:column;gap:4px;max-width:none;margin:0}',
    ' body:not(.signedout) .tabbar button{flex-direction:column;justify-content:center;gap:4px;margin:0;padding:10px 4px;font-size:11px}',
    ' body:not(.signedout) .app{max-width:none;padding-left:32px;padding-right:32px;padding-bottom:48px}',
    ' body.pg-lesson .app > *, body.pg-task .app > *{width:100%;max-width:820px;margin-left:auto;margin-right:auto}',
    ' body.pg-me .app > *, body.pg-other .app > *{width:100%;max-width:960px;margin-left:auto;margin-right:auto}',
    '}',
    '@media (min-width:1100px){',
    ' body:not(.signedout){--sbw:232px}',
    ' body:not(.signedout) .tabbar{padding:24px 14px 16px}',
    ' body:not(.signedout) .tabbar button{flex-direction:row;justify-content:flex-start;gap:12px;font-size:15px;padding:12px 16px}',
    ' .tabbar .sblogo{display:block;height:30px;width:auto;margin:6px 0 30px 14px}',
    ' body:not(.signedout) .app{max-width:1180px;margin:0 auto;padding-left:48px;padding-right:48px}',
    ' body:not(.signedout) .app .top .logo{visibility:hidden}',
    '}',
    /* Home: two columns */
    '@media (min-width:900px){',
    ' .app.home2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:32px;row-gap:22px;align-items:start}',
    ' .app.home2 > *{grid-column:1 / -1}',
    ' .app.home2 > .h-lv, .app.home2 > .h-phr, .app.home2 > .h-daily{grid-column:1}',
    ' .app.home2 > .h-course{grid-column:2;align-self:stretch;display:flex;flex-direction:column;padding-bottom:var(--chtail,0px)}',
    ' .app.home2 > .h-course .tlist{flex:1;display:flex;flex-direction:column}',
    ' .app.home2 > .h-course .tcard{flex:1}',
    /* Topics and Unit pages: two-column lists */
    ' body.pg-topics .app .tlist{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;align-items:stretch}',
    ' body.pg-unit .app .rows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}',
    ' body.pg-tasks .app .tbody{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;align-items:start}',
    '}',
    /* Scoring: the submission and comment on the left, the rubric and score dropdowns on the right */
    '@media (min-width:1100px){',
    ' body.pg-rvitem .app article.rv{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);column-gap:24px;row-gap:14px;align-items:start}',
    ' body.pg-rvitem .app article.rv > *{grid-column:1}',
    ' body.pg-rvitem .app article.rv > .rvhead{grid-column:1 / -1}',
    ' body.pg-rvitem .app article.rv > .rubric{grid-column:2;grid-row:2 / span 20}',
    '}',
    /* Learn more */
    '.ustage.more{border-color:color-mix(in srgb,var(--green) 45%,var(--line))}',
    '.ustage.more .un{background:var(--green);color:#fff}',
    '.ustage.more .rowi .txt small .ctag{margin-left:6px}',
    '.ubadge.mast{background:#FCD535;color:#16210F}',
    'details.ustage.more > summary{list-style:none;cursor:pointer;align-items:center}',
    'details.ustage.more > summary::-webkit-details-marker{display:none}',
    'details.ustage.more > summary > div{flex:1;min-width:0}',
    '.lmchev{display:inline-flex;transition:transform .2s;transform:rotate(90deg);color:var(--muted)}',
    '.lmchev svg{width:20px;height:20px}',
    'details.ustage.more[open] .lmchev{transform:rotate(-90deg)}',
    'details.ustage.more[open] > summary{margin-bottom:12px}',
    'details.ustage.more > summary:focus-visible{outline:3px solid var(--green);outline-offset:4px;border-radius:10px}',
    /* Warm-ups */
    'details.essbox.warm{border-style:solid;border-color:color-mix(in srgb,var(--green) 45%,var(--line))}',
    'details.essbox.warm.wdone{border-style:dashed;border-color:var(--line)}',
    'details.essbox.warm > summary svg{width:16px;height:16px;vertical-align:-2px;color:var(--green)}',
    '.wubar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding-top:6px}',
    '.wusec{display:flex;flex-direction:column;gap:10px;margin:14px 0}',
    '.wusec > .btn{align-self:flex-start}',
    '.wuitem{border:1.5px solid var(--line);border-radius:14px;padding:12px 14px;background:var(--surface)}',
    '.wuitem.bad{border-color:var(--bad)}',
    '.wuitem.hid{opacity:.7}',
    '.wuhead{display:flex;gap:12px;align-items:flex-start;justify-content:space-between}',
    '.wuhead > div{display:flex;flex-direction:column;gap:2px;min-width:0}',
    '.wuhead small{color:var(--muted);font-weight:600}',
    '.wuform{display:flex;flex-direction:column;gap:12px}',
    '.wuform .field small{font-weight:600;color:var(--muted)}',
    '.wurec{display:flex;gap:8px;flex-wrap:wrap;align-items:center}',
    '.wurec input[name=a]{flex:1;min-width:200px}',
    '.wuform audio{width:100%;margin-top:6px}',
    '.regrole{display:flex;gap:18px;flex-wrap:wrap;padding:6px 0}',
    '.regrole label{display:flex;gap:6px;align-items:center;font-weight:700}',
    '.wubtns{display:flex;flex-wrap:wrap;gap:10px;align-items:center}',
    '.wucheck{display:flex;gap:8px;align-items:center;font-weight:700}',
    '.btn.danger{color:var(--bad);border-color:color-mix(in srgb,var(--bad) 50%,var(--line))}',
    '.lvmore{margin:-4px 0 0;font-weight:700;font-size:14px;color:var(--muted);display:flex;gap:6px;align-items:center}',
    '.lvmore b{color:var(--ink)}',
    '.nextstep .alt{margin-top:8px;font-size:14px}',
    /* Course content editor */
    '.cetabs{display:flex;flex-wrap:wrap;gap:8px}',
    '.cetabs .chip[aria-selected="true"]{background:var(--green);border-color:var(--green);color:#fff}',
    '.cegroup summary small{color:var(--muted);font-weight:700}',
    '.cerows{display:flex;flex-direction:column;gap:14px;padding:10px 0 6px}',
    '.cerow{display:flex;flex-direction:column;gap:5px;padding-left:12px;border-left:3px solid transparent}',
    '.cerow.changed{border-left-color:var(--green)}',
    '.cerow.dirty{border-left-color:#E0A800}',
    '.cefield{font-weight:800;font-size:13px;color:var(--muted)}',
    '.cerow textarea{width:100%;box-sizing:border-box;font:inherit;font-size:15px;line-height:1.5;padding:8px 12px;border-radius:12px;border:1.5px solid var(--line);background:var(--surface);color:var(--ink);resize:vertical}',
    '.cerow textarea:focus{border-color:var(--green);outline:none}',
    '.ceorig{margin:0;font-size:13px;color:var(--muted)}',
    '.ceorig span{font-weight:800}',
    '.ceprob{margin:0;font-size:13px;font-weight:700;color:var(--bad)}',
    '.cesave{display:flex;flex-wrap:wrap;gap:10px;align-items:center;position:sticky;bottom:96px;z-index:5;background:var(--surface);padding:8px 0}',
    '@media (min-width:768px){.cesave{bottom:0}}'
  ].join('\n');
  var st = document.createElement('style');
  st.id = 'sepa-wide';
  st.textContent = css;
  document.head.appendChild(st);

  // the Sparks logo at the top of the sidebar, and a tooltip on each menu item when only icons show
  var bar = document.querySelector('.tabbar');
  if (bar && !bar.querySelector('.sblogo')) {
    var img = document.createElement('img');
    img.className = 'sblogo'; img.src = SEPA_LOGO; img.alt = 'Sparks English';
    bar.insertBefore(img, bar.firstChild);
  }

  // which page is showing, as a class on <body>
  var PAGE_CLASSES = ['pg-home', 'pg-topics', 'pg-tasks', 'pg-me', 'pg-review', 'pg-rvitem', 'pg-trainer', 'pg-content', 'pg-unit', 'pg-task', 'pg-lesson', 'pg-other'];
  function pageKey() {
    var h = decodeURIComponent(location.hash.slice(1) || '');
    if (!h || h === 'home') return 'home';
    if (/^(topics|tasks|me|review|rvitem|trainer|content)$/.test(h)) return h;
    if (/^u\d+-(listen|read|write|speak)$/.test(h)) return 'task';
    if (/^u\d+$/.test(h)) return 'unit';
    try { if (R[h]) return 'lesson'; } catch (e) {}
    return 'other';
  }
  function tagHome() {
    var app = document.getElementById('app'), home = pageKey() === 'home' && !document.body.classList.contains('signedout');
    var kids = Array.prototype.slice.call(app.children);
    var lv = null, phr = null, daily = null, course = null;
    if (home) kids.forEach(function (k) {
      if (k.tagName !== 'SECTION') return;
      if (!lv && k.classList.contains('lvcard')) lv = k;
      else if (!daily && k.querySelector('.chrow')) daily = k;
      else if (!phr && k.querySelector('.linky2, .rowhead2')) phr = k;
      else if (!course && k.querySelector('.tlist .tcard')) course = k;
    });
    var on = !!(lv && phr && daily && course);
    app.classList.toggle('home2', on);
    kids.forEach(function (k) { k.classList.remove('h-lv', 'h-phr', 'h-daily', 'h-course'); k.style.gridRow = ''; });
    if (!on) return;
    lv.classList.add('h-lv'); phr.classList.add('h-phr'); daily.classList.add('h-daily'); course.classList.add('h-course');
    // explicit rows: everything above the level card on its own row, then level / phrases / daily on the left with Your course beside them
    var row = 1, start = 0;
    kids.forEach(function (k) {
      if (k === phr || k === daily || k === course) return;
      if (k === lv) { start = row; k.style.gridRow = String(row); row += 3; return; }
      k.style.gridRow = String(row++);
    });
    phr.style.gridRow = String(start + 1);
    daily.style.gridRow = String(start + 2);
    course.style.gridRow = start + ' / span 3';
    alignCourse();
  }
  // the bottom of the last topic card lines up with the bottom of the daily challenge card (not the dots and note under it)
  function alignCourse() {
    var row = document.querySelector('.app.home2 .h-daily .chrow'), sec = row && row.closest('section');
    if (!sec) return;
    var tail = Math.max(0, Math.round(sec.getBoundingClientRect().bottom - row.getBoundingClientRect().bottom));
    document.documentElement.style.setProperty('--chtail', tail + 'px');
  }
  function update() {
    var k = 'pg-' + pageKey();
    PAGE_CLASSES.forEach(function (c) { if (c !== k) document.body.classList.remove(c); });
    document.body.classList.add(k);
    if (bar) Array.prototype.forEach.call(bar.querySelectorAll('nav button'), function (b) { if (!b.title) b.title = b.textContent.trim(); });
    tagHome();
  }
  var queued = false;
  function soon() { if (queued) return; queued = true; requestAnimationFrame(function () { queued = false; update(); }); }
  window.addEventListener('hashchange', soon);
  window.addEventListener('resize', alignCourse);
  new MutationObserver(soon).observe(document.getElementById('app'), { childList: true });
  if ('ResizeObserver' in window) new ResizeObserver(alignCourse).observe(document.getElementById('app'));
  update();
})();

/* for checking the app from the browser console: SEPA_DEBUG("PR") shows this participant's progress */
window.SEPA_DEBUG = function (expr) { return eval(expr); };

/* =================== start =================== */
window.SEPA_START = function (fresh) {
  if (fresh) SEPA_RESET();
  SESSION = { mode: 'account', uid: SEPA.me.uid, email: SEPA.me.email };
  startApp(!!fresh);
};
/* =================== website: offline, install, help (version 2.0) =================== */
(function () {
  var S = window.SEPA;

  // back online: send saved practice and fetch changes
  function onOnline() { setOffline(false); if (S.me) { if (prDirty) flushNow(); SEPA_SYNC(); } }
  window.addEventListener('online', onOnline);
  window.addEventListener('offline', function () { setOffline(true); });
  function setOffline(on) {
    var el = document.getElementById('sepa-offline');
    if (!on) { if (el) el.remove(); S.offline = false; return; }
    if (el) return;
    el = document.createElement('p'); el.id = 'sepa-offline'; el.className = 'offbar'; el.setAttribute('role', 'status');
    el.textContent = 'You\'re offline. Your practice is saved on this device and sent when you\'re back online.';
    document.body.insertBefore(el, document.body.firstChild);
  }
  if (S.offline || navigator.onLine === false) setTimeout(function () { setOffline(true); }, 0);

  // install: the browser's own prompt when there is one, otherwise steps for this device
  var deferred = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; decorate(); });
  window.addEventListener('appinstalled', function () { deferred = null; decorate(); });
  function installed() { try { return matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; } catch (e) { return false; } }
  function canOfferInstall() { return S.web && !installed(); }
  function device() {
    var ua = navigator.userAgent || '';
    if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
    if (/Android/.test(ua)) return 'android';
    return 'desktop';
  }
  var STEPS = {
    ios: ['Open this page in <b>Safari</b>.', 'Tap the <b>Share</b> button (a square with an arrow).', 'Scroll down and tap <b>Add to Home Screen</b>, then <b>Add</b>.'],
    android: ['Open this page in <b>Chrome</b>.', 'Tap the <b>⋮</b> menu at the top right.', 'Tap <b>Install app</b> (or <b>Add to Home screen</b>), then <b>Install</b>.'],
    desktop: ['Open this page in <b>Chrome</b> or <b>Edge</b>.', 'Click the <b>install</b> icon at the right end of the address bar (a screen with a down arrow).', 'Click <b>Install</b>.']
  };
  async function install() {
    if (deferred) { deferred.prompt(); try { await deferred.userChoice; } catch (e) {} deferred = null; return decorate(); }
    location.hash = 'help';
    setTimeout(function () { var s = document.getElementById('installsteps'); if (s) { s.open = true; s.scrollIntoView({ block: 'center' }); } }, 50);
  }
  var IDL = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>';

  // Help page
  function ms(n) { return n == null ? '–' : Math.round(n) + ' ms'; }
  function statsHTML() {
    var st = S.stats || {}, keys = Object.keys(st).sort();
    if (!keys.length) return '<p class="lead" style="margin:0">No server calls yet on this visit.</p>';
    return '<div class="stattable" role="table"><div role="row" class="sh"><span>Call</span><span>Times</span><span>First</span><span>Average</span><span>Server part</span></div>' +
      keys.map(function (k) { var s = st[k]; return '<div role="row"><span>' + esc(k) + '</span><span>' + s.n + '</span><span>' + ms(s.first) + '</span><span>' + ms(s.total / s.n) + '</span><span>' + ms(s.server / s.n) + '</span></div>'; }).join('') + '</div>';
  }
  function helpPage() {
    var b = S.boot || {}, sup = b.support || '';
    var inst = !S.web ? '<p class="lead" style="margin:0">Open the new address of the course to install it on your phone or computer.</p>'
      : installed() ? '<p class="lead" style="margin:0">' + I.check + ' SEPA Course is installed on this device.</p>'
      : '<button class="btn primary" data-install="1">' + IDL + ' Install SEPA Course</button>' +
        '<details class="essbox" id="installsteps"><summary>Steps for this device</summary><ol class="steps">' + STEPS[device()].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol></details>';
    return '<div class="ph"><button class="iconbtn" data-go="me" aria-label="Back to Me">' + I.back + '</button></div>' +
      '<h1 class="title">Help</h1>' +
      '<section class="card"><h2>Install the app</h2><p class="lead" style="margin:0">Put SEPA Course on your home screen. It opens faster and works without internet for lessons you have already opened.</p>' + inst + '</section>' +
      '<section class="card"><h2>Signing in</h2><div class="prose"><p>Use the email your trainer registered for you. Forgot your password? On the sign-in page choose <b>Forgot password?</b> and we email you a 6-digit code (check your spam folder too).</p><p>Each device remembers your sign-in for ' + 30 + ' days. On a shared computer, use <b>Me › Log out</b> when you finish.</p></div></section>' +
      '<section class="card"><h2>Without internet</h2><div class="prose"><p>Once you have opened the course on this device, it opens without internet. Lessons and recordings you have already used work offline. Your practice is saved on the device and sent to your trainer when you are back online.</p></div></section>' +
      '<section class="card"><h2>Contact support</h2>' + (sup ? '<p class="lead" style="margin:0">Something not working? Tell us what you were doing and send a screenshot if you can.</p><a class="btn" href="' + esc(sup) + '" target="_blank" rel="noopener">Contact support</a>' : '<p class="lead" style="margin:0">Something not working? Ask your trainer.</p>') + '</section>' +
      '<details class="essbox"><summary>Connection details</summary><div style="padding-bottom:14px"><p class="lead">How long the server took on this visit. Useful when something feels slow.</p>' + statsHTML() +
      '<p class="hiddennote" style="font-style:normal;margin:8px 0 0">' + (S.web ? 'Website' : 'Old link') + ' · version ' + esc(b.version || '') + (S.offline ? ' · offline' : '') + '</p></div></details>';
  }
  var appRoute = route;
  route = function () {
    if ((location.hash.slice(1) || '') === 'help' && SESSION) {
      current = 'help';
      app.innerHTML = helpPage();
      document.querySelectorAll('[data-nav]').forEach(function (b) { if (b.dataset.nav === 'me') b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
      scrollTo(0, 0);
      return;
    }
    appRoute();
    decorate();
  };
  // Me page: a Help row; Home header: an install button until the app is installed
  var appMePage = mePage;
  mePage = function () {
    return appMePage() + '<div class="card"><button class="linkrow" data-go="help"><span>Help' + (canOfferInstall() ? ' and install the app' : '') + '</span>' + I.arrow + '</button></div>';
  };
  function decorate() {
    var top = document.querySelector('header.top');
    if (!top) return;
    var have = top.querySelector('[data-install]');
    if (canOfferInstall()) { if (!have) { var btn = document.createElement('button'); btn.className = 'iconbtn'; btn.dataset.install = '1'; btn.setAttribute('aria-label', 'Install the app'); btn.title = 'Install the app'; btn.innerHTML = IDL; top.insertBefore(btn, top.querySelector('[data-go="search"]')); } }
    else if (have) have.remove();
  }
  document.addEventListener('click', function (e) { var t = e.target.closest('[data-install]'); if (t) { e.preventDefault(); install(); } });
  window.SEPA_helpPage = helpPage;

  var css = document.createElement('style');
  css.textContent = [
    '.offbar{position:sticky;top:0;z-index:70;margin:0;padding:8px 16px;background:#FFF4D6;color:#5A4300;font-weight:700;font-size:14px;text-align:center;border-bottom:1px solid #F0D98A}',
    '.steps{margin:8px 0 14px;padding-left:22px;display:flex;flex-direction:column;gap:6px}',
    '.stattable{display:flex;flex-direction:column;font-size:13px;border:1px solid var(--line);border-radius:12px;overflow:hidden}',
    '.stattable>div{display:grid;grid-template-columns:1.4fr .7fr 1fr 1fr 1fr;gap:6px;padding:6px 10px;border-top:1px solid var(--line)}',
    '.stattable>div:first-child{border-top:0;font-weight:800;background:var(--surface)}',
    '[data-install] svg{display:block}'
  ].join('');
  document.head.appendChild(css);
})();
/* END bridge.js */
/* ===== bootcamp.js ===== */
/* =================== Bootcamp (version 2.1) ===================
 * The 3-day online Teacher Bootcamp before the self-paced course.
 * Content and schedule come from the Sheet ("Content: Bootcamp", "Content: Bootcamp schedule") via the content map (BOOT).
 * Participant answers: PR.bc[day] = {a:{itemId: answer}, at, late}  (progress record)
 * Trainer data:        bootcamp/<uid> = {att:{1:true,...}, unlocked:'yyyy-mm-dd', by}   reviews/<uid>.bc1..bc3
 * Pages: #bootcamp, #bc1..#bc3 (participants) · #bct (trainers: batch, schedule, content) · #bcr-<uid>-<day> (review)
 */
(function () {
  var S = window.SEPA;
  var BCX = { roster: null, rosterAt: 0, batch: '', tab: 'people', unlock: null, edit: null, editDay: 1, msg: '', busy: false, rows: null, sched: null, rec: null };
  var DAYS = [1, 2, 3];
  var norm = function (s) { return String(s == null ? '' : s).trim().toLowerCase().replace(/\s+/g, ' '); };
  var data = function () { return window.SEPA_BOOTDATA || null; };
  var isTrainer = function () { return !!(S.me && S.me.role === 'trainer'); };
  var REQ = { Quiz: 1, Written: 1, Video: 1, Voice: 1, Upload: 1 };
  var ICAL = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>';
  var IVID = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3z"/></svg>';
  var ILINK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>';

  /* ---------- time (schedule times are Jakarta time) ---------- */
  function jkt() { var d = new Date(Date.now() + 7 * 3600e3); return { date: d.toISOString().slice(0, 10), min: d.getUTCHours() * 60 + d.getUTCMinutes() }; }
  function toMin(t) { var m = /^(\d{2}):(\d{2})$/.exec(t || ''); return m ? +m[1] * 60 + +m[2] : null; }
  function dayLabel(date, long) {
    if (!date) return '';
    try { return new Date(date + 'T00:00:00Z').toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: long ? 'long' : 'short', timeZone: 'UTC' }); } catch (e) { return date; }
  }
  function timeLabel(s) { return s && (s.start || s.end) ? (s.start || '') + (s.end ? '–' + s.end : '') : ''; }

  /* ---------- who sees the bootcamp ---------- */
  function mySched() { var d = data(); if (!d || !S.me || isTrainer()) return null; return d.sched[norm(S.me.batch)] || null; }
  function cachedUnlock() { try { return localStorage.getItem('sepa-bcu-' + (S.me && S.me.uid)) === '1'; } catch (e) { return false; } }
  function unlocked() { if (PG.bc) return !!PG.bc.unlocked; return cachedUnlock(); }
  function applies() { return !!mySched(); }
  function locked() { return applies() && !unlocked(); }
  window.SEPA_bcLocked = locked;
  function dayInfo(d) { var bd = data(); return (bd && bd.days[d]) || { items: [] }; }
  function dayOpen(sch) { return !sch || !sch.date || jkt().date >= sch.date; }
  function hw(d) { PR.bc = PR.bc || {}; return PR.bc[d] || (PR.bc[d] = { a: {} }); }
  function myReview(d) { return (PG.myReviews || {})['bc' + d] || null; }
  function required(d) { return dayInfo(d).items.filter(function (x) { return REQ[x.kind]; }); }

  function itemDone(it, a) {
    var v = a[it.id];
    if (it.kind === 'Quiz') return v != null;
    if (it.kind === 'Written') return Array.isArray(v) && it.lines.every(function (_, i) { return String(v[i] || '').trim(); });
    if (it.kind === 'Video' || it.kind === 'Voice') return !!(v && v.ref);
    if (it.kind === 'Upload') return !!(v && (v.file || v.link));
    return true;
  }
  function quizItems(d) { return dayInfo(d).items.filter(function (x) { return x.kind === 'Quiz'; }); }
  function quizScore(d, a) { var q = quizItems(d); return { ok: q.filter(function (x) { return a[x.id] === 0; }).length, n: q.length }; }
  function resultLabel(rv) {
    if (!rv) return '';
    if (rv.res === 'meets') return 'Meets expectations';
    if (rv.res === 'revise') return 'Needs revision';
    return rv.total + ' / ' + rv.max;
  }
  // status of one day for a participant: {key, label}
  function dayStatus(d, h, rv, sch) {
    if (rv && rv.res === 'revise' && !(h.at && h.at > rv.atIso)) return { k: 'revise', label: 'Needs revision' };
    if (rv) return { k: 'done', label: resultLabel(rv) };
    if (h && h.at) return { k: 'in', label: 'Handed in' + (h.late ? ' · Late' : '') };
    if (!dayOpen(sch)) return { k: 'soon', label: 'Opens ' + dayLabel(sch.date) };
    return { k: 'todo', label: 'Homework to do' };
  }

  /* ---------- participant: overview ---------- */
  function overviewHTML() {
    var sch = mySched() || { days: {} }, lk = locked();
    var cards = DAYS.map(function (d) {
      var di = dayInfo(d), s = sch.days[d], h = (PR.bc || {})[d] || {}, st = dayStatus(d, h, myReview(d), s);
      return '<button class="card bcday-card st-' + st.k + '" data-go="bc' + d + '"><span class="bcnum">Day ' + d + '</span>' +
        '<b>' + esc(di.t || 'Day ' + d) + '</b>' +
        '<small>' + ICAL + ' ' + (s && s.date ? esc(dayLabel(s.date, true)) + (timeLabel(s) ? ' · ' + esc(timeLabel(s)) : '') : 'Date to be announced') + '</small>' +
        '<span class="bcst">' + esc(st.label) + '</span></button>';
    }).join('');
    return '<h1 class="title">Teacher Bootcamp</h1><p class="sub" style="text-align:center;margin-top:-6px">' + esc((sch.name || '') + ' · 3 online days') + '</p>' +
      (lk ? '<div class="card bclock">' + LOCK + '<div><b>The self-paced course opens after your bootcamp</b><p>Join the 3 live sessions and hand in each day\'s homework. Your trainer unlocks the course when the bootcamp ends.</p></div></div>' :
        '<div class="card bclock open">' + I.check + '<div><b>Your course is open</b><p>You can still look back at your bootcamp homework and feedback here.</p><button class="btn sm" data-go="home">Go to the course</button></div></div>') +
      '<div class="bcgrid">' + cards + '</div>';
  }

  /* ---------- participant: one day ---------- */
  function liveHTML(s) {
    if (!s || !s.date) return '<p class="lead" style="margin:0">The date and the live session link will appear here.</p>';
    var t = jkt(), st = toMin(s.start), en = toMin(s.end), when = '<p class="bcwhen">' + ICAL + '<span><b>' + esc(dayLabel(s.date, true)) + '</b>' + (timeLabel(s) ? '<br>' + esc(timeLabel(s)) + ' WIB' : '') + '</span></p>';
    var btn;
    if (!s.link) btn = '<p class="hiddennote" style="font-style:normal;margin:0">Your trainer will add the live session link.</p>';
    else if (t.date < s.date || (t.date === s.date && st != null && t.min < st - 15)) btn = '<button class="btn" disabled>' + IVID + ' Join opens ' + (t.date === s.date && st != null ? 'at ' + esc(('0' + Math.floor((st - 15) / 60)).slice(-2) + ':' + ('0' + ((st - 15) % 60)).slice(-2)) : 'on ' + esc(dayLabel(s.date))) + '</button>';
    else if (t.date > s.date || (en != null && t.min > en)) btn = '<p class="hiddennote" style="font-style:normal;margin:0">This live session has ended.</p>';
    else btn = '<a class="btn primary" href="' + esc(s.link) + '" target="_blank" rel="noopener">' + IVID + ' Join the live session</a>';
    return when + btn;
  }
  function textHTML(x) {
    var out = '', list = [];
    String(x || '').split('\n').forEach(function (line) {
      if (/^\s*-\s+/.test(line)) { list.push('<li>' + esc(line.replace(/^\s*-\s+/, '')) + '</li>'); return; }
      if (list.length) { out += '<ul class="bclist">' + list.join('') + '</ul>'; list = []; }
      if (line.trim()) out += '<p>' + esc(line) + '</p>';
    });
    if (list.length) out += '<ul class="bclist">' + list.join('') + '</ul>';
    return '<div class="prose">' + out + '</div>';
  }
  function copyLink(u) { var m = /docs\.google\.com\/(spreadsheets|document|presentation)\/d\/([-\w]{20,})/.exec(u || ''); return m ? 'https://docs.google.com/' + m[1] + '/d/' + m[2] + '/copy' : u; }
  function quizHTML(d, items, a, ro) {
    var res = BCX.quizShow && BCX.quizShow[d];
    var sc = quizScore(d, a), answered = items.every(function (x) { return a[x.id] != null; });
    var qs = items.map(function (it, qi) {
      var order = shuffleIdx(it.lines.length, (S.me.uid || '') + it.id), chosen = a[it.id];
      var show = answered && (res || ro);
      return '<fieldset class="bcq' + (show ? (chosen === 0 ? ' ok' : ' no') : '') + '"><legend><span>' + (qi + 1) + '</span>' + esc(it.t) + '</legend>' +
        order.map(function (oi) {
          return '<label class="bcopt' + (show && oi === 0 ? ' right' : '') + (show && chosen === oi && oi !== 0 ? ' wrong' : '') + '"><input type="radio" name="q-' + esc(it.id) + '" value="' + oi + '" data-bcq="' + d + '|' + esc(it.id) + '"' + (chosen === oi ? ' checked' : '') + (ro ? ' disabled' : '') + '> <span>' + esc(it.lines[oi]) + '</span></label>';
        }).join('') +
        (show && it.x ? '<p class="bcexp">' + (chosen === 0 ? I.check + ' ' : '') + esc(it.x) + '</p>' : '') + '</fieldset>';
    }).join('');
    var foot = ro ? '<p class="bcscore">Score: ' + sc.ok + ' / ' + sc.n + '</p>' :
      (answered && res ? '<div class="acts" style="align-items:center"><p class="bcscore">Your score: ' + sc.ok + ' / ' + sc.n + '</p><button class="btn sm" data-bcretry="' + d + '">Try again</button></div>' :
        '<div class="acts"><button class="btn primary" data-bccheck="' + d + '">Check my answers</button></div>');
    return '<section class="card bcitem" id="bci-quiz-' + d + '"><h3>Check your understanding</h3><p class="lead" style="margin:0">' + items.length + ' questions · you can try again</p>' + qs + foot + '</section>';
  }
  function mediaPlayer(kind, ref) {
    if (!ref) return '';
    return kind === 'Video' ? '<video controls playsinline preload="none" src="' + esc(ref) + '" class="bcvideo"></video>' : '<audio controls preload="none" src="' + esc(ref) + '"></audio>';
  }
  function itemHTML(d, it, a, ro) {
    var v = a[it.id], head = '<h3>' + esc(it.t) + (REQ[it.kind] ? '' : ' <small class="bcopt-tag">optional</small>') + '</h3>' + (it.x ? textHTML(it.x) : '');
    if (it.kind === 'Info') return '<section class="card bcitem bcinfo"><h3>' + esc(it.t) + '</h3>' + textHTML(it.x) + '</section>';
    if (it.kind === 'Written') {
      var rng = /^(\d+)\s*-\s*(\d+)$/.exec(it.set || ''), arr = Array.isArray(v) ? v : [];
      return '<section class="card bcitem" id="bci-' + esc(it.id) + '">' + head + it.lines.map(function (q, i) {
        var txt = arr[i] || '';
        return '<label class="field"><span>' + (it.lines.length > 1 ? (i + 1) + '. ' : '') + esc(q) + '</span>' +
          (ro ? '<p class="wtext">' + (esc(txt) || '<i>No answer</i>') + '</p>' : '<textarea rows="4" data-bcw="' + d + '|' + esc(it.id) + '|' + i + '">' + esc(txt) + '</textarea>') +
          '<small class="bcwc" data-bcwc="' + esc(it.id) + '|' + i + '">' + wc(txt) + ' words' + (rng ? ' · aim for ' + rng[1] + '–' + rng[2] : '') + '</small></label>';
      }).join('') + '</section>';
    }
    if (it.kind === 'Notes') return '<section class="card bcitem">' + head + (ro ? '<p class="wtext">' + esc(v || '') + '</p>' : '<textarea rows="5" data-bcn="' + d + '|' + esc(it.id) + '">' + esc(v || '') + '</textarea>') + '</section>';
    if (it.kind === 'Tick') return '<section class="card bcitem"><label class="bctick"><input type="checkbox" data-bct="' + d + '|' + esc(it.id) + '"' + (v ? ' checked' : '') + (ro ? ' disabled' : '') + '> <span>' + esc(it.t) + '</span></label></section>';
    if (it.kind === 'Video' || it.kind === 'Voice') {
      var max = +it.set > 0 ? +it.set : 3, isV = it.kind === 'Video', rec = BCX.rec && BCX.rec.id === it.id ? BCX.rec : null;
      var checks = it.lines.length ? '<ul class="bcchecks">' + it.lines.map(function (l, i) { return '<li><label><input type="checkbox" data-bcself="' + esc(it.id) + '|' + i + '"' + (((a._self || {})[it.id] || [])[i] ? ' checked' : '') + (ro ? ' disabled' : '') + '> ' + esc(l) + '</label></li>'; }).join('') + '</ul>' : '';
      var body;
      if (ro) body = v && v.ref ? mediaPlayer(it.kind, v.ref) : '<p class="lead">Not recorded.</p>';
      else if (rec && rec.state === 'live') body = '<div class="bcrec">' + (isV ? '<video class="bcvideo live" id="bcrec-live" autoplay muted playsinline></video>' : '<p class="bcrecdot">● Recording…</p>') + '<div class="acts" style="align-items:center"><button class="btn primary" data-bcstop="' + esc(it.id) + '">Stop</button><span class="bctimer" id="bcrec-timer">0:00 / ' + max + ':00</span></div></div>';
      else if (rec && rec.state === 'done') body = '<div class="bcrec">' + (isV ? '<video class="bcvideo" controls playsinline src="' + esc(rec.url) + '"></video>' : '<audio controls src="' + esc(rec.url) + '"></audio>') + '<div class="acts"><button class="btn primary" data-bcuse="' + d + '|' + esc(it.id) + '">Use this ' + (isV ? 'video' : 'recording') + '</button><button class="btn" data-bcredo="' + esc(it.id) + '">Record again</button></div></div>';
      else body = (v && v.ref ? '<p class="bcsaved">' + I.check + ' Your ' + (isV ? 'video' : 'recording') + ' is handed in with your homework.</p>' + mediaPlayer(it.kind, v.ref) : '') +
        '<div class="acts"><button class="btn primary" data-bcrec="' + d + '|' + esc(it.id) + '|' + it.kind + '|' + max + '">' + (isV ? IVID : MIC) + ' ' + (v && v.ref ? 'Record again' : 'Record ' + (isV ? 'a video' : 'my voice')) + '</button>' +
        '<label class="btn filebtn">Choose a file<input type="file" class="sr" accept="' + (isV ? 'video/*' : 'audio/*') + '" data-bcfile="' + d + '|' + esc(it.id) + '|' + it.kind + '"></label></div>' +
        '<small class="hiddennote" style="font-style:normal">Up to ' + max + ' minutes. Recording here keeps the file small. Files must be under 20 MB.</small>';
      return '<section class="card bcitem" id="bci-' + esc(it.id) + '">' + head + (checks ? '<p class="bcsub">Before you record, check you will cover:</p>' + checks : '') + body + '<p class="pgstatus" role="status" id="bcst-' + esc(it.id) + '"></p></section>';
    }
    if (it.kind === 'Upload') {
      var checks2 = it.lines.length ? '<p class="bcsub">Your plan includes:</p><ul class="bcchecks plain">' + it.lines.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul>' : '';
      var cur = v && v.file ? '<p class="bcsaved">' + I.check + ' <a href="#blob:' + esc(v.file) + '">' + esc(v.fname || 'Your file') + '</a></p>' : v && v.link ? '<p class="bcsaved">' + I.check + ' <a href="' + esc(v.link) + '" target="_blank" rel="noopener">Your link</a></p>' : '';
      if (ro) return '<section class="card bcitem">' + head + (cur || '<p class="lead">Nothing handed in.</p>') + '</section>';
      return '<section class="card bcitem" id="bci-' + esc(it.id) + '">' + head + checks2 +
        (it.link ? '<a class="btn" href="' + esc(copyLink(it.link)) + '" target="_blank" rel="noopener">' + ILINK + ' Make my copy of the template</a>' : '') + cur +
        '<div class="bcup"><label class="btn primary filebtn">Upload a file<input type="file" class="sr" accept=".xlsx,.xls,.ods,.docx,.doc,.odt,.pdf,.pptx,image/*" data-bcup="' + d + '|' + esc(it.id) + '"></label>' +
        '<span class="bcor">or</span><input type="url" placeholder="Paste the link to your copy" value="' + esc(v && v.link || '') + '" id="bcl-' + esc(it.id) + '"><button class="btn" data-bclink="' + d + '|' + esc(it.id) + '">Save link</button></div>' +
        '<small class="hiddennote" style="font-style:normal">A link must be shared as "Anyone with the link can view" so your trainer can open it.</small>' +
        '<p class="pgstatus" role="status" id="bcst-' + esc(it.id) + '"></p></section>';
    }
    return '';
  }
  function dayHTML(d) {
    var sch = mySched() || { days: {} }, s = sch.days[d], di = dayInfo(d), h = hw(d), a = h.a || (h.a = {}), rv = myReview(d);
    var open = dayOpen(s), st = dayStatus(d, h, rv, s);
    var ro = !!(rv && rv.res !== 'revise');
    var mats = di.items.filter(function (x) { return x.kind === 'Material'; });
    var side = '<section class="card bclive"><h3>Live session</h3>' + liveHTML(s) + '</section>' +
      (mats.length ? '<section class="card"><h3>Slides and materials</h3><div class="bcmats">' + mats.map(function (m) { return m.link ? '<a class="rowi" href="' + esc(m.link) + '" target="_blank" rel="noopener"><span class="txt"><b>' + esc(m.t) + '</b><small>Opens in a new tab</small></span>' + I.arrow + '</a>' : '<div class="rowi"><span class="txt"><b>' + esc(m.t) + '</b><small>Your trainer will add this soon</small></span></div>'; }).join('') + '</div></section>' : '');
    var top = '<div class="pagebar">' + backBtn('bootcamp', 'Bootcamp') + '<h1 class="title">Day ' + d + '</h1><span></span></div>' +
      '<section class="card bchero"><span class="bcnum">Day ' + d + '</span><h2>' + esc(di.t || 'Day ' + d) + '</h2>' + (di.x ? '<p>' + esc(di.x) + '</p>' : '') + '<span class="bcst st-' + st.k + '">' + esc(st.label) + '</span></section>';
    var main;
    if (!open) main = '<section class="card"><h3>Homework</h3><p class="lead" style="margin:0">Day ' + d + ' opens on ' + esc(dayLabel(s.date, true)) + '. The homework appears here after the live session starts that day.</p></section>';
    else {
      var items = di.items.filter(function (x) { return x.kind !== 'Material'; }), quiz = items.filter(function (x) { return x.kind === 'Quiz'; }), out = '', quizDone = false;
      var rvBox = rv ? '<section class="card bcreview ' + (rv.res === 'revise' ? 'revise' : '') + '"><h3>Feedback from your trainer</h3><p class="bcres">' + esc(resultLabel(rv)) + '</p>' +
        (rv.s ? '<ul class="bcscores">' + Object.keys(rv.s).map(function (k) { return '<li><span>' + esc(k) + '</span><b>' + rv.s[k] + ' / 4</b></li>'; }).join('') + '</ul>' : '') +
        (rv.c ? '<p class="wtext">' + esc(rv.c) + '</p>' : '') + (rv.res === 'revise' ? '<p class="lead" style="margin:0">Update your homework below, then hand it in again.</p>' : '') + '</section>' : '';
      items.forEach(function (it) {
        if (it.kind === 'Quiz') { if (!quizDone) { quizDone = true; out += quizHTML(d, quiz, a, ro); } return; }
        out += itemHTML(d, it, a, ro);
      });
      var due = s && s.date ? 'Hand in by 23:59 WIB, ' + dayLabel(s.date, true) + '.' : '';
      var foot = ro ? '' : '<section class="card bchand"><div><b>' + (h.at ? 'Handed in ' + esc(new Date(h.at).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })) + (h.late ? ' · Late' : '') : 'Ready to hand in?') + '</b><small>' + esc(due) + ' Your answers are saved on this device as you go.</small></div>' +
        '<button class="btn primary" data-bchand="' + d + '">' + (h.at ? 'Hand in again' : 'Hand in Day ' + d + ' homework') + '</button><p class="pgstatus" role="status" id="bchand-st"></p></section>';
      main = rvBox + '<h2 class="blocktitle">Homework</h2>' + (due ? '<p class="lead" style="margin:-4px 0 8px">' + esc(due) + '</p>' : '') + out + foot;
    }
    return top + '<div class="bcdaygrid"><div class="bcmain">' + main + '</div><aside class="bcside">' + side + '</aside></div>';
  }

  /* ---------- participant: actions ---------- */
  var saveT = null;
  function saveSoon() { clearTimeout(saveT); saveT = setTimeout(function () { persist(); }, 500); }
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.dataset && t.dataset.bcw) {
      var p = t.dataset.bcw.split('|'), a = hw(p[0]).a, arr = Array.isArray(a[p[1]]) ? a[p[1]] : (a[p[1]] = []);
      arr[+p[2]] = t.value; saveSoon();
      var c = document.querySelector('[data-bcwc="' + p[1] + '|' + p[2] + '"]'); if (c) c.textContent = c.textContent.replace(/^\d+ words/, wc(t.value) + ' words');
    } else if (t.dataset && t.dataset.bcn) { var q = t.dataset.bcn.split('|'); hw(q[0]).a[q[1]] = t.value; saveSoon(); }
  });
  document.addEventListener('change', function (e) {
    var t = e.target, ds = t.dataset || {};
    if (ds.bcq) { var p = ds.bcq.split('|'), a = hw(p[0]).a; a[p[1]] = +t.value; BCX.quizShow = BCX.quizShow || {}; BCX.quizShow[p[0]] = false; saveSoon(); }
    else if (ds.bct) { var q = ds.bct.split('|'); hw(q[0]).a[q[1]] = !!t.checked; saveSoon(); }
    else if (ds.bcself) { var r = ds.bcself.split('|'), d = current && /^bc(\d)$/.exec(current); if (!d) return; var a2 = hw(d[1]).a; a2._self = a2._self || {}; (a2._self[r[0]] = a2._self[r[0]] || [])[+r[1]] = !!t.checked; saveSoon(); }
    else if (ds.bcfile && t.files && t.files[0]) { var f = ds.bcfile.split('|'); uploadMedia(f[0], f[1], f[2], t.files[0], true); t.value = ''; }
    else if (ds.bcup && t.files && t.files[0]) { var u = ds.bcup.split('|'); uploadDoc(u[0], u[1], t.files[0]); t.value = ''; }
  });
  function rerender() { var y = scrollY; route(); scrollTo(0, y); }
  function status(id, msg) { var el = document.getElementById('bcst-' + id); if (el) el.textContent = msg; }
  async function uploadMedia(d, id, kind, file, convert) {
    var assets = await getAssets();
    if (!assets) { status(id, noUpload()); return; }
    try {
      status(id, 'Preparing…');
      var blob = file, type = file.type || (kind === 'Video' ? 'video/webm' : 'audio/webm');
      if (convert && kind === 'Voice') { var up = await toUploadable(file, function (p) { status(id, 'Converting on this device… ' + Math.round(p * 100) + '%'); }); blob = up.blob; type = up.type; }
      if (blob.size > 20 * 1024 * 1024) throw { code: 'too_large' };
      status(id, 'Uploading… (' + Math.max(1, Math.round(blob.size / 1048576)) + ' MB)');
      var r = await assets.upload(blob, { type: type });
      hw(d).a[id] = { ref: '#blob:' + r.id, at: new Date().toISOString() };
      persist(); await flushNow();
      BCX.rec = null; rerender(); status(id, 'Saved. Hand in your homework at the bottom of the page when everything is ready.');
    } catch (err) { status(id, err && err.code === 'too_large' ? 'This file is over 20 MB. Record in the app instead: it makes smaller files.' : uploadError(err)); }
  }
  async function uploadDoc(d, id, file) {
    if (file.size > 20 * 1024 * 1024) { status(id, 'This file is over 20 MB.'); return; }
    var assets = await getAssets();
    if (!assets) { status(id, noUpload()); return; }
    try {
      status(id, 'Uploading…');
      var r = await assets.upload(file, { type: file.type || 'application/octet-stream' });
      hw(d).a[id] = { file: r.id, fname: file.name || 'Lesson plan', at: new Date().toISOString() };
      persist(); await flushNow(); rerender(); status(id, 'Uploaded.');
    } catch (err) { status(id, uploadError(err)); }
  }
  /* in-app recording (the website can use the camera and microphone) */
  async function startRec(d, id, kind, max) {
    stopTracks();
    var isV = kind === 'Video';
    if (!navigator.mediaDevices || !window.MediaRecorder) { status(id, 'Recording isn\'t available in this browser. Use "Choose a file" instead.'); return; }
    var stream;
    try { stream = await navigator.mediaDevices.getUserMedia(isV ? { audio: true, video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' } } : { audio: true }); }
    catch (e) { status(id, 'Allow the ' + (isV ? 'camera and microphone' : 'microphone') + ' for this site in your browser, then try again. Or use "Choose a file".'); return; }
    var types = isV ? ['video/webm;codecs=vp8,opus', 'video/webm', 'video/mp4'] : ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'];
    var mime = types.find(function (m) { return MediaRecorder.isTypeSupported(m); }) || '';
    var rec;
    try { rec = new MediaRecorder(stream, Object.assign(mime ? { mimeType: mime } : {}, isV ? { videoBitsPerSecond: 500000, audioBitsPerSecond: 64000 } : { audioBitsPerSecond: 64000 })); }
    catch (e) { stream.getTracks().forEach(function (t) { t.stop(); }); status(id, 'Recording isn\'t available in this browser. Use "Choose a file" instead.'); return; }
    var chunks = [];
    rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
    BCX.rec = { id: id, d: d, kind: kind, state: 'live', stream: stream, recorder: rec, t0: Date.now(), max: max };
    rec.onstop = function () {
      var r = BCX.rec; if (!r || r.recorder !== rec) return;
      stopTracks();
      r.blob = new Blob(chunks, { type: (rec.mimeType || mime || (isV ? 'video/webm' : 'audio/webm')).split(';')[0] });
      r.url = URL.createObjectURL(r.blob); r.state = 'done'; clearInterval(r.timer); rerender();
    };
    rec.start(1000);
    rerender();
    var live = document.getElementById('bcrec-live'); if (live) { live.srcObject = stream; try { live.play(); } catch (e) {} }
    BCX.rec.timer = setInterval(function () {
      var r = BCX.rec; if (!r || r.state !== 'live') return;
      var s = Math.floor((Date.now() - r.t0) / 1000), el = document.getElementById('bcrec-timer');
      if (el) el.textContent = Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2) + ' / ' + r.max + ':00';
      if (s >= r.max * 60) try { r.recorder.stop(); } catch (e) {}
    }, 500);
  }
  function stopTracks() { var r = BCX.rec; if (r && r.stream) { r.stream.getTracks().forEach(function (t) { t.stop(); }); r.stream = null; } }
  function handIn(d) {
    var h = hw(d), a = h.a, miss = required(d).filter(function (it) { return !itemDone(it, a); });
    var st = document.getElementById('bchand-st');
    if (miss.length) {
      if (st) st.textContent = 'Still to do: ' + miss.map(function (x) { return x.kind === 'Quiz' ? 'the quiz' : x.t; }).filter(function (x, i, arr) { return arr.indexOf(x) === i; }).join(' · ');
      var first = miss[0], el = document.getElementById(first.kind === 'Quiz' ? 'bci-quiz-' + d : 'bci-' + first.id); if (el) el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }
    var s = (mySched() || { days: {} }).days[d];
    h.at = new Date().toISOString(); h.late = !!(s && s.date && jkt().date > s.date);
    persist(); flushNow().then(function () { rerender(); var s2 = document.getElementById('bchand-st'); if (s2) s2.textContent = 'Handed in. Your trainer can see it now.'; SEPA_SYNC(); });
  }

  /* ---------- trainers: batch page ---------- */
  async function loadRoster(force) {
    if (BCX.rosterLoading || (BCX.roster && !force && Date.now() - BCX.rosterAt < 60000)) return;
    BCX.rosterLoading = true;
    try { BCX.roster = await S.call('bootRoster', {}); }
    catch (e) { BCX.msg = e.message || 'Could not load the participants.'; if (!BCX.roster) BCX.roster = { people: [], batches: {} }; }
    BCX.rosterAt = Date.now(); BCX.rosterLoading = false;
    if (current === 'bct' || /^bcr-/.test(current || '')) rerender();
  }
  function batches() {
    var d = data(), out = {};
    if (d) Object.keys(d.sched).forEach(function (k) { out[k] = d.sched[k].name; });
    if (BCX.roster) Object.keys(BCX.roster.batches).forEach(function (k) { if (!out[k] && d && d.sched[k]) out[k] = BCX.roster.batches[k]; });
    return out;
  }
  function peopleOf(bk) { return (BCX.roster ? BCX.roster.people : []).filter(function (p) { return norm(p.batch) === bk; }).sort(function (a, b) { return a.name.localeCompare(b.name); }); }
  function rec(uid) { return (PG.bcAll || {})[uid] || {}; }
  function theirHw(uid, d) { var p = (PG.practice || {})[uid]; return (p && p.bc && p.bc[d]) || {}; }
  function theirRv(uid, d) { return ((PG.reviews || {})[uid] || {})['bc' + d] || null; }
  function cellStatus(uid, d) {
    var h = theirHw(uid, d), rv = theirRv(uid, d);
    if (rv && !(rv.res === 'revise' && h.at && h.at > rv.atIso)) return { k: rv.res === 'revise' ? 'revise' : 'done', label: resultLabel(rv) };
    if (h.at) return { k: 'new', label: (rv ? 'Handed in again' : 'To review') + (h.late ? ' · Late' : '') };
    return { k: 'none', label: 'Not handed in' };
  }
  function trainerHTML() {
    if (!isTrainer()) return '<div class="empty">This page is for trainers.</div>';
    loadRoster(false);
    var bs = batches(), keys = Object.keys(bs);
    if (!BCX.batch || !bs[BCX.batch]) BCX.batch = keys[0] || '';
    var tabs = [['people', 'Participants'], ['schedule', 'Schedule'], ['content', 'Content']];
    var h = '<div class="pagebar">' + backBtn('review', 'Review') + '<h1 class="title">Bootcamp</h1><span></span></div>' +
      '<div class="cetabs" role="tablist">' + tabs.map(function (t) { return '<button role="tab" class="chip' + (BCX.tab === t[0] ? ' on' : '') + '" aria-selected="' + (BCX.tab === t[0]) + '" data-bctab="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div>';
    if (BCX.tab !== 'content') h += '<div class="bcbar"><label class="field"><span>Batch</span><select id="bc-batch">' + (keys.length ? keys.map(function (k) { return '<option value="' + esc(k) + '"' + (k === BCX.batch ? ' selected' : '') + '>' + esc(bs[k]) + '</option>'; }).join('') : '<option value="">No batches yet</option>') + '</select></label>' +
      (BCX.tab === 'schedule' ? '<label class="field"><span>Or add a new batch</span><span class="bcrow"><input id="bc-newbatch" placeholder="For example: Batch 07"><button class="btn" data-bcnewbatch="1">Add</button></span></label>' : '') + '</div>';
    if (BCX.msg) h += '<p class="pgstatus" role="status">' + esc(BCX.msg) + '</p>';
    if (BCX.tab === 'people') h += peopleHTML();
    else if (BCX.tab === 'schedule') h += schedHTML();
    else h += contentHTML();
    return h;
  }
  function peopleHTML() {
    if (!BCX.roster) return '<p class="pgstatus">Loading participants…</p>';
    if (!BCX.batch) return '<div class="empty">No bootcamp batches yet. Add one in the Schedule tab.</div>';
    var ps = peopleOf(BCX.batch);
    if (!ps.length) return '<div class="empty">No participants in this batch yet. Register them with this batch name in Trainer tools (or the Users tab).</div>';
    var rows = ps.map(function (p) {
      var r = rec(p.uid), att = r.att || {};
      return '<tr><th scope="row"><b>' + esc(p.name) + '</b><small>' + esc(p.email) + '</small></th>' + DAYS.map(function (d) {
        var cs = cellStatus(p.uid, d);
        return '<td><label class="bcatt"><input type="checkbox" data-bcatt="' + esc(p.uid) + '|' + d + '"' + (att[d] ? ' checked' : '') + '> Attended</label>' +
          (cs.k === 'none' ? '<span class="bccell none">' + esc(cs.label) + '</span>' : '<button class="bccell ' + cs.k + '" data-go="bcr-' + esc(p.uid) + '-' + d + '">' + esc(cs.label) + '</button>') + '</td>';
      }).join('') + '<td>' + (r.unlocked ? '<span class="bccell done">Open</span><button class="linkbtn" data-bclock="' + esc(p.uid) + '">Lock</button>' : '<span class="bccell none">Locked</span>') + '</td></tr>';
    }).join('');
    var un = BCX.unlock && BCX.unlock.batch === BCX.batch ? unlockHTML(ps) : '<div class="acts"><button class="btn primary" data-bcunlock="1">Unlock the course for this batch</button></div>';
    return '<div class="bctablewrap"><table class="bctable"><thead><tr><th scope="col">Participant</th>' + DAYS.map(function (d) { return '<th scope="col">Day ' + d + '</th>'; }).join('') + '<th scope="col">Course</th></tr></thead><tbody>' + rows + '</tbody></table></div>' + un;
  }
  function missed(uid) { var att = rec(uid).att || {}; return DAYS.filter(function (d) { return !att[d]; }); }
  function unlockHTML(ps) {
    return '<section class="card bcunlock"><h3>Unlock the course</h3><p class="lead" style="margin:0">Participants who attended all 3 days are ticked. Anyone who missed a day is not ticked; tick them to unlock anyway.</p>' +
      ps.map(function (p) {
        var m = missed(p.uid), on = BCX.unlock.sel[p.uid];
        return '<label class="bcurow' + (m.length ? ' warn' : '') + '"><input type="checkbox" data-bcusel="' + esc(p.uid) + '"' + (on ? ' checked' : '') + (rec(p.uid).unlocked ? ' disabled' : '') + '> <span><b>' + esc(p.name) + '</b>' +
          (rec(p.uid).unlocked ? '<small>Already open</small>' : m.length ? '<small class="bcwarn">⚠ Missed Day ' + m.join(', Day ') + '</small>' : '<small>Attended all 3 days</small>') + '</span></label>';
      }).join('') +
      '<div class="acts" style="align-items:center"><button class="btn primary" data-bcunlockgo="1">Unlock for ' + Object.keys(BCX.unlock.sel).filter(function (k) { return BCX.unlock.sel[k] && !rec(k).unlocked; }).length + ' participant(s)</button><button class="btn" data-bcunlockcancel="1">Cancel</button><span class="pgstatus" role="status" id="bcu-st"></span></div></section>';
  }
  async function writeRec(uid, patch) {
    var cur = Object.assign({}, rec(uid), patch, { by: PG.me });
    PG.bcAll = PG.bcAll || {}; PG.bcAll[uid] = cur;
    await PG.db.doc('bootcamp/' + uid).set(cur);
  }
  function schedHTML() {
    var d = data(), s = d && BCX.batch && d.sched[BCX.batch];
    if (!BCX.batch) return '<div class="empty">Add a batch above to set its dates.</div>';
    var days = (s && s.days) || {};
    return '<section class="card"><h3>' + esc(s ? s.name : BCX.batch) + ': dates and live links</h3><p class="lead" style="margin:0">Times are Jakarta time (WIB). Each day opens on its date; homework is due at 23:59.</p>' +
      DAYS.map(function (n) {
        var x = days[n] || {};
        return '<fieldset class="bcsched"><legend>Day ' + n + ' · ' + esc(dayInfo(n).t || '') + '</legend><div class="bcschedgrid">' +
          '<label class="field"><span>Date</span><input type="date" id="bcs-date-' + n + '" value="' + esc(x.date || '') + '"></label>' +
          '<label class="field"><span>Start</span><input type="time" id="bcs-start-' + n + '" value="' + esc(x.start || '') + '"></label>' +
          '<label class="field"><span>End</span><input type="time" id="bcs-end-' + n + '" value="' + esc(x.end || '') + '"></label>' +
          '<label class="field bcwide"><span>Live session link (Zoom or Meet)</span><input type="url" id="bcs-link-' + n + '" value="' + esc(x.link || '') + '" placeholder="https://"></label></div></fieldset>';
      }).join('') +
      '<div class="acts" style="align-items:center"><button class="btn primary" data-bcsavesched="1">Save schedule</button><span class="pgstatus" role="status" id="bcs-st"></span></div>' +
      '<p class="hiddennote" style="font-style:normal">You can also edit this in the SEPA Course data Sheet, tab <b>Content: Bootcamp schedule</b>.</p></section>';
  }
  function applyMap(res) {
    window.__CONTENT = res.map; window.__CONTENT_V = res.v;
    try { localStorage.setItem('sepa-content', JSON.stringify({ v: res.v, map: res.map })); } catch (e) {}
    sepaApplyContent(res.map);
    if (res.rows) BCX.rows = res.rows;
  }
  /* trainers: edit bootcamp content */
  var KINDS = ['Material', 'Info', 'Quiz', 'Written', 'Notes', 'Video', 'Voice', 'Upload', 'Tick', 'Day'];
  var KHELP = { Day: 'The day\'s name (Title) and intro (Text). Setting: meets or 1-4; Lines: scoring criteria for 1-4.', Material: 'A link to slides or a handout.', Info: 'A card of text. Lines starting with "- " become bullets.', Quiz: 'Title = the question. Lines = options, the FIRST is correct (the app shuffles them). Text = explanation shown after checking.', Written: 'Lines = questions (one answer box each). Setting = words per answer, e.g. 40-120.', Notes: 'An optional box, not marked.', Video: 'Lines = self-check before recording. Setting = longest minutes (1–5).', Voice: 'Like Video, sound only.', Upload: 'Lines = checklist. Link = template (participants get "Make my copy").', Tick: 'A sentence to tick (optional).' };
  function contentHTML() {
    if (!BCX.rows) { if (!BCX.loadingRows) { BCX.loadingRows = true; S.call('bootRows', {}).then(function (r) { BCX.rows = r.rows; BCX.loadingRows = false; if (current === 'bct') rerender(); }, function (e) { BCX.loadingRows = false; BCX.msg = e.message; if (current === 'bct') rerender(); }); } return '<p class="pgstatus">Loading…</p>'; }
    var d = BCX.editDay, list = BCX.rows.filter(function (r) { return r.day === d; }).sort(function (a, b) { return a.o - b.o || a.row - b.row; });
    var ed = BCX.edit;
    return '<div class="cetabs">' + DAYS.map(function (n) { return '<button class="chip' + (n === d ? ' on' : '') + '" data-bceday="' + n + '">Day ' + n + '</button>'; }).join('') + '</div>' +
      list.map(function (r) {
        if (ed && ed.id === r.id) return editForm(r);
        return '<div class="wuitem' + (r.prob ? ' bad' : '') + (r.show ? '' : ' hid') + '"><div class="wuhead"><div><b>' + esc(r.kind) + ' · ' + esc(r.t || '(no title)') + '</b><small>' + (r.kind === 'Quiz' ? r.lines.length + ' options' : r.lines.length ? r.lines.length + ' lines' : '') + (r.show ? '' : ' · hidden') + '</small>' + (r.prob ? '<p class="ceprob">' + esc(r.prob) + '</p>' : '') + '</div><button class="btn sm" data-bcedit="' + esc(r.id) + '">Edit</button></div></div>';
      }).join('') +
      (ed && !ed.id ? editForm(ed) : '<div class="acts"><button class="btn" data-bcadd="1">+ Add an item to Day ' + d + '</button></div>') +
      '<p class="hiddennote" style="font-style:normal">Bulk edits: SEPA Course data Sheet, tab <b>Content: Bootcamp</b>.</p>';
  }
  function editForm(r) {
    var k = r.kind || 'Written';
    return '<form class="wuform card" data-bcform="' + esc(r.id || 'new') + '"><div class="fgrid">' +
      '<label class="field"><span>Kind</span><select name="kind">' + KINDS.map(function (x) { return '<option' + (x === k ? ' selected' : '') + '>' + x + '</option>'; }).join('') + '</select></label>' +
      '<label class="field"><span>Order</span><input name="o" type="number" value="' + esc(r.o == null || r.o === 999 ? '' : r.o) + '" placeholder="Last"></label></div>' +
      '<p class="hiddennote" style="font-style:normal;margin:0">' + esc(KHELP[k] || '') + '</p>' +
      '<label class="field"><span>Title</span><input name="t" value="' + esc(r.t || '') + '"></label>' +
      '<label class="field"><span>Text</span><textarea name="x" rows="4">' + esc(r.x || '') + '</textarea></label>' +
      '<label class="field"><span>Lines (one per line)</span><textarea name="lines" rows="4">' + esc((r.lines || []).join('\n')) + '</textarea></label>' +
      '<div class="fgrid"><label class="field"><span>Setting</span><input name="set" value="' + esc(r.set || '') + '"></label><label class="field"><span>Link</span><input name="link" type="url" value="' + esc(r.link || '') + '" placeholder="https://"></label></div>' +
      '<label class="wucheck"><input type="checkbox" name="show"' + (r.show === false ? '' : ' checked') + '> Show to participants</label>' +
      (r.prob ? '<p class="ceprob">' + esc(r.prob) + '</p>' : '') +
      '<div class="wubtns"><button class="btn primary" type="submit">' + (r.id ? 'Save' : 'Add') + '</button><button class="btn" type="button" data-bccancel="1">Cancel</button>' + (r.id ? '<button class="btn danger" type="button" data-bcdel="' + esc(r.id) + '">Delete</button>' : '') + '</div></form>';
  }

  /* ---------- trainers: review one participant's day ---------- */
  function reviewHTML(uid, d) {
    var p = (BCX.roster && BCX.roster.people.find(function (x) { return x.uid === uid; })) || { name: (PG.names || {})[uid] || 'Participant', email: '' };
    if (!BCX.roster) loadRoster(false);
    var h = theirHw(uid, d), a = h.a || {}, rv = theirRv(uid, d), di = dayInfo(d);
    var list = BCX.roster ? peopleOf(norm(p.batch)) : [], i = list.findIndex(function (x) { return x.uid === uid; });
    var prev = list[i - 1], next = list[i + 1];
    var nav = '<div class="rvnav"><button class="btn sm" data-go="' + (prev ? 'bcr-' + prev.uid + '-' + d : '') + '"' + (prev ? '' : ' disabled') + '>' + I.back + ' Previous</button><span>' + (i + 1) + ' of ' + list.length + '</span><button class="btn sm" data-go="' + (next ? 'bcr-' + next.uid + '-' + d : '') + '"' + (next ? '' : ' disabled') + '>Next ' + I.arrow + '</button></div>';
    var answers = h.at ? di.items.filter(function (x) { return x.kind !== 'Material' && x.kind !== 'Info'; }).map(function (it) {
      if (it.kind === 'Quiz') return '';
      return itemHTML(d, it, a, true);
    }).join('') : '<div class="empty">Not handed in yet.</div>';
    var qz = quizItems(d);
    if (h.at && qz.length) { var sc = quizScore(d, a); answers = '<section class="card bcitem"><h3>Quiz</h3><p class="bcscore">' + sc.ok + ' / ' + sc.n + ' correct</p></section>' + answers; }
    var scale = di.scale || 'meets', crit = di.crit || [], s = (rv && rv.s) || {};
    var form = '<section class="card bcscoreform"><h3>Your feedback</h3>' +
      (scale === 'meets' ? '<div class="bcres-pick"><label><input type="radio" name="bcres" value="meets"' + (rv && rv.res === 'meets' ? ' checked' : '') + '> Meets expectations</label><label><input type="radio" name="bcres" value="revise"' + (rv && rv.res === 'revise' ? ' checked' : '') + '> Needs revision</label></div>' :
        crit.map(function (c, ci) { return '<div class="bccrit"><span>' + esc(c) + '</span><span class="bcpick">' + [1, 2, 3, 4].map(function (n) { return '<label><input type="radio" name="bcc-' + ci + '" value="' + n + '"' + (s[c] === n ? ' checked' : '') + '><span>' + n + '</span></label>'; }).join('') + '</span></div>'; }).join('') +
        '<label class="bcrevise"><input type="checkbox" id="bc-revise"' + (rv && rv.res === 'revise' ? ' checked' : '') + '> Ask for a revision</label>') +
      '<label class="field"><span>Comment for the participant</span><textarea id="bc-comment" rows="4" placeholder="One strength and one thing to work on">' + esc(rv ? rv.c || '' : '') + '</textarea></label>' +
      '<div class="acts" style="align-items:center"><button class="btn primary" data-bcrvsave="' + esc(uid) + '|' + d + '"' + (h.at ? '' : ' disabled') + '>' + (rv ? 'Update feedback' : 'Send feedback') + '</button><span class="pgstatus" role="status" id="bcrv-st">' + (rv ? 'Sent ' + esc(rv.at || '') : '') + '</span></div>' +
      '<p class="hiddennote" style="font-style:normal">' + (scale === 'meets' ? 'Meets expectations or Needs revision, plus a comment.' : 'Score each point from 1 to 4.') + ' The participant gets an email.</p></section>';
    return '<div class="pagebar">' + backBtn('bct', 'Bootcamp') + '<h1 class="title">Day ' + d + ' homework</h1><span></span></div>' + nav +
      '<div class="card bcwho"><div><b>' + esc(p.name) + '</b><small>' + esc(p.email) + (h.at ? ' · handed in ' + esc(new Date(h.at).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })) : '') + '</small></div>' + (h.late ? '<span class="ctag newtag">Late</span>' : '') + '</div>' +
      '<div class="bcrvgrid"><div>' + answers + '</div><aside>' + form + '</aside></div>';
  }
  async function saveReview(uid, d) {
    var di = dayInfo(d), st = document.getElementById('bcrv-st'), c = (document.getElementById('bc-comment') || {}).value || '';
    var entry = { bc: d, c: c.trim(), by: PG.me, at: today(), atIso: new Date().toISOString() };
    if ((di.scale || 'meets') === 'meets') {
      var r = document.querySelector('input[name=bcres]:checked');
      if (!r) { st.textContent = 'Choose Meets expectations or Needs revision.'; return; }
      entry.res = r.value;
    } else {
      var s = {}, total = 0, crit = di.crit || [];
      for (var i = 0; i < crit.length; i++) { var x = document.querySelector('input[name="bcc-' + i + '"]:checked'); if (!x) { st.textContent = 'Score every point first (' + crit[i] + ').'; return; } s[crit[i]] = +x.value; total += +x.value; }
      entry.s = s; entry.total = total; entry.max = crit.length * 4; entry.res = document.getElementById('bc-revise').checked ? 'revise' : 'scored';
    }
    st.textContent = 'Sending…';
    var docv = Object.assign({}, (PG.reviews || {})[uid] || {}); docv['bc' + d] = entry;
    try { await PG.db.doc('reviews/' + uid).set(docv); PG.reviews[uid] = docv; st.textContent = 'Sent. The participant can see it now.'; }
    catch (e) { st.textContent = 'Couldn\'t send. Check your connection and try again.'; }
  }

  /* ---------- clicks ---------- */
  document.addEventListener('click', async function (e) {
    var t = e.target.closest('button, a'); if (!t) return;
    var ds = t.dataset || {};
    if (ds.bccheck) { e.preventDefault(); var d = ds.bccheck, items = quizItems(d), a = hw(d).a; if (items.some(function (x) { return a[x.id] == null; })) { var miss = items.find(function (x) { return a[x.id] == null; }); var el = document.querySelector('input[name="q-' + miss.id + '"]'); if (el) el.focus(); alert('Answer every question first.'); return; } BCX.quizShow = BCX.quizShow || {}; BCX.quizShow[d] = true; persist(); rerender(); return; }
    if (ds.bcretry) { e.preventDefault(); var d2 = ds.bcretry, a2 = hw(d2).a; quizItems(d2).forEach(function (x) { delete a2[x.id]; }); BCX.quizShow[d2] = false; persist(); rerender(); var q = document.getElementById('bci-quiz-' + d2); if (q) q.scrollIntoView({ block: 'start' }); return; }
    if (ds.bcrec) { e.preventDefault(); var r = ds.bcrec.split('|'); startRec(r[0], r[1], r[2], +r[3]); return; }
    if (ds.bcstop) { e.preventDefault(); try { BCX.rec.recorder.stop(); } catch (er) {} return; }
    if (ds.bcredo) { e.preventDefault(); var old = BCX.rec; BCX.rec = null; if (old && old.url) URL.revokeObjectURL(old.url); rerender(); return; }
    if (ds.bcuse) { e.preventDefault(); var u = ds.bcuse.split('|'), rr = BCX.rec; if (rr && rr.blob) uploadMedia(u[0], u[1], rr.kind, rr.blob, false); return; }
    if (ds.bclink) { e.preventDefault(); var l = ds.bclink.split('|'), inp = document.getElementById('bcl-' + l[1]), v = (inp && inp.value || '').trim(); if (!/^https:\/\//.test(v)) { status(l[1], 'Paste a link that starts with https://'); return; } hw(l[0]).a[l[1]] = { link: v, at: new Date().toISOString() }; persist(); await flushNow(); rerender(); status(l[1], 'Link saved.'); return; }
    if (ds.bchand) { e.preventDefault(); handIn(ds.bchand); return; }
    // trainers
    if (ds.bctab) { BCX.tab = ds.bctab; BCX.msg = ''; BCX.edit = null; rerender(); return; }
    if (ds.bcunlock) { var sel = {}; peopleOf(BCX.batch).forEach(function (p) { if (!rec(p.uid).unlocked && !missed(p.uid).length) sel[p.uid] = true; }); BCX.unlock = { batch: BCX.batch, sel: sel }; rerender(); return; }
    if (ds.bcunlockcancel) { BCX.unlock = null; rerender(); return; }
    if (ds.bcunlockgo) {
      var ids = Object.keys(BCX.unlock.sel).filter(function (k) { return BCX.unlock.sel[k] && !rec(k).unlocked; }), stEl = document.getElementById('bcu-st');
      if (!ids.length) { stEl.textContent = 'Tick at least one participant.'; return; }
      var warn = ids.filter(function (k) { return missed(k).length; }).length;
      if (!confirm('Unlock the self-paced course for ' + ids.length + ' participant(s)?' + (warn ? ' ' + warn + ' of them missed a day.' : ''))) return;
      t.disabled = true; stEl.textContent = 'Unlocking…';
      try { for (var i = 0; i < ids.length; i++) await writeRec(ids[i], { unlocked: today() }); BCX.unlock = null; BCX.msg = 'Unlocked for ' + ids.length + ' participant(s).'; rerender(); }
      catch (er) { stEl.textContent = 'Couldn\'t save. Check your connection and try again.'; t.disabled = false; }
      return;
    }
    if (ds.bclock) { if (!confirm('Lock the course again for this participant?')) return; try { var cur = Object.assign({}, rec(ds.bclock)); delete cur.unlocked; PG.bcAll[ds.bclock] = cur; await PG.db.doc('bootcamp/' + ds.bclock).set(Object.assign(cur, { by: PG.me })); rerender(); } catch (er) { alert('Couldn\'t save.'); } return; }
    if (ds.bcsavesched) {
      var days = DAYS.map(function (n) { var g = function (k) { return (document.getElementById('bcs-' + k + '-' + n) || {}).value || ''; }; return { day: n, date: g('date'), start: g('start'), end: g('end'), link: g('link').trim() }; });
      var st2 = document.getElementById('bcs-st'), name = (data() && data().sched[BCX.batch] && data().sched[BCX.batch].name) || BCX.newName || BCX.batch;
      t.disabled = true; st2.textContent = 'Saving…';
      try { applyMap(await S.call('bootSched', { batch: name, days: days })); BCX.newName = ''; BCX.msg = 'Schedule saved.'; rerender(); }
      catch (er) { st2.textContent = er.message || 'Couldn\'t save.'; t.disabled = false; }
      return;
    }
    if (ds.bcnewbatch) { var nb = (document.getElementById('bc-newbatch') || {}).value || ''; nb = nb.trim(); if (!nb) return; BCX.batch = norm(nb); BCX.newName = nb; var dd = data(); if (dd && !dd.sched[BCX.batch]) { dd.sched[BCX.batch] = { name: nb, days: {} }; } BCX.msg = 'Set the dates for ' + nb + ', then Save schedule.'; rerender(); return; }
    if (ds.bceday) { BCX.editDay = +ds.bceday; BCX.edit = null; rerender(); return; }
    if (ds.bcedit) { BCX.edit = BCX.rows.find(function (r) { return r.id === ds.bcedit; }) || null; rerender(); return; }
    if (ds.bcadd) { BCX.edit = { id: '', day: BCX.editDay, kind: 'Written', show: true, lines: [] }; rerender(); return; }
    if (ds.bccancel) { BCX.edit = null; rerender(); return; }
    if (ds.bcdel) { if (!confirm('Delete this item?')) return; try { applyMap(await S.call('bootDelete', { id: ds.bcdel })); BCX.edit = null; rerender(); } catch (er) { alert(er.message); } return; }
    if (ds.bcrvsave) { var rp = ds.bcrvsave.split('|'); t.disabled = true; await saveReview(rp[0], +rp[1]); t.disabled = false; return; }
  });
  document.addEventListener('change', async function (e) {
    var t = e.target, ds = t.dataset || {};
    if (t.id === 'bc-batch') { BCX.batch = t.value; BCX.unlock = null; BCX.msg = ''; rerender(); }
    else if (ds.bcusel) { BCX.unlock.sel[ds.bcusel] = t.checked; var b = document.querySelector('[data-bcunlockgo]'); if (b) b.textContent = 'Unlock for ' + Object.keys(BCX.unlock.sel).filter(function (k) { return BCX.unlock.sel[k] && !rec(k).unlocked; }).length + ' participant(s)'; }
    else if (ds.bcatt) { var p = ds.bcatt.split('|'), att = Object.assign({}, rec(p[0]).att || {}); if (t.checked) att[p[1]] = true; else delete att[p[1]]; try { await writeRec(p[0], { att: att }); } catch (er) { t.checked = !t.checked; alert('Couldn\'t save attendance. Check your connection.'); } }
    else if (t.name === 'kind' && t.closest('[data-bcform]')) { var f = t.closest('form'); BCX.edit = Object.assign({}, BCX.edit, formData(f)); rerender(); }
  });
  function formData(f) {
    var g = function (n) { return f.elements[n] ? f.elements[n].value : ''; };
    return { id: f.dataset.bcform === 'new' ? '' : f.dataset.bcform, day: BCX.editDay, kind: g('kind'), o: g('o'), t: g('t').trim(), x: g('x').trim(), lines: g('lines').split('\n').map(function (s) { return s.trim(); }).filter(Boolean), set: g('set').trim(), link: g('link').trim(), show: !!f.elements.show.checked };
  }
  document.addEventListener('submit', async function (e) {
    var f = e.target; if (!f.dataset || f.dataset.bcform == null) return;
    e.preventDefault();
    var d = formData(f), b = f.querySelector('[type=submit]'); b.disabled = true;
    try { var r = await S.call('bootSave', d); applyMap(r); var saved = BCX.rows.find(function (x) { return x.id === r.id; }); BCX.edit = saved && saved.prob ? saved : null; BCX.msg = saved && saved.prob ? 'Saved, but there is a problem (in red).' : 'Saved.'; rerender(); }
    catch (er) { BCX.msg = er.message || 'Couldn\'t save.'; b.disabled = false; rerender(); }
  });

  /* ---------- routes ---------- */
  var ALLOWED_LOCKED = /^(bootcamp|bc[123]|me|help|notifs|saved)$/;
  var prevRoute = route;
  route = function () {
    if (!SESSION) return prevRoute();
    var h = location.hash.slice(1) || 'home', html = null, page = 'home';
    if (BCX.rec && BCX.rec.state === 'live' && h !== current) { try { BCX.rec.recorder.stop(); } catch (e) {} stopTracks(); BCX.rec = null; }
    if (h === 'bct') { page = 'review'; html = trainerHTML(); }
    else if (/^bcr-[\w-]+-[123]$/.test(h)) { var m = /^bcr-([\w-]+)-([123])$/.exec(h); page = 'review'; html = reviewHTML(m[1], +m[2]); }
    else if (applies() && (h === 'bootcamp' || (locked() && !ALLOWED_LOCKED.test(h)))) { page = 'home'; html = overviewHTML(); h = 'bootcamp'; }
    else if (applies() && /^bc[123]$/.test(h)) { page = 'home'; html = dayHTML(+h.slice(2)); }
    if (html == null) return prevRoute();
    current = h;
    try { speechSynthesis.cancel(); } catch (e) {}
    app.innerHTML = html;
    document.querySelectorAll('[data-nav]').forEach(function (b) { if (b.dataset.nav === page) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
    document.body.className = document.body.className.replace(/\bpg-\S+/g, '').trim() + ' pg-' + (h === 'bct' || /^bcr-/.test(h) ? 'bctrainer' : 'bootcamp');
    scrollTo(0, 0);
  };
  // Me page: a Bootcamp row (participants in a bootcamp batch, and trainers)
  var prevMe = mePage;
  mePage = function () {
    var h = prevMe();
    if (isTrainer()) return h + '<div class="card"><button class="linkrow" data-go="bct"><span>Bootcamp: batches, homework and unlocking</span>' + I.arrow + '</button></div>';
    if (applies()) return '<div class="card"><button class="linkrow" data-go="bootcamp"><span>Teacher Bootcamp: homework and feedback</span>' + I.arrow + '</button></div>' + h;
    return h;
  };
  // Review page (trainers): Bootcamp first
  var prevReview = reviewPage;
  reviewPage = function () {
    var h = prevReview(), n = 0;
    if (BCX.roster) BCX.roster.people.forEach(function (p) { DAYS.forEach(function (d) { if (cellStatus(p.uid, d).k === 'new') n++; }); });
    var box = '<button class="nextbox" data-go="bct"><span><b>Bootcamp' + (n ? ' · ' + n + ' to review' : '') + '</b><small>Attendance, homework reviews and unlocking the course</small></span>' + I.arrow + '</button>';
    return PG.trainer ? h.replace('</header>', '</header>' + box) : h;
  };
  // Home (course open): a reminder while bootcamp homework is still open
  var prevHome = homePage;
  homePage = function () {
    var h = prevHome();
    if (!applies() || locked()) return h;
    var open = DAYS.filter(function (d) { var st = dayStatus(d, (PR.bc || {})[d] || {}, myReview(d), (mySched() || { days: {} }).days[d]); return st.k === 'todo' || st.k === 'revise'; });
    if (!open.length) return h;
    var i = h.indexOf('<section');
    var box = '<button class="nextbox bchome" data-go="bootcamp"><span><b>Bootcamp homework to finish</b><small>Day ' + open.join(', Day ') + '</small></span>' + I.arrow + '</button>';
    return i < 0 ? h + box : h.slice(0, i) + box + h.slice(i);
  };

  // keep the unlock state on this device, and re-show the page when the trainer changes it
  window.SEPA_bcChanged = function () {
    if (PG.bc && S.me) try { localStorage.setItem('sepa-bcu-' + S.me.uid, PG.bc.unlocked ? '1' : '0'); } catch (e) {}
    if (/^(home|bootcamp|bc[123]|topics|tasks|me)$/.test(current || '') || locked()) { if (!(document.activeElement && /^(TEXTAREA|INPUT)$/.test(document.activeElement.tagName))) rerender(); }
    else if (current === 'bct' || /^bcr-/.test(current || '')) { if (!(document.activeElement && /^(TEXTAREA|INPUT|SELECT)$/.test(document.activeElement.tagName))) rerender(); }
  };
  window.SEPA_bootcamp = { state: function () { return { applies: applies(), locked: locked(), sched: mySched() }; }, BCX: BCX };

  /* ---------- layout: phone, tablet and laptop ---------- */
  var css = document.createElement('style');
  css.textContent = [
    '.bcgrid{display:grid;gap:14px;margin-top:6px}',
    '@media (min-width:760px){.bcgrid{grid-template-columns:repeat(3,minmax(0,1fr))}}',
    '.bcday-card{display:flex;flex-direction:column;align-items:flex-start;gap:6px;text-align:left;cursor:pointer;font:inherit;color:inherit;border:1.5px solid var(--line);min-height:150px}',
    '.bcday-card b{font-size:18px;line-height:1.25}',
    '.bcday-card small{display:flex;gap:6px;align-items:center;color:var(--muted);font-weight:600}',
    '.bcnum{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--green)}',
    '.bcst{align-self:flex-start;margin-top:auto;font-size:13px;font-weight:800;padding:4px 10px;border-radius:999px;background:var(--surface);border:1px solid var(--line)}',
    '.st-todo .bcst,.bcst.st-todo{background:#FFF4D6;border-color:#F0D98A;color:#5A4300}',
    '.st-revise .bcst,.bcst.st-revise{background:#FDE7E3;border-color:#F3B7AB;color:#8A2414}',
    '.st-done .bcst,.bcst.st-done,.st-in .bcst,.bcst.st-in{background:#E6F4DC;border-color:#BFE0A8;color:#255A12}',
    '.bclock{display:flex;gap:14px;align-items:flex-start;border:1.5px solid #F0D98A;background:#FFFBEE;color:#3D2E00}',
    '.bclock.open{border-color:#BFE0A8;background:#F2FAEC;color:#1E3F0E}',
    '.bclock svg{flex:none;width:24px;height:24px;margin-top:2px}',
    '.bclock p{margin:4px 0 8px}',
    '.bchero h2{margin:4px 0 6px}',
    '.bchero p{margin:0 0 10px;color:var(--muted)}',
    '.bcdaygrid{display:grid;gap:16px}',
    '.bcmain,.bcside{display:flex;flex-direction:column;gap:14px;min-width:0}',
    '@media (min-width:1000px){.bcdaygrid{grid-template-columns:minmax(0,1fr) 320px;align-items:start}.bcside{position:sticky;top:16px;order:2}}',
    '@media (max-width:999px){.bcside{order:-1}}',
    '.bcwhen{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin:0 0 10px}',
    '.bclive .btn{width:100%;justify-content:center}',
    '.bcmats{display:flex;flex-direction:column;gap:8px}',
    '.bcitem{display:flex;flex-direction:column;gap:10px}',
    '.bcitem h3{margin:0}',
    '.bcopt-tag{font-size:12px;font-weight:700;color:var(--muted);background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:2px 8px;vertical-align:2px}',
    '.bcitem textarea{width:100%;min-height:110px}',
    '.bcwc{color:var(--muted);font-weight:600}',
    '.bcq{border:1.5px solid var(--line);border-radius:14px;padding:12px 14px;margin:0;display:flex;flex-direction:column;gap:6px}',
    '.bcq legend{font-weight:800;display:flex;gap:8px;padding:0 4px}',
    '.bcq legend span{flex:none;width:24px;height:24px;border-radius:12px;background:var(--surface);display:inline-grid;place-items:center;font-size:13px}',
    '.bcq.ok{border-color:#9BCF7C}.bcq.no{border-color:#EBA597}',
    '.bcopt{display:flex;gap:8px;align-items:flex-start;padding:8px 10px;border-radius:10px;cursor:pointer}',
    '.bcopt:hover{background:var(--surface)}',
    '.bcopt.right{background:#E6F4DC;font-weight:700}.bcopt.wrong{background:#FDE7E3}',
    '.bcopt input{margin-top:3px;flex:none}',
    '.bcexp{margin:4px 0 0;color:var(--muted);font-weight:600}',
    '.bcscore{font-weight:800;margin:0}',
    '.bcchecks{margin:0;padding-left:0;list-style:none;display:flex;flex-direction:column;gap:6px}',
    '.bcchecks.plain{padding-left:20px;list-style:disc}',
    '.bcchecks label{display:flex;gap:8px;align-items:flex-start}',
    '.bcsub{margin:0;font-weight:700}',
    '.bcvideo{width:100%;max-width:560px;border-radius:12px;background:#000;aspect-ratio:4/3}',
    '.bcrec{display:flex;flex-direction:column;gap:10px}',
    '.bcrecdot{color:#C2412D;font-weight:800;margin:0}',
    '.bctimer{font-variant-numeric:tabular-nums;font-weight:800}',
    '.bcsaved{display:flex;gap:6px;align-items:center;font-weight:700;margin:0;color:#255A12}',
    '.bcup{display:flex;gap:8px;flex-wrap:wrap;align-items:center}',
    '.bcup input[type=url]{flex:1;min-width:200px}',
    '.bcor{color:var(--muted);font-weight:700}',
    '.bctick{display:flex;gap:10px;align-items:flex-start;font-weight:700}',
    '.bchand{display:flex;gap:14px;align-items:center;flex-wrap:wrap;justify-content:space-between;border:1.5px solid var(--green)}',
    '.bchand>div{display:flex;flex-direction:column;gap:2px}',
    '.bchand small{color:var(--muted);font-weight:600}',
    '.bchand .pgstatus{flex-basis:100%;margin:0}',
    '.bcreview{border:1.5px solid #BFE0A8;background:#F2FAEC}',
    '.bcreview.revise{border-color:#F3B7AB;background:#FFF5F2}',
    '.bcres{font-size:20px;font-weight:800;margin:0}',
    '.bcscores{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px}',
    '.bcscores li{display:flex;justify-content:space-between;gap:12px}',
    '.bclist{margin:4px 0;padding-left:20px}',
    '.bcbar{display:flex;gap:14px;flex-wrap:wrap;align-items:flex-end;margin:6px 0 12px}',
    '.bcbar .field{min-width:200px}',
    '.bcrow{display:flex;gap:8px}',
    '.bctablewrap{overflow-x:auto;border:1px solid var(--line);border-radius:14px;background:var(--card,#fff);-webkit-overflow-scrolling:touch}',
    '.bctable{width:100%;border-collapse:collapse;min-width:620px;font-size:14px}',
    '.bctable th,.bctable td{padding:10px 12px;border-top:1px solid var(--line);text-align:left;vertical-align:top}',
    '.bctable thead th{border-top:0;background:var(--surface);font-size:13px}',
    '.bctable tbody th{display:flex;flex-direction:column;gap:2px;min-width:150px}',
    '.bctable tbody th small{color:var(--muted);font-weight:600}',
    '.bcatt{display:flex;gap:6px;align-items:center;font-weight:600;margin-bottom:6px}',
    '.bccell{display:inline-block;font:inherit;font-size:13px;font-weight:800;padding:4px 10px;border-radius:999px;border:1px solid var(--line);background:var(--surface);cursor:default}',
    'button.bccell{cursor:pointer}',
    '.bccell.new{background:#FFF4D6;border-color:#F0D98A;color:#5A4300}',
    '.bccell.done{background:#E6F4DC;border-color:#BFE0A8;color:#255A12}',
    '.bccell.revise{background:#FDE7E3;border-color:#F3B7AB;color:#8A2414}',
    '.bcunlock{display:flex;flex-direction:column;gap:8px;margin-top:14px}',
    '.bcurow{display:flex;gap:10px;align-items:flex-start;padding:8px 10px;border-radius:10px;border:1px solid var(--line)}',
    '.bcurow span{display:flex;flex-direction:column}',
    '.bcurow.warn{border-color:#F0D98A;background:#FFFBEE}',
    '.bcwarn{color:#8A5A00;font-weight:700}',
    '.bcsched{border:1px solid var(--line);border-radius:14px;padding:12px 14px;margin:10px 0}',
    '.bcsched legend{font-weight:800;padding:0 4px}',
    '.bcschedgrid{display:grid;gap:10px;grid-template-columns:1fr 1fr}',
    '.bcschedgrid .field:first-child{grid-column:1/-1}',
    '.bcwide{grid-column:1/-1}',
    '@media (min-width:900px){.bcschedgrid{grid-template-columns:170px 120px 120px minmax(0,1fr)}.bcschedgrid .field:first-child,.bcwide{grid-column:auto}}',
    '.bcrvgrid{display:grid;gap:16px}',
    '.bcrvgrid>div{display:flex;flex-direction:column;gap:14px;min-width:0}',
    '@media (min-width:1000px){.bcrvgrid{grid-template-columns:minmax(0,1fr) 360px;align-items:start}.bcrvgrid>aside{position:sticky;top:16px}}',
    '.bcscoreform{display:flex;flex-direction:column;gap:10px}',
    '.bcres-pick{display:flex;flex-direction:column;gap:8px}',
    '.bcres-pick label,.bcrevise{display:flex;gap:8px;align-items:center;font-weight:700}',
    '.bccrit{display:flex;flex-direction:column;gap:6px;padding:8px 0;border-top:1px solid var(--line)}',
    '.bccrit>span:first-child{font-weight:700}',
    '.bcpick{display:flex;gap:6px}',
    '.bcpick label{flex:1}',
    '.bcpick input{position:absolute;opacity:0;pointer-events:none}',
    '.bcpick span{display:grid;place-items:center;height:40px;border:1.5px solid var(--line);border-radius:10px;font-weight:800;cursor:pointer}',
    '.bcpick input:checked+span{background:var(--green);border-color:var(--green);color:#fff}',
    '.bcpick input:focus-visible+span{outline:3px solid var(--green);outline-offset:2px}',
    '.bchome{margin-bottom:14px}',
    '.bcwho{display:flex;justify-content:space-between;align-items:center;gap:12px}',
    '.bcwho>div{display:flex;flex-direction:column;gap:2px;min-width:0}',
    '.bcwho small{color:var(--muted);font-weight:600;overflow-wrap:anywhere}',
    '.bcitem .wtext{font-weight:400;white-space:pre-wrap;margin:4px 0 0;padding:10px 12px;background:var(--surface);border-radius:10px}',
    '.bcwhen svg{flex:none;margin-top:3px}',
    '.bcwhen{align-items:flex-start!important}',
    '.bchero .bcst{margin-top:0}',
    'body.pg-bootcamp .app,body.pg-bctrainer .app{max-width:1180px}'
  ].join('\n');
  document.head.appendChild(css);
})();
/* END bootcamp.js */
/* END app.js */
