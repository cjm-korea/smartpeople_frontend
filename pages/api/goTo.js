import fetch from "node-fetch";

// Client must passed token for use this function
export default async function handler(req, res) {
    const apiUrl = 'http://localhost:8000/student/goTo';
    const bodyData = {
        companyName: req.body.companyName,
        myNumber: req.body.myNumber
    }

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData)
    })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    console.log(response);
    // await res.json(response.status);
}