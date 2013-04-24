var Omni = require("omni");

var ChatMessages = Omni.Collection.extend({
    createPermission: function(connection) {
        return true; // Allow all users to create new chat message models (actual messages)
    }
});

Omni.listen(1337, {messages: new ChatMessages()});