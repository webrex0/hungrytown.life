$(document).ready(function () {
    // Handle Telephone form submission
    $('#telephoneForm').on('submit', function (e) {
        e.preventDefault();
        const telephonePrefix = $('#telephonePrefix').val();
        const telephoneNumber = $('#telephoneNumber').val();
        formatTelephone(telephonePrefix, telephoneNumber);
    });

    function formatTelephone(prefix, telnumber) {
        // Format the telephone number excluding the prefix
        const last8 = telnumber.slice(-8);
        
        $('#formattedTelephoneNumberRows').html(`
            <td>${last8.charAt(0)}</td>
            <td>${last8.charAt(1)}</td>
            <td>${last8.charAt(2)}</td>
            <td>${last8.charAt(3)}</td>
            <td>${last8.charAt(4)}</td>
            <td>${last8.charAt(5)}</td>
            <td>${last8.charAt(6)}</td>
            <td>${last8.charAt(7)}</td>
        `);
        $('#formattedTelephoneTable').removeClass('hidden');
        
        // Calculate and display Lunar Age Range values
        const ageRangeTelNumberRows = document.getElementById('ageRangeTelNumberRows');
        const TelNumbers = {
            T1: last8.charAt(0),
            T2: last8.charAt(1),
            T3: last8.charAt(2),
            T4: last8.charAt(3),
            T5: last8.charAt(4),
            T6: last8.charAt(5),
            T7: last8.charAt(6),
            T8: last8.charAt(7)
        };
        ageRangeTelNumberRows.innerHTML = ''; // Clear previous entries
        
        // Display all age ranges
        ageRangeTelNumberRows.innerHTML += `<tr><td>Age 13-22</td><td>${TelNumbers.T1},${TelNumbers.T2}</td></tr>`;
        ageRangeTelNumberRows.innerHTML += `<tr><td>Age 23-32</td><td>${TelNumbers.T1},${TelNumbers.T2},${TelNumbers.T3}</td></tr>`;
        ageRangeTelNumberRows.innerHTML += `<tr><td>Age 33-42</td><td>${TelNumbers.T1},${TelNumbers.T2},${TelNumbers.T3},${TelNumbers.T4}</td></tr>`;
        ageRangeTelNumberRows.innerHTML += `<tr><td>Age 43-52</td><td>${TelNumbers.T1},${TelNumbers.T2},${TelNumbers.T3},${TelNumbers.T4},${TelNumbers.T5}</td></tr>`;
        ageRangeTelNumberRows.innerHTML += `<tr><td>Age 53-62</td><td>${TelNumbers.T1},${TelNumbers.T2},${TelNumbers.T3},${TelNumbers.T4},${TelNumbers.T5},${TelNumbers.T6}</td></tr>`;
        ageRangeTelNumberRows.innerHTML += `<tr><td>Age 63-72</td><td>${TelNumbers.T1},${TelNumbers.T2},${TelNumbers.T3},${TelNumbers.T4},${TelNumbers.T5},${TelNumbers.T6},${TelNumbers.T7}</td></tr>`;
        
        document.getElementById('ageRangeTelNumberTable').classList.remove('hidden');

        // Call the function to populate the filtered numbers table
        displayFilteredNumbers();
    }

  // Function to display the filtered numbers
  function displayFilteredNumbers() {
    // Clear previous results
    const filteredNumbersTable = document.getElementById('filteredNumbersTable').querySelector('tbody');
    filteredNumbersTable.innerHTML = '';

    // Get all rows from the ageRangeTelNumberRows table
    const ageRangeTelNumberRows = document.getElementById('ageRangeTelNumberRows');
    const rows = ageRangeTelNumberRows.querySelectorAll('tbody tr');

    // Process each row
    rows.forEach(row => {
        // Extract age range and telephone numbers from the current row
        const ageRange = row.querySelector('td:first-child').innerText;
        const telNumbers = row.querySelector('td:last-child').innerText.split(',');

        let filteredNumbers = [];

        // Iterate through all numbers to filter and modify as needed
        for (let i = 0; i < telNumbers.length; i++) {
            const number = parseInt(telNumbers[i].trim());
            if (!isNaN(number)) {
                // Check for zero and duplicate the previous non-zero number
                if (number === 0 && i > 0) {
                    const prevNumber = parseInt(telNumbers[i - 1].trim());
                    if (!isNaN(prevNumber) && prevNumber !== 0) {
                        filteredNumbers.push(prevNumber); // Duplicate the non-zero number
                        continue; // Skip adding the zero to the array
                    }
                }
                filteredNumbers.push(number);
            }
        }

        // Get only the last two numbers
        const lastTwoNumbers = getLastTwoNumbers(filteredNumbers);

        // Create a new row for the filtered numbers and append it to the table
        const filteredNumbersRow = document.createElement('tr');
        filteredNumbersRow.innerHTML = `<td>${ageRange}</td><td>${lastTwoNumbers.join(', ')}</td>`;
        filteredNumbersTable.appendChild(filteredNumbersRow);
    });
}

// Helper function to get the last two consecutive numbers from an array
function getLastTwoNumbers(numbers) {
    // If the array has less than 2 elements, return the array itself
    if (numbers.length <= 2) {
        return numbers;
    }
    // Otherwise, return the last two elements
    return numbers.slice(-2);
}
    

});
