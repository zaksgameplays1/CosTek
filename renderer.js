// renderer.js
document.getElementById('calculateButton').addEventListener('click', calculateEarnings);

document.addEventListener('DOMContentLoaded', function () {
    const dailyGrowthInput = document.getElementById('dailyGrowth');

    // Store the default placeholder value
    const defaultPlaceholder = 'VIP 1 Default: ≈ 2.567%';

    // Set the default value for the dailyGrowth input when the page loads
    dailyGrowthInput.placeholder = defaultPlaceholder;

    // Remove the placeholder once the user starts typing
    dailyGrowthInput.addEventListener('input', function () {
        if (dailyGrowthInput.value.trim() === '') {
            // If the input is empty, restore the default placeholder
            dailyGrowthInput.placeholder = defaultPlaceholder;
        } else {
            // If the input is not empty, remove the placeholder
            dailyGrowthInput.placeholder = '';
        }
    });
});

function calculateEarnings() {
    const initialAssets = parseFloat(document.getElementById('initialAssets').value);
    let dailyGrowthPercentage = document.getElementById('dailyGrowth').value.trim();

    if (dailyGrowthPercentage === '') {
        dailyGrowthPercentage = 0.0254;
    } else {
        dailyGrowthPercentage = parseFloat(dailyGrowthPercentage.replace('%', '')) / 100;
    }

    const numDays = parseInt(document.getElementById('numDays').value);

    if (!isNaN(initialAssets) && !isNaN(dailyGrowthPercentage) && !isNaN(numDays)) {
        const totalEarnings = (initialAssets * Math.pow((1 + dailyGrowthPercentage), numDays)).toFixed(2);
        const earnedAmount = (totalEarnings - initialAssets).toFixed(2);

        document.getElementById('totalEarnings').innerText = `Total Earnings: $${totalEarnings} USDT`;
        document.getElementById('earnedAmount').innerText = `Earned Amount: $${earnedAmount} USDT`;

        // Calculate and display how much more has been earned from the initial assets
        const moreEarned = (totalEarnings - initialAssets).toFixed(2);
        document.getElementById('moreEarned').innerText = `More Earned from Initial Assets: ${moreEarned}`;
    } else {
        document.getElementById('totalEarnings').innerText = 'Invalid input';
        document.getElementById('earnedAmount').innerText = '';
        document.getElementById('moreEarned').innerText = '';
    }
}
