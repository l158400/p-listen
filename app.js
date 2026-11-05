/* P-Listen 核心逻辑 */
(function(){
  'use strict';

  // ---------- 全局状态 ----------
  const STORE_KEY = 'plisten_progress_v1';
  const WRONG_KEY = 'plisten_wrong_v1';
  const state = {
    level: 'cet4',
    set: null,          // 当前练习的整套数据
    passageIdx: 0,
    answers: {},        // {passageId: {qN: letter}}
    revealed: false,
    playing: false,
    audio: new Audio(),
    rate: 1,
    view: 'home',
    deferredPrompt: null
  };

  const $ = id => document.getElementById(id);
  const els = {
    viewHome:$('view-home'), viewPractice:$('view-practice'), viewResult:$('view-result'), viewStats:$('view-stats'),
    setList:$('set-list'), progressSummary:$('progress-summary'),
    tabs:document.querySelectorAll('.tab'), yearFilter:$('year-filter'),
    practiceTitle:$('practice-title'), practiceSubtitle:$('practice-subtitle'), scoreChip:$('score-chip'),
    btnBack:$('btn-back'), btnStats:$('btn-stats'),
    passageNav:$('passage-nav'), passageBadge:$('passage-badge'), passageName:$('passage-name'),
    speedGroup:$('speed-group'), btnPlay:$('btn-play'), seek:$('seek'), curTime:$('cur-time'), durTime:$('dur-time'),
    btnReplay:$('btn-replay'), btnTranscript:$('btn-transcript'), transcriptBox:$('transcript-box'), transcriptText:$('transcript-text'),
    btnCopyTranscript:$('btn-copy-transcript'), questionArea:$('question-area'),
    btnCheck:$('btn-check'), btnNextPassage:$('btn-next-passage'), btnFinish:$('btn-finish'),
    resultSubtitle:$('result-subtitle'), bigScore:$('big-score'), scoreDetail:$('score-detail'), reviewList:$('review-list'),
    btnAgain:$('btn-again'), btnHome:$('btn-home'),
    btnBackStats:$('btn-back-stats'), btnBackHome:$('btn-back-home'),
    statsGrid:$('stats-grid'), wrongList:$('wrong-list'), btnClearWrong:$('btn-clear-wrong'),
    installBanner:$('install-banner'), btnInstall:$('btn-install'), btnInstallClose:$('btn-install-close')
  };

  // ---------- 存储 ----------
  function loadStore(){ try{ return JSON.parse(localStorage.getItem(STORE_KEY))||{}; }catch(e){ return {}; } }
  function saveStore(s){ localStorage.setItem(STORE_KEY, JSON.stringify(s)); }
  function loadWrong(){ try{ return JSON.parse(localStorage.getItem(WRONG_KEY))||[]; }catch(e){ return []; } }
  function saveWrong(w){ localStorage.setItem(WRONG_KEY, JSON.stringify(w)); }

  function progressOf(setId, passageId, qN){
    const s = loadStore();
    const ps = (s[setId]&&s[setId][passageId])||{};
    return ps[qN]; // {correct:bool, picked}
  }
  function setProgress(setId, passageId, qN, data){
    const s = loadStore();
    if(!s[setId]) s[setId]={};
    if(!s[setId][passageId]) s[setId][passageId]={};
    s[setId][passageId][qN]=data;
    saveStore(s);
  }

  // ---------- 工具 ----------
  function passageCount(set){ return set.sections.reduce((a,sc)=>a+sc.passages.length,0); }
  function allPassages(set){ return set.sections.flatMap(sc=>sc.passages); }
  function fmtTime(sec){ if(!isFinite(sec)) return '0:00'; sec=Math.max(0,Math.floor(sec)); return Math.floor(sec/60)+':'+String(sec%60).padStart(2,'0'); }
  function currentPassage(){ return allPassages(state.set)[state.passageIdx]; }
  function getLevelTitle(lv){ return lv==='cet4'?'四级':'六级'; }

  // ---------- 首页 ----------
  function renderHome(){
    const sets = CET_DATA.filter(s=>s.level===state.level);
    const store = loadStore();
    els.yearFilter.textContent = state.level==='cet4'?'四级 · 全部年份':'六级 · 全部年份';
    // 进度
    let done=0, total=0;
    sets.forEach(set=>{
      allPassages(set).forEach(p=>{
        p.questions.forEach(q=>{ total++; const r=progressOf(set.id,p.id,q.n); if(r&&r.correct) done++; });
      });
    });
    const pct = total? Math.round(done/total*100):0;
    els.progressSummary.textContent = `已完成 ${done}/${total} 题 · ${pct}%`;

    els.setList.innerHTML='';
    sets.forEach(set=>{
      const n=passageCount(set);
      let d=0; allPassages(set).forEach(p=>p.questions.forEach(q=>{ if(progressOf(set.id,p.id,q.n)&&progressOf(set.id,p.id,q.n).correct) d++; }));
      const tot=allPassages(set).reduce((a,p)=>a+p.questions.length,0);
      const card=document.createElement('div');
      card.className='set-card';
      const hue = set.level==='cet4'?'#3949ab':'#00897b';
      card.innerHTML=`
        <div class="set-icon" style="background:${hue}">${set.level==='cet4'?'四':'六'}</div>
        <div class="set-info"><h3>${set.label}</h3><p>${n} 段听力 · ${tot} 道题</p></div>
        <div class="set-progress">${d}/${tot}</div>`;
      card.addEventListener('click',()=>openSet(set.id));
      els.setList.appendChild(card);
    });
  }

  // ---------- 开始练习 ----------
  function openSet(setId){
    state.set = CET_DATA.find(s=>s.id===setId);
    state.passageIdx=0; state.answers={}; state.revealed=false;
    els.practiceTitle.textContent = getLevelTitle(state.set.level)+'听力练习';
    els.practiceSubtitle.textContent = state.set.label;
    switchView('practice');
    renderPassage();
  }

  function renderPassageNav(){
    const passages = allPassages(state.set);
    els.passageNav.innerHTML='';
    passages.forEach((p,i)=>{
      const b=document.createElement('button');
      b.className='p-nav'+(i===state.passageIdx?' active':'');
      b.textContent=i+1;
      b.title=p.title;
      if(i<state.passageIdx) b.classList.add('done');
      b.addEventListener('click',()=>{ stopAudio(); state.passageIdx=i; state.revealed=false; state.answers={}; renderPassage(); });
      els.passageNav.appendChild(b);
    });
    // score chip
    const s=loadStore(); let correct=0,total=0;
    allPassages(state.set).forEach(p=>p.questions.forEach(q=>{total++;const r=progressOf(state.set.id,p.id,q.n);if(r&&r.correct)correct++;}));
    els.scoreChip.textContent=`${correct}/${total}`;
  }

  function renderPassage(){
    renderPassageNav();
    const p=currentPassage();
    // section name
    let sectionName='';
    for(const sc of state.set.sections){ if(sc.passages.includes(p)){ sectionName=sc.name; break; } }
    els.passageBadge.textContent=sectionName;
    els.passageName.textContent=p.title;
    els.transcriptText.textContent=p.transcript;
    els.transcriptBox.classList.toggle('hidden',!els.btnTranscript.classList.contains('active'));
    els.btnPlay.textContent='▶'; state.playing=false;
    els.curTime.textContent='0:00'; els.durTime.textContent='0:00'; els.seek.value=0;
    loadAudio(p.audio);
    renderQuestions();
    updateFooterBtns();
    els.questionArea.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function loadAudio(src){
    try{ state.audio.pause(); }catch(e){}
    state.audioParts = Array.isArray(src) ? src : [src];
    state.partIdx = 0;
    loadPart(0);
  }
  function loadPart(idx){
    try{ state.audio.pause(); }catch(e){}
    state.audio = new Audio(state.audioParts[idx]);
    state.audio.playbackRate = state.rate;
    state.audio.addEventListener('timeupdate',()=>{
      els.curTime.textContent=fmtTime(state.audio.currentTime);
      if(state.audio.duration) els.seek.value=Math.round(state.audio.currentTime/state.audio.duration*1000);
    });
    state.audio.addEventListener('loadedmetadata',()=>{ els.durTime.textContent=fmtTime(state.audio.duration); });
    state.audio.addEventListener('durationchange',()=>{ if(isFinite(state.audio.duration)) els.durTime.textContent=fmtTime(state.audio.duration); });
    state.audio.addEventListener('ended',()=>{
      // 多段时自动接续下一段
      if(state.partIdx < state.audioParts.length-1){
        state.partIdx++;
        loadPart(state.partIdx);
        if(state.playing){ state.audio.play(); }
      } else {
        state.playing=false; els.btnPlay.textContent='▶';
      }
    });
    state.audio.addEventListener('error',()=>{ els.durTime.textContent='—'; });
  }

  function togglePlay(){
    if(state.playing){ state.audio.pause(); state.playing=false; els.btnPlay.textContent='▶'; }
    else{
      // 若音频加载失败则提示
      state.audio.playbackRate=state.rate;
      const pr=state.audio.play();
      state.playing=true; els.btnPlay.textContent='⏸';
      if(pr&&pr.catch){ pr.catch(()=>{ state.playing=false; els.btnPlay.textContent='▶'; alert('音频未能加载，请确认 audio 文件夹中的音频文件存在。'); }); }
    }
  }

  function renderQuestions(){
    const p=currentPassage();
    els.questionArea.innerHTML='';
    const saved=loadStore()[state.set.id]?.[p.id]||{};
    p.questions.forEach(q=>{
      const block=document.createElement('div'); block.className='q-block';
      const opts=q.options.map((opt,oi)=>{
        const letter='ABCD'[oi];
        const picked = state.answers[p.id] && state.answers[p.id][q.n]===letter;
        let cls='q-opt';
        if(state.revealed){
          cls+=' locked';
          if(letter===q.answer) cls+=' correct';
          else if(picked) cls+=' wrong';
        } else if(picked) cls+=' selected';
        return `<div class="${cls}" data-letter="${letter}">
          <span class="opt-letter">${letter}</span><span>${opt}</span></div>`;
      }).join('');
      block.innerHTML=`
        <div class="q-head"><span class="q-num">${q.n}</span><span class="q-text">${q.text}</span></div>
        <div class="q-opts">${opts}</div>
        <div class="q-explain${state.revealed?' show':''}">✅ 答案 ${q.answer}：${q.explain}</div>`;
      block.querySelectorAll('.q-opt').forEach(o=>{
        o.addEventListener('click',()=>{
          if(state.revealed) return;
          if(!state.answers[p.id]) state.answers[p.id]={};
          state.answers[p.id][q.n]=o.dataset.letter;
          block.querySelectorAll('.q-opt').forEach(x=>x.classList.remove('selected'));
          o.classList.add('selected');
        });
      });
      els.questionArea.appendChild(block);
    });
  }

  function updateFooterBtns(){
    const last = state.passageIdx===allPassages(state.set).length-1;
    els.btnCheck.classList.toggle('hidden', state.revealed);
    els.btnNextPassage.classList.toggle('hidden', !(state.revealed&&!last));
    els.btnFinish.classList.toggle('hidden', !(state.revealed&&last));
  }

  function checkAnswers(){
    const p=currentPassage();
    state.revealed=true;
    let correct=0;
    p.questions.forEach(q=>{
      const picked=state.answers[p.id]&&state.answers[p.id][q.n];
      const ok = picked===q.answer;
      if(ok) correct++;
      setProgress(state.set.id,p.id,q.n,{correct:ok,picked:picked||null});
      if(!ok && picked){
        // 加入错题本
        const wrong=loadWrong();
        if(!wrong.some(w=>w.set===state.set.id&&w.passage===p.id&&w.q===q.n)){
          wrong.push({set:state.set.id,level:state.set.level,label:state.set.label,passage:p.id,ptitle:p.title,q:q.n,text:q.text,answer:q.answer});
          saveWrong(wrong);
        }
      }
    });
    renderQuestions();
    updateFooterBtns();
    renderPassageNav();
    const blocks=els.questionArea.querySelectorAll('.q-block');
    blocks.forEach(b=>{
      const num=parseInt(b.querySelector('.q-num').textContent,10);
      const q=p.questions.find(x=>x.n===num);
      const picked=state.answers[p.id]&&state.answers[p.id][num];
      const flag=document.createElement('div');
      flag.className='q-flag '+(picked===q.answer?'ok':'bad');
      flag.textContent=picked===q.answer?'✔ 回答正确':'✘ 回答错误';
      b.querySelector('.q-explain').after(flag);
    });
    els.questionArea.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function nextPassage(){
    stopAudio();
    state.passageIdx++; state.revealed=false; state.answers={};
    renderPassage();
  }
  function finishSet(){
    stopAudio();
    switchView('result');
    renderResult();
  }
  function stopAudio(){ try{ state.audio.pause(); }catch(e){} state.playing=false; }

  // ---------- 结果 ----------
  function renderResult(){
    const s=loadStore()[state.set.id]||{};
    let correct=0,total=0;
    allPassages(state.set).forEach(p=>p.questions.forEach(q=>{total++;const r=progressOf(state.set.id,p.id,q.n);if(r&&r.correct)correct++;}));
    els.resultSubtitle.textContent = state.set.label+' · '+getLevelTitle(state.set.level);
    els.bigScore.textContent=`${correct}/${total}`;
    const pct=Math.round(correct/total*100);
    els.scoreDetail.innerHTML=`正确率 <b>${pct}%</b>${pct>=80?' · 很棒，继续加油！':pct>=60?' · 不错，还有提升空间。':' · 建议慢速精听巩固。'}`;
    els.reviewList.innerHTML='';
    allPassages(state.set).forEach(p=>p.questions.forEach(q=>{
      const r=progressOf(state.set.id,p.id,q.n);
      if(r&&!r.correct){
        const it=document.createElement('div'); it.className='review-item';
        it.innerHTML=`<div class="rv-q">Q${q.n}（${p.title}）：${q.text}</div>
          <div>你的答案：${r.picked||'未作答'} ${r.picked===q.answer?'✔':'✘'}</div>
          <div class="rv-a">正确答案：${q.answer}</div>`;
        els.reviewList.appendChild(it);
      }
    }));
    if(!els.reviewList.children.length) els.reviewList.innerHTML='<div class="review-item">🎉 全部答对，太棒了！</div>';
  }

  // ---------- 统计 ----------
  function renderStats(){
    const store=loadStore();
    let correct=0,total=0, setsDone=new Set();
    CET_DATA.forEach(set=>allPassages(set).forEach(p=>p.questions.forEach(q=>{
      total++; const r=progressOf(set.id,p.id,q.n);
      if(r&&r.correct){ correct++; setsDone.add(set.id); }
    })));
    const pct=total?Math.round(correct/total*100):0;
    els.statsGrid.innerHTML=`
      <div class="stat-card"><div class="num">${correct}</div><div class="lab">已答对</div></div>
      <div class="stat-card"><div class="num">${total}</div><div class="lab">总题数</div></div>
      <div class="stat-card"><div class="num">${pct}%</div><div class="lab">正确率</div></div>
      <div class="stat-card"><div class="num">${setsDone.size}/${CET_DATA.length}</div><div class="lab">已练套数</div></div>`;
    // 错题本
    const wrong=loadWrong();
    els.wrongList.innerHTML='';
    if(!wrong.length){ els.wrongList.innerHTML='<div class="wrong-item">暂无错题记录，练习后自动收录。</div>'; }
    else wrong.slice().reverse().forEach(w=>{
      const it=document.createElement('div'); it.className='wrong-item';
      it.innerHTML=`<b>${w.label}</b> · Q${w.q}（${w.ptitle}）<br>${w.text}<br>正确答案：${w.answer}`;
      els.wrongList.appendChild(it);
    });
  }

  // ---------- 视图切换 ----------
  function switchView(v){
    state.view=v;
    ['home','practice','result','stats'].forEach(x=>els['view'+x.charAt(0).toUpperCase()+x.slice(1)].classList.toggle('hidden',x!==v));
    window.scrollTo(0,0);
  }

  // ---------- 事件绑定 ----------
  els.tabs.forEach(t=>t.addEventListener('click',()=>{
    els.tabs.forEach(x=>x.classList.remove('active')); t.classList.add('active');
    state.level=t.dataset.level; renderHome();
  }));
  els.btnPlay.addEventListener('click',togglePlay);
  els.btnReplay.addEventListener('click',()=>{ loadPart(0); state.audio.play().catch(()=>{}); state.playing=true; els.btnPlay.textContent='⏸'; });
  els.seek.addEventListener('input',()=>{ if(state.audio.duration) state.audio.currentTime=state.audio.duration*els.seek.value/1000; });
  els.btnTranscript.addEventListener('click',()=>{
    els.btnTranscript.classList.toggle('active');
    els.transcriptBox.classList.toggle('hidden',!els.btnTranscript.classList.contains('active'));
  });
  els.btnCopyTranscript.addEventListener('click',()=>{
    navigator.clipboard.writeText(currentPassage().transcript).then(()=>{ els.btnCopyTranscript.textContent='已复制'; setTimeout(()=>els.btnCopyTranscript.textContent='复制',1200); });
  });
  els.speedGroup.addEventListener('click',e=>{
    const b=e.target.closest('.speed-btn'); if(!b) return;
    els.speedGroup.querySelectorAll('.speed-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active'); state.rate=parseFloat(b.dataset.rate);
    state.audio.playbackRate=state.rate;
  });
  els.btnCheck.addEventListener('click',checkAnswers);
  els.btnNextPassage.addEventListener('click',nextPassage);
  els.btnFinish.addEventListener('click',finishSet);
  els.btnBack.addEventListener('click',()=>{ stopAudio(); switchView('home'); renderHome(); });
  els.btnAgain.addEventListener('click',()=>{ stopAudio(); openSet(state.set.id); });
  els.btnHome.addEventListener('click',()=>{ switchView('home'); renderHome(); });
  els.btnStats.addEventListener('click',()=>{ renderStats(); switchView('stats'); });
  els.btnBackStats.addEventListener('click',()=>{ switchView('home'); renderHome(); });
  els.btnBackHome.addEventListener('click',()=>{ switchView('home'); renderHome(); });
  els.btnClearWrong.addEventListener('click',()=>{ if(confirm('确定清空错题本吗？')){ saveWrong([]); renderStats(); } });

  // 键盘快捷键（电脑端）：空格播放/暂停
  document.addEventListener('keydown',e=>{
    if(state.view==='practice' && e.code==='Space' && !/input|textarea/i.test(document.activeElement.tagName)){
      e.preventDefault(); togglePlay();
    }
  });

  // ---------- PWA 安装 ----------
  window.addEventListener('beforeinstallprompt',e=>{
    e.preventDefault(); state.deferredPrompt=e;
    els.installBanner.classList.remove('hidden');
  });
  els.btnInstall.addEventListener('click',async()=>{
    if(!state.deferredPrompt){ alert('请在浏览器地址栏选择「安装应用 / 添加到主屏幕」。'); return; }
    state.deferredPrompt.prompt();
    const res=await state.deferredPrompt.userChoice;
    if(res.outcome==='accepted'){ els.installBanner.classList.add('hidden'); }
    state.deferredPrompt=null;
  });
  els.btnInstallClose.addEventListener('click',()=>els.installBanner.classList.add('hidden'));
  // iOS Safari：提示添加到主屏幕
  if(/iphone|ipad|ipod/i.test(navigator.userAgent)){
    const isIos=window.navigator.standalone===undefined;
    if(isIos && !localStorage.getItem('ios_install_tip')){
      setTimeout(()=>{ alert('📲 点右上角「分享」→「添加到主屏幕」，即可把 P-Listen 安装成独立 App（支持离线练习）。'); localStorage.setItem('ios_install_tip','1'); },1500);
    }
  }

  // ---------- 启动 ----------
  switchView('home');
  renderHome();
})();
