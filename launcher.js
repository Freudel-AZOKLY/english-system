/* English System : écran de lancement, profils locaux, chargement de l'app */
(function(){
"use strict";
var REG="englishSystem_profiles",DEV="englishSystem_device",PFX="englishSystem_v3_",APPV="13";
var CLASSES=window.ES_CLASSES=["Chercheuse","Chercheur","Analyste","Stratège","Exploratrice","Explorateur","Oratrice","Orateur","Bâtisseuse","Bâtisseur"];
var RANKS=["E-RANK","D-RANK","C-RANK","B-RANK","A-RANK","S-RANK","NATIONAL LEVEL","SOVEREIGN // C1"];
var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
function $(id){return document.getElementById(id)}
function ls(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v);return true}catch(e){return false}}
function lsDel(k){try{localStorage.removeItem(k)}catch(e){}}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function rid(){return "p"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
function iso(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function dev(){try{return JSON.parse(ls(DEV)||"{}")||{}}catch(e){return {}}}
function devSet(o){var d=dev();for(var k in o)d[k]=o[k];lsSet(DEV,JSON.stringify(d))}

/* ---------- Registre des profils ---------- */
function saveReg(r){lsSet(REG,JSON.stringify(r))}
function loadReg(){var r=null;try{r=JSON.parse(ls(REG)||"null")}catch(e){}
  if(!r||!Array.isArray(r.list))r={active:"",list:[]};
  r.list=r.list.filter(function(p){return p&&p.id});
  if(!r.migrated){
    var legacy=ls("englishSystem_v3")||ls("englishSystem180_v2");
    if(legacy&&!r.list.length){try{var o=JSON.parse(legacy),id=rid();
      if(lsSet(PFX+id,legacy)){
        r.list.push({id:id,name:String(o.playerName||"Joueur 1").slice(0,30),created:new Date().toISOString()});r.active=id;r.legacy=id;
        var gh=ls("englishSystem_gh");if(gh)lsSet("englishSystem_gh_"+id,gh);
        var pr=ls("englishSystem_prefs");if(pr)lsSet("englishSystem_prefs_"+id,pr);
        devSet({auto:true});
      }}catch(e){}}
    r.migrated=1;saveReg(r)}
  return r}
function summary(p){var o=null;try{o=JSON.parse(ls(PFX+p.id)||"null")}catch(e){}o=o||{};
  var n=o.quests?Object.keys(o.quests).length:0,day=1;
  try{var sd=o.startDate?new Date(o.startDate+"T12:00:00"):null;if(sd&&!isNaN(sd)){var t=new Date();t.setHours(12,0,0,0);day=Math.max(1,Math.min(300,Math.round((t-sd)/864e5)+1+(+o.startOffset||0)))}}catch(e){}
  return {name:o.playerName||p.name||"Joueur",cls:o.playerClass||"",lv:o.seenLv||1,rank:RANKS[o.seenRank||0]||RANKS[0],day:day,blocks:n,updated:o.updatedAt||p.created||"",title:o.title||""}}
function ago(isoStr){if(!isoStr)return "jamais";var d=(Date.now()-new Date(isoStr).getTime())/6e4;if(isNaN(d))return "—";if(d<2)return "à l'instant";if(d<60)return "il y a "+Math.round(d)+" min";d/=60;if(d<24)return "il y a "+Math.round(d)+" h";d/=24;if(d<2)return "hier";return "il y a "+Math.round(d)+" jours"}

var reg=loadReg();

/* API pour l'app */
window.ES_PROFILES={
  touch:function(st){var r=loadReg(),p=r.list.filter(function(x){return x.id===window.ES_PROFILE.id})[0];if(!p)return;var nm=String(st.playerName||"").trim();if(nm&&p.name!==nm){p.name=nm.slice(0,30);saveReg(r)}},
  list:function(){return loadReg().list.map(function(p){var s=summary(p);s.id=p.id;return s})},
  pick:function(mode){try{sessionStorage.setItem("es_pick",mode||"pick")}catch(e){}location.reload()},
  remove:function(id){var r=loadReg();r.list=r.list.filter(function(p){return p.id!==id});if(r.active===id)r.active=r.list[0]?r.list[0].id:"";saveReg(r);
    lsDel(PFX+id);lsDel("englishSystem_gh_"+id);lsDel("englishSystem_prefs_"+id);
    try{var ks=[];for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k&&k.indexOf("englishSystem_dq_"+id+"_")===0)ks.push(k)}ks.forEach(lsDel)}catch(e){}},
  auto:function(v){if(v===undefined)return !!dev().auto;devSet({auto:!!v})}
};

