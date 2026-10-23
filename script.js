const weeks = [{"id": 1, "title": "Extensions + Teachable Machine", "sub": "Extensions, Teachable Machine، التعرف على الأشياء", "desc": "تعرف على الـExtensions في PictoBlox، ونموذج Teachable Machine، وكتلة When This Sprite Clicked، وIf-Else، وIs Identified.", "lessons": [{"title": "المفاهيم الأساسية", "text": "Extensions في PictoBlox هي Code Blocks جاهزة تضيف خصائص وقدرات، ومنها الهاردوير والذكاء الاصطناعي. Teachable Machine يتيح استخدام نموذج تعلم آلي مدرب للتعرف على الأشياء."}, {"title": "التطبيق والخطوات", "text": "أنشئ/حمّل نموذج Image Model، واستخدم is identified as داخل If condition. استخدم When this sprite clicked لبدء الكود. الـCostumes تغيّر مظهر الـsprite ولا تقوم بالتعرف بالذكاء الاصطناعي."}], "resources": ["https://teachablemachine.withgoogle.com/train/image", "https://pictoblox.ai/"]}, {"id": 2, "title": "Events + If/Else + Object Recognition", "sub": "الأحداث والشرط والتعرف على الكائنات", "desc": "فهم الأحداث مثل النقر وGreen Flag، واستخدام If/Else، والتعرف على الكائنات باستخدام نموذج تعلم آلي.", "lessons": [{"title": "الأحداث والشروط", "text": "When this sprite clicked يشغّل الكود المرتبط بالـsprite عند النقر. الأحداث تحدد متى يبدأ الكود، مثل النقر وKeyboard وGreen Flag. If-Else يفحص شرطًا: If عند true وElse عند false."}, {"title": "التطبيق والخطوات", "text": "كتلة is identified تتحقق هل صورة الكاميرا تم التعرف عليها كـClass معين في نموذج ML. جهّز الإضافة والنموذج قبل استخدام كتل التعرف."}], "resources": ["https://pictoblox.ai/"]}, {"id": 3, "title": "Fruit Classifier + Space Battle", "sub": "مصنف الفواكه ومعركة الفضاء", "desc": "تصنيف الفواكه مع نسبة الثقة، ثم بناء Space Battle باستخدام السفينة والرصاص والـclones والكائنات الفضائية.", "lessons": [{"title": "Fruit Classifier + Space Battle", "text": "في Fruit Classification صنّف الفواكه في صورة خلفية واعرض نسبة الثقة لكل Class. في Space Battle تتحرك السفينة وتطلق رصاصًا وتتفاعل مع الكائنات الفضائية."}, {"title": "التطبيق والخطوات", "text": "استخدم Create clone of myself للرصاص، وانتظر بين الطلقات، واستخدم Pick random لتوقيت إنشاء الأعداء، وDelete this clone عندما يصيب الرصاص العدو."}], "resources": ["https://drive.google.com/file/d/1QgIN716v6ke4CuAUZu840XXYUakdtk2C/view", "https://drive.google.com/file/d/12B4aRpsBlX44VTwt_xQMU8gsky7C-8T0/view", "https://pictoblox.ai/"]}, {"id": 4, "title": "Flappy Astro + 7-Segment Display", "sub": "Astro وشاشة السبعة أجزاء", "desc": "استخدام Human Body Detection لتحريك Astro، وبناء شاشة 7-Segment بقوائم الأرقام والبث Start.", "lessons": [{"title": "Flappy Astro + 7-Segment", "text": "Flappy Astro: ثبّت Human Body Detection، اجعل الكاميرا 0% شفافية، وحلّل وضع الجسم باستمرار، ثم غيّر Y لـAstro حسب موضع الأنف. إذا لمس Astro الأنابيب يتوقف اللعب."}, {"title": "التطبيق والخطوات", "text": "7-Segment: لكل Segment قائمة أرقام يكون عندها On. اسأل المستخدم عن رقم، تحقّق من > -1 و< 10، أنشئ Number ثم Broadcast Start. كل Segment يفحص وجود Number في قائمته ويبدل Costume."}], "resources": ["https://drive.google.com/file/d/1xVbBQOTWyh54_7spiOG6s_6TxMg8rMBH/view", "https://drive.google.com/file/d/1b6slosKL7PW6CT2FB_U7S0V9NFyetiSp/view"]}, {"id": 5, "title": "Calculator with Blocks", "sub": "آلة حاسبة بالبلوكات", "desc": "آلة حاسبة للجمع والطرح والضرب والقسمة، مع التعامل مع القسمة على صفر وعرض MATH ERROR!.", "lessons": [{"title": "الآلة الحاسبة", "text": "استخدم متغيرات للأرقام والـoperator. عند الضغط على رقم: إذا كان operator فارغًا يتغير Number1، وإلا يتغير Number2. زر Equal يفحص العملية ويحسب النتيجة."}, {"title": "التطبيق والخطوات", "text": "للقسمة استخدم شرطًا منطقيًا لمنع القسمة على صفر، وإذا كان operator هو / وNumber2=0 اعرض MATH ERROR!."}], "resources": ["https://drive.google.com/file/d/1ys5F3j8Qd2omq12yPYeZFPC0eg1_vTc9/view", "https://pictoblox.ai/"]}, {"id": 6, "title": "Animal Classifier + Alpha Chatbot", "sub": "مصنف الحيوانات وAlpha Chatbot", "desc": "Object Detection لتصنيف الحيوانات، ثم أساسيات Alpha Chatbot: الترحيب، انتظار الإدخال، واستخدام متغير للاسم.", "lessons": [{"title": "مصنف الحيوانات + Alpha", "text": "Animal Classifier Smart يستخدم Object Detection ومدخلات المستخدم والشروط لتصنيف الحيوانات. أخفِ bouncing Box وأوقف الفيديو وحلل صورة المسرح."}, {"title": "التطبيق والخطوات", "text": "Alpha Chatbot يبدأ بتحية، ينتظر الإدخال، ويستخدم متغيرًا للاسم. User Input هو النص الذي يكتبه المستخدم."}], "resources": ["https://drive.google.com/file/d/1kmaRXFgtrRxhXQKn-PKTPQXKgJqyXwRx/view"]}, {"id": 7, "title": "Chatbot Input + Lists + Broadcast", "sub": "الإدخال والقوائم والبث", "desc": "ask and wait، المتغيرات، Learn List وAnswer List، Broadcast، والتعامل مع الأسئلة غير المعروفة.", "lessons": [{"title": "Chatbot", "text": "Initial Setup: ask name، خزّن الاسم، ثم تحية شخصية. استخدم ask and wait وset variable وsay. String Concatenation يتم بواسطة join."}, {"title": "التطبيق والخطوات", "text": "أنشئ Learn List وAnswer List. استخدم contains للمقارنة، ثم Broadcast مثل greeting، وعلى Sprite آخر when I receive للرد. للأسئلة المجهولة اسأل كيف ترد، وخزّن السؤال والإجابة في القائمتين."}], "resources": ["https://pictoblox.ai/"]}, {"id": 8, "title": "Face Expressions + Python Editor", "sub": "تعبيرات الوجه ومحرر Python", "desc": "تدريب نموذج لتعبيرات Happy/Sad/Normal وتحميله، ثم أساسيات Python Editor وTerminal وprint().", "lessons": [{"title": "Face Expressions + Python", "text": "درّب نموذج Teachable Machine على Happy وSad وNormal، ثم Export Model → Upload my model، وانسخ URL وحمّل النموذج في PictoBlox. برمج Tobi لقول الحالة لمدة ثانيتين."}, {"title": "التطبيق والخطوات", "text": "Python Editor: اكتب Python، شغّل Run، وراجع Terminal. print(\"Hello World\") يطبع Hello World، وprint(5+3) يطبع 8، بينما print(\"5 + 3\") يطبع النص نفسه. النصوص تحتاج quotes."}], "resources": ["https://teachablemachine.withgoogle.com/train/image", "https://pictoblox.ai/", "https://ide.mblock.cc/"]}, {"id": 9, "title": "Smart House", "sub": "المنزل الذكي", "desc": "تحكم صوتي في Piano وRadio وLight وLaptop باستخدام Cognitive Services وMusic وText to Speech.", "lessons": [{"title": "Smart House", "text": "أضف Cognitive Services وMusic وText to Speech. اجعل TTS بالإنجليزية وSpeech Recognition بالإنجليزية. إذا كانت الكلمة Piano/Radio/Light/Laptop فقم بـBroadcast مناسب، وإلا اعرض رسالة عدم الفهم."}, {"title": "التطبيق والخطوات", "text": "Piano يستقبل OpenPiano ويغيّر الـcostume ويشغّل النغمات C,G,E,F. Bulb يتفاعل مع Light، Radio يشغّل Dance Chill Out، وLaptop يعرض Windows. اختبر كل Sprite بـRun."}], "resources": ["https://ide.mblock.cc/", "https://drive.google.com/file/d/1Gx1pjaWc45XarHvp4K3q6-sW_4RmiSsH/view?usp=sharing", "https://drive.google.com/file/d/1G-XQPwrIgtr_Rzqz8ZRF9uCtsxF0eGLd/view"]}, {"id": 10, "title": "Talking Sprite + Full Smart House", "sub": "الشخصية المتحدثة والمنزل الذكي الكامل", "desc": "جعل الشخصية تقول اسم المستخدم باستخدام Python، ثم إكمال مشروع Smart House وتشغيل مكوناته.", "lessons": [{"title": "Talking Sprite + Smart House", "text": "عند النقر على الشخصية استخدم Python وevent.on_clicked، وعرّف SayHello(name) ثم اجعل الـsprite يتحدث باسم المستخدم. بعد ذلك أكمل مكونات Smart House."}, {"title": "التطبيق والخطوات", "text": "اختبر Python بعد التغيير، ثم Green Flag وMicrophone وقل Light للتأكد من استجابة المنزل الذكي."}], "resources": ["https://ide.mblock.cc/"]}, {"id": 11, "title": "Positive/Negative/Zero + Python Calculator", "sub": "الأرقام والآلة الحاسبة بـPython", "desc": "تصنيف الرقم إلى Positive/Negative/Zero، ثم بناء Python Calculator باستخدام المتغيرات والشروط.", "lessons": [{"title": "Positive/Negative/Zero + Calculator", "text": "إذا كان الرقم 0 اطبع Zero، وإذا كان أكبر من 0 اطبع Positive، وإلا Negative. في Python Calculator استخدم number1 وnumber2 وoperation، واسأل عن الرقم الأول والعملية والرقم الثاني ثم احسب باستخدام الشروط."}, {"title": "التطبيق والخطوات", "text": "عمليات + و- و* و/ تُنفذ بناءً على operation، ثم اعرض النتيجة."}], "resources": ["https://drive.google.com/file/d/14LZ3wLHHmpfCogmD6gxbMsdDb5Hzlz9G/view?usp=sharing"]}, {"id": 12, "title": "Autonomous Car + Even/Odd", "sub": "العربية ذاتية القيادة والزوجي/الفردي", "desc": "محاكاة سيارة تتبع المسار وتتعامل مع ألوان الجدران، ودالة Python لتحديد Even/Odd.", "lessons": [{"title": "Autonomous Car + Even/Odd", "text": "العربية تتحرك باستمرار وتفحص ألوان العلامات. إذا لامست العلامة الحمراء الحائط الأسود تلف يمينًا، وإذا لامست الخضراء الحائط الأسود تلف يسارًا، مع استمرار الحركة للأمام."}, {"title": "التطبيق والخطوات", "text": "Even/Odd: عرّف even_odd(number). إذا كان باقي القسمة على 2 يساوي 0 فالنتيجة Even، وإلا Odd."}], "resources": ["https://drive.google.com/file/d/1n-GN7IJcx5TrQc3J8zEJ2Hnn8Qk_gCsn/view", "https://ide.mblock.cc/"]}, {"id": 13, "title": "Functions + Rectangle Area + Min/Max", "sub": "الدوال والمساحة وMin/Max", "desc": "إنشاء دوال لحساب مساحة المستطيل، وإيجاد أصغر وأكبر قيمة بين ثلاثة أرقام.", "lessons": [{"title": "Functions", "text": "Rectangle: calculate_area(length,width) تعيد length*width. Min/Max: min_max(a,b,c) تستخدم min() وmax() لإيجاد أصغر وأكبر قيمة."}, {"title": "التطبيق والخطوات", "text": "جرّب استدعاء الدوال بقيم مختلفة واطبع النتائج."}], "resources": ["https://ide.mblock.cc/"]}, {"id": 14, "title": "Weather Forecast", "sub": "توقع الطقس", "desc": "تغيير الخلفية حسب حالة الطقس، تحريك الرياح، تحريك المطر، وحساب المتوسطات من قوائم درجات الحرارة والرطوبة والرياح.", "lessons": [{"title": "Weather Forecast", "text": "الخلفية تتغير بين Warm وCold. Wind sprite مخفي أولًا، ثم يتحرك من اليمين لليسار عند Windy. Rain sprite يبدّل الـcostumes عند Rainy."}, {"title": "التطبيق والخطوات", "text": "استخدم قوائم temperatures وhumidity_levels وwind_speeds. دالة summation تجمع عناصر القائمة. احسب المتوسط: sum/len. إذا متوسط الحرارة >23 → Warm، وإذا الرطوبة >70 → Rainy، وإذا الرياح >30 → Windy."}], "resources": ["https://drive.google.com/file/d/1pB46LHrKOCXVOnzjWc2Jydi8gE0RTJaU/view?usp=drive_link", "https://drive.google.com/file/d/12n9bxxL6USgu0EvfSym-ejOqWdapccVo/view"]}, {"id": 15, "title": "Loops + Break/Continue + Positive List", "sub": "الحلقات والتحكم والقائمة الموجبة", "desc": "for وrange، طباعة الأعداد الفردية، فهم Break وContinue، والبحث عن رقم سالب داخل قائمة.", "lessons": [{"title": "Loops", "text": "لطباعة الأعداد الفردية من 1 إلى 20 استخدم for مع range(1,21) وشرط الفردي. Break يوقف الحلقة كلها، وContinue يتخطى التكرار الحالي ويكمل."}, {"title": "التطبيق والخطوات", "text": "في Positive List اطبع القائمة، ثم مرّ على العناصر: إذا كان الرقم موجبًا اطبعه، وإلا قل Negative number found ثم break."}], "resources": ["https://ide.mblock.cc/"]}, {"id": 16, "title": "Buddy AI + Area Chatbot + Code Tracing", "sub": "Buddy AI وArea Chatbot وتتبع الكود", "desc": "معلومات الحيوانات، حساب مساحات الأشكال، while وfunctions، وتتبع نتائج أكواد Python مع مشروع نهائي.", "lessons": [{"title": "Buddy AI + Area Chatbot + Tracing", "text": "Buddy: قائمة animals وقائمة info_about_animals متوازيتان. اسأل عن الحيوان المفضل، ابحث بحلقة for، اعرض المعلومات عند العثور، واستخدم break؛ وإذا لم يوجد فاعرض رسالة عدم توفر المعلومات."}, {"title": "التطبيق والخطوات", "text": "Area Chatbot: while True، Quit → break، Circle/Rectangle/Triangle تستدعي دوال الحساب. Circle تستخدم math.pi*radius**2، والمستطيل length*width، والمثلث base*height/2. في Code Tracing: [1,2,3,4,5] مع [:4] تعطي [1,2,3,4]، وعكس banana بـ[::-1] يعطي ananab، و85 نتيجتها B وفق المثال المرفق."}], "resources": ["https://drive.google.com/file/d/1JAYuWyZDML40mZyLReW4kh0o7sDaB-O9/view?usp=drive_link", "https://drive.google.com/file/d/19hwU-XHUpgx7nw5lzQXYvvo5f1vDivjY/view"]}];

