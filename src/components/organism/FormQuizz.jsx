import {useState} from "react";
import Button from "../atoms/Button";
import '../../assets/styles/Quizz.css'

const answers1 = ["Por corchetes, comas, numeros, letras", "signos", "imagenes"]
const correctAnswer1 = answers1[0];
const answers2 = ["Diagrama de Veen, Extensión y Comprensión.", "Mediante paréntesis o llaves.", "Extensión y Comprensión."]
const correctAnswer2 = answers2[0];
const answers3 = ["A={1,2,3,4,9}","B={1,2,3,7,9}","C={1,2,3,7,8}"]
const correctAnswer3 = answers3[1];
const answers4 = ["1", "2", "3"]
const correctAnswer4 = answers4[2];
const answers5 = ["A=|10|", "B=|6|", "A=|6|", "B=|10|"]
const correctAnswer5 = answers5[2];
const answers6 = ["6", "5", "2"]
const correctAnswer6 = answers6[1];
const answers7 = ["51", "6", "24"]
const correctAnswer7 = answers7[0];

function FormQuizz() {

  const [selectedAnswer1, setSelectedAnswer1] = useState("");
  const [result1, setResult1] = useState("");

  const handlerChange1 = (e) => setSelectedAnswer1(e.target.value);

  const enviar1 = () => {
    if(selectedAnswer1 === correctAnswer1){
      setResult1 ("¡Respuesta correcta!");
    }else {
      setResult1("Respuesta incorrecta");
    }
  };

  const [selectedAnswer2, setSelectedAnswer2] = useState("");
  const [result2, setResult2] = useState("");

  const handlerChange2 = (e) => setSelectedAnswer2(e.target.value);

  const enviar2 = () => {
    if(selectedAnswer2 === correctAnswer2){
      setResult2 ("¡Respuesta correcta!");
    }else {
      setResult2("Respuesta incorrecta");
    }
  };

  const [selectedAnswer3, setSelectedAnswer3] = useState("");
  const [result3, setResult3] = useState("");

  const handlerChange3 = (e) => setSelectedAnswer3(e.target.value);

  const enviar3 = () => {
    if(selectedAnswer3 === correctAnswer3){
      setResult3 ("¡Respuesta correcta!");
    }else {
      setResult3("Respuesta incorrecta");
    }
  };

  const [selectedAnswer4, setSelectedAnswer4] = useState("");
  const [result4, setResult4] = useState("");

  const handlerChange4 = (e) => setSelectedAnswer4(e.target.value);

  const enviar4 = () => {
    if(selectedAnswer4 === correctAnswer4){
      setResult4 ("¡Respuesta correcta!");
    }else {
      setResult4("Respuesta incorrecta");
    }
  };

  const [selectedAnswer5, setSelectedAnswer5] = useState("");
  const [result5, setResult5] = useState("");

  const handlerChange5 = (e) => setSelectedAnswer5(e.target.value);

  const enviar5 = () => {
    if(selectedAnswer5 === correctAnswer5){
      setResult5 ("¡Respuesta correcta!");
    }else {
      setResult5("Respuesta incorrecta");
    }
  };

  const [selectedAnswer6, setSelectedAnswer6] = useState("");
  const [result6, setResult6] = useState("");

  const handlerChange6 = (e) => setSelectedAnswer6(e.target.value);

  const enviar6 = () => {
    if(selectedAnswer6 === correctAnswer6){
      setResult6 ("¡Respuesta correcta!");
    }else {
      setResult6("Respuesta incorrecta");
    }
  };

  const [selectedAnswer7, setSelectedAnswer7] = useState("");
  const [result7, setResult7] = useState("");

  const handlerChange7 = (e) => setSelectedAnswer7(e.target.value);

  const enviar7 = () => {
    if(selectedAnswer7 === correctAnswer7){
      setResult7 ("¡Respuesta correcta!");
    }else {
      setResult7("Respuesta incorrecta");
    }
  };

  return (
    <>
      <h1 className="tituloquizz">Prueba tus conocimientos con el siguiente Quizz</h1>
      <div className="radio-buttons">
        <label>Cual es la manera correcta de escribir un conjunto.</label>
          {answers1.map((value) => (
            <label key={value}>
              <input
                className="input"
                type="radio"
                name="radio-group1"
                onClick={handlerChange1}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
          <Button handlerClick={enviar1} type="button" altura={false} size={false} value="Enviar"/>
      </div>  
      <p className="resultadoq">{result1}</p> 
      <div className="radio-buttons">
        <label>¿Como se representan los conjuntos?</label>
          {answers2.map((value) => (
            <label key={value}>
              <input
                className="input"
                type="radio"
                name="radio-group2"
                onClick={handlerChange2}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
          <Button handlerClick={enviar2} type="button" altura={false} size={false} value="Enviar"/>
      </div> 
      <p className="resultadoq">{result2}</p> 
      <div className="radio-buttons">
        <label>Dado los siguientes elementos 1,2,3,7,9 , a que conjunto pertenecen.</label>
          {answers3.map((value) => (
            <label key={value}>
              <input
                className="input"
                type="radio"
                name="radio-group3"
                onClick={handlerChange3}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
          <Button handlerClick={enviar3} type="button" altura={false} size={false} value="Enviar"/>
      </div>  
      <p className="resultadoq">{result3}</p>
      <div className="radio-buttons">
        <label>¿Cuantos elementos hay en el conjunto A=&#123;manzana, pastel, durazno&#125;?</label>
          {answers4.map((value) => (
            <label key={value}>
              <input
                className="input"
                type="radio"
                name="radio-group4"
                onClick={handlerChange4}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
          <Button handlerClick={enviar4} type="button" altura={false} size={false} value="Enviar"/>
      </div>  
      <p className="resultadoq">{result4}</p>
      <div className="radio-buttons">
        <label>Dado el siguiente conjunto A=&#123;1,2,5,7,4,7,4,2,3,5&#125; cual es su cardinalidad</label>
          {answers5.map((value) => (
            <label key={value}>
              <input
                className="input"
                type="radio"
                name="radio-group5"
                onClick={handlerChange5}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
          <Button handlerClick={enviar5} type="button" altura={false} size={false} value="Enviar"/>
      </div> 
      <p className="resultadoq">{result5}</p>
      <div className="radio-buttons">
        <label>Dado los siguientes conjuntos A=&#123;1,2,5,7,4,7,4,2,3,5&#125; B=&#123;2,3,6,8,4,1,7,9,2,3&#125; cual es el resultado de la siguiente operación: A-B</label>
          {answers6.map((value) => (
            <label key={value}>
              <input
                className="input"
                type="radio"
                name="radio-group6"
                onClick={handlerChange6}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
          <Button handlerClick={enviar6} type="button" altura={false} size={false} value="Enviar"/>
      </div> 
      <p className="resultadoq">{result6}</p>
      <div className="radio-buttons">
        <label>Dado los siguientes conjuntos A=&#123;11,26,51,6,63,76&#125; B=&#123;12,17,24,40,51,83&#125; cual es el resultado de la siguiente operación: Intersección A y B</label>
          {answers7.map((value) => (
            <label key={value}>
              <input
                className="input"
                type="radio"
                name="radio-group7"
                onClick={handlerChange7}
                value={value}
              />
              <span className="radio">
                <span />
              </span>
              <span>{value}</span>
            </label>
          ))}
          <Button handlerClick={enviar7} type="button" altura={false} size={false} value="Enviar"/>
      </div> 
      <p className="resultadoq">{result7}</p>
    </>
    );
}

export default FormQuizz;