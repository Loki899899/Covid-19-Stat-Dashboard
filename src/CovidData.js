import { useEffect, useState } from "react";
import { VectorMap } from '@south-paw/react-vector-maps';
import StateTable from "./StateTable";
import DonutChart from './DonutChart';
import LineGraph from './LineChart';
import Databoxes from './Databoxes';
import India from './india.json';  

//function to retrieve the data from apis
function CovidData() {
    const [covidData, setCovidData] = useState([]);
    const [stateData, setstateData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    //fetch the data for the state daily
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

    //fetch the second covid api data 
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
            <div className="main-container">
                <div className="chart-and-table">
                    <div className="stat-charts">
                        <div className="donut-chart">
                            <DonutChart data={covidData} />
                        </div>
                        <div className="linegraph">
                            <LineGraph data={covidData}/>
                        </div>
                    </div>
                    <div className="state-datas">
                        <StateTable data={covidData} />
                    </div>
                </div>
                <div className="map-data">
                    <Databoxes data={covidData}/>
                    <div className="map">
                        <VectorMap {...India} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CovidData;