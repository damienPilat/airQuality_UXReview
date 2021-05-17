// Populate all tables into Dom based on anchors from data.js, and populated with appropraite html string in table_data.js
// Retrieves all dom elements by class name,
// Loops through all responses and populates, using JQuery, the appropriate data
function createTables() {
    let domTableContainers = document.getElementsByClassName('table-container');
    Array.from(domTableContainers).forEach(tableContainer => {
        let elementID = tableContainer.id.split('-')[0];
        $('#' + tableContainer.id).append(
            customElement({
                type: 'p',
                className: 'table-caption',
                id: elementID + '-table-caption',
                innerText: table_data[elementID].caption
            }),
            table_data[elementID].value
        );
    });
}



function populateCarousel() {
    let domCarouselContainers = document.getElementsByClassName('carousel');
    Array.from(domCarouselContainers).forEach(domCarousel => {
        domCarousel.appendChild(createCarousel(domCarousel));
    });

    $(document).ready(function () {
        $('.slickSlider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 2,
            centerMode: true,
            variableWidth: true,
            centerPadding: '50px'
            // autoplay: true,
            // autoplaySpeed: 3000,
        });
    });
}


function createCarousel(container) {
    let elementId = container.id.split('-')[0];
    let slickContainer = customElement({type: 'div', className: 'slickSlider', id: elementId + '-slick-carousel'});
    carousel_data[elementId].elements.forEach(elementName => {
            slickContainer.append(customElement({
                type: 'div',
                className: 'sliderElementContainer',
                children: {
                    0: {
                        type: 'img',
                        className: 'carousel-img',
                        src: 'media/' + carousel_data[elementId].folderName + '/' + elementName
                    }
                }
            }));
        }
    );
    console.log("slickContainers:", slickContainer);

    return slickContainer
}


function embedPrototype() {
    let iframeContainer = document.getElementById('hiFi-iframe-container');
}
