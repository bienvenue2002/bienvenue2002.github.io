/* Portfolio Abra-Bienvenue Tchakah — interactions
   Machine à écrire, fond animé (poussière d'or), carrousel, modals,
   navigation mobile, copie email, révélation au scroll. */

(function () {
  "use strict";

  /* ---------- Machine à écrire (hero) ---------- */
  var twEl = document.getElementById("hero-typewriter");
  var twText = "Abra TCHAKAH";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function typeWriter() {
    if (!twEl) return;
    if (reduced) {
      twEl.textContent = twText;
      return;
    }
    var i = 0;
    (function tick() {
      if (i <= twText.length) {
        twEl.textContent = twText.slice(0, i);
        i++;
        setTimeout(tick, 75);
      }
    })();
  }
  typeWriter();

  /* ---------- Année du footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Fond animé : poussière d'or ---------- */
  var canvas = document.getElementById("bg-canvas");
  if (canvas && !reduced) {
    var ctx = canvas.getContext("2d");
    var particles = [];
    var PARTICLE_COUNT = 70;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (var i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        speed: Math.random() * 0.25 + 0.06,
        alpha: Math.random() * 0.5 + 0.1,
        drift: (Math.random() - 0.5) * 0.15,
      });
    }

    (function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var j = 0; j < particles.length; j++) {
        var p = particles[j];
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -4) {
          p.y = canvas.height + 4;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -4) p.x = canvas.width + 4;
        if (p.x > canvas.width + 4) p.x = -4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(201, 168, 76, " + p.alpha.toFixed(3) + ")";
        ctx.fill();
      }
      requestAnimationFrame(animate);
    })();
  }

  /* ---------- Révélation au scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Navigation mobile ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var open = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute(
        "aria-label",
        open ? "Fermer le menu" : "Ouvrir le menu"
      );
    });

    // Ferme le menu quand on clique sur un lien
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Carrousel de projets ---------- */
  var track = document.getElementById("projects-track");
  var prevBtn = document.getElementById("track-prev");
  var nextBtn = document.getElementById("track-next");
  var dotsWrap = document.getElementById("track-dots");

  if (track && dotsWrap) {
    var cards = track.querySelectorAll(".proj-card");

    // Crée un point de navigation par carte
    cards.forEach(function (_, idx) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot" + (idx === 0 ? " active" : "");
      dot.setAttribute("aria-label", "Projet " + (idx + 1));
      dot.addEventListener("click", function () {
        cards[idx].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      });
      dotsWrap.appendChild(dot);
    });

    var dots = dotsWrap.querySelectorAll(".carousel-dot");

    function step() {
      return cards.length ? cards[0].getBoundingClientRect().width + 20 : 320;
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        track.scrollBy({ left: -step(), behavior: "smooth" });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        track.scrollBy({ left: step(), behavior: "smooth" });
      });
    }

    // Synchronise le point actif pendant le défilement
    var scrollTimer = null;
    track.addEventListener("scroll", function () {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(function () {
        var trackRect = track.getBoundingClientRect();
        var best = 0;
        var bestDist = Infinity;
        cards.forEach(function (card, idx) {
          var r = card.getBoundingClientRect();
          var dist = Math.abs(r.left - trackRect.left);
          if (dist < bestDist) {
            bestDist = dist;
            best = idx;
          }
        });
        dots.forEach(function (d, i) {
          d.classList.toggle("active", i === best);
        });
      }, 80);
    });
  }

  /* ---------- Modals de détails ---------- */
  document.querySelectorAll("[data-modal]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var modal = document.getElementById("modal-" + trigger.getAttribute("data-modal"));
      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      }
    });
  });

  document.querySelectorAll(".modal").forEach(function (modal) {
    modal.querySelectorAll("[data-close]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        modal.close();
      });
    });
    // Fermer en cliquant sur le fond
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.close();
    });
  });

  /* ---------- Copier l'email ---------- */
  var copyBtn = document.getElementById("copy-email");
  var copyStatus = document.getElementById("copy-status");

  if (copyBtn && copyStatus) {
    copyBtn.addEventListener("click", function () {
      var email = copyBtn.getAttribute("data-email") || "";
      function done(ok) {
        copyStatus.textContent = ok
          ? "Adresse copiée dans le presse-papiers."
          : "Copie impossible — sélectionnez l'adresse manuellement.";
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(
          function () {
            done(true);
          },
          function () {
            done(false);
          }
        );
      } else {
        done(false);
      }
    });
  }
})();
