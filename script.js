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
  const submitBtn = document.querySelector(".submit");
  const confirmationMsg = document.querySelector(".send-response-message");
  const url = "https://script.google.com/macros/s/AKfycbzgJM1NuO9wL6lCJ211ElIwm5LcByXfOM-dzhkfxm4DwpCssM9aHwOJ2-8M0AzDiN8j/exec";

  const imagens = [
  'images/ale 15.jpg',
  'images/ale 30.jpg',
  'images/ped.jpg',
  'images/mom.jpg',
  'images/ale 13.jpg',
  'images/ale 2.jpg',
  'images/pegasus.jpeg',
  'images/meio medico 06.jpg',
  'images/ale 9.jpg',
  'images/antigo 7.jpg',
  'images/morgana 2.jpg',
  'images/ped 2.jpg',
  'images/ale 4.jpg',
  'images/ale 12.jpg',
  'images/ale 40.heic',
  'images/ale 16.jpg',
  'images/antigo 6.jpg',
  'images/internato.jpg',
  'images/365.jpg',
  'images/meio medico 07.jpg',
  'images/ale 24.jpg',
  'images/jaleco.jpeg',
  'images/ale 6.jpg',
  'images/ale 29.jpg',
  'images/ale 14.jpg',
  'images/pegasus 2.jpg',
  'images/ped 3.jpg',
  'images/ale 36.heic',
  'images/kiss.jpg',
  'images/viva.jpeg',
  'images/ale 1.jpg',
  'images/ale 34.heic',
  'images/antigo.jpg',
  'images/ale 21.jpg',
  'images/antigo 3.jpg',
  'images/ale 5.jpeg',
  'images/mary.png',
  'images/morgana.jpg',
  'images/ale 20.jpg',
  'images/ale 23.jpg',
  'images/ale 22.jpg',
  'images/ale 33.jpg',
  'images/mao.jpg',
  'images/ale 39.heic',
  'images/ale 32.jpg',
  'images/ale 35.jpg',
  'images/rc.jpg',
  'images/esf.jpg',
  'images/ale 10.jpg',
  'images/ale 27.jpg',
  'images/ale 17.jpg',
  'images/ale 18.jpg',
  'images/meio medico 01.jpg',
  'images/ale 38.heic',
  'images/ale 31.jpg',
  'images/meio medico 04.jpg',
  'images/meio medico 05.jpg',
  'images/ale 19.jpg',
  'images/meio medico 03.jpg',
  'images/ale 7.jpg',
  'images/ale 26.jpg',
  'images/grupo.jpg',
  'images/ale 8.jpg',
  'images/risos.jpg',
  'images/ale 37.jpg',
  'images/dad.jpg',
  'images/foto familia grande.jpg',
  'images/antigo 2.jpg',
  'images/ped 4.jpg',
  'images/vovos.jpg',
  'images/turma.jpg',
  'images/stwm.jpg',
  'images/trio 2.png',
  'images/vo gui vovo.jpg',
  'images/trio.png',
  'images/vo nana e vo jovi.jpg'
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

    const targetDate = new Date(2025, 10, 29, 23, 0, 0);

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("dias-num").textContent = 0;
      document.getElementById("horas-num").textContent = 0;
      document.getElementById("minutos-num").textContent = 0;
      document.getElementById("segundos-num").textContent = 0;
      return;
    }

    const segundos = Math.floor((diff / 1000) % 60);
    const minutos = Math.floor((diff / 1000 / 60) % 60);
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("dias-num").textContent = dias;
    document.getElementById("horas-num").textContent = horas;
    document.getElementById("minutos-num").textContent = minutos;
    document.getElementById("segundos-num").textContent = segundos;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

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
        homeContainer.style.backgroundImage = "url('images/formei.PNG')";

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
    toggleFields();

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

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede que a página recarregue

    const formData = new FormData(form);
    const jsonData = {};

    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    fetch("https://script.google.com/macros/s/AKfycbzgJM1NuO9wL6lCJ211ElIwm5LcByXfOM-dzhkfxm4DwpCssM9aHwOJ2-8M0AzDiN8j/exec", {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        form.style.display = "none";
        confirmationMsg.style.display = "block";
      } else {
        alert("Erro ao enviar o formulário. Tente novamente.");
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao enviar o formulário. Tente novamente.");
    });
  });

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