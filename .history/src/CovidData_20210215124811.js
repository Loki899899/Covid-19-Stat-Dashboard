import { useEffect, useState } from "react";
import StateTable from "./StateTable";
import DonutChart from './DonutChart';
import LineGraph from './LineChart';

function CovidData() {
    const [covidData, setCovidData] = useState([]);
    const [stateData, setstateData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
            fetch("https://api.covid19india.org/states_daily.json")
            .then(stateDataRes => stateDataRes.json())
            .then(stateCovidData => {                
                setIsLoaded(true);
                setstateData(stateCovidData.states_daily);//[stateCovidData.states_daily.length - 1]);
                //console.log("SD: ");
                //console.log(stateData);
            },
            error => {
                setIsLoaded(true);
                setError(error);
            })
    },[stateData.length]);

    useEffect(() => {
        fetch("https://api.covid19india.org/data.json")
            .then(covidDatajson => covidDatajson.json())
            .then(covidDataRes => {
                setIsLoaded(true);
                setCovidData(covidDataRes);
                console.log("CD");
                console.log(covidDataRes);
            },
                error => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
        console.log("err");
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <div className="stat-charts">
                    <div className="donut-chart">
                        <DonutChart data={covidData} />
                    </div>
                    <div className="linegraph">
                        <LineGraph />
                    </div>
                </div>
                <div className="state-datas">
                    <StateTable data={stateData} />
                </div>
            </div>
        );
    }
}

export default CovidData;