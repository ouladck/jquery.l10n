(function ($) {
    const l10n = $('.l10n').l10n({
        dynamicLang: true,
        dictList: words
    });

    $('#via-js').html(l10n.getText('Your plugin is not working'));

    $('button').click(function() {
        l10n.setLanguage($(this).data('lang'), $(this).data('reload'));
    });

}(jQuery));
