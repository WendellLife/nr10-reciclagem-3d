// Regras do jogo NR 10 • Reciclagem (reciclagem bienal e por situação (item 10.8.8.2)), no mesmo padrão dos demais jogos da série.
// Cada etapa traz as referências normativas em "refs". O campo "kind" diz de onde vem o conteúdo:
//  vigente → texto em vigor da NR 10 (Portaria MTE 598/2004, alterada pelas Portarias MTPS 508/2016 e SEPRT 915/2019)
//            e normas citadas por ela (NR 1, NR 6, NR 7, NR 23, NR 35). No texto em vigor, a zona controlada é o Anexo II
//            e o treinamento é o Anexo III.
//  nova    → nova redação da NR 10 aprovada pela Portaria MTE 737/2026 (DOU 01/06/2026). Só vigora a partir de 01/06/2027.
//  pratica → boa prática técnica, que não é item de NR.
// cam:"alto" afasta a câmera para mostrar o poste, o cesto e a rede.
// "check:true" marca número de subitem que deve ser conferido no texto consolidado antes de usar em treinamento.
import {spots,live} from './layout.mjs';
export const KINDS = {
 vigente:'Em vigor',
 nova:'Nova NR 10 publicada — vigora em 01/06/2027',
 pratica:'Boa prática — não é item de NR'
};
export const NOVA_NR10 = {portaria:'Portaria MTE 737/2026',publicacao:'01/06/2026',vigencia:'01/06/2027'};
const nr10=item=>({norm:'NR 10',item,kind:'vigente'});
const anexo2=item=>({norm:'NR 10 • Anexo II (zonas)',item,kind:'vigente'});
const anexo3=item=>({norm:'NR 10 • Anexo III (treinamento)',item,kind:'vigente'});
const glossario=item=>({norm:'NR 10 • Glossário',item,kind:'vigente'});
const nova=item=>({norm:'Nova NR 10 (Portaria MTE 737/2026)',item,kind:'nova'});
const pratica=(norm,item)=>({norm,item,kind:'pratica'});
const at=(p,r)=>({x:p.x,z:p.z,r});

