import {useEffect, useState} from 'react';
const StateTable = props => {    
    // console.log("dailyconf: "+props.data);

    // const [confirmed, setConfirmed] = useState(null);
    // const [recovered, setRecovered] = useState(null)
    // const [deceased, setDeceased] = useState(null);    

    //for daily stats
    // useEffect(() => {
    //     setDeceased(props.data[props.data.length-1]);
    //     setRecovered(props.data[props.data.length-2]);
    //     setConfirmed(props.data[props.data.length-3]);
    //     //setActive(props.data[props.data.length-1]);
    //     //console.log("props: ");
    //     //console.log(props.data);
    //     //console.log("tD: ");
    //     //console.log(deceased);
    // },[props.data])
    //console.log("state: "+props.data.wb);

    //for overall stats
    // useEffect(() => {
    //     //console.log("statewise: ");
    //     //testing to check the value of 
    //     // if(props.data.statewise==undefined) {
    //     //     //console.log("undefined here");
    //     // }
    //     // else {
    //     // //console.log(props.data.statewise[0])
    //     // }
    // }, [props.data]);

    if(props.data.statewise==undefined) {
        return (<div>Loading...</div>);
    }
    return (
        <div className="state-data">
        <table>
            <thead>
                <tr>
                    <th>STATE/UT</th>
                    <th>CONFIRMED</th>
                    <th>ACTIVE</th>
                    <th>RECOVERED</th>
                    <th>DECEASED</th>
                </tr>
            </thead>            
                <tbody className="data">
                    {Object.keys(props.data.statewise).map(
                        function (key) {
                            return (
                                <tr>
                                    <td>{props.data.statewise[key].state}</td>
                                    <td>{props.data.statewise[key].confirmed}</td>
                                    <td>{props.data.statewise[key].active}</td>
                                    <td>{props.data.statewise[key].recovered}</td>
                                    <td>{props.data.statewise[key].deaths}</td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
        </table>
        </div>
    );
}

export default StateTable;