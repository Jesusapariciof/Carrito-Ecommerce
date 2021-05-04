//Variables (1)
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = []; // (12)

//Funciones EventListener 
cargarEventListener()
function cargarEventListener(){//(3)

    listaCursos.addEventListener('click', agregarCurso);//(4)

    carrito.addEventListener('click', eliminarCurso); //(27)

    vaciarCarritoBtn.addEventListener('click', ()=>{ //(33)
        articulosCarrito = [];

        limpiarHtml();//(34)
    })
}


//Funciones

function agregarCurso(e){//(5)
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito'))//(7)
    console.log(e.target.classList.contains('agregar-carrito'));//(6)
   const cursoSeleccionado= e.target.parentElement.parentElement //(8)

   leerDatosCurso(cursoSeleccionado)//(10)
}


function eliminarCurso(e){//(28)
    console.log(e.target.classList)
    if(e.target.classList.contains('borrar-curso')){//(29)
        const cursoId = e.target.getAttribute('data-id')//(30)

        articulosCarrito = articulosCarrito.filter(curso=> curso.id !== cursoId);//(31)

        carritoHtml() //(32)
    }
}


function leerDatosCurso(curso){//(9)
console.log(curso)

const infoCurso = { //(11)
    imagen: curso.querySelector('img').src,
    nombre: curso.querySelector('h4').textContent,
    precio: curso.querySelector('span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}

console.log(infoCurso)

    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id) //(20)
    if(existe){//(22)
        const cursos = articulosCarrito.map(curso=>{//(23)
            if(curso.id === infoCurso.id){//(24)
                curso.cantidad++;
                return curso;
            }else{ //(25)
                return curso;
            }
        })
         articulosCarrito = [...cursos]//(26)
    }else{
        articulosCarrito = [...articulosCarrito, infoCurso]//(21)
    }


    // articulosCarrito = [...articulosCarrito, infoCurso]//(12)

    console.log(articulosCarrito)

    carritoHtml()//(15)
}


function carritoHtml(){ //(13)


limpiarHtml()//(19)


    articulosCarrito.forEach(curso=>{//(14)

        const row = document.createElement('tr');//(14.1)
        //(14.2)
        row.innerHTML = ` 
        <td> <img src="${curso.imagen}" </td>
        <td> ${curso.nombre}</td>
        <td> ${curso.precio}</td>
        <td> ${curso.cantidad}</td>
        <td> 
        <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a> 
        </td>
        
        `;

        contenedorCarrito.appendChild(row)//(16)
    })

}

function limpiarHtml(){ //(17)
contenedorCarrito.innerHTML = "" //(18)
}