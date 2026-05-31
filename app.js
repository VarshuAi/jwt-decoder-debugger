
            const tokenInput = document.getElementById('jwt-token');
            const headerBox = document.getElementById('jwt-header');
            const payloadBox = document.getElementById('jwt-payload');

            function decodeJWT() {
                const parts = tokenInput.value.trim().split('.');
                if (parts.length !== 3) {
                    headerBox.innerText = 'Invalid token structure';
                    payloadBox.innerText = 'Invalid token structure';
                    return;
                }
                try {
                    const header = JSON.parse(atob(parts[0]));
                    const payload = JSON.parse(atob(parts[1]));
                    headerBox.innerHTML = JSON.stringify(header, null, 2);
                    payloadBox.innerHTML = JSON.stringify(payload, null, 2);
                } catch(e) {
                    headerBox.innerText = 'Parsing Error';
                    payloadBox.innerText = e.message;
                }
            }
            tokenInput.addEventListener('input', decodeJWT);
            tokenInput.value = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
            decodeJWT();
        