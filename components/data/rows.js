export var rows = [{ userName: '', myNumber: '', parentNumber: '' }]

export function appendData(userName, myNumber, parentNumber) {
    const studentData = { userName, myNumber, parentNumber };
    // console.log(studentData);
    rows.concat(studentData);

    // rows.push(studentData)
}

