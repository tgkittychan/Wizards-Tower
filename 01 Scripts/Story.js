


//Fixes a problem with HTML Selects being reversed
$(document).on(':passageend', function () {
    $('select').each(function () {
        var $select = $(this);
        var $chosen = $select.find('option[selected]').first();

        if ($chosen.length === 0) {
            $chosen = $select.find('option:first-child');
        }

        $chosen.prop('selected', true);
    });
});


//Function allows player to exit menu without having to go back a million times
predisplay['menu-return'] = function (taskName) {
	if (!tags().includes('menu')) {
		State.variables.return = passage();
	}
};