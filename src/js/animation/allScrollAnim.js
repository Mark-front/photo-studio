const controller = new ScrollMagic.Controller();

const sceneStud = new ScrollMagic.Scene({ triggerElement: ".about-studio", duration: 100 })
  .on("enter", () => {
    tlAbStud.play();
  })
  .addTo(controller);

const sceneProject = new ScrollMagic.Scene({ triggerElement: ".our-projects", duration: 100 })
.on("enter", () => {
  tlProjPhotos.play();
})
.addTo(controller);

const sceneAddress = new ScrollMagic.Scene({ triggerElement: "#map", duration: 100 })
  .on("enter", () => {
    tlAddress.play();
    tlSendUs.play();
  })
  .addTo(controller);
  
const sceneFooter = new ScrollMagic.Scene({ triggerElement: "#footerTrigger", duration: 100 })
  .on("enter", () => {
    tlFooter.play();
  })
  .addTo(controller);
