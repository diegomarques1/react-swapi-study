import React from "react";

const PreviousButton = props => {
    const previousPage = props.previous;

    if (previousPage != null) {
        return <button type="button" onClick={() => props.updateUrl(previousPage)}>Anterior</button>;
    }
}

const NextButton = props => {
    const nextPage = props.next;

    if (nextPage != null) {
        return <button type="button" onClick={() => props.updateUrl(nextPage)}>Próximo</button>;
    }
}

const ButtonComponent = props => {
    const {peopleData, updateUrl} = props;

    return (
        <div>
            <PreviousButton previous={peopleData.previous} updateUrl={updateUrl}/>
            <NextButton next={peopleData.next} updateUrl={updateUrl}/>
        </div>
    );
}

export default ButtonComponent;