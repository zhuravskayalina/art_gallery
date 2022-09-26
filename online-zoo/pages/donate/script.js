// max symbol value

const inputAmount = document.querySelector('.input-amount');

inputAmount.addEventListener('input', (event) => {
    const max = 4;
    let valueLength = inputAmount.value.length;
    if (valueLength > max) {
        inputAmount.value = inputAmount.value.substr(0, max)
    }
})

// amount point checked state

const points = document.querySelectorAll('.point');
const sums = document.querySelectorAll('.sum');

points.forEach(point => {

    //hover

    point.addEventListener('mouseover', function (event) {
        const sumNumber = point.dataset.amount;
        const relevantSum = Array.from(sums).find(el => el.dataset.sum === sumNumber);
        relevantSum.classList.add('sum-hover');
    });

    //mouseleave

    point.addEventListener('mouseleave', function (event) {
        const sumNumber = point.dataset.amount;
        const relevantSum = Array.from(sums).find(el => el.dataset.sum === sumNumber);

        if (relevantSum.classList.contains('sum-checked')) return;

        relevantSum.classList.remove('sum-hover');
    });

    //click event

    point.addEventListener('click', function (event) {

        const sumNumber = point.dataset.amount;
        const relevantSum = Array.from(sums).find(el => el.dataset.sum === sumNumber);

        //remove previous point hover

        for (let el of points) {
            if (el.classList.contains('point-checked')) {
                el.classList.remove('point-checked');
            };
        };


        // remove previous sum hover

        for (let sum of sums) {
            if (sum.classList.contains('sum-checked')) {
                sum.classList.remove('sum-checked');
                sum.classList.remove('sum-hover');

            }
        }

        relevantSum.classList.add('sum-checked');
        point.classList.add('point-checked');
    });

});





