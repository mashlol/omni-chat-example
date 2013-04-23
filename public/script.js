Omni.ready(function() {
    Collections.messages.each(function(model) {
        $(".chat").prepend(model.get("message") + "<br/>");
    });

    Collections.messages.on("add", function(model, collection, options) {
        $(".chat").prepend(model.get("message") + "<br/>");
    });

    $('#send').submit(function(event) {
        var $input = $(this).find("input");
        if ($input.val()) {
            Collections.messages.add({message: $input.val()});
            $input.val('');
        }

        event.stopPropagation();
        event.preventDefault();
        return false;
    })
});