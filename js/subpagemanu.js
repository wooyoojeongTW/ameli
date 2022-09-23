$(function () {
  setGnb();
  function setGnb() {
    $(".innerHeader .gnb > li > a ").on("mouseenter focus", function () {
      $(".innerHeader ").addClass("on");
      $(".innerHeader .gnb > li > .inner").addClass("on");
      $("header").css({ border: "none" });
    });
    $("header").on("mouseleave", function () {
      $(".innerHeader ").removeClass("on");
      $(".innerHeader .gnb > li > .inner").removeClass("on");
      $("header").css({ border: "1px solid rgba(255,255,255,0.1)" });
    });
  }
});
