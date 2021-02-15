const StateTable = props => {
    // console.log("dailyconf: "+props.data);
    const abc = [1,2,3,4,5,6,7];
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
    Object.entries(states).map(([key, val]) => {
        console.log("statehere "+key);
    })
    console.log("state: "+props.data.wb);
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
                {/* {abc.map(function (item) {return (<tr><td>{ item}</td></tr>)})}                                         */}
                    {Object.entries(states).map(
                        function ([key, value]) {
                            return (
                                <tr>
                                    <td>{key}</td>
                                    <td>{value}</td>
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