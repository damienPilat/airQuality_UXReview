// Populate sections, looping through section Dict, retrieving structure and populating as approprate
function populateSections() {
    for (let sectionID in sectionDetails) {
        let domContainer = document.getElementById('content');
        let sectionStructure = sectionDetails[sectionID];

        for (let firstDepthElements in sectionStructure) {
            domContainer.appendChild(customElement(sectionStructure[firstDepthElements]));
        }
    }
} // END: populateSections

// DOM ELEMENTS
// Function to create a custom element with any possible value used in project
function customElement(config) {
    let elementDetails = Object.assign({
            type: null,
            className: null,
            id: null,
            src: null,
            alt: null,
            target: null,
            href: null,
            innerText: null,
            innerHTML: null,
            children: null,
            height: null,
            width: null
        },
        config
    );

    return populateElement(elementDetails);
}

// Populate DOM element with all non NULL values + Two SPECIAL cases
function populateElement(elementDetails) {
    let element = document.createElement(elementDetails.type);
    for (const [key, value] of Object.entries(elementDetails)) {
        if (value) {
            if (key === 'children') {
                createChildren(elementDetails.children, element);
            } else {
                element[key] = value;
            }
        }
    }
    return element
}

// Recursively create all children of an element
function createChildren(children, container) {
    for (let childrenID in children) {
        container.append(customElement(children[childrenID]));
    }
}

// V2 - change 'type' key to 'domType' to allow source dom tag attribute 'type' to be used correctly

function customElement_v2(config) {
    let elementDetails = Object.assign({
            domType: null,
            className: null,
            id: null,
            src: null,
            alt: null,
            target: null,
            type: null,
            href: null,
            innerText: null,
            innerHTML: null,
            children: null,
            muted: null,
            autoplay: null
        },
        config
    );

    return populateElement_v2(elementDetails);
}

function populateElement_v2(elementDetails) {
    // console.log("elementDetails:", elementDetails);
    let element = document.createElement(elementDetails.domType);
    // console.log("element:", element);
    for (const [key, value] of Object.entries(elementDetails)) {
        if (value) {
            if (key === 'children') {
                createChildren_v2(elementDetails.children, element);
            } else if (key === 'muted') {
                element.muted = true;
                // console.log("element in muted:", element);
            }
            else {
                element[key] = value;
            }
        }
    }
    return element
}

function createChildren_v2(children, container) {
    for (let childrenID in children) {
        container.append(customElement_v2(children[childrenID]));
    }
}
