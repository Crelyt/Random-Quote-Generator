$(document).ready(function () {

    function getNewQuote() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function (response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('#quote').text(quote);
                if (author) {
                    $('#author').text('- ' + author);
                } else {
                    $('#author').text('- unknown');
                }
            }
        });
    }

    getNewQuote();

    $('#new_quote').on('click', function () {
        getNewQuote();
    });

    $('#tweet_quote').on("click", function () {
        var textToTweet = $("#quote").text();
        if (textToTweet.length > 140) {
            alert("Over Twitter character capacity!")
        }
        var twtLink = 'https://twitter.com/home?status=' + textToTweet;
        window.open(twtLink,'_blank');
    });
});
