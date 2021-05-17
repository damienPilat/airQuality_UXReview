function initiateEndScripts() {
    // Create Sections based on data
    populateSections();
    // Populate Dom with all tables
    createTables();
    // Create carousels for dom
    populateCarousel();

    embedPrototype();
}
