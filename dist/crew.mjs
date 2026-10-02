import {canMove,done,currentTarget} from './rules.mjs';
import {W,rosters,meetingPoint} from './layout.mjs';
// Fase de cada pessoa da equipe conforme o módulo e o andamento do jogo.
// Devolve {key,label,tone,pose,at,angle,mount}: "at" é para onde a pessoa caminha; "mount" põe a pessoa no cesto aéreo.
// tone: info (rotina), alerta (comportamento inseguro ou dúvida), perigo (vítima), ok (situação resolvida).
const POSE={inspect:'inspect',repair:'repair',push:'push',phone:'phone',cones:'cones',none:'none'};
export function phaseOf(module,name,s){
 const r=rosters[module][name],d=id=>done(s,id),cur=currentTarget(s)?.id,home={x:r.x,z:r.z};
 const base={key:'work',label:r.task,tone:'info',pose:POSE[r.kind]||'none',at:home,angle:r.angle};
 const P=(key,label,tone,pose,at=home,angle=r.angle,extra={})=>({key,label,tone,pose,at,angle,...extra});
 if(s.finished)return P('fim',module==='sep'?'Ramal liberado':'Dia encerrado','ok','none',meetingPointOf(name),0);
 if(module==='reciclagem'){
  if(name==='Bruno'){
   if(cur==='motivo')return P('volta','Voltei hoje, depois de 5 meses afastado','alerta','none');
   if(cur==='altura')return P('escada','“Vou de escada de alumínio”','alerta','reach',{x:-7.4,z:2.2},Math.PI);
   if(d('altura'))return P('fibra','Escada de fibra • circuito desligado','ok','inspect',{x:-7.4,z:2.2},Math.PI);
   if(d('motivo'))return P('turma','Em reciclagem • QGBT novo','ok','none');
   return base;}
  if(name==='Jair'){
   if(cur==='zona')return P('pano','“Só vou passar um pano no painel”','alerta','wipe',{x:1.7,z:-9.0},Math.PI);
   if(d('zona')&&!d('incendio'))return P('fora','Instruído • fora da zona controlada','ok','push');
   return base;}
  if(name==='Rogério'){
   if(cur==='recusa')return P('energizado','“É rapidinho, faço energizado!”','alerta','repair',{x:3.5,z:-9.1},Math.PI);
   if(d('recusa'))return P('os','Aguardando OS e procedimento','ok','inspect');
   return base;}
  if(name==='Lúcia'){
   if(cur==='gerador')return P('string','Vai trocar o fusível da string box','alerta','inspect');
   if(d('gerador'))return P('cacc','Lados CA e CC bloqueados','ok','repair');
   return base;}
  if(name==='Paula'&&cur==='incendio')return P('alarme','Acionou o alarme','alerta','phone',{x:5,z:-3.6},Math.PI);
  return base;
 }
 return base;
}
function meetingPointOf(name){const i=['Helena','Rogério','Lúcia','Bruno','Paula','Jair'].indexOf(name);return {x:meetingPoint.x-2.5+i*1.1,z:meetingPoint.z};}
// Busca em grade (BFS com diagonais) entre dois pontos do pátio, respeitando os obstáculos.
const SIZE=.4,COLS=Math.ceil((W.maxX-W.minX)/SIZE),ROWS=Math.ceil((W.maxZ-W.minZ)/SIZE);
const pointOf=i=>({x:W.minX+(i%COLS)*SIZE,z:W.minZ+Math.floor(i/COLS)*SIZE});
export function walkableGrid(obstacles){const a=new Uint8Array(COLS*ROWS);for(let i=0;i<a.length;i++){const p=pointOf(i);a[i]=canMove(p.x,p.z,obstacles)?1:0;}return a;}
export function findRoute(start,goal,obstacles,grid=walkableGrid(obstacles)){
 const key=(x,z)=>z*COLS+x;
 const nearest=p=>{let best=-1,dist=Infinity;for(let i=0;i<grid.length;i++){if(!grid[i])continue;const q=pointOf(i),d=(p.x-q.x)**2+(p.z-q.z)**2;if(d<dist){dist=d;best=i;}}return best;};
 const from=nearest(start),to=nearest(goal);if(from<0||to<0)return [];
 const previous=new Int32Array(grid.length).fill(-1),queue=[from];previous[from]=from;
 for(let head=0;head<queue.length&&previous[to]<0;head++){const id=queue[head],x=id%COLS,z=Math.floor(id/COLS);
  for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const nx=x+dx,nz=z+dz;if(nx<0||nx>=COLS||nz<0||nz>=ROWS)continue;const next=key(nx,nz);if(!grid[next]||previous[next]>=0)continue;if(dx&&dz&&(!grid[key(x+dx,z)]||!grid[key(x,z+dz)]))continue;previous[next]=id;queue.push(next);}}
 if(previous[to]<0)return [];const route=[];for(let id=to;id!==from;id=previous[id])route.push(pointOf(id));route.push(pointOf(from));return route.reverse();
}
