Omni.ready(function() {
    var ChatView = Backbone.View.extend({
        events: {
            "submit #send": "sendMessage"
        },
        initialize: function() {
            this.collection.each(this.addMessage, this); // Add any messages that already exist in this collection
            this.listenTo(this.collection, "add", this.addMessage); // Listen for new messages
        },
        addMessage: function(model) {
            this.$el.find(".chat").prepend($("<p>").html(model.get("message")));
        },
        sendMessage: function(event) {
            var $input = this.$el.find("input");
            if ($input.val()) {
                this.collection.add({message: $input.val()});
                $input.val('');
            }

            event.stopPropagation();
            event.preventDefault();
            return false;
        }
    });

    new ChatView({el: $("body"), collection: Omni.Collections.messages});
});