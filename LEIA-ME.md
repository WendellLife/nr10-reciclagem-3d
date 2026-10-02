# NR 10 • Reciclagem (jogo educativo 3D)

Jogo educativo da série de jogos de segurança do trabalho, correspondente à **reciclagem bienal e por situação (item 10.8.8.2)**.

Dois anos depois do curso básico, a fábrica mudou: **QGBT novo, banco de capacitores e geração fotovoltaica**. A turma recicla, um colega volta de cinco meses de afastamento, aparecem **energia armazenada, duas fontes, arco elétrico, direito de recusa** e um **princípio de incêndio** na sala elétrica.

Os outros jogos da NR 10 da série usam a mesma fábrica e a mesma equipe: [NR 10 • Formação](https://github.com/WendellLife/nr10-formacao-3d) • [NR 10 • SEP](https://github.com/WendellLife/nr10-sep-3d).

> **Conteúdo educativo.** Não substitui o treinamento com carga horária, prática e avaliação, nem a autorização formal da empresa. Leia o [SAFETY-NOTES.md](SAFETY-NOTES.md).

## Como abrir

Requer Node.js 18 ou superior (ou Python 3).

- **Windows:** dê dois cliques em `INICIAR.cmd` e abra http://127.0.0.1:8765
- **Qualquer sistema:** `npm start` (ou `node server.mjs`) e abra http://127.0.0.1:8765
- **Hospedagem estática:** publique a pasta `dist/` como está. Não há build nem dependências npm. O Three.js 0.170.0 está em `dist/`.

## Controles

| Ação | Teclado | Celular |
|---|---|---|
| Mover | WASD ou setas | botões de seta na tela |
| Correr | Shift | — |
| Interagir | E | botão AÇÃO |
| Fontes e origem do conteúdo | botão **Fontes** | botão **Fontes** |
| Pausar | Esc ou botão Ⅱ | botão Ⅱ |

O losango verde é você. O losango azul, o alvo luminoso e as setas no chão marcam o destino.

**Painel elétrico** (canto superior direito): horário, tensão e nome do circuito em trabalho, o **estado** dele e a **zona em que você está** — livre, controlada ou de risco — em relação à parte energizada mais crítica, com a distância e os raios do Anexo II.

**Zonas no cenário:** em volta das partes energizadas, o disco vermelho é a zona de risco (Rr) e o anel amarelo, a zona controlada (Rc). Na rede de 13,8 kV, as zonas aparecem como tubos em volta dos condutores; no poste, como esferas. Quando uma parte é desenergizada e a ausência de tensão é constatada, a zona dela some.

## Origem do conteúdo (muito importante)

A **nova NR 10** foi aprovada pela **Portaria MTE 737/2026** (DOU de 01/06/2026), mas **só entra em vigor em 01/06/2027**. Até lá vale o texto atual. Cada etapa mostra:

| Etiqueta | Significa |
|---|---|
| **Em vigor** | NR 10 aprovada pela Portaria MTE 598/2004, alterada pelas Portarias MTPS 508/2016 e SEPRT 915/2019. No texto em vigor, as zonas estão no **Anexo II** e os cursos no **Anexo III**. Também NR 1, NR 6, NR 7, NR 23 e NR 35 quando citadas. |
| **Nova NR 10 publicada — vigora em 01/06/2027** | Mudanças já divulgadas da Portaria MTE 737/2026, citadas sem número de item. |
| **Boa prática — não é item de NR** | Procedimento técnico útil, que não é exigência de NR. |

## Sequência das 12 etapas

| # | Etapa | Origem |
|---|---|---|
| 1 | Saiba quando reciclar | 10.8.8.2 • Nova NR 10 (Portaria MTE 737/2026) — treinamento periódico bienal e também após 90 dias de afastamento, acidente grave ou fatal e mudança de condições de trabalho (nova NR 10) |
| 2 | Recicle o Bruno | 10.8.8.2 b) e c) • 10.8.8.3 |
| 3 | Atualize a documentação | 10.2.3 • 10.2.4 • 10.6.4 |
| 4 | Cuidado com a energia armazenada | 10.5.1 c) e d) • aguardar o tempo de descarga do fabricante e aterrar os terminais (boa prática) |
| 5 | Bloqueie todas as fontes | 10.5.4 • 10.5.1 a) e b) • módulos fotovoltaicos geram tensão sempre que há luz (boa prática) |
| 6 | Dimensione a proteção contra arco | 10.2.9.2 • Nova NR 10 (Portaria MTE 737/2026) — estudo de energia incidente no memorial das instalações (nova NR 10) • vestimenta com ATPV ≥ energia incidente (NFPA 70E / IEEE 1584) (boa prática) |
| 7 | Controle o acesso à zona controlada | 10.8.9 • NR 10 • Anexo II (zonas) — até 1 kV: Rr 0,20 m • Rc 0,70 m • NR 10 • Glossário — zona controlada |
| 8 | Use o direito de recusa | 10.14.1 • 10.13.4 c) • 10.6.2 |
| 9 | Combata o princípio de incêndio | 10.12.4 • 10.9.1 • agente não condutor (CO₂ ou pó) em equipamento energizado (boa prática) |
| 10 | Analise o acidente do Jair | NR 10 • Anexo III (treinamento) — item 1, tópico 13 (causas diretas e indiretas) • investigar causas, sem buscar culpados (boa prática) |
| 11 | Riscos adicionais: a escada | NR 10 • Anexo III (treinamento) — item 1, tópico 11 (riscos adicionais: altura) • NR 35 — trabalho acima de 2 m • escada de fibra de vidro em serviços com eletricidade (boa prática) |
| 12 | Registre a reciclagem | 10.2.4 d) • 10.8.8.1 • NR 1 — 1.7 (certificado de capacitação) |

