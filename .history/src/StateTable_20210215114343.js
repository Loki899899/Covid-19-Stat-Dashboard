import {useEffect, useState} from 'react';
const StateTable = props => {
    const [tableData, setTableData] = useState([]);
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
        setTableData(props.data);
    })
    //console.log("state: "+props.data.wb);
    console.log("tD: ");
    console.log(tableData[1]);
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
                                    <td>{tableData}</td>
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