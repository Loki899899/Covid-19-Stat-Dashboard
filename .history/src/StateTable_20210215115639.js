import {useEffect, useState} from 'react';
const StateTable = props => {
    const [tableData, setTableData] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
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
    Object.keys(props.data).map((key) => {
        //console.log("Key "+key);
        console.log(states[key]);
    })
    useEffect(() => {
        if(props.data.length>0){
            setHasLoaded(true);
        }
        setTableData(props.data);
        console.log("props: ");
        console.log(props.data);
        console.log("tD0: ");
        if(tableData){
        console.log(tableData[0].an);}
    },[props.data])
    //console.log("state: "+props.data.wb);
    if(hasLoaded) {
        return (
            <div>
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
                        {Object.keys(states).map(
                            function (key) {
                                return (
                                    <tr>
                                        <td>{states[key]}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>a</td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
            </table>
            </div>
        );
    }
    else {
        return (<div>Loading.....</div>);
    }
}

export default StateTable;