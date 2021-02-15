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
                setCovidData(covidDataRes);
                if(covidData.statewise!=undefined) {
                    setIsLoaded(true);
                }                
                console.log("CD");
                console.log(covidDataRes);
            },
                error => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, [covidData.length]);

    if (error) {
        return <div>Error: {error.message}</div>;
        console.log("err");
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="main-container">
                <div className="left-container">
                    <h2>INDIA COVID-19 Tracker</h2>
                    <h5>Lets all pray to make out Earth Covid-19 free soon, Stay Safe and do TheLocate</h5>                
                <div className="chart-and-table">
                    <div className="stat-charts">
                        <div className="donut-chart">
                            <DonutChart data={covidData} />
                        </div>
                        <div className="linegraph">
                            <LineGraph data={covidData}/>
                        </div>
                    </div>
                    </div>
                    <div className="state-datas">
                        <StateTable data={covidData} />
                    </div>
                </div>
                <div className="right-container">
                    <h2>INDIA MAP</h2>
                    <h4>HOVER OVER A STATE FOR MORE DETAILS</h4>
                <div className="map-data">
                <div className="text-on-map">
                        Last Updated on
                        <br/>
                        {covidData.statewise[0].lastupdatedtime}
                    </div>
                    <Databoxes data={covidData}/>
                    <div className="map">
                        <VectorMap {...India} />
                    </div>                    
                </div>
                </div>                
            </div>
        );
    }
}

export default CovidData;