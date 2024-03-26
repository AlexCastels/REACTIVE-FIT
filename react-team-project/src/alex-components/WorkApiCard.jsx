export function WorkApiCard({item}){
    return (
        <div className="workC-card">
            <div className="workC-title">
                <h3>{item.bodyPart.toUpperCase()}</h3>
				<p>{item.name.toUpperCase()}</p>
            </div>
            <div className="workC-gif">
				<img alt='gif' src={item.gifUrl}/>
			</div>
			<div className="workC-instructions">
				<p>{item.instructions.map((item , index) => {
                    return <p key={index}>{item}</p>
                })}</p>
			</div>
        </div>
    )
}