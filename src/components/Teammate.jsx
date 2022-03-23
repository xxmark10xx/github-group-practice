

export default function Teammate({ teamate }) {
    
    return (
        <div>
            <h2>{teamate.name}</h2>
            <h3>{teamate.about}</h3>
            <h4>{teamate.skills}</h4>
        </div>
        
    )
}