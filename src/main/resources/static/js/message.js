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

    const mensajeCodificado = encodeURIComponent(mensaje);

    window.open(`whatsapp://send?phone=50689554444&text=${mensajeCodificado}`, '_blank', 'width=800,height=600');

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

    const mensajeCodificado = encodeURIComponent(mensaje);
    window.open(`https://wa.me/50689554444?text=${mensajeCodificado}`, '_blank', 'width=800,height=600');

}