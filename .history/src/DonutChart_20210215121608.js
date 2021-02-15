import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

function DonutChart(props) {
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData(
            {
                labels: [
                    `Active ${props.data.totalconfirmed}`,
                    `Deceased ${props.data.totaldeceased}`,
                    `Recovered ${props.data.totalrecovered}`
                ], 
                datasets: [{
                    data: [9213, 999, 31233],
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
    },[props.data.totalconfirmed]);
    return (
        <div className="donut-container">
            <Doughnut data={data} 
             legend= {{position: "right"}} 
             options={{cutoutPercentage: 85, maintainAspectRatio: false}}/>
            <div className="center-text">
                <span className="confirmed">
                    {parseInt(props.data.totalconfirmed)+
                     parseInt(props.data.totaldeceased)+
                     parseInt(props.data.totalrecovered)}
                </span>
                <br/>
                Confirmed
            </div>
        </div>
    );
}    
export default DonutChart;

/*            <div className="stat-screen">
                <div className="toptext1"></div>
                <div className="donut-stats">
                    <DonutChart data={[
                        { label: "Active", value: 20 },
                        { label: "Deceased", value: 10 },
                        { label: "Recovered", value: 70 }]}
                        innerRadius={0.35}
                        outerRadius={0.4}
                        startAngle={270}
                        onMouseEnter={() => { }}
                        formatValues={(values) => `${values}`}
                        colors={["#0066ff", "#adad85", "#00ff00"]} 
                        selectedOffset={0}
                        toggledOffset={0}
                        onMouseEnter={() => 100000}/>
                </div>
                <div className="linegraph"></div>
            </div>
            <div className="state-stats"></div>
            <div class="map-stats"></div> */