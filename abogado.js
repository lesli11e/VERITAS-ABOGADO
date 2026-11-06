
const abogados = {
    1: {
        nombre: "Abogado/a 1 MARTINEZ GARCIA",
        especialidad: "Derecho Penal",
        descripcion: "Profesional especializado en asesoría y defensa jurídica en materia penal, con compromiso con el debido proceso y los derechos de sus clientes.",
        area: "Derecho Penal"
    },

    2: {
        nombre: "Abogado/a 2 KATHERINE CHANHUALA GARCIA",
        especialidad: "Derecho Civil",
        descripcion: "Profesional dedicado a la orientación y solución de conflictos civiles, contratos, obligaciones y otros asuntos legales.",
        area: "Derecho Civil"
    },

    3: {
        nombre: "Abogado/a 3 KENIA AMELI GARCIA",
        especialidad: "Derecho Familiar",
        descripcion: "Profesional enfocado en asuntos de familia, alimentos, tenencia, divorcios y protección de los derechos familiares.",
        area: "Derecho Familiar"
    },

    4: {
        nombre: "Abogado/a 4 LESLI MONICA GARCIA",
        especialidad: "Derecho Laboral",
        descripcion: "Profesional dedicado a la asesoría sobre derechos laborales, relaciones de trabajo y solución de controversias laborales.",
        area: "Derecho Laboral"
    }
};

// OBTENER EL ABOGADO SELECCIONADO
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const abogado = abogados[id];

if (abogado) {

    document.getElementById("lawyer-name").textContent =
        abogado.nombre;

    document.getElementById("lawyer-specialty").textContent =
        abogado.especialidad;

    document.getElementById("lawyer-description").textContent =
        abogado.descripcion;

    document.getElementById("lawyer-area").textContent =
        abogado.area;

    document.title = abogado.nombre + " | VERITAS ABOGADOS";

    document.getElementById("lawyer-contact").href =
        "https://wa.me/51987654321?text=" +
        encodeURIComponent("Hola, deseo solicitar una consulta con " + abogado.nombre);

} else {
    document.querySelector(".profile-information").innerHTML =
        "<h1>Abogado no encontrado</h1>" +
        '<a href="index.html#equipo" class="btn btn-gold">Volver al equipo</a>';
}
