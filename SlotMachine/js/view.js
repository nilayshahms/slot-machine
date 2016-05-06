// Backbone View for one Reel
var ReelView = Backbone.View.extend({
    model: new Reel(),
    tagName: 'div',
    initialize: function() {
        this.template = _.template($('.reelTemplate').html());
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

// Backbone View for Slot

var SlotView = Backbone.View.extend({
    model: slot,
    el: $('.row'),

    initialize: function() {
        this.model.on('add', this.render, this);
    },

    render: function() {
        this.$el.html('');
        var lastSlot = this.model.toArray().length - 1;
        this.$el.append((new ReelView({
            model: this.model.toArray()[lastSlot]
        })).render().$el);

        return this;
    }
});

var slotView = new SlotView();