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

    // Extract Lunar numbers and display in the new table
    const lunarNumbersRows = document.getElementById('lunarNumbersRows');
    const lunarMonth = lunarDate.getMonth().toString().padStart(2, '0');
    const lunarDay = lunarDate.getDay().toString().padStart(2, '0');
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
    document.getElementById('lunarNumbersTable').classList.remove('hidden');

    // Calculate and display Lunar Age Range values
    const lunarAgeRangeRows = document.getElementById('lunarAgeRangeRows');
    const lunarNumbers = {
        L1: elevenString.charAt(0),
        L2: elevenString.charAt(1),
        L3: lunarMonth.charAt(0),
        L4: lunarMonth.charAt(1),
        L5: lunarDay.charAt(0),
        L6: lunarDay.charAt(1)
    };
    lunarAgeRangeRows.innerHTML = ''; // Clear previous entries

    // Display all age ranges
    lunarAgeRangeRows.innerHTML += `<tr><td>Age 13-22</td><td>${lunarNumbers.L1},${lunarNumbers.L2}</td></tr>`;
    lunarAgeRangeRows.innerHTML += `<tr><td>Age 23-32</td><td>${lunarNumbers.L2},${lunarNumbers.L3}</td></tr>`;
    lunarAgeRangeRows.innerHTML += `<tr><td>Age 33-42</td><td>${lunarNumbers.L3},${lunarNumbers.L4}</td></tr>`;
    lunarAgeRangeRows.innerHTML += `<tr><td>Age 43-52</td><td>${lunarNumbers.L4},${lunarNumbers.L5}</td></tr>`;
    lunarAgeRangeRows.innerHTML += `<tr><td>Age 53-62</td><td>${lunarNumbers.L5},${lunarNumbers.L6}</td></tr>`;
    lunarAgeRangeRows.innerHTML += `<tr><td>Age 63-72</td><td>${lunarNumbers.L6},${lunarNumbers.L1}</td></tr>`;

    document.getElementById('lunarAgeRangeTable').classList.remove('hidden');

});

