(function(){
"use strict";
var LS_KEY="englishSystem_v3", LS_OLD="englishSystem180_v2", LS_CHAT="englishSystem_scenario";
var DAYS=300;

/* =========== Contenu =========== */
var GRAMMAR=["Present simple vs present continuous","Past simple : réguliers et irréguliers","Questions, négations et auxiliaires","Present perfect vs past simple","Futur : will, going to, présent continu","Prépositions de temps et de lieu","Articles : a / the / article zéro","Past continuous et connecteurs du récit","Comparatifs et superlatifs","Modaux de conseil : should, could, might","Modaux d'obligation : must, have to","Conditionnels 1 et 2","Propositions relatives","Phrasal verbs fréquents","Voix passive","Gérondif vs infinitif","Discours rapporté","Past perfect","Present perfect continuous","Conditionnel 3","Connecteurs de contraste et de concession","Quantifieurs : few, little, much, many","Modaux de déduction au présent","Modaux de déduction au passé","Conditionnels mixtes","Wish / if only / I'd rather","Collocations verbe + nom","Hedging : tend to, it appears that, arguably","Inversion pour l'emphase","Phrases clivées","Propositions participiales","Passif avancé : it is said that…","Nominalisation","Registre formel vs informel","Ellipse et substitution","Structures formelles : it is essential that…","Adverbes de nuance et place dans la phrase","Phrasal verbs avancés et idiomes","Cohésion : référence et connecteurs avancés","Révision ciblée : temps verbaux","Révision ciblée : prépositions et collocations","Révision ciblée : tes 10 erreurs les plus fréquentes","Consolidation finale"];

var MONTHS=[
 {lvl:"A2+",title:"Consolider A2 et débloquer la parole",desc:"Revoir les temps essentiels, les questions, les prépositions et les articles. Parler chaque jour sur des sujets familiers, même avec des erreurs.",work:{acad:"Te présenter, décrire tes études et ton stage, raconter ta semaine.",pro:"Te présenter, décrire ton travail et ta routine, raconter ta semaine."},cando:["Je peux me présenter et parler de mon quotidien pendant 3 minutes.","Je peux raconter ma semaine au passé.","Je peux poser des questions et faire répéter."]},
 {lvl:"B1",title:"Raconter, décrire, comparer",desc:"Récits, descriptions et comparaisons. Premiers textes de 150 mots corrigés puis réécrits.",work:{acad:"Expliquer ton sujet de mémoire, comparer deux méthodes simples.",pro:"Décrire un projet, comparer deux options."},cando:["Je peux raconter une expérience avec un début, un milieu et une fin.","Je peux décrire et comparer deux situations.","Je comprends un audio B1 avec la transcription."]},
 {lvl:"B1",title:"Devenir autonome",desc:"Conseils, problèmes, opinions et anglais professionnel de base. Moins de traduction mentale.",work:{acad:"Donner un point d'avancement à ton encadrant, expliquer un problème méthodologique.",pro:"Expliquer un problème, proposer des solutions, réussir le début d'un entretien."},cando:["Je peux expliquer un problème sans traduire chaque phrase.","Je peux donner mon avis avec des raisons.","Je peux écrire un courriel ou une opinion de 200 mots."]},
 {lvl:"B1+",title:"Parler sans préparer chaque phrase",desc:"Des mots-clés seulement, jamais de texte à lire. Débit naturel, contractions, accents britannique et américain.",work:{acad:"Résumer un séminaire, répondre à des questions imprévues sur ton travail.",pro:"Tenir une conversation de 8 minutes sans script."},cando:["Je parle 5 minutes avec seulement des mots-clés.","Je repère les contractions et les mots réduits.","Je reformule quand un mot me manque."]},
 {lvl:"B2",title:"Argumenter avec méthode",desc:"Opinion, justification, exemple, nuance. Débats, objections, textes argumentatifs de 250 mots.",work:{acad:"Défendre un choix méthodologique, répondre à une objection.",pro:"Défendre une opinion et répondre aux objections."},cando:["Je peux défendre une thèse et répondre à une objection.","Je suis l'essentiel d'un podcast natif.","J'écris un texte argumentatif structuré."]},
 {lvl:"B2",title:"Anglais authentique et idées implicites",desc:"Documentaires, conférences, débats. Distinguer faits, opinions et hypothèses ; repérer le ton et les réserves.",work:{acad:"Présenter des résultats et répondre aux questions d'un séminaire.",pro:"Présenter l'avancement d'un projet en réunion, négocier une priorité."},cando:["Je distingue faits, opinions et hypothèses à l'écoute.","Je présente des résultats et réponds aux questions.","Je suis un contenu B2 sans dépendre du script."]},
 {lvl:"B2+",title:"Précision et nuance",desc:"Collocations, mots précis à la place de good, bad, thing. Exprimer une réserve, rendre une opinion diplomatique.",work:{acad:"Nuancer tes conclusions et discuter des limites de ton étude.",pro:"Exprimer un désaccord avec diplomatie, annoncer une mauvaise nouvelle."},cando:["Je nuance mes propos et reconnais les limites d'une idée.","J'explique une idée de trois manières différentes.","J'écris un essai cohérent de 300 mots."]},
 {lvl:"C1−",title:"Réflexes de niveau C1",desc:"Conférences sans transcription, accents variés, registre formel, synthèses et essais de 300 mots ou plus.",work:{acad:"Synthétiser une littérature contradictoire, gérer une question hostile.",pro:"Défendre un budget, négocier, répondre à des objections."},cando:["Je comprends une conférence courte sans transcription.","J'adapte mon registre à la situation.","Je synthétise une source complexe et discute ses limites."]},
 {lvl:"C1",title:"Diagnostic et réparation",desc:"Travailler les faiblesses révélées par les tests plutôt que revoir tout le programme. Réécrire d'anciens textes.",work:{acad:"Entretien de thèse et présentation de recherche avec questions.",pro:"Simulation d'entretien et présentation professionnelle."},cando:["Mes 5 erreurs les plus fréquentes ont presque disparu.","Je réponds spontanément à des questions complexes.","Je réécris un ancien texte avec nettement plus de précision."]},
 {lvl:"C1",title:"Simulations complètes et validation",desc:"Examens blancs chronométrés des 4 compétences, simulations longues, bilan final et plan pour la suite.",work:{acad:"Soutenance blanche de 15 minutes et questions d'un jury.",pro:"Entretien de 15 minutes et réunion simulée."},cando:["Je m'exprime de façon fluide et spontanée, sans chercher mes mots de manière évidente.","J'utilise la langue avec souplesse en contexte académique et professionnel.","Je produis un discours clair, structuré et détaillé sur un sujet complexe."]}
];

var STAGES=[
 {mult:1,dur:"2 min",words:"100 à 150",genre:"journal ou récit",
  L:"un audio de 3 à 5 min avec transcription (BBC Real Easy English, British Council A2-B1)",
  P:"10 phrases de l'audio, en 3 passages, en imitant le rythme et l'intonation",
  Rd:"une histoire ou un article A2-B1 du British Council",
  boss:{acad:"Présentation de 2 min sans pause longue : « Me, my studies and my goals ». Chronomètre, enregistre, compte tes hésitations.",pro:"Présentation de 2 min sans pause longue : « Me, my job and my goals ». Chronomètre, enregistre, compte tes hésitations."}},
 {mult:1.15,dur:"3 min",words:"150 à 200",genre:"récit, courriel ou opinion",
  L:"un dialogue ou un podcast de 5 à 15 min (6 Minute English, British Council B1)",
  P:"un passage de 30 s en travaillant liaisons et mots accentués (vérifie 3 mots sur YouGlish)",
  Rd:"une histoire adaptée puis un article court",
  boss:{acad:"Raconte un problème de recherche et sa solution (4 min), puis réponds à 3 questions tirées au hasard : Why? How? What if?",pro:"Raconte un problème au travail et sa solution (4 min), puis réponds à 3 questions tirées au hasard : Why? How? What if?"}},
 {mult:1.3,dur:"5 min",words:"200 à 250",genre:"texte argumentatif",
  L:"un podcast naturel ou une interview (BBC Sounds, TED), sans sous-titres français",
  P:"un passage de 60 s, puis redis-le sans audio en gardant le rythme",
  Rd:"un article plus long dont tu résumes les idées",
  boss:{acad:"Débat de 8 min contre toi-même : défends une position sur ton domaine, formule 3 objections et réponds à chacune.",pro:"Débat de 8 min contre toi-même : défends une position, formule 3 objections et réponds à chacune."}},
 {mult:1.45,dur:"6 à 8 min",words:"250 à 300",genre:"essai structuré ou synthèse",
  L:"un documentaire, un débat ou une conférence, en repérant le ton, les réserves et les idées implicites",
  P:"un orateur natif pendant 90 s, en repérant les mots qui portent l'accent de phrase",
  Rd:"un article de presse, un essai ou une transcription de conférence",
  boss:{acad:"Présentation de résultats de 8 min (tableau ou graphique), puis 3 questions critiques auxquelles tu réponds sans préparation.",pro:"Présentation de 8 min d'une proposition, puis 3 objections auxquelles tu réponds sans préparation."}},
 {mult:1.6,dur:"8 à 10 min",words:"300 et plus",genre:"essai argumenté, synthèse ou abstract",
  L:"un contenu long et inconnu (conférence, débat universitaire) avec des accents variés ; transcription seulement pour les passages difficiles",
  P:"l'ouverture de ta présentation, jusqu'à un débit stable de 130 à 150 mots/min",
  Rd:"des éditoriaux, des articles de recherche de ton domaine ou un livre (Project Gutenberg)",
  boss:{acad:"Soutenance blanche de 15 min : 10 min de présentation, puis questions critiques (prompt « Jury de soutenance » ci-dessous).",pro:"Entretien blanc de 15 min : parcours, questions comportementales, cas pratique (prompt « Entretien d'embauche » ci-dessous)."}}
];

var FORMATS=[null,
 {n:"Trois prises",d:"Prise 1 : parle {dur} sans t'arrêter. Prise 2 : repère 3 erreurs ou hésitations et recommence. Prise 3 : reformule avec des expressions plus naturelles et des transitions claires. Enregistre les trois."},
 {n:"Décrire et comparer",d:"Décris la situation pendant {dur}, puis compare deux options ou deux points de vue. Réécoute et refais une prise."},
 {n:"Questions imprévues",d:"Écris 10 questions sur le sujet, mélange-les, puis réponds à chacune après 30 s de préparation au maximum. Enregistre le tout."},
 {n:"Argumenter",d:"Pendant {dur} : opinion, justification, exemple, nuance. Puis formule une objection et réponds-y sans préparation."},
 {n:"Résumer une source",d:"Résume à voix haute l'écoute et la lecture du jour ({dur}) sans tes notes, puis relie-les au sujet."},
 {n:"Conversation simulée",d:"Converse sur le sujet avec ton assistant IA (prompt « Partenaire de conversation » ci-dessous, en mode vocal) ou avec une vraie personne. Ensuite, refais à voix haute tes 3 réponses les plus faibles."}];

var TOPICS={
 acad:[
  ["Introduce yourself and your degree","Your typical day as a student or intern","Your university and your city","Your lab or team and your colleagues","The software you use every day","A course you enjoyed and why","What you did last weekend","Explain what your field is to a friend","Your plans for next year","Describe a dataset you know well","Ask your supervisor for a meeting","Your strengths as a researcher","Your goals for these 300 days","Explain your master's thesis topic","Your internship project from start to finish","A methodological problem and how you solved it","Explain logistic regression in simple words","Compare R and Python for your work","Describe a chart from your own work","Summarise an article you read recently"],
  ["A bug in your code and how you found it","How you clean a messy dataset","Why you chose your field","A seminar or conference you attended","A progress update for your supervisor","Should all research data be open?","Explain difference-in-differences with an example","Correlation versus causation","Compare two methods you know (MCA vs PCA)","Your data sources and their limits","Justify a methodological choice","Summarise a seminar talk","The parallel trends assumption","Describe a trend in your data","Clear up a misunderstanding with a co-author","Should econometricians use machine learning?","Explain a p-value without jargon","The policy relevance of your research","Your research question in 3 minutes","A typical problem with survey data"],
  ["Present a table of regression results","Defend your identification strategy","How do you deal with endogeneity?","Explain your robustness checks","The limitations of your study","Pitch your thesis in 3 minutes","Are randomised trials the gold standard?","Heterogeneous treatment effects","Answer a referee comment out loud","Intellectual property and innovation","Reproducibility in economics","Interpret an interaction term","Critically summarise a recent paper","Present your research to a new colleague","Compare two papers on the same question","Explain fixed effects to a beginner","Selection bias, with an example","A policy you would evaluate, and how","Why replication matters","What is your contribution?"],
  ["What your results show, and what they don't","Synthesise a literature with conflicting findings","Handle a hostile question at a seminar","External validity of your findings","The trade-offs of your modelling choices","With unlimited data, what would you study?","Your work explained formally, then to a 12-year-old","Plant variety protection and innovation","The role of economists in public policy","Critique a famous empirical study","Deliver your abstract in 2 minutes","Bias in administrative data","Improvise on a random economics concept","Instrumental variables and their limits","A result that surprised you","Big data in economics: pros and cons","Respond to 'your sample is too small'","Agriculture, innovation and regulation","Explain your thesis to a journalist","Lessons from a failed analysis"],
  ["Mock thesis defence: 10-minute presentation","Mock PhD interview: your research proposal","Answer a jury's critical questions","Mock conference talk with a strict timer","What is causality?","Argue against your own conclusion","Summarise a 20-minute lecture in 3 minutes","Explain a complex model precisely","The ethics of using personal data","Your research agenda for the next 3 years","Peer-review a paper out loud","Policy implications of your work","Your research story, start to finish","Defend your PhD project to a funding committee","Moderate a panel discussion","The limits of statistical significance","A 5-minute lightning talk on your results","The future of your field","Negotiate the scope of a project with a supervisor","Answer honestly a question you cannot answer"]],
 pro:[
  ["Introduce yourself and your job","A typical working day","Your team and colleagues","Your workplace","A tool you use every day","What you did last weekend","Your studies and training","Your plans for next month","Your favourite place in your city","Ask for help with a simple problem","A recent purchase and why you made it","Your strengths at work","Your goals for these 300 days","A project you worked on from start to finish","A problem at work and how you solved it","A decision you made and why","Compare two jobs or companies","A mistake you learned from","Explain a process step by step","Give news about a project to a colleague"],
  ["A person who inspired you","A trip that went wrong","Propose an improvement at work","Summarise a video you watched","Your career path so far","Remote work: for or against?","Pros and cons of a four-day week","Explain a complex topic to a beginner","Summarise a meeting and its decisions","Clear up a misunderstanding politely","Justify a budget request","Compare three solutions and recommend one","How technology changed your job","A trend in your sector","Handle a complaint from a client","Explain a failure without blaming anyone","Work-life balance","Persuade a colleague to try a new tool","Your ideal job in 5 years","Plan an event with colleagues"],
  ["Present a recommendation to management","Defend your view against objections","Why should we hire you?","Negotiate a deadline","Will AI replace analysts?","Lead a short meeting with an agenda","Give constructive feedback","Explain a data result to non-experts","An ethical dilemma at work","Pitch a project in 2 minutes","Respond to criticism of your work","Analyse an economics news article","Present quarterly results","Explain your role to a new client","A phone call to solve a problem","A project update with figures","Should social media be regulated?","Ask for more responsibility","Handle a difficult customer","Compare two strategies for a company"],
  ["Disagree diplomatically with a senior colleague","Synthesise conflicting reports","A controversial policy, presented with balance","Bring a meeting back on track","Deliver bad news diplomatically","What would you have done differently?","One idea, formally then casually","The economics of climate change","An unexpected question during a presentation","Persuade without pressure","Cultural differences at work","Explain a long-term strategy","Improvise on a random word","Artificial intelligence: benefits and risks","Announce a delay to a client","A product you would launch, and why","Explain a mistake in a report","Mentor a new colleague","Globalisation and local jobs","Lead a brainstorming session"],
  ["Full mock job interview","5-minute presentation with Q&A","Negotiation role-play","Chair a debate with opposing views","Explain a complex system precisely","Argue convincingly for a view you reject","Summarise a 20-minute podcast in 3 minutes","What does success mean?","Crisis communication after an incident","A strategy with risks and mitigations","4 minutes rich in idioms and nuance","Answer a long, complex question","Your story and your ambitions","Present a proposal to a board","Defend a budget under pressure","A tough question from a journalist","Close a deal","A motivational speech to your team","Explain why you are leaving a job","10 minutes about your industry"]]
};
var TEST_WORDS=[120,150,180,200,220,250,280,300,320,350];

var RES=[
 {g:"Les 6 outils"},
 {n:"British Council LearnEnglish",d:"Base principale : grammaire, écoute, lecture et vidéos classées jusqu'à C1.",u:"https://learnenglish.britishcouncil.org/"},
 {n:"BBC Learning English",d:"Écoute quotidienne : Real Easy English, 6 Minute English, The English We Speak, English at Work.",u:"https://www.bbc.co.uk/learningenglish"},
 {n:"Write & Improve",d:"Retour automatique sur tes textes (Cambridge). Réécris toi-même ensuite.",u:"https://writeandimprove.com/"},
 {n:"Anki",d:"Répétition espacée : une phrase, son contexte, un exemple personnel. Gratuit sur ordinateur, AnkiWeb et Android.",u:"https://apps.ankiweb.net/"},
 {n:"Cambridge Dictionary",d:"Sens, exemples, prononciations britannique et américaine.",u:"https://dictionary.cambridge.org/"},
 {n:"YouGlish",d:"Un mot prononcé par de vraies personnes, en contexte.",u:"https://youglish.com/"},
 {g:"Pour tester et lire"},
 {n:"Cambridge English",d:"Activités gratuites de A1 à C2, tests de niveau, formats B2 First et C1 Advanced.",u:"https://www.cambridgeenglish.org/"},
 {n:"Project Gutenberg",d:"Livres du domaine public, à partir du mois 3.",u:"https://www.gutenberg.org/"},
 {g:"Pour parler avec de vraies personnes"},
 {n:"Tandem",d:"Un partenaire régulier anglais-français.",u:"https://www.tandem.net/"},
 {n:"HelloTalk",d:"Messages vocaux et corrections par des anglophones.",u:"https://www.hellotalk.com/"},
 {n:"ConversationExchange",d:"Correspondants et échanges linguistiques.",u:"https://www.conversationexchange.com/"}
];

var SKILLS=["S","L","Rd","W","G"];
var SKILL_NAMES={S:"expression orale",L:"compréhension orale",Rd:"lecture",W:"écriture",G:"précision grammaticale"};
var FOCUS_TIPS={S:"refais une prise de 2 min sur le même sujet sans regarder ta première version.",L:"ajoute une écoute sans transcription, puis vérifie ce que tu as manqué.",Rd:"lis un second texte sur le même thème et résume-le à voix haute.",W:"réécris entièrement un ancien texte et compare les deux versions.",G:"reprends 5 erreurs du carnet et écris 2 nouvelles phrases correctes pour chacune."};
var RANKS=[["E-RANK",0],["D-RANK",.03],["C-RANK",.08],["B-RANK",.16],["A-RANK",.28],["S-RANK",.44],["NATIONAL LEVEL",.64],["SOVEREIGN // C1",.9]];
var RANK_SUB=["La discipline commence par une séance.","Les bases tiennent. Continue.","L'habitude est installée.","Tu parles plus longtemps que tu ne le pensais.","Niveau d'argumentation atteint.","Tu nuances. Peu de joueurs arrivent ici.","Performance stable, presque autonome.","Rang maximal. Passe l'examen officiel."];

/* =========== Utilitaires =========== */
function $(id){return document.getElementById(id)}
function pad(n,w){return String(n).padStart(w||2,"0")}
function isoDate(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())}
function parseISO(s){var m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(s||"");return m?new Date(+m[1],+m[2]-1,+m[3]):null}
function clamp(v,min,max){v=Number(v);if(!isFinite(v))v=min;return Math.max(min,Math.min(max,v))}
function numOrNull(v,max){if(v===""||v==null)return null;var n=Number(v);return isFinite(n)?clamp(n,0,max):null}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function fmtDate(d){try{return d.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}catch(e){return isoDate(d)}}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
function wordCount(t){var m=String(t).trim().match(/\S+/g);return m?m.length:0}

/* =========== État =========== */
function defaultState(){return {v:3,lastExport:"",startDate:isoDate(new Date()),track:"acad",freeMode:false,quests:{},srs:{},writing:{},gram:{},bonus:{},human:{},assessments:{},tests:{},journals:{},goals:{},cando:{},errors:[],updatedAt:""}}
var OLD_ORDER=["L","P","S","G","G","R"];
function normalize(o){
  var s=defaultState();if(!o||typeof o!=="object")return s;
  var ver=Number(o.v)||1;
  ["bonus","human","assessments","tests","journals","goals","cando","srs","writing","gram"].forEach(function(k){if(o[k]&&typeof o[k]==="object"&&!Array.isArray(o[k]))s[k]=o[k]});
  if(o.quests&&typeof o.quests==="object"){Object.keys(o.quests).forEach(function(k){var m=/^(\d+)_(\w+)$/.exec(k);if(!m||!o.quests[k])return;var key=m[2];if(ver<3&&/^\d$/.test(key))key=OLD_ORDER[+key]||null;if(key)s.quests[m[1]+"_"+key]=1})}
  if(ver<3){s.cando={};Object.keys(s.assessments).forEach(function(k){var a=s.assessments[k];if(a&&Array.isArray(a.scores)&&a.scores.length===4)a.scores=[a.scores[0],a.scores[1],3,3,a.scores[2]]})}
  if(Array.isArray(o.errors))s.errors=o.errors.filter(function(e){return e&&e.wrong!=null}).slice(0,2000).map(function(e){return {id:String(e.id||uid()),wrong:String(e.wrong).slice(0,400),right:String(e.right||"").slice(0,400),sentence:String(e.sentence||"").slice(0,400),cat:e.cat||"grammaire",day:e.day||null,reviews:Number(e.reviews)||0}});
  if(parseISO(o.startDate))s.startDate=o.startDate;else if(o.createdAt){var d=new Date(o.createdAt);if(!isNaN(d))s.startDate=isoDate(d)}
  if(o.track==="pro"||o.track==="acad")s.track=o.track;
  s.freeMode=!!o.freeMode;
  if(typeof o.updatedAt==="string")s.updatedAt=o.updatedAt;if(typeof o.lastExport==="string")s.lastExport=o.lastExport;
  Object.keys(s.assessments).forEach(function(k){var a=s.assessments[k];if(!a||!Array.isArray(a.scores)||a.scores.length!==5)delete s.assessments[k];else a.scores=a.scores.map(function(x){return clamp(x,1,5)})});
  return s;
}
function loadLocal(){try{var raw=localStorage.getItem(LS_KEY)||localStorage.getItem(LS_OLD);return raw?normalize(JSON.parse(raw)):null}catch(e){return null}}
var state=loadLocal()||defaultState();
var localOK=true,selectedDay=1;

/* =========== Calendrier =========== */
function startD(){return parseISO(state.startDate)||new Date()}
function rawDayOffset(){var st=startD(),now=new Date(),t=new Date(now.getFullYear(),now.getMonth(),now.getDate());return Math.round((t-st)/86400000)+1}
function todayDay(){return clamp(rawDayOffset(),1,DAYS)}
function dateOf(day){var st=startD();return new Date(st.getFullYear(),st.getMonth(),st.getDate()+day-1)}
function isLocked(day){return !state.freeMode&&day>todayDay()}
function monthIdx(d){return Math.min(9,Math.floor((d-1)/30))}
function stageIdx(d){return Math.min(4,Math.floor((d-1)/60))}
function isTest(d){return d%30===0}
function isWeekly(d){return d%7===0&&!isTest(d)}
function weekOf(d){return Math.min(43,Math.ceil(d/7))}
function topicFor(d){var st=stageIdx(d),k=0;for(var x=st*60+1;x<d;x++)if(!isTest(x)&&!isWeekly(x))k++;var list=TOPICS[state.track][st];return {text:list[k%list.length],pass:Math.floor(k/list.length)+1}}

/* =========== Adaptation =========== */
function lastAssessBefore(day){var best=0;for(var k in state.assessments){var d=+k;if(d<day&&d>best)best=d}return best}
function focusFor(day){var a=lastAssessBefore(day);if(!a||day-a>7)return null;var sc=state.assessments[String(a)].scores,min=Math.min.apply(null,sc);if(min>=4)return {hard:true,from:a};return {skill:SKILLS[sc.indexOf(min)],from:a,score:min}}

/* =========== Séances =========== */
function baseQuests(d){
  var st=STAGES[stageIdx(d)],mi=monthIdx(d),g=GRAMMAR[weekOf(d)-1],tr=state.track;
  if(isTest(d)){
    var fin=d===DAYS,pre=fin?"Test final : ":"Test : ";
    return [
     {k:"L",t:pre+"écoute",d:"Un audio jamais étudié, au niveau visé ("+MONTHS[mi].lvl+"), sur Cambridge English ou British Council. Sans script. Note ton score en %.",m:25,tag:"Écoute",cls:"testq"},
     {k:"Rd",t:pre+"lecture",d:"Un texte inconnu avec questions (British Council, Cambridge). Chronomètre-toi et note ton score en %.",m:25,tag:"Lecture",cls:"testq"},
     {k:"S",t:pre+"oral",d:"Même sujet chaque mois : « Who I am, what I do and where I'm going ». 3 min sans préparation, puis 5 min sur un sujet abstrait tiré au hasard. Mesure ta durée de parole continue et compte tes hésitations longues.",m:25,tag:"Oral",cls:"testq"},
     {k:"W",t:pre+"écriture",d:"Essai chronométré de "+TEST_WORDS[mi]+" mots sur un sujet inconnu, sans traducteur. Passe-le ensuite au correcteur et compte les erreurs.",m:35,tag:"Écriture",cls:"testq"},
     {k:"B",t:fin?"Bilan final et plan pour la suite":"Tableau de suivi",d:fin?"Compare les tests des mois 1 et 10, réécoute ton enregistrement du jour 1 et écris le plan des 8 semaines suivantes.":"Remplis le test mensuel ci-dessous et compare avec le mois précédent. Si une compétence reste nettement en retard, donne-lui plus de temps au lieu d'avancer comme si de rien n'était.",m:10,tag:"Discipline",cls:"testq"}];
  }
  if(isWeekly(d)){
    return [
     {k:"R",t:"Révision légère",d:"Toutes tes cartes dues : vocabulaire et erreurs du carnet. Pour chaque erreur, dis une nouvelle phrase correcte à voix haute.",m:15,tag:"Révision"},
     {k:"S",t:"Épreuve hebdomadaire",d:st.boss[tr],m:25,tag:"Oral",cls:"bossq",boss:1},
     {k:"B",t:"Bilan de la semaine",d:"Compare avec l'épreuve de la semaine dernière, réponds aux 4 questions et remplis l'évaluation ci-dessous.",m:10,tag:"Discipline",cls:"bossq"},
     {k:"Rd",t:"Anglais plaisir",d:"Lis ou écoute ce que tu veux en anglais, sans exercice.",m:10,tag:"Plaisir"}];
  }
  var tp=topicFor(d),fmt=FORMATS[d%7],sd=fmt.d.replace("{dur}",st.dur);
  return [
   {k:"R",t:"Révision des cartes",d:"Cartes du jour : vocabulaire des semaines débloquées et erreurs de ton carnet. Dis chaque réponse à voix haute avant de la retourner.",m:10,tag:"Révision"},
   {k:"L",t:"Écoute intensive",d:"Sur "+st.L+" : 1) sans script, note le sujet ; 2) note détails, chiffres et arguments ; 3) lis la transcription ; 4) relève liaisons et contractions ; 5) shadowing de 3 phrases ; 6) réécoute sans lire et résume à voix haute.",m:20,tag:"Écoute"},
   {k:"P",t:"Shadowing",d:"Imite "+st.P+".",m:15,tag:"Prononciation"},
   {k:"S",t:"Oral · "+fmt.n,d:"« "+tp.text+" ». "+sd,m:30,tag:"Oral",pass:tp.pass},
   {k:"Rd",t:"Lecture active",d:"Lis "+st.Rd+". Trie le vocabulaire : indispensable, réutilisable, à laisser de côté. Résume le texte en 3 phrases.",m:15,tag:"Lecture"},
   {k:"W",t:"Écriture",d:"Écris "+st.words+" mots sur le sujet du jour ("+st.genre+"), sans traducteur. Prépare la correction (prompt pour ton IA) ou passe-le dans Write & Improve, réécris tout le texte, puis réutilise 5 expressions à l'oral.",m:20,tag:"Écriture"},
   {k:"G",t:"Grammaire & vocabulaire",d:"Point de la semaine : "+g+". Leçon courte, exercices corrigés, puis le vocabulaire de la semaine (ajouté automatiquement à tes cartes).",m:10,tag:"Précision"}];
}
var qCache={};
function questData(d){
  var key=d+"|"+state.track+"|"+lastAssessBefore(d);if(qCache[key])return qCache[key];
  var st=STAGES[stageIdx(d)],testMult=isTest(d)?1.5:1,normal=!isTest(d)&&!isWeekly(d);
  var list=baseQuests(d).map(function(q){var o=Object.assign({cls:"",note:""},q);o.tags=[];o.xp=Math.round(q.m*st.mult*testMult*(q.boss?1.5:1));if(q.boss)o.tags.push(["boss","Boss"]);if(isTest(d))o.tags.push(["test","Test"]);if(q.pass===2)o.note="Deuxième passage sur ce sujet : version plus longue, sans notes.";if(q.pass>=3)o.note="Troisième passage : réponds spontanément, sans aucune préparation.";return o});
  var fo=normal?focusFor(d):null;
  if(fo&&fo.skill){list.forEach(function(o){if(o.k===fo.skill){o.m+=10;o.cls+=" focus";o.tags.push(["focus","Focus +10 min"]);o.note=(o.note?o.note+" ":"")+"Focus adaptatif (bilan du jour "+fo.from+") : "+FOCUS_TIPS[fo.skill]}else if(o.k==="P"||o.k==="R")o.m-=5})}
  else if(fo&&fo.hard){list.forEach(function(o){if(o.k==="S"){o.tags.push(["focus","Mode difficile"]);o.note=(o.note?o.note+" ":"")+"Mode difficile : aucune note, 2 min de plus, et place 2 corrections de ton carnet."}})}
  var Wc=window.ES_CONTENT&&window.ES_CONTENT.weeks[weekOf(d)];
  if(Wc&&normal){var pi=((d-1)%7)<3?0:1;list.forEach(function(o){if(o.k==="L")o.d="Écoute intégrée « "+Wc.listening[pi].title+" » avec la méthode en 6 étapes : sans texte, questions, transcription, liaisons, dictée, résumé oral.";if(o.k==="P")o.d="Phrase par phrase sur « "+Wc.listening[pi].title+" », puis enregistre ta meilleure imitation.";if(o.k==="Rd")o.d="Lecture intégrée « "+Wc.reading[pi].title+" » : texte, vocabulaire, questions corrigées et résumé en 3 phrases.";if(o.k==="G")o.d="Point de la semaine : "+Wc.grammar.title+". Leçon courte, 8 exercices corrigés, et 15 expressions ajoutées à tes cartes."})}
  qCache[key]=list;return list;
}
function qKey(d,k){return d+"_"+k}
function isDone(d,k){return !!state.quests[qKey(d,k)]}
function doneCount(d){return questData(d).filter(function(q){return isDone(d,q.k)}).length}
function isComplete(d){return doneCount(d)===questData(d).length}
function dayMinutes(d){return questData(d).reduce(function(s,q){return s+(isDone(d,q.k)?q.m:0)},0)}
function dayXP(d){var x=questData(d).reduce(function(s,q){return s+(isDone(d,q.k)?q.xp:0)},0);x+=Math.floor(Math.min(+state.bonus[d]||0,90)/3);if(state.human[d])x+=40;return x}
var PLAN_MIN=0,CORE_MAX=0;(function(){for(var d=1;d<=DAYS;d++){var st=STAGES[stageIdx(d)],tm=isTest(d)?1.5:1;baseQuests(d).forEach(function(q){PLAN_MIN+=q.m;CORE_MAX+=Math.round(q.m*st.mult*tm*(q.boss?1.5:1))})}})();
function totals(){var xp=0,min=0,comp=0;for(var d=1;d<=DAYS;d++){xp+=dayXP(d);min+=dayMinutes(d)+(+state.bonus[d]||0)+(state.human[d]?20:0);if(isComplete(d))comp++}return {xp:xp,min:min,comp:comp}}
function streaks(){var t=todayDay(),d=isComplete(t)?t:t-1,cur=0;while(d>=1&&isComplete(d)){cur++;d--}var best=0,run=0;for(var i=1;i<=DAYS;i++){if(isComplete(i)){run++;if(run>best)best=run}else run=0}return {cur:cur,best:best}}
function rankInfo(xp){var f=xp/CORE_MAX,i=0;for(var j=0;j<RANKS.length;j++)if(f>=RANKS[j][1])i=j;var start=Math.round(RANKS[i][1]*CORE_MAX),end=i<RANKS.length-1?Math.round(RANKS[i+1][1]*CORE_MAX):null;return {i:i,name:RANKS[i][0],end:end,next:i<RANKS.length-1?RANKS[i+1][0]:null,pct:end?Math.min(100,(xp-start)/(end-start)*100):100}}

/* =========== Sauvegarde locale =========== */
function setStatus(){
  var el=$("saveStatus");el.className="pill";
  if(!localOK){el.textContent="! Stockage indisponible : exporte tes données";el.classList.add("warn")}
  else{el.textContent="● Enregistré sur cet appareil";el.classList.add("ok")}
  var rem=$("exportReminder");if(!rem)return;
  var last=state.lastExport?new Date(state.lastExport):null,days=last?Math.floor((Date.now()-last)/86400000):null;
  if(hasProgress(state)&&(days===null||days>=7)){rem.classList.remove("hidden");rem.textContent=days===null?"Tu n'as encore jamais exporté tes données. Fais une sauvegarde : si le navigateur efface ses données, ta progression serait perdue.":"Dernière sauvegarde il y a "+days+" jours. Pense à exporter."}
  else rem.classList.add("hidden");
}
function persist(){state.updatedAt=new Date().toISOString();try{localStorage.setItem(LS_KEY,JSON.stringify(state));localOK=true}catch(e){localOK=false}setStatus()}
function hasProgress(s){return Object.keys(s.quests).length||Object.keys(s.assessments).length||s.errors.length||Object.keys(s.journals).length}

/* =========== Rendu =========== */
function render(){
  selectedDay=clamp(selectedDay,1,DAYS);
  var d=selectedDay,mi=monthIdx(d),M=MONTHS[mi],qs=questData(d),locked=isLocked(d),tdy=todayDay(),off=rawDayOffset(),T=totals(),st=streaks(),rank=rankInfo(T.xp);
  var done=doneCount(d),mins=dayMinutes(d),budget=qs.reduce(function(s,q){return s+q.m},0),test=isTest(d),weekly=isWeekly(d);

  $("rankName").textContent=rank.name;$("rankSub").textContent=RANK_SUB[rank.i];$("rankProgress").style.width=rank.pct+"%";
  $("rankXP").textContent=T.xp.toLocaleString("fr-FR")+(rank.end?" / "+rank.end.toLocaleString("fr-FR"):"")+" XP";
  $("nextRank").textContent=rank.next?"Prochain : "+rank.next:"Rang max";
  $("todayStat").textContent=tdy;$("dayProgress").style.width=(T.comp/DAYS*100)+"%";
  $("daySub").textContent=off<1?"Début le "+fmtDate(startD()):off>DAYS?"Campagne terminée · "+T.comp+" jours complets":T.comp+" jour"+(T.comp>1?"s":"")+" complet"+(T.comp>1?"s":"")+" sur "+tdy+" écoulé"+(tdy>1?"s":"");
  var h=T.min/60;$("hoursStat").textContent=h.toLocaleString("fr-FR",{maximumFractionDigits:1});$("hoursProgress").style.width=Math.min(100,h/600*100)+"%";
  $("hoursSub").textContent="Séances ≈ "+Math.round(PLAN_MIN/60)+" h · l'immersion et les conversations complètent jusqu'à 600 h";
  $("streakStat").textContent=st.cur;$("streakSub").textContent="Record : "+st.best+" jour"+(st.best>1?"s":"");$("xpStat").textContent="XP total : "+T.xp.toLocaleString("fr-FR");

  var b=$("dayBanner");b.classList.toggle("boss",weekly);b.classList.toggle("test",test);
  $("bannerEyebrow").textContent=test?(d===DAYS?"Évaluation finale":"Test mensuel · fin du mois "+(mi+1)):weekly?"Jour léger · semaine "+weekOf(d):"Séance · mois "+(mi+1)+" · semaine "+weekOf(d);
  $("bannerDay").textContent="DAY "+pad(d,3);$("phaseTitle").textContent=M.title;
  $("bossPill").classList.toggle("hidden",!weekly);$("testPill").classList.toggle("hidden",!test);
  if(test)$("topicWrap").innerHTML="Aujourd'hui : <em>les 4 compétences, mesurées dans les mêmes conditions</em>";
  else if(weekly)$("topicWrap").innerHTML="Aujourd'hui : <em>épreuve orale et bilan de la semaine</em>";
  else{var tp=topicFor(d);$("topicWrap").innerHTML='Sujet : <em>'+esc(tp.text)+'</em>'+(tp.pass>1?' <span class="muted tiny">(passage '+tp.pass+')</span>':'')+' <span class="muted">· '+esc(FORMATS[d%7].n)+'</span>'}
  $("grammarLine").textContent=GRAMMAR[weekOf(d)-1];
  $("dateLine").textContent=fmtDate(dateOf(d))+(d===tdy&&off>=1&&off<=DAYS?" · aujourd'hui":"")+" · "+budget+" min";
  $("prevDay").disabled=d<=1;$("nextDay").disabled=d>=DAYS;

  var ln=$("lockNotice");if(locked){ln.classList.remove("hidden");ln.textContent="Jour verrouillé : il s'ouvre le "+fmtDate(dateOf(d))+". Active le mode libre dans les réglages pour avancer plus vite, sans doubler la charge."}else ln.classList.add("hidden");
  var fo=(!test&&!weekly)?focusFor(d):null,fn=$("focusNotice");
  if(fo&&!locked){fn.classList.remove("hidden");fn.textContent=fo.hard?"Bilan du jour "+fo.from+" : tout est à 4 ou plus. L'oral passe en mode difficile.":"Bilan du jour "+fo.from+" : ta compétence la plus faible est « "+SKILL_NAMES[fo.skill]+" » ("+fo.score+"/5). Elle reçoit 10 min de plus, prises sur le shadowing et la révision."}else fn.classList.add("hidden");

  $("questCount").textContent=done+" / "+qs.length;$("questProgress").style.width=(done/qs.length*100)+"%";
  $("minutesGoal").textContent=mins+" / "+budget+" min";
  $("questXP").textContent="+"+qs.reduce(function(s,q){return s+(isDone(d,q.k)?0:q.xp)},0)+" XP restants";
  $("quests").innerHTML=qs.map(function(q,i){var dn=isDone(d,q.k);return '<div class="quest '+(dn?"done ":"")+q.cls+'"><input type="checkbox" id="q_'+q.k+'" data-k="'+q.k+'" '+(dn?"checked ":"")+(locked?"disabled":"")+'><div><label class="quest-title" for="q_'+q.k+'">'+esc(q.t)+'</label><div class="quest-desc">'+esc(q.d)+(q.note?'<span class="note">'+esc(q.note)+'</span>':'')+'</div><span class="tag">'+esc(q.tag)+' · '+q.m+' min</span>'+q.tags.map(function(t){return '<span class="tag '+t[0]+'">'+esc(t[1])+'</span>'}).join("")+'</div><div class="quest-side"><span class="xp">+'+q.xp+' XP</span>'+(locked?"":'<button class="btn small '+(dn?"ghost":"primary")+'" data-act="'+q.k+'">'+(dn?"Revoir":"Ouvrir")+'</button>')+(locked||dn?"":'<button class="btn small ghost" data-timer="'+i+'" aria-label="Minuteur : '+esc(q.t)+'">▶ '+q.m+' min</button>')+'</div></div>'}).join("");
  $("immersionMin").value=state.bonus[d]||0;$("immersionMin").disabled=locked;$("humanDone").checked=!!state.human[d];$("humanDone").disabled=locked;

  var a=state.assessments[String(d)];
  for(var i=0;i<5;i++)$("sc"+i).value=a?a.scores[i]:3;
  $("reflection").value=a?(a.reflection||""):"";$("feltLevel").value=a&&a.felt?a.felt:M.lvl.replace("−","");
  $("assessmentStatus").textContent=a?"Bilan enregistré pour le jour "+d+".":weekly?"Jour d'épreuve : c'est le moment de faire ton bilan.":"Aucun bilan pour ce jour.";
  $("assessPanel").style.borderColor=weekly&&!a?"var(--amber-line)":"";
  renderAdvice();renderChart();renderTests();

  $("phasePill").textContent="MOIS "+pad(mi+1)+" · "+M.lvl;$("phaseHeading").textContent=M.title;$("phaseDescription").textContent=M.desc;$("workTarget").textContent=M.work[state.track];
  $("phaseLevels").innerHTML=MONTHS.map(function(x,j){var s=j*30+1,e=j*30+30,pr=d<s?0:d>e?100:(d-s+1)/30*100;return '<div class="level-row'+(j===mi?" now":"")+'"><span>'+x.lvl+'</span><div class="progress"><span style="width:'+pr+'%"></span></div><span class="muted num">'+s+'–'+e+'</span></div>'}).join("");
  var cd=0;$("candoList").innerHTML=M.cando.map(function(c,j){var k=mi+"_"+j,on=!!state.cando[k];if(on)cd++;return '<label><input type="checkbox" data-cando="'+k+'" '+(on?"checked":"")+'><span>'+esc(c)+'</span></label>'}).join("");
  $("candoCount").textContent="("+cd+"/3 validés)";

  $("startDate").value=state.startDate;$("track").value=state.track;$("freeMode").checked=state.freeMode;
  $("journalDay").textContent="J"+d;$("journal").value=state.journals[String(d)]||"";$("customGoal").value=state.goals[String(d)]||"";$("journalStatus").textContent="";

  var html="";for(var x=1;x<=DAYS;x++){var c=[],n=doneCount(x),tot=questData(x).length;if(x===d)c.push("current");if(n===tot)c.push("done");else if(n>0)c.push("partial");else if(x<tdy&&off>=1)c.push("missed");if(isLocked(x))c.push("locked");if(x===tdy&&off>=1&&off<=DAYS)c.push("today");if(isTest(x))c.push("testd");else if(isWeekly(x))c.push("bossd");html+='<button class="day-cell '+c.join(" ")+'" data-day="'+x+'" aria-label="Jour '+x+(isTest(x)?", test mensuel":isWeekly(x)?", épreuve":"")+', '+n+' sur '+tot+'">'+x+'</button>'}
  $("dayMap").innerHTML=html;
  renderErrors();renderScenarios();setStatus();ensureCards();
  if(ws.day&&ws.day!==d)closeWorkshop();
}
function renderAdvice(){
  var d=selectedDay,el=$("adaptiveAdvice"),ref=state.assessments[String(d)]?d:lastAssessBefore(d+1);
  if(!ref){el.textContent="Fais ton premier bilan au jour 7 pour activer l'adaptation.";return}
  var sc=state.assessments[String(ref)].scores,min=Math.min.apply(null,sc);
  el.textContent="Bilan du jour "+ref+" (oral "+sc[0]+", écoute "+sc[1]+", lecture "+sc[2]+", écriture "+sc[3]+", précision "+sc[4]+"). "+(min>=4?"Mode difficile jusqu'au jour "+Math.min(DAYS,ref+7)+". Fais valider ce ressenti par une vraie personne ou par le test mensuel.":"Focus « "+SKILL_NAMES[SKILLS[sc.indexOf(min)]]+" » des jours "+(ref+1)+" à "+Math.min(DAYS,ref+7)+" : 10 min de plus sur le bloc correspondant.");
}
function renderChart(){
  var ks=Object.keys(state.assessments).map(Number).sort(function(a,b){return a-b}),box=$("chartBox");
  if(!ks.length){box.innerHTML='<p class="muted tiny">La courbe apparaîtra après ton premier bilan.</p>';return}
  var W=640,H=180,L=34,R=14,Tp=12,B=28,x=function(d){return L+(d-1)/(DAYS-1)*(W-L-R)},y=function(v){return Tp+(5-v)/4*(H-Tp-B)};
  var avg=function(sc){return sc.reduce(function(a,b){return a+b},0)/5};
  var s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Évolution des bilans hebdomadaires">';
  for(var v=1;v<=5;v++)s+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+y(v)+'" y2="'+y(v)+'" stroke="#1c2a3b"/><text x="'+(L-8)+'" y="'+(y(v)+4)+'" fill="#8ea3bb" font-size="11" text-anchor="end" font-family="JetBrains Mono,monospace">'+v+'</text>';
  MONTHS.forEach(function(m,j){var sx=x(j*30+1);s+='<line x1="'+sx+'" x2="'+sx+'" y1="'+Tp+'" y2="'+(H-B)+'" stroke="#23364b" stroke-dasharray="2 3"/>';if(j%2===0)s+='<text x="'+(sx+3)+'" y="'+(H-10)+'" fill="#62788f" font-size="10" font-family="JetBrains Mono,monospace">M'+(j+1)+'</text>'});
  function line(fn,color,dash,w){var p=ks.map(function(k){return x(k)+","+y(fn(state.assessments[String(k)].scores))});return p.length>1?'<polyline fill="none" stroke="'+color+'" stroke-width="'+w+'"'+(dash?' stroke-dasharray="'+dash+'"':'')+' points="'+p.join(" ")+'"/>':''}
  s+=line(function(sc){return sc[0]},"#fbbf24","4 3",1.5);
  s+=line(avg,"#38bdf8",null,2);
  ks.forEach(function(k,i){var last=i===ks.length-1;s+='<circle cx="'+x(k)+'" cy="'+y(avg(state.assessments[String(k)].scores))+'" r="'+(last?5:3)+'" fill="'+(last?"#7dd3fc":"#38bdf8")+'"/>'});
  box.innerHTML=s+'</svg><div class="legend" style="margin-top:4px"><span><i style="background:#38bdf8;border:0;height:3px"></i>Moyenne des 5 compétences</span><span><i style="background:#fbbf24;border:0;height:3px"></i>Expression orale</span></div>';
}
function renderTests(){
  var d=selectedDay,form=$("testForm");
  if(isTest(d)){form.classList.remove("hidden");var t=state.tests[String(d)]||{};$("tSpeak").value=t.speak!=null?t.speak:"";$("tHes").value=t.hes!=null?t.hes:"";$("tListen").value=t.listen!=null?t.listen:"";$("tRead").value=t.read!=null?t.read:"";$("tWords").value=t.words!=null?t.words:"";$("tErr").value=t.err!=null?t.err:"";$("tNote").value=t.note||"";$("testStatus").textContent=state.tests[String(d)]?"Test du mois "+(monthIdx(d)+1)+" enregistré.":"";$("testPanel").style.borderColor="var(--violet-line)"}
  else{form.classList.add("hidden");$("testPanel").style.borderColor=""}
  var rows=[["Parole continue (s)","speak",1],["Hésitations longues","hes",-1],["Écoute (%)","listen",1],["Lecture (%)","read",1],["Écriture (mots)","words",1],["Erreurs / 100 mots","epc",-1]];
  var cols=[];for(var m=1;m<=10;m++)cols.push(m*30);
  var get=function(day,key){var t=state.tests[String(day)];if(!t)return null;if(key==="epc")return t.words&&t.err!=null?Math.round(t.err/t.words*1000)/10:null;return t[key]!=null?t[key]:null};
  var h='<table><thead><tr><th>Indicateur</th>'+cols.map(function(c,i){return '<th>M'+(i+1)+'</th>'}).join("")+'</tr></thead><tbody>';
  rows.forEach(function(r){h+='<tr><td>'+r[0]+'</td>';var prev=null;cols.forEach(function(c){var v=get(c,r[1]),cls="";if(v!=null&&prev!=null&&v!==prev)cls=((v-prev)*r[2]>0)?"up":"down";h+='<td class="'+cls+'">'+(v==null?'<span class="muted">·</span>':esc(v))+'</td>';if(v!=null)prev=v});h+='</tr>'});
  h+='</tbody></table>';
  var notes=cols.filter(function(c){return state.tests[String(c)]&&state.tests[String(c)].note}).map(function(c){return '<div>M'+(c/30)+' : '+esc(state.tests[String(c)].note)+'</div>'}).join("");
  $("testTable").innerHTML=h+(notes?'<div class="tiny muted" style="margin-top:8px"><strong>Erreurs récurrentes</strong>'+notes+'</div>':'');
}
var reviewIds=[];
function renderErrors(){
  $("errCount").textContent=state.errors.length;
  var list=state.errors.slice().reverse();
  $("errList").innerHTML=list.length?'<div class="err-cols" style="padding:0 10px"><div class="colhead">Mon erreur</div><div class="colhead">Correction</div><div class="colhead">Nouvelle phrase</div></div>'+list.map(function(e){return '<div class="err'+(reviewIds.indexOf(e.id)>=0?" review":"")+'"><div class="err-cols"><div class="wrong">'+esc(e.wrong)+'</div><div class="right">'+esc(e.right)+'</div><div class="sent">'+esc(e.sentence||"—")+'</div><div class="meta">'+esc(e.cat)+(e.day?' · jour '+esc(e.day):'')+' · révisée '+e.reviews+' fois</div></div><button class="btn small ghost" data-err="'+esc(e.id)+'" aria-label="Supprimer cette erreur">×</button></div>'}).join(""):'<p class="muted tiny">Ton carnet est vide. Ajoute les erreurs repérées à la réécoute, ou envoie-les ici depuis le correcteur.</p>';
  $("reviewDone").classList.toggle("hidden",!reviewIds.length);
}
function addError(e){state.errors.push({id:uid(),wrong:String(e.wrong).slice(0,400),right:String(e.right||"").slice(0,400),sentence:String(e.sentence||"").slice(0,400),cat:e.cat||"grammaire",day:selectedDay,reviews:0});persist();renderErrors()}

/* =========== Minuteur =========== */
var tm={day:0,k:"",total:0,left:0,endAt:0,running:false,iv:null,lock:null,ac:null};
function fmtT(s){s=Math.max(0,Math.ceil(s));return pad(Math.floor(s/60))+":"+pad(s%60)}
function startTimer(i){var q=questData(selectedDay)[i];stopTimer(true);tm.day=selectedDay;tm.k=q.k;tm.total=q.m*60;tm.left=tm.total;tm.running=true;tm.endAt=Date.now()+tm.left*1000;
  try{tm.ac=tm.ac||new (window.AudioContext||window.webkitAudioContext)()}catch(e){}
  try{if(navigator.wakeLock)navigator.wakeLock.request("screen").then(function(l){tm.lock=l}).catch(function(){})}catch(e){}
  $("timerName").textContent="Jour "+tm.day+" · "+q.t;$("timerBar").classList.remove("hidden");$("timerValidate").classList.add("hidden");$("timerPause").classList.remove("hidden");$("timerPause").textContent="Pause";tm.iv=setInterval(tick,250);tick()}
function tick(){if(tm.running)tm.left=(tm.endAt-Date.now())/1000;$("timerTime").textContent=fmtT(tm.left);$("timerProgress").style.width=((1-tm.left/tm.total)*100)+"%";if(tm.running&&tm.left<=0){tm.running=false;clearInterval(tm.iv);$("timerPause").classList.add("hidden");$("timerValidate").classList.remove("hidden");beep()}}
function beep(){try{var ac=tm.ac;if(!ac)return;[0,.35,.7].forEach(function(t){var o=ac.createOscillator(),g=ac.createGain();o.frequency.value=880;g.gain.setValueAtTime(.0001,ac.currentTime+t);g.gain.exponentialRampToValueAtTime(.2,ac.currentTime+t+.02);g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+t+.25);o.connect(g).connect(ac.destination);o.start(ac.currentTime+t);o.stop(ac.currentTime+t+.3)})}catch(e){}}
function stopTimer(silent){clearInterval(tm.iv);tm.running=false;try{tm.lock&&tm.lock.release()}catch(e){}tm.lock=null;if(!silent)$("timerBar").classList.add("hidden")}
$("timerPause").addEventListener("click",function(){if(tm.running){tm.running=false;tm.left=(tm.endAt-Date.now())/1000;this.textContent="Reprendre"}else{tm.running=true;tm.endAt=Date.now()+tm.left*1000;this.textContent="Pause"}});
$("timerStop").addEventListener("click",function(){stopTimer(false)});
$("timerValidate").addEventListener("click",function(){state.quests[qKey(tm.day,tm.k)]=1;persist();stopTimer(false);render()});

