var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString(' Mano Ranjith.')
    .pauseFor(1000)
    .deleteAll()
    .typeString(' a graduate student.')
    .pauseFor(1000)
    .deleteAll()
    .typeString(' a nerd.')
    .pauseFor(1000)
    .deleteAll()
    .typeString(' a foodie.')
    .pauseFor(1000)
    .deleteAll()
    .typeString(' a ambivert.')
    .pauseFor(1000)
    .deleteAll()
    .typeString(' a Geek.')
    .pauseFor(1000)
    .deleteAll()
    .typeString(' a developer.')
    .pauseFor(1000)
    .deleteAll()
    .typeString(' a quora addict.')
    .pauseFor(1000)
    .deleteAll()
    .typeString(' that guy.')
    .pauseFor(1000)
    .deleteAll()
    .typeString(' Mano and I love building things with code :) ')
    .pauseFor(2500000)
    .deleteAll()
    .start();
