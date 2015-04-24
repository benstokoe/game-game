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
    images.splice(imageNumber, 1);

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
    }, 7000);

});

var showRandomPicture = function() {
    $('#current-answer').html('');

    imageNumber = randomNumber(images.length);
    randomImage = images[imageNumber];

    $(randomImage).show();
    currentPerson = randomImage.dataset.person;
};

// $('#reveal').on('click', function(e) {
//     e.preventDefault();
    
//     // $(randomImage).hide();
    
//     showAnswerButtons();
// });

var hideAnswerButtons = function() {
    $('#answer-buttons').hide();
};
var showAnswerButtons = function() {
    $('#answer-buttons').show();
};

var showEndScreen = function() {
    $('#current-answer').html('');
    $('#final-text').html('Final ');
    $('#restart-game').css('display', 'block');
};

var randomNumber = function(max) {
    return (Math.ceil(Math.random() * max)) -1
};

var reveal = function(){
    $(randomImage).addClass('zoom-out');
};