/* ---------- Écrans ---------- */
var boot=$("boot"),stage=$("bootStage");
function show(html){stage.innerHTML='<div class="bt-card">'+html+'</div>';stage.classList.remove("bt-in");void stage.offsetWidth;stage.classList.add("bt-in");boot.classList.add("menu");var f=stage.querySelector("[autofocus]");if(f&&!("ontouchstart" in window))f.focus()}
function logo(cls){return '<div class="bt-logo '+(cls||"")+'">'+$("bootLogo").innerHTML+'</div>'}
function q(s){return stage.querySelector(s)}

function welcome(){
  show(logo("sm")+'<div class="bt-eyebrow">[ SYSTÈME ] Nouveau joueur détecté</div><h1 class="bt-h">Bienvenue dans English&nbsp;System</h1>'+
  '<p class="bt-p">Un programme complet pour passer de <b>A2</b> à <b>C1</b> en 300 jours, à raison de 2&nbsp;h par jour.</p>'+
  '<ul class="bt-list"><li><span>◆</span><div><b>Tout est intégré</b><br>Écoutes, lectures, grammaire, vocabulaire, écriture, oral et tests mensuels.</div></li>'+
  '<li><span>◆</span><div><b>Une quête par jour</b><br>Gagne de l\'XP, monte de rang de E à C1, débloque des titres.</div></li>'+
  '<li><span>◆</span><div><b>Ton profil reste chez toi</b><br>Tout est enregistré sur cet appareil. Rien n\'est envoyé sur un serveur, sans compte ni mot de passe.</div></li></ul>'+
  '<div class="bt-actions"><button class="btn primary bt-big" data-b="new" autofocus>Créer mon profil</button><button class="btn ghost" data-b="imp">J\'ai déjà un profil : l\'importer</button></div>'+impInput());
  q('[data-b="new"]').onclick=function(){create(welcome)};bindImport(welcome);
}
function impInput(){return '<input type="file" accept=".json,application/json" data-b="file" hidden><p class="bt-err tiny" data-b="err" role="alert"></p>'}
function bindImport(back){var f=q('[data-b="file"]');q('[data-b="imp"]').onclick=function(){f.click()};
  f.onchange=function(){var file=f.files&&f.files[0];if(!file)return;var rd=new FileReader();rd.onload=function(){var o;try{o=JSON.parse(String(rd.result))}catch(e){o=null}
    if(!o||typeof o!=="object"||!(o.quests||o.assessments)){q('[data-b="err"]').textContent="Ce fichier n'est pas une sauvegarde English System (fichier .json exporté depuis Réglages → Mes données).";return}
    var r=loadReg(),id=rid(),name=String(o.playerName||file.name.replace(/\.json$/i,"").replace(/english-system-?/i,"")||"Joueur").slice(0,30);
    if(!lsSet(PFX+id,JSON.stringify(o))){q('[data-b="err"]').textContent="Impossible d'enregistrer sur cet appareil (navigation privée ?).";return}
    r.list.push({id:id,name:name,created:new Date().toISOString()});saveReg(r);enter(id,"Profil importé : "+name)};rd.readAsText(file);f.value=""}}

