import React from "react";
import ModalComponent from './Modal';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Peso</th>
                <th>Tamanho</th>
                <th>Planeta</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    if (Array.isArray(props.peopleData.results)) {
        const rows = props.peopleData.results.map((person, index) => {
            return (
            <tr className='linha' key={index}>
                <td>{person.name}</td>
                <td>{person.mass}</td>
                <td>{person.height}</td>
                <td><ModalComponent planetUrl={person.homeworld}/></td>
            </tr>
            );
        });

        return <tbody>{rows}</tbody>;
    }
}

const TableComponent = props => {
    const { peopleData } = props;
    return (
        <div>
            <table>
                <TableHeader />
                <TableBody peopleData={peopleData} />
            </table>
        </div>
    );
}

export default TableComponent;