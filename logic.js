var images = $('img');
var currentPerson = "";
var randomImage;
var imageNumber;

$('#start-game').on('click', function(e) {
    e.preventDefault();

    $(this).hide();

    $('#scoreboard').show();
    showRandomPicture();
    showAnswerButtons();
});

$('#restart-game').on('click', function(e) {
    e.preventDefault();

    location.reload();
});

$('#answer-buttons').on('click', function(e) {
    e.preventDefault();

    reveal();
    hideAnswerButtons();

    setTimeout(function(){
        if (e.target.id === currentPerson) {
            $('#current-answer').html('CORRECT!');

            var currentPersonScore = $('#game-score');
            $(currentPersonScore).html(parseInt($(currentPersonScore).html(), 10) + 1)
        } else {
            $('#current-answer').html('WRONG!');
        }
    }, 5000)

    setTimeout(function() {
        $('img').hide();
        if (images.length !== 0) {
            showRandomPicture();
            showAnswerButtons();
        } else {
            showEndScreen();
        }
    }, 6000);

});

var showRandomPicture = function() {
    $('#current-answer').html('');

    imageNumber = randomNumber(images.length);
    randomImage = images[imageNumber];
    images.splice(imageNumber, 1);

    $(randomImage).show();
    currentPerson = randomImage.dataset.person;
};

var hideAnswerButtons = function() {
    $('#answer-buttons').hide();
};
var showAnswerButtons = function() {
    $('#answer-buttons').show();
};

var reveal = function(){
    $(randomImage).addClass('zoom-out');
};

var showEndScreen = function() {
    $('#current-answer').html('');
    $('#final-text').html('Final ');
    $('#restart-game').css('display', 'block');
};

var randomNumber = function(max) {
    return (Math.ceil(Math.random() * max)) -1
};