const priorityProjects = [
 {name:"Attendance", file:"projects/Actendanc(1).sb3", type:"Scratch 3 / SB3", desc:"مشروع الحضور المرفوع — مرفق داخل الحزمة وجاهز للرفع مع المنصة."},
 {name:"Autonomous Driving Car", file:"projects/Autonomus driving car student version.mblock", type:"mBlock", desc:"مشروع العربية ذاتية القيادة — أحد المشاريع الأساسية."},
 {name:"NEO Smart Home (Arduino)", file:"NEO_Smart_Home_Project/README_AR.md", type:"Arduino Uno / C++", desc:"مشروع المنزل الذكي: خطة التنفيذ، خريطة الأرجل، قائمة المكونات، وأكواد الباب بكلمة مرور والجراج الذكي وبداية الإضاءة والحركة."}
];

const state = JSON.parse(localStorage.getItem("neoLearnState")||'{"done":[]}');
const $ = s => document.querySelector(s);
function save(){localStorage.setItem("neoLearnState",JSON.stringify(state)); updateProgress();}
function updateProgress(){
 const n=state.done.length, p=Math.round(n/weeks.length*100);
 ["progressTop","percentHome","progressBig"].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=p+"%"});
 const d=$("#doneCount"); if(d)d.textContent=n;
 const pw=$("#progressWeeks"); if(pw)pw.textContent=n+" / "+weeks.length;
 const pr=$("#progressRemaining"); if(pr)pr.textContent=weeks.length-n;
 const pb=$("#progressBar"); if(pb)pb.style.width=p+"%";
 const ring=$("#progressRing"); if(ring)ring.style.background=`conic-gradient(var(--purple) ${p*3.6}deg,#241a30 ${p*3.6}deg)`;
}
function card(w){
 const done=state.done.includes(w.id);
 return `<article class="card ${done?'done':''}" data-id="${w.id}">
  <div class="num">WEEK ${String(w.id).padStart(2,'0')}</div>
  <h3>${w.title}</h3><p>${w.sub}</p>
  <span class="badge">${done?'✓ مكتمل':'ابدأ الأسبوع'}</span>
 </article>`;
}
function renderCards(){
 $("#homeWeeks").innerHTML=weeks.map(card).join("");
 $("#allWeeks").innerHTML=weeks.map(card).join("");
 document.querySelectorAll(".card").forEach(c=>c.onclick=()=>openWeek(+c.dataset.id));
}
function openWeek(id){
 const w=weeks.find(x=>x.id===id); if(!w)return;
 document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
 $("#weekDetail").classList.add("active");
 $("#detail").innerHTML=`<div class="detail-card">
  <div class="detail-title"><div><div class="eyebrow">WEEK ${String(w.id).padStart(2,'0')}</div><h1>${w.title}</h1><p>${w.desc}</p></div>
  <button class="complete" id="completeBtn">${state.done.includes(id)?'✓ مكتمل — إلغاء':'تحديد كمكتمل'}</button></div>
  ${w.lessons.map((l,i)=>`<div class="lesson"><h3>${i+1}. ${l.title}</h3><p>${l.text}</p></div>`).join("")}
  <div class="lesson"><h3>المصادر</h3><div class="resources">${w.resources.map((r,i)=>`<a class="resource" href="${r}" target="_blank" rel="noopener">فتح المصدر ${i+1} ↗</a>`).join("")}</div></div>
 </div>`;
 $("#completeBtn").onclick=()=>{ if(state.done.includes(id)) state.done=state.done.filter(x=>x!==id); else state.done.push(id); save(); openWeek(id); renderCards(); showToast("تم تحديث التقدم"); };
}
function showView(name){
 document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
 const v=$("#"+name); if(v)v.classList.add("active");
 document.querySelectorAll(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.view===name));
 if(name==="home"||name==="weeks"){renderCards();}
 if(name==="progress"){updateProgress();}
 if(name==="projects")renderProjects();
 if(name==="achievements")renderAchievements();
}
function renderProjects(){
 $("#projectGrid").innerHTML=priorityProjects.map(p=>`<article class="project-card">
 <div class="eyebrow">PRIORITY PROJECT</div><h3>${p.name}</h3><p>${p.desc}</p>
 <div class="project-file">${p.file}</div><p><small>${p.type}</small></p>
 <a class="resource" href="${p.file}" download>فتح/حفظ ملف المشروع ↗</a>
 </article>`).join("");
}
function renderAchievements(){
 const a=[
  ["◈","First Step","أكمل أول أسبوع",state.done.length>=1],
  ["◆","AI Explorer","أكمل 4 أسابيع",state.done.length>=4],
  ["◇","Code Builder","أكمل 8 أسابيع",state.done.length>=8],
  ["★","NEO Master","أكمل الـ16 أسبوعًا",state.done.length===16]
 ];
 $("#achievementGrid").innerHTML=a.map(x=>`<article class="achievement ${x[3]?'':'locked'}"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");
}
function showToast(t){const e=document.createElement("div");e.className="toast";e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),1800)}
document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>showView(b.dataset.view));
$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");
$("#backWeeks").onclick=()=>showView("weeks");
$("#search").oninput=e=>{
 const q=e.target.value.trim().toLowerCase();
 $("#allWeeks").innerHTML=weeks.filter(w=>(w.title+" "+w.sub+" "+w.desc).toLowerCase().includes(q)).map(card).join("");
 document.querySelectorAll("#allWeeks .card").forEach(c=>c.onclick=()=>openWeek(+c.dataset.id));
};
$("#themeBtn").onclick=()=>{document.body.classList.toggle("light");showToast(neoLang==='ar'?"تم تغيير وضع العرض":"Display mode changed")};
renderCards();renderProjects();renderAchievements();updateProgress();

// Arabic/English interface switch. Course data remains intact; core navigation and Electronics Lab are bilingual.
const neoTranslations = {
  ar: {
    navHome:'⌂ الرئيسية', navProgress:'◉ التقدم', navWeeks:'▦ الأسابيع الـ16', navProjects:'⚡ المشاريع', navElectronics:'⚡ الإلكترونيات', navAI:'🧠 الذكاء الاصطناعي', navAchievements:'★ الإنجازات',
    sideTitle:'المسار الدراسي', heroEyebrow:'SYSTEM ONLINE • 16 WEEKS', heroTitle:'اتعلم. <span>برمج.</span> ابتكر.',
    heroText:'من الذكاء الاصطناعي وTeachable Machine إلى Python والمشاريع التفاعلية — كل المنهج في مكان واحد.', startPath:'ابدأ المسار ←', startLearning:'ابدأ التعلم',
    fullPath:'المسار الكامل', chooseWeek:'اختر أي أسبوع للبدء.', progressTitle:'تقدمك في المسار', progressText:'ابدأ من 0% وشاهد تقدمك يزيد مع كل أسبوع مكتمل.', weeksTitle:'الأسابيع الـ16',
    search:'ابحث في الأسابيع أو الدروس...', progressLabel:'التقدم', completedWeeks:'أسبوع مكتمل', mainProjects:'مشروع أساسي', remaining:'أسبوع متبقي',
    electronicsTitle:'قسم الإلكترونيات', electronicsIntro:'اتعلّم الإلكترونيات خطوة بخطوة، وابدأ بالمحاكاة قبل توصيل الدوائر الحقيقية.',
    aiTitle:'دورة الذكاء الاصطناعي', aiIntro:'افهم الذكاء الاصطناعي وجرّب نماذج التعلّم الآلي وابنِ مشروعاتك خطوة بخطوة.', aiWelcome:'من الفكرة إلى نموذج ذكي', aiWelcomeText:'ابدأ بالتجارب البسيطة، ثم تعلّم كيف تدرّب نموذجًا وتختبره وتستخدمه في مشروع.', ai1:'ما هو الذكاء الاصطناعي؟', ai1p:'تعرّف على الذكاء الاصطناعي وتعلّم الآلة والبيانات والأمثلة اليومية.', ai2:'Teachable Machine', ai2p:'اجمع أمثلة لفئات مختلفة، درّب نموذج صور، ثم اختبره بكاميرا أو صور.', ai3:'Python والذكاء الاصطناعي', ai3p:'تدرّب على المتغيرات والشروط والقوائم والدوال، ثم استخدمها في تطبيقات بسيطة.', ai4:'درّب واختبر النموذج', ai4p:'افهم بيانات التدريب والاختبار، ودقة التوقعات، ولماذا قد يخطئ النموذج.', ai5:'مشروعات الذكاء الاصطناعي', ai5p:'مصنّف صور، مساعد أسئلة وأجوبة بسيط، أو نظام يربط التعرّف على الصور بمشروع إلكتروني.', ai6:'استخدام الذكاء الاصطناعي بمسؤولية', ai6p:'تحقق من النتائج، احترم الخصوصية، ولا ترفع صورًا أو معلومات شخصية دون إذن.', openTool:'افتح الأداة ↗', tutorTitle:'مساعد NEO التعليمي', tutorIntro:'اكتب سؤالًا عن موضوعات الدورة للحصول على شرح مبسط.', tutorPlaceholder:'مثال: ما هو التعلّم الآلي؟', askTutor:'اسأل المساعد', tutorDefault:'مرحبًا! اسألني عن الذكاء الاصطناعي أو Python أو Arduino.', tutorNote:'هذا مساعد تعليمي تجريبي يعمل بإجابات إرشادية داخل الموقع، وليس متصلًا حاليًا بخدمة ذكاء اصطناعي خارجية.', quizTitle:'اختبر معلوماتك', quizIntro:'أجب عن الأسئلة القصيرة وتعرّف على نتيجتك فورًا.', checkAnswers:'تصحيح الإجابات', quizCorrect:'إجابات صحيحة', quizOf:'من', quizTryAgain:'راجع الدروس وحاول مرة أخرى.', electronicsWelcome:'من الفكرة إلى الدائرة الذكية', electronicsWelcomeText:'افهم المكونات، جرّب التوصيلات، وبعدها برمج Arduino Uno لمشروعات عملية.',
    elec1:'أساسيات الكهرباء', elec1p:'الجهد والتيار والمقاومة، والفرق بين الدائرة المفتوحة والمغلقة، وقانون أوم.', elec2:'المكونات والحساسات', elec2p:'LED والمقاومات والأزرار والجرس وحساس المسافة Ultrasonic وحساس الحركة.', elec3:'لوحات Arduino', elec3p:'التعرّف على Arduino Uno، والمداخل والمخارج، ورفع أول برنامج باستخدام Arduino IDE.', elec4:'المحاكاة والتوصيلات', elec4p:'ابنِ دوائر افتراضية واختبرها قبل تنفيذها، باستخدام Wokwi أو Tinkercad Circuits.', elec5:'مشروعات Arduino', elec5p:'إشارة مرور، إضاءة تلقائية، إنذار مسافة، ري نباتات، ثم تطوير مشروع NEO Smart Home.', elec6:'الأمان في التوصيل', elec6p:'استخدم الجهد المنخفض المناسب، وتحقق من القطبية والمقاومات، ولا توصل Arduino مباشرة بكهرباء المنزل.', beginner:'مبتدئ', handsOn:'تطبيق عملي', safetyFirst:'السلامة أولًا', firstChallenge:'تحدّيك الأول', firstChallengeText:'شغّل LED باستخدام Arduino Uno ومقاومة مناسبة، ثم عدّل زمن التشغيل والإطفاء.', openFirstLesson:'افتح درس Blink ↗',
    projectsTitle:'المشاريع', projectsText:'المشروعان المرفوعان مرفقان داخل حزمة الموقع.', achievementsTitle:'الإنجازات', themeToast:'تم تغيير وضع العرض', langToast:'تم تغيير اللغة إلى العربية'
  },
  en: {
    navHome:'⌂ Home', navProgress:'◉ Progress', navWeeks:'▦ 16 Weeks', navProjects:'⚡ Projects', navElectronics:'⚡ Electronics', navAI:'🧠 AI Course', navAchievements:'★ Achievements',
    sideTitle:'LEARNING PATH', heroEyebrow:'SYSTEM ONLINE • 16 WEEKS', heroTitle:'Learn. <span>Code.</span> Create.',
    heroText:'From Artificial Intelligence and Teachable Machine to Python and interactive projects — your learning path in one place.', startPath:'Start Path →', startLearning:'Start Learning',
    fullPath:'Complete Learning Path', chooseWeek:'Choose any week to begin.', progressTitle:'Your Learning Progress', progressText:'Start at 0% and watch your progress grow with every completed week.', weeksTitle:'16-Week Curriculum',
    search:'Search weeks or lessons...', progressLabel:'Progress', completedWeeks:'Weeks completed', mainProjects:'Main projects', remaining:'Weeks remaining',
    electronicsTitle:'Electronics Course', electronicsIntro:'Learn electronics step by step. Start with simulation before wiring real circuits.',
    aiTitle:'Artificial Intelligence Course', aiIntro:'Understand AI, try machine-learning models, and build projects step by step.', aiWelcome:'From an Idea to an Intelligent Model', aiWelcomeText:'Start with simple experiments, then learn how to train, test, and use a model in a project.', ai1:'What is Artificial Intelligence?', ai1p:'Explore AI, machine learning, data, and everyday examples.', ai2:'Teachable Machine', ai2p:'Collect examples for different classes, train an image model, and test it with a camera or images.', ai3:'Python for AI', ai3p:'Practice variables, conditions, lists, and functions, then use them in simple applications.', ai4:'Train and Test a Model', ai4p:'Understand training and testing data, prediction confidence, and why models can make mistakes.', ai5:'AI Projects', ai5p:'Build an image classifier, a simple Q&A assistant, or connect image recognition to an electronics project.', ai6:'Responsible AI', ai6p:'Check results, respect privacy, and do not upload personal images or information without permission.', openTool:'Open tool ↗', tutorTitle:'NEO Learning Assistant', tutorIntro:'Ask a question about course topics to get a simple explanation.', tutorPlaceholder:'Example: What is machine learning?', askTutor:'Ask assistant', tutorDefault:'Hello! Ask me about AI, Python, or Arduino.', tutorNote:'This is a demo learning assistant with guided answers built into the site. It is not currently connected to an external AI service.', quizTitle:'Test Your Knowledge', quizIntro:'Answer these short questions and see your score instantly.', checkAnswers:'Check answers', quizCorrect:'Correct answers', quizOf:'out of', quizTryAgain:'Review the lessons and try again.', electronicsWelcome:'From an Idea to a Smart Circuit', electronicsWelcomeText:'Understand components, try circuit connections, then program Arduino Uno for practical projects.',
    elec1:'Electricity Basics', elec1p:'Voltage, current, resistance, open and closed circuits, and Ohm’s law.', elec2:'Components & Sensors', elec2p:'LEDs, resistors, buttons, buzzers, ultrasonic distance sensors, and motion sensors.', elec3:'Arduino Boards', elec3p:'Explore Arduino Uno, input/output pins, and upload your first sketch using Arduino IDE.', elec4:'Simulation & Wiring', elec4p:'Build and test virtual circuits before making them physically with Wokwi or Tinkercad Circuits.', elec5:'Arduino Projects', elec5p:'Traffic lights, automatic lighting, distance alarms, plant watering, and the NEO Smart Home project.', elec6:'Wiring Safety', elec6p:'Use suitable low voltage, check polarity and resistors, and never connect Arduino directly to household mains.', beginner:'Beginner', handsOn:'Hands-on', safetyFirst:'Safety first', firstChallenge:'Your First Challenge', firstChallengeText:'Light an LED with Arduino Uno and a suitable resistor, then change the on/off timing.', openFirstLesson:'Open Blink lesson ↗',
    projectsTitle:'Projects', projectsText:'The two uploaded projects are included in the website package.', achievementsTitle:'Achievements', themeToast:'Display mode changed', langToast:'Language changed to English'
  }
};
let neoLang = localStorage.getItem('neoLearnLang') || 'ar';
function applyNeoLanguage(lang){
  neoLang=lang; localStorage.setItem('neoLearnLang',lang);
  const t=neoTranslations[lang]; document.documentElement.lang=lang; document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  const nav=[...document.querySelectorAll('.nav-item')];
  const navText={home:t.navHome,progress:t.navProgress,weeks:t.navWeeks,projects:t.navProjects,electronics:t.navElectronics,ai:t.navAI,achievements:t.navAchievements};
  nav.forEach(b=>{if(navText[b.dataset.view])b.textContent=navText[b.dataset.view]});
  const side=document.querySelector('.side-title'); if(side)side.textContent=t.sideTitle;
  const set=(selector,value)=>{const e=document.querySelector(selector);if(e)e.innerHTML=value};
  set('.hero .eyebrow',t.heroEyebrow); set('.hero h1',t.heroTitle); set('.hero p',t.heroText);
  set('.hero button.primary',t.startPath); set('.hero button.secondary',t.startLearning);
  set('#home .section-head h2',t.fullPath); set('#home .section-head p',t.chooseWeek);
  set('#progress .section-head h2',t.progressTitle); set('#progress .section-head p',t.progressText);
  set('#weeks .section-head h2',t.weeksTitle); const search=document.querySelector('#search'); if(search)search.placeholder=t.search;
  set('#projects .section-head h2',t.projectsTitle); set('#projects .section-head p',t.projectsText); set('#achievements .section-head h2',t.achievementsTitle);
  document.querySelectorAll('[data-i18n]').forEach(e=>{const key=e.dataset.i18n;if(t[key])e.textContent=t[key]});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(e=>{const key=e.dataset.i18nPlaceholder;if(t[key])e.placeholder=t[key]});
  const langBtn=document.querySelector('#langBtn'); if(langBtn){langBtn.textContent=lang==='ar'?'EN':'عربي';langBtn.title=lang==='ar'?'Switch to English':'التبديل إلى العربية'}
  const themeBtn=document.querySelector('#themeBtn'); if(themeBtn)themeBtn.title=lang==='ar'?'تغيير الإضاءة':'Toggle theme';
  const startButtons=document.querySelectorAll('[data-view="progress"], [data-view="weeks"]');
  startButtons.forEach(b=>{if(b.closest('.progress-info'))b.textContent=lang==='ar'?'ابدأ التعلم ←':'Start Learning →'});
}
const languageButton=document.querySelector('#langBtn');
if(languageButton)languageButton.addEventListener('click',()=>{const next=neoLang==='ar'?'en':'ar';applyNeoLanguage(next);showToast(neoTranslations[next].langToast)});
applyNeoLanguage(neoLang);


// AI learning tools: guided local explanations and a short interactive quiz.
const tutorTopics = {
  ar: [
    {keys:['ذكاء اصطناعي','الذكاء الاصطناعي',' ai'],answer:'الذكاء الاصطناعي هو مجال يجعل الكمبيوتر ينفّذ مهامًا تحتاج عادةً إلى قدر من الذكاء، مثل التعرّف على الصور أو فهم اللغة. النموذج يتعلّم أنماطًا من أمثلة، وقد يخطئ؛ لذلك نختبر نتائجه.'},
    {keys:['تعلم آلي','التعلم الآلي','machine learning','تعلّم الآلة'],answer:'تعلّم الآلة جزء من الذكاء الاصطناعي. نعطي النموذج أمثلة وبيانات، فيتعلّم أنماطًا تساعده على التوقع أو التصنيف. جودة الأمثلة مهمة جدًا.'},
    {keys:['teachable','تيتشابل','تدريب نموذج','نموذج صور'],answer:'في Teachable Machine: اختر نوع المشروع، واجمع أمثلة واضحة لكل فئة، واضغط Train Model، ثم اختبر النموذج بأمثلة جديدة. إذا كانت النتائج ضعيفة، أضف أمثلة متنوعة وأعد التدريب.'},
    {keys:['python','بايثون'],answer:'Python لغة برمجة سهلة القراءة. ابدأ بالمتغيرات، ثم if/else، والحلقات، والقوائم، والدوال. مثال: name = "NEO" ثم print(name) لعرض الكلمة.'},
    {keys:['arduino','أردوينو','اردوينو'],answer:'Arduino Uno لوحة تحكم صغيرة تقرأ المدخلات من الحساسات وتتحكم في المخرجات مثل LED والجرس. ابدأ بالمحاكاة، وافصل الطاقة قبل تغيير التوصيلات، ولا توصل اللوحة مباشرة بكهرباء المنزل.'},
    {keys:['خصوصية','آمن','مسؤول','privacy','responsible'],answer:'استخدم بيانات مناسبة وبإذن أصحابها، ولا ترفع صورًا أو معلومات شخصية دون إذن. اختبر النموذج على أمثلة مختلفة ولا تعتبر توقعه صحيحًا دائمًا.'}
  ],
  en: [
    {keys:['artificial intelligence',' ai','what is ai'],answer:'Artificial intelligence is a field that helps computers perform tasks such as recognizing images or understanding language. Models learn patterns from examples and can still make mistakes, so their results should be tested.'},
    {keys:['machine learning','learn from data'],answer:'Machine learning is a part of AI. A model learns patterns from example data and uses them to classify or predict. The quality and variety of examples matter.'},
    {keys:['teachable','train model','image model'],answer:'In Teachable Machine, choose a project type, collect clear examples for each class, select Train Model, and test it with new examples. Add varied examples and retrain if results are weak.'},
    {keys:['python'],answer:'Python is a readable programming language. Start with variables, if/else, loops, lists, and functions. Example: name = "NEO" then print(name) displays the word.'},
    {keys:['arduino'],answer:'Arduino Uno reads inputs from sensors and controls outputs such as LEDs and buzzers. Start with simulation, disconnect power before changing wiring, and never connect it directly to household mains.'},
    {keys:['privacy','safe','responsible'],answer:'Use appropriate data with permission, never upload personal information without permission, and test models with varied examples. AI predictions are not always correct.'}
  ]
};
function answerTutor(){
 const input=document.querySelector('#tutorInput'), box=document.querySelector('#tutorAnswer'); if(!input||!box)return;
 const q=input.value.trim().toLowerCase(); if(!q){box.textContent=neoLang==='ar'?'اكتب سؤالك أولًا، مثل: ما هو التعلّم الآلي؟':'Type a question first, such as: What is machine learning?';return;}
 const topics=tutorTopics[neoLang]||tutorTopics.ar; const hit=topics.find(t=>t.keys.some(k=>q.includes(k.trim())));
 box.textContent=hit?hit.answer:(neoLang==='ar'?'أقدر أساعدك في أساسيات الذكاء الاصطناعي، وTeachable Machine، وPython، وArduino، والخصوصية. جرّب كتابة اسم أحد هذه الموضوعات في سؤالك.':'I can help with AI basics, Teachable Machine, Python, Arduino, and privacy. Try including one of these topics in your question.');
}
const tutorAskButton=document.querySelector('#tutorAsk'); if(tutorAskButton)tutorAskButton.addEventListener('click',answerTutor);
const tutorInput=document.querySelector('#tutorInput'); if(tutorInput)tutorInput.addEventListener('keydown',e=>{if(e.key==='Enter')answerTutor()});
const quizQuestions={
 ar:[
  {q:'ما الذي يحتاجه نموذج تعلّم الآلة لكي يتعلّم الأنماط؟',opts:['أمثلة وبيانات','اسم مستخدم فقط','إطفاء الكمبيوتر'],a:0},
  {q:'ما الخطوة المناسبة بعد تدريب نموذج الصور؟',opts:['اعتباره صحيحًا دائمًا','اختباره بأمثلة جديدة','حذف بيانات التدريب فورًا'],a:1},
  {q:'ما الاستخدام الآمن لـ Arduino؟',opts:['توصيله مباشرة بكهرباء المنزل','تغيير الأسلاك والطاقة موصولة','استخدام جهد منخفض مناسب وفصل الطاقة قبل تعديل الأسلاك'],a:2}
 ],
 en:[
  {q:'What helps a machine-learning model learn patterns?',opts:['Examples and data','Only a username','Turning the computer off'],a:0},
  {q:'What should you do after training an image model?',opts:['Assume it is always right','Test it with new examples','Immediately delete all training data'],a:1},
  {q:'Which is a safer Arduino practice?',opts:['Connect it directly to household mains','Change wires while powered','Use suitable low voltage and disconnect power before rewiring'],a:2}
 ]
};
function renderAIQuiz(){
 const root=document.querySelector('#aiQuiz'); if(!root)return;
 const qs=quizQuestions[neoLang]||quizQuestions.ar;
 root.innerHTML=qs.map((q,i)=>`<div class="quiz-question"><h3>${i+1}. ${q.q}</h3>${q.opts.map((o,j)=>`<label class="quiz-option"><input type="radio" name="aiq${i}" value="${j}"><span>${o}</span></label>`).join('')}</div>`).join('');
 const result=document.querySelector('#quizResult');if(result){result.textContent='';result.className='quiz-result'}
}
function checkAIQuiz(){
 const qs=quizQuestions[neoLang]||quizQuestions.ar;let score=0,answered=0;
 qs.forEach((q,i)=>{const selected=document.querySelector(`input[name="aiq${i}"]:checked`);if(selected){answered++;if(Number(selected.value)===q.a)score++;}});
 const result=document.querySelector('#quizResult');if(!result)return;
 if(answered<qs.length){result.className='quiz-result bad';result.textContent=neoLang==='ar'?`جاوب عن الأسئلة الثلاثة أولًا. أجبت عن ${answered} من ${qs.length}.`:`Please answer all three questions first. You answered ${answered} of ${qs.length}.`;return;}
 result.className='quiz-result '+(score===qs.length?'good':'bad');result.textContent=neoLang==='ar'?`نتيجتك: ${score} من ${qs.length} إجابات صحيحة. ${score===qs.length?'ممتاز! أحسنت.':'راجع الدروس وحاول مرة أخرى.'}`:`Your score: ${score} out of ${qs.length} correct. ${score===qs.length?'Excellent work!':'Review the lessons and try again.'}`;
}
const checkQuizButton=document.querySelector('#checkQuiz');if(checkQuizButton)checkQuizButton.addEventListener('click',checkAIQuiz);
renderAIQuiz();
const originalApplyNeoLanguage=applyNeoLanguage;
applyNeoLanguage=function(lang){originalApplyNeoLanguage(lang);renderAIQuiz();const result=document.querySelector('#quizResult');if(result){result.textContent='';result.className='quiz-result'}const answer=document.querySelector('#tutorAnswer');if(answer)answer.textContent=neoTranslations[lang].tutorDefault;};