/* =========== Prompts pour IA externe =========== */
function levelNow(){return MONTHS[monthIdx(todayDay())].lvl.replace("−","")}
function showPrompt(text,statusEl){
  var box=$("promptBox"),out=$("promptOut");out.value=text;box.classList.remove("hidden");
  function fallback(){out.focus();out.select();statusEl.textContent="Sélectionné : copie-le avec Ctrl+C ou un appui long."}
  try{navigator.clipboard.writeText(text).then(function(){statusEl.textContent="Copié. Colle-le dans ton assistant IA."}).catch(fallback)}catch(e){fallback()}
}
$("corrInput").addEventListener("input",function(){var n=wordCount(this.value);$("corrWords").textContent=n+" mot"+(n>1?"s":"")});
$("corrBtn").addEventListener("click",function(){
  var txt=$("corrInput").value.trim();if(wordCount(txt)<5){$("corrStatus").textContent="Écris au moins une ou deux phrases.";return}
  var p="Act as a strict but supportive English coach. I am a French speaker, my level is about "+levelNow()+" and I am aiming for C1. Below is a "+$("corrKind").value+" I produced.\n\n"+
  "1. Correct it without changing my intended meaning.\n"+
  "2. For each important correction, explain in French the grammar, word choice, collocation or register issue.\n"+
  "3. Separate necessary corrections from optional stylistic improvements.\n"+
  "4. For each necessary correction, give me a new short example sentence that uses the correct form in another context.\n"+
  "5. Give me a more natural version of the whole text at "+$("corrTarget").value+" level.\n"+
  "6. Finish with five short exercises based on my mistakes, and tell me in French the single priority I should work on.\n\n"+
  "My text:\n\"\"\"\n"+txt+"\n\"\"\"";
  showPrompt(p,$("corrStatus"));
});
var SCEN=[
 {id:"topic",n:"Sujet du jour",role:function(){return 'my English conversation partner. We discuss this topic: "'+topicFor(todayDay()).text+'". Ask follow-up questions that make me explain, compare and justify.'}},
 {id:"daily",n:"Conversation du quotidien",role:function(){return "my English conversation partner. Ask me questions about everyday life, my studies, my work and my plans."}},
 {id:"interview",n:"Entretien d'embauche",role:function(){return "an English-speaking recruiter. Conduct a realistic job interview with me for a data analyst position, including behavioural questions. Do not give me the answer before I try."}},
 {id:"phd",n:"Entretien de thèse",role:function(){return "a professor interviewing me for a funded PhD position in applied econometrics. Ask about my research proposal, methods, data and motivation, and push me to be precise."}},
 {id:"jury",n:"Jury de soutenance",role:function(){return "a demanding but fair thesis committee member. Ask me critical questions about my master's thesis in econometrics: identification strategy, data limits, robustness, contribution."}},
 {id:"seminar",n:"Questions de séminaire",role:function(){return "a seminar participant who has just watched my research presentation. Ask me probing, sometimes sceptical questions."}},
 {id:"debate",n:"Débat",role:function(){return "a debate partner. First ask me to choose a contemporary issue and state my view, then take the opposite side and push back with counter-arguments."}},
 {id:"meeting",n:"Réunion de travail",role:function(){return "a colleague in a project meeting. Ask me for updates, disagree politely on priorities and negotiate deadlines."}}
];
var curScen="topic";
try{curScen=localStorage.getItem(LS_CHAT)||"topic"}catch(e){}
function renderScenarios(){var sel=$("chatScenario");if(!sel.options.length)sel.innerHTML=SCEN.map(function(s){return '<option value="'+s.id+'">'+esc(s.n)+'</option>'}).join("");sel.value=curScen;if(!sel.value){curScen="topic";sel.value="topic"}}
$("chatScenario").addEventListener("change",function(){curScen=this.value;try{localStorage.setItem(LS_CHAT,curScen)}catch(e){}});
$("chatBtn").addEventListener("click",function(){
  var s=SCEN.filter(function(x){return x.id===curScen})[0]||SCEN[0];
  var p="Act as "+s.role()+"\n\nMy English level is about "+levelNow()+" and I am aiming for C1. Speak in natural English, slightly above my level. Ask me one question at a time and wait for my answer. Keep your turns short (2 to 4 sentences).\n\n"+
  "After each of my answers: correct my most important mistakes (maximum 3), explain each one briefly in French, give me a more natural B2/C1 version of my answer, then continue the conversation with a follow-up question. Gradually make the conversation more difficult. Do not switch to French except for the explanations.\n\nStart now with your first question.";
  showPrompt(p,$("chatStatus"));
});
$("chatEndBtn").addEventListener("click",function(){
  var p="Let's stop the conversation here. Please give me a review of everything I wrote or said in this conversation:\n1. My recurring mistakes, most frequent first. For each one: my wrong form, the correct form, a short explanation in French, and a new example sentence.\n2. Five natural C1 phrases I could have used in this conversation.\n3. Five short exercises based on my mistakes.\n4. In French: my strengths and the single priority I should work on next.";
  showPrompt(p,$("chatStatus"));
});
function setTab(which){var c=which==="corr";$("tabCorr").setAttribute("aria-selected",String(c));$("tabChat").setAttribute("aria-selected",String(!c));$("paneCorr").classList.toggle("hidden",!c);$("paneChat").classList.toggle("hidden",c)}
$("tabCorr").addEventListener("click",function(){setTab("corr")});
$("tabChat").addEventListener("click",function(){setTab("chat")});

