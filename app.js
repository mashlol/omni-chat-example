var Omni = require("omni");

var ChatMessage = Omni.Model.extend({
    defaults: {
        message: "Something went wrong!"
    }
});

var ChatMessages = Omni.Collection.extend({
    model: ChatMessage,
    createPermission: function(connection) {
        return true;
    }
});

messages = new ChatMessages();

collections = {
    messages: messages
}

Omni.listen(1337, collections);