// ---------------- Reciclagem ----------------
const reciclagem = [
 {id:'quando',refs:[nr10('10.8.8.2'),nova('treinamento periódico bienal e também após 90 dias de afastamento, acidente grave ou fatal e mudança de condições de trabalho')],...at(spots.board,2),
  title:'Saiba quando reciclar',description:'Paula abre a turma de reciclagem e pergunta: além de a cada dois anos, quando a reciclagem é obrigatória?',
  tip:'A reciclagem é bienal e também sempre que houver troca de função ou de empresa, retorno de afastamento ou inatividade por mais de três meses, ou modificações significativas nas instalações ou nos métodos de trabalho (10.8.8.2).',
  choices:[
   {id:'bienal',correct:true,label:'A cada dois anos e também na troca de função ou de empresa, na volta de afastamento ou inatividade de mais de três meses e em modificações significativas nas instalações ou nos métodos.',feedback:'Exato: periodicidade bienal mais as três situações do 10.8.8.2.'},
   {id:'cinco',label:'Só a cada cinco anos, junto com a renovação do ASO.',feedback:'A reciclagem é bienal (10.8.8.2). O ASO segue a periodicidade do PCMSO, que é outra coisa.'},
   {id:'empresa',label:'Quem já fez o básico de 40 h só recicla se mudar de empresa.',feedback:'Mudar de empresa é só uma das situações. A reciclagem também é bienal e vale para afastamentos e modificações.'}
  ]},
 {id:'motivo',who:'Bruno',refs:[nr10('10.8.8.2 b) e c)'),nr10('10.8.8.3')],
  title:'Recicle o Bruno',description:'Bruno voltou hoje depois de cinco meses afastado. Nesse tempo, a sala elétrica ganhou um QGBT novo e um banco de capacitores.',
  tip:'Afastamento superior a três meses e modificações significativas exigem reciclagem, com carga horária e conteúdo voltados à situação que a motivou (10.8.8.3).',
  choices:[
   {id:'antes',correct:true,label:'Antes de voltar a intervir, Bruno faz reciclagem com conteúdo voltado ao que mudou: QGBT novo, banco de capacitores e procedimentos atualizados.',feedback:'Reciclagem motivada pelo afastamento e pelas mudanças, com conteúdo ajustado (10.8.8.2 b e c; 10.8.8.3).'},
   {id:'direto',label:'Bruno já era autorizado antes do afastamento: volta direto ao serviço no QGBT novo.',feedback:'Afastamento acima de três meses obriga a reciclagem antes de voltar a intervir (10.8.8.2 b).'},
   {id:'apostila',label:'Entregar a apostila do curso básico para ele reler em casa.',feedback:'Reler apostila não é treinamento. A reciclagem tem carga horária e conteúdo adequados à situação (10.8.8.3).'}
  ]},
 {id:'mudancas',refs:[nr10('10.2.3'),nr10('10.2.4'),nr10('10.6.4')],...at(spots.prontuario,1.5),
  title:'Atualize a documentação',description:'O QGBT novo entrou em operação no mês passado. Confira o que a documentação da sala elétrica precisa mostrar.',
  tip:'Os esquemas unifilares são mantidos atualizados (10.2.3), assim como o prontuário (10.2.4). Novas instalações exigem análise de risco e procedimentos elaborados antes da operação (10.6.4).',
  choices:[
   {id:'atualizada',correct:true,label:'Unifilar atualizado com o QGBT novo, o banco de capacitores e o gerador fotovoltaico; prontuário revisado; análise de risco e procedimentos feitos antes de operar.',feedback:'A documentação acompanha a instalação real (10.2.3, 10.2.4 e 10.6.4).'},
   {id:'caneta',label:'Anotar à caneta “QGBT novo” na capa do diagrama antigo.',feedback:'Anotação na capa não atualiza o esquema. Unifilar desatualizado induz a seccionar o circuito errado.'},
   {id:'fornecedor',label:'O fornecedor do painel tem os desenhos; se precisar, é só pedir a ele.',feedback:'A empresa é obrigada a manter os esquemas atualizados e disponíveis (10.2.3), sem depender do fornecedor.'}
  ]},
 {id:'capacitor',refs:[nr10('10.5.1 c) e d)'),pratica('Boa prática','aguardar o tempo de descarga do fabricante e aterrar os terminais')],...at(spots.capacitor,1.4),
  title:'Cuidado com a energia armazenada',description:'Vão trocar uma célula do banco de capacitores. O banco foi seccionado e bloqueado há um minuto.',
  tip:'Capacitores guardam carga depois de desligados. Aguarde o tempo de descarga indicado pelo fabricante, constate a ausência de tensão em todos os terminais e aterre e curto-circuite os terminais antes de tocar.',
  choices:[
   {id:'descarga',correct:true,label:'Aguardar o tempo de descarga indicado pelo fabricante, medir a ausência de tensão em todos os terminais e aterrar e curto-circuitar os terminais antes de mexer.',feedback:'Energia armazenada eliminada e confirmada antes do contato: 10.5.1 c e d aplicados ao capacitor.'},
   {id:'tocar',label:'Já está desligado e bloqueado, então pode tocar nos terminais.',feedback:'Bloquear a fonte não descarrega o capacitor. Ele pode manter tensão perigosa por minutos.'},
   {id:'chave',label:'Descarregar encostando uma chave de fenda entre os terminais.',feedback:'Curto improvisado gera arco e projeção de material. A descarga se faz com dispositivo adequado, e depois se aterra.'}
  ]},
 {id:'gerador',refs:[nr10('10.5.4'),nr10('10.5.1 a) e b)'),pratica('Boa prática','módulos fotovoltaicos geram tensão sempre que há luz')],...at(spots.inversor,1.6),
  title:'Bloqueie todas as fontes',description:'A fábrica tem geração fotovoltaica ligada ao QGBT novo. Lúcia vai trocar um fusível na string box do inversor.',
  tip:'Instalação desligada que pode ser energizada por qualquer meio segue o item 10.6 (10.5.4). Módulos fotovoltaicos geram tensão sempre que há luz: seccione e bloqueie o lado CA e o lado CC e trate como energizado o que não puder ser seccionado.',
  choices:[
   {id:'cacc',correct:true,label:'Seccionar e bloquear o lado CA do inversor e as chaves CC da string box, constatar a ausência de tensão e tratar os cabos que vêm dos módulos como energizados, porque com sol eles geram tensão.',feedback:'Todas as fontes tratadas, inclusive a geração própria em corrente contínua (10.5.4).'},
   {id:'rede',label:'Desligar só o disjuntor da rede no QGBT: sem rede, o inversor desliga e tudo fica sem tensão.',feedback:'O inversor para de injetar, mas os módulos continuam gerando tensão em corrente contínua enquanto houver luz.'},
   {id:'noite',label:'Fazer à noite e dispensar o bloqueio, porque sem sol não há geração.',feedback:'À noite a geração cai muito, mas isso não dispensa seccionar, bloquear e constatar a ausência de tensão. O procedimento é sempre o mesmo.'}
  ]},
 {id:'arco',refs:[nr10('10.2.9.2'),nova('estudo de energia incidente no memorial das instalações'),pratica('Boa prática','vestimenta com ATPV ≥ energia incidente (NFPA 70E / IEEE 1584)')],...at(spots.qgbtFront,1.4),
  title:'Dimensione a proteção contra arco',description:'A etiqueta do QGBT novo traz a energia incidente calculada no estudo de arco: 8 cal/cm² a 45 cm.',
  tip:'A vestimenta deve contemplar a inflamabilidade (10.2.9.2). Na prática, escolhe-se vestimenta com ATPV maior ou igual à energia incidente do estudo de arco. A nova NR 10 passa a cobrar o estudo de energia incidente no memorial.',
  choices:[
   {id:'atpv',correct:true,label:'Usar o conjunto antichama com ATPV de pelo menos 8 cal/cm², balaclava e protetor facial para arco, e manobrar com o painel fechado sempre que possível.',feedback:'Proteção igual ou superior à energia incidente informada, como recomenda a boa prática do estudo de arco.'},
   {id:'algodao',label:'Camisa de algodão comum resolve, porque algodão não derrete.',feedback:'Algodão comum pega fogo com a energia de um arco. A vestimenta precisa de ATPV compatível com a energia incidente.'},
   {id:'leve',label:'Usar o conjunto de 4 cal/cm², que é mais leve e fresco.',feedback:'ATPV abaixo da energia incidente não protege. O mínimo aqui é 8 cal/cm².'}
  ]},
 {id:'zona',who:'Jair',refs:[nr10('10.8.9'),anexo2('até 1 kV: Rr 0,20 m • Rc 0,70 m'),glossario('zona controlada')],
  title:'Controle o acesso à zona controlada',description:'Jair, operador de produção, entrou na sala elétrica para passar um pano no QGBT aberto.',
  tip:'A aproximação da zona controlada só é permitida a profissionais autorizados (glossário). Quem não tem atividade elétrica atua em zona livre e na vizinhança da zona controlada e deve ser instruído formalmente (10.8.9).',
  choices:[
   {id:'sair',correct:true,label:'Pedir que o Jair saia da zona controlada: limpar o painel é tarefa de autorizado, com o painel desenergizado. Ele recebe a instrução formal prevista para quem atua perto de instalações elétricas.',feedback:'Acesso controlado: quem não é autorizado fica fora da zona controlada (10.8.9 e Anexo II).'},
   {id:'luva',label:'Dar uma luva isolante ao Jair e deixar que ele limpe com cuidado.',feedback:'Luva não torna ninguém autorizado. Não autorizado não entra na zona controlada.'},
   {id:'pano',label:'Liberar, desde que ele use pano seco.',feedback:'Pano seco não protege contra choque nem contra arco. Ele precisa sair da zona controlada.'}
  ]},
 {id:'recusa',who:'Rogério',refs:[nr10('10.14.1'),nr10('10.13.4 c)'),nr10('10.6.2')],
  title:'Use o direito de recusa',description:'Rogério quer apertar uma conexão no QGBT energizado “porque é rapidinho” e pede sua ajuda, sem OS nem procedimento.',
  tip:'Diante de risco grave e iminente, o trabalhador interrompe a tarefa, exerce o direito de recusa e comunica o superior (10.14.1). Trabalho que exige entrar na zona controlada só com procedimento específico (10.6.2).',
  choices:[
   {id:'recusar',correct:true,label:'Recusar e comunicar a Helena: sem OS, procedimento e análise de risco, o serviço se faz com o circuito desenergizado e bloqueado.',feedback:'Direito de recusa exercido e risco comunicado (10.14.1 e 10.13.4 c).'},
   {id:'lanterna',label:'Ajudar só segurando a lanterna, porque quem vai mexer é ele.',feedback:'Você estaria dentro da zona controlada sem procedimento, e o arco atinge quem está perto.'},
   {id:'calado',label:'Não ajudar, mas também não falar nada, para não criar clima.',feedback:'É dever comunicar de imediato a situação de risco (10.13.4 c). O silêncio deixa o colega exposto.'}
  ]},
 {id:'incendio',refs:[nr10('10.12.4'),nr10('10.9.1'),pratica('Boa prática','agente não condutor (CO₂ ou pó) em equipamento energizado')],...at(spots.capacitorFire,1.6),
  title:'Combata o princípio de incêndio',description:'Sai fumaça do banco de capacitores e aparece uma chama pequena. O extintor de CO₂ fica ao lado da porta.',
  tip:'Autorizados devem saber operar os equipamentos de combate a incêndio das instalações (10.12.4). Em equipamento energizado, use agente não condutor (CO₂ ou pó), corte a alimentação se for seguro e nunca use água.',
  choices:[
   {id:'co2',correct:true,label:'Dar o alarme, desligar a alimentação do banco no QGBT se for seguro e combater com o extintor de CO₂, com a saída às costas; se não apagar logo, sair e fechar a porta.',feedback:'Alarme, corte de energia e agente adequado, com a rota de fuga garantida.'},
   {id:'agua',label:'Usar a mangueira do hidrante, que tem mais água e apaga mais rápido.',feedback:'Água em equipamento energizado conduz corrente até quem segura a mangueira.'},
   {id:'filmar',label:'Filmar para mandar no grupo e esperar a brigada chegar.',feedback:'Princípio de incêndio se combate no início, com segurança. Alarme e ação rápida evitam perder a sala elétrica.'}
  ]},
 {id:'acidente',who:'Paula',refs:[anexo3('item 1, tópico 13 (causas diretas e indiretas)'),pratica('Boa prática','investigar causas, sem buscar culpados')],
  title:'Analise o acidente do Jair',description:'Na turma, Paula retoma o choque que o Jair levou na furadeira há dois anos. Aponte as causas.',
  tip:'Causa direta: contato com a carcaça energizada. Causas indiretas: falta de aterramento de proteção, ausência de DR, falhas de inspeção e manutenção. A análise busca causas e medidas, não culpados.',
  choices:[
   {id:'causas',correct:true,label:'Causa direta: contato com a carcaça energizada por falha de isolação. Causas indiretas: condutor de proteção solto, circuito sem DR e sem inspeção periódica. Medidas: aterramento, DR e plano de inspeção.',feedback:'Causas diretas e indiretas identificadas, com medidas que impedem a repetição.'},
   {id:'culpa',label:'O Jair foi descuidado; basta advertir e encerrar o caso.',feedback:'Culpar a vítima não corrige o aterramento solto nem a falta de DR. A análise busca causas.'},
   {id:'azar',label:'Foi fatalidade: não havia como prever.',feedback:'Carcaça energizada tem causas técnicas identificáveis: isolação, aterramento e proteção diferencial.'}
  ]},
 {id:'altura',who:'Bruno',refs:[anexo3('item 1, tópico 11 (riscos adicionais: altura)'),{norm:'NR 35',item:'trabalho acima de 2 m',kind:'vigente'},pratica('Boa prática','escada de fibra de vidro em serviços com eletricidade')],
  title:'Riscos adicionais: a escada',description:'Bruno vai trocar uma luminária a 3 m de altura no galpão e pegou a escada de alumínio.',
  tip:'Riscos adicionais fazem parte do curso: altura, umidade, áreas classificadas. Em serviço com eletricidade, use escada de material isolante, inspecionada e apoiada, e siga a NR 35 acima de 2 m.',
  choices:[
   {id:'fibra',correct:true,label:'Trocar pela escada de fibra de vidro inspecionada, desenergizar o circuito da luminária, apoiar a escada e seguir os requisitos da NR 35 para trabalho acima de 2 m.',feedback:'Escada isolante, circuito desenergizado e trabalho em altura planejado.'},
   {id:'aluminio',label:'Alumínio é mais leve; com luva isolante, a escada de alumínio serve.',feedback:'Escada metálica conduz e cria caminho para a terra. Em eletricidade, use escada isolante.'},
   {id:'cadeira',label:'Para 3 m, subir na cadeira do refeitório é mais rápido.',feedback:'Cadeira não é meio de acesso seguro. Acima de 2 m aplicam-se os requisitos da NR 35.'}
  ]},
 {id:'registro',who:'Helena',refs:[nr10('10.2.4 d)'),nr10('10.8.8.1'),{norm:'NR 1',item:'1.7 (certificado de capacitação)',kind:'vigente',check:true}],
  title:'Registre a reciclagem',description:'Fim da reciclagem. Helena pergunta o que precisa ficar registrado.',
  tip:'O prontuário guarda a documentação de qualificação, capacitação, autorização e treinamentos (10.2.4 d). O certificado traz conteúdo, carga horária, data, local e instrutores, conforme a NR 1.',
  choices:[
   {id:'completo',correct:true,label:'Certificado com conteúdo, carga horária, data, local e instrutores, avaliação de aproveitamento, autorização atualizada no registro e cópia no prontuário.',feedback:'Registro completo e autorização atualizada (10.2.4 d e 10.8.8.1).'},
   {id:'lista',label:'Só a lista de presença assinada já basta.',feedback:'Lista de presença não comprova conteúdo, carga horária nem aproveitamento.'},
   {id:'nada',label:'Reciclagem não precisa de registro, só o curso básico.',feedback:'A reciclagem também é comprovada e arquivada no prontuário (10.2.4 d).'}
  ]}
];

export const MODULES = {
 reciclagem:{id:'reciclagem',name:'Reciclagem',course:'Bienal e por situação (10.8.8.2)',role:'Eletricista autorizado',place:'FÁBRICA • DOIS ANOS DEPOIS',
  intro:'Dois anos depois, a fábrica mudou: QGBT novo, banco de capacitores e geração fotovoltaica. A turma recicla, um colega volta de afastamento e o dia traz um princípio de incêndio.',
  summary:'Você reconheceu quando reciclar, tratou energia armazenada e geração própria, controlou o acesso à zona controlada, exerceu o direito de recusa e combateu um princípio de incêndio.',objectives:reciclagem}
};
export const MODULE_IDS = Object.keys(MODULES);
export const objectivesOf = m => MODULES[m].objectives;
export const indexOf = (m,id) => objectivesOf(m).findIndex(o => o.id === id);
export const refLabel = r => `${r.norm} • ${/^\d/.test(r.item)?'item ':''}${r.item}`;
// Linha de referência mostrada no painel. A origem (em vigor, nova NR 10 ou boa prática) sempre aparece.
export const refSummary = o => o.refs.map(r => ({label:refLabel(r),kind:r.kind,status:KINDS[r.kind],check:!!r.check}));

// ---------------- Anexo II: zonas de risco e controlada ----------------
// Faixas de tensão nominal (kV) com os raios Rr (zona de risco) e Rc (zona controlada), em metros.
export const ANEXO_II = [
 [1,.20,.70],[3,.22,1.22],[6,.25,1.25],[10,.35,1.35],[15,.38,1.38],[20,.40,1.40],[30,.56,1.56],[36,.58,1.58],[45,.63,1.63],[60,.83,1.83],
 [70,.90,1.90],[110,1.00,2.00],[132,1.10,3.10],[150,1.20,3.20],[220,1.60,3.60],[275,1.80,3.80],[380,2.50,4.50],[480,3.20,5.20],[700,5.20,7.20]
];
export function radii(kv){const row=ANEXO_II.find(([max])=>kv<max)||ANEXO_II.at(-1);return {rr:row[1],rc:row[2]};}
export function zoneOf(kv,d){const {rr,rc}=radii(kv);return d<=rr?'risco':d<=rc?'controlada':'livre';}
export const ZONE_LABEL = {risco:'ZONA DE RISCO',controlada:'ZONA CONTROLADA',livre:'ZONA LIVRE'};

