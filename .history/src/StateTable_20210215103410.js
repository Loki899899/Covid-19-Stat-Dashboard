const StateTable = props => {
    // console.log("dailyconf: "+props.data);
    const states = {
        "an": "ANDAMAN & NICOBAR",
        "ap": "ANDHRA PRADESH",
        "ar": "ARUNACHAL PRADESH",
        "as": "ASSAM",
        "br": "BIHAR",
        "ch": "CHANDIGARH",
        "ct": "CHATTISGARH",
        "dd": "DAMAN & DIU",
        "dl": "DELHI",
        "dn": "DADRA & NAGAR HAVELI",
        "ga": "GOA",
        "gj": "GUJARAT",
        "hp": "HIMACHAL PRADESH",
        "hr": "HARYANA",
        "jh": "JHARKHAND",
        "jk": "JAMMU & KASHMIR",
        "ka": "KARNATAKA",
        "kl": "KERALA",
        "la": "LADAKH",
        "ld": "LAKSHDWEEP ISLANDS",
        "mh": "MAHARASHTRA",
        "ml": "MEGHALAYA",
        "mn": "MANIPUR",
        "mp": "MADHYA PRADESH",
        "mz": "MIZORAM",
        "nl": "NAGALAND",
        "or": "ORISSA",
        "pb": "PUNJAB",
        "py": "PONDICHERRY",
        "rj": "RAJASTHAN",
        "sk": "SIKKIM",
        "tg": "not known",
        "tn": "TAMIL NADU",
        "tr": "TRIPURA",
        "tt": "Not KNown",
        "un": "not known",
        "up": "UTTAR PRADESH",
        "ut": "UTTARAKHAND",
        "wb": "WEST BENGAL"
    }
    Object.entries(states.map(([key, values]) => {
        console.log(states.key);
    }))
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
                    {Object.entries(states).map(([key,values]) => {
                        <tr>
                            <td>{key}</td>
                            <td>{values}</td>
                        </tr>
                    })}
            </tbody>
        </table>
        </div>
    );
}

export default StateTable;