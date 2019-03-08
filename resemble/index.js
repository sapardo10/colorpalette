var diff = resemble('../cypress/screenshots/estudiantesTests.js/Los estudiantes buscar profesor -- Correctly searchs a teacher on the search bar.png')
    .compareTo('../cypress/screenshots/estudiantesTests.js/Los estudiantes buscar profesor -- Correctly searchs a teacher on the search bar (1).png')
    .ignoreColors()
    .onComplete(function(data) {
        console.log(data);