// ---------------- Estado do jogo ----------------
export const initialState = (module=MODULE_IDS[0]) => ({module,step:0,feedback:'',errors:0,completed:[],finished:false});
export const done = (s,id) => s.completed.includes(id);
export const currentTarget = s => objectivesOf(s.module)[s.step];
function advance(s,next,id){
 const list=objectivesOf(s.module);next.completed=[...s.completed,id];next.step=s.step+1;next.finished=next.step===list.length;
 return next;
}
export function answer(s,choiceId){
 const o=currentTarget(s);const c=o?.choices?.find(x=>x.id===choiceId);if(!c)return s;
 if(!c.correct)return {...s,errors:s.errors+1,feedback:c.feedback};
 return advance(s,{...s,feedback:c.feedback},o.id);
}
const ACTION_FEEDBACK = {
 sinalizar:'Circuito liberado para o serviço: seccionado, bloqueado, sem tensão, aterrado, protegido e sinalizado.',
 sinalizacao:'Área isolada e sinalizada: cones, fita zebrada e placas de homens trabalhando.'
};
export function interact(s,id){
 const o=currentTarget(s);if(!o||o.id!==id)return s;
 if(o.choices)return {...s,feedback:'Escolha uma das opções.'};
 return advance(s,{...s,feedback:ACTION_FEEDBACK[id]||''},id);
}

