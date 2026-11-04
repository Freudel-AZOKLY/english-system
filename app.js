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
function defaultState(){return {v:3,startOffset:0,placementSeen:false,lastExport:"",startDate:isoDate(new Date()),track:"acad",freeMode:false,quests:{},srs:{},writing:{},gram:{},bonus:{},human:{},assessments:{},tests:{},journals:{},goals:{},cando:{},errors:[],updatedAt:""}}
var OLD_ORDER=["L","P","S","G","G","R"];
function normalize(o){
  var s=defaultState();if(!o||typeof o!=="object")return s;
  var ver=Number(o.v)||1;
  ["bonus","human","assessments","tests","journals","goals","cando","srs","writing","gram","games","badges","placement"].forEach(function(k){if(o[k]&&typeof o[k]==="object"&&!Array.isArray(o[k]))s[k]=o[k]});
  if(o.quests&&typeof o.quests==="object"){Object.keys(o.quests).forEach(function(k){var m=/^(\d+)_(\w+)$/.exec(k);if(!m||!o.quests[k])return;var key=m[2];if(ver<3&&/^\d$/.test(key))key=OLD_ORDER[+key]||null;if(key)s.quests[m[1]+"_"+key]=1})}
  if(ver<3){s.cando={};Object.keys(s.assessments).forEach(function(k){var a=s.assessments[k];if(a&&Array.isArray(a.scores)&&a.scores.length===4)a.scores=[a.scores[0],a.scores[1],3,3,a.scores[2]]})}
  if(Array.isArray(o.errors))s.errors=o.errors.filter(function(e){return e&&e.wrong!=null}).slice(0,2000).map(function(e){return {id:String(e.id||uid()),wrong:String(e.wrong).slice(0,400),right:String(e.right||"").slice(0,400),sentence:String(e.sentence||"").slice(0,400),cat:e.cat||"grammaire",day:e.day||null,reviews:Number(e.reviews)||0}});
  if(parseISO(o.startDate))s.startDate=o.startDate;else if(o.createdAt){var d=new Date(o.createdAt);if(!isNaN(d))s.startDate=isoDate(d)}
  if(o.track==="pro"||o.track==="acad")s.track=o.track;
  s.freeMode=!!o.freeMode;s.startOffset=Math.max(0,Math.min(270,parseInt(o.startOffset,10)||0));s.placementSeen=!!o.placementSeen;
  if(typeof o.updatedAt==="string")s.updatedAt=o.updatedAt;if(typeof o.lastExport==="string")s.lastExport=o.lastExport;
  Object.keys(s.assessments).forEach(function(k){var a=s.assessments[k];if(!a||!Array.isArray(a.scores)||a.scores.length!==5)delete s.assessments[k];else a.scores=a.scores.map(function(x){return clamp(x,1,5)})});
  return s;
}
function loadLocal(){try{var raw=localStorage.getItem(LS_KEY)||localStorage.getItem(LS_OLD);return raw?normalize(JSON.parse(raw)):null}catch(e){return null}}
var state=loadLocal()||defaultState();
var localOK=true,selectedDay=1;

