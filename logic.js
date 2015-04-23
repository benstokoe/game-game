$('#start-game').on('click', function(e) {
    e.preventDefault();

    showRandomPicture();
});

var showRandomPicture = function() {
    var images = $('img');

    var randomImage = images[randomNumber(images.length)];

    $(randomImage).show();
};

var randomNumber = function(max) {
    return (Math.ceil(Math.random() * max)) -1
};