// ---------------- Circuito em trabalho (painel elétrico) ----------------
// tone: perigo (energizado), atencao (seccionado/bloqueado, ainda não constatado), seguro (sem tensão, aterrado).
export function circuit(s){
 const d=id=>done(s,id),o=currentTarget(s);
 if(s.module==='formacao'){
  const c={name:'CCM-2 • bomba de recalque',kv:.38};
  if(d('reenergizar'))return {...c,state:'Reenergizado',tone:'perigo'};
  if(d('sinalizar'))return {...c,state:'Liberado para serviço',tone:'seguro'};
  if(d('aterrar'))return {...c,state:d('proteger')?'Aterrado • QGBT protegido':'Aterrado',tone:'seguro'};
  if(d('testar'))return {...c,state:'Sem tensão (constatado)',tone:'seguro'};
  if(d('bloquear'))return {...c,state:'Seccionado e bloqueado',tone:'atencao'};
  if(d('seccionar'))return {...c,state:'Seccionado',tone:'atencao'};
  return {...c,state:'Energizado',tone:'perigo'};
 }
 if(s.module==='reciclagem'){
  if(o?.id==='capacitor')return {name:'Banco de capacitores',kv:.38,state:'Bloqueado • carga armazenada',tone:'atencao'};
  if(o?.id==='gerador')return {name:'String box fotovoltaica',kv:.8,dc:true,state:'Lado CC energizado (sol)',tone:'perigo'};
  if(o?.id==='incendio')return {name:'Banco de capacitores',kv:.38,state:'Fumaça e chama',tone:'perigo'};
  if(d('capacitor')&&!d('incendio'))return {name:'QGBT-2 (novo)',kv:.38,state:'Energizado',tone:'perigo'};
  return {name:'QGBT-2 (novo)',kv:.38,state:'Energizado',tone:'perigo'};
 }
 const c={name:'Ramal 13,8 kV • poste de entrada',kv:13.8};
 if(d('liberacao'))return {...c,state:'Liberado ao centro de operação',tone:'perigo'};
 if(d('aterramento'))return {...c,state:'Sem tensão e aterrado',tone:'seguro'};
 if(d('detector'))return {...c,state:'Sem tensão (constatado)',tone:'seguro'};
 if(d('manobra'))return {...c,state:'Chave aberta e bloqueada',tone:'atencao'};
 return {...c,state:'Energizado',tone:'perigo'};
}
// Partes energizadas expostas no momento (para as zonas no cenário e a distância no painel).
export function hazards(s){
 const d=id=>done(s,id),o=currentTarget(s),list=[live.rede];
 if(s.module==='sep'){if(!d('detector')||d('liberacao'))list.push(live.ramal);}
 else list.push(live.ramal);
 if(s.module==='formacao'){
  list.push(live.qgbt);
  if(!d('testar')||d('reenergizar'))list.push(live.ccm);
  if(o?.id==='choque')list.push(live.maquina);
 }
 if(s.module==='reciclagem'){
  list.push(live.qgbt,live.stringBox);
  if(!d('capacitor'))list.push(live.capacitor);
 }
 return list;
}

