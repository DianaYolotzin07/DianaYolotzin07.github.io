let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #82612d;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #82612d;">Camino y aprendo de mano con la sociedad.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
