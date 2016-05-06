// Backbone Collection
var Slot = Backbone.Collection.extend({
    model: Reel
});

var reel1 = new Reel({
    item1: 'coffeeMaker',
    item2: 'teapot',
    item3: 'espressoMachine'
});

var reel2 = new Reel({
    item1: 'coffeeFilter',
    item2: 'teaStrainer',
    item3: 'espressoTamper'
});

var reel3 = new Reel({
    item1: 'coffeeGround',
    item2: 'looseTea',
    item3: 'groundEspressoBeans'
});

var slot = new Slot([reel1, reel2, reel3]);