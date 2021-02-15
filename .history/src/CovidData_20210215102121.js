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
                //console.log(Object.entries(stateData).map(([key, values]) => stateData.key));
                setstateData(stateCovidData.states_daily[stateCovidData.states_daily.length - 1]);
                console.log(stateData);
                //console.log(+stateCovidData.states_daily[stateCovidData.states_daily.length - 1]);
                //console.log(Object.entries(stateData).map(([key, values]) => stateData.key));
            },
                error => {
                    setError(error);
                })
    }, [stateData.length]);
    // console.log("again "+stateData);
    // useEffect(() => {
    //     fetch("https://api.covid19india.org/states_daily.json")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
    //           setstateData(result.states_daily[result.states_daily.length - 1]);
    //           console.log("stateData "+{stateData});
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           setIsLoaded(true);
    //           setError(error);
    //         }
    //       )
    //   },[stateData.length])
    // useEffect(() => {
    //     fetch("https://api.covid19india.org/data.json")
    //         .then(covidDatajson => covidDatajson.json())
    //         .then(covidDataRes => {
    //             setIsLoaded(true);
    //             setCovidData(covidDataRes.cases_time_series[covidDataRes.cases_time_series.length - 1]);
    //             // console.log(covidDataRes);
            // },
            //     error => {
            //         setIsLoaded(true);
            //         setError(error);
            //     })
    // }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
        console.log("err");
    } else if (!stateData) {
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
                    {Object.entries(stateData).map(([key, values]) => {
                        <div>{key}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default CovidData;