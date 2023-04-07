let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #A05BE5;">Desarrollo sitios web, proyectos de Arduino y simulación de róbotica</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
