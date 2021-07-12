$( function() {
    var availableTags = [
      "Maps",
      "Audio",
      "Photos",
      "Manuscripts",
      "Newspapers",
      "Film-and-Videos",
      "Notated-Music",
      "Websites"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );