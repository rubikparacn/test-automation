try {
    let x = await fetch('http://localhost:5296/Email', {
        headers: {
            'content-type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
            "subject": "Test Fail",
            "body": "Hata detayları için rapor alanını kontrol ediniz",
            "to": [
                "cihan.nalbant@rubikpara.com",
                //   "ismail.sevinc@rubikpara.com",
                //   "onur"
            ]
        })
    })
        .then(t => t.json());
    console.log(x);
} catch (error) {
    //TODO:
    console.log(error)
}