// Function to lookup consecutive numbers and display matched results
        // Define a function to retrieve the Alphabert based on the matched numbers
        function getAlphabert(matchedNumber) {
            const alphaberts = {
                '14': 'S1-强',
                '41': 'S1-强',
                '67': 'S2-次强',
                '76': 'S2-次强',
                '39': 'S3-弱',
                '93': 'S3-弱',
                '28': 'S4',
                '82': 'S4',
                '13': 'T1-强',
                '31': 'T1-强',
                '68': 'T2-次强',
                '86': 'T2-次强',
                '49': 'T3-弱',
                '94': 'T3-弱',
                '27': 'T4',
                '72': 'T4',
                '19': 'Y1-强',
                '91': 'Y1-强',
                '78': 'Y2-次强',
                '87': 'Y2-次强',
                '34': 'Y3-弱',
                '43': 'Y3-弱',
                '26': 'Y4',
                '62': 'Y4',
                '17': 'H1-强',
                '71': 'H1-强',
                '89': 'H2-次强',
                '98': 'H2-次强',
                '46': 'H3-弱',
                '64': 'H3-弱',
                '23': 'H4',
                '32': 'H4',
                '16': 'L1-强',
                '61': 'L1-强',
                '47': 'L2-次强',
                '74': 'L2-次强',
                '38': 'L3-弱',
                '83': 'L3-弱',
                '29': 'L4',
                '92': 'L4',
                '18': 'W1-强',
                '81': 'W1-强',
                '79': 'W2-次强',
                '97': 'W2-次强',
                '36': 'W3-弱',
                '63': 'W3-弱',
                '24': 'W4',
                '42': 'W4',
                '12': 'J1-强',
                '21': 'J1-强',
                '69': 'J2-次强',
                '96': 'J2-次强',
                '48': 'J3-弱',
                '84': 'J3-弱',
                '37': 'J4',
                '73': 'J4'
            };

            return alphaberts[matchedNumber] || 'No alphabert found';
        }

        // Update the function to display matched results with alphaberts
        function lookupConsecutiveNumbers() {
            const categoryValues = document.querySelectorAll('#categoryRows td:nth-child(2)');
            let matchedResults = [];

            categoryValues.forEach((value) => {
                const valueText = value.textContent.trim().replace(/,/g, ''); // Remove commas
                const numbers = valueText.split('').map(Number); // Convert string to array of numbers

                // Filter out zero, 5, and double numbers
                const filteredNumbers = numbers.filter((num, i) => {
                    if (
                        num === 0 ||
                        num === 5 ||
                        num === numbers[i + 1] || num === numbers[i - 1] ||
                        num === numbers[i + 2] || num === numbers[i - 2]
                    ) {
                        // If the number is part of a double number, only remove one instance
                        if (num === numbers[i + 1] || num === numbers[i - 1]) {
                            return i > 0 ? numbers[i - 1] !== num : true;
                        }
                        return false;
                    }
                    return true;
                });

                // Determine number of consecutive numbers found
                const consecutiveCount = filteredNumbers.length;

                if (consecutiveCount >= 2) {
                    // Create all possible pairs of consecutive numbers
                    for (let i = 0; i < filteredNumbers.length - 1; i++) {
                        const pair = filteredNumbers.slice(i, i + 2);
                        const pairString = pair.join('');
                        const alphabert = getAlphabert(pairString);
                        matchedResults.push({
                            numbers: pairString,
                            alphabert: alphabert
                        });
                    }
                } else if (consecutiveCount === 1) {
                    // Push the single number to matchedResults
                    matchedResults.push({
                        numbers: filteredNumbers[0].toString(),
                        alphabert: '1 number ERROR'
                    });
                }
            });

            // Display matched results for 2-number and 1-number matchups only
            const matchedResultsTable = document.getElementById('matchedResultsTable');
            const matchedResultsRows = document.getElementById('matchedResultsRows');
            matchedResultsRows.innerHTML = ''; // Clear previous entries

            matchedResults.forEach(result => {
                // Only display 2-number and 1-number matchups
                if (result.numbers.length <= 2) {
                    const explanation = lookupExplanation(result.alphabert);
                    matchedResultsRows.innerHTML += `
                <tr>
                    <td>${result.numbers}</td>
                    <td rowspan="2" style="text-align: left;">${explanation}</td>
                </tr>
                <tr>
                    <td>${result.alphabert}</td>
                </tr>
            `;
                }
            });

            matchedResultsTable.classList.remove('hidden');
            // Call the lookup function after category values are displayed
            lookupExplanation();
        }

        // Define a function to retrieve the Explaination based on the alphabert
        function lookupExplanation(alphabert) {
            // Predefined data for alphaberts and their corresponding explanations
            const alphabertExplanations = {
                'S1-强': [
                    '性格：	乐观开朗，不计较，不强求，喜欢帮人，人缘好，无主见，上进心，比较懒，被朋友骗，朋友多，人缘好',
                    '财运：	贵人来财，意外之财，中彩，把钱花在朋友身上，留不住钱',
                    '事业：	贵人多，服务业，公关人际关系行业，拉关系，上进心不足',
                    '婚姻：	随缘，不强求，不计较，婚姻甜蜜，关系和谐',
                    '健康：	肠胃问题，生病不愿看医生',
                    '状态：	生气勃勃，起死回生，开荒牛，谈资，有磁场，EQ高，弹性大'
                ],
                'S2-次强': [
                    '性格：	乐观开朗，不计较，不强求，喜欢帮人，人缘好，无主见，上进心，比较懒，被朋友骗，朋友多，人缘好',
                    '财运：	贵人来财，意外之财，中彩，把钱花在朋友身上，留不住钱',
                    '事业：	贵人多，服务业，公关人际关系行业，拉关系，上进心不足',
                    '婚姻：	随缘，不强求，不计较，婚姻甜蜜，关系和谐',
                    '健康：	肠胃问题，生病不愿看医生',
                    '状态：	生气勃勃，起死回生，开荒牛，谈资，有磁场，EQ高，弹性大'
                ],
                'S3-弱': [
                    '性格：	乐观开朗，不计较，不强求，喜欢帮人，人缘好，无主见，上进心，比较懒，被朋友骗，朋友多，人缘好',
                    '财运：	贵人来财，意外之财，中彩，把钱花在朋友身上，留不住钱',
                    '事业：	贵人多，服务业，公关人际关系行业，拉关系，上进心不足',
                    '婚姻：	随缘，不强求，不计较，婚姻甜蜜，关系和谐',
                    '健康：	肠胃问题，生病不愿看医生',
                    '状态：	生气勃勃，起死回生，开荒牛，谈资，有磁场，EQ高，弹性大'
                ],
                'S4': [
                    '性格：	乐观开朗，不计较，不强求，喜欢帮人，人缘好，无主见，上进心，比较懒，被朋友骗，朋友多，人缘好',
                    '财运：	贵人来财，意外之财，中彩，把钱花在朋友身上，留不住钱',
                    '事业：	贵人多，服务业，公关人际关系行业，拉关系，上进心不足',
                    '婚姻：	随缘，不强求，不计较，婚姻甜蜜，关系和谐',
                    '健康：	肠胃问题，生病不愿看医生',
                    '状态：	生气勃勃，起死回生，开荒牛，谈资，有磁场，EQ高，弹性大'
                ],
                'T1-强': [
                    '性格：	性格：	聪明，善良，心胸开朗，好帮助人，单纯，无心机，易被骗',
                    '财运：	正财，偏财，横财等八方财运，花钱大方',
                    '事业：	可成大事，老板命或老板得力助手，业绩好，喜欢宗教命理，第六感强',
                    '婚姻：	正桃花，良缘，甜蜜，恩爱',
                    '健康：	血压，血液，眼耳鼻问题，富人病，三高',
                    '状态：	天公仔，随和，慷慨，大财，老板命，天生聪明，有良缘'
                ],
                'T2-次强': [
                    '性格：	性格：	聪明，善良，心胸开朗，好帮助人，单纯，无心机，易被骗',
                    '财运：	正财，偏财，横财等八方财运，花钱大方',
                    '事业：	可成大事，老板命或老板得力助手，业绩好，喜欢宗教命理，第六感强',
                    '婚姻：	正桃花，良缘，甜蜜，恩爱',
                    '健康：	血压，血液，眼耳鼻问题，富人病，三高',
                    '状态：	天公仔，随和，慷慨，大财，老板命，天生聪明，有良缘'
                ],
                'T3-弱': [
                    '性格：	性格：	聪明，善良，心胸开朗，好帮助人，单纯，无心机，易被骗',
                    '财运：	正财，偏财，横财等八方财运，花钱大方',
                    '事业：	可成大事，老板命或老板得力助手，业绩好，喜欢宗教命理，第六感强',
                    '婚姻：	正桃花，良缘，甜蜜，恩爱',
                    '健康：	血压，血液，眼耳鼻问题，富人病，三高',
                    '状态：	天公仔，随和，慷慨，大财，老板命，天生聪明，有良缘'
                ],
                'T4': [
                    '性格：	性格：	聪明，善良，心胸开朗，好帮助人，单纯，无心机，易被骗',
                    '财运：	正财，偏财，横财等八方财运，花钱大方',
                    '事业：	可成大事，老板命或老板得力助手，业绩好，喜欢宗教命理，第六感强',
                    '婚姻：	正桃花，良缘，甜蜜，恩爱',
                    '健康：	血压，血液，眼耳鼻问题，富人病，三高',
                    '状态：	天公仔，随和，慷慨，大财，老板命，天生聪明，有良缘'
                ],
                'Y1-强': [
                    '性格：	责任心，敢于担当，大男/女人主义，心地善良，强势，固执，认死理，自我',
                    '财运：	辛苦赚钱，比较守财。精打细算，铁公鸡',
                    '事业：	专业能力，领导和技术，亲历亲为，劳碌，压力大，纪律部队',
                    '婚姻：	专一专注，眼光高，宁缺毋滥，一家之主',
                    '健康：	积劳成病，易有颈椎，腰等病痛，睡眠不好，容易掉发',
                    '状态：	将军命，有纪律，做事有原则，固执，注重流程，做事小心，忠诚，事业心重，独当一面，生命力强，意志力强，领导力'
                ],
                'Y2-次强': [
                    '性格：	责任心，敢于担当，大男/女人主义，心地善良，强势，固执，认死理，自我',
                    '财运：	辛苦赚钱，比较守财。精打细算，铁公鸡',
                    '事业：	专业能力，领导和技术，亲历亲为，劳碌，压力大，纪律部队',
                    '婚姻：	专一专注，眼光高，宁缺毋滥，一家之主',
                    '健康：	积劳成病，易有颈椎，腰等病痛，睡眠不好，容易掉发',
                    '状态：	将军命，有纪律，做事有原则，固执，注重流程，做事小心，忠诚，事业心重，独当一面，生命力强，意志力强，领导力'
                ],
                'Y3-弱': [
                    '性格：	责任心，敢于担当，大男/女人主义，心地善良，强势，固执，认死理，自我',
                    '财运：	辛苦赚钱，比较守财。精打细算，铁公鸡',
                    '事业：	专业能力，领导和技术，亲历亲为，劳碌，压力大，纪律部队',
                    '婚姻：	专一专注，眼光高，宁缺毋滥，一家之主',
                    '健康：	积劳成病，易有颈椎，腰等病痛，睡眠不好，容易掉发',
                    '状态：	将军命，有纪律，做事有原则，固执，注重流程，做事小心，忠诚，事业心重，独当一面，生命力强，意志力强，领导力'
                ],
                'Y4': [
                    '性格：	责任心，敢于担当，大男/女人主义，心地善良，强势，固执，认死理，自我',
                    '财运：	辛苦赚钱，比较守财。精打细算，铁公鸡',
                    '事业：	专业能力，领导和技术，亲历亲为，劳碌，压力大，纪律部队',
                    '婚姻：	专一专注，眼光高，宁缺毋滥，一家之主',
                    '健康：	积劳成病，易有颈椎，腰等病痛，睡眠不好，容易掉发',
                    '状态：	将军命，有纪律，做事有原则，固执，注重流程，做事小心，忠诚，事业心重，独当一面，生命力强，意志力强，领导力'
                ],
                'H1-强': [
                    '性格：	能说会道，说话直，嘴硬，好面子，说大话，脾气暴，抱怨，三分钟热度，EQ低',
                    '财运：	开口来财，向人要钱，钱财留不住，口舌破财',
                    '销售，饮食，讲师，主持人，律师，政治家',
                    '婚姻：	开始会甜言蜜语，说话不留情面，容易吵架离婚',
                    '健康：	呼吸系统问题，易疲劳，开刀开口，伤疤，胎记，车祸',
                    '状态：	能言善道，脾气不好，健康问题，口才好，开口来财，负面情绪，易得罪人'
                ],
                'H2-次强': [
                    '性格：	能说会道，说话直，嘴硬，好面子，说大话，脾气暴，抱怨，三分钟热度，EQ低',
                    '财运：	开口来财，向人要钱，钱财留不住，口舌破财',
                    '销售，饮食，讲师，主持人，律师，政治家',
                    '婚姻：	开始会甜言蜜语，说话不留情面，容易吵架离婚',
                    '健康：	呼吸系统问题，易疲劳，开刀开口，伤疤，胎记，车祸',
                    '状态：	能言善道，脾气不好，健康问题，口才好，开口来财，负面情绪，易得罪人'
                ],
                'H3-弱': [
                    '性格：	能说会道，说话直，嘴硬，好面子，说大话，脾气暴，抱怨，三分钟热度，EQ低',
                    '财运：	开口来财，向人要钱，钱财留不住，口舌破财',
                    '销售，饮食，讲师，主持人，律师，政治家',
                    '婚姻：	开始会甜言蜜语，说话不留情面，容易吵架离婚',
                    '健康：	呼吸系统问题，易疲劳，开刀开口，伤疤，胎记，车祸',
                    '状态：	能言善道，脾气不好，健康问题，口才好，开口来财，负面情绪，易得罪人'
                ],
                'H4': [
                    '性格：	能说会道，说话直，嘴硬，好面子，说大话，脾气暴，抱怨，三分钟热度，EQ低',
                    '财运：	开口来财，向人要钱，钱财留不住，口舌破财',
                    '销售，饮食，讲师，主持人，律师，政治家',
                    '婚姻：	开始会甜言蜜语，说话不留情面，容易吵架离婚',
                    '健康：	呼吸系统问题，易疲劳，开刀开口，伤疤，胎记，车祸',
                    '状态：	能言善道，脾气不好，健康问题，口才好，开口来财，负面情绪，易得罪人'
                ],
                'L1-强': [
                    '性格：	亲和力，人缘好，交际一流，思维细腻，情感丰富，审美力强遇事优柔寡断，爱幻想，疑心重，爱美，适合闪亮的东西',
                    '财运：	靠人际关系来财，把钱花在家人女人身上，守不住财',
                    '事业：	外交官，交际高手，处理关系',
                    '婚姻：	心思敏感，异性缘强，婚外情，三角恋，偏桃花，婚姻不顺，桃花多，异性纠葛多',
                    '健康：	皮肤肠胃问题，易忧郁症，躁郁症',
                    '状态：	公共关系很好，气氛带动者，公共焦点人物，长辈缘，，守不住财，矛盾，容易失控'
                ],
                'L2-次强': [
                    '性格：	亲和力，人缘好，交际一流，思维细腻，情感丰富，审美力强遇事优柔寡断，爱幻想，疑心重，爱美，适合闪亮的东西',
                    '财运：	靠人际关系来财，把钱花在家人女人身上，守不住财',
                    '事业：	外交官，交际高手，处理关系',
                    '婚姻：	心思敏感，异性缘强，婚外情，三角恋，偏桃花，婚姻不顺，桃花多，异性纠葛多',
                    '健康：	皮肤肠胃问题，易忧郁症，躁郁症',
                    '状态：	公共关系很好，气氛带动者，公共焦点人物，长辈缘，，守不住财，矛盾，容易失控'
                ],
                'L3-弱': [
                    '性格：	亲和力，人缘好，交际一流，思维细腻，情感丰富，审美力强遇事优柔寡断，爱幻想，疑心重，爱美，适合闪亮的东西',
                    '财运：	靠人际关系来财，把钱花在家人女人身上，守不住财',
                    '事业：	外交官，交际高手，处理关系',
                    '婚姻：	心思敏感，异性缘强，婚外情，三角恋，偏桃花，婚姻不顺，桃花多，异性纠葛多',
                    '健康：	皮肤肠胃问题，易忧郁症，躁郁症',
                    '状态：	公共关系很好，气氛带动者，公共焦点人物，长辈缘，，守不住财，矛盾，容易失控'
                ],
                'L4': [
                    '性格：	亲和力，人缘好，交际一流，思维细腻，情感丰富，审美力强遇事优柔寡断，爱幻想，疑心重，爱美，适合闪亮的东西',
                    '财运：	靠人际关系来财，把钱花在家人女人身上，守不住财',
                    '事业：	外交官，交际高手，处理关系',
                    '婚姻：	心思敏感，异性缘强，婚外情，三角恋，偏桃花，婚姻不顺，桃花多，异性纠葛多',
                    '健康：	皮肤肠胃问题，易忧郁症，躁郁症',
                    '状态：	公共关系很好，气氛带动者，公共焦点人物，长辈缘，，守不住财，矛盾，容易失控'
                ],
                'W1-强': [
                    '性格：	聪明，鬼子多，想法多，创意多，反应快，疑心重，不易相信别人',
                    '财运：	偏财，暗财，快财，来的快去的快，引发负债',
                    '事业：	偏门，美业，创意行业，艺术家，，演员',
                    '婚姻：	感情多变不安分，外遇，三角关系，外国情缘，离婚',
                    '健康：	心脏，突发性疾病，血光之灾',
                    '状态	善变，解决问题，极端，多灾难'
                ],
                'W2-次强': [
                    '性格：	聪明，鬼子多，想法多，创意多，反应快，疑心重，不易相信别人',
                    '财运：	偏财，暗财，快财，来的快去的快，引发负债',
                    '事业：	偏门，美业，创意行业，艺术家，，演员',
                    '婚姻：	感情多变不安分，外遇，三角关系，外国情缘，离婚',
                    '健康：	心脏，突发性疾病，血光之灾',
                    '状态	善变，解决问题，极端，多灾难'
                ],
                'W3-弱': [
                    '性格：	聪明，鬼子多，想法多，创意多，反应快，疑心重，不易相信别人',
                    '财运：	偏财，暗财，快财，来的快去的快，引发负债',
                    '事业：	偏门，美业，创意行业，艺术家，，演员',
                    '婚姻：	感情多变不安分，外遇，三角关系，外国情缘，离婚',
                    '健康：	心脏，突发性疾病，血光之灾',
                    '状态	善变，解决问题，极端，多灾难'
                ],
                'W4': [
                    '性格：	聪明，鬼子多，想法多，创意多，反应快，疑心重，不易相信别人',
                    '财运：	偏财，暗财，快财，来的快去的快，引发负债',
                    '事业：	偏门，美业，创意行业，艺术家，，演员',
                    '婚姻：	感情多变不安分，外遇，三角关系，外国情缘，离婚',
                    '健康：	心脏，突发性疾病，血光之灾',
                    '状态	善变，解决问题，极端，多灾难'
                ],
                'J1-强': [
                    '性格：	重情义，相信朋友，乐于助人，敢冒险，胆大，易冲动，易被骗',
                    '财运：	喜欢投资容易失败亏本，努力拼搏，留不住钱，出钱快，容易负债',
                    '事业：	投资，策划公司',
                    '婚姻：	不重视对方，容易离婚（女）',
                    '健康：	肝肾问题，糖尿病，易引发车祸，开刀，死亡',
                    '状态	大胆，大企业家，易冲动，讲义气，大哥大个性，不容易相信人，起伏大，贫富两级化'
                ],
                'J2-次强': [
                    '性格：	重情义，相信朋友，乐于助人，敢冒险，胆大，易冲动，易被骗',
                    '财运：	喜欢投资容易失败亏本，努力拼搏，留不住钱，出钱快，容易负债',
                    '事业：	投资，策划公司',
                    '婚姻：	不重视对方，容易离婚（女）',
                    '健康：	肝肾问题，糖尿病，易引发车祸，开刀，死亡',
                    '状态	大胆，大企业家，易冲动，讲义气，大哥大个性，不容易相信人，起伏大，贫富两级化'
                ],
                'J3-弱': [
                    '性格：	重情义，相信朋友，乐于助人，敢冒险，胆大，易冲动，易被骗',
                    '财运：	喜欢投资容易失败亏本，努力拼搏，留不住钱，出钱快，容易负债',
                    '事业：	投资，策划公司',
                    '婚姻：	不重视对方，容易离婚（女）',
                    '健康：	肝肾问题，糖尿病，易引发车祸，开刀，死亡',
                    '状态	大胆，大企业家，易冲动，讲义气，大哥大个性，不容易相信人，起伏大，贫富两级化'
                ],
                'J4': [
                    '性格：	重情义，相信朋友，乐于助人，敢冒险，胆大，易冲动，易被骗',
                    '财运：	喜欢投资容易失败亏本，努力拼搏，留不住钱，出钱快，容易负债',
                    '事业：	投资，策划公司',
                    '婚姻：	不重视对方，容易离婚（女）',
                    '健康：	肝肾问题，糖尿病，易引发车祸，开刀，死亡',
                    '状态	大胆，大企业家，易冲动，讲义气，大哥大个性，不容易相信人，起伏大，贫富两级化'
                ],
                // Add more alphaberts and their explanations as needed
            };
            // Lookup explanation based on the matched number value
            const explanations = alphabertExplanations[alphabert];
            if (explanations) {
                return explanations.join('<br>'); // Join paragraphs with line breaks
            }

            // Lookup explanation based on the alphabert value
            const explanation = alphabertExplanations[alphabert] || 'No explanation found';
            return explanation;
        }
        
         