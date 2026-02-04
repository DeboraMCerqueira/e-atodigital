particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00b4ff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#00b4ff",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    }
  },
  retina_detect: true
});


 let tituloOriginal = "E-ATO | Portifólio Digital";
  let intervalo = null;

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      intervalo = setInterval(function () {
        document.title =
          document.title === "🚨 VOLTA AQUI"
            ? "😢 NÃO VÁ"
            : "🚨 VOLTA AQUI";
      }, 800);
    } else {
      clearInterval(intervalo);
      document.title = tituloOriginal;
    }
  })