function create(back){
  var n=loadReg().list.length;
  show(logo("sm")+'<div class="bt-eyebrow">[ SYSTÈME ] Enregistrement du joueur</div><h1 class="bt-h">Crée ton profil</h1>'+
  '<form data-b="form" novalidate><div class="field"><label for="btName">Ton prénom ou pseudo</label><input type="text" id="btName" maxlength="30" autocomplete="nickname" required autofocus placeholder="Ex. Irène"></div>'+
  '<div class="field"><label for="btClass">Ta classe</label><select id="btClass">'+CLASSES.map(function(c){return '<option>'+esc(c)+'</option>'}).join("")+'</select><span class="tiny muted">Pour le style : tu peux la changer à tout moment.</span></div>'+
  '<div class="field"><label>Tes sujets</label><div class="bt-seg"><label><input type="radio" name="btTrack" value="acad" checked><span>🎓 Études & recherche</span></label><label><input type="radio" name="btTrack" value="pro"><span>💼 Travail & entreprise</span></label></div></div>'+
  '<div class="field"><label>Pour commencer</label><div class="bt-seg col"><label><input type="radio" name="btStart" value="pl" checked><span><b>Test de positionnement</b> (recommandé, 15 à 20 min) : le Système choisit ton point de départ.</span></label><label><input type="radio" name="btStart" value="d1"><span><b>Commencer au jour 1</b> : niveau A2, tu pourras faire le test plus tard.</span></label></div></div>'+
  '<p class="bt-err tiny" data-b="err" role="alert"></p><div class="bt-actions"><button class="btn primary bt-big" type="submit">Entrer dans le Système</button>'+(back?'<button class="btn ghost" type="button" data-b="back">← Retour</button>':'')+'</div></form>');
  var bk=q('[data-b="back"]');if(bk)bk.onclick=back;
  q('[data-b="form"]').onsubmit=function(e){e.preventDefault();var name=$("btName").value.trim();if(!name){q('[data-b="err"]').textContent="Indique un prénom ou un pseudo.";$("btName").focus();return}
    var r=loadReg();if(r.list.some(function(p){return p.name.toLowerCase()===name.toLowerCase()})){q('[data-b="err"]').textContent="Un profil porte déjà ce nom sur cet appareil.";return}
    var track=(stage.querySelector('input[name="btTrack"]:checked')||{}).value||"acad",st=(stage.querySelector('input[name="btStart"]:checked')||{}).value;
    var id=rid(),s={v:3,startOffset:0,placementSeen:st==="d1",startDate:iso(new Date()),track:track,freeMode:false,quests:{},playerName:name,playerClass:$("btClass").value,updatedAt:new Date().toISOString()};
    if(!lsSet(PFX+id,JSON.stringify(s))){q('[data-b="err"]').textContent="Impossible d'enregistrer sur cet appareil. Désactive la navigation privée.";return}
    r.list.push({id:id,name:name,created:new Date().toISOString()});saveReg(r);
    if(r.list.length===1)devSet({auto:true});
    enter(id,"Profil créé. Bienvenue, "+name+".")};
}

