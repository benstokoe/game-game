var currentPerson = "";

$('#start-game').on('click', function(e) {
    e.preventDefault();

    showRandomPicture();
});

$('#answer-buttons').on('click', function(e) {
    e.preventDefault();

    if (e.target.id === currentPerson) {
        console.log('CORRECT! ' + currentPerson);
    }

    showRandomPicture();
});

var showRandomPicture = function() {
    hideAnswerButtons();

    var images = $('img');
    var randomImage = images[randomNumber(images.length)];

    $(randomImage).show();
    currentPerson = randomImage.dataset.person;

    setTimeout(function() {
        $(randomImage).hide();
        showAnswerButtons();
    }, 300);
};

var hideAnswerButtons = function() {
    $('#answer-buttons').hide();
};
var showAnswerButtons = function() {
    $('#answer-buttons').show();
};

var randomNumber = function(max) {
    return (Math.ceil(Math.random() * max)) -1
};
