function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isDesktop = !isMobile;
    const isIOS = /iphone|ipad|ipod/i.test(userAgent);
    const isAndroid = /android/i.test(userAgent);
    
    return {
        isMobile,
        isDesktop,
        isIOS,
        isAndroid
    };
}

function openWhatsApp(phoneNumber, message) {
    const device = detectDevice();
    const encodedMessage = encodeURIComponent(message);
    
    // Función para intentar múltiples métodos
    function tryOpenWhatsApp() {
        const methods = [];
        
        if (device.isMobile) {
            // Para móviles, priorizar la app nativa
            methods.push(`whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`);
            methods.push(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
            methods.push(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`);
        } else {
            // Para desktop, priorizar web.whatsapp.com
            methods.push(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`);
            methods.push(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
            methods.push(`whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`);
        }
        
        // Intentar el primer método
        let currentMethod = 0;
        
        function tryNext() {
            if (currentMethod < methods.length) {
                const url = methods[currentMethod];
                console.log(`Intentando método ${currentMethod + 1}: ${url}`);
                
                // Crear un enlace temporal y hacer clic
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                
                // Agregar al DOM temporalmente
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                currentMethod++;
                
                // Si no es el último método, esperar un poco y probar el siguiente
                if (currentMethod < methods.length) {
                    setTimeout(() => {
                        // Verificar si la ventana se abrió correctamente
                        // Si no, intentar el siguiente método
                        tryNext();
                    }, 1500);
                }
            } else {
                // Si todos los métodos fallaron, mostrar el mensaje para copiar
                showFallbackOption(phoneNumber, message);
            }
        }
        
        tryNext();
    }
    
    tryOpenWhatsApp();
}

function showFallbackOption(phoneNumber, message) {
    // Crear modal con opciones de respaldo
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            font-family: Arial, sans-serif;
        ">
            <div style="
                background: white;
                padding: 30px;
                border-radius: 10px;
                max-width: 500px;
                width: 90%;
                text-align: center;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            ">
                <h3 style="color: #25D366; margin-bottom: 20px;">
                    📱 Opciones de WhatsApp
                </h3>
                <p style="margin-bottom: 20px; color: #333;">
                    Elige cómo quieres abrir WhatsApp:
                </p>
                <div style="margin-bottom: 20px;">
                    <button onclick="window.open('https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}', '_blank')" 
                            style="
                                background: #25D366;
                                color: white;
                                border: none;
                                padding: 12px 24px;
                                margin: 5px;
                                border-radius: 25px;
                                cursor: pointer;
                                font-size: 14px;
                                display: block;
                                width: 100%;
                                margin-bottom: 10px;
                            ">
                        🌐 WhatsApp Web
                    </button>
                    <button onclick="window.open('https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}', '_blank')" 
                            style="
                                background: #128C7E;
                                color: white;
                                border: none;
                                padding: 12px 24px;
                                margin: 5px;
                                border-radius: 25px;
                                cursor: pointer;
                                font-size: 14px;
                                display: block;
                                width: 100%;
                                margin-bottom: 10px;
                            ">
                        📱 WhatsApp App
                    </button>
                </div>
                <div style="
                    background: #f5f5f5;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    text-align: left;
                ">
                    <strong>Mensaje a enviar:</strong><br>
                    <div style="
                        background: white;
                        padding: 10px;
                        border-radius: 5px;
                        margin-top: 8px;
                        border: 1px solid #ddd;
                        font-size: 12px;
                        max-height: 150px;
                        overflow-y: auto;
                    ">${message}</div>
                    <button onclick="copyToClipboard('${message.replace(/'/g, "\\'")}'); this.innerHTML='✅ Copiado!'" 
                            style="
                                background: #007bff;
                                color: white;
                                border: none;
                                padding: 8px 16px;
                                margin-top: 10px;
                                border-radius: 15px;
                                cursor: pointer;
                                font-size: 12px;
                            ">
                        📋 Copiar mensaje
                    </button>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="
                            background: #dc3545;
                            color: white;
                            border: none;
                            padding: 10px 20px;
                            border-radius: 20px;
                            cursor: pointer;
                            font-size: 14px;
                        ">
                    ✖️ Cerrar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback para navegadores más antiguos
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
    }
}

// Funciones actualizadas para tus formularios
function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const getValue = id => document.getElementById(id).value;
    const getSelectedText = id => {
        const select = document.getElementById(id);
        return select.options[select.selectedIndex]?.text || '';
    };
    
    const datos = {
        nombre: getValue('first-name'),
        apellido: getValue('last-name'),
        email: getValue('email'),
        telefono: getValue('phone'),
        direccion: getValue('address'),
        provincia: getSelectedText('provincia'),
        canton: getSelectedText('canton'),
        distrito: getSelectedText('distrito'),
        fecha: getValue('fecha'),
        hora: getValue('hora')
    };
    
    const mensaje = `Nueva cita:
*Nombre:* ${datos.nombre}
*Apellido:* ${datos.apellido}
*Email:* ${datos.email}
*Teléfono:* ${datos.telefono}
*Dirección:* ${datos.direccion}
*Ubicación:* ${datos.provincia} > ${datos.canton} > ${datos.distrito}
*Fecha y hora:* ${datos.fecha} a las ${datos.hora}`;
    
    // Usar la nueva función universal
    openWhatsApp('50689554444', mensaje);
}

function submitFormContact(event) {
    event.preventDefault();
    const form = event.target;
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const getValue = id => document.getElementById(id).value;
    
    const datos = {
        nombre: getValue('first-name-contact'),
        apellido: getValue('last-name-contact'),
        email: getValue('email-contact'),
        telefono: getValue('phone-contact'),
        asunto: getValue('subject-contact'),
        mensaje: getValue('message-contact')
    };
    
    const mensaje = `Nuevo mensaje de contacto:
*Nombre:* ${datos.nombre}
*Apellido:* ${datos.apellido}
*Email:* ${datos.email}
*Teléfono:* ${datos.telefono}
*Asunto:* ${datos.asunto}
*Mensaje:* ${datos.mensaje}`;
    
    // Usar la nueva función universal
    openWhatsApp('50689554444', mensaje);
}