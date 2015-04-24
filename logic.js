var currentPerson = "";

$('#start-game').on('click', function(e) {
    e.preventDefault();

    showRandomPicture();
});

$('#answer-buttons').on('click', function(e) {
    e.preventDefault();

    hideAnswerButtons();

    if (e.target.id === currentPerson) {
        $('#current-answer').html('CORRECT!');

        var currentPersonScore = $('#game-score');
        $(currentPersonScore).html(parseInt($(currentPersonScore).html(), 10) + 1)
    } else {
        $('#current-answer').html('WRONG!');
    }

    setTimeout(function() {
        showRandomPicture();
    }, 500);
});

var showRandomPicture = function() {
    hideAnswerButtons();
    $('#current-answer').html('');

    var images = $('img');
    var randomImage = images[randomNumber(images.length)];

    $(randomImage).show();
    currentPerson = randomImage.dataset.person;

    setTimeout(function() {
        $(randomImage).addClass('zoom-out');
        showAnswerButtons();
    }, 1000);
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
