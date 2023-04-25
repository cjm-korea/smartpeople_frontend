import fetch from "node-fetch";

export default async function handler(req, res) {
    const reqData = await JSON.parse(req.body);
    const apiUrl = 'http://localhost:8000/student/goTo';
    const bodyData = {
        companyName: reqData.companyName,
        myNumber: reqData.myNumber
    }

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData)
    })
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
    // console.log(response);
    await res.json(response.status);
}