import {useState} from "react";
import '../../assets/styles/Quizz.css'

const answers1 = ["Por corchetes, comas, numeros, letras", "signos", "imagenes"]
const answers2 = ["Diagrama de Veen, Extensión y Comprensión.", "Mediante paréntesis o llaves.", "Extensión y Comprensión."]
const answers3 = ["A={1,2,3,4,9}","B={1,2,3,7,9}","C={1,2,3,7,8}"];
const answers4 = ["1", "2", "3"];
const answers5 = ["A=|10|", "B=|6|", "A=|6|", "B=|10|"]
const answers6 = ["6", "5", "2"]
const answers7 = ["51", "6", "24"]

function FormQuizz() {
  const [, setState] = useState("");
  const handlerChange = e => setState(e.target.value);
  return (
    <>
      <div className="radio-buttons">
        <label>Cual es la manera correcta de escribir un conjunto.</label>
          {answers1.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="radio-group"
                onClick={handlerChange}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
      </div>  
      <div className="radio-buttons">
        <label>¿Como se representan los conjuntos?</label>
          {answers2.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="radio-group"
                onClick={handlerChange}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
      </div>  
      <div className="radio-buttons">
        <label>Dado los siguientes elementos 1,2,3,7,9 , a que conjunto pertenecen.</label>
          {answers3.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="radio-group"
                onClick={handlerChange}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
      </div>  
      <div className="radio-buttons">
        <label>¿Cuantos elementos hay en el conjunto A=&#123;manzana, pastel, durazno&#125;?</label>
          {answers4.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="radio-group"
                onClick={handlerChange}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
      </div>  
      <div className="radio-buttons">
        <label>Dado el siguiente conjunto A=&#123;1,2,5,7,4,7,4,2,3,5&#125; cual es su cardinalidad</label>
          {answers5.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="radio-group"
                onClick={handlerChange}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
      </div> 
      <div className="radio-buttons">
        <label>Dado los siguientes conjuntos A=&#123;1,2,5,7,4,7,4,2,3,5&#125; B=&#123;2,3,6,8,4,1,7,9,2,3&#125; cual es el resultado de la siguiente operación: A-B</label>
          {answers6.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="radio-group"
                onClick={handlerChange}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
      </div> 
      <div className="radio-buttons">
        <label>Dado los siguientes conjuntos A=&#123;11,26,51,6,63,76&#125; B=&#123;12,17,24,40,51,83&#125; cual es el resultado de la siguiente operación: Intersección A y B</label>
          {answers7.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="radio-group"
                onClick={handlerChange}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
      </div> 
    </>
    );
}

export default FormQuizz;