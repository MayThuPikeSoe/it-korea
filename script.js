// sticky bar
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 0) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});

new Glider(document.getElementById("member-glider").querySelector(".glider"), {
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: "#member-glider .glider-prev",
    next: "#member-glider .glider-next",
  },
});
new Glider(
  document.getElementById("business-glider").querySelector(".glider"),
  {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: "#business-glider .glider-prev",
      next: "#business-glider .glider-next",
    },
  }
);

// scoll reveal
const sr = ScrollReveal({
  origin: "left",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr.reveal(".reveal-left", { delay: 200 });
const sr1 = ScrollReveal({
  origin: "right",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr1.reveal(".reveal-right", { delay: 200 });

const sr2 = ScrollReveal({
  origin: "bottom",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr2.reveal(".reveal-bottom", { delay: 200 });
const sr3 = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr2.reveal(".reveal-top", { delay: 200 });
