let list = [];
let indice;
let values;
let innerHeight = window.innerHeight;
$('body').css('height', innerHeight);

$('textarea').on('keyup', e => {
    // grab the value of the textarea each time we type on a touch
    values = $('textarea').val();

    // make the list in an array each time we type the coma
    if (e.keyCode === 188) {
        list = values.split(',');
        list.pop();
        indice = list.length - 1;
    }
});


$('#draw').on('click', () => {
    // check if the possibility list finishes with a coma, if no, we add it and then the last possibility is added to the list
    if (values.charAt(values.length - 1) !== ",") {
        values = values + ',';
        list = values.split(',');
        list.pop();
        indice = list.length - 1;
    }

    // if the list ends with a space, we delete it for not drawing it
    if (list[list.length - 1] === ' ') {
        list.pop();
    }

    // hide the previous result to make an effect and showing that the value changes
    $('#result').hide();

    // choose a random value in the list
    let randomValue = randomNumFromInterval(0, indice);
    let finalValue = list[randomValue];

    // update the text with the drawn result
    $('#result').fadeIn(500).text(finalValue);

    // function making the draw
    function randomNumFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});


$('#remove').on('click', () => {
    list = [];
    $('#result').text('');
    $('textarea').val('');
    // $('#possibilities').html('<p id="possibilities">Draw results : <br /><br /></p>');
});
