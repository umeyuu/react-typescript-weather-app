type ResultsPropsType = {
    results: {
        country: string;
        cityName: string;
        temperatuere: string;
        conditionText: string;
        icon: string;
    }
}

const Results = (props: ResultsPropsType) => {
    return (
        <div>
            {props.results.country && <div>{props.results.country}</div>}
            {props.results.cityName && <div>{props.results.cityName}</div>}
            {props.results.temperatuere && <div>{props.results.temperatuere}<span>°C</span></div>}
            {props.results.conditionText && 
                <div>
                    <img src={props.results.icon} alt="icon"/>
                    <span>{props.results.conditionText}</span>
                </div>
            }
        </div>
    );
};

export default Results;