/* =========== Calendrier =========== */
function startD(){return parseISO(state.startDate)||new Date()}
function rawDayOffset(){var st=startD(),now=new Date(),t=new Date(now.getFullYear(),now.getMonth(),now.getDate());return Math.round((t-st)/86400000)+1+(state.startOffset||0)}
function todayDay(){return clamp(rawDayOffset(),1,DAYS)}
function dateOf(day){var st=startD();return new Date(st.getFullYear(),st.getMonth(),st.getDate()+day-1-(state.startOffset||0))}
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
function totals(){var xp=0,min=0,comp=0;for(var d=1;d<=DAYS;d++){xp+=dayXP(d);min+=dayMinutes(d)+(+state.bonus[d]||0)+(state.human[d]?20:0);if(isComplete(d))comp++}return {xp:xp+gameXPTotal(),min:min,comp:comp}}
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
function persist(){state.updatedAt=new Date().toISOString();try{localStorage.setItem(LS_KEY,JSON.stringify(state));localOK=true}catch(e){localOK=false}setStatus();if(typeof ghQueue==="function")ghQueue()}
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

  var html="";for(var x=1;x<=DAYS;x++){var c=[],n=doneCount(x),tot=questData(x).length;if(x===d)c.push("current");if(n===tot)c.push("done");else if(n>0)c.push("partial");else if(x<=(state.startOffset||0))c.push("skipped");else if(x<tdy&&off>=1)c.push("missed");if(isLocked(x))c.push("locked");if(x===tdy&&off>=1&&off<=DAYS)c.push("today");if(isTest(x))c.push("testd");else if(isWeekly(x))c.push("bossd");html+='<button class="day-cell '+c.join(" ")+'" data-day="'+x+'" aria-label="Jour '+x+(isTest(x)?", test mensuel":isWeekly(x)?", épreuve":"")+', '+n+' sur '+tot+'">'+x+'</button>'}
  $("dayMap").innerHTML=html;
  renderErrors();renderScenarios();setStatus();ensureCards();
  if(ws.day&&ws.day!==d)closeWorkshop();
  renderArena();checkBadges();updateNext();clearTimeout(render.st);render.st=setTimeout(renderStats,400);
  $("offsetSel").value=String((state.startOffset||0)+1);if(!$("offsetSel").value)$("offsetSel").value="1";
  if(d<=(state.startOffset||0))$("dateLine").textContent="Jour dispensé grâce au test de positionnement · ouvert pour révision";
  var nx=nextUndone(d);$("startSession").textContent=locked?"Jour verrouillé":nx?(done?"▶ Continuer la séance":"▶ Commencer la séance"):"✓ Séance terminée";$("startSession").disabled=locked||!nx;
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
function addError(e){state.errors.push({id:uid(),wrong:String(e.wrong).slice(0,400),right:String(e.right||"").slice(0,400),sentence:String(e.sentence||"").slice(0,400),cat:e.cat||"grammaire",day:selectedDay,reviews:0});ensureCards();persist();renderErrors()}

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
function autoDone(d,k,msg){if(isLocked(d)||isDone(d,k))return;state.quests[qKey(d,k)]=1;persist();render();var n=nextUndone(d);toast((msg||"Bloc validé automatiquement ✓")+(n?"":" · Séance terminée, bravo !"))}
function norm(s){return String(s==null?"":s).toLowerCase().replace(/[’‘`]/g,"'").replace(/[.,!?;:"]/g,"").replace(/\s+/g," ").trim()}

/* ---- Synthèse vocale ---- */
var TTS={ok:"speechSynthesis" in window,voices:[]};
function loadVoices(){if(!TTS.ok)return;TTS.voices=speechSynthesis.getVoices().filter(function(v){return /^en(-|_|$)/i.test(v.lang)});fillVoiceSelect()}
if(TTS.ok){loadVoices();try{speechSynthesis.addEventListener("voiceschanged",loadVoices)}catch(e){speechSynthesis.onvoiceschanged=loadVoices}}
function fillVoiceSelect(){var sel=$("voiceSel");if(!sel)return;var cur=prefs.voice;sel.innerHTML='<option value="">Automatique</option>'+TTS.voices.map(function(v){return '<option value="'+esc(v.name)+'">'+esc(v.name+" ("+v.lang+")")+'</option>'}).join("");sel.value=cur}
function pickVoice(idx,lng){lng=lng||prefs.lang;if(!TTS.voices.length)loadVoices();var vs=TTS.voices;if(!vs.length)return null;
  var lang=function(v){return v.lang.replace("_","-")};
  var pref=vs.filter(function(v){return lang(v).indexOf(lng)===0});var pool=pref.length?pref:vs;
  var first=(lng===prefs.lang&&prefs.voice&&vs.filter(function(v){return v.name===prefs.voice})[0])||pool[0];
  if(!idx)return first;
  var others=pref.filter(function(v){return v.name!==first.name});
  if(!others.length)others=vs.filter(function(v){return v.name!==first.name});
  return others.length?others[(idx-1)%others.length]:first}
var keepU=[],ttsUnlocked=false,isIOS=/iP(hone|ad|od)/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
function unlockTTS(){if(ttsUnlocked||!TTS.ok)return;ttsUnlocked=true;try{var u=new SpeechSynthesisUtterance(" ");u.volume=0;keepU.push(u);speechSynthesis.speak(u)}catch(e){}}
document.addEventListener("touchend",unlockTTS,{once:true,passive:true});document.addEventListener("click",unlockTTS,{once:true});
function speak(text,opt){opt=opt||{};if(!TTS.ok){toast("La synthèse vocale n'est pas disponible sur ce navigateur.");return}
  var done=false;function fin(){if(done)return;done=true;clearTimeout(wd);opt.onend&&opt.onend()}
  var u=new SpeechSynthesisUtterance(text);u.lang=prefs.lang;u.rate=opt.rate||prefs.rate;u.volume=1;var v=pickVoice(opt.voice||0,opt.lang);if(v){u.voice=v;u.lang=v.lang}if(opt.voice){var v0=pickVoice(0,opt.lang);if(!v||!v0||v.name===v0.name)u.pitch=opt.voice%2?0.75:1.3}
  u.onend=fin;u.onerror=function(e){if(e&&e.error==="not-allowed")toast("Touche à nouveau ▶ : Safari demande un geste pour lancer la voix.");fin()};
  keepU.push(u);if(keepU.length>60)keepU.shift();
  var words=String(text).split(/\s+/).length,wd=setTimeout(fin,(words*0.55/(u.rate||1)+4)*1000);
  try{speechSynthesis.speak(u);if(isIOS)speechSynthesis.resume()}catch(e){fin()}}
function stopSpeak(){if(TTS.ok&&(speechSynthesis.speaking||speechSynthesis.pending))speechSynthesis.cancel()}
function speakLines(lines,onDone,lng){var busy=TTS.ok&&(speechSynthesis.speaking||speechSynthesis.pending);stopSpeak();var spk={},n=0;lines.forEach(function(l){if(!(l[0] in spk))spk[l[0]]=n++});var i=0;function next(){if(i>=lines.length){onDone&&onDone();return}var l=lines[i++];speak(l[1],{voice:spk[l[0]],onend:next,lang:lng})}if(busy)setTimeout(next,200);else next()}
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
  state.srs=state.srs||{};var far=todayDay();if(state.freeMode){for(var qk in state.quests){var qd=parseInt(qk,10);if(qd>far)far=qd}}var maxW=weekOf(far),changed=false;
  for(var w=weekOf((state.startOffset||0)+1);w<=maxW;w++){var W=CONTENT.weeks[w];if(!W)continue;W.vocab.forEach(function(v,i){var id="v"+w+"_"+i;if(!state.srs[id]){state.srs[id]={f:v[1],b:v[0],ex:v[2],src:"Semaine "+w,due:"",iv:0,ease:2.5,reps:0,isNew:1};changed=true}})}
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
  var test=mode==="test",plays=0,sents=sentencesOf(item),acc=test?null:accentFor(d),lng=acc?acc[0]:null;
  var dict=test?[]:sents.filter(function(s){var n=s.split(/\s+/).length;return n>=5&&n<=14}).slice(0,3);
  body.innerHTML='<h3>'+esc(item.title)+'</h3>'+(acc?'<p class="tiny" style="color:var(--violet)">Accent de cette écoute : '+acc[1]+'</p>':'')+(test?'<div class="notice">Test : 2 écoutes maximum, sans transcription. Réponds ensuite aux questions.</div>':'')+
   '<div class="step"><div class="step-n">1</div><div><strong>Écoute sans texte</strong> <span class="tiny muted">Note le sujet et les idées principales.</span><div class="action-row" style="margin-top:6px"><button class="btn primary" data-a="play">▶ Écouter</button><button class="btn ghost" data-a="stop">■ Stop</button><select data-a="lrate" aria-label="Vitesse de lecture" style="width:auto"><option value="0.75">Vitesse 0,75</option><option value="0.9">Vitesse 0,9</option><option value="1">Vitesse 1</option><option value="1.15">Vitesse 1,15</option><option value="1.3">Vitesse 1,3</option><option value="1.5">Vitesse 1,5</option></select><span class="tiny muted" data-a="plays"></span></div></div></div>'+
   '<div class="step"><div class="step-n">2</div><div><strong>Questions</strong>'+quizHTML(item.questions,"lq")+'<div class="action-row"><button class="btn" data-a="check">Vérifier</button><span class="tiny" data-a="score"></span></div></div></div>'+
   (test?'':'<div class="step"><div class="step-n">3</div><div><strong>Transcription</strong> <span class="tiny muted">Repère ce que tu n\'avais pas compris. Clique une phrase pour la réécouter.</span><div><button class="btn small" data-a="tr">Afficher la transcription</button></div><div class="transcript hidden" data-a="trbox">'+item.lines.map(function(l){return '<p><b>'+esc(l[0])+' :</b> '+splitSentences(l[1]).map(function(s){return '<span class="sent" tabindex="0">'+esc(s)+'</span>'}).join(" ")+'</p>'}).join("")+'</div></div></div>'+
   '<div class="step"><div class="step-n">4</div><div><strong>Liaisons et contractions</strong> <span class="tiny muted">Dans la transcription, souligne mentalement les formes réduites (I\'m, don\'t, gonna…) et réécoute-les à vitesse lente.</span><div class="action-row" style="margin-top:6px"><button class="btn small" data-a="slow">▶ Réécouter à 0,7</button></div></div></div>'+
   '<div class="step"><div class="step-n">5</div><div><strong>Dictée</strong> <span class="tiny muted">Écoute chaque phrase et écris-la.</span>'+dict.map(function(s,i){return '<div class="dict"><button class="btn small ghost" data-dict="'+i+'">▶</button><input type="text" data-din="'+i+'" autocomplete="off" spellcheck="false" aria-label="Phrase '+(i+1)+'"><div class="tiny dict-res" data-dres="'+i+'"></div></div>'}).join("")+'<button class="btn small" data-a="dcheck">Corriger la dictée</button></div></div>'+
   '<div class="step"><div class="step-n">6</div><div><strong>Résumé oral</strong> <span class="tiny muted">Sans lire, résume l\'écoute à voix haute en 1 minute.</span><div data-a="rec"></div></div></div>');
  var q=function(s){return body.querySelector(s)};
  q('[data-a="play"]').onclick=function(){if(test&&plays>=2){toast("2 écoutes maximum pour le test.");return}plays++;q('[data-a="plays"]').textContent="Écoute n°"+plays;speakLines(item.lines.map(function(l){return [l[0],l[1]]}),null,lng)};
  q('[data-a="stop"]').onclick=stopSpeak;
  var lr=q('[data-a="lrate"]');lr.value=String(prefs.rate);if(!lr.value)lr.value="1";lr.onchange=function(){prefs.rate=+this.value;savePrefs();$("rateSel").value=this.value};
  q('[data-a="check"]').onclick=function(){var r=quizCheck(body,item.questions,"lq");q('[data-a="score"]').textContent=r.ok+" / "+r.total+(r.ans<r.total?" (réponds à toutes les questions)":"");
    if(r.ans===r.total){if(test){var t=state.tests[String(d)]=state.tests[String(d)]||{};t.listen=Math.round(r.ok/r.total*100);persist();renderTests();autoDone(d,k,"Score d'écoute enregistré : "+t.listen+" %")}else autoDone(d,k)}};
  if(test){var rb=q('[data-a="rec"]');if(rb)rb.parentNode.parentNode.remove();return}
  q('[data-a="tr"]').onclick=function(){q('[data-a="trbox"]').classList.toggle("hidden")};
  q('[data-a="trbox"]').onclick=function(e){var s=e.target.closest(".sent");if(s){stopSpeak();speak(s.textContent,{lang:lng})}};
  q('[data-a="slow"]').onclick=function(){stopSpeak();var lines=item.lines;var i=0;(function n(){if(i>=lines.length)return;speak(lines[i++][1],{rate:.7,onend:n,lang:lng})})()};
  body.querySelectorAll("[data-dict]").forEach(function(b){b.onclick=function(){stopSpeak();speak(dict[+b.dataset.dict],{rate:.85,lang:lng})}});
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
  var fallback='<div class="notice info">Pas de contenu intégré pour ce bloc. Utilise ces ressources, puis valide le bloc.</div>'+linksHTML(LEVEL_LINKS);
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


/* =========== Arène de défis =========== */
state.games=state.games||{best:{},xp:{},plays:{}};
function G(){if(!state.games||typeof state.games!=="object")state.games={};var g=state.games;g.best=g.best||{};g.xp=g.xp||{};g.plays=g.plays||{};return g}
function gameXPTotal(){var x=G().xp,s=0;for(var k in x)s+=Math.min(60,+x[k]||0);return s}
var GAMES=[
 {id:"sprint",n:"Sprint de vocabulaire",ic:"⚡",skill:"Vocabulaire",d:"60 secondes pour retrouver un maximum d'expressions anglaises. Les bonnes réponses d'affilée multiplient tes points."},
 {id:"pairs",n:"Oreille fine",ic:"◎",skill:"Prononciation",d:"Ship ou sheep ? Think ou sink ? Les paires de sons qui piègent les francophones, à reconnaître à l'oreille."},
 {id:"flash",n:"Dictée éclair",ic:"≋",skill:"Écoute",d:"Une phrase, de plus en plus vite. Écris ce que tu entends. Trois vies."},
 {id:"jam",n:"Juste une minute",ic:"◷",skill:"Oral",d:"Parle 60 secondes sur un sujet surprise, sans « euh » et sans pause de plus de 2 secondes. Inspiré du jeu radio de la BBC."},
 {id:"order",n:"Phrases en désordre",ic:"⇄",skill:"Grammaire",d:"Remets les mots dans le bon ordre, le plus vite possible. Cinq phrases."},
 {id:"mirror",n:"Miroir de prononciation",ic:"◐",skill:"Prononciation",d:"Écoute une phrase, répète-la : la reconnaissance vocale mesure combien de mots elle a compris."}
];
var PAIRS=[["ship","sheep","i court / ii long"],["live","leave","i court / ii long"],["bit","beat","i court / ii long"],["full","fool","ou court / ou long"],["pull","pool","ou court / ou long"],["think","sink","th / s"],["thin","tin","th / t"],["three","tree","th / t"],["thank","tank","th / t"],["mouth","mouse","th / s"],["hat","at","h aspiré"],["heat","eat","h aspiré"],["hair","air","h aspiré"],["hill","ill","h aspiré"],["hand","and","h aspiré"],["cut","cat","u / a"],["bad","bed","a / è"],["man","men","a / è"],["walk","work","o / eu"],["sheep","cheap","ch / tch"],["wash","watch","ch / tch"],["very","berry","v / b"],["vest","best","v / b"],["right","light","r / l"],["rice","lice","r / l"],["fan","van","f / v"],["sing","sin","ng final"],["thing","thin","ng final"],["law","low","o ouvert / o diphtongue"],["fall","foul","o / aou"]];
function unlockedWeeks(){var w=weekOf(todayDay()),out=[];for(var i=1;i<=w;i++)if(CONTENT.weeks[i])out.push(i);if(!out.length&&CONTENT.weeks[1])out.push(1);return out}
function pool(fn){var out=[];unlockedWeeks().forEach(function(w){fn(CONTENT.weeks[w]).forEach(function(x){out.push(x)})});return out}
function vocabPool(){var v=pool(function(W){return W.vocab});if(v.length<12&&CONTENT.weeks[2])v=v.concat(CONTENT.weeks[2].vocab);return v}
function sentencePool(minW,maxW){var s=[];unlockedWeeks().forEach(function(w){var W=CONTENT.weeks[w];W.listening.forEach(function(it){sentencesOf(it).forEach(function(x){s.push(x)})});W.reading.forEach(function(r){splitSentences(r.text.replace(/\n+/g," ")).forEach(function(x){s.push(x)})})});return s.filter(function(x){var n=x.split(/\s+/).length;return n>=minW&&n<=maxW})}
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function dailyMission(){var t=todayISO(),h=0;for(var i=0;i<t.length;i++)h=(h*31+t.charCodeAt(i))%9973;return GAMES[h%GAMES.length].id}
function finishGame(id,score,unit){var g=G(),t=todayISO();var prev=g.best[id]||0,rec=score>prev;if(rec)g.best[id]=score;g.plays[id]=(g.plays[id]||0)+1;
  var gain=Math.max(2,Math.min(30,Math.round(score)))*(dailyMission()===id?2:1);var before=Math.min(60,g.xp[t]||0);g.xp[t]=(g.xp[t]||0)+gain;var real=Math.min(60,g.xp[t])-before;
  persist();render();renderArena();
  return '<div class="notice '+(rec?"":"info")+'">'+(rec?"Nouveau record ! ":"")+"Score : "+score+(unit?" "+unit:"")+" · meilleur : "+Math.max(prev,score)+(unit?" "+unit:"")+" · +"+real+" XP"+(dailyMission()===id?" (mission du jour, XP doublée)":"")+(real<gain?" (plafond de 60 XP de défis par jour atteint)":"")+'</div>'}
function renderArena(){
  var g=G(),m=dailyMission(),today=Math.min(60,g.xp[todayISO()]||0);
  $("arenaXP").textContent=today+" / 60 XP aujourd'hui";
  $("arenaGrid").innerHTML=GAMES.map(function(x){return '<button class="game-card'+(x.id===m?" mission":"")+'" data-game="'+x.id+'"><span class="game-ic" aria-hidden="true">'+x.ic+'</span><span class="game-n">'+esc(x.n)+'</span><span class="tiny muted">'+esc(x.skill)+(g.best[x.id]?' · record '+g.best[x.id]:'')+'</span>'+(x.id===m?'<span class="tag boss">Mission du jour · XP ×2</span>':'')+'</button>'}).join("");
}
var gameStop=null;
function openGame(id){if(gameStop){try{gameStop()}catch(e){}gameStop=null}stopSpeak();var x=GAMES.filter(function(g){return g.id===id})[0];var box=$("gameBox");box.classList.remove("hidden");
  box.innerHTML='<div class="panel-head"><h3 style="margin:0">'+x.ic+" "+esc(x.n)+'</h3><button class="btn small ghost" data-gx="close">Fermer</button></div><p class="tiny muted">'+esc(x.d)+'</p><div data-gx="body"></div>';
  box.querySelector('[data-gx="close"]').onclick=function(){if(gameStop){try{gameStop()}catch(e){}gameStop=null}stopSpeak();box.classList.add("hidden")};
  var body=box.querySelector('[data-gx="body"]');({sprint:gSprint,pairs:gPairs,flash:gFlash,jam:gJam,order:gOrder,mirror:gMirror})[id](body);box.scrollIntoView({behavior:"smooth",block:"nearest"})}

/* Sprint de vocabulaire */
function gSprint(body){var V=vocabPool();if(V.length<4){body.innerHTML='<p class="tiny">Pas encore assez de vocabulaire débloqué.</p>';return}
  body.innerHTML='<button class="btn primary" data-s="go">Commencer (60 s)</button>';
  body.querySelector('[data-s="go"]').onclick=function(){var score=0,combo=0,end=Date.now()+60000,timer;
    function q(){var t=pick(V),opts=shuffle([t].concat(shuffle(V.filter(function(v){return v[0]!==t[0]})).slice(0,3)));
      body.innerHTML='<div class="game-hud"><span class="num" data-s="t"></span><span class="num">Score '+score+'</span><span class="num">Combo ×'+(1+Math.floor(combo/3))+'</span></div><div class="game-q">'+esc(t[1])+'</div><div class="game-opts">'+opts.map(function(o,i){return '<button class="btn" data-o="'+i+'">'+esc(o[0])+'</button>'}).join("")+'</div>';
      tick();body.querySelectorAll("[data-o]").forEach(function(b){b.onclick=function(){var o=opts[+b.dataset.o];if(o[0]===t[0]){combo++;score+=1+Math.floor(combo/3);b.classList.add("primary")}else{combo=0;b.classList.add("danger")}setTimeout(q,o[0]===t[0]?150:500)}})}
    function tick(){var left=Math.max(0,Math.ceil((end-Date.now())/1000));var el=body.querySelector('[data-s="t"]');if(el)el.textContent=left+" s";if(left<=0)done()}
    function done(){clearInterval(timer);gameStop=null;body.innerHTML=finishGame("sprint",score,"pts")+'<button class="btn" data-s="again">Rejouer</button>';body.querySelector('[data-s="again"]').onclick=function(){gSprint(body);body.querySelector('[data-s="go"]').click()}}
    timer=setInterval(tick,250);gameStop=function(){clearInterval(timer)};q()}}

/* Oreille fine */
function gPairs(body){var rounds=shuffle(PAIRS).slice(0,10),i=0,score=0,miss=[];
  function q(){if(i>=rounds.length){var tips=miss.length?'<p class="tiny">À retravailler : '+miss.map(function(m){return '<b>'+esc(m[0])+' / '+esc(m[1])+'</b> ('+esc(m[2])+')'}).join(", ")+'. Écoute-les sur YouGlish.</p>':"";body.innerHTML=finishGame("pairs",score,"/ 10")+tips+'<button class="btn" data-p="again">Rejouer</button>';body.querySelector('[data-p="again"]').onclick=function(){gPairs(body)};return}
    var p=rounds[i],target=Math.random()<.5?0:1;
    body.innerHTML='<div class="game-hud"><span class="num">Manche '+(i+1)+' / 10</span><span class="num">Score '+score+'</span></div><div class="action-row"><button class="btn primary" data-p="say">🔊 Écouter</button><span class="tiny muted">'+esc(p[2])+'</span></div><div class="game-opts two-opts"><button class="btn big" data-o="0">'+esc(p[0])+'</button><button class="btn big" data-o="1">'+esc(p[1])+'</button></div>';
    var say=function(){stopSpeak();speak(p[target],{rate:.8})};body.querySelector('[data-p="say"]').onclick=say;say();
    body.querySelectorAll("[data-o]").forEach(function(b){b.onclick=function(){var good=+b.dataset.o===target;if(good)score++;else miss.push(p);b.classList.add(good?"primary":"danger");if(!good)body.querySelector('[data-o="'+target+'"]').classList.add("primary");
      body.querySelectorAll("[data-o]").forEach(function(x){x.disabled=true});setTimeout(function(){stopSpeak();speak(p[0],{rate:.8,onend:function(){speak(p[1],{rate:.8})}});setTimeout(function(){i++;q()},good?1800:2600)},300)}})}
  q()}

/* Dictée éclair */
function gFlash(body){var S=shuffle(sentencePool(5,11));if(!S.length){body.innerHTML='<p class="tiny">Contenu indisponible.</p>';return}var i=0,lives=3,score=0,rate=.9;
  function q(){if(lives<=0||i>=S.length){body.innerHTML=finishGame("flash",score,"mots")+'<button class="btn" data-f="again">Rejouer</button>';body.querySelector('[data-f="again"]').onclick=function(){gFlash(body)};return}
    var s=S[i];body.innerHTML='<div class="game-hud"><span class="num">'+"♥".repeat(lives)+"♡".repeat(3-lives)+'</span><span class="num">Vitesse '+rate.toFixed(2).replace(".",",")+'</span><span class="num">Score '+score+'</span></div><div class="action-row"><button class="btn primary" data-f="say">🔊 Écouter (2 fois max)</button></div><input type="text" data-f="in" autocomplete="off" spellcheck="false" placeholder="Écris la phrase…" aria-label="Phrase entendue"><div class="action-row" style="margin-top:8px"><button class="btn" data-f="ok">Valider</button></div><div class="tiny" data-f="res"></div>';
    var plays=0,inp=body.querySelector('[data-f="in"]');var say=function(){if(plays>=2)return;plays++;stopSpeak();speak(s,{rate:rate})};body.querySelector('[data-f="say"]').onclick=say;say();inp.focus();
    function check(){var exp=norm(s).split(" "),got=norm(inp.value).split(" ");var okc=exp.filter(function(w,j){return got[j]===w}).length,pct=okc/exp.length;score+=okc;
      body.querySelector('[data-f="res"]').innerHTML=exp.map(function(w,j){return got[j]===w?'<span class="ok">'+esc(w)+'</span>':'<span class="ko">'+esc(w)+'</span>'}).join(" ")+" · "+Math.round(pct*100)+" %";
      if(pct>=.8)rate=Math.min(1.6,rate+.1);else lives--;body.querySelector('[data-f="ok"]').disabled=true;inp.disabled=true;setTimeout(function(){i++;q()},2200)}
    body.querySelector('[data-f="ok"]').onclick=check;inp.onkeydown=function(e){if(e.key==="Enter")check()}}
  q()}

/* Juste une minute */
var JAM_TOPICS=["Your favourite season","A perfect weekend","Why people learn languages","Your hometown","Technology in your daily life","The best advice you have received","Coffee or tea?","A place you want to visit","What makes a good teacher","Your morning routine","Working from home","A skill you want to learn","Social media","Your favourite food","Cities or the countryside","The importance of sleep","A book or film you liked","Your dream job","Public transport","Why data matters"];
function gJam(body){
  if(!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)){body.innerHTML='<p class="tiny">Micro indisponible sur ce navigateur.</p>';return}
  var topic=pick(JAM_TOPICS);
  body.innerHTML='<div class="game-q">« '+esc(topic)+' »</div><div class="action-row"><button class="btn primary" data-j="go">● Parler 60 secondes</button><button class="btn ghost" data-j="other">Autre sujet</button></div><p class="tiny muted">Règles : pas de pause de plus de 2 s (−5), pas de « um / uh / euh » (−5). 1 point par seconde de parole.</p>';
  body.querySelector('[data-j="other"]').onclick=function(){gJam(body)};
  body.querySelector('[data-j="go"]').onclick=function(){stopSpeak();navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
    var st={t0:Date.now(),silent:0,lastLoud:Date.now(),pauses:0,inPause:false,finals:[],interim:""},live=true,chunks=[],mr=null;
    try{var mime=["audio/webm;codecs=opus","audio/webm","audio/mp4"].filter(function(m){return MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(m)})[0];mr=new MediaRecorder(stream,mime?{mimeType:mime}:undefined);mr.ondataavailable=function(e){if(e.data.size)chunks.push(e.data)};mr.start(1000)}catch(e){mr=null}
    body.innerHTML='<div class="game-q">« '+esc(topic)+' »</div><div class="game-hud"><span class="num big-time" data-j="t">60</span><span class="num" data-j="p">Pauses 0</span><span class="num" data-j="f">Euh 0</span></div><div class="rec-level" style="width:100%"><span data-j="lv"></span></div><p class="tiny muted" data-j="live"></p><button class="btn" data-j="stop">■ Arrêter</button>';
    var ac,an,buf,last=performance.now();try{ac=new (window.AudioContext||window.webkitAudioContext)();an=ac.createAnalyser();an.fftSize=1024;ac.createMediaStreamSource(stream).connect(an);buf=new Float32Array(an.fftSize)}catch(e){}
    var r=null;if(SR&&prefs.sr){try{r=new SR();r.lang=prefs.lang;r.continuous=true;r.interimResults=true;r.onresult=function(e){var it="";for(var i=e.resultIndex;i<e.results.length;i++){if(e.results[i].isFinal)st.finals.push(e.results[i][0].transcript);else it+=e.results[i][0].transcript}st.interim=it;var tx=(st.finals.join(" ")+" "+it);var el=body.querySelector('[data-j="live"]');if(el)el.textContent=tx.slice(-160);var fe=body.querySelector('[data-j="f"]');if(fe)fe.textContent="Euh "+(tx.match(FILLERS)||[]).length};r.onend=function(){if(live){try{r.start()}catch(e){}}};r.onerror=function(){};r.start()}catch(e){r=null}}
    function loop(){if(!live)return;var now=performance.now(),dt=(now-last)/1000;last=now;if(an){an.getFloatTimeDomainData(buf);var s=0;for(var i=0;i<buf.length;i++)s+=buf[i]*buf[i];var rms=Math.sqrt(s/buf.length);var lv=body.querySelector('[data-j="lv"]');if(lv)lv.style.width=Math.min(100,rms*600)+"%";
      if(rms<0.012){st.silent+=dt;if(!st.inPause&&Date.now()-st.lastLoud>2000){st.inPause=true;st.pauses++;var pe=body.querySelector('[data-j="p"]');if(pe)pe.textContent="Pauses "+st.pauses}}else{st.lastLoud=Date.now();st.inPause=false}}
      var left=Math.max(0,60-(Date.now()-st.t0)/1000);var te=body.querySelector('[data-j="t"]');if(te)te.textContent=Math.ceil(left);if(left<=0){end();return}requestAnimationFrame(loop)}
    function end(){if(!live)return;live=false;gameStop=null;try{r&&r.stop()}catch(e){}
      setTimeout(function(){var dur=Math.min(60,(Date.now()-st.t0)/1000),tx=(st.finals.join(" ")+" "+st.interim).trim(),fil=(tx.match(FILLERS)||[]).length,speakS=Math.max(0,dur-st.silent);
        var score=Math.max(0,Math.round(speakS)-5*st.pauses-5*fil);
        function after(){stream.getTracks().forEach(function(t){t.stop()});try{ac&&ac.close()}catch(e){}
          body.innerHTML=finishGame("jam",score,"pts")+'<p class="tiny">Parole : '+Math.round(speakS)+' s · pauses longues : '+st.pauses+' · « euh » : '+fil+(tx?' · '+wordCount(tx)+' mots':'')+'</p>'+(tx?'<details><summary>Ta transcription</summary><p class="tiny">'+esc(tx)+'</p></details>':'')+'<button class="btn" data-j="again">Nouveau sujet</button>';body.querySelector('[data-j="again"]').onclick=function(){gJam(body)}}
        if(mr&&mr.state!=="inactive"){mr.onstop=function(){var blob=new Blob(chunks,{type:mr.mimeType||"audio/webm"});recPut({id:uid(),day:todayDay(),k:"JAM",label:"Juste une minute : "+topic,created:Date.now(),dur:dur,speak:speakS,pauses:st.pauses,transcript:tx,words:wordCount(tx),wpm:speakS>5&&tx?Math.round(wordCount(tx)/(speakS/60)):null,fillers:fil,blob:blob}).catch(function(){});after()};mr.stop()}else after()},400)}
    body.querySelector('[data-j="stop"]').onclick=end;gameStop=function(){live=false;try{r&&r.stop()}catch(e){}try{mr&&mr.stop()}catch(e){}stream.getTracks().forEach(function(t){t.stop()})};loop();
  }).catch(function(){body.innerHTML='<p class="tiny">Accès au micro refusé. Autorise le micro pour ce site dans les réglages du navigateur.</p>'})}}

/* Phrases en désordre */
function gOrder(body){var S=shuffle(sentencePool(5,10)).slice(0,5);if(!S.length){body.innerHTML='<p class="tiny">Contenu indisponible.</p>';return}var i=0,score=0,t0=Date.now();
  function q(){if(i>=S.length){var secs=Math.round((Date.now()-t0)/1000);var pts=Math.max(0,score*20-Math.max(0,secs-60));body.innerHTML=finishGame("order",pts,"pts")+'<p class="tiny">'+score+' / 5 phrases justes en '+secs+' s.</p><button class="btn" data-o="again">Rejouer</button>';body.querySelector('[data-o="again"]').onclick=function(){gOrder(body)};return}
    var words=S[i].replace(/[.!?]+$/,"").split(/\s+/),tiles=shuffle(words.map(function(w,j){return {w:w,j:j}})),built=[];
    if(tiles.map(function(t){return t.j}).join()===words.map(function(w,j){return j}).join())tiles.reverse();
    function draw(){body.innerHTML='<div class="game-hud"><span class="num">Phrase '+(i+1)+' / 5</span><span class="num">Justes '+score+'</span></div><div class="built">'+(built.length?built.map(function(t,k){return '<button class="tile on" data-b="'+k+'">'+esc(t.w)+'</button>'}).join(""):'<span class="tiny muted">Touche les mots dans l\'ordre</span>')+'</div><div class="tiles">'+tiles.map(function(t,k){return built.indexOf(t)>=0?'':'<button class="tile" data-t="'+k+'">'+esc(t.w)+'</button>'}).join("")+'</div><div class="action-row"><button class="btn" data-o="hear">🔊 Indice audio</button></div>';
      body.querySelectorAll("[data-t]").forEach(function(b){b.onclick=function(){built.push(tiles[+b.dataset.t]);if(built.length===words.length)check();else draw()}});
      body.querySelectorAll("[data-b]").forEach(function(b){b.onclick=function(){built.splice(+b.dataset.b,1);draw()}});
      body.querySelector('[data-o="hear"]').onclick=function(){stopSpeak();speak(S[i])}}
    function check(){var good=norm(built.map(function(t){return t.w}).join(" "))===norm(words.join(" "));if(good)score++;body.innerHTML='<div class="notice '+(good?"info":"bad")+'">'+(good?"Juste !":"Ordre correct : ")+(good?"":esc(words.join(" ")))+'</div>';speak(S[i]);setTimeout(function(){i++;q()},good?1200:2600)}
    draw()}
  q()}

/* Miroir de prononciation */
function gMirror(body){
  if(!SR){body.innerHTML='<div class="notice">Ce défi a besoin de la reconnaissance vocale, absente de ce navigateur. Il fonctionne sur Chrome, Edge et Android.</div>';return}
  var S=shuffle(sentencePool(4,9)).slice(0,5),i=0,total=0;
  function q(){if(i>=S.length){var pct=Math.round(total/S.length);body.innerHTML=finishGame("mirror",pct,"%")+'<button class="btn" data-m="again">Rejouer</button>';body.querySelector('[data-m="again"]').onclick=function(){gMirror(body)};return}
    var s=S[i];body.innerHTML='<div class="game-hud"><span class="num">Phrase '+(i+1)+' / 5</span><span class="num">Moyenne '+(i?Math.round(total/i):0)+' %</span></div><div class="game-q small">'+esc(s)+'</div><div class="action-row"><button class="btn" data-m="hear">🔊 Écouter</button><button class="btn primary" data-m="rec">🎙 Répéter</button><button class="btn ghost" data-m="skip">Passer</button></div><div class="tiny" data-m="res"></div>';
    body.querySelector('[data-m="hear"]').onclick=function(){stopSpeak();speak(s)};
    body.querySelector('[data-m="skip"]').onclick=function(){i++;q()};
    body.querySelector('[data-m="rec"]').onclick=function(){stopSpeak();var r;try{r=new SR()}catch(e){body.querySelector('[data-m="res"]').textContent="Reconnaissance vocale indisponible.";return}r.lang=prefs.lang;r.interimResults=false;r.maxAlternatives=3;var res=body.querySelector('[data-m="res"]');res.textContent="Je t'écoute…";
      r.onresult=function(e){var best=0,heard="";for(var a=0;a<e.results[0].length;a++){var h=norm(e.results[0][a].transcript).split(" "),exp=norm(s).split(" ");var hit=exp.filter(function(w){return h.indexOf(w)>=0}).length/exp.length;if(hit>best){best=hit;heard=e.results[0][a].transcript}}
        var exp=norm(s).split(" "),hw=norm(heard).split(" ");var pct=Math.round(best*100);total+=pct;res.innerHTML='Compris : « '+esc(heard)+' » · <b>'+pct+' %</b><br>'+exp.map(function(w){return hw.indexOf(w)>=0?'<span class="ok">'+esc(w)+'</span>':'<span class="ko">'+esc(w)+'</span>'}).join(" ");setTimeout(function(){i++;q()},2600)};
      r.onerror=function(ev){res.textContent=ev.error==="no-speech"?"Je n'ai rien entendu. Réessaie.":ev.error==="not-allowed"?"Micro refusé pour la reconnaissance vocale.":"Reconnaissance interrompue. Réessaie."};
      try{r.start()}catch(e){res.textContent="Réessaie dans une seconde."}}}
  q()}

/* =========== Succès =========== */
function recCount(){return recAll().then(function(a){return a.length})}
var BADGES=[
 {id:"first",ic:"◆",n:"Premier pas",d:"Valider un premier bloc",t:function(c){return c.blocks>=1}},
 {id:"day1",ic:"☀",n:"Journée complète",d:"Terminer une séance entière",t:function(c){return c.comp>=1}},
 {id:"s3",ic:"③",n:"Trois de suite",d:"Série de 3 jours",t:function(c){return c.streak>=3}},
 {id:"s7",ic:"⑦",n:"Semaine parfaite",d:"Série de 7 jours",t:function(c){return c.streak>=7}},
 {id:"s30",ic:"✷",n:"Inarrêtable",d:"Série de 30 jours",t:function(c){return c.streak>=30}},
 {id:"voice",ic:"🎙",n:"Première prise",d:"Faire un premier enregistrement",t:function(c){return c.recs>=1}},
 {id:"voice25",ic:"📼",n:"Archives sonores",d:"25 enregistrements",t:function(c){return c.recs>=25}},
 {id:"cards100",ic:"▤",n:"Mémoire d'éléphant",d:"100 révisions de cartes",t:function(c){return c.reps>=100}},
 {id:"err20",ic:"✕",n:"Chasseuse d'erreurs",d:"20 erreurs dans le carnet",t:function(c){return c.errors>=20}},
 {id:"gram",ic:"✓",n:"Sans faute",d:"8/8 à un exercice de grammaire",t:function(c){return c.perfect}},
 {id:"test1",ic:"●",n:"Premier bilan",d:"Compléter le test du jour 30",t:function(c){return c.test30}},
 {id:"jam50",ic:"◷",n:"Une minute de gloire",d:"50 points à « Juste une minute »",t:function(c){return (c.best.jam||0)>=50}},
 {id:"ear",ic:"◎",n:"Oreille absolue",d:"10/10 à « Oreille fine »",t:function(c){return (c.best.pairs||0)>=10}},
 {id:"sprint25",ic:"⚡",n:"Éclair",d:"25 points au sprint",t:function(c){return (c.best.sprint||0)>=25}},
 {id:"all6",ic:"⚔",n:"Gladiatrice",d:"Jouer aux 6 défis de l'Arène",t:function(c){return GAMES.every(function(x){return c.plays[x.id]})}},
 {id:"h50",ic:"⌛",n:"50 heures",d:"50 heures d'anglais",t:function(c){return c.hours>=50}},
 {id:"h300",ic:"⏳",n:"Mi-parcours",d:"300 heures d'anglais",t:function(c){return c.hours>=300}},
 {id:"c1",ic:"♛",n:"Souveraine",d:"Atteindre le rang SOVEREIGN // C1",t:function(c){return c.rank>=7}}
];
var badgeBusy=false;
function checkBadges(){if(badgeBusy)return;badgeBusy=true;recCount().then(function(n){badgeBusy=false;
  state.badges=state.badges||{};var T=totals(),st=streaks(),g=G(),reps=0;for(var k in (state.srs||{}))reps+=state.srs[k].reps||0;
  var perfect=false;for(var d in (state.gram||{}))if(state.gram[d]>=8)perfect=true;
  var c={blocks:Object.keys(state.quests).length,comp:T.comp,streak:st.best,recs:n,reps:reps,errors:state.errors.length,perfect:perfect,test30:!!(state.tests["30"]&&state.tests["30"].listen!=null),best:g.best,plays:g.plays,hours:T.min/60,rank:rankInfo(T.xp).i};
  var fresh=[];BADGES.forEach(function(b){if(!state.badges[b.id]&&b.t(c)){state.badges[b.id]=todayISO();fresh.push(b)}});
  if(fresh.length){try{localStorage.setItem(LS_KEY,JSON.stringify(state))}catch(e){}toast("Succès débloqué : "+fresh.map(function(b){return b.ic+" "+b.n}).join(", "))}
  var got=Object.keys(state.badges).length;$("badgeCount").textContent=got+" / "+BADGES.length;
  $("badgeGrid").innerHTML=BADGES.map(function(b){var on=state.badges[b.id];return '<div class="badge'+(on?" on":"")+'" title="'+esc(b.d)+'"><span class="badge-ic" aria-hidden="true">'+b.ic+'</span><span class="badge-n">'+esc(b.n)+'</span><span class="tiny muted">'+esc(b.d)+'</span></div>'}).join("");
}).catch(function(){badgeBusy=false})}
$("arenaGrid").addEventListener("click",function(e){var b=e.target.closest("[data-game]");if(b)openGame(b.dataset.game)});


/* Enchaînement de la séance */
function nextUndone(d){var qs=questData(d);for(var i=0;i<qs.length;i++)if(!isDone(d,qs[i].k))return qs[i].k;return null}
function updateNext(){var b=$("wsNext");if(!ws.day){b.classList.add("hidden");return}var cur=isDone(ws.day,ws.k),n=nextUndone(ws.day);b.classList.toggle("hidden",!(cur&&n));if(n){var q=questData(ws.day).filter(function(x){return x.k===n})[0];b.textContent="Bloc suivant : "+q.t+" →"}}
$("wsNext").addEventListener("click",function(){var n=nextUndone(ws.day);if(n)openActivity(ws.day,n)});
$("startSession").addEventListener("click",function(){var d=selectedDay,n=nextUndone(d);if(isLocked(d)){toast("Ce jour n'est pas encore ouvert.");return}if(!n){toast("Séance terminée ✓ Bravo !");return}openActivity(d,n)});

/* =========== Accents variés =========== */
var ACCENTS=[["en-GB","britannique"],["en-US","américain"],["en-AU","australien"],["en-IE","irlandais"],["en-IN","indien"],["en-CA","canadien"],["en-ZA","sud-africain"],["en-NZ","néo-zélandais"]];
function hasAccent(l){if(!TTS.voices.length)loadVoices();return TTS.voices.some(function(v){return v.lang.replace("_","-").indexOf(l)===0})}
function accentFor(d){var w=weekOf(d);if(w<14)return null;var avail=ACCENTS.filter(function(a){return hasAccent(a[0])});if(avail.length<2)return null;return avail[(w-14)%avail.length]}

/* =========== Test de positionnement =========== */
var PL=window.ES_PLACEMENT;
function placementStart(score,cando){var s=score<.35?1:score<.5?31:score<.62?61:score<.74?91:score<.85?121:151;var cap=cando<=2?31:cando<=4?91:151;return Math.min(s,cap)}
function levelOf(byLvl){var order=["A2","B1","B2","C1"],lv="A1–A2";order.forEach(function(l){var x=byLvl[l];if(x&&x.t&&x.ok/x.t>=.6)lv=l});return lv}
function openPlacement(){
  var box=$("placement");box.classList.remove("hidden");stopSpeak();
  var step=0,ans={g:{},l:{},r:{},s:{}},plays={};
  function nav(){return '<div class="action-row" style="margin-top:12px">'+(step>0?'<button class="btn ghost" data-p="prev">← Retour</button>':'')+'<button class="btn primary" data-p="next">'+(step<3?"Suivant →":"Voir mon résultat")+'</button><span class="tiny muted">Étape '+(step+1)+' / 4</span></div>'}
  function collect(){box.querySelectorAll("input[type=radio]:checked").forEach(function(r){var p=r.name.split("_");ans[p[0]][p[1]]=+r.value});box.querySelectorAll("input[type=checkbox][data-sp]").forEach(function(c){ans.s[c.dataset.sp]=c.checked})}
  function mcq(prefix,i,q,opts){return '<fieldset class="mcq"><legend>'+esc(q)+'</legend>'+opts.map(function(o,j){var key=prefix+"_"+i;var on=ans[prefix][i]===j;return '<label><input type="radio" name="'+key+'" value="'+j+'"'+(on?" checked":"")+'> '+esc(o)+'</label>'}).join("")+'</fieldset>'}
  function draw(){var h='<div class="panel-head"><div><div class="eyebrow">Test de positionnement · 15 à 20 min</div><h2>🧭 Trouve ton point de départ</h2></div><button class="btn small ghost" data-p="close">Plus tard</button></div>';
    if(step===0){h+='<p class="tiny muted">Grammaire et vocabulaire : 20 questions de difficulté croissante. Si tu ne sais pas, ne réponds pas : deviner fausse le résultat.</p>'+PL.grammar.map(function(g,i){return mcq("g",i,(i+1)+". "+g[1],g[2])}).join("")}
    else if(step===1){h+='<p class="tiny muted">Écoute : 4 extraits, 2 écoutes maximum chacun, sans texte.</p>'+PL.listening.map(function(it,i){var k=0;return '<div class="pl-item"><div class="action-row"><button class="btn" data-play="'+i+'">▶ Extrait '+(i+1)+'</button><span class="tiny muted" data-pc="'+i+'">'+(plays[i]?plays[i]+" écoute(s)":"")+'</span></div>'+it.questions.map(function(q,j){return mcq("l",i*2+j,q[0],q[1])}).join("")+'</div>'}).join("")}
    else if(step===2){h+='<p class="tiny muted">Lecture : 4 textes de plus en plus difficiles.</p>'+PL.reading.map(function(it,i){return '<div class="pl-item"><div class="reading"><p>'+esc(it.text)+'</p></div>'+it.questions.map(function(q,j){return mcq("r",i*2+j,q[0],q[1])}).join("")+'</div>'}).join("")}
    else{h+='<p class="tiny muted">Oral : coche seulement ce que tu fais vraiment aujourd\'hui, sans préparation.</p><div class="cando">'+PL.speaking.map(function(s,i){return '<label><input type="checkbox" data-sp="'+i+'"'+(ans.s[i]?" checked":"")+'><span>'+esc(s[1])+'</span></label>'}).join("")+'</div>'}
    box.innerHTML=h+nav();
    box.querySelector('[data-p="close"]').onclick=function(){stopSpeak();box.classList.add("hidden");state.placementSeen=1;persist()};
    var pv=box.querySelector('[data-p="prev"]');if(pv)pv.onclick=function(){collect();step--;draw();box.scrollIntoView({block:"start"})};
    box.querySelector('[data-p="next"]').onclick=function(){collect();if(step<3){step++;draw();box.scrollIntoView({block:"start"})}else result()};
    box.querySelectorAll("[data-play]").forEach(function(b){b.onclick=function(){var i=+b.dataset.play;plays[i]=plays[i]||0;if(plays[i]>=2){toast("2 écoutes maximum.");return}plays[i]++;box.querySelector('[data-pc="'+i+'"]').textContent=plays[i]+" écoute(s)";speakLines(PL.listening[i].lines)}});
  }
  function result(){stopSpeak();var by={g:{},l:{},r:{}},ok=0,tot=0;
    PL.grammar.forEach(function(g,i){var L=g[0];by.g[L]=by.g[L]||{ok:0,t:0};by.g[L].t++;tot++;if(ans.g[i]===g[3]){by.g[L].ok++;ok++}});
    PL.listening.forEach(function(it,i){it.questions.forEach(function(q,j){var L=it.lvl;by.l[L]=by.l[L]||{ok:0,t:0};by.l[L].t++;tot++;if(ans.l[i*2+j]===q[2]){by.l[L].ok++;ok++}})});
    PL.reading.forEach(function(it,i){it.questions.forEach(function(q,j){var L=it.lvl;by.r[L]=by.r[L]||{ok:0,t:0};by.r[L].t++;tot++;if(ans.r[i*2+j]===q[2]){by.r[L].ok++;ok++}})});
    var cando=Object.keys(ans.s).filter(function(k){return ans.s[k]}).length,score=ok/tot*.8+cando/PL.speaking.length*.2,start=placementStart(score,cando);
    var lv={g:levelOf(by.g),l:levelOf(by.l),r:levelOf(by.r),s:cando<=1?"A2":cando<=3?"B1":cando<=5?"B2":"C1"};
    var M=MONTHS[monthIdx(start)];
    box.innerHTML='<div class="panel-head"><div><div class="eyebrow">Résultat du test</div><h2>🧭 Ton point de départ : jour '+start+'</h2></div></div><div class="pl-res"><div><span class="stat-label">Grammaire</span><b>'+lv.g+'</b></div><div><span class="stat-label">Écoute</span><b>'+lv.l+'</b></div><div><span class="stat-label">Lecture</span><b>'+lv.r+'</b></div><div><span class="stat-label">Oral (ressenti)</span><b>'+lv.s+'</b></div></div>'+
     '<p class="tiny">Score global : '+Math.round(score*100)+' %. Recommandation : commencer au <b>jour '+start+'</b> (mois '+(monthIdx(start)+1)+' · '+esc(M.lvl)+' · '+esc(M.title)+').'+(start>1?' Les jours 1 à '+(start-1)+' seront marqués « dispensés » : tu pourras toujours les ouvrir pour réviser.':'')+(cando<=2&&start===31?' Ton oral limite le point de départ : c\'est la compétence à pousser en priorité.':'')+'</p>'+
     '<p class="tiny muted">Ce test donne une indication, pas une certification. Si les premières séances te semblent trop faciles ou trop difficiles, refais-le ou choisis un autre jour de départ dans les réglages.</p>'+
     '<div class="action-row"><button class="btn primary" data-p="apply">Commencer au jour '+start+'</button><button class="btn" data-p="day1">Commencer au jour 1</button></div>';
    function apply(s){state.startOffset=s-1;state.startDate=isoDate(new Date());state.placement={date:todayISO(),score:Math.round(score*100),levels:lv,start:s};state.placementSeen=1;qCache={};persist();selectedDay=todayDay();box.classList.add("hidden");render();toast("C'est parti : jour "+todayDay()+" !");$("dayBanner").scrollIntoView({behavior:"smooth"})}
    box.querySelector('[data-p="apply"]').onclick=function(){apply(start)};box.querySelector('[data-p="day1"]').onclick=function(){apply(1)};
  }
  draw();box.scrollIntoView({behavior:"smooth",block:"start"});
}
$("placementBtn").addEventListener("click",function(){if(hasProgress(state)){$("placementWarn").classList.add("on");return}openPlacement()});
$("placementGo").addEventListener("click",function(){$("placementWarn").classList.remove("on");openPlacement()});
$("placementNo").addEventListener("click",function(){$("placementWarn").classList.remove("on")});
$("offsetSel").addEventListener("change",function(){var v=clamp(this.value,1,271);state.startOffset=v-1;qCache={};persist();selectedDay=todayDay();render();toast("Point de départ : jour "+v)});

/* =========== Rappel quotidien (calendrier) =========== */
function icsFile(time){var p=(time||"18:30").split(":"),hh=pad(+p[0]),mm=pad(+p[1]||0),d=new Date(),start=d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+"T"+hh+mm+"00",endD=new Date(d.getFullYear(),d.getMonth(),d.getDate(),+p[0]+2,+p[1]||0),end=endD.getFullYear()+pad(endD.getMonth()+1)+pad(endD.getDate())+"T"+pad(endD.getHours())+pad(endD.getMinutes())+"00",stamp=new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+/,"");
  var url=location.href.split("#")[0];
  return ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//English System//FR","CALSCALE:GREGORIAN","BEGIN:VEVENT","UID:english-system-"+Date.now()+"@local","DTSTAMP:"+stamp,"DTSTART:"+start,"DTEND:"+end,"RRULE:FREQ=DAILY;COUNT=300","SUMMARY:Séance d'anglais · English System","DESCRIPTION:2 h d'anglais. Ouvre l'app : "+url,"URL:"+url,"BEGIN:VALARM","ACTION:DISPLAY","DESCRIPTION:C'est l'heure de ta séance d'anglais","TRIGGER:PT0M","END:VALARM","BEGIN:VALARM","ACTION:DISPLAY","DESCRIPTION:Séance d'anglais dans 15 minutes","TRIGGER:-PT15M","END:VALARM","END:VEVENT","END:VCALENDAR"].join("\r\n")}
function saveBlob(blob,name){var url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url)},4000)}
$("icsBtn").addEventListener("click",function(){var t=$("remTime").value||"18:30";try{localStorage.setItem("englishSystem_remTime",t)}catch(e){}var blob=new Blob([icsFile(t)],{type:"text/calendar"}),f=new File([blob],"seance-anglais.ics",{type:"text/calendar"});
  if(isIOS&&navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f]}).catch(function(){saveBlob(blob,"seance-anglais.ics")})}else saveBlob(blob,"seance-anglais.ics");
  $("icsStatus").textContent="Ouvre le fichier pour ajouter le rappel quotidien à ton calendrier ("+t+", alerte 15 min avant et à l'heure).";});
try{var rt=localStorage.getItem("englishSystem_remTime");if(rt)$("remTime").value=rt}catch(e){}

/* =========== Export / import des enregistrements (ZIP) =========== */
var CRC=(function(){var t=[];for(var n=0;n<256;n++){var c=n;for(var k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}return t})();
function crc32(u8){var c=0xFFFFFFFF;for(var i=0;i<u8.length;i++)c=CRC[(c^u8[i])&255]^(c>>>8);return (c^0xFFFFFFFF)>>>0}
function makeZip(files){var enc=new TextEncoder(),parts=[],central=[],off=0;
  files.forEach(function(f){var name=enc.encode(f.name),data=f.data,crc=crc32(data),h=new DataView(new ArrayBuffer(30));
    h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint16(6,0x0800,true);h.setUint16(8,0,true);h.setUint32(14,crc,true);h.setUint32(18,data.length,true);h.setUint32(22,data.length,true);h.setUint16(26,name.length,true);
    parts.push(new Uint8Array(h.buffer),name,data);
    var c=new DataView(new ArrayBuffer(46));c.setUint32(0,0x02014b50,true);c.setUint16(4,20,true);c.setUint16(6,20,true);c.setUint16(8,0x0800,true);c.setUint32(16,crc,true);c.setUint32(20,data.length,true);c.setUint32(24,data.length,true);c.setUint16(28,name.length,true);c.setUint32(42,off,true);
    central.push(new Uint8Array(c.buffer),name);off+=30+name.length+data.length});
  var csize=central.reduce(function(s,p){return s+p.length},0),e=new DataView(new ArrayBuffer(22));e.setUint32(0,0x06054b50,true);e.setUint16(8,files.length,true);e.setUint16(10,files.length,true);e.setUint32(12,csize,true);e.setUint32(16,off,true);
  return new Blob(parts.concat(central,[new Uint8Array(e.buffer)]),{type:"application/zip"})}
function readZip(buf){var dv=new DataView(buf),u8=new Uint8Array(buf),dec=new TextDecoder(),out=[],p=0;
  while(p+30<=u8.length&&dv.getUint32(p,true)===0x04034b50){var method=dv.getUint16(p+8,true),size=dv.getUint32(p+18,true),nl=dv.getUint16(p+26,true),xl=dv.getUint16(p+28,true);var name=dec.decode(u8.subarray(p+30,p+30+nl));var start=p+30+nl+xl;if(method!==0)throw new Error("compressed");out.push({name:name,data:u8.slice(start,start+size)});p=start+size}
  return out}
function extOf(mime){return /mp4|m4a|aac/.test(mime)?"m4a":/ogg/.test(mime)?"ogg":"webm"}
$("recExport").addEventListener("click",function(){var st=$("recStatus");st.textContent="Préparation…";recAll().then(function(rs){if(!rs.length){st.textContent="Aucun enregistrement à exporter.";return}
  return Promise.all(rs.map(function(r){return r.blob.arrayBuffer().then(function(b){return {r:r,b:new Uint8Array(b)}})})).then(function(items){var files=[],meta=[];
    items.forEach(function(x){var r=x.r,fn="J"+pad(r.day,3)+"_"+(r.k||"X")+"_"+r.id+"."+extOf(r.blob.type);files.push({name:fn,data:x.b});var m=Object.assign({},r);delete m.blob;m.file=fn;m.mime=r.blob.type;meta.push(m)});
    files.push({name:"enregistrements.json",data:new TextEncoder().encode(JSON.stringify(meta,null,1))});
    var zip=makeZip(files),name="english-system-audio-"+isoDate(new Date())+".zip",f=new File([zip],name,{type:"application/zip"});
    var mb=(zip.size/1048576).toFixed(1);
    if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:"Enregistrements English System"}).then(function(){st.textContent=rs.length+" enregistrements envoyés ("+mb+" Mo)."}).catch(function(e){if(!e||e.name!=="AbortError"){saveBlob(zip,name);st.textContent=rs.length+" enregistrements exportés ("+mb+" Mo)."}})}
    else{saveBlob(zip,name);st.textContent=rs.length+" enregistrements exportés ("+mb+" Mo)."}})}).catch(function(){st.textContent="Export impossible sur cet appareil."})});
$("recImport").addEventListener("change",function(){var f=this.files&&this.files[0],st=$("recStatus");if(!f)return;this.value="";f.arrayBuffer().then(function(buf){var files=readZip(buf),metaF=files.filter(function(x){return x.name==="enregistrements.json"})[0];if(!metaF)throw new Error("meta");
  var meta=JSON.parse(new TextDecoder().decode(metaF.data)),byName={};files.forEach(function(x){byName[x.name]=x.data});
  return recAll().then(function(existing){var ids={};existing.forEach(function(r){ids[r.id]=1});var n=0;return Promise.all(meta.filter(function(m){return !ids[m.id]&&byName[m.file]}).map(function(m){n++;var r=Object.assign({},m);r.blob=new Blob([byName[m.file]],{type:m.mime||"audio/webm"});delete r.file;delete r.mime;return recPut(r)})).then(function(){st.textContent=n+" enregistrement(s) importé(s)."+(meta.length>n?" "+(meta.length-n)+" déjà présent(s).":"");renderStats()})})}).catch(function(){st.textContent="Ce fichier n'est pas une archive d'enregistrements English System."})});

/* =========== Statistiques =========== */
function renderStats(){
  var box=$("statsBox");if(!box)return;
  recAll().then(function(rs){
    var tdy=todayDay(),wk=weekOf(tdy),weeks=[],maxH=0;
    for(var w=Math.max(1,wk-11);w<=wk;w++){var m=0;for(var d=(w-1)*7+1;d<=Math.min(DAYS,w*7);d++)m+=dayMinutes(d)+(+state.bonus[d]||0)+(state.human[d]?20:0);var h=m/60;maxH=Math.max(maxH,h);weeks.push([w,h])}
    maxH=Math.max(maxH,14);
    var W=640,H=170,L=34,R=10,T=12,B=26,bw=(W-L-R)/weeks.length;
    var s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Heures par semaine">';
    [0,7,14].concat(maxH>14?[Math.ceil(maxH)]:[]).forEach(function(v){var y=T+(1-v/maxH)*(H-T-B);s+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+y+'" y2="'+y+'" stroke="#1c2a3b"/><text x="'+(L-6)+'" y="'+(y+4)+'" fill="#8ea3bb" font-size="10" text-anchor="end" font-family="JetBrains Mono,monospace">'+v+'h</text>'});
    var ty=T+(1-13/maxH)*(H-T-B);s+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+ty+'" y2="'+ty+'" stroke="#fbbf24" stroke-dasharray="4 3"/><text x="'+(W-R)+'" y="'+(ty-4)+'" fill="#fbbf24" font-size="10" text-anchor="end" font-family="JetBrains Mono,monospace">objectif 13 h</text>';
    weeks.forEach(function(x,i){var bh=x[1]/maxH*(H-T-B),xx=L+i*bw+bw*.18;s+='<rect x="'+xx+'" y="'+(H-B-bh)+'" width="'+(bw*.64)+'" height="'+Math.max(0,bh)+'" rx="3" fill="'+(x[0]===wk?"#7dd3fc":"#1676d2")+'"/><text x="'+(xx+bw*.32)+'" y="'+(H-8)+'" fill="#62788f" font-size="10" text-anchor="middle" font-family="JetBrains Mono,monospace">S'+x[0]+'</text>'});
    s+='</svg>';
    var sp=rs.filter(function(r){return r.dur>=20&&r.k!=="P"}).sort(function(a,b){return a.created-b.created});
    var s2='';
    if(sp.length>=2){var pts=sp.map(function(r){var mins=Math.max(r.speak,1)/60;return {d:r.day,wpm:r.wpm,pause:r.pauses/Math.max(r.dur/60,.5),fil:(r.fillers||0)/mins}});
      var maxP=Math.max(4,Math.max.apply(null,pts.map(function(p){return Math.max(p.pause,p.fil)})));var W2=640,H2=170,x=function(d){return L+(d-1)/(DAYS-1)*(W2-L-R)},y=function(v){return T+(1-v/maxP)*(H2-T-B)};
      s2='<svg viewBox="0 0 '+W2+' '+H2+'" role="img" aria-label="Pauses et hésitations par minute">';[0,maxP/2,maxP].forEach(function(v){s2+='<line x1="'+L+'" x2="'+(W2-R)+'" y1="'+y(v)+'" y2="'+y(v)+'" stroke="#1c2a3b"/><text x="'+(L-6)+'" y="'+(y(v)+4)+'" fill="#8ea3bb" font-size="10" text-anchor="end" font-family="JetBrains Mono,monospace">'+v.toFixed(1).replace(".0","")+'</text>'});
      function ln(key,col,dash){return '<polyline fill="none" stroke="'+col+'" stroke-width="2"'+(dash?' stroke-dasharray="4 3"':'')+' points="'+pts.map(function(p){return x(p.d)+","+y(p[key])}).join(" ")+'"/>'}
      s2+=ln("pause","#fb7185")+ln("fil","#fbbf24",1)+'</svg><div class="legend"><span><i style="background:#fb7185;border:0;height:3px"></i>Pauses longues / min</span><span><i style="background:#fbbf24;border:0;height:3px"></i>« Euh » / min (si transcription)</span></div>';
      var wp=pts.filter(function(p){return p.wpm});if(wp.length>=2){var first=wp[0].wpm,last=wp[wp.length-1].wpm;s2+='<p class="tiny">Débit : '+first+' → '+last+' mots/min ('+(last>=first?"+":"")+(last-first)+'). Un débit naturel en anglais se situe autour de 130 à 160 mots/min.</p>'}
    }else s2='<p class="tiny muted">Les courbes d\'aisance apparaîtront après deux enregistrements oraux d\'au moins 20 secondes.</p>';
    var T0=totals();
    box.innerHTML='<div class="stat-row"><div><span class="stat-label">Heures totales</span><b class="num">'+(T0.min/60).toFixed(1).replace(".",",")+'</b></div><div><span class="stat-label">Enregistrements</span><b class="num">'+rs.length+'</b></div><div><span class="stat-label">Temps de parole</span><b class="num">'+Math.round(rs.reduce(function(a,r){return a+(r.speak||0)},0)/60)+' min</b></div><div><span class="stat-label">Cartes maîtrisées</span><b class="num">'+Object.keys(state.srs||{}).filter(function(k){return (state.srs[k].iv||0)>=21}).length+'</b></div></div><h3 style="margin-top:12px">Heures par semaine</h3><div class="chart-box">'+s+'</div><h3 style="margin-top:12px">Aisance à l\'oral</h3><div class="chart-box">'+s2+'</div>';
  });
}

/* =========== Synchronisation GitHub (optionnelle) =========== */
var GH={token:"",gist:"",busy:false,timer:null};
try{var gs=JSON.parse(localStorage.getItem("englishSystem_gh")||"{}");GH.token=gs.token||"";GH.gist=gs.gist||""}catch(e){}
function ghSave(){try{localStorage.setItem("englishSystem_gh",JSON.stringify({token:GH.token,gist:GH.gist}))}catch(e){}}
function ghApi(path,opt){opt=opt||{};return fetch("https://api.github.com"+path,{method:opt.method||"GET",headers:{"Authorization":"Bearer "+GH.token,"Accept":"application/vnd.github+json","Content-Type":"application/json"},body:opt.body?JSON.stringify(opt.body):undefined,cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("HTTP "+r.status);return r.json()})}
function syncState(msg,cls){var el=$("ghStatus");el.textContent=msg;el.className="tiny "+(cls||"")}
function ghFind(){if(GH.gist)return Promise.resolve(GH.gist);return ghApi("/gists?per_page=100").then(function(list){var g=list.filter(function(x){return x.files&&x.files["english-system-sync.json"]})[0];if(g){GH.gist=g.id;ghSave();return g.id}
  return ghApi("/gists",{method:"POST",body:{description:"English System – synchronisation (ne pas supprimer)",public:false,files:{"english-system-sync.json":{content:JSON.stringify(state)}}}}).then(function(n){GH.gist=n.id;ghSave();return n.id})})}
function ghPull(){if(!GH.token)return Promise.resolve();syncState("Synchronisation…");return ghFind().then(function(id){return ghApi("/gists/"+id)}).then(function(g){var f=g.files["english-system-sync.json"];if(!f)return;
  var p=f.truncated&&f.raw_url?fetch(f.raw_url,{cache:"no-store"}).then(function(r){return r.text()}):Promise.resolve(f.content);
  return p.then(function(txt){var rs=normalize(JSON.parse(txt));if((rs.updatedAt||"")>(state.updatedAt||"")){state=rs;qCache={};try{localStorage.setItem(LS_KEY,JSON.stringify(state))}catch(e){}selectedDay=todayDay();render();syncState("✓ Progression récupérée depuis ton autre appareil ("+new Date().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})+")","ok")}
    else if((state.updatedAt||"")>(rs.updatedAt||""))return ghPush();else syncState("✓ À jour","ok")})}).catch(function(e){syncState("Synchronisation impossible ("+e.message+"). Vérifie ta clé et ta connexion.","bad")})}
function ghPush(){if(!GH.token||GH.busy)return Promise.resolve();GH.busy=true;return ghFind().then(function(id){return ghApi("/gists/"+id,{method:"PATCH",body:{files:{"english-system-sync.json":{content:JSON.stringify(state)}}}})}).then(function(){syncState("✓ Synchronisé à "+new Date().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),"ok")}).catch(function(e){syncState("Envoi impossible ("+e.message+"). Tes données restent sur cet appareil.","bad")}).then(function(){GH.busy=false})}
function ghQueue(){if(!GH.token)return;clearTimeout(GH.timer);GH.timer=setTimeout(ghPush,4000)}
function ghUI(){var on=!!GH.token;$("ghOn").classList.toggle("hidden",!on);$("ghOff").classList.toggle("hidden",on)}
$("ghConnect").addEventListener("click",function(){var t=$("ghToken").value.trim();if(!/^(ghp_|github_pat_)/.test(t)){syncState("Cette clé ne ressemble pas à une clé GitHub (elle commence par ghp_ ou github_pat_).","bad");return}GH.token=t;GH.gist="";ghSave();$("ghToken").value="";ghUI();ghPull()});
$("ghNow").addEventListener("click",function(){ghPull()});
$("ghDisconnect").addEventListener("click",function(){GH.token="";GH.gist="";ghSave();ghUI();syncState("Synchronisation désactivée. La clé a été effacée de cet appareil.")});
document.addEventListener("visibilitychange",function(){if(!document.hidden&&GH.token)ghPull()});


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
$("errList").addEventListener("click",function(e){var b=e.target.closest("[data-err]");if(!b)return;state.errors=state.errors.filter(function(x){return x.id!==b.dataset.err});ensureCards();persist();renderErrors()});
$("reviewBtn").addEventListener("click",function(){if(!state.errors.length){$("errStatus").textContent="Le carnet est vide.";return}reviewIds=state.errors.slice().sort(function(a,b){return a.reviews-b.reviews}).slice(0,5).map(function(e){return e.id});var ids=reviewIds;state.errors.sort(function(a,b){return (ids.indexOf(a.id)>=0)-(ids.indexOf(b.id)>=0)});renderErrors();$("errStatus").textContent="Les 5 erreurs les moins révisées sont en haut. Relis-les à voix haute.";$("errList").scrollTop=0});
$("reviewDone").addEventListener("click",function(){state.errors.forEach(function(e){if(reviewIds.indexOf(e.id)>=0)e.reviews++});reviewIds=[];persist();renderErrors();$("errStatus").textContent="Révision enregistrée."});

function exportJSON(){return JSON.stringify(state,null,2)}
function exportName(){return "english-system-"+isoDate(new Date())+".json"}
function markExported(){state.lastExport=new Date().toISOString();try{localStorage.setItem(LS_KEY,JSON.stringify(state))}catch(e){}setStatus()}
function showJson(){$("jsonOut").value=exportJSON();$("jsonOutBox").classList.remove("hidden")}
function download(){try{var blob=new Blob([exportJSON()],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=exportName();document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url)},2000);markExported();$("importStatus").textContent="Fichier téléchargé : "+exportName()+"."}catch(e){showJson();$("importStatus").textContent="Téléchargement impossible : copie le JSON affiché."}}
$("exportBtn").addEventListener("click",download);
$("showJsonBtn").addEventListener("click",showJson);
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
render();ghUI();if(GH.token)ghPull();
if(!state.placementSeen&&!hasProgress(state))setTimeout(openPlacement,300);
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}
var APP_VERSION="9";
var swReg=null;
if("serviceWorker" in navigator&&location.protocol!=="file:"){
  var hadController=!!navigator.serviceWorker.controller,reloading=false;
  navigator.serviceWorker.addEventListener("controllerchange",function(){if(!hadController||reloading)return;reloading=true;location.reload()});
  navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(function(r){swReg=r;r.update().catch(function(){})}).catch(function(){});
  document.addEventListener("visibilitychange",function(){if(!document.hidden&&swReg)swReg.update().catch(function(){})});
}
function forceUpdate(){
  $("updStatus").textContent="Recherche de mise à jour…";
  var p=swReg?swReg.update().catch(function(){}):Promise.resolve();
  p.then(function(){return window.caches?caches.keys().then(function(ks){return Promise.all(ks.map(function(k){return caches.delete(k)}))}):null}).then(function(){location.reload()}).catch(function(){location.reload()});
}
$("updBtn").addEventListener("click",forceUpdate);
/* =========== Diagnostic =========== */
function runDiagnostic(){
  var out=$("diagOut");out.innerHTML='<p class="tiny muted"><span class="spinner"></span>Vérification en cours…</p>';
  var rows=[];function add(st,label,detail,fix){rows.push({st:st,label:label,detail:detail||"",fix:fix||""})}
  var tasks=[];
  add("ok","Version de l'app","Version "+APP_VERSION);
  var standalone=(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone===true;
  add(standalone?"ok":"warn","Installée sur l'écran d'accueil",standalone?"Oui":"Non, ouverte dans le navigateur",standalone?"":"Installe-la (iPhone : Partager → Sur l'écran d'accueil) pour éviter que Safari efface tes données.");
  add(navigator.onLine?"ok":"warn","Connexion Internet",navigator.onLine?"En ligne":"Hors ligne","Hors ligne, l'app fonctionne mais ne reçoit pas les mises à jour.");
  try{localStorage.setItem("es_diag","1");var okLS=localStorage.getItem("es_diag")==="1";localStorage.removeItem("es_diag");add(okLS?"ok":"bad","Sauvegarde de ta progression",okLS?"Fonctionne":"Impossible d'écrire","Désactive la navigation privée.")}catch(e){add("bad","Sauvegarde de ta progression","Bloquée","Désactive la navigation privée ou autorise le stockage pour ce site.")}
  var C=window.ES_CONTENT||{weeks:{},tests:{}},nw=Object.keys(C.weeks).length,nt=Object.keys(C.tests).length;
  add(nw>=43&&nt>=10?"ok":"bad","Contenu intégré",nw+" semaines, "+nt+" tests mensuels",nw?"":"Recharge l'app avec une connexion.");
  ensureCards();add("ok","Cartes de révision",Object.keys(state.srs).length+" cartes, "+dueCards().length+" à réviser aujourd'hui");
  if("serviceWorker" in navigator){tasks.push(navigator.serviceWorker.getRegistration().then(function(r){var ctl=!!navigator.serviceWorker.controller;add(r&&ctl?"ok":"warn","Mises à jour automatiques",r?(ctl?"Actives":"Actives après la prochaine ouverture"):"Non installées","Ferme puis rouvre l'app.")}))}else add("bad","Mises à jour automatiques","Non prises en charge par ce navigateur");
  if(window.caches){tasks.push(caches.keys().then(function(ks){return Promise.all(ks.map(function(k){return caches.open(k).then(function(c){return c.keys()})}))}).then(function(lists){var urls=[].concat.apply([],lists).map(function(r){return r.url});var need=["app.js","content-w01-05.js", "content-w06-09.js", "content-w10-15.js", "content-w16-21.js", "content-w22-27.js", "content-w28-33.js", "content-w34-38.js", "content-w39-43.js", "content-tests.js","index.html"];var miss=need.filter(function(n){return !urls.some(function(u){return u.indexOf(n)>=0})});add(miss.length?"warn":"ok","Fonctionnement hors ligne",miss.length?"Fichiers pas encore en mémoire : "+miss.join(", "):"Prêt","Ouvre l'app une fois avec une connexion, puis rouvre-la.")}).catch(function(){add("warn","Fonctionnement hors ligne","Vérification impossible")}))}
  tasks.push(db().then(function(){add("ok","Stockage des enregistrements audio","Fonctionne")}).catch(function(){add("bad","Stockage des enregistrements audio","Indisponible","Désactive la navigation privée.")}));
  if(navigator.storage&&navigator.storage.persisted)tasks.push(navigator.storage.persisted().then(function(p){add(p?"ok":"warn","Protection contre l'effacement",p?"Données protégées":"Le navigateur peut effacer les données s'il manque de place","Installe l'app et exporte régulièrement tes données.")}));
  if(!TTS.ok)add("bad","Voix de lecture","Non disponible sur ce navigateur","Utilise Safari, Chrome ou Edge à jour.");
  else{loadVoices();var gb=TTS.voices.filter(function(v){return /en.GB/i.test(v.lang)}).length,us=TTS.voices.filter(function(v){return /en.US/i.test(v.lang)}).length;var n=TTS.voices.length;
    add(n>=2?"ok":n===1?"warn":"bad","Voix anglaises installées",n+" voix ("+gb+" britannique(s), "+us+" américaine(s))"+(n?" : "+TTS.voices.slice(0,6).map(function(v){return v.name}).join(", "):""),n>=2?"":"Ajoute des voix anglaises : Réglages → recherche « voix » ou « énoncé » → Voix → Anglais.")}
  var canRec=!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&window.MediaRecorder);
  add(canRec?"ok":"bad","Enregistreur",canRec?"Pris en charge":"Non pris en charge",canRec?"":"Mets à jour iOS ou utilise Chrome.");
  add(SR?(prefs.sr?"ok":"warn"):"warn","Transcription automatique",SR?(prefs.sr?"Disponible":"Désactivée dans les réglages"):"Non disponible sur ce navigateur",SR?"":"L'audio est quand même enregistré ; la transcription marche sur Chrome, Edge et Android.");
  add(GH.token?"ok":"warn","Synchronisation entre appareils",GH.token?"Active (GitHub)":"Manuelle (export / import)",GH.token?"":"Optionnel : active la synchronisation GitHub dans « Mes données ».");
  var accN=ACCENTS.filter(function(a){return hasAccent(a[0])}).length;add(accN>=3?"ok":"warn","Accents disponibles pour les écoutes",accN+" accent(s) anglais sur cet appareil",accN>=3?"":"Télécharge des voix australienne, irlandaise ou indienne dans les réglages de l'appareil pour varier les accents.");
  add(navigator.clipboard&&navigator.clipboard.writeText?"ok":"warn","Copie des prompts",navigator.clipboard?"Fonctionne":"Copie manuelle","Le texte s'affiche pour être sélectionné.");
  var shareOK=false;try{shareOK=!!(navigator.canShare&&navigator.canShare({files:[new File(["{}"],"t.json",{type:"application/json"})]}))}catch(e){}
  add(shareOK?"ok":"warn","Envoi vers un autre appareil",shareOK?"Menu de partage disponible":"Téléchargement du fichier à la place");
  Promise.all(tasks.map(function(t){return t.catch(function(){})})).then(function(){
    var order={bad:0,warn:1,ok:2};rows.sort(function(a,b){return order[a.st]-order[b.st]});
    var nb=rows.filter(function(r){return r.st==="bad"}).length,nw2=rows.filter(function(r){return r.st==="warn"}).length;
    out.innerHTML='<div class="notice '+(nb?"bad":nw2?"":"info")+'">'+(nb?nb+" problème(s) à corriger.":nw2?"Tout fonctionne, avec "+nw2+" point(s) à améliorer.":"Tout fonctionne parfaitement sur cet appareil.")+'</div><div class="diag-list">'+rows.map(function(r){return '<div class="diag-row '+r.st+'"><span class="diag-ic">'+(r.st==="ok"?"✓":r.st==="warn"?"!":"✕")+'</span><div><strong>'+esc(r.label)+'</strong><div class="tiny muted">'+esc(r.detail)+'</div>'+(r.fix&&r.st!=="ok"?'<div class="tiny diag-fix">'+esc(r.fix)+'</div>':'')+'</div></div>'}).join("")+'</div>';
  });
}
function testVoice(){var res=$("diagLive");stopSpeak();var t0=Date.now(),started=false;
  if(!TTS.ok){res.textContent="✕ Voix non disponible.";return}
  var u=new SpeechSynthesisUtterance("Hello Irène. If you can hear me, the first voice works.");var v=pickVoice(0);if(v){u.voice=v;u.lang=v.lang}else u.lang=prefs.lang;u.rate=prefs.rate;
  u.onstart=function(){started=true};u.onend=function(){var v1=pickVoice(1);var u2=new SpeechSynthesisUtterance("And this is the second voice, for dialogues.");if(v1){u2.voice=v1;u2.lang=v1.lang}if(!v1||!v||v1.name===v.name)u2.pitch=0.75;u2.rate=prefs.rate;keepU.push(u2);speechSynthesis.speak(u2);res.textContent="✓ Voix 1 : "+(v?v.name:"par défaut")+" · Voix 2 : "+(v1&&v&&v1.name!==v.name?v1.name:"même voix, plus grave")+". Si tu n'entends rien, vérifie le mode silencieux et le volume."};
  keepU.push(u);speechSynthesis.speak(u);if(isIOS)speechSynthesis.resume();res.textContent="Lecture en cours…";
  setTimeout(function(){if(!started)res.textContent="! La voix n'a pas démarré. Sur iPhone : désactive le mode silencieux, monte le volume, puis réessaie."},3500)}
function testMic(){var res=$("diagLive");if(!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&window.MediaRecorder)){res.textContent="✕ Enregistrement non pris en charge.";return}
  stopSpeak();res.textContent="Parle pendant 3 secondes…";
  navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){var mime=["audio/webm;codecs=opus","audio/webm","audio/mp4"].filter(function(m){return MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(m)})[0];var mr=new MediaRecorder(stream,mime?{mimeType:mime}:undefined),ch=[];mr.ondataavailable=function(e){if(e.data.size)ch.push(e.data)};
    var heard="",r=null;if(SR&&prefs.sr){try{r=new SR();r.lang=prefs.lang;r.interimResults=true;r.onresult=function(e){heard=Array.prototype.map.call(e.results,function(x){return x[0].transcript}).join(" ")};r.onerror=function(){};r.start()}catch(e){r=null}}
    mr.onstop=function(){stream.getTracks().forEach(function(t){t.stop()});var blob=new Blob(ch,{type:mr.mimeType||mime});var a=new Audio(URL.createObjectURL(blob));
      res.textContent="✓ Micro OK ("+Math.round(blob.size/1024)+" Ko enregistrés). Réécoute en cours."+(SR&&prefs.sr?(heard?" Transcription : « "+heard+" »":" ! Aucune transcription reçue (normal sur certains iPhone)."):"");a.play().catch(function(){res.textContent+=" Touche à nouveau pour réécouter."})};
    mr.start();setTimeout(function(){try{r&&r.stop()}catch(e){}setTimeout(function(){mr.stop()},300)},3000)}).catch(function(){res.textContent="✕ Micro refusé. iPhone : Réglages → Safari → Micro → Autoriser (ou Réglages → l'app)."})}
$("diagBtn").addEventListener("click",runDiagnostic);
$("diagVoice").addEventListener("click",testVoice);
$("diagMic").addEventListener("click",testMic);

$("appVersion").textContent="Version "+APP_VERSION;
document.addEventListener("visibilitychange",function(){if(!document.hidden)render()});
})();
