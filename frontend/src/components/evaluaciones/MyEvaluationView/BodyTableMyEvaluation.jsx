import { useEffect, useState } from "react";
import { MONTHS } from "../../../constantes/evaluations/MyEvaluation";

const clasificarData = (dataParaClasificar) => {
  const dataClasificada = MONTHS.map((month) => {
    const dataPerMonth = dataParaClasificar.filter(
      (item) => new Date(item.date).getMonth() == month.indice
    );
    return { month: month, data: dataPerMonth };
  });
  return dataClasificada;
};

function BodyTableMyEvaluation({ dataPerUser, actualizarPromedio, fields }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filtrarVacios = clasificarData(dataPerUser).filter(
      (item) => item.data.length > 0
    );
    const promedioFinal = filtrarVacios.reduce(
      (accumulator, currentValue) => accumulator + currentValue.data[0].promedio,
      0
    )/filtrarVacios.length;
    isNaN(promedioFinal)
      ? actualizarPromedio("-")
      : actualizarPromedio(promedioFinal);
    
    setData([...filtrarVacios]);
  }, [dataPerUser]);


  return (
    <tbody className="bg-cv-primary">
      {data.map((item, index) => (
        <tr className="border-b border-cv-secondary" key={index}>
          <th className="px-6 py-4 whitespace-nowrap">
            {item.month.mes.charAt(0).toUpperCase() + item.month.mes.slice(1)}
          </th>
          {
            fields.map((element, index)=>{
              return (
                <td key={index} className="px-6 py-4 whitespace-nowrap">
                {item.data[0][element]}
                </td>
              )
            })
          }
        </tr>
      ))}
    </tbody>
  );
}

export default BodyTableMyEvaluation;
