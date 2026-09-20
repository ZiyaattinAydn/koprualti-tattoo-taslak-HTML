
document.body.classList.add("lock");
window.addEventListener("load",()=>setTimeout(()=>{document.querySelector(".intro")?.classList.add("hide");document.body.classList.remove("lock")},700));
const mt=document.querySelector(".mobile"),nav=document.querySelector(".nav");
mt?.addEventListener("click",()=>{const o=nav.classList.toggle("open");mt.setAttribute("aria-expanded",String(o))});
document.querySelectorAll(".dd>button").forEach(b=>b.addEventListener("click",()=>b.parentElement.classList.toggle("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));

document.querySelectorAll(".filters button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active")); b.classList.add("active");
  const f=b.dataset.filter||"all"; document.querySelectorAll(".pcard").forEach(c=>c.style.display=(f==="all"||c.dataset.kind===f)?"":"none");
}));

let step=0; const pages=[...document.querySelectorAll(".formpage")], bars=[...document.querySelectorAll(".steps i")];
const show=n=>{if(!pages.length)return;step=Math.max(0,Math.min(n,pages.length-1));pages.forEach((p,i)=>p.classList.toggle("active",i===step));bars.forEach((b,i)=>b.classList.toggle("active",i<=step));window.scrollTo({top:0,behavior:"smooth"})};
document.querySelectorAll("[data-next]").forEach(b=>b.addEventListener("click",()=>show(step+1)));
document.querySelectorAll("[data-prev]").forEach(b=>b.addEventListener("click",()=>show(step-1)));
document.querySelectorAll(".choice").forEach(c=>c.addEventListener("click",()=>{c.parentElement.querySelectorAll(".choice").forEach(x=>x.classList.remove("active"));c.classList.add("active")}));

document.querySelectorAll(".service-row").forEach(row=>row.querySelector(".service-trigger")?.addEventListener("click",()=>{
  const open=!row.classList.contains("open"); document.querySelectorAll(".service-row").forEach(r=>r.classList.remove("open")); if(open){row.classList.add("open"); if(row.id)history.replaceState(null,"","#"+row.id)}
}));
if(location.hash){const row=document.querySelector(location.hash);if(row?.classList.contains("service-row"))setTimeout(()=>row.classList.add("open"),50)}

const params=new URLSearchParams(location.search); const requested=(params.get("service")||"").toLowerCase(); const branch=(params.get("branch")||"").toLowerCase();
if(requested){document.querySelectorAll(".choice").forEach(c=>{const t=c.dataset.value||c.textContent.trim().toLowerCase();const match=t===requested||(requested==="coverup"&&t.includes("cover"));if(match){c.parentElement.querySelectorAll(".choice").forEach(x=>x.classList.remove("active"));c.classList.add("active")}});const note=document.querySelector(".appointment-service-note");if(note){note.textContent=`${requested==="coverup"?"Cover-Up":requested.charAt(0).toUpperCase()+requested.slice(1)} seçili geldi. İstersen değiştirebilirsin.`;note.classList.add("show")}}
if(branch){const select=document.querySelector('select[name="branch"]'); if(select){[...select.options].forEach(o=>{if(o.value.toLowerCase()===branch)select.value=o.value})}}

const preview=document.querySelector("[data-appointment-preview]");
if(preview){const link=preview.querySelector("[data-preview-link]"),service=preview.querySelector('[name="preview-service"]'),branchSel=preview.querySelector('[name="preview-branch"]');const sync=()=>{link.href=`appointment.html?service=${encodeURIComponent(service.value)}&branch=${encodeURIComponent(branchSel.value)}`};service.addEventListener("change",sync);branchSel.addEventListener("change",sync);sync()}
