import {useEffect, useState} from 'react';
const StateTable = props => {    
    // console.log("dailyconf: "+props.data);
    const states = {
        an: "ANDAMAN & NICOBAR",
        ap: "ANDHRA PRADESH",
        ar: "ARUNACHAL PRADESH",
        as: "ASSAM",
        br: "BIHAR",
        ch: "CHANDIGARH",
        ct: "CHATTISGARH",
        dd: "DAMAN & DIU",
        dl: "DELHI",
        dn: "DADRA & NAGAR HAVELI",
        ga: "GOA",
        gj: "GUJARAT",
        hp: "HIMACHAL PRADESH",
        hr: "HARYANA",
        jh: "JHARKHAND",
        jk: "JAMMU & KASHMIR",
        ka: "KARNATAKA",
        kl: "KERALA",
        la: "LADAKH",
        ld: "LAKSHDWEEP ISLANDS",
        mh: "MAHARASHTRA",
        ml: "MEGHALAYA",
        mn: "MANIPUR",
        mp: "MADHYA PRADESH",
        mz: "MIZORAM",
        nl: "NAGALAND",
        or: "ORISSA",
        pb: "PUNJAB",
        py: "PONDICHERRY",
        rj: "RAJASTHAN",
        sk: "SIKKIM",
        tg: "not known",
        tn: "TAMIL NADU",
        tr: "TRIPURA",
        tt: "Not KNown",
        un: "not known",
        up: "UTTAR PRADESH",
        ut: "UTTARAKHAND",
        wb: "WEST BENGAL"
    }
    const [confirmed, setConfirmed] = useState(states);
    //const [active, setActive] = useState(states);
    const [recovered, setRecovered] = useState(states)
    const [deceased, setDeceased] = useState(states);    
    Object.keys(props.data).map((key) => {
        //console.log("Key "+key);
        //console.log(states[key]);
    })

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
    useEffect(() => {
        console.log("statewise: ");
        if(props.data.statewise==undefined) {
            console.log("undefined here");
        }
        else {
        console.log(props.data.statewise[0])}
    }, [props.data]);

    if(props.data.statewise==undefined) {
        return (<div>waaiiiit</div>);
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