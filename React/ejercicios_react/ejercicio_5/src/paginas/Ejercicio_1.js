import Card from "../componentes/Card";

function Ejercicio_1() {
  return (
    <div className="row">
      <Card 
        title="Titulo 1"
        paragraph="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        href="https://pymescomercial.com"
        linkText="Más información"
        imgUrl="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
      />
      <Card 
        title="Titulo 2"
        paragraph="lorem ipsum dolor sit amet lorem ipsum dolor sit amet."
        href="https://pymescomercial.com"
        linkText="Quienes somos"
        imgUrl="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
      />
    </div>
  );
}

export default Ejercicio_1;