Cada decisão tem três opções, uma única correta, e cada opção tem um feedback didático.

## Personagens

| Nome | Função | Papel no jogo |
|---|---|---|
| **Você** | Eletricista autorizado | Jogador |
| **Helena** | Engenheira eletricista | Coordena a reciclagem e o registro |
| **Rogério** | Eletricista sênior | Quer apertar uma conexão com o QGBT energizado |
| **Lúcia** | Eletricista | Troca o fusível da string box |
| **Bruno** | Eletricista | Volta de afastamento; pega a escada de alumínio |
| **Paula** | Técnica de segurança | Instrutora; aciona o alarme |
| **Jair** | Operador de produção | Quer limpar o QGBT aberto |

## Cenário

Fábrica com **sala elétrica de baixa tensão** (QGBT, CCM-2, banco de capacitores, prontuário com o diagrama unifilar, caixa de bloqueio e extintor de CO₂), **galpão** aberto com a furadeira, **estacionamento com geração fotovoltaica**, área de treinamento, bancada de EPI, ferramentas isoladas e escadas, **cabine primária de 13,8 kV com a medição**, **poste de entrada** com para-raios, **rede da distribuidora** na via e **caminhão com cesto aéreo**.

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `dist/index.html`, `dist/style.css` | Interface (mesma da série, com painel elétrico e etiquetas de origem) |
| `dist/rules.mjs` | Regras puras e testáveis: etapas, decisões, referências, tabela do Anexo II, estado do circuito, partes energizadas e clima |
| `dist/crew.mjs` | Fases de cada pessoa da equipe e busca de rotas |
| `dist/layout.mjs` | Planta da fábrica, posições da equipe e pontos energizados |
| `dist/scenery.mjs` | Cenário 3D |
| `dist/game.mjs` | Jogo: câmera, equipe, zonas, painel elétrico, clima e diálogos |
| `dist/graphics.mjs` | Qualidade, pós-processamento, texturas, chuva e raio |
| `dist/characters.mjs` | Personagens com esqueleto, animações e poses de ação |
| `dist/models/` | Modelos GLB dos personagens |
| `server.mjs`, `INICIAR.cmd` | Servidor local (127.0.0.1:8765) |
| `manifest.mjs` | Gera o `MANIFESTO-SHA256.json` (`npm run manifest`) |
| `test.mjs` | Testes em Node puro (`npm test`) |

## Testes

```
npm test
```

Cobrem: ordem das etapas; uma única resposta certa por decisão, com feedback; todo item da NR 10 citado existe no texto em vigor; zonas citadas como Anexo II e treinamento como Anexo III; a nova NR 10 sempre identificada pela Portaria 737/2026; tabela do Anexo II; estado do circuito e partes energizadas em cada etapa; fases da equipe; e acessibilidade de todos os destinos.
