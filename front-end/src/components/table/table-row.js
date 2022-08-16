import react from "react";
import "./table-row.css";

export default function Trow(props) {
    let classValue = "priority "
    switch(props.prioridade){
        case "Alta":
            classValue = classValue + "high";
            break;
        case "Média":
            classValue = classValue + "med";
            break;
        default:
            classValue = classValue + "low";
    }
    return (
        <tr>
            <td>{props.descricao}</td>
            <td>{props.nome}</td>
            {/* como colocar condição para trocar estilo? */}
            <td>
                <p className = {classValue}>{props.prioridade}</p>
                <div className="icons">
                    <span className="material-icons edit">edit</span>
                    <span className="material-icons delete">delete</span>
                </div>
            </td>
        </tr>
    )
}