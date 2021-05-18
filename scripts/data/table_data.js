let table_data = {
    'simDiff': {
        caption: 'Table 1: Similarities and Differences of Weather and Air Quality Applications',
        value:
            '<table class="flex">' +
            '<tr>' +
            '   <th rowspan="2" class="first-column first-row">Similarities</th>' +
            '   <th colspan="2" >Differences</th>' +
            '</tr>' +
            '<tr>' +
            '   <td class="first-row tableSubHeader">Weather Applications</td>' +
            '   <td class="first-row tableSubHeader">Air Quality Applications</td>' +
            '</tr>' +
            '<tr>' +
            '   <td class="first-column">Societal Interest</td>' +
            '   <td>Commercial Interest First</td>' +
            '   <td>National Interest First</td>' +
            '</tr>' +
            '<tr>' +
            '   <td class="first-column">Prediction</td>' +
            '   <td>Standardised Measurements</td>' +
            '   <td>Nationally set standards</td>' +
            '</tr>' +
            '<tr>' +
            '   <td class="first-column">Hyper localised</td>' +
            '</tr>' +
            '<tr>' +
            '   <td class="first-column">Interest in multiple locations</td>' +
            '</tr>' +
            '</table>'
    },
    'reqGather': {
        caption: 'Table 2 : Requirements Gathering resulting elements.',
        value:
            '<table class="flex">\n' +
            '<tr>\n' +
            '    <th class="first-row first-column">Requirement</th>\n' +
            '    <th class="first-row">Status</th>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to view the latest air quality indicator (AQI) for a given location.</td>\n' +
            '    <td>Core</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to view additional levels of air pollutants.</td>\n' +
            '    <td>Core</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to view prediction levels for key pollutants.</td>\n' +
            '    <td>Optional</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to search for cities.</td>\n' +
            '    <td>Core</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to favourite cities.</td>\n' +
            '    <td>Optional</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to view their favourite cities and edit them (i.e. remove them from the list).</td>\n' +
            '    <td>Optional</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to view the latest AQI after selecting a city from their favourites.</td>\n' +
            '    <td>Optional</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to sign up.</td>\n' +
            '    <td>Core</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to login after signing up.</td>\n' +
            '    <td>Core</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to access a range of settings.</td>\n' +
            '    <td>Core</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to access an app FAQ.</td>\n' +
            '    <td>Optional</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to access their account details.</td>\n' +
            '    <td>Core</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to access information about the company and product.</td>\n' +
            '    <td>Optional</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to allow the app to use their current location.</td>\n' +
            '    <td>Optional</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '    <td class="first-column">The user must be able to close their account.</td>\n' +
            '    <td>Core</td>\n' +
            '</tr>\n' +
            '</table>'
    },
    'userTesting': {
        caption: 'Table 3 : Participant Feedback from Low-Fidelity Hand Sketches.',
        value:
            '<table class="flex">\n' +
            '    <tr>\n' +
            '        <th class="first-row first-column" id="userTesting_colOne">View</th>\n' +
            '        <th class="first-row">Feedback</th>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td class="first-column" rowspan="3">Loading View</td>\n' +
            '        <td>Name of the app could be placed on this page.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td>Markings [on central circle] are unclear, a progress bar would be more visually recognisable.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td>Information of what will be loaded could aid in informing about what\'s to come.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td class="first-column" rowspan="3">Homepage A</td>\n' +
            '        <td>Current date is less important than the current location.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td>A bottom navigation to go to a page with all the elements would be easier to navigate and provide an alternative [to the current setup with cards that are accessed through scrolling horizontally].</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td>Meaning of the numbers [in the central circle] are unclear.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td class="first-column" rowspan="2">Homepage B</td>\n' +
            '        <td>Arrows [on side of main indicator] are a nice visual indicator.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td>Comparison of air quality throughout time [on graph] is a nice visual element for forecast.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td class="first-column" rowspan="2">Settings View</td>\n' +
            '        <td>Unsure where edits can be made for the general preferences.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td>Signup and login would be better placed at the start of the journey. No real incentive to create an account at this stage.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td class="first-column" rowspan="2">Favourites View</td>\n' +
            '        <td>Is it possible to click on a city to get the homepage with the update location? Not clear.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td>Would clicking on the ‘X’ icon result in the city being removed from the favourites, and wouldn’t that happen by clicking on the star symbol as well?</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td class="first-column" rowspan="2">Search Action View</td>\n' +
            '        <td>Add a cursor line [in the search box] to show that the user is currently typing.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td>‘Recent’ text is too small.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td class="first-column" rowspan="2">Search Bar View</td>\n' +
            '        <td>Two icons side by side are a bit confusing as to what their use are for.</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td>[Second set of] icons aid in understanding their functionality, and can be placed together [as in the first search bar option].</td>\n' +
            '    </tr>\n' +
            '</table>'
    }
};
