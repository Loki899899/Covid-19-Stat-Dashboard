import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

function DonutChart(props) {
    const [data, setData] = useState([]);
    useEffect(()=>{
        if(!(props.data.length<1)) {
            setData(
                {
                    labels: [
                        `Active ${props.data.statewise[0].active}`,
                        `Deceased ${props.data.statewise[0].deaths}`,
                        `Recovered ${props.data.statewise[0].recovered}`
                    ], 
                    datasets: [{
                        data: [
                            props.data.statewise[0].active,
                            props.data.statewise[0].deaths,
                            props.data.statewise[0].recovered
                        ],
                        backgroundColor: [
                        "#0066ff", 
                        "#adad85", 
                        "#00ff00"
                        ],
                        hoverBackgroundColor: [
                        "#0066ff", 
                        "#adad85", 
                        "#00ff00"
                        ],
                    }]
                }            
            );
        }
    },[props.data]);
    if(props.data.length<1) {
        return (<div>Loading...</div>);      
    }
    else {
        return (
            <div className="donut-container">
                <Doughnut data={data} 
                 legend= {{position: "right"}} 
                 options={{cutoutPercentage: 85, maintainAspectRatio: false}}/>
                <div className="center-text"> 
                {/* center text for the donut graph */}
                    <span className="confirmed">
                        {parseInt(props.data.cases_time_series[props.data.cases_time_series.length-1].totalconfirmed)+
                         parseInt(props.data.cases_time_series[props.data.cases_time_series.length-1].totaldeceased)+
                         parseInt(props.data.cases_time_series[props.data.cases_time_series.length-1].totalrecovered)}
                    </span>
                    <br/>
                    Confirmed
                </div>
            </div>
        );
    }
}    
export default DonutChart;