export default function Buildings({ buildings, handleUpgrade }){
    const buildingsElements = Object.keys(buildings).map( key => (<div>
        <h3>{key}</h3>
        <span>Level: {buildings[key].level}</span>
        <button onClick={() => handleUpgrade(key)}>Upgrade</button>
    </div>) )
    return buildingsElements;
}
