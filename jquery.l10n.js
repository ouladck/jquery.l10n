'use strict';

$.fn.l10n = function(options) {
    const that = this;
    let dict = {};
    let params = $.extend({
        lang: 'en',
        dictList: []
    }, options);

    // Defining Language
    let language = params.lang;
    if (localStorage.getItem('lang')) {
        language = (localStorage.getItem('lang')) ? localStorage.getItem('lang') : navigator.language.substr(0, 2);
    } else {
        localStorage.setItem('lang', language);
    }
    if (params.dictList.hasOwnProperty(language)) {
        dict = params.dictList[language];
    } else {
        console.log(`You don't has the variable '${language}' in the 'dictionary.js', you may create it first\nYou can check our documetation to get more informations here https://github.com/karim88/jquery.l10n`);
    }

    /**
     * get Translated text
     * @param text
     * @returns text
     */
    this.getText = (text) => {
        return dict[text] || text;
    };

    /**
     * Change lang html attribute & local storage one
     * @param lang
     */
    this.setLanguage = (lang) => {
        document.querySelector('html').setAttribute('lang', lang);
        localStorage.setItem('lang', lang);

        location.reload();
    };

    /**
     * Translate the whole website
     */
    this.translate = () => {
        that.each((index, element) => {
            // Check Html element
            if (dict[element.innerHTML.trim()]) {
                element.innerHTML = dict[element.innerHTML.trim()];
            }
            // Check Placeholder attribute
            if (element.getAttribute('placeholder')) {
                element.setAttribute('placeholder', dict[element.getAttribute('placeholder').trim()]);
            }
                
        });
    };


    document.querySelector('html').setAttribute('lang', language);
    that.translate();
    return that;

}