document.getElementById('generate-btn').addEventListener('click', () => {
    const ssid = document.getElementById('ssid').value;
    const password = document.getElementById('password').value;
    const encryption = document.getElementById('encryption').value;
    const qrcodeContainer = document.getElementById('qrcode');
    const printBtn = document.getElementById('print-btn');

    qrcodeContainer.innerHTML = '';

    if (!ssid) {
        alert('Please enter an SSID.');
        return;
    }

    let wifiString;
    if (encryption === 'nopass') {
        wifiString = `WIFI:T:nopass;S:${ssid};;`;
    } else {
        if (!password) {
            alert('Please enter a password.');
            return;
        }
        wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
    }

    new QRCode(qrcodeContainer, {
        text: wifiString,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    document.getElementById('print-ssid').textContent = ssid;
    document.getElementById('print-password').textContent = (encryption === 'nopass') ? 'N/A' : password;

    const printQrcodeContainer = document.getElementById('print-qrcode');
    printQrcodeContainer.innerHTML = '';
    new QRCode(printQrcodeContainer, {
        text: wifiString,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    printBtn.classList.remove('hidden');
});

document.getElementById('print-btn').addEventListener('click', () => {
    window.print();
});
