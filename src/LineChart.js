import { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';

var labels = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function LineGraph(props) {
    const [data, setData] =useState([]);
    useEffect(() => {
      if(props.data.length<1) {
        console.log("empty now");
      }
      else {
        setData(
          {
              labels: [
                props.data.cases_time_series[props.data.cases_time_series.length-7].date,
                props.data.cases_time_series[props.data.cases_time_series.length-6].date,
                props.data.cases_time_series[props.data.cases_time_series.length-5].date,
                props.data.cases_time_series[props.data.cases_time_series.length-4].date,
                props.data.cases_time_series[props.data.cases_time_series.length-3].date,
                props.data.cases_time_series[props.data.cases_time_series.length-2].date,
                props.data.cases_time_series[props.data.cases_time_series.length-1].date
              ],
              datasets: [
                {
                  label: 'Active',
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: '#0066ff',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                  pointHoverBorderColor: 'rgba(220,220,220,1)',
                  pointHoverBorderWidth: 2,
                  pointRadius: 4,
                  pointHitRadius: 10,
                  data: [
                    props.data.statewise[0].active,
                    props.data.statewise[0].active,
                    props.data.statewise[0].active,
                    props.data.statewise[0].active,
                    props.data.statewise[0].active,
                    props.data.statewise[0].active,
                    props.data.statewise[0].active
                  ]
                },
                {
                  label: 'Deceased',
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: '#adad85',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                  pointHoverBorderColor: 'rgba(220,220,220,1)',
                  pointHoverBorderWidth: 2,
                  pointRadius: 4,
                  pointHitRadius: 10,
                  data: [
                    props.data.cases_time_series[props.data.cases_time_series.length-7].dailydeceased,
                    props.data.cases_time_series[props.data.cases_time_series.length-6].dailydeceased,
                    props.data.cases_time_series[props.data.cases_time_series.length-5].dailydeceased,
                    props.data.cases_time_series[props.data.cases_time_series.length-4].dailydeceased,
                    props.data.cases_time_series[props.data.cases_time_series.length-3].dailydeceased,
                    props.data.cases_time_series[props.data.cases_time_series.length-2].dailydeceased,
                    props.data.cases_time_series[props.data.cases_time_series.length-1].dailydeceased
                  ]
                },
                {
                  label: 'Recovered',
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: '#00ff00',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                  pointHoverBorderColor: 'rgba(220,220,220,1)',
                  pointHoverBorderWidth: 2,
                  pointRadius: 4,
                  pointHitRadius: 10,
                  data: [
                    props.data.cases_time_series[props.data.cases_time_series.length-7].dailyrecovered,
                    props.data.cases_time_series[props.data.cases_time_series.length-6].dailyrecovered,
                    props.data.cases_time_series[props.data.cases_time_series.length-5].dailyrecovered,
                    props.data.cases_time_series[props.data.cases_time_series.length-4].dailyrecovered,
                    props.data.cases_time_series[props.data.cases_time_series.length-3].dailyrecovered,
                    props.data.cases_time_series[props.data.cases_time_series.length-2].dailyrecovered,
                    props.data.cases_time_series[props.data.cases_time_series.length-1].dailyrecovered
                  ]
                }    
              ]
            }
      );
      }
    },[props.data]);
    return (
        <div className="line-container">
            <Line data={data} options={{maintainAspectRatio:false}} legend={{display:false}}/>
        </div>
    );
}

export default LineGraph;