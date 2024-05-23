document.getElementById('icForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const icNumber = document.getElementById('icNumber').value;
    const datePart = icNumber.slice(0, 6);
    const rrPart = icNumber.slice(6, 8);
    const nnPart = icNumber.slice(8, 12);
    const yearPart = datePart.slice(0, 2);
    const monthPart = datePart.slice(2, 4);
    const dayPart = datePart.slice(4, 6);
    const currentYear = new Date().getFullYear();
    let birthYear = parseInt(yearPart);

    // Adjust year to 4 digits
    if (birthYear <= parseInt(currentYear.toString().slice(-2))) {
        birthYear += 2000;
    } else {
        birthYear += 1900;
    }

    // Check if the year is within the valid range
    if (birthYear < 1950 || birthYear > 2024) {
        alert("Year of birth must be between 1950 and 2024.");
        return;
    }

    const age = currentYear - birthYear;

    const formattedData = {
        Y1: datePart.charAt(0),
        Y2: datePart.charAt(1),
        M1: datePart.charAt(2),
        M2: datePart.charAt(3),
        D1: datePart.charAt(4),
        D2: datePart.charAt(5),
        R1: rrPart.charAt(0),
        R2: rrPart.charAt(1),
        N1: nnPart.charAt(0),
        N2: nnPart.charAt(1),
        N3: nnPart.charAt(2),
        N4: nnPart.charAt(3)
    };

    const formattedRow = document.getElementById('formattedRow');
    formattedRow.innerHTML = Object.entries(formattedData).map(([key, value]) => {
        const separatorClass = ['Y2', 'M2', 'D2', 'R2', 'N2'].includes(key) ? 'class="separator"' : '';
        return `<td ${separatorClass}>${value}</td>`;
    }).join('');

    const ageRow = document.getElementById('ageRow');
    ageRow.innerHTML = `
        <td>${currentYear}</td>
        <td>${birthYear}</td>
        <td>${age}</td>
    `;
    
    document.getElementById('formattedIC').classList.remove('hidden');
    document.getElementById('ageTable').classList.remove('hidden');

    // Calculate and display values for age categories
    const categoryRows = document.getElementById('categoryRows');
    categoryRows.innerHTML = ''; // Clear previous entries

    if (age >= 13 && age <= 22) {
        categoryRows.innerHTML += `<tr><td>Age 13-22</td><td>${formattedData.Y2},${formattedData.M1},${formattedData.M2}</td></tr>`;
    }
    if (age >= 23 && age <= 32) {
        categoryRows.innerHTML += `<tr><td>Age 23-32</td><td>${formattedData.M2},${formattedData.D1},${formattedData.D2}</td></tr>`;
    }
    if (age >= 33 && age <= 42) {
        categoryRows.innerHTML += `<tr><td>Age 33-42</td><td>${formattedData.D2},${formattedData.R1},${formattedData.R2}</td></tr>`;
    }
    if (age >= 43 && age <= 52) {
        categoryRows.innerHTML += `<tr><td>Age 43-52</td><td>${formattedData.R2},${formattedData.N1},${formattedData.N2}</td></tr>`;
    }
    if (age >= 53 && age <= 62) {
        categoryRows.innerHTML += `<tr><td>Age 53-62</td><td>${formattedData.N2},${formattedData.N3},${formattedData.N4}</td></tr>`;
    }
    if (age >= 63 && age <= 72) {
        categoryRows.innerHTML += `<tr><td>Age 63-72</td><td>${formattedData.N4},${formattedData.Y1},${formattedData.Y2}</td></tr>`;
    }

    document.getElementById('categoryTable').classList.remove('hidden');

    // Display category values in the new section
    const newCategoryRows = document.getElementById('newCategoryRows');
    newCategoryRows.innerHTML = ''; // Clear previous entries

    newCategoryRows.innerHTML += `<tr><td>Age 13-22</td><td>${formattedData.Y2},${formattedData.M1},${formattedData.M2}</td></tr>`;
    newCategoryRows.innerHTML += `<tr><td>Age 23-32</td><td>${formattedData.M2},${formattedData.D1},${formattedData.D2}</td></tr>`;
    newCategoryRows.innerHTML += `<tr><td>Age 33-42</td><td>${formattedData.D2},${formattedData.R1},${formattedData.R2}</td></tr>`;
    newCategoryRows.innerHTML += `<tr><td>Age 43-52</td><td>${formattedData.R2},${formattedData.N1},${formattedData.N2}</td></tr>`;
    newCategoryRows.innerHTML += `<tr><td>Age 53-62</td><td>${formattedData.N2},${formattedData.N3},${formattedData.N4}</td></tr>`;
    newCategoryRows.innerHTML += `<tr><td>Age 63-72</td><td>${formattedData.N4},${formattedData.Y1},${formattedData.Y2}</td></tr>`;

    document.getElementById('newCategoryTable').classList.remove('hidden');

    // Filter and display special numbers
    const specialNumberRow = document.getElementById('specialNumberRow');
    specialNumberRow.innerHTML = ''; // Clear previous entries
    const allNumbers = Object.values(formattedData);
    const specialNumbers = allNumbers.filter((value, index) => {
        if (value === '0' || value === '5') return false;
        if (index > 0 && allNumbers[index - 1] === value) return false;
        return true;
    });

    // Apply new logic to keep only one instance of each consecutive number
    const filteredSpecialNumbers = specialNumbers.filter((value, index, array) => {
        return index === 0 || value !== array[index - 1];
    });

    specialNumberRow.innerHTML = `<td>${filteredSpecialNumbers.join(', ')}</td>`;
    document.getElementById('specialNumberTable').classList.remove('hidden');

    // Check for predefined 3 consecutive numbers
    const predefinedTurnBadNumbers = ['1479', '2836', '3924', '6742','4163','9381','8297','7618'];
    const predefinedDivorceNumbers = ['1983', '7892', '3461','2647','9174','8716','4329','6238'];
    const predefinedFivefortuneNumbers = ['1872', '7913', '3627', '2431','8194','9786','6349','4268'];
    const predefinedBirthNumbers = ['1491', '2862', '3943','4134','6726','7687','8278','9319'];
    const predefinedMarriageProb4Numbers = ['3001','1003','6008','8006','1313'];
    const predefinedMarriageProb3Numbers = ['103', '301'];
    const predefinedEmoNumbers = ['1803', '9704', '8106','6308','3803','4704','1601'];
    const predefinedBigFortuneNumbers = ['131', '272', '494', '686'];
    const predefinedVolatileNumbers = ['918', '819','879', '978', '342', '243','197', '791', '781', '187','436', '634','624', '426'];
    const predefinedBigProfitNumbers = ['134', '319','687', '862', '491', '943','278', '726'];
    const predefinedSocialNumbers = ['468', '986', '327'];
    const predefinedProNumbers = ['194', '627','268'];
    const predefinedLeaderNumbers = ['149', '931','286'];

    const predefinedCreativeNumbers = ['427', '368', '794'];
    const predefinedServiceNumbers = ['472', '927', '168'];

    const predefinedEntrepreneurNumbers = ['372', '486', '694'];
    const predefinedCancerNumbers = ['812', '218', '697', '769'];
    const predefinedSickNumbers = ['611', '116', '166'];
    
    

    const consecutiveNumberRows = document.getElementById('consecutiveNumberRows');
    consecutiveNumberRows.innerHTML = ''; // Clear previous entries

    for (let i = 0; i <= filteredSpecialNumbers.length - 3; i++) {
        const threeConsecutive = filteredSpecialNumbers.slice(i, i + 3).join('');
        if (predefinedMarriageProb3Numbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Marriage Problem Numbers 婚姻问题数字</td></tr>`;
        }
        if (predefinedVolatileNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Volatile Numbers 变动性大的数字</td></tr>`;
        }
        if (predefinedBigProfitNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Big Profit Numbers 赚大钱数字</td></tr>`;
        }
        if (predefinedSocialNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Social As Business 口为业的数字</td></tr>`;
        }
        if (predefinedProNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Professional Numbers 变动性大的数字/td></tr>`;
        }
        if (predefinedLeaderNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Leadership Numbers 赚大钱数字</td></tr>`;
        }
        if (predefinedBigFortuneNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Big Fortune 大财数字</td></tr>`;
        }
        if (predefinedCreativeNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Creativity Numbers 创意行业</td></tr>`;
        }
        if (predefinedServiceNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Services Numbers 服行务业</td></tr>`;
        }
        if (predefinedEntrepreneurNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Entrepreneur Numbers 创业者</td></tr>`;
        }
        if (predefinedCancerNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Cancer Numbers 癌症数字</td></tr>`;
        }
        if (predefinedSickNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Gastroenterology, gynecological Sickness Numbers 肠胃病，妇科病</td></tr>`;
        }
        
        
    }

    for (let i = 0; i <= filteredSpecialNumbers.length - 4; i++) {
        const threeConsecutive = filteredSpecialNumbers.slice(i, i + 4).join('');
        if (predefinedTurnBadNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Relationship Become Worst 感情变鬼数字</td></tr>`;
        }
        if (predefinedDivorceNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Divorce Numbers 离婚数字</td></tr>`;
        }
        if (predefinedFivefortuneNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>5 Ghost Bring Fortune 五鬼运财</td></tr>`;
        }
        if (predefinedBirthNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Birth Law&Order 生天延数字</td></tr>`;
        }
        if (predefinedMarriageProb4Numbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Marriage Problem Numbers 婚姻问题数字</td></tr>`;
        }
        if (predefinedEmoNumbers.includes(threeConsecutive)) {
            consecutiveNumberRows.innerHTML += `<tr><td>${threeConsecutive}</td><td>Emotionally Depressed Numbers 情绪压抑的数字</td></tr>`;
        }
    }

    document.getElementById('consecutiveNumberTable').classList.remove('hidden');

    // Perform Lunar conversion
    const lunarConverterRows = document.getElementById('lunarConverterRows');
    const month = parseInt(monthPart, 10);
    const day = parseInt(dayPart, 10);
    const gregorianDate = new Date(birthYear, month - 1, day); // Month is 0-based index
    const lunarDate = Lunar.fromDate(gregorianDate);
    const gregorianString = gregorianDate.toDateString();
    const lunarString = `${lunarDate.getMonth()} month, ${lunarDate.getDay()} day`;
    const elevenString = (birthYear - 11).toString().slice(-2);

    lunarConverterRows.innerHTML = `
        <tr>
            <td>${elevenString}</td>
            <td>${lunarString}</td>
        </tr>
    `;

    document.getElementById('lunarConverterTable').classList.remove('hidden');
});