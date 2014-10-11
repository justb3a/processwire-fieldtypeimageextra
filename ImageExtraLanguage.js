function handleLanguages() {
  var $langField = $('.InputfieldImageExtraItem').has('.LanguageSupport');
  $langField.each(function(){
    var $this = $(this);

    var $langHeader =  $this.children('.InputfieldImageExtraHeader');
    var $langContent =  $this.children('.InputfieldContent');
    var $langSupport = $langContent.children('.LanguageSupport');

    // console.log($this);

    //should avoid applying to single language field like Language "alt" fields
    if ($langSupport.length > 1) {
      // we will later combine the input ID with the index to create unique anchors for jqueryui tabs to use
      var fieldID = $this.attr('id');
      var i = 0;
      var LangTabsBox = '<div class="langTabs"><ul></ul></div>';

      // add the markup the LangTabs will go inside
      $langContent.append(LangTabsBox);
      var $langTabsBox = $this.find('.langTabs');
      var $langTabs = $langTabsBox.children('ul');

      // $langContent.parent('.Inputfield').addClass('hasLangTabs');

      $langSupport.each(function(){
        var $this = $(this);
        var label = $this.children('.LanguageSupportLabel').text();
        var anchor = fieldID+i;

        var $textarea = $this.find('textarea');
        var $input = $this.find('input');
        var $textareaInline = $this.find('div[contenteditable]');
        var fieldValueClass = 'langTabEmpty';

        if ($textarea.length > 0) {
          if ($textarea.text().length > 0) { fieldValueClass = ''; }
        } else if ($textareaInline.length > 0) {
          if ($textareaInline.text().length > 0) { fieldValueClass = ''; }
        } else if ($input.length > 0 && $input.eq(0).val().length > 0) {
          if ($input.attr('name').indexOf('_pw_page_name') === 0) {
            // defer to the "active" checkbox in determining whether it shows empty class or not
            var $checkbox = $input.next('label').children('input[type=checkbox]');
            if (!$checkbox.size() || $checkbox.is(':checked')) { fieldValueClass = ''; }
          } else {
            fieldValueClass = '';
          }
        }

        $langTabs.append('<li><a class="' + fieldValueClass + '" href="#' + anchor + '">' + label + '</a></li>');
        $this.attr('id', anchor).appendTo($langTabsBox);

        i = i+1;
      });

      $langContent.addClass('langTabsContainer').siblings('label');
      $langTabsBox.tabs();
    }

  }); // end each
}

$(function(){

  handleLanguages();

  $('.FieldtypeImageExtraLanguage').on('change', function() {
    var $langField = $(this).parent('p').parent('.InputfieldContent')
      .find('.InputfieldImageExtraItem').has('.LanguageSupport');
    handleLanguages($langField);

    setTimeout(function() {
      handleLanguages();
    }, 1000);

  });


});
