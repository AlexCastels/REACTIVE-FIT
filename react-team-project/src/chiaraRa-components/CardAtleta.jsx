export function CardAtleta({item}){
    return(
        <div className="AtletaCard">
        <div className="AtletaCardSinx">
          <div className="AtletaCardSinxImg">
            <img
              src={item.image}
              alt="Ragazza"
            />
            <h2>Sofia Rossi</h2>
          </div>
          <div className="AtletaCardsinxInfo">
            <span>Età: 25</span>
            <span>Peso: 80kg</span>
            <span>Altezza: 169cm</span>
            <span style={{marginTop:'20px'}}>Contatti:</span>
            <span>sofiarossi@email.com</span>
            <span>3334455229</span>
            </div>
            <h3>Appuntamento: Martedì 11.30</h3>
        </div>
        <div className="AtletaCardDex">
          <form action="">
            <div className="AtletiImportContainer">
              <div className="AtletiImportP">            
                <p>Protocollo alimentare</p>
                <input type="file" id="myFile" name="filename" />
              </div>
              <div className="AtletiImportA">
                <p>Scheda allenamenti</p>
                <input type="file" id="myFile" name="filename" />
              </div>

              <button className="AtletiBtn" type="submit">
                Invia
              </button>
            </div>
            <div className="AtletiTextArea">
              <p>
                <label htmlFor="">Invia un messaggio:</label>
              </p>
              <textarea
                name="messaggio"
                id="messaggio"
                cols="36"
                rows="2"
              ></textarea>
              <button className="AtletiBtn" type="submit">
                Invia
              </button>
            </div>
          </form>
        </div>
      </div>
    
       
    )
}