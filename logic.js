var images = $('img');
var currentPerson = "";

$('#start-game').on('click', function(e) {
    e.preventDefault();

    $(this).hide();

    $('#scoreboard').show();
    showRandomPicture();
});

$('#restart-game').on('click', function(e) {
    e.preventDefault();

    location.reload();
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
        if (images.length !== 0) {
            showRandomPicture();
        } else {
            showEndScreen();
        }
    }, 500);

});

var showRandomPicture = function() {
    hideAnswerButtons();
    $('#current-answer').html('');

    var imageNumber = randomNumber(images.length);
    var randomImage = images[imageNumber];

    $(randomImage).show();
    currentPerson = randomImage.dataset.person;

    setTimeout(function() {
        $(randomImage).hide();
        images.splice(imageNumber, 1);
        showAnswerButtons();
    }, 300);
};

var hideAnswerButtons = function() {
    $('#answer-buttons').hide();
};
var showAnswerButtons = function() {
    $('#answer-buttons').show();
};

var showEndScreen = function() {
    $('#current-answer').html('');
    $('#final-text').html('Final ');
    $('#restart-game').show();
};

var randomNumber = function(max) {
    return (Math.ceil(Math.random() * max)) -1
};