// ---------------- Hora e clima ----------------
// Só o módulo SEP tem tempestade, na etapa "tempo". Atraso do trovão em segundos; null = sem raios.
const CLOCK = {
 formacao:['07:30','07:45','08:00','08:15','08:25','08:35','08:45','09:00','09:05','09:10','09:15','09:20','09:25','10:10','10:15','11:30'],
 reciclagem:['08:00','08:20','08:40','09:10','09:40','10:10','10:40','11:00','13:30','14:10','15:00','16:00'],
 sep:['07:00','07:10','07:20','07:30','07:40','07:45','07:50','08:00','08:10','08:20','08:30','08:40','09:30','10:10','11:20']
};
export function weather(m,step){
 const list=objectivesOf(m),i=Math.max(0,Math.min(list.length-1,step)),clock=CLOCK[m][i];
 if(m!=='sep')return {clock,dark:0,rain:0,wind:.1,thunderDelay:null};
 const t=indexOf('sep','tempo');
 if(i===t)return {clock,dark:.85,rain:.7,wind:.7,thunderDelay:12};
 if(i===t+1)return {clock,dark:.12,rain:0,wind:.2,thunderDelay:null};
 if(i===t-1)return {clock,dark:.2,rain:0,wind:.3,thunderDelay:null};
 return {clock,dark:0,rain:0,wind:.15,thunderDelay:null};
}
export const thunderDistance = seconds => Math.round(343*seconds);
export const inDangerRange = seconds => seconds<=30;
// Áreas caminháveis: pátio da fábrica; estruturas entram como obstáculos {x,z,w,d}.
export function canMove(x,z,obstacles){
 const site=x>-21&&x<26&&z>-13.4&&z<12.4;
 return site&&!obstacles.some(o=>Math.abs(x-o.x)<o.w/2+.32&&Math.abs(z-o.z)<o.d/2+.32);
}
