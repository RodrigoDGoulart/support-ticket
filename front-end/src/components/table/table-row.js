import react from "react";
import "./table-row.css";
import FormDialog from "../dialog/dialog";

export default function Trow(props) {

    const [open, setOpen] = react.useState(false);

    let classValue = "priority "
    switch (props.prioridade) {
        case "Alta":
            classValue = classValue + "high";
            break;
        case "Média":
            classValue = classValue + "med";
            break;
        default:
            classValue = classValue + "low";
    }

    const handleClickTicket = () => {
        setOpen(true);
    }

    return (
        <>
            <FormDialog open={open} setOpen={setOpen} descricao={props.descricao} nome={props.nome} prioridade={props.prioridade} listTickets={props.listTickets} setListTickets={props.setListTickets}/>
            <tr>
                <td>{props.descricao}</td>
                <td>{props.nome}</td>
                <td>
                    <p className={classValue}>{props.prioridade}</p>
                </td>
            </tr>
        </>
    )
}