function picker(){
  var r=loadReg(),manage=false;
  function draw(){var items=r.list.map(function(p){var s=summary(p);return {p:p,s:s}}).sort(function(a,b){return a.p.id===r.active?-1:b.p.id===r.active?1:(b.s.updated>a.s.updated?1:-1)});
    show(logo("sm")+'<div class="bt-eyebrow">[ SYSTÈME ] Identification</div><h1 class="bt-h">Qui joue&nbsp;?</h1>'+
    '<div class="bt-profiles">'+items.map(function(it,i){var s=it.s;return '<div class="bt-prof'+(i===0?" last":"")+'"><button class="bt-prof-main" data-id="'+it.p.id+'"'+(i===0?" autofocus":"")+'><span class="bt-av">'+esc((s.name[0]||"?").toUpperCase())+'</span><span class="bt-pi"><b>'+esc(s.name)+'</b><span class="tiny">'+esc(s.rank)+' · LV.'+s.lv+' · Jour '+s.day+(s.cls?' · '+esc(s.cls):'')+'</span><span class="tiny muted">'+s.blocks+' bloc'+(s.blocks>1?"s":"")+' validé'+(s.blocks>1?"s":"")+' · '+ago(s.updated)+'</span></span><span class="bt-go">'+(i===0?"Continuer ▸":"▸")+'</span></button>'+
      (manage?'<button class="btn small danger" data-del="'+it.p.id+'">Supprimer</button>':'')+'</div>'}).join("")+'</div>'+
    '<div class="bt-actions row"><button class="btn" data-b="new">＋ Nouveau profil</button><button class="btn ghost" data-b="imp">⤓ Importer un profil</button><button class="btn ghost small" data-b="manage">'+(manage?"Terminé":"Gérer")+'</button></div>'+
    '<label class="bt-auto tiny"><input type="checkbox" data-b="auto"'+(dev().auto?" checked":"")+'> Ouvrir directement le dernier profil au lancement</label>'+
    '<p class="tiny muted bt-note">Chaque profil est stocké uniquement sur cet appareil. Pour continuer sur un autre appareil : Réglages → Mes données → Exporter, puis « Importer un profil » ici.</p>'+impInput());
    stage.querySelectorAll("[data-id]").forEach(function(b){b.onclick=function(){enter(b.dataset.id)}});
    stage.querySelectorAll("[data-del]").forEach(function(b){b.onclick=function(){var id=b.dataset.del,p=r.list.filter(function(x){return x.id===id})[0];
      if(b.dataset.sure){window.ES_PROFILES.remove(id);delRecs(id);r=loadReg();if(!r.list.length){welcome();return}draw();return}
      b.dataset.sure="1";b.textContent="Confirmer : effacer "+(p?p.name:"")+" ?"}});
    q('[data-b="new"]').onclick=function(){create(picker)};
    q('[data-b="manage"]').onclick=function(){manage=!manage;draw()};
    q('[data-b="auto"]').onchange=function(){devSet({auto:this.checked})};
    bindImport(picker)}
  draw()}
function delRecs(id){try{var o=indexedDB.open("englishSystemAudio",1);o.onupgradeneeded=function(){var d=o.result;var st=d.createObjectStore("rec",{keyPath:"id"});st.createIndex("day","day")};o.onsuccess=function(){var d=o.result,tx=d.transaction("rec","readwrite"),c=tx.objectStore("rec").openCursor();c.onsuccess=function(){var cur=c.result;if(!cur)return;if(cur.value.profile===id)cur.delete();cur.continue()}}}catch(e){}}

/* ---------- Entrée dans l'app ---------- */
var entered=false;
function enter(id,msg){if(entered)return;entered=true;var r=loadReg();if(!r.list.some(function(p){return p.id===id})){entered=false;picker();return}
  r.active=id;saveReg(r);var p=r.list.filter(function(x){return x.id===id})[0];
  window.ES_PROFILE={id:id,name:p.name,legacy:r.legacy===id,key:PFX+id,welcome:msg||"",count:r.list.length};
  boot.classList.add("out");document.documentElement.classList.remove("booting");
  var s=document.createElement("script");s.src="app.js?v="+APPV;s.onerror=function(){stage.innerHTML='<div class="bt-card"><p class="bt-err">Impossible de charger l\'application. Vérifie ta connexion puis recharge la page.</p><button class="btn primary" onclick="location.reload()">Recharger</button></div>';boot.classList.remove("out")};
  document.body.appendChild(s);
  setTimeout(function(){boot.classList.add("gone")},reduce?50:650)}

/* ---------- Séquence de lancement ---------- */
var mode="";try{mode=sessionStorage.getItem("es_pick")||"";sessionStorage.removeItem("es_pick")}catch(e){}
var d=dev(),activeOk=reg.list.some(function(p){return p.id===reg.active});
var direct=!mode&&d.auto&&activeOk;
var dur=d.splash===false?0:reduce?300:(direct?1100:1900);
var done=false;
function next(){if(done)return;done=true;boot.classList.add("ready");
  if(direct){enter(reg.active);return}
  if(mode==="new"){create(reg.list.length?picker:welcome);return}
  if(!reg.list.length){welcome();return}
  picker()}
if(dur){boot.addEventListener("click",function sk(){boot.removeEventListener("click",sk);next()});setTimeout(next,dur)}else next();
})();
