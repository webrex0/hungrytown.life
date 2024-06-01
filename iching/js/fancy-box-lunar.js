$(document).ready(function() {
    // Handle the lookup for lunar convert
    $('#lookupLunarConvertBtn').click(function() {
        const elevenString = $('#lunarYear').val();
        const month = $('#lunarMonth').val();
        const day = $('#lunarDay').val();

        // Assuming there's a function or an API that converts lunar month and day to desired format
        if (month && day) {
            // Perform conversion logic here, and populate the result in lunarConvertResult
            const result = lunarConvert(month, day); // Replace with actual conversion logic
            $('#lunarConvertResult').html(result);

            // Extract Lunar numbers and display in the new table
            const lunarMonth = month.toString().padStart(2, '0');
            const lunarDay = day.toString().padStart(2, '0');

            const lunarNumbersRows = document.getElementById('lunarNumbersRows2');
            lunarNumbersRows.innerHTML = `
                <tr>
                    <td>${elevenString.charAt(0)}</td>
                    <td>${elevenString.charAt(1)}</td>
                    <td>${lunarMonth.charAt(0)}</td>
                    <td>${lunarMonth.charAt(1)}</td>
                    <td>${lunarDay.charAt(0)}</td>
                    <td>${lunarDay.charAt(1)}</td>
                </tr>
            `;
            document.getElementById('lunarNumbersTable2').classList.remove('hidden');

            // Calculate and display Lunar Age Range values
            const lunarAgeRangeRows2 = document.getElementById('lunarAgeRangeRows2');
            const lunarNumbers2 = {
                L1: elevenString.charAt(0),
                L2: elevenString.charAt(1),
                L3: lunarMonth.charAt(0),
                L4: lunarMonth.charAt(1),
                L5: lunarDay.charAt(0),
                L6: lunarDay.charAt(1)
            };
            lunarAgeRangeRows2.innerHTML = ''; // Clear previous entries

            // Display all age ranges
            lunarAgeRangeRows2.innerHTML += `<tr><td>Age 13-22</td><td>${lunarNumbers2.L1},${lunarNumbers2.L2}</td></tr>`;
            lunarAgeRangeRows2.innerHTML += `<tr><td>Age 23-32</td><td>${lunarNumbers2.L2},${lunarNumbers2.L3}</td></tr>`;
            lunarAgeRangeRows2.innerHTML += `<tr><td>Age 33-42</td><td>${lunarNumbers2.L3},${lunarNumbers2.L4}</td></tr>`;
            lunarAgeRangeRows2.innerHTML += `<tr><td>Age 43-52</td><td>${lunarNumbers2.L4},${lunarNumbers2.L5}</td></tr>`;
            lunarAgeRangeRows2.innerHTML += `<tr><td>Age 53-62</td><td>${lunarNumbers2.L5},${lunarNumbers2.L6}</td></tr>`;
            lunarAgeRangeRows2.innerHTML += `<tr><td>Age 63-72</td><td>${lunarNumbers2.L6},${lunarNumbers2.L1}</td></tr>`;

            document.getElementById('lunarAgeRangeTable2').classList.remove('hidden');
        } else {
            $('#lunarConvertResult').html('Please enter valid month and day.');
        }
    });
});

// Placeholder lunarConvert function, replace with actual conversion logic
function lunarConvert(month, day) {
    // Placeholder function, replace with actual conversion logic
    return `Month: ${month}, Day: ${day}`;
}
