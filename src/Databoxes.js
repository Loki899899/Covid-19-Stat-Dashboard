import {useEffect} from 'react';

function Databoxes(props) {
    useEffect(() => {
        console.log("statewise: ");
        if(props.data.length<1) {
            console.log("undefined here");
        }
        else {
        console.log(props.data)
        }
    }, [props.data]);
    if(props.data.statewise==undefined) {
        return (<div>Loading...</div>);
    }
    else {
        return (
            <div className="databoxes">
                <div className="confirmed-box">Confirmed<br/>{props.data.statewise[0].confirmed}</div>
                <div className="active-box">Active<br/>{props.data.statewise[0].active}</div>
                <div className="recovering-box">Recovering<br/>{props.data.statewise[0].recovered}</div>
                <div className="deceased-box">Deceased<br/>{props.data.statewise[0].deaths}</div>
            </div>
        );
    }
}

export default Databoxes;