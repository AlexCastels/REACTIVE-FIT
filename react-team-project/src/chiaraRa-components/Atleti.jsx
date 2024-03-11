import './Atleti.css';
export function Atleti() {
    return(
        <> <div className="AtletiInfoContainer">
            <div className="AtletiInfo">
                <div className="AtletaCard">
                    <div className="AtletaCardSinx">
                        <div className="AtletaCardSinxImg">
                            <img src="https://t3.ftcdn.net/jpg/00/88/35/60/160_F_88356081_uBwPo3Axmlz4QrodUuwqgyN5v91LhiKS.jpg" alt="Ragazza" />
                        </div>
                        <div className="AtletaCardsinxInfo">
                            <span>Sofia Rossi</span>
                            <span>Età: 25</span>
                            <span>Peso: 80kg</span>
                            <span>Altezza: 169cm</span>
                            <span>Email: sofiarossi@email.com</span>
                            <span>Num: 3334455229</span>
                        </div>
                    </div>
                    <div className="AtletaCardDex">
                        <h5>Prox Appuntamento</h5>
                        <form action="">
                            <div>
                            <p>Protocollo alimentare</p>
                            <input type="file" id="myFile" name="filename"/>
                            <p>Scheda allenamenti</p>
                            <input type="file" id="myFile" name="filename"/>
                            <input type="submit"/>
                            </div>
                            <div>
                                <p><label htmlFor="">Invia un messaggio:</label></p>
                                <textarea name="messaggio" id="messaggio" cols="30" rows="2"></textarea>
                                <input type="submit" value="submit" />
                            </div>

                        </form>                  
                        
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}