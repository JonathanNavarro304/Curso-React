/* --------------------------------------------
  Comentar temporalmente lo que se vio en el curso
--------------------------------------------- */

/***
import Contenedor from "./components/Contenedor"
import Boton from "./components/Boton"
***/
import Saludo from "./components/Saludo";
import Card from "./components/Card";

const App = () => {
  {
    /*** 
    
  const frameworks = [
    {
      titulo: "React",
      descripcion: "Librería para interfaces dinámicas",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
      titulo: "Vue",
      descripcion: "Framework progresivo de JavaScript",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    },
    {
      titulo: "Angular",
      descripcion: "Framework completo de Google",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
    }
  ]

  ***/
  }

  const frameworks = [
    {
      categoria: "Smartphone",
      producto: "iPhone 13 Pro",
      precio: "$19999.99",
      imagen: "https://ecommerce-gilt-three.vercel.app/images/p1.jpg",
    },
    {
      categoria: "Audio",
      producto: "Audífonos Sony WH-60005M4",
      precio: "$374.00",
      imagen: "https://ecommerce-gilt-three.vercel.app/images/p3.jpg",
    },
    {
      categoria: "Laptop",
      producto: "MacBook Air M2",
      precio: "$30999.00",
      imagen: "https://ecommerce-gilt-three.vercel.app/images/p5.jpg",
    },
  ];

  return (
    <>
      <Saludo name="Productos" edad="3"></Saludo>
      {/***
      <Card
        categoria="Audio"
        producto="Audífonos Sony WH-60005M4"
        precio="$174.00"
        imagen="https://ecommerce-gilt-three.vercel.app/images/p3.jpg"
      ></Card>
 ***/}
      {/***
    <Contenedor>
        <h1>Titulo del Contenedor</h1>
        <p>Este es un contenedor y son una prop.children</p>
      </Contenedor>


      <Boton text="Guardar" color="green" />
      <Boton text="Cancelar" color="red" />
      <br />
      <br />
 ***/}

      {/* 
      {frameworks.map(({ titulo, imagen, descripcion }) => {
        return <Card
          titulo={titulo}
          imagen={imagen}
          descripcion={descripcion}
        />
      })}
      */}

      {frameworks.map(({ categoria, producto, precio, imagen }) => {
        return (
          <Card
            categoria={categoria}
            producto={producto}
            precio={precio}
            imagen={imagen}
          ></Card>
        );
      })}
    </>
  );
};

export default App;
