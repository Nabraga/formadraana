document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById('close-welcome');
  const welcomeSection = document.getElementById('Welcome');
  const presentSection = document.getElementById('Present');
  const nav = document.getElementById('main-nav');
  const tabSections = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".nav-item");
  const backButtons = document.querySelectorAll(".back-btn");
  const homeContainer = document.querySelector('.home-container');
  const yesBtn = document.querySelector('.attendance1');
  const maybeBtn = document.querySelector('.attendance2');
  const noBtn = document.querySelector('.attendance3');
  const attendance = document.querySelector('.attendance123');
  const cardLogin = document.querySelector('.card-login');
  const campoW = document.getElementById('campoW');
  const noResponseMessage = document.querySelector('.no-response-message');
  const femininoRadio = document.getElementById('feminino');
  const masculinoRadio = document.getElementById('masculino');
  const textInfos = document.querySelector('.infos-text5');
  const sizeField = document.querySelector('.textfieldS');
  const makeupField = document.querySelector('.textfieldM');
  const hairField = document.querySelector('.textfieldH');
  const form = document.getElementById('meuForm');
  const confirmationMsg = document.querySelector('.send-response-message');
  const submitBtn = document.querySelector('.submit');
  const novaRespostaBtn = document.getElementById("novaRespostaBtn");

  const imagens = [
  'images/mao.jpg',
  'images/viva.jpeg',
  'images/kiss.jpg',
  'images/grupo.jpg',
  'images/castelo.jpg',
  'images/mary.png',
  'images/mom.jpg',
  'images/dad.jpg',
  'images/rc.jpg',
  'images/vovos.jpg'
];

  if (welcomeSection.classList.contains('active')) {
    nav.style.display = 'none';
    backButtons.forEach(btn => btn.style.display = 'none');
  } else {
    nav.style.display = 'flex';
    backButtons.forEach(btn => btn.style.display = 'inline-block');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      welcomeSection.classList.remove('active');
      welcomeSection.style.display = 'none';

      const welcomeContainer = document.querySelector('.welcome-container');
      welcomeContainer.style.display = 'none';

      presentSection.classList.add('active');
      presentSection.style.display = 'block';

      nav.style.display = 'flex';
      backButtons.forEach(btn => btn.style.display = 'inline-block');
    });
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");

      tabSections.forEach(section => {
        section.classList.remove("active");
      });

      buttons.forEach(btn => btn.classList.remove("active"));

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
      }

      button.classList.add("active");

      presentSection.classList.remove('active');
      setTimeout(() => {
        if (targetId === "Photos") {
          homeContainer.style.backgroundImage = "url('images/galeria.png')";
        } else if (targetId === "Infos") {
          homeContainer.style.backgroundImage = "url('images/info.png')";
        } else if (targetId === "RSVP") {
          homeContainer.style.backgroundImage = "url('images/fundo.png')";
        }

        tabSections.forEach(section => {
          section.style.display = "none";
        });

        if (targetSection) {
          targetSection.style.display = "block";
        }

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        presentSection.classList.remove('active');
        presentSection.style.display = 'none';

        homeContainer.classList.remove('fade-out');
        homeContainer.classList.add('fade-in');

        tabSections.forEach(section => {
          if (section.classList.contains("active")) {
            section.style.display = "block";
          } else {
            section.style.display = "none";
          }
        });
      }, 500);
    });
  });

  backButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      homeContainer.classList.add('fade-out');

      setTimeout(() => {
        homeContainer.style.backgroundImage = "url('images/FORMEI.PNG')";

        tabSections.forEach(section => {
          section.style.display = "none";
        });

        buttons.forEach(button => button.classList.remove("active"));

        presentSection.classList.add('active');
        presentSection.style.display = 'block';

        nav.style.display = 'flex';

        homeContainer.classList.remove('fade-out');
        homeContainer.classList.add('fade-in');
      }, 500);
    });
  });

  campoW.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d)(\d{4})(\d{0,4}).*/, '($1) $2 $3-$4');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d+)/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d*)/, '($1');
    }

    e.target.value = value;
  });

  function checkFormCompletion() {
    const isFeminino = femininoRadio.checked;

    const isComplete =
      document.getElementById('name').value.trim() &&
      document.getElementById('campoW').value.trim() &&
      document.getElementById('campoI').value.trim() &&
      document.querySelector('input[name="sex"]:checked') &&
      document.getElementById('age').value &&
      document.getElementById('alergy').value.trim() &&
      (!isFeminino || (
        document.getElementById('size').value &&
        document.getElementById('makeup').value.trim() &&
        document.getElementById('hair').value.trim()
      ));

    submitBtn.style.display = isComplete ? 'inline-block' : 'none';
  }

  function showCardLogin() {
    attendance.style.display = 'none';
    cardLogin.style.display = 'block';

    checkFormCompletion();

    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', checkFormCompletion);
      field.addEventListener('change', checkFormCompletion);
    });
  }

  function showNoResponseMessage() {
    attendance.style.display = 'none';
    noResponseMessage.style.display = 'block';
  }

  yesBtn.addEventListener('click', showCardLogin);
  maybeBtn.addEventListener('click', showCardLogin);
  noBtn.addEventListener('click', showNoResponseMessage);

  window.onload = function () {
    attendance.style.display = 'block';
    cardLogin.style.display = 'none';
    noResponseMessage.style.display = 'none';
  }

  function toggleFields() {
    if (femininoRadio.checked) {
      sizeField.style.display = 'block';
      makeupField.style.display = 'block';
      hairField.style.display = 'block';
      textInfos.style.display = 'block';
    } else {
      sizeField.style.display = 'none';
      makeupField.style.display = 'none';
      hairField.style.display = 'none';
      textInfos.style.display = 'none';
    }

    checkFormCompletion();
  }

  masculinoRadio.addEventListener('change', toggleFields);
  femininoRadio.addEventListener('change', toggleFields);

  function salvarNoCalendario() {
    const isGoogle = /Google|Gmail|Chrome|Android/i.test(navigator.userAgent);
    if (isGoogle) {
      abrirGoogleCalendar();
    } else {
      downloadICS();
    }
  }

  function abrirGoogleCalendar() {
    const title = encodeURIComponent("Forma Dra. Ana");
    const location = encodeURIComponent("Expominas - BH, Av. Amazonas - 6200. Gameleira. Belo Horizonte - MG. CEP: 30510-000");
    const details = encodeURIComponent("Formatura de Medicina - MED III Atenas\nLocal: Expominas - BH\nCoordenadas: -19.93060874938965 / -43.99040603637695");
  
    const startDate = "20251129T230000Z";
    const endDate = "20251130T050000Z";

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  }

  function downloadICS() {
    const icsContent = `
      BEGIN:VCALENDAR
      VERSION:2.0
      PRODID:-//seusite.com//Calendário de Evento//PT
      BEGIN:VEVENT
      UID:${Date.now()}@seusite.com
      DTSTAMP:20251129T230000Z
      DTSTART:20251129T230000Z
      DTEND:20251130T050000Z
      SUMMARY:Forma Dra. Ana
      DESCRIPTION:Formatura de Medicina - MED III Atenas\nLocal: Expominas - BH\nCoordenadas: -19.93060874938965 / -43.99040603637695
      LOCATION:Expominas - BH, Av. Amazonas - 6200. Gameleira. Belo Horizonte - MG. CEP: 30510-000
      END:VEVENT
      END:VCALENDAR`.trim();

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "forma-dra-ana.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const dados = {
        name: document.getElementById('name').value,
        phone: document.getElementById('campoW').value,
        inicials: document.getElementById('campoI').value,
        sex: document.querySelector('input[name="sex"]:checked')?.value || '',
        age: document.getElementById('age').value,
        alergy: document.getElementById('alergy').value,
        size: document.getElementById('size')?.value || '',
        makeup: document.getElementById('makeup')?.value || '',
        hair: document.getElementById('hair')?.value || ''
      };

      fetch('https://script.google.com/macros/s/AKfycbzQcy-m0bAA15WtfPvdhRjzNSWbtFXcBWkjRBDEDh-Zz4sj0ZtSG5V-W4uvTZNf2Z4/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      })
        .then(res => res.json())
        .then(res => {
          if (res.result === 'success') {
            form.reset();
            cardLogin.style.display = 'none';
            confirmationMsg.style.display = 'block';
            submitBtn.style.display = 'none';
          } else {
            alert('Erro no envio. Tente novamente.');
          }
        })
        .catch(() => {
          alert('Erro na conexão com o servidor.');
        });
    });
  }

  if (novaRespostaBtn) {
    novaRespostaBtn.addEventListener("click", function () {
      form.reset();
      confirmationMsg.style.display = "none";
      cardLogin.style.display = "block";
      submitBtn.style.display = "block";
    });
  }

  window.addEventListener("load", () => {
    const track = document.querySelector(".gallery-track");
    if (track) {
      const images = Array.from(track.querySelectorAll(".gallery"));

      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 3));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      const shuffled = shuffle([...images]);

      shuffled.forEach(img => {
        const clone = img.cloneNode(true);
        track.appendChild(clone);
      });
    }
  });
});