/* =========== Activités intégrées =========== */
var CONTENT=window.ES_CONTENT||{weeks:{},tests:{}};
(function shuffleOptions(){var seed=7;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
  function mix(q){var correct=q[1][q[2]],o=q[1].slice();for(var i=o.length-1;i>0;i--){var j=Math.floor(rnd()*(i+1));var t=o[i];o[i]=o[j];o[j]=t}q[1]=o;q[2]=o.indexOf(correct)}
  function all(item){if(item&&item.questions)item.questions.forEach(mix)}
  Object.keys(CONTENT.weeks).forEach(function(w){var W=CONTENT.weeks[w];W.listening.forEach(all);W.reading.forEach(all)});
  Object.keys(CONTENT.tests).forEach(function(t){all(CONTENT.tests[t].listening);all(CONTENT.tests[t].reading)})})();
function weekContent(d){return CONTENT.weeks[weekOf(d)]||null}
function posInWeek(d){return ((d-1)%7)+1}
function partIdx(d){return posInWeek(d)<=3?0:1}
function todayISO(){return isoDate(new Date())}
function addDaysISO(n){var t=new Date();t.setDate(t.getDate()+n);return isoDate(t)}
var prefs={voice:"",rate:1,sr:true,lang:"en-GB"};
try{Object.assign(prefs,JSON.parse(localStorage.getItem("englishSystem_prefs")||"{}"))}catch(e){}
function savePrefs(){try{localStorage.setItem("englishSystem_prefs",JSON.stringify(prefs))}catch(e){}}
function toast(msg){var t=$("toast");t.textContent=msg;t.classList.add("on");clearTimeout(toast.tm);toast.tm=setTimeout(function(){t.classList.remove("on")},2600)}
function autoDone(d,k,msg){if(isLocked(d)||isDone(d,k))return;state.quests[qKey(d,k)]=1;persist();render();toast(msg||"Bloc validé automatiquement ✓")}
function norm(s){return String(s==null?"":s).toLowerCase().replace(/[’‘`]/g,"'").replace(/[.,!?;:"]/g,"").replace(/\s+/g," ").trim()}

/* ---- Synthèse vocale ---- */
var TTS={ok:"speechSynthesis" in window,voices:[]};
function loadVoices(){if(!TTS.ok)return;TTS.voices=speechSynthesis.getVoices().filter(function(v){return /^en(-|_|$)/i.test(v.lang)});fillVoiceSelect()}
if(TTS.ok){loadVoices();try{speechSynthesis.addEventListener("voiceschanged",loadVoices)}catch(e){speechSynthesis.onvoiceschanged=loadVoices}}
function fillVoiceSelect(){var sel=$("voiceSel");if(!sel)return;var cur=prefs.voice;sel.innerHTML='<option value="">Automatique</option>'+TTS.voices.map(function(v){return '<option value="'+esc(v.name)+'">'+esc(v.name+" ("+v.lang+")")+'</option>'}).join("");sel.value=cur}
function pickVoice(idx){if(!TTS.voices.length)loadVoices();var vs=TTS.voices;if(!vs.length)return null;
  var lang=function(v){return v.lang.replace("_","-")};
  var pref=vs.filter(function(v){return lang(v).indexOf(prefs.lang)===0});var pool=pref.length?pref:vs;
  var first=(prefs.voice&&vs.filter(function(v){return v.name===prefs.voice})[0])||pool[0];
  if(!idx)return first;
  var others=pref.filter(function(v){return v.name!==first.name});
  if(!others.length)others=vs.filter(function(v){return v.name!==first.name});
  return others.length?others[(idx-1)%others.length]:first}
var keepU=[],ttsUnlocked=false,isIOS=/iP(hone|ad|od)/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
function unlockTTS(){if(ttsUnlocked||!TTS.ok)return;ttsUnlocked=true;try{var u=new SpeechSynthesisUtterance(" ");u.volume=0;keepU.push(u);speechSynthesis.speak(u)}catch(e){}}
document.addEventListener("touchend",unlockTTS,{once:true,passive:true});document.addEventListener("click",unlockTTS,{once:true});
function speak(text,opt){opt=opt||{};if(!TTS.ok){toast("La synthèse vocale n'est pas disponible sur ce navigateur.");return}
  var done=false;function fin(){if(done)return;done=true;clearTimeout(wd);opt.onend&&opt.onend()}
  var u=new SpeechSynthesisUtterance(text);u.lang=prefs.lang;u.rate=opt.rate||prefs.rate;u.volume=1;var v=pickVoice(opt.voice||0);if(v){u.voice=v;u.lang=v.lang}if(opt.voice){var v0=pickVoice(0);if(!v||!v0||v.name===v0.name)u.pitch=opt.voice%2?0.75:1.3}
  u.onend=fin;u.onerror=function(e){if(e&&e.error==="not-allowed")toast("Touche à nouveau ▶ : Safari demande un geste pour lancer la voix.");fin()};
  keepU.push(u);if(keepU.length>60)keepU.shift();
  var words=String(text).split(/\s+/).length,wd=setTimeout(fin,(words*0.55/(u.rate||1)+4)*1000);
  try{speechSynthesis.speak(u);if(isIOS)speechSynthesis.resume()}catch(e){fin()}}
function stopSpeak(){if(TTS.ok&&(speechSynthesis.speaking||speechSynthesis.pending))speechSynthesis.cancel()}
function speakLines(lines,onDone){var busy=TTS.ok&&(speechSynthesis.speaking||speechSynthesis.pending);stopSpeak();var spk={},n=0;lines.forEach(function(l){if(!(l[0] in spk))spk[l[0]]=n++});var i=0;function next(){if(i>=lines.length){onDone&&onDone();return}var l=lines[i++];speak(l[1],{voice:spk[l[0]],onend:next})}if(busy)setTimeout(next,200);else next()}
function splitSentences(text){return (String(text).match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g)||[]).map(function(s){return s.trim()}).filter(function(s){return s.split(/\s+/).length>=3})}
function sentencesOf(item){var out=[];item.lines.forEach(function(l){splitSentences(l[1]).forEach(function(s){out.push(s)})});return out}

/* ---- Stockage audio (IndexedDB) ---- */
var idb=null;
function db(){if(idb)return idb;idb=new Promise(function(res,rej){try{var r=indexedDB.open("englishSystemAudio",1);r.onupgradeneeded=function(){var d=r.result;var st=d.createObjectStore("rec",{keyPath:"id"});st.createIndex("day","day")};r.onsuccess=function(){res(r.result)};r.onerror=function(){rej(r.error)}}catch(e){rej(e)}});return idb}
function recPut(o){return db().then(function(d){return new Promise(function(res,rej){var tx=d.transaction("rec","readwrite");tx.objectStore("rec").put(o);tx.oncomplete=function(){res()};tx.onerror=function(){rej(tx.error)}})})}
function recDel(id){return db().then(function(d){return new Promise(function(res){var tx=d.transaction("rec","readwrite");tx.objectStore("rec").delete(id);tx.oncomplete=function(){res()}})})}
function recAll(){return db().then(function(d){return new Promise(function(res){var out=[];var c=d.transaction("rec").objectStore("rec").openCursor();c.onsuccess=function(){var cur=c.result;if(cur){out.push(cur.value);cur.continue()}else res(out)};c.onerror=function(){res(out)}})}).catch(function(){return []})}
function recByDay(day){return recAll().then(function(a){return a.filter(function(r){return r.day===day}).sort(function(x,y){return x.created<y.created?-1:1})})}

/* ---- Enregistreur ---- */
var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
var FILLERS=/\b(um+|uh+|erm+|er|hmm+|euh+|ah+|uhm)\b/gi;
function fmtDur(s){s=Math.round(s);return Math.floor(s/60)+" min "+pad(s%60)+" s"}
function makeRecorder(box,o){
  var canRec=!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&window.MediaRecorder);
  box.innerHTML='<div class="rec-box"><div class="action-row"><button class="btn rec-btn" data-r="start">● Enregistrer</button><button class="btn hidden" data-r="stop">■ Arrêter</button><span class="num rec-time">00:00</span><span class="rec-level"><span></span></span></div><div class="tiny muted rec-live"></div><div class="rec-list"></div></div>';
  var q=function(s){return box.querySelector(s)},st=null;
  if(!canRec){q(".rec-live").textContent="L'enregistrement n'est pas disponible sur ce navigateur. Utilise le dictaphone de ton téléphone.";q('[data-r="start"]').disabled=true}
  function list(){recByDay(o.day).then(function(rs){rs=rs.filter(function(r){return !o.k||r.k===o.k});var el=q(".rec-list");if(!rs.length){el.innerHTML='<p class="tiny muted">Aucun enregistrement pour ce bloc.</p>';return}
    el.innerHTML="";rs.forEach(function(r){var div=document.createElement("div");div.className="rec-item";var url=URL.createObjectURL(r.blob);
      div.innerHTML='<div class="action-row" style="justify-content:space-between"><strong class="tiny">'+esc(r.label||"Prise")+' · '+new Date(r.created).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})+'</strong><span class="tiny muted num">'+fmtDur(r.dur)+' · parole '+fmtDur(r.speak)+' · '+r.pauses+' pause(s) longue(s)'+(r.wpm?' · '+r.wpm+' mots/min':'')+(r.fillers?' · '+r.fillers+' hésitation(s) « euh »':'')+'</span></div><audio controls preload="none" src="'+url+'"></audio><textarea class="rec-tr" placeholder="Transcription (modifiable)">'+esc(r.transcript||"")+'</textarea><div class="action-row"><button class="btn small" data-c="corr">Envoyer au correcteur</button><button class="btn small ghost" data-c="del">Supprimer</button></div>';
      div.querySelector('[data-c="del"]').onclick=function(){recDel(r.id).then(list)};
      div.querySelector('[data-c="corr"]').onclick=function(){$("corrInput").value=div.querySelector(".rec-tr").value;$("corrKind").value="transcript of spoken English";$("corrInput").dispatchEvent(new Event("input"));setTab("corr");$("coach").scrollIntoView({behavior:"smooth"});toast("Transcription placée dans le correcteur")};
      div.querySelector(".rec-tr").onchange=function(){r.transcript=this.value;r.words=wordCount(this.value);r.wpm=r.speak>5&&r.words?Math.round(r.words/(r.speak/60)):null;recPut(r)};
      el.appendChild(div)})})}
  list();
  q('[data-r="start"]').onclick=function(){
    stopSpeak();
    navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
      var mime=["audio/webm;codecs=opus","audio/webm","audio/mp4","audio/ogg"].filter(function(m){return MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(m)})[0];
      var mr=new MediaRecorder(stream,mime?{mimeType:mime}:undefined),chunks=[];
      st={stream:stream,mr:mr,t0:Date.now(),silent:0,lastLoud:Date.now(),pauses:0,inPause:false,finals:[],interim:""};
      mr.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data)};
      mr.onstop=function(){var dur=(Date.now()-st.t0)/1000,blob=new Blob(chunks,{type:mr.mimeType||mime||"audio/webm"});var tr=(st.finals.join(" ")+" "+st.interim).trim();var speakS=Math.max(0,dur-st.silent);var words=wordCount(tr);
        var rec={id:uid(),day:o.day,k:o.k||"",label:o.label||"",created:Date.now(),dur:dur,speak:speakS,pauses:st.pauses,transcript:tr,words:words,wpm:speakS>5&&words?Math.round(words/(speakS/60)):null,fillers:(tr.match(FILLERS)||[]).length,blob:blob};
        recPut(rec).then(function(){list();o.onSaved&&o.onSaved(rec)}).catch(function(){toast("Impossible d'enregistrer l'audio sur cet appareil.")});
        try{st.ac.close()}catch(e){}stream.getTracks().forEach(function(t){t.stop()});st=null};
      try{var ac=new (window.AudioContext||window.webkitAudioContext)(),src=ac.createMediaStreamSource(stream),an=ac.createAnalyser();an.fftSize=1024;src.connect(an);st.ac=ac;var buf=new Float32Array(an.fftSize),last=performance.now();
        (function loop(){if(!st)return;an.getFloatTimeDomainData(buf);var sum=0;for(var i=0;i<buf.length;i++)sum+=buf[i]*buf[i];var rms=Math.sqrt(sum/buf.length),now=performance.now(),dt=(now-last)/1000;last=now;
          var lv=q(".rec-level span");if(lv)lv.style.width=Math.min(100,rms*600)+"%";
          if(rms<0.012){st.silent+=dt;if(!st.inPause&&Date.now()-st.lastLoud>2000){st.inPause=true;st.pauses++}}else{st.lastLoud=Date.now();st.inPause=false}
          q(".rec-time").textContent=fmtT((Date.now()-st.t0)/1000);requestAnimationFrame(loop)})()}catch(e){}
      if(SR&&prefs.sr){try{var r=new SR();r.lang=prefs.lang;r.continuous=true;r.interimResults=true;st.sr=r;
        r.onresult=function(e){var interim="";for(var i=e.resultIndex;i<e.results.length;i++){if(e.results[i].isFinal)st.finals.push(e.results[i][0].transcript.trim());else interim+=e.results[i][0].transcript}st.interim=interim;q(".rec-live").textContent=(st.finals.slice(-2).join(" ")+" "+interim).trim()};
        r.onend=function(){if(st&&st.sr===r){try{r.start()}catch(e){}}};r.onerror=function(ev){if(ev.error==="not-allowed"||ev.error==="service-not-allowed"){st&&(st.sr=null);q(".rec-live").textContent="Transcription automatique indisponible : l'audio est quand même enregistré."}};r.start()}catch(e){}}
      else q(".rec-live").textContent=SR?"Transcription automatique désactivée dans les réglages.":"Transcription automatique indisponible sur ce navigateur : l'audio est quand même enregistré.";
      mr.start(1000);q('[data-r="start"]').classList.add("hidden");q('[data-r="stop"]').classList.remove("hidden");box.querySelector(".rec-box").classList.add("live");
    }).catch(function(){q(".rec-live").textContent="Accès au micro refusé. Autorise le micro dans les réglages du navigateur pour ce site."});
  };
  q('[data-r="stop"]').onclick=function(){if(!st)return;var s=st;var sr=s.sr;s.sr=null;try{sr&&sr.stop()}catch(e){}setTimeout(function(){try{s.mr.stop()}catch(e){}},400);q('[data-r="stop"]').classList.add("hidden");q('[data-r="start"]').classList.remove("hidden");box.querySelector(".rec-box").classList.remove("live");q(".rec-level span").style.width="0"};
}

/* ---- Cartes (répétition espacée) ---- */
function ensureCards(){
  state.srs=state.srs||{};var maxW=weekOf(state.freeMode?Math.max(todayDay(),selectedDay):todayDay()),changed=false;
  for(var w=1;w<=maxW;w++){var W=CONTENT.weeks[w];if(!W)continue;W.vocab.forEach(function(v,i){var id="v"+w+"_"+i;if(!state.srs[id]){state.srs[id]={f:v[1],b:v[0],ex:v[2],src:"Semaine "+w,due:"",iv:0,ease:2.5,reps:0,isNew:1};changed=true}})}
  var ids={};state.errors.forEach(function(e){var id="e"+e.id;ids[id]=1;if(!state.srs[id]){state.srs[id]={f:"Corrige : "+e.wrong,b:e.right||"(ajoute la correction dans le carnet)",ex:e.sentence||"",src:"Carnet",due:"",iv:0,ease:2.5,reps:0,isNew:1};changed=true}});
  Object.keys(state.srs).forEach(function(id){if(id[0]==="e"&&!ids[id]){delete state.srs[id];changed=true}});
  if(changed){try{localStorage.setItem(LS_KEY,JSON.stringify(state))}catch(e){}}
}
function dueCards(){var t=todayISO(),news=0,out=[];Object.keys(state.srs||{}).forEach(function(id){var c=state.srs[id];if(c.isNew){if(news<15){out.push(id);news++}}else if(c.due<=t)out.push(id)});return out}
function grade(id,g){var c=state.srs[id];if(!c)return;if(g===0){c.iv=0;c.ease=Math.max(1.3,c.ease-.2);c.due=todayISO();c.isNew=0;c.reps=0}else{if(g===1){c.iv=Math.max(1,Math.round((c.iv||1)*1.2));c.ease=Math.max(1.3,c.ease-.15)}else if(g===2){c.iv=c.reps===0?1:c.reps===1?3:Math.round(c.iv*c.ease)}else{c.iv=c.reps===0?3:Math.round(Math.max(3,c.iv*c.ease*1.3));c.ease+=.1}c.reps++;c.isNew=0;c.due=addDaysISO(c.iv)}persist()}
function actCards(body,d,k){
  ensureCards();var queue=dueCards(),done=0;
  function show(){if(!queue.length){body.innerHTML='<div class="notice info">'+(done?"Session terminée : "+done+" carte(s) révisée(s).":"Aucune carte à réviser aujourd'hui.")+' Prochaine révision demain.</div><p class="tiny muted">'+Object.keys(state.srs).length+' cartes au total (vocabulaire des semaines débloquées et erreurs du carnet).</p>';autoDone(d,k,"Révision terminée ✓");return}
    var id=queue[0],c=state.srs[id];
    body.innerHTML='<div class="card-srs"><div class="tiny muted">'+esc(c.src)+' · '+queue.length+' restante(s)</div><div class="card-front">'+esc(c.f)+'</div><div class="card-back hidden"><div class="card-ans">'+esc(c.b)+' <button class="btn small ghost" data-s="say" aria-label="Écouter">🔊</button></div>'+(c.ex?'<div class="tiny muted">'+esc(c.ex)+'</div>':'')+'</div><p class="tiny muted card-hint">Dis la réponse à voix haute, puis retourne la carte.</p><div class="action-row" data-s="flipRow"><button class="btn primary" data-s="flip">Voir la réponse</button></div><div class="action-row hidden" data-s="grades"><button class="btn danger small" data-g="0">À revoir</button><button class="btn small" data-g="1">Difficile</button><button class="btn small primary" data-g="2">Bien</button><button class="btn small" data-g="3">Facile</button></div></div>';
    body.querySelector('[data-s="flip"]').onclick=function(){body.querySelector(".card-back").classList.remove("hidden");body.querySelector('[data-s="flipRow"]').classList.add("hidden");body.querySelector('[data-s="grades"]').classList.remove("hidden");speak(c.b.replace(/^Corrige : /,""))};
    body.querySelector('[data-s="say"]').onclick=function(){speak(c.b)};
    body.querySelectorAll("[data-g]").forEach(function(b){b.onclick=function(){var g=+b.dataset.g;grade(id,g);queue.shift();if(g===0)queue.push(id);else done++;show()}});
  }
  show();
}

/* ---- Questions à choix ---- */
function quizHTML(qs,name){return qs.map(function(q,i){return '<fieldset class="mcq"><legend>'+(i+1)+'. '+esc(q[0])+'</legend>'+q[1].map(function(o,j){return '<label><input type="radio" name="'+name+i+'" value="'+j+'"> '+esc(o)+'</label>'}).join("")+'</fieldset>'}).join("")}
function quizCheck(root,qs,name){var ok=0,ans=0;qs.forEach(function(q,i){var sel=root.querySelector('input[name="'+name+i+'"]:checked');var fs=root.querySelectorAll("fieldset.mcq")[i];fs.classList.remove("good","bad");if(sel){ans++;if(+sel.value===q[2]){ok++;fs.classList.add("good")}else fs.classList.add("bad")}});return {ok:ok,ans:ans,total:qs.length}}

/* ---- Écoute ---- */
function actListening(body,d,k,item,mode){
  var test=mode==="test",plays=0,sents=sentencesOf(item);
  var dict=test?[]:sents.filter(function(s){var n=s.split(/\s+/).length;return n>=5&&n<=14}).slice(0,3);
  body.innerHTML='<h3>'+esc(item.title)+'</h3>'+(test?'<div class="notice">Test : 2 écoutes maximum, sans transcription. Réponds ensuite aux questions.</div>':'')+
   '<div class="step"><div class="step-n">1</div><div><strong>Écoute sans texte</strong> <span class="tiny muted">Note le sujet et les idées principales.</span><div class="action-row" style="margin-top:6px"><button class="btn primary" data-a="play">▶ Écouter</button><button class="btn ghost" data-a="stop">■ Stop</button><select data-a="lrate" aria-label="Vitesse de lecture" style="width:auto"><option value="0.75">Vitesse 0,75</option><option value="0.9">Vitesse 0,9</option><option value="1">Vitesse 1</option><option value="1.15">Vitesse 1,15</option><option value="1.3">Vitesse 1,3</option><option value="1.5">Vitesse 1,5</option></select><span class="tiny muted" data-a="plays"></span></div></div></div>'+
   '<div class="step"><div class="step-n">2</div><div><strong>Questions</strong>'+quizHTML(item.questions,"lq")+'<div class="action-row"><button class="btn" data-a="check">Vérifier</button><span class="tiny" data-a="score"></span></div></div></div>'+
   (test?'':'<div class="step"><div class="step-n">3</div><div><strong>Transcription</strong> <span class="tiny muted">Repère ce que tu n\'avais pas compris. Clique une phrase pour la réécouter.</span><div><button class="btn small" data-a="tr">Afficher la transcription</button></div><div class="transcript hidden" data-a="trbox">'+item.lines.map(function(l){return '<p><b>'+esc(l[0])+' :</b> '+splitSentences(l[1]).map(function(s){return '<span class="sent" tabindex="0">'+esc(s)+'</span>'}).join(" ")+'</p>'}).join("")+'</div></div></div>'+
   '<div class="step"><div class="step-n">4</div><div><strong>Liaisons et contractions</strong> <span class="tiny muted">Dans la transcription, souligne mentalement les formes réduites (I\'m, don\'t, gonna…) et réécoute-les à vitesse lente.</span><div class="action-row" style="margin-top:6px"><button class="btn small" data-a="slow">▶ Réécouter à 0,7</button></div></div></div>'+
   '<div class="step"><div class="step-n">5</div><div><strong>Dictée</strong> <span class="tiny muted">Écoute chaque phrase et écris-la.</span>'+dict.map(function(s,i){return '<div class="dict"><button class="btn small ghost" data-dict="'+i+'">▶</button><input type="text" data-din="'+i+'" autocomplete="off" spellcheck="false" aria-label="Phrase '+(i+1)+'"><div class="tiny dict-res" data-dres="'+i+'"></div></div>'}).join("")+'<button class="btn small" data-a="dcheck">Corriger la dictée</button></div></div>'+
   '<div class="step"><div class="step-n">6</div><div><strong>Résumé oral</strong> <span class="tiny muted">Sans lire, résume l\'écoute à voix haute en 1 minute.</span><div data-a="rec"></div></div></div>');
  var q=function(s){return body.querySelector(s)};
  q('[data-a="play"]').onclick=function(){if(test&&plays>=2){toast("2 écoutes maximum pour le test.");return}plays++;q('[data-a="plays"]').textContent="Écoute n°"+plays;speakLines(item.lines.map(function(l){return [l[0],l[1]]}))};
  q('[data-a="stop"]').onclick=stopSpeak;
  var lr=q('[data-a="lrate"]');lr.value=String(prefs.rate);if(!lr.value)lr.value="1";lr.onchange=function(){prefs.rate=+this.value;savePrefs();$("rateSel").value=this.value};
  q('[data-a="check"]').onclick=function(){var r=quizCheck(body,item.questions,"lq");q('[data-a="score"]').textContent=r.ok+" / "+r.total+(r.ans<r.total?" (réponds à toutes les questions)":"");
    if(r.ans===r.total){if(test){var t=state.tests[String(d)]=state.tests[String(d)]||{};t.listen=Math.round(r.ok/r.total*100);persist();renderTests();autoDone(d,k,"Score d'écoute enregistré : "+t.listen+" %")}else autoDone(d,k)}};
  if(test){var rb=q('[data-a="rec"]');if(rb)rb.parentNode.parentNode.remove();return}
  q('[data-a="tr"]').onclick=function(){q('[data-a="trbox"]').classList.toggle("hidden")};
  q('[data-a="trbox"]').onclick=function(e){var s=e.target.closest(".sent");if(s){stopSpeak();speak(s.textContent)}};
  q('[data-a="slow"]').onclick=function(){stopSpeak();var lines=item.lines;var i=0;(function n(){if(i>=lines.length)return;speak(lines[i++][1],{rate:.7,onend:n})})()};
  body.querySelectorAll("[data-dict]").forEach(function(b){b.onclick=function(){stopSpeak();speak(dict[+b.dataset.dict],{rate:.85})}});
  q('[data-a="dcheck"]').onclick=function(){dict.forEach(function(s,i){var inp=body.querySelector('[data-din="'+i+'"]'),res=body.querySelector('[data-dres="'+i+'"]');var exp=norm(s).split(" "),got=norm(inp.value).split(" ");var html=exp.map(function(w,j){return got[j]===w?'<span class="ok">'+esc(w)+'</span>':'<span class="ko">'+esc(w)+'</span>'}).join(" ");var okc=exp.filter(function(w,j){return got[j]===w}).length;res.innerHTML=okc+"/"+exp.length+" mots · "+html})};
  makeRecorder(q('[data-a="rec"]'),{day:d,k:"L",label:"Résumé de l'écoute"});
}

/* ---- Shadowing ---- */
function actShadow(body,d,k,item){
  var sents=sentencesOf(item),cur=0,auto=false;
  body.innerHTML='<h3>Shadowing · '+esc(item.title)+'</h3><p class="tiny muted">Écoute une phrase, puis répète-la en imitant le rythme et l\'intonation. Le mode automatique laisse un temps de répétition après chaque phrase.</p><div class="shadow-sent" aria-live="polite"></div><div class="action-row"><button class="btn" data-a="prev">←</button><button class="btn primary" data-a="say">▶ Phrase</button><button class="btn" data-a="next">→</button><button class="btn ghost" data-a="auto">▶ Mode automatique</button><span class="tiny muted num" data-a="pos"></span></div><div class="field" style="margin-top:10px"><label>Vitesse</label><select data-a="rate"><option value="0.7">0,7 (lent)</option><option value="0.85">0,85</option><option value="1" selected>1 (naturel)</option><option value="1.15">1,15</option><option value="1.3">1,3 (rapide)</option></select></div><h3>Enregistre ta meilleure imitation</h3><div data-a="rec"></div>';
  var q=function(s){return body.querySelector(s)},rate=1;
  function show(){q(".shadow-sent").textContent=sents[cur];q('[data-a="pos"]').textContent=(cur+1)+" / "+sents.length;if(cur===sents.length-1)autoDone(d,k)}
  q('[data-a="rate"]').onchange=function(){rate=+this.value};
  q('[data-a="say"]').onclick=function(){stopSpeak();speak(sents[cur],{rate:rate})};
  q('[data-a="prev"]').onclick=function(){if(cur>0){cur--;show()}};
  q('[data-a="next"]').onclick=function(){if(cur<sents.length-1){cur++;show()}};
  q('[data-a="auto"]').onclick=function(){if(auto){auto=false;stopSpeak();this.textContent="▶ Mode automatique";return}auto=true;this.textContent="■ Arrêter";var btn=this;
    (function loop(){if(!auto)return;var t0=Date.now();show();speak(sents[cur],{rate:rate,onend:function(){var gap=Math.max(1500,(Date.now()-t0)*1.3);setTimeout(function(){if(!auto)return;if(cur<sents.length-1){cur++;loop()}else{auto=false;btn.textContent="▶ Mode automatique"}},gap)}})})()};
  show();makeRecorder(q('[data-a="rec"]'),{day:d,k:"P",label:"Shadowing"});
}

/* ---- Lecture ---- */
function actReading(body,d,k,item,mode){
  var test=mode==="test";
  body.innerHTML='<h3>'+esc(item.title)+'</h3>'+(test?'<div class="notice">Test : lis le texte une fois, puis réponds sans dictionnaire.</div>':'')+'<div class="reading">'+item.text.split("\n\n").map(function(p){return '<p>'+esc(p)+'</p>'}).join("")+'</div><div class="action-row"><button class="btn small ghost" data-a="read">🔊 Écouter le texte</button><button class="btn small ghost" data-a="stop">■</button></div>'+
   (!test&&item.gloss?'<details style="margin-top:10px"><summary>Vocabulaire du texte</summary><ul class="gloss">'+item.gloss.map(function(g){return '<li><b>'+esc(g[0])+'</b> — '+esc(g[1])+'</li>'}).join("")+'</ul></details>':'')+
   '<h3 style="margin-top:14px">Questions</h3>'+quizHTML(item.questions,"rq")+'<div class="action-row"><button class="btn" data-a="check">Vérifier</button><span class="tiny" data-a="score"></span></div>'+
   (test?'':'<div class="field" style="margin-top:12px"><label>Résume le texte en 3 phrases (en anglais)</label><textarea data-a="sum"></textarea></div>');
  var q=function(s){return body.querySelector(s)};
  q('[data-a="read"]').onclick=function(){stopSpeak();var ps=splitSentences(item.text.replace(/\n+/g," "));var i=0;(function n(){if(i<ps.length)speak(ps[i++],{onend:n})})()};
  q('[data-a="stop"]').onclick=stopSpeak;
  var key="r"+d;state.writing=state.writing||{};var sum=q('[data-a="sum"]');if(sum){sum.value=(state.writing[key]||{}).text||"";sum.onchange=function(){state.writing[key]={text:sum.value};persist()}}
  q('[data-a="check"]').onclick=function(){var r=quizCheck(body,item.questions,"rq");q('[data-a="score"]').textContent=r.ok+" / "+r.total+(r.ans<r.total?" (réponds à toutes les questions)":"");
    if(r.ans===r.total){if(test){var t=state.tests[String(d)]=state.tests[String(d)]||{};t.read=Math.round(r.ok/r.total*100);persist();renderTests();autoDone(d,k,"Score de lecture enregistré : "+t.read+" %")}else autoDone(d,k)}};
}

/* ---- Grammaire et vocabulaire ---- */
function actGrammar(body,d,k,W){
  var G=W.grammar;
  body.innerHTML='<h3>'+esc(G.title)+'</h3><div class="lesson">'+esc(G.lesson).replace(/\n/g,"<br>")+'</div><h3 style="margin-top:14px">Exercices</h3><div class="gex">'+G.ex.map(function(e,i){var parts=e[0].split("___");return '<div class="gline"><span>'+(i+1)+'. '+esc(parts[0])+'</span><input type="text" data-g="'+i+'" autocomplete="off" spellcheck="false" aria-label="Réponse '+(i+1)+'"><span>'+esc(parts[1]||"")+'</span><span class="tiny gres" data-gr="'+i+'"></span></div>'}).join("")+'</div><div class="action-row"><button class="btn" data-a="check">Corriger</button><span class="tiny" data-a="score"></span></div>'+
   '<h3 style="margin-top:16px">Vocabulaire de la semaine</h3><p class="tiny muted">Ces expressions sont déjà dans tes cartes de révision. Écoute-les et fais une phrase personnelle à voix haute avec chacune.</p><div class="vocab">'+W.vocab.map(function(v,i){return '<div class="vrow"><button class="btn small ghost" data-v="'+i+'" aria-label="Écouter">🔊</button><div><b>'+esc(v[0])+'</b> — '+esc(v[1])+'<div class="tiny muted">'+esc(v[2])+'</div></div></div>'}).join("")+'</div>';
  body.querySelector('[data-a="check"]').onclick=function(){var ok=0,ans=0;G.ex.forEach(function(e,i){var inp=body.querySelector('[data-g="'+i+'"]'),res=body.querySelector('[data-gr="'+i+'"]');var v=norm(inp.value);var accepted=e[1].split("|").map(function(a){return a==="Ø"?"":norm(a)});if(v!==""||accepted.indexOf("")>=0)ans++;var good=accepted.indexOf(v)>=0;if(good)ok++;inp.classList.toggle("good",good);inp.classList.toggle("bad",!good);res.textContent=good?"✓":"→ "+(e[1].split("|")[0]==="Ø"?"(rien)":e[1].split("|")[0])});
    body.querySelector('[data-a="score"]').textContent=ok+" / "+G.ex.length;state.gram=state.gram||{};state.gram[d]=ok;persist();if(ans>=G.ex.length-1)autoDone(d,k)};
  body.querySelectorAll("[data-v]").forEach(function(b){b.onclick=function(){var v=W.vocab[+b.dataset.v];stopSpeak();speak(v[0],{onend:function(){speak(v[2])}})}});
}

/* ---- Écriture ---- */
function actWriting(body,d,k,target,prompt,mode){
  state.writing=state.writing||{};var w=state.writing["w"+d]||{text:"",rewrite:""};var test=mode==="test";
  body.innerHTML='<p class="tiny muted">'+esc(prompt)+'</p><div class="field"><label>Premier jet, sans traducteur'+(test?'':'')+'</label><textarea data-a="t" style="min-height:160px"></textarea><span class="tiny num" data-a="wc"></span></div><div class="action-row"><button class="btn" data-a="corr">Préparer la correction</button></div>'+(test?'':'<div class="field" style="margin-top:12px"><label>Version réécrite après correction (sans recopier : réécris toi-même)</label><textarea data-a="r" style="min-height:120px"></textarea></div>');
  var t=body.querySelector('[data-a="t"]'),r=body.querySelector('[data-a="r"]'),wc=body.querySelector('[data-a="wc"]');t.value=w.text||"";if(r)r.value=w.rewrite||"";
  function upd(){var n=wordCount(t.value);wc.textContent=n+" / "+target+" mots";wc.style.color=n>=target?"var(--green)":"var(--muted)"}
  function save(){state.writing["w"+d]={text:t.value,rewrite:r?r.value:""};persist();var n=wordCount(t.value);if(test){var ts=state.tests[String(d)]=state.tests[String(d)]||{};ts.words=n;renderTests()}if(n>=target&&(test||(r&&wordCount(r.value)>=target*0.8)))autoDone(d,k,test?"Essai enregistré ("+n+" mots)":"Écriture validée ✓")}
  t.oninput=upd;t.onchange=save;if(r)r.onchange=save;upd();
  body.querySelector('[data-a="corr"]').onclick=function(){save();$("corrInput").value=t.value;$("corrKind").value="written text";$("corrInput").dispatchEvent(new Event("input"));setTab("corr");$("coach").scrollIntoView({behavior:"smooth"});toast("Texte placé dans l'outil de correction")};
}

/* ---- Oral ---- */
function actSpeaking(body,d,k,q,mode){
  body.innerHTML='<p class="tiny muted">'+esc(q.d)+'</p>'+(q.note?'<p class="tiny" style="color:var(--cyan)">'+esc(q.note)+'</p>':'')+'<div data-a="rec"></div><div class="action-row" style="margin-top:8px"><button class="btn small ghost" data-a="first">▶ Écouter mon tout premier enregistrement</button></div>';
  makeRecorder(body.querySelector('[data-a="rec"]'),{day:d,k:"S",label:mode==="test"?"Test oral":q.t,onSaved:function(rec){
    if(mode==="test"){var t=state.tests[String(d)]=state.tests[String(d)]||{};t.speak=Math.max(t.speak||0,Math.round(rec.speak));t.hes=(t.hes||0)+rec.pauses+rec.fillers;persist();renderTests();toast("Test oral : mesures ajoutées au tableau")}
    if(rec.dur>=60)autoDone(d,k)}});
  body.querySelector('[data-a="first"]').onclick=function(){recAll().then(function(a){if(!a.length){toast("Aucun enregistrement pour l'instant.");return}a.sort(function(x,y){return x.created-y.created});var au=new Audio(URL.createObjectURL(a[0].blob));au.play().catch(function(){});toast("Jour "+a[0].day+" · "+fmtDur(a[0].dur))})};
}

/* ---- Atelier ---- */
var ws={day:0,k:""};
var LEVEL_LINKS=[["British Council — écoutes B1","https://learnenglish.britishcouncil.org/free-resources/listening/b1"],["British Council — lectures B1","https://learnenglish.britishcouncil.org/free-resources/reading/b1"],["BBC Learning English","https://www.bbc.co.uk/learningenglish"],["Cambridge English","https://www.cambridgeenglish.org/"]];
function linksHTML(ls){return '<div class="ai-links">'+ls.map(function(l){return '<a class="btn small ghost" href="'+l[1]+'" target="_blank" rel="noopener">'+esc(l[0])+' ↗</a>'}).join("")+'</div>'}
function openActivity(d,k){ws={day:d,k:k};renderWorkshop();$("workshop").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"})}
function closeWorkshop(){stopSpeak();ws={day:0,k:""};$("workshop").classList.add("hidden")}
function renderWorkshop(){
  var d=ws.day,k=ws.k,panel=$("workshop"),body=$("wsBody");if(!d){panel.classList.add("hidden");return}
  stopSpeak();var q=questData(d).filter(function(x){return x.k===k})[0];if(!q){closeWorkshop();return}
  panel.classList.remove("hidden");$("wsTitle").textContent=q.t;$("wsMeta").textContent="Jour "+d+" · "+q.m+" min";
  var W=weekContent(d),test=isTest(d),T=CONTENT.tests[d],st=STAGES[stageIdx(d)],target=parseInt(st.words,10)||100;
  var fallback='<div class="notice info">Le contenu intégré couvre pour l\'instant les jours 1 à 60. Pour ce jour, utilise ces ressources, puis valide le bloc.</div>'+linksHTML(LEVEL_LINKS);
  if(test){
    if(k==="L")return T?actListening(body,d,k,T.listening,"test"):(body.innerHTML=fallback);
    if(k==="Rd")return T?actReading(body,d,k,T.reading,"test"):(body.innerHTML=fallback);
    if(k==="S")return actSpeaking(body,d,k,q,"test");
    if(k==="W")return actWriting(body,d,k,TEST_WORDS[monthIdx(d)],q.d,"test");
    body.innerHTML='<p class="tiny muted">'+esc(q.d)+'</p><button class="btn" id="goTest">Ouvrir le tableau de suivi</button>';$("goTest").onclick=function(){$("testPanel").scrollIntoView({behavior:"smooth"})};return;
  }
  if(k==="R")return actCards(body,d,k);
  if(k==="S")return actSpeaking(body,d,k,q);
  if(k==="B"){body.innerHTML='<p class="tiny muted">'+esc(q.d)+'</p><button class="btn" id="goAssess">Aller à l\'évaluation</button>';$("goAssess").onclick=function(){$("assessPanel").scrollIntoView({behavior:"smooth"})};return}
  if(isWeekly(d)&&k==="Rd"){body.innerHTML='<p class="tiny muted">Lis ou écoute ce que tu veux. Quelques idées :</p>'+linksHTML([["BBC Learning English","https://www.bbc.co.uk/learningenglish"],["Project Gutenberg","https://www.gutenberg.org/"],["British Council — lectures","https://learnenglish.britishcouncil.org/free-resources/reading/b1"]])+'<button class="btn small" style="margin-top:10px" id="plaisirOk">C\'est fait</button>';$("plaisirOk").onclick=function(){autoDone(d,k)};return}
  if(k==="W")return actWriting(body,d,k,target,q.d);
  if(!W){body.innerHTML=fallback;return}
  if(k==="L")return actListening(body,d,k,W.listening[partIdx(d)]);
  if(k==="P")return actShadow(body,d,k,W.listening[partIdx(d)]);
  if(k==="Rd")return actReading(body,d,k,W.reading[partIdx(d)]);
  if(k==="G")return actGrammar(body,d,k,W);
  body.innerHTML=fallback;
}
$("wsClose").addEventListener("click",closeWorkshop);
$("quests").addEventListener("click",function(e){var b=e.target.closest("[data-act]");if(b)openActivity(selectedDay,b.dataset.act)});
$("voiceSel").addEventListener("change",function(){prefs.voice=this.value;savePrefs();speak("This is my English voice.")});
$("rateSel").addEventListener("change",function(){prefs.rate=+this.value;savePrefs()});
$("langSel").addEventListener("change",function(){prefs.lang=this.value;savePrefs()});
$("srToggle").addEventListener("change",function(){prefs.sr=this.checked;savePrefs()});
$("rateSel").value=String(prefs.rate);$("langSel").value=prefs.lang;$("srToggle").checked=prefs.sr;fillVoiceSelect();
setTimeout(function(){if(TTS.ok&&!TTS.voices.length)$("srNote").textContent="Aucune voix anglaise trouvée. Sur iPhone : Réglages → Accessibilité → Contenu énoncé → Voix → Anglais, puis télécharge une voix (par exemple Daniel ou Samantha).";},2500);
if(!SR)$("srNote").textContent="La transcription automatique n'est pas disponible sur ce navigateur (essaie Chrome ou Edge).";


/* =========== Événements =========== */
$("quests").addEventListener("change",function(e){var k=e.target.dataset.k;if(!k)return;var key=qKey(selectedDay,k);if(e.target.checked)state.quests[key]=1;else delete state.quests[key];persist();render()});
$("quests").addEventListener("click",function(e){var b=e.target.closest("[data-timer]");if(b)startTimer(+b.dataset.timer)});
$("immersionMin").addEventListener("change",function(){var v=clamp(this.value,0,600);if(v)state.bonus[selectedDay]=v;else delete state.bonus[selectedDay];persist();render()});
$("humanDone").addEventListener("change",function(){if(this.checked)state.human[selectedDay]=1;else delete state.human[selectedDay];persist();render()});
$("prevDay").addEventListener("click",function(){selectedDay--;render()});
$("nextDay").addEventListener("click",function(){selectedDay++;render()});
$("todayBtn").addEventListener("click",function(){selectedDay=todayDay();render()});
$("dayMap").addEventListener("click",function(e){var b=e.target.closest("[data-day]");if(b){selectedDay=+b.dataset.day;render();$("dayBanner").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"})}});
$("saveAssessment").addEventListener("click",function(){var sc=[];for(var i=0;i<5;i++)sc.push(clamp($("sc"+i).value,1,5));state.assessments[String(selectedDay)]={scores:sc,felt:$("feltLevel").value,reflection:$("reflection").value,updatedAt:new Date().toISOString()};qCache={};persist();render();$("assessmentStatus").textContent="Bilan enregistré. L'adaptation s'applique dès demain."});
$("saveTest").addEventListener("click",function(){state.tests[String(selectedDay)]={speak:numOrNull($("tSpeak").value,3600),hes:numOrNull($("tHes").value,500),listen:numOrNull($("tListen").value,100),read:numOrNull($("tRead").value,100),words:numOrNull($("tWords").value,3000),err:numOrNull($("tErr").value,500),note:$("tNote").value.trim().slice(0,300)};persist();renderTests();$("testStatus").textContent="Test enregistré."});
$("candoList").addEventListener("change",function(e){var k=e.target.dataset.cando;if(!k)return;if(e.target.checked)state.cando[k]=1;else delete state.cando[k];persist();render()});
$("startDate").addEventListener("change",function(){if(parseISO(this.value)){state.startDate=this.value;persist();selectedDay=todayDay();render()}});
$("track").addEventListener("change",function(){state.track=this.value==="pro"?"pro":"acad";qCache={};persist();render()});
$("freeMode").addEventListener("change",function(){state.freeMode=this.checked;persist();render()});
$("saveJournal").addEventListener("click",function(){var k=String(selectedDay),j=$("journal").value,g=$("customGoal").value.trim();if(j)state.journals[k]=j;else delete state.journals[k];if(g)state.goals[k]=g;else delete state.goals[k];persist();$("journalStatus").textContent="Enregistré pour le jour "+selectedDay+"."});
$("addErr").addEventListener("click",function(){var w=$("errWrong").value.trim();if(!w){$("errStatus").textContent="Écris d'abord ton erreur.";return}addError({wrong:w,right:$("errRight").value.trim(),sentence:$("errSent").value.trim(),cat:$("errCat").value});["errWrong","errRight","errSent"].forEach(function(id){$(id).value=""});$("errStatus").textContent="Ajoutée.";$("errWrong").focus()});
$("errSent").addEventListener("keydown",function(e){if(e.key==="Enter")$("addErr").click()});
$("errList").addEventListener("click",function(e){var b=e.target.closest("[data-err]");if(!b)return;state.errors=state.errors.filter(function(x){return x.id!==b.dataset.err});persist();renderErrors()});
$("reviewBtn").addEventListener("click",function(){if(!state.errors.length){$("errStatus").textContent="Le carnet est vide.";return}reviewIds=state.errors.slice().sort(function(a,b){return a.reviews-b.reviews}).slice(0,5).map(function(e){return e.id});var ids=reviewIds;state.errors.sort(function(a,b){return (ids.indexOf(a.id)>=0)-(ids.indexOf(b.id)>=0)});renderErrors();$("errStatus").textContent="Les 5 erreurs les moins révisées sont en haut. Relis-les à voix haute.";$("errList").scrollTop=0});
$("reviewDone").addEventListener("click",function(){state.errors.forEach(function(e){if(reviewIds.indexOf(e.id)>=0)e.reviews++});reviewIds=[];persist();renderErrors();$("errStatus").textContent="Révision enregistrée."});

function exportJSON(){return JSON.stringify(state,null,2)}
function exportName(){return "english-system-"+isoDate(new Date())+".json"}
function markExported(){state.lastExport=new Date().toISOString();try{localStorage.setItem(LS_KEY,JSON.stringify(state))}catch(e){}setStatus()}
function showJson(){$("jsonOut").value=exportJSON();$("jsonOutBox").classList.remove("hidden")}
function download(){try{var blob=new Blob([exportJSON()],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=exportName();document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url)},2000);markExported();$("importStatus").textContent="Fichier téléchargé : "+exportName()+"."}catch(e){showJson();$("importStatus").textContent="Téléchargement impossible : copie le JSON affiché."}}
$("exportBtn").addEventListener("click",download);
$("shareBtn").addEventListener("click",function(){
  try{var file=new File([exportJSON()],exportName(),{type:"application/json"});
    if(navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],title:"English System",text:"Sauvegarde English System"}).then(function(){markExported();$("importStatus").textContent="Sauvegarde envoyée. Importe-la sur l'autre appareil."}).catch(function(e){if(!e||e.name!=="AbortError")download()});return}
  }catch(e){}
  download();$("importStatus").textContent="Fichier téléchargé. Envoie-le-toi (mail, Drive, messagerie), puis importe-le sur l'autre appareil.";
});
$("copyJson").addEventListener("click",function(){var t=$("jsonOut");try{navigator.clipboard.writeText(t.value).then(function(){$("importStatus").textContent="JSON copié."}).catch(function(){t.select()})}catch(e){t.select()}});
var undoSnap=null;
function offerUndo(label){$("undoLabel").textContent=label;$("undoZone").classList.add("on")}
function doImport(text){var o;try{o=JSON.parse(text)}catch(e){$("importStatus").textContent="Ce fichier n'est pas un JSON valide.";return}if(!o||typeof o!=="object"||!(o.quests||o.assessments)){$("importStatus").textContent="Ce JSON ne ressemble pas à une sauvegarde English System.";return}undoSnap=JSON.stringify(state);state=normalize(o);qCache={};persist();selectedDay=todayDay();render();$("importStatus").textContent="Importé : "+Object.keys(state.quests).length+" blocs validés, "+Object.keys(state.assessments).length+" bilans, "+state.errors.length+" erreurs.";offerUndo("Import réussi.")}
$("importFile").addEventListener("change",function(){var f=this.files&&this.files[0];if(!f)return;var r=new FileReader();r.onload=function(){doImport(String(r.result))};r.onerror=function(){$("importStatus").textContent="Lecture du fichier impossible."};r.readAsText(f);this.value=""});
$("importTextBtn").addEventListener("click",function(){doImport($("importText").value)});
$("undoBtn").addEventListener("click",function(){if(!undoSnap)return;state=normalize(JSON.parse(undoSnap));undoSnap=null;qCache={};persist();render();$("undoZone").classList.remove("on");$("importStatus").textContent="Données précédentes restaurées."});
$("resetBtn").addEventListener("click",function(){$("resetZone").classList.add("on")});
$("resetCancel").addEventListener("click",function(){$("resetZone").classList.remove("on")});
$("resetConfirm").addEventListener("click",function(){undoSnap=JSON.stringify(state);state=defaultState();qCache={};persist();selectedDay=1;render();$("resetZone").classList.remove("on");offerUndo("Données effacées.");$("importStatus").textContent="Tu peux encore annuler tant que la page reste ouverte."});

$("resList").innerHTML=RES.map(function(r){return r.g?'<div class="res-group">'+esc(r.g)+'</div>':'<div class="resource"><strong>'+esc(r.n)+'</strong><p>'+esc(r.d)+'</p><a href="'+r.u+'" target="_blank" rel="noopener">Ouvrir ↗</a></div>'}).join("");

selectedDay=todayDay();
render();
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}
if("serviceWorker" in navigator&&location.protocol!=="file:"){window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})})}
document.addEventListener("visibilitychange",function(){if(!document.hidden)render()});
})();
