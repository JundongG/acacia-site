(function () {
  'use strict';

  var STORAGE_KEY = 'acacia-lang';
  var SUPPORTED = ['en', 'pt'];

  /* English strings live in the HTML and are cached at load.
     Portuguese (Mozambique) strings are defined here. */
  var PT = {
    'skip': 'Saltar para o conteúdo',
    'nav.label': 'Principal',
    'nav.product': 'Produto',
    'nav.how': 'Como funciona',
    'nav.toolkit': 'Ferramentas de comércio',
    'nav.tech': 'Tecnologia',
    'nav.company': 'Empresa',
    'nav.menu': 'Menu',
    'lang.label': 'Idioma',
    'cta.demo': 'Pedir uma demonstração',

    'hero.status': 'Em desenvolvimento · Pré-visualização do produto',
    'hero.h1': 'Pedidos de compradores, lidos com cuidado. Respostas <em>enviadas por pessoas.</em>',
    'hero.lede': 'O Acacia Inquiry Assistant é um espaço de trabalho com IA para equipas de exportação. Lê os pedidos recebidos de compradores, extrai os dados comerciais que importam, verifica sinais de fraude e de injecção de instruções, e redige cotações e respostas fundamentadas — sempre revistas por uma pessoa antes de qualquer envio.',
    'hero.how': 'Ver como funciona',
    'hero.fine': 'Feito para exportadores e empresas de comércio. Revisão humana obrigatória. Sem envio automático não supervisionado.',

    'mock.crumb': 'Pedido · exemplo',
    'mock.chip': 'Pré-visualização',
    'mock.p1': 'Pedido',
    'mock.inq': 'Pedido do comprador · colado',
    'mock.risk': 'Risco: baixo',
    'mock.c1': 'Padrões de fraude — nenhum encontrado',
    'mock.c2': 'Instruções ocultas — nenhuma encontrada',
    'mock.p2': 'Extracção',
    'f.product': 'Produto',
    'v.product': 'Chaleira de aço inoxidável, 1,8 L',
    'f.qty': 'Quantidade',
    'v.qty': '5.000 unidades',
    'f.inco': 'Incoterm / porto',
    'f.target': 'Preço-alvo',
    'v.target': 'USD 8,20 / unidade',
    'f.deliv': 'Prazo pedido',
    'v.deliv': '3 semanas',
    'f.warr': 'Garantia',
    'v.tbc': '[A confirmar]',
    'v.warrnote': 'Não consta da sua tabela de preços',
    'mock.book': 'Verificado com a sua tabela de preços',
    'b.unit': 'Preço unitário',
    'bv.unit': 'USD 8,45',
    'b.total': 'Total',
    'bv.total': 'USD 42.250,00',
    'b.lead': 'Prazo de entrega',
    'bv.lead': '4 semanas',
    'mock.p3': 'Rascunho para revisão',
    'mock.draft': 'Rascunho de resposta · inglês',
    'mock.chk': 'Revi os números e as afirmações',
    'mock.copy': 'Copiar rascunho',
    'mock.hint': 'A revisão é obrigatória antes de copiar.',
    'mock.done': 'Rascunho copiado. Envie-o a partir da sua própria caixa de correio.',
    'mock.cap': 'Pré-visualização ilustrativa com dados de exemplo. O Acacia Inquiry Assistant está em desenvolvimento.',

    'prod.eyebrow': 'Produto principal · Em desenvolvimento',
    'prod.sub': 'Um espaço de trabalho com IA para equipas de vendas de exportação: transforme pedidos desorganizados em factos estruturados, avaliações de risco mais seguras e respostas prontas a copiar — sem inventar preços, certificações ou prazos que a sua empresa nunca indicou.',
    'feat1.h': 'Ler e extrair',
    'feat1.p': 'Retira do texto do pedido o produto, a quantidade, indícios de quantidade mínima, incoterm, porto, preço-alvo, certificações, amostras e prazos pedidos — e compara-os com a sua própria tabela de preços.',
    'feat2.h': 'Verificar o risco',
    'feat2.p': 'Verificações por regras e por modelo assinalam possíveis padrões de burla — taxas antecipadas, reembolsos de pagamentos em excesso, alterações de conta, phishing — e instruções ocultas dirigidas a assistentes de IA. Os casos suspeitos interrompem a geração do rascunho.',
    'feat3.h': 'Redigir, verificar, copiar',
    'feat3.p': 'Gera uma resposta em inglês e uma verificação de factos bilingue para a sua equipa, três perguntas de esclarecimento e uma data de seguimento. As afirmações sem comprovação no seu material passam a marcadores. Só uma pessoa pode copiar o rascunho, depois de o rever.',

    'scr.label': 'Verificação de risco · pedido de exemplo',
    'scr.note': 'Exemplo ilustrativo. Quando uma verificação assinala um pedido, não é gerado nenhum rascunho.',
    'scr.verdict': 'Risco elevado',
    'scr.stop': 'Geração do rascunho interrompida',
    'scr.signals': 'Sinais encontrados',
    'scr.s1': 'Pedido de taxa antecipada',
    'scr.s2': 'Reembolso de pagamento em excesso',
    'scr.s3': 'Instrução oculta dirigida a assistentes de IA',
    'scr.next': 'Próximo passo',
    'scr.nextp': 'Não pague nem reembolse. Confirme o comprador por um canal independente antes de responder.',

    'how.eyebrow': 'Como funciona',
    'how.h2': 'Do pedido colado a uma resposta revista.',
    'how.sub': 'Pensado para o pessoal de vendas e operações de exportação que já trabalha no e-mail e em folhas de cálculo.',
    'step1.h': 'Cole o pedido',
    'step1.p': 'Cole o e-mail do comprador e, se quiser, a tabela de preços ou os dados dos produtos da sua empresa. A entrada é por copiar e colar — não é preciso ligar a caixa de correio para começar.',
    'step2.h': 'Extrair e conferir',
    'step2.p': 'O assistente retira os campos comerciais e compara-os com o material que forneceu. Tudo o que não consegue sustentar com os seus próprios dados fica assinalado com um marcador.',
    'step3.h': 'Verificar o risco',
    'step3.p': 'Verificações por regras e por modelo procuram padrões de burla e instruções ocultas dirigidas a assistentes de IA. Se o pedido for assinalado, a geração do rascunho pára e fica a saber porquê.',
    'step4.h': 'Rever e depois copiar',
    'step4.p': 'Uma pessoa confere os números e as afirmações, confirma a revisão e copia o rascunho. O envio é feito a partir da sua própria caixa de correio — o assistente nunca envia sozinho.',

    'tk.eyebrow': 'Ferramentas de comércio',
    'tk.h2': 'Cinco ferramentas para a equipa de exportação.',
    'tk.sub': 'Além do assistente de pedidos, a ACACIA está a desenvolver utilitários focados que as equipas de exportação já usam no dia a dia — verificação de fraude, cotações, conferência de documentos, planos de carregamento e reconciliação cambial. Apenas descrições de funcionalidades; neste pré-visualização não há logótipos de clientes nem números de utilização. As cinco ferramentas fazem parte da pré-visualização do produto e podem mudar à medida que o desenvolvimento avança.',
    'tk1.tag': 'Risco',
    'tk1.h': 'Verificação de fraude em pedidos',
    'tk1.p': 'Regras offline que classificam os e-mails de pedido em risco elevado / médio / baixo, com a frase correspondente e um próximo passo — abrangendo taxas antecipadas, burlas de reembolso, alterações de conta, phishing e instruções ocultas a assistentes de IA.',
    'tk2.tag': 'Cotação',
    'tk2.h': 'Do pedido à cotação',
    'tk2.p': 'Transforma um pedido em várias línguas e a sua própria tabela de preços numa cotação para o cliente, uma lista de confirmação e um rascunho de resposta. Não inventa frete nem trata os termos do comprador como já aceites.',
    'tk3.tag': 'Documentos',
    'tk3.h': 'Conferência de consistência de documentos comerciais',
    'tk3.p': 'Compara contratos, facturas, packing lists, conhecimentos de embarque, cartas de crédito e certificados de origem em busca de quantidades, valores, partes, portos e marcas inconsistentes, antes da apresentação.',
    'tk4.tag': 'Carregamento',
    'tk4.h': 'Planeador de carregamento de contentores',
    'tk4.p': 'A partir de uma packing list, calcula CBM e peso, recomenda combinações 20GP / 40GP / 40HQ e produz uma lista de carregamento por contentor, com taxas de ocupação e avisos de excesso de peso.',
    'tk5.tag': 'Finanças',
    'tk5.h': 'Reconciliação de recebimentos em divisas',
    'tk5.p': 'Associa recebimentos bancários a facturas em aberto, tendo em conta comissões e pagamentos parciais, e encaminha correspondências de pagador ambíguas para confirmação humana, em vez de as compensar silenciosamente de forma errada.',

    'tech.eyebrow': 'Tecnologia',
    'tech.h2': 'IA que se mantém dentro dos factos que lhe fornece.',
    'tech.sub': 'O assistente assenta numa regra simples: o modelo pode ler, organizar e redigir — mas não pode inventar, nem pode enviar.',
    'tech1.h': 'Redacção fundamentada',
    'tech1.p': 'As respostas são redigidas a partir do pedido e do material que colar. As afirmações sem suporte passam a marcadores, em vez de frases categóricas.',
    'tech2.h': 'Verificação em camadas',
    'tech2.p': 'Verificações por regras e por modelo trabalham em conjunto para assinalar padrões de fraude como taxas antecipadas, reembolsos de pagamentos em excesso, alterações de conta e phishing.',
    'tech3.h': 'Atenção à injecção de instruções',
    'tech3.p': 'O texto do pedido é tratado como conteúdo a analisar, não como instruções a seguir. As instruções ocultas dirigidas a assistentes de IA são assinaladas como sinal de risco.',
    'tech4.h': 'Pessoa no circuito',
    'tech4.p': 'Para copiar um rascunho, uma pessoa tem de confirmar que reviu os números e as afirmações. O envio acontece fora do assistente, a partir da sua própria caixa de correio.',
    'tech.limits': 'Por concepção, não',
    'tech.l1': 'Envia e-mails por conta própria',
    'tech.l2': 'Exige ligação à sua caixa de correio para começar',
    'tech.l3': 'Gera um rascunho quando o pedido é assinalado',
    'tech.l4': 'Indica preços, certificações ou prazos que a sua empresa nunca forneceu',
    'tech.foot': 'A verificação reduz o risco; não substitui o seu próprio juízo nem a confirmação de um comprador.',
    'tech.stack': 'Base tecnológica em construção',
    'tech.stackp': 'Modelos de pesos abertos e alojados, avaliados em conjuntos de tarefas de pedidos comerciais. Esquemas de extracção, verificadores anti-alucinação e classificadores de risco ajustados aos fluxos de uma equipa de exportação.',
    'tech.chip1': 'Extracção estruturada',
    'tech.chip2': 'Texto comercial em várias línguas',
    'tech.gpu': 'Os créditos e os GPU em nuvem, se forem usados, destinam-se apenas à I&D e às cargas de trabalho de produto da própria ACACIA — compreensão de pedidos em várias línguas, afinação de modelos de extracção, avaliações de verificação e inferência. Não são revendidos. Não são partilhados fora da empresa.',

    'co.eyebrow': 'Empresa',
    'co.h2': 'ACACIA — uma empresa moçambicana de software.',
    'co.p1': 'A ACACIA SOFTWARE E CONSULTORIO, SU, LDA é uma empresa moçambicana de capital privado (Sociedade Unipessoal por Quotas), constituída em 29 de Outubro de 2026 e registada em 2 de Novembro de 2026. A sede registada situa-se em Mocuba, Zambézia, Moçambique. O único sócio e gerente é Aron Masango.',
    'co.p2': 'Desenvolvemos software e aplicações com IA. O nosso produto principal é o Acacia Inquiry Assistant, para exportadores e empresas de comércio, a par de um conjunto focado de ferramentas de comércio para as mesmas equipas de exportação. Somos autofinanciados (sem financiamento institucional de capital de risco até à data) e usamos ferramentas modernas de desenvolvimento no trabalho quotidiano de produto.',
    'co.p3': 'Nesta pré-visualização não apresentamos logótipos de clientes, números de utilizadores, prémios nem valores de receita. Só aparecerão quando forem reais e estiverem aprovados para publicação.',
    'co.f1': 'Firma',
    'co.f2': 'Entidade / NUIT',
    'co.f3': 'Constituição',
    'co.v3': '29 de Outubro de 2026',
    'co.f6': 'Registo',
    'co.v6': '2 de Novembro de 2026',
    'co.f4': 'Financiamento',
    'co.v4': 'Autofinanciada',
    'co.f7': 'Sede',
    'co.v2': 'Mocuba, Zambézia, Moçambique',
    'co.f8': 'Gerente',
    'co.f5': 'Contacto',

    'ct.eyebrow': 'Fale connosco',
    'ct.h2': 'Pedir uma demonstração',
    'ct.p': 'Conte-nos o fluxo de trabalho da sua equipa de exportação e quais os produtos que pretende experimentar. Respondemos por e-mail — sem spam e sem falsa urgência.',
    'ct.phone': 'Telefone: +258 878922198',
    'ct.addr': 'Sede registada: AV/Rua EN1, Bairro Tomba de Água, Cidade de Mocuba, Província da Zambézia, Moçambique',

    'foot.tag': 'Espaço de trabalho com IA para equipas de exportação. Em desenvolvimento em Mocuba, Zambézia, Moçambique.',
    'foot.label': 'Rodapé',
    'foot.privacy': 'Privacidade',
    'foot.rights': 'Todos os direitos reservados.',
    'foot.status': 'O Acacia Inquiry Assistant está em desenvolvimento. Os ecrãs apresentados são ilustrativos.',

    /* Privacy page */
    'pv.eyebrow': 'Legal',
    'pv.h1': 'Política de privacidade',
    'pv.updated': 'Última actualização: 10 de Novembro de 2026',
    'pv.intro': 'Esta política descreve o modo como a ACACIA SOFTWARE E CONSULTORIO, SU, LDA (“ACACIA”, “nós”) trata informação no nosso sítio público e no Acacia Inquiry Assistant (e produtos ACACIA relacionados). Não constitui aconselhamento jurídico.',
    'pv.toc': 'Nesta página',
    'pv.s1.h': 'Quem somos',
    'pv.s1.p': 'Firma: ACACIA SOFTWARE E CONSULTORIO, SU, LDA. Sede registada: AV/Rua EN1, Bairro Tomba de Água, Cidade de Mocuba, Província da Zambézia, Moçambique. Contacto: <a href="mailto:admin@acaciasoftwaremz.com">admin@acaciasoftwaremz.com</a>. Telefone: +258 878922198.',
    'pv.s3.h': 'O que recolhemos',
    'pv.s3.l1': '<strong>Pedidos de contacto / demonstração:</strong> nome, empresa, e-mail e a mensagem que nos enviar.',
    'pv.s3.l5': '<strong>Utilização do produto:</strong> e-mail da conta, texto dos pedidos e materiais da empresa que submeter para redacção ou verificação, e dados de utilização necessários para operar o serviço. Concebemos o assistente de pedidos de modo a que o corpo dos pedidos não seja escrito nos registos da aplicação.',
    'pv.s3.l3': '<strong>Sítio:</strong> registos padrão do servidor/CDN (IP, agente do utilizador, data e hora). Não usamos rastreadores de publicidade nesta pré-visualização.',
    'pv.s3.l2': '<strong>Preferência de idioma:</strong> a sua escolha (inglês ou português) é guardada no armazenamento local do seu navegador. Fica no seu dispositivo e não nos é enviada.',
    'pv.s3.l4': '<strong>Tipos de letra:</strong> este sítio carrega tipos de letra a partir do Google Fonts. O seu navegador liga-se a servidores da Google, que recebem o seu endereço IP.',
    'pv.s5.h': 'Para que os usamos',
    'pv.s5.l1': 'Para responder a pedidos de demonstração e de contacto',
    'pv.s5.l2': 'Para fornecer o Acacia Inquiry Assistant e produtos relacionados (redacção, verificação, análise de risco) e para os melhorar com dados de tarefas consentidos',
    'pv.s5.l3': 'Para proteger o serviço e cumprir obrigações legais',
    'pv.s5.p': 'Não vendemos dados pessoais.',
    'pv.s6.h': 'Partilha',
    'pv.s6.p': 'Não vendemos dados pessoais. Podemos usar fornecedores de infraestrutura e de modelos como subcontratantes ao abrigo de contrato. Os créditos de GPU em nuvem e de alojamento, se forem concedidos, serão usados apenas nas cargas de trabalho da própria ACACIA.',
    'pv.s7.h': 'Conservação',
    'pv.s7.p': 'Os e-mails de pedido de demonstração conservam-se até que peça a sua remoção. Os prazos de conservação do conteúdo do produto serão publicados com os termos de cada produto.',
    'pv.s8.h': 'As suas opções',
    'pv.s8.p': 'Escreva para <a href="mailto:admin@acaciasoftwaremz.com">admin@acaciasoftwaremz.com</a> para aceder, corrigir ou eliminar dados de contacto, ou para colocar questões sobre esta política.',
    'pv.s9.h': 'Alterações',
    'pv.s9.p': 'Actualizaremos esta página quando as práticas mudarem. Alterações materiais ficam reflectidas numa nova data de “Última actualização”.',
    'pv.s11.h': 'Estado desta página',
    'pv.s11.p': 'Esta política aplica-se a acaciasoftwaremz.com e às superfícies de produto ACACIA relacionadas. Actualizaremos a data de “Última actualização” quando as práticas mudarem.',
    'pv.s10.h': 'Contacto',
    'pv.s10.p': 'Para questões sobre privacidade ou para exercer os seus direitos, contacte:',
    'pv.back': '← Voltar à página inicial' 
  };

  var META = {
    home: {
      title: 'ACACIA — Acacia Inquiry Assistant | Espaço de trabalho com IA para equipas de exportação',
      desc: 'A ACACIA é uma empresa moçambicana de software em Mocuba que está a desenvolver o Acacia Inquiry Assistant — um espaço de trabalho com IA, em desenvolvimento, que lê pedidos comerciais, extrai os campos principais, verifica sinais de fraude e redige cotações e respostas fundamentadas para revisão humana.'
    },
    privacy: {
      title: 'Política de privacidade — ACACIA',
      desc: 'Como a ACACIA trata dados pessoais neste sítio e na correspondência que recebe.'
    }
  };

  var doc = document;
  var root = doc.documentElement;
  var page = (doc.body && doc.body.getAttribute('data-page')) || 'home';
  var metaDesc = doc.querySelector('meta[name="description"]');
  var EN_META = { title: doc.title, desc: metaDesc ? metaDesc.getAttribute('content') : '' };

  var textNodes = Array.prototype.slice.call(doc.querySelectorAll('[data-i18n]'));
  var attrNodes = Array.prototype.slice.call(doc.querySelectorAll('[data-i18n-attr]'));

  /* Cache English originals */
  textNodes.forEach(function (el) { el._en = el.innerHTML; });
  attrNodes.forEach(function (el) {
    el._attrs = el.getAttribute('data-i18n-attr').split(';').map(function (pair) {
      var parts = pair.split(':');
      var name = (parts[0] || '').trim();
      return { name: name, key: (parts[1] || '').trim(), en: el.getAttribute(name) };
    }).filter(function (a) { return a.name && a.key; });
  });

  function readStored() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function store(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) { lang = 'en'; }
    var pt = lang === 'pt';

    textNodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.innerHTML = (pt && PT[key] != null) ? PT[key] : el._en;
    });
    attrNodes.forEach(function (el) {
      el._attrs.forEach(function (a) {
        el.setAttribute(a.name, (pt && PT[a.key] != null) ? PT[a.key] : a.en);
      });
    });

    var m = META[page];
    doc.title = (pt && m) ? m.title : EN_META.title;
    if (metaDesc) { metaDesc.setAttribute('content', (pt && m) ? m.desc : EN_META.desc); }

    root.lang = pt ? 'pt-MZ' : 'en';

    Array.prototype.forEach.call(doc.querySelectorAll('.lang-btn'), function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  Array.prototype.forEach.call(doc.querySelectorAll('.lang-btn'), function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      store(lang);
      applyLang(lang);
    });
  });

  var initial = readStored();
  if (SUPPORTED.indexOf(initial) === -1) { initial = 'en'; }
  applyLang(initial);

  /* ---------- Sticky header state ---------- */
  var header = doc.getElementById('site-header');
  function onScroll() {
    if (header) { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var toggle = doc.querySelector('.nav-toggle');
  var nav = doc.getElementById('site-nav');

  function setNav(open) {
    if (!header || !toggle) { return; }
    header.classList.toggle('nav-open', open);
    doc.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setNav(!header.classList.contains('nav-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) { setNav(false); }
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        setNav(false);
        toggle.focus();
      }
    });
    doc.addEventListener('click', function (e) {
      if (header.classList.contains('nav-open') && !header.contains(e.target)) { setNav(false); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 960) { setNav(false); }
    });
  }

  /* ---------- Product mock: review before copy ---------- */
  var reviewed = doc.getElementById('mock-reviewed');
  var copyBtn = doc.getElementById('mock-copy');
  var draft = doc.getElementById('mock-draft');
  var hint = doc.getElementById('mock-hint');
  var done = doc.getElementById('mock-done');

  function showDone(isDone) {
    if (hint) { hint.hidden = isDone; }
    if (done) { done.hidden = !isDone; }
  }

  function fallbackCopy(text) {
    var ta = doc.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    doc.body.appendChild(ta);
    ta.select();
    try { doc.execCommand('copy'); } catch (e) { /* ignore */ }
    doc.body.removeChild(ta);
  }

  if (reviewed && copyBtn && draft) {
    reviewed.checked = false;
    reviewed.addEventListener('change', function () {
      copyBtn.disabled = !reviewed.checked;
      showDone(false);
    });
    copyBtn.addEventListener('click', function () {
      if (!reviewed.checked) { return; }
      var text = Array.prototype.map.call(draft.querySelectorAll('p'), function (p) {
        return p.textContent.replace(/\s+/g, ' ').trim();
      }).join('\n\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { showDone(true); }, function () {
          fallbackCopy(text);
          showDone(true);
        });
      } else {
        fallbackCopy(text);
        showDone(true);
      }
    });
  }
})();
