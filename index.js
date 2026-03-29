const buttons = document.querySelectorAll('.packages__buttons button');
const rows = document.querySelectorAll('tbody tr');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        // 🔹 Active button switch
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 🔹 NON STUDENTS (default)
        if(btn.classList.contains('non-students')) {

            const data = [
                ['6 weeks', '2,450'],
                ['6 weeks', '2,700'],
                ['3 weeks', '2,300'],
                ['3 weeks', '3,050'],
                ['4 weeks', '3,100'],
                ['2 - 4 weeks', '1,600'],
                ['2 - 4 weeks', '2,300'],
                ['2 - 4 weeks', '2,600'],
            ];

            updateTable(data);
        }

        // 🔹 STUDENTS
        else if(btn.classList.contains('students')) {

            const data = [
                ['6 weeks', '2,200'],
                ['6 weeks', '2,400'],
                ['3 weeks', '2,000'],
                ['3 weeks', '2,700'],
                ['4 weeks', '2,800'],
                ['2 - 4 weeks', '1,300'],
                ['2 - 4 weeks', '2,000'],
                ['2 - 4 weeks', '2,300'],
            ];

            updateTable(data);
        }

        // 🔹 LICENSED
        else if(btn.classList.contains('license')) {

            const data = [
                ['5 weeks', '2,800'],
                ['5 weeks', '3,000'],
                ['2 weeks', '2,500'],
                ['2 weeks', '3,200'],
                ['3 weeks', '3,300'],
                ['1 - 3 weeks', '1,900'],
                ['1 - 3 weeks', '2,600'],
                ['1 - 3 weeks', '2,900'],
            ];

            updateTable(data);
        }

    });
});


// 🔹 Function to update table
function updateTable(data) {
    rows.forEach((row, index) => {
        row.children[1].textContent = data[index][0]; // duration
        row.children[2].textContent = data[index][1]; // price
    });
}