
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // grab user address input from form
    var $street = $('#street').val();
    var $city = $('#city').val();

    // place streetview img for address in body bg
    $body.append ('<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + $street + ', ' + $city + '">');


    // add NY Times articles for address
    // responds when URL passed through browser text input box
    // not returning data to page (cross-origin issue?)
    $.getJSON ('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + $city + '&api-key=26a71a492f36130562663c2e9ea8e550:17:72915272', function (data) {

        $nytHeaderElem.text('NY Times articles about ' + $city);

        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            $nytElem.append ('<li class = "article"><a href="'+articles[i].web_url+'">'+articles[i].headline.main+'</a> <p>'+articles[i].snippet+'</p> </li>');
        };
        
        /*
        var items[];

        $.each (data, function (key, value) {
            items.push ('<li id ="' + key + '">' + value + '</li>');
        });
        $('<ul/>', {
            'class': 'my-new-list',
            html: items.join ('')
        }).appendTo ($body);*/

    })
        .fail (function (error) {
            $nytHeaderElem.text ('NY Times articles about this city failed to load.');
            $nytElem.text ('Error: '+error);
        })
    ;


    // Wikipedia API articles for location
    // include dataType and success parameters
    // iterate through response
    /* var wikipediaURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + $city + '&format=json&callback=wikiCallback';

    $.ajax (wikipediaURL, {
        // url: wikipediaURL,
        dataType: 'jsonp',
        // jsonp: callback     // redundant, but change if different callback string in URL
        success: function (data) {
            // present articles inside the ul "wikipedia-links"
            $wikiHeaderElem.text ('Wikipedia articles about ' + $city);

            var articles = data[1];
            for (var i = 0; i < articles.length; i++) {
                $wikiElem.append('<li><a href ="http://en.wikipedia.org/wiki/' + articles[i] + '>' + articles[i] + '</a></li>');
            };
        }
    }); */

    var wikiURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + $city + '&format=json&callback=wikiCallback';

    $.ajax({
        url: wikiURL, 
        dataType: 'jsonp',
        success: function (json) {
            $wikiElem.append (json);
            $wikiElem.text ('Wikipedia article(s) about ' + $city);
            var articles = json[1];
            for (var i = 0; i < articles.length; i++) {
                var url = 'http://en.wikipedia.org/wiki/' + articles[i];
                $wikiElem.append('<li><a href="'+url+'">' + articles[i] + '</a></li>');
            };
        },
        // can jsonp throw errors? isn't it just returning a function?
        error: function (e) {
            $wikiElem.text ('Failed to load articles.'); 
        }
    });

    return false;
};

$('#form-container').submit(loadData);

// loadData();
