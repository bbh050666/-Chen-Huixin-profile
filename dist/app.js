const entries={
ali:{kind:'USER RESEARCH / DIGITAL OPERATIONS',title:'复旦—阿里社会服务 + AI 项目',paragraphs:['2025 年 12 月起担任学生团队项目助理，参与面向一线社工的阿里钉 talk a 项目。','深度访谈 12 家社区社工机构、30+ 位一线社工，围绕个案记录等高频场景，收集 50+ 条痛点和需求，整理结构化访谈纪要，并参与产品功能建议与机构筛选。','参与搭建覆盖 100+ 家机构、900 台设备的社群运营与数字化管理系统，支持设备管理与数据产出。'],note:'经历、职责与规模数据依据本人补充简历；机构及设备规模描述团队服务范围。'},
air:{kind:'COMPETITION / 2026',title:'“同样的风，不同的霾”',paragraphs:['项目全称：“同样的风，不同的霾”——基于多源大数据的京津冀治霾经验跨区域迁移与衰减评估系统。','作品获得 2026 年（第 19 届）中国大学生计算机设计大赛全国二等奖。参赛学生为韩奕硕、石伟建、陈慧欣，指导教师为曾刚。','项目将多源大数据与环境治理议题相结合，关注京津冀治霾经验跨区域迁移与衰减评估。'],image:'assets/computing-award.jpg',alt:'中国大学生计算机设计大赛二等奖证书',note:'获奖信息依据 2026 年 8 月获奖证书。团队成果不等同于个人独立完成。'},
memory:{kind:'PRODUCT / AI HACKATHON',title:'缘旅 MemoryOS',paragraphs:['缘旅是一项围绕旅行记忆展开的产品探索：将照片、路线与心情等碎片组织起来，让旅行经历能够被保存、整理与再次回看。','我负责前期用户调研、视频与文创等宣传物料制作、完整项目计划书撰写，并与团队成员共同开发缘旅。项目获得 100 余位潜在用户。','团队获得 AI Hackathon Tour 高校联赛 2026 复旦大学站第六名，晋级全国总决赛。','项目说明提出了旅行记录、基于地理位置的记忆胶囊与 AI 辅助整理等设计方向；这里将其作为产品方案展示，不将全部规划功能表述为已上线服务。'],image:'assets/memory-award.jpg',alt:'缘旅项目展示与复旦大学站第六名证书',note:'名次依据获奖证书；个人参与内容依据黑客松分享讲稿。'},
mcm:{kind:'MODELING / 2026',title:'MCM · Honorable Mention',paragraphs:['参与 2026 年美国大学生数学建模竞赛 A 题，团队获得 Honorable Mention（H 奖）。','担任论文手，负责 26 页全英文 LaTeX 论文撰写，以及 Figure 1–13 科研数据可视化。'],note:'依据 MCM 获奖证书及奖学金申请材料。'},
wangdao:{kind:'RESEARCH / 望道项目',title:'青年“躺平”话语研究',paragraphs:['项目全称：基于微博大数据的青年“躺平”话语策略的时空演化与建构逻辑研究。','作为项目负责人，主导完成约 400 万条微博文本的采集、清洗与语义分析，构建 350 万条核心分析语料库，考察 2023–2026 年间“躺平”“摆烂”“佛系”话语的语义迁移与概念漂移。项目于 2025 年 11 月开始，指导教师为杜世超。','项目系统记录显示立项与中期节点均已通过，结项节点尚未完成。本页展示研究议题和阶段进展，不将其写为已结项或已发表论文。'],note:'项目状态依据系统截图；个人职责、数据规模与时间范围依据本人补充简历。'},
field:{kind:'RESEARCH / 数字田野',title:'“物”尽其言',paragraphs:['团队报告全称：“物”尽其言：数字时代老年人生活叙事困境与 AI 补齐路径调研。','研究以数字日记与深度访谈为主要方法，围绕老年人的生活叙事、记忆载体、代际传递及数字工具展开调研。','报告讨论了能力、工具与情感等维度的叙事困境，并探索 AI 辅助路径。我负责研究结论撰写。指导教师为陈岩燕，报告于 2026 年 2 月 23 日提交。'],note:'依据数字田野团队研究报告。此处为内容概览，不代表已发表学术论文。'},
vlog:{kind:'SELECTED WRITING / 理论分析',title:'自律的镜与窗：学习 Vlog 中的双重规训',paragraphs:['这篇写作从“主动公开学习过程”这一现象出发，追问自律、平台可见性与自我呈现之间的关系。','文章借助福柯的规训理论与治理术概念，以“他者规训—自我规训”的分析框架讨论平台评价、镜头凝视与自我管理。','展示重点是问题意识、理论运用与学术写作；文中解释属于作者的分析，不作为已经验证的普遍规律呈现。'],note:'依据《学习Vlog中的双重规训》文稿；未标注为发表成果。'},
spa:{kind:'SELECTED WRITING / 小组课程论文',title:'空间、实践与体验',paragraphs:['小组论文以“水裹”中大学生的消费实践为主题，关注同一个休闲空间中放松、自习、社交与过夜等实践如何并存。','论文采用参与式观察与半结构化深度访谈，尝试理解大学生选择这一空间的原因、空间体验及其日常意义。','本页展示研究问题与方法训练，不将个别场景中的观察推广为全部大学生的普遍行为。'],note:'依据《洗浴中心小组-期末论文》文稿。'}
};
const dialog=document.querySelector('#detail');
dialog.setAttribute('aria-labelledby','detail-title');
let trigger;
for(const button of document.querySelectorAll('[data-detail]'))button.addEventListener('click',()=>{
 const entry=entries[button.dataset.detail];if(!entry)return;trigger=button;
 document.querySelector('#detail-kind').textContent=entry.kind;document.querySelector('#detail-title').textContent=entry.title;
 const body=document.querySelector('#detail-body');body.replaceChildren();
 for(const text of entry.paragraphs){const p=document.createElement('p');p.textContent=text;body.append(p)}
 if(entry.image){const img=document.createElement('img');img.src=entry.image;img.alt=entry.alt;body.append(img)}
 const note=document.createElement('p');note.className='detail-note';note.textContent=entry.note;body.append(note);
 dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0;
});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';trigger?.focus()});
document.querySelector('#print').addEventListener('click',()=>window.print());
const navLinks=[...document.querySelectorAll('.nav a')];
const observer=new IntersectionObserver(items=>{for(const item of items){if(item.isIntersecting){navLinks.forEach(a=>a.removeAttribute('aria-current'));navLinks.find(a=>a.hash==='#'+item.target.id)?.setAttribute('aria-current','location')}}},{rootMargin:'-15% 0px -60% 0px',threshold:0});
for(const section of document.querySelectorAll('main section[id]'))observer.observe(section);
