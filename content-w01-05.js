/* English System — contenu original, semaines 1 à 5 (A2 → A2+) */
(function(){
var ES=window.ES_CONTENT=window.ES_CONTENT||{weeks:{},tests:{}};

ES.weeks[1]={
 theme:"Se présenter et décrire son quotidien",
 links:[["British Council — écoutes A2","https://learnenglish.britishcouncil.org/free-resources/listening/a2"],["BBC Learning English","https://www.bbc.co.uk/learningenglish"]],
 listening:[
  {title:"Meeting a new colleague",lines:[
   ["Tom","Hi, you must be Sara. I'm Tom. Welcome to the team!"],
   ["Sara","Thanks, Tom. Nice to meet you. Yes, I'm the new intern."],
   ["Tom","Great. So, what do you study?"],
   ["Sara","I study data analysis and economics at the university. I'm in my second year of a master's degree."],
   ["Tom","Interesting. And what are you working on this month?"],
   ["Sara","At the moment, I'm cleaning a big dataset about farms. It takes a lot of time, but I like it."],
   ["Tom","Do you usually work with R or Python?"],
   ["Sara","I usually use R, but this week I'm learning Python too."],
   ["Tom","Good idea. I start work at nine, and we have a short meeting every Monday at ten. Do you want a coffee before the meeting?"],
   ["Sara","Yes, please. I don't usually drink coffee, but today I need one!"]],
  questions:[
   ["What is Sara's position?",["She is a new intern","She is Tom's manager","She is a teacher"],0],
   ["What is she doing at the moment?",["Writing a report","Cleaning a dataset about farms","Teaching Python"],1],
   ["Which software does she usually use?",["Python","Excel","R"],2],
   ["When is the team meeting?",["Every Monday at ten","Every day at nine","Every Friday at ten"],0]]},
  {title:"My typical day",lines:[
   ["Lucy","My name is Lucy and I'm twenty-three. I live in a small flat near the city centre. On weekdays, I get up at seven o'clock. I have a quick breakfast, usually toast and tea, and then I take the bus to the university."],
   ["Lucy","My classes start at half past eight. In the morning, I study statistics and econometrics. I have lunch with my friends in the canteen. In the afternoon, I go to the library and work on my projects."],
   ["Lucy","This month is different, because I'm doing an internship in a research lab. So right now I'm working from nine to five, and I'm not going to classes. I'm enjoying it a lot."],
   ["Lucy","In the evening, I cook dinner and I watch a series in English. I go to bed at about eleven. At the weekend, I sleep late and I often visit my parents."]],
  questions:[
   ["How does Lucy go to the university?",["By car","By bus","On foot"],1],
   ["What does she study in the morning?",["Statistics and econometrics","History and law","English and French"],0],
   ["Why is this month different?",["She is on holiday","She is ill","She is doing an internship"],2],
   ["What does she do in the evening?",["She goes to the gym","She cooks and watches a series in English","She works in the library"],1]]}],
 reading:[
  {title:"A new life in Angers",text:"Marc is twenty-four years old and he comes from Lyon. Since September, he has lived in Angers, a city in the west of France. He is a student at the university, and he also works part-time in a bookshop on Saturdays.\n\nMarc's days are busy. He gets up early, cycles to the campus and attends lectures until lunchtime. In the afternoon, he usually works in a group with three other students. They are preparing a project about public transport in the city. Marc likes this project because he loves cycling and he wants the city to build more bike lanes.\n\nIn the evening, Marc relaxes. He plays the guitar or calls his family. He doesn't watch television, but he listens to podcasts in English because he wants to improve his speaking. 'I understand more and more every week,' he says.",
   gloss:[["part-time","à temps partiel"],["to cycle","aller à vélo"],["lecture","cours magistral"],["bike lane","piste cyclable"],["to improve","améliorer"]],
   questions:[
    ["Where does Marc come from?",["Angers","Lyon","Paris"],1],
    ["When does he work in the bookshop?",["On Saturdays","Every evening","On Mondays"],0],
    ["What is his group project about?",["Bookshops","Public transport","Music"],1],
    ["Why does he listen to podcasts in English?",["To improve his speaking","For his job","Because he doesn't have a TV"],0]]},
  {title:"Two routines",text:"Aisha and Ben share a flat, but their routines are very different. Aisha is a nurse. She works at night three times a week, so she sleeps during the day and goes to the hospital at eight in the evening. On her free days, she goes running in the park and meets her friends for lunch.\n\nBen works in an office. He starts at half past eight and finishes at five. He always takes the train, and he reads the news on his phone during the journey. Ben is very organised: he plans his week every Sunday evening.\n\nThis week, things are different for Ben. His office is closed for repairs, so he is working from home. He is enjoying the extra time, but he is spending too many hours in front of his computer. Aisha is helping him: every afternoon, she takes him for a walk.",
   gloss:[["to share","partager"],["nurse","infirmière"],["journey","trajet"],["repairs","travaux, réparations"],["extra","supplémentaire"]],
   questions:[
    ["What is Aisha's job?",["Office worker","Nurse","Teacher"],1],
    ["How does Ben usually travel to work?",["By train","By bike","By car"],0],
    ["Why is Ben working from home this week?",["He is ill","His office is closed for repairs","He prefers it"],1],
    ["How is Aisha helping Ben?",["She cooks for him","She plans his week","She takes him for a walk every afternoon"],2]]}],
 grammar:{title:"Present simple vs present continuous",
  lesson:"Present simple : habitudes, vérités générales, emploi du temps. « I work in a lab. » « She usually takes the bus. » Mots fréquents : always, usually, often, every day, on Mondays.\n\nPresent continuous (be + -ing) : action en cours maintenant, ou situation temporaire. « I'm working on a dataset this week. » Mots fréquents : now, at the moment, today, this week.\n\nAttention : à la 3e personne du singulier, le present simple prend -s (she works). Les verbes d'état (like, know, want, need, understand) ne se mettent normalement pas au continuous : « I need a coffee », pas « I'm needing ».",
  ex:[
   ["She ___ (work) in a research lab.","works"],
   ["Look! It ___ (rain).","is raining|'s raining"],
   ["I usually ___ (take) the bus to university.","take"],
   ["This week, we ___ (use) Python instead of R.","are using|'re using"],
   ["He ___ (not / like) coffee.","doesn't like|does not like"],
   ["___ you understand the question?","Do"],
   ["Right now, Sara ___ (clean) the data.","is cleaning|'s cleaning"],
   ["My parents ___ (live) in Lyon.","live"]]},
 vocab:[["to get up","se lever","I get up at seven on weekdays."],["weekday","jour de semaine","On weekdays I study at the library."],["internship","stage","I'm doing an internship in a research lab."],["dataset","jeu de données","The dataset has two million rows."],["to clean data","nettoyer des données","Cleaning data takes a lot of time."],["meeting","réunion","We have a team meeting every Monday."],["degree","diplôme","She is doing a master's degree in econometrics."],["part-time","à temps partiel","He works part-time in a shop."],["to share","partager","I share a flat with a friend."],["at the moment","en ce moment","At the moment, I'm learning Python."],["usually","d'habitude","I usually have tea for breakfast."],["to attend","assister à","I attend lectures every morning."],["busy","occupé, chargé","My Mondays are always busy."],["to improve","améliorer","I want to improve my speaking."],["nice to meet you","enchanté(e)","Hi, I'm Irène. Nice to meet you."]]
};

ES.weeks[2]={
 theme:"Raconter le passé : week-end, souvenirs, voyages",
 links:[["British Council — écoutes A2","https://learnenglish.britishcouncil.org/free-resources/listening/a2"],["British Council — grammaire","https://learnenglish.britishcouncil.org/category/resource-skill/grammar"]],
 listening:[
  {title:"How was your weekend?",lines:[
   ["Emma","Hi Josh! How was your weekend?"],
   ["Josh","It was great, thanks. On Saturday I went to the coast with my sister."],
   ["Emma","Lovely! Where did you go?"],
   ["Josh","We drove to a small town near Nantes. We walked on the beach and we ate fish and chips in a little restaurant."],
   ["Emma","Was the weather good?"],
   ["Josh","In the morning it was sunny, but in the afternoon it rained a lot. We got very wet! What about you?"],
   ["Emma","Oh, I didn't do much. I stayed at home on Saturday because I had a report to finish. But on Sunday I met some friends and we watched a film at the cinema."],
   ["Josh","Which film did you see?"],
   ["Emma","A documentary about climate change. It was really interesting, but a bit long."]],
  questions:[
   ["Who did Josh go to the coast with?",["His friends","His sister","His parents"],1],
   ["What happened in the afternoon?",["It rained a lot","They went swimming","They went to the cinema"],0],
   ["Why did Emma stay at home on Saturday?",["She was ill","She had a report to finish","It was raining"],1],
   ["What did Emma think of the film?",["Boring and short","Interesting but a bit long","Funny"],1]]},
  {title:"My first trip abroad",lines:[
   ["Daniel","When I was eighteen, I travelled abroad alone for the first time. I went to Edinburgh, in Scotland, for two weeks. I wanted to improve my English and see a new country."],
   ["Daniel","The first day was difficult. I arrived late at night, I was tired, and I didn't understand the bus driver at all! His accent was very strong. I felt a bit lost."],
   ["Daniel","But the next day, everything changed. I found a cheap hostel in the old town and I met two students from Spain. We visited the castle together, we climbed a hill called Arthur's Seat, and we tried haggis, a traditional Scottish dish. I didn't like it very much!"],
   ["Daniel","By the end of the trip, I understood people much better. I came back home more confident, and I decided to study English seriously."]],
  questions:[
   ["How old was Daniel?",["Sixteen","Eighteen","Twenty-one"],1],
   ["Why was the first day difficult?",["He lost his bag","He was tired and didn't understand the driver","It was cold"],1],
   ["Who did he meet at the hostel?",["Two students from Spain","A Scottish family","His teacher"],0],
   ["What did he decide after the trip?",["To live in Scotland","To study English seriously","To become a guide"],1]]}],
 reading:[
  {title:"The day everything went wrong",text:"Last Tuesday was a terrible day for Clara. First, her alarm didn't ring, so she woke up forty minutes late. She jumped out of bed, got dressed quickly and ran to the station. But when she arrived, the train was already leaving.\n\nShe waited for the next one and arrived at the office at half past ten. Her manager wasn't angry, but he reminded her about an important presentation at eleven. Clara opened her laptop and saw that her slides were not there. She forgot to save the file the day before!\n\nShe didn't panic. She asked a colleague for help, they found an old version of the file, and she updated it in twenty minutes. The presentation went well. In the evening, Clara bought a new alarm clock and went to bed early.",
   gloss:[["alarm","réveil"],["to get dressed","s'habiller"],["to remind","rappeler"],["slides","diapositives"],["to save a file","enregistrer un fichier"]],
   questions:[
    ["Why did Clara wake up late?",["She was ill","Her alarm didn't ring","She went to bed late"],1],
    ["What time did she arrive at the office?",["At 9:00","At 10:30","At 11:00"],1],
    ["What problem did she have with her slides?",["They were not saved","They had mistakes","Her laptop broke"],0],
    ["What did she do in the evening?",["She went out","She bought a new alarm clock","She worked late"],1]]},
  {title:"A summer job",text:"When Hugo was nineteen, he worked in a campsite in the south of France for the summer. He cleaned the swimming pool, helped families find their places and organised games for children. Many tourists came from the Netherlands, Germany and the UK, so he spoke English every day.\n\nAt first, he was shy. He didn't know many words and he made a lot of mistakes. But the tourists were patient and friendly. One British family invited him to dinner, and they talked for three hours about football, food and music.\n\nHugo earned some money, but he says that the money wasn't the most important thing. 'I learned to speak without fear,' he explains. 'I made mistakes, people understood me anyway, and I improved every week.'",
   gloss:[["campsite","camping"],["shy","timide"],["patient","patient"],["to earn","gagner (de l'argent)"],["without fear","sans peur"]],
   questions:[
    ["Where did Hugo work?",["In a hotel","In a campsite","In a restaurant"],1],
    ["Why did he speak English every day?",["Many tourists came from other countries","His boss was British","He took classes"],0],
    ["How was Hugo at first?",["Confident","Shy","Angry"],1],
    ["What was the most important thing for him?",["The money","Learning to speak without fear","The swimming pool"],1]]}],
 grammar:{title:"Past simple : verbes réguliers et irréguliers",
  lesson:"Le past simple raconte une action terminée à un moment précis du passé : yesterday, last week, in 2020, two days ago.\n\nVerbes réguliers : + -ed (work → worked, stay → stayed, study → studied, stop → stopped).\nVerbes irréguliers à connaître par cœur : go → went, have → had, see → saw, eat → ate, get → got, make → made, take → took, buy → bought, think → thought, feel → felt.\n\nNégation et question avec did + base verbale : « I didn't go. » « Did you go? » Jamais « I didn't went ».",
  ex:[
   ["Yesterday I ___ (go) to the library.","went"],
   ["We ___ (stay) at home last weekend.","stayed"],
   ["She ___ (not / understand) the driver.","didn't understand|did not understand"],
   ["___ you see the film?","Did"],
   ["They ___ (eat) fish and chips.","ate"],
   ["I ___ (buy) a new laptop last month.","bought"],
   ["He ___ (study) English in Edinburgh.","studied"],
   ["We ___ (not / have) time for lunch.","didn't have|did not have"]]},
 vocab:[["last weekend","le week-end dernier","Last weekend I visited my parents."],["to travel abroad","voyager à l'étranger","I travelled abroad for the first time at eighteen."],["to feel lost","se sentir perdu","On the first day, I felt lost."],["hostel","auberge de jeunesse","We stayed in a cheap hostel."],["confident","sûr de soi","I came back more confident."],["to get wet","se faire mouiller","We got very wet in the rain."],["to forget","oublier","I forgot to save the file."],["to wake up","se réveiller","I woke up forty minutes late."],["to go well","bien se passer","The presentation went well."],["to make a mistake","faire une erreur","I made a lot of mistakes at first."],["anyway","de toute façon, quand même","People understood me anyway."],["ago","il y a (temps)","I started my master's two years ago."],["to earn money","gagner de l'argent","He earned some money in the summer."],["shy","timide","At first, I was shy."],["a bit","un peu","The film was a bit long."]]
};

ES.weeks[3]={
 theme:"Poser des questions et demander des informations",
 links:[["British Council — écoutes A2","https://learnenglish.britishcouncil.org/free-resources/listening/a2"],["Cambridge English — activités","https://www.cambridgeenglish.org/"]],
 listening:[
  {title:"At the international office",lines:[
   ["Officer","Good morning. How can I help you?"],
   ["Student","Hello. I'd like some information about exchange programmes, please."],
   ["Officer","Of course. Which country are you interested in?"],
   ["Student","The UK or Ireland. Do I need a certain level of English?"],
   ["Officer","Yes. For most universities, you need a B2 level. Do you have a certificate?"],
   ["Student","Not yet. How can I get one?"],
   ["Officer","You can take an exam like IELTS or Cambridge. The next session is in March."],
   ["Student","How much does it cost?"],
   ["Officer","About two hundred and fifty euros. And the deadline for the exchange applications is the fifteenth of April."],
   ["Student","Sorry, could you repeat the date, please?"],
   ["Officer","The fifteenth of April. Here's a leaflet with all the details."]],
  questions:[
   ["Which countries is the student interested in?",["Spain or Italy","The UK or Ireland","The USA or Canada"],1],
   ["What level of English do most universities ask for?",["A2","B1","B2"],2],
   ["How much does the exam cost?",["About 150 euros","About 250 euros","About 350 euros"],1],
   ["What is the application deadline?",["15th March","15th April","5th April"],1]]},
  {title:"Booking a room",lines:[
   ["Receptionist","Hotel Riverside, good afternoon."],
   ["Guest","Hello. I'd like to book a room for two nights, please, from Friday."],
   ["Receptionist","Certainly. A single or a double room?"],
   ["Guest","A single, please. Is breakfast included?"],
   ["Receptionist","Yes, breakfast is included. The price is ninety pounds per night."],
   ["Guest","OK. Is the hotel far from the conference centre?"],
   ["Receptionist","No, it's about ten minutes on foot. Can I have your name, please?"],
   ["Guest","Yes, it's Irène Martin. That's M-A-R-T-I-N."],
   ["Receptionist","Thank you. And what time do you think you'll arrive?"],
   ["Guest","Around eight in the evening. Is that a problem?"],
   ["Receptionist","Not at all. Reception is open twenty-four hours."]],
  questions:[
   ["How many nights does the guest want?",["One","Two","Three"],1],
   ["What is included in the price?",["Dinner","Breakfast","Parking"],1],
   ["How far is the conference centre?",["Ten minutes on foot","Ten minutes by bus","Thirty minutes on foot"],0],
   ["When will the guest arrive?",["Around 6 p.m.","Around 8 p.m.","Around 10 p.m."],1]]}],
 reading:[
  {title:"How to ask good questions",text:"Many learners of English can answer questions, but they don't ask many. This is a problem, because conversations need questions to continue. If you only answer, the other person does all the work.\n\nThere are two types of questions. Closed questions start with an auxiliary, like 'Do you like your job?' or 'Are you tired?'. The answer is often just yes or no. Open questions start with a question word: what, where, when, why, how, who. For example: 'What do you like about your job?' These questions invite longer answers.\n\nA good tip is to ask a follow-up question. If someone says 'I went to London last week,' don't just say 'Nice!'. Ask 'What did you do there?' or 'How was the weather?'. People love talking about their experiences, and you will practise listening at the same time.",
   gloss:[["learner","apprenant"],["auxiliary","auxiliaire"],["to invite","inviter, encourager"],["tip","conseil, astuce"],["follow-up question","question de relance"]],
   questions:[
    ["What problem does the text describe?",["Learners ask too many questions","Learners don't ask many questions","Learners don't answer"],1],
    ["How do closed questions start?",["With an auxiliary","With 'why'","With a name"],0],
    ["What do open questions invite?",["Yes or no answers","Longer answers","No answer"],1],
    ["What is a follow-up question?",["A question to end the conversation","A question about the other person's last answer","A question about grammar"],1]]},
  {title:"Lost in the train station",text:"Yuki arrived at a big train station in London. She had a ticket for a train to Cambridge, but she couldn't find the right platform. The station was huge and very noisy, and the information screens changed every minute.\n\nShe decided to ask for help. She went to a man in a uniform and said, 'Excuse me, where does the train to Cambridge leave from?' He looked at her ticket and answered, 'Platform nine, but it's delayed by twenty minutes.' Yuki asked, 'Is there a café near the platform?' 'Yes, just on the left,' he said.\n\nYuki bought a coffee and waited. She felt proud: she asked two questions, she understood the answers, and she didn't need to use a translation app.",
   gloss:[["platform","quai"],["huge","immense"],["noisy","bruyant"],["delayed","en retard"],["proud","fière"]],
   questions:[
    ["Where did Yuki want to go?",["Oxford","Cambridge","Manchester"],1],
    ["Why was it difficult to find the platform?",["The station was huge and noisy","She lost her ticket","The man didn't help"],0],
    ["How late was the train?",["Ten minutes","Twenty minutes","One hour"],1],
    ["Why did Yuki feel proud?",["She caught an earlier train","She understood without a translation app","She found a cheap ticket"],1]]}],
 grammar:{title:"Questions, négations et auxiliaires",
  lesson:"En anglais, une question se construit avec un auxiliaire avant le sujet.\n• Avec be : « Are you a student? » « Is she tired? »\n• Avec les autres verbes au présent : do / does + base verbale : « Do you work here? » « Does he like R? »\n• Au passé : did : « Did you finish? »\n• Mot interrogatif + auxiliaire + sujet + verbe : « Where do you live? » « Why did she leave? »\n\nNégation : don't / doesn't / didn't + base verbale : « She doesn't speak Spanish. »\nPièges : « Where you live? » ✗ → « Where do you live? » ✓. « Does she works? » ✗ → « Does she work? » ✓.",
  ex:[
   ["___ you live near the university?","Do"],
   ["Where ___ she work?","does"],
   ["___ they arrive yesterday?","Did"],
   ["He ___ (not) speak Spanish.","doesn't|does not"],
   ["What time ___ the meeting start?","does"],
   ["___ you tired this morning?","Were|Are"],
   ["Why ___ you choose econometrics?","did"],
   ["We ___ (not) need a certificate.","don't|do not"]]},
 vocab:[["I'd like…","je voudrais…","I'd like some information, please."],["deadline","date limite","The deadline is the fifteenth of April."],["to apply for","postuler à","I want to apply for an exchange programme."],["leaflet","dépliant","Here's a leaflet with all the details."],["to book","réserver","I'd like to book a room."],["included","compris","Is breakfast included?"],["on foot","à pied","It's ten minutes on foot."],["could you repeat…?","pourriez-vous répéter…?","Sorry, could you repeat the date?"],["delayed","retardé","The train is delayed by twenty minutes."],["platform","quai","The train leaves from platform nine."],["how much does it cost?","combien ça coûte ?","How much does the exam cost?"],["to be interested in","s'intéresser à","I'm interested in data science."],["certificate","certificat, attestation","Do you have an English certificate?"],["follow-up question","question de relance","Always ask a follow-up question."],["to look for","chercher","I'm looking for the international office."]]
};

ES.weeks[4]={
 theme:"Expériences de vie et compétences",
 links:[["British Council — écoutes A2","https://learnenglish.britishcouncil.org/free-resources/listening/a2"],["British Council — grammaire","https://learnenglish.britishcouncil.org/category/resource-skill/grammar"]],
 listening:[
  {title:"Have you ever…?",lines:[
   ["Interviewer","Thanks for coming. Let's start with your experience. Have you ever worked with large datasets?"],
   ["Candidate","Yes, I have. During my internship last year, I worked with a database of about three million observations."],
   ["Interviewer","Impressive. Have you ever presented your results to non-experts?"],
   ["Candidate","Yes, a few times. Last month I presented a dashboard to a group of farmers. I explained the results without technical words."],
   ["Interviewer","And have you used Python?"],
   ["Candidate","I've used it for small projects, but I haven't used it for a big project yet. I mainly use R and Stata."],
   ["Interviewer","That's fine. Have you ever lived abroad?"],
   ["Candidate","No, I haven't, but I've travelled to England and Spain, and I'd love to work in an international team."]],
  questions:[
   ["How big was the database in the internship?",["About 300,000 observations","About three million observations","About thirty million observations"],1],
   ["Who did the candidate present a dashboard to?",["Students","Farmers","Investors"],1],
   ["What is true about Python?",["The candidate has never used it","The candidate used it for small projects","Python is the main tool"],1],
   ["Has the candidate lived abroad?",["Yes, in England","Yes, in Spain","No"],2]]},
  {title:"Something I've never done",lines:[
   ["Nadia","I've done many things in my life. I've climbed a mountain in the Alps, I've run a half-marathon and I've learnt to play the piano. But there is one thing I've never done: I've never spoken in public in English."],
   ["Nadia","Last year, my professor asked me to present my research at a conference in Dublin. I said no. I was too scared. I've regretted that decision since then."],
   ["Nadia","So this year I've changed my strategy. I've joined a small group that meets every Thursday to practise presentations. I've already given three short talks, and the last one went quite well."],
   ["Nadia","I haven't been to a conference yet, but I've sent an abstract to one in June. Fingers crossed!"]],
  questions:[
   ["What has Nadia never done?",["Run a half-marathon","Spoken in public in English","Played the piano"],1],
   ["Why did she say no to the conference?",["She was too scared","She was ill","It was too expensive"],0],
   ["How often does her group meet?",["Every Monday","Every Thursday","Once a month"],1],
   ["What has she sent to a conference?",["A video","An abstract","A poster"],1]]}],
 reading:[
  {title:"A CV that tells a story",text:"Many students write their CV as a simple list: degree, internship, skills, languages. This is correct, but it is often boring, and recruiters read hundreds of CVs every week.\n\nCareer advisers recommend a different approach. For each experience, explain what you did and what result you achieved. Instead of 'Internship in a research lab', write 'Analysed 3 million plant variety records with R and presented the results to the research team.' Numbers and action verbs make your experience concrete.\n\nIt is also important to be honest about your languages. If you have never used English at work, don't write 'fluent'. Write your real level, for example 'English: B1, currently preparing for C1'. Recruiters prefer honesty, and the interview will show your real level anyway.",
   gloss:[["CV / résumé","CV"],["recruiter","recruteur"],["career adviser","conseiller d'orientation"],["to achieve","obtenir, accomplir"],["fluent","courant (niveau de langue)"]],
   questions:[
    ["What is the problem with a simple list?",["It is incorrect","It is often boring","It is too long"],1],
    ["What do advisers recommend?",["Explain what you did and the result","Write only your degree","Use long paragraphs"],0],
    ["What makes experience concrete?",["Colours and photos","Numbers and action verbs","Long sentences"],1],
    ["What does the text say about languages?",["Always write 'fluent'","Be honest about your real level","Don't mention them"],1]]},
  {title:"Ten years later",text:"Ten years ago, Sam left school without a diploma. He worked in a supermarket and thought that studying was not for him. Since then, his life has changed a lot.\n\nAt twenty-two, he started evening classes in mathematics. He discovered that he loved numbers. He has since completed a degree in statistics, and he has worked for two companies as a data analyst. Last year, he became the manager of a small team.\n\nSam has also started a blog where he writes about his experience. He has received hundreds of messages from people in the same situation. 'It's never too late,' he writes. 'I failed at school, but I haven't failed in life.'",
   gloss:[["to leave school","quitter l'école"],["evening classes","cours du soir"],["to complete","terminer, achever"],["to fail","échouer"],["it's never too late","il n'est jamais trop tard"]],
   questions:[
    ["What did Sam do after school?",["He went to university","He worked in a supermarket","He travelled"],1],
    ["What did he discover in evening classes?",["He loved numbers","He hated maths","He wanted to be a teacher"],0],
    ["What happened last year?",["He lost his job","He became a team manager","He started university"],1],
    ["What is the message of his blog?",["It's never too late","Leave school early","Supermarkets are good jobs"],0]]}],
 grammar:{title:"Present perfect vs past simple",
  lesson:"Present perfect (have / has + participe passé) : expérience de vie sans date précise, ou lien avec le présent. « I have worked with large datasets. » « She has never lived abroad. » Mots fréquents : ever, never, already, yet, just, since, for.\n\nPast simple : action terminée avec un moment précis. « I worked there in 2023. » « Last month I presented a dashboard. »\n\nRègle d'or : si tu dis QUAND (yesterday, last year, in 2020, ago), utilise le past simple. « I have seen him yesterday » ✗ → « I saw him yesterday » ✓.\nFor + durée (for three years), since + point de départ (since 2022) : « I have lived here since 2022. »",
  ex:[
   ["I ___ (never / be) to Ireland.","have never been|'ve never been"],
   ["She ___ (finish) her report yesterday.","finished"],
   ["Have you ever ___ (use) Stata?","used"],
   ["We ___ (live) in Angers since 2022.","have lived|'ve lived"],
   ["They ___ (go) to London last summer.","went"],
   ["He ___ (not / send) the email yet.","hasn't sent|has not sent"],
   ["I ___ (know) her for five years.","have known|'ve known"],
   ["Two years ago, I ___ (start) my master's.","started"]]},
 vocab:[["have you ever…?","as-tu déjà… ?","Have you ever presented your results in English?"],["experience","expérience","I have three months of experience in data analysis."],["skill","compétence","Communication is an important skill."],["to present results","présenter des résultats","I presented my results to the team."],["non-expert","non-spécialiste","Explain it to a non-expert."],["yet","encore, déjà (question/négation)","I haven't finished yet."],["already","déjà","I've already sent the abstract."],["since","depuis (point de départ)","I've studied English since September."],["for","depuis / pendant (durée)","I've lived here for two years."],["to regret","regretter","I regretted my decision."],["to join","rejoindre","I joined a presentation group."],["abstract","résumé (article scientifique)","I sent an abstract to a conference."],["to achieve a result","obtenir un résultat","What result did you achieve?"],["honest","honnête","Be honest about your level."],["fingers crossed","je croise les doigts","I've applied for the job. Fingers crossed!"]]
};

ES.weeks[5]={
 theme:"Projets et futur",
 links:[["British Council — écoutes A2","https://learnenglish.britishcouncil.org/free-resources/listening/a2"],["British Council — lectures B1","https://learnenglish.britishcouncil.org/free-resources/reading/b1"]],
 listening:[
  {title:"Plans for next year",lines:[
   ["Leo","So, Irène, what are you going to do after your master's?"],
   ["Irène","I'm going to apply for a PhD. I've already contacted a professor in Nantes."],
   ["Leo","That's exciting! When will you know?"],
   ["Irène","I think I'll get an answer in spring. In the meantime, I'm meeting him next Tuesday to discuss my project."],
   ["Leo","What's your project about?"],
   ["Irène","Innovation in agriculture. I want to study how plant variety protection affects research."],
   ["Leo","Sounds great. And if it doesn't work out?"],
   ["Irène","Then I'll look for a job as a data analyst. But I'm going to do my best to get the PhD."],
   ["Leo","I'm sure it'll be fine. I'll help you prepare the interview if you want."],
   ["Irène","Really? Thanks, Leo. That would be very helpful."]],
  questions:[
   ["What is Irène going to apply for?",["A job in London","A PhD","A scholarship in Spain"],1],
   ["When is she meeting the professor?",["Next Tuesday","Next month","In spring"],0],
   ["What is her project about?",["Climate change","Innovation in agriculture","Public transport"],1],
   ["What will she do if it doesn't work out?",["Travel","Look for a job as a data analyst","Repeat her master's"],1]]},
  {title:"A message from the organisers",lines:[
   ["Organiser","Hello everyone, and thank you for registering for the Young Researchers' Day. Here is some important information about the event."],
   ["Organiser","The day will start at nine o'clock with a welcome coffee in the main hall. At half past nine, Professor Green will give the opening talk. Then, from ten to twelve, you are going to present your posters in room B."],
   ["Organiser","Lunch will be served at half past twelve. In the afternoon, there will be three workshops. You need to choose one before Friday on our website."],
   ["Organiser","Please don't forget your student card. And one more thing: the event is going to finish at five, but we're organising a small party in the evening. Everyone is welcome!"]],
  questions:[
   ["What happens at 9 a.m.?",["Opening talk","Welcome coffee","Posters"],1],
   ["Where are the posters presented?",["Main hall","Room B","Online"],1],
   ["What must participants do before Friday?",["Choose a workshop","Pay a fee","Send their poster"],0],
   ["What is happening in the evening?",["A small party","A second talk","Nothing"],0]]}],
 reading:[
  {title:"Setting goals that work",text:"At the start of every year, millions of people make resolutions: 'I'll speak better English', 'I'll do more sport'. By February, most of them have stopped. Why?\n\nPsychologists say the problem is that these goals are too vague. 'I'll speak better English' doesn't tell you what to do on Monday morning. A better goal is specific and measurable: 'I'm going to speak English for twenty minutes every day and record myself.'\n\nIt also helps to plan for difficulties. Ask yourself: 'What will I do when I'm tired?' For example: 'If I'm too tired after work, I'll do ten minutes instead of twenty, but I won't skip the day.' This small plan protects your habit. After a few weeks, the habit becomes automatic, and you won't need so much motivation.",
   gloss:[["resolution","bonne résolution"],["vague","flou, vague"],["measurable","mesurable"],["to skip","sauter (une séance)"],["habit","habitude"]],
   questions:[
    ["What happens to most resolutions by February?",["People have stopped","They are finished","They become easier"],0],
    ["What is the problem with most goals?",["They are too vague","They are too short","They are too expensive"],0],
    ["What is an example of a better goal?",["Speak better English","Speak English for 20 minutes every day","Learn all the words"],1],
    ["What happens after a few weeks?",["The habit becomes automatic","You need more motivation","You stop"],0]]},
  {title:"The city of the future",text:"What will our cities look like in 2050? Experts don't agree on everything, but they share some predictions.\n\nFirst, there will probably be fewer cars in city centres. Many cities are already creating pedestrian streets and bike lanes, and public transport is going to become more important. Second, buildings will produce some of their own energy, with solar panels on roofs and better insulation.\n\nTechnology will also play a role. Sensors will measure air quality and traffic in real time, and this data will help cities make decisions. However, some experts warn that this will create new questions about privacy. Who will control the data, and how will it be used? These are questions that economists, engineers and citizens are going to discuss together.",
   gloss:[["prediction","prévision"],["pedestrian street","rue piétonne"],["insulation","isolation"],["sensor","capteur"],["privacy","vie privée"]],
   questions:[
    ["What will there probably be fewer of in city centres?",["Bikes","Cars","Buildings"],1],
    ["How will buildings produce energy?",["With solar panels","With coal","With wind only"],0],
    ["What will sensors measure?",["Air quality and traffic","People's opinions","Temperature only"],0],
    ["What concern do some experts raise?",["Privacy","Cost of bikes","Noise"],0]]}],
 grammar:{title:"Futur : will, going to, présent continu",
  lesson:"• Going to : intention ou projet déjà décidé, ou prévision basée sur un indice. « I'm going to apply for a PhD. » « Look at the clouds, it's going to rain. »\n• Will : décision prise au moment où l'on parle, promesse, prévision générale. « I'll help you. » « I think it will be fine. »\n• Présent continu : rendez-vous fixé, organisé. « I'm meeting the professor next Tuesday. »\n\nAprès if / when au sens futur, on utilise le présent : « If it doesn't work out, I'll look for a job. » (pas « if it won't work »).",
  ex:[
   ["I've decided: I ___ (apply) for a PhD.","am going to apply|'m going to apply"],
   ["The phone is ringing. — I ___ (answer) it!","'ll answer|will answer"],
   ["We ___ (meet) the professor next Tuesday at 10.","are meeting|'re meeting"],
   ["I think it ___ (be) a great event.","will be|'ll be"],
   ["If it ___ (rain), we'll stay inside.","rains"],
   ["Look at those clouds! It ___ (rain).","is going to rain|'s going to rain"],
   ["Don't worry, I ___ (not / forget).","won't forget|will not forget"],
   ["When I ___ (finish) my master's, I'll travel.","finish"]]},
 vocab:[["to apply for a PhD","candidater à un doctorat","I'm going to apply for a PhD."],["in the meantime","en attendant","In the meantime, I'll keep working."],["to work out","bien se passer, marcher","I hope it works out."],["to do one's best","faire de son mieux","I'll do my best."],["helpful","utile","That would be very helpful."],["to register","s'inscrire","I registered for the event."],["workshop","atelier","There are three workshops in the afternoon."],["goal","objectif","My goal is to reach C1."],["specific","précis","Make your goals specific."],["to skip","sauter","I won't skip a day."],["prediction","prévision","Experts share some predictions."],["probably","probablement","There will probably be fewer cars."],["to play a role","jouer un rôle","Data will play a role."],["however","cependant","However, there are risks."],["to look forward to","avoir hâte de","I'm looking forward to the conference."]]
};
})();
