$(document).ready(function() {

    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var spin = function() {

        var selected = [];
        for (var j = 0; j < 3; j++) {
            selected.push(getRandom(1, 3));
        }

        var reel = new Reel();
        for (var i = 0; i < selected.length; i++) {
            reel.set("item" + [i + 1], slot.toArray()[i].get("item" + selected[i]));
        }
        slot.add(reel);
        var verifyResult = _.uniq(selected);
        if (verifyResult.length === 1) {
            if (verifyResult[0] == 1) {
                $('.result').html("Yayy, You Win a Coffee !!!");
            } else if (verifyResult[0] === 2) {
                $('.result').html("Yayy, You Win a Tea !!!");
            } else {
                $('.result').html("Yayy, You Win a Espresso !!!");
            }
        } else {
            $('.result').html("Sorry Try Again!");
        }

    };

    $('.lever').on('click', function() {
        $('.result').html("Play! Win! Drink!");
        $('.reel').addClass('spin');
        $('.lever').attr("disabled", "disabled");
        $('.lever').html("Fingers Crossed !");
        setTimeout(function() {
            spin();
            $('.lever').removeAttr("disabled");
            $('.lever').html('Play');
        }, 5000);

    });
});