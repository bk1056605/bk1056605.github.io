i18next
.use(i18nextBrowserLanguageDetector)
.init({
  fallbackLng: 'pt-Br',
  debug: false,
  resources: {
    en: {
      translation: {
        "hi": "Hi!",
        "needHelp": "Do you need some help organising your hackathon?",
        "insertEmail": "Please insert your email, we'll contact you",
        "send": "Send",
        "whyCompanies": "Why do companies",
        "makeHackathons": "make hackathons?",
        "talentAcquisition": "Talent Acquisition",
        "mindset": "Mindset",
        "wantToBe": "Want to be a",
        "ambassador": "Shawee ambassador",
        "bringHackathons": "and bring hackathons to your city?",
        "name": "Name",
        "phone": "Phone",
        "about": "About",
        "shawee": "Shawee",
        "aboutText1": "Shawee is a platform to manage hackathons. We organise since from subscription, participant selection, invite mentors, project submission, jury evaluation and results divulgation.",
        "aboutText2": "But there's much more than just organise the entire hackathon proccess. The participant also get an exclusive area where it can get feedback from juries and mentors. Participants also get some infos like the quantity of hackathons that already participated and your position in each of them.",
        "aboutText3": "Besides that, Shawee makes possible that every project born inside of the hackathon can be always accessible. We believe that hackathon is much more than a competition, hackathon is a innovation and transformation proccess.",
        "sentSuccess": "Success!",
        "sentError": "Error. Please try again."
      }
    },
    pt: {
      translation: {
        "hi": "Olá!",
        "needHelp": "Precisa de ajuda para organizar seu hackathon?",
        "insertEmail": "Insira seu email, que nós entramos em contato",
        "send": "Enviar",
        "whyCompanies": "Por que as empresas",
        "makeHackathons": "fazem hackathons?",
        "talentAcquisition": "Talentos",
        "mindset": "Mudança de Mindset",
        "wantToBe": "Quer ser um",
        "ambassador": "embaixador Shawee",
        "bringHackathons": "e levar hackathons para sua cidade?",
        "name": "Nome",
        "phone": "Telefone",
        "about": "Sobre",
        "shawee": "a Shawee",
        "aboutText1": "A Shawee é uma plataforma de gerenciamento para hackathons, cuidamos desde o processo de inscrição, seleção, escala de mentoria, agendamento, submissão de projetos para avaliação, apuração do juri e posteriormente divulgação do resultado final.",
        "aboutText2": "Além de digitalizar todos processos que ocorrem dentro de hackathon o participante tem uma área exclusiva onde pode receber o feedback de mentores e jurados, ele ainda tem todas informações disponíveis como a quantidade de eventos que participou, qual foi a sua colocação em cada um deles entre outras funcionalidades.",
        "aboutText3": "A Shawee além de organizar todo processo possibilita que todos projetos nascidos ou adaptados dentro do evento fiquem sempre disponíveis. Para nós, hackathon é uma plataforma de transformação e fomento à inovação.",
        "sentSuccess": "Cadastro feito com sucesso!",
        "sentError": "Erro ao cadastrar, tente novamente."
      }
    }
  }
}, function(err, t) {
  // initialized and ready to go!
  document.querySelector('#banner h1').innerHTML = i18next.t('hi');
  document.querySelector("#banner h4").innerHTML = i18next.t('needHelp');
  document.querySelector("#newsletter-email").setAttribute('placeholder', i18next.t('insertEmail'));
  document.querySelector("#mc-embedded-subscribe").innerHTML = i18next.t('send');
  document.querySelector("#about h1").innerText = i18next.t('about');
  const shawee = document.createElement('strong');
  shawee.innerHTML = i18next.t('shawee');
  document.querySelector("#about h1").appendChild(shawee);
  document.querySelector("#firstAbout").innerHTML = i18next.t('aboutText1');
  document.querySelector("#secondAbout").innerHTML = i18next.t('aboutText2');
  document.querySelector("#thirdAbout").innerHTML = i18next.t('aboutText3');
  document.querySelector("#why h1").innerText = i18next.t('whyCompanies');
  const makeHackathons = document.createElement('strong');
  makeHackathons.innerHTML = i18next.t('makeHackathons');
  document.querySelector("#why h1").appendChild(makeHackathons);
  document.querySelector("#talentAcquisition").innerHTML = i18next.t('talentAcquisition');
  document.querySelector("#mindset").innerHTML = i18next.t('mindset');
  document.querySelector("#become h1").innerHTML = i18next.t('wantToBe');
  const ambassador = document.createElement('strong');
  ambassador.innerHTML = i18next.t('ambassador');
  const bringHackathons = document.createElement('span');
  bringHackathons.innerHTML = i18next.t('bringHackathons');
  document.querySelector("#become h1").appendChild(ambassador);
  document.querySelector("#become h1").appendChild(bringHackathons);
  document.querySelector("#formName").innerHTML = i18next.t('name');
  document.querySelector("#formPhone").innerHTML = i18next.t('phone');
  document.querySelector("#mc-embedded-subscribe.subscribe2").innerHTML = i18next.t("send");
  document.querySelector("#newsletter-success").innerHTML = i18next.t('sentSuccess');
  document.querySelector('#newsletter-error').innerHTML = i18next.t('sentError');
  document.querySelector("#ambassador-success").innerHTML = i18next.t('sentSuccess');
  document.querySelector('#ambassador-error').innerHTML = i18next.t('sentError');
});