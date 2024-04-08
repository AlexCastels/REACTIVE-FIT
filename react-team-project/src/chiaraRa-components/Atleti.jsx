import { ButtonComponent } from "../style-site/ButtonComponent";
import "./Atleti.css";

export function Atleti() {
    return (
        <>
            <div className="AtletiInfoContainer">
                <div className="AtletiInfo">
                    <div className="AtletaCard">
                        <div className="AtletaCardSinx">
                            <div className="AtletaCardSinxImg">
                                <img
                                    src="https://2.bp.blogspot.com/_DLMbxIoKN3c/Sfmt_MI2jSI/AAAAAAAAUyE/HJXXjzI6jRs/s400/sophia-bush-17.jpg"
                                    alt="Ragazza"
                                />
                                <h2>Sofia Rossi</h2>
                            </div>
                            <div className="AtletaCardsinxInfo">
                                <div className="info-atleta-container">
                                    <div>
                                        <p><b>Info:</b></p>
                                        <p>Età: 25</p>
                                        <p>Peso: 70kg</p>
                                        <p>Altezza: 160cm</p>
                                    </div>
                                    <div>  
                                        <p><b>Contatti:</b></p>
                                        <p>s.rossi@email.com</p>
                                        <p>3334455229</p>
                                    </div>
                                </div>
                                <div className="prox-appuntamento-atleti">
                                    <p><b>Prossimo appuntamento:</b></p>
                                    <p>Control-Check: 27/04/24 Martedì 11.30</p>
                                </div>       
                            </div>
                            
                        </div>
                        <div className="AtletaCardDex">
                            <form action="">
                                <div className="AtletiImportContainer">
                                    <div className="AtletiImportP">
                                        <p>Protocollo alimentare:</p>
                                        <input
                                            type="file"
                                            id="myFileAlim"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    <div className="AtletiImportA">
                                        <p>Scheda allenamenti:</p>
                                        <input
                                            type="file"
                                            id="myFileAllen"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    
                                </div>
                                <div className="AtletiTextArea">
                                    <p>
                                        <label htmlFor="">
                                            Lascia un commento:
                                        </label>
                                    </p>
                                    <textarea
                                        name="messaggio"
                                        id="messaggio"
                                        cols="36"
                                        rows="2"
                                        className="atleti-style-textarea"
                                    ></textarea>
                                    <div className="btn-atleti-container">
                                        <ButtonComponent text='invia'/>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    <div className="AtletaCard">
                        <div className="AtletaCardSinx">
                            <div className="AtletaCardSinxImg">
                                <img
                                    src="https://i.pinimg.com/474x/b5/d9/c9/b5d9c94c8bff8d4fa728e13ddf106bc0.jpg"
                                    alt="Ragazza"
                                />
                                <h2>Matteo Bianchi</h2>
                            </div>
                            <div className="AtletaCardsinxInfo">
                                <div className="info-atleta-container">
                                    <div>
                                        <p><b>Info:</b></p>
                                        <p>Età: 27</p>
                                        <p>Peso: 75kg</p>
                                        <p>Altezza: 170cm</p>
                                    </div>
                                    <div>  
                                        <p><b>Contatti:</b></p>
                                        <p>g.giorg@gmail.it</p>
                                        <p>3333569784</p>
                                    </div>
                                </div>
                                <div className="prox-appuntamento-atleti">
                                    <p><b>Prossimo appuntamento:</b></p>
                                    <p>Control-Check: 27/04/24 Martedì 11.30</p>
                                </div>       
                            </div>
                            
                        </div>
                        <div className="AtletaCardDex">
                            <form action="">
                                <div className="AtletiImportContainer">
                                    <div className="AtletiImportP">
                                        <p>Protocollo alimentare:</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    <div className="AtletiImportA">
                                        <p>Scheda allenamenti:</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    
                                </div>
                                <div className="AtletiTextArea">
                                    <p>
                                        <label htmlFor="">
                                        Lascia un commento:
                                        </label>
                                    </p>
                                    <textarea
                                        name="messaggio"
                                        id="messaggio"
                                        cols="36"
                                        rows="2"
                                        className="atleti-style-textarea"
                                    ></textarea>
                                    <div className="btn-atleti-container">
                                        <ButtonComponent text='invia'/>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    <div className="AtletaCard">
                        <div className="AtletaCardSinx">
                            <div className="AtletaCardSinxImg">
                                <img
                                    src="data:image/jpeg;base64,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"
                                    alt="Ragazza"
                                />
                                <h2>Manuel Joe</h2>
                            </div>
                            <div className="AtletaCardsinxInfo">
                                <div className="info-atleta-container">
                                    <div>
                                        <p><b>Info:</b></p>
                                        <p>Età: 30</p>
                                        <p>Peso: 110kg</p>
                                        <p>Altezza: 180cm</p>
                                    </div>
                                    <div>  
                                        <p><b>Contatti:</b></p>
                                        <p>joeM@email.com</p>
                                        <p>3334455229</p>
                                    </div>
                                </div>
                                <div className="prox-appuntamento-atleti">
                                    <p>Prossimo appuntamento:</p>
                                    <p>Control-Check: 27/04/24 Martedì 11.30</p>
                                </div>       
                            </div>
                            
                        </div>
                        <div className="AtletaCardDex">
                            <form action="">
                                <div className="AtletiImportContainer">
                                    <div className="AtletiImportP">
                                        <p>Protocollo alimentare:</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    <div className="AtletiImportA">
                                        <p>Scheda allenamenti:</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    
                                </div>
                                <div className="AtletiTextArea">
                                    <p>
                                        <label htmlFor="">
                                        Lascia un commento:
                                        </label>
                                    </p>
                                    <textarea
                                        name="messaggio"
                                        id="messaggio"
                                        cols="36"
                                        rows="2"
                                        className="atleti-style-textarea"
                                    ></textarea>
                                    <div className="btn-atleti-container">
                                        <ButtonComponent text='invia'/>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    <div className="AtletaCard">
                        <div className="AtletaCardSinx">
                            <div className="AtletaCardSinxImg">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72gB1cqsjUY7RhjCPsmHv-u0lJtFBXXXcLg&usqp=CAU"
                                    alt="Ragazza"
                                />
                                <h2>Riccardo Biondi</h2>
                            </div>
                            <div className="AtletaCardsinxInfo">
                                <div className="info-atleta-container">
                                    <div>
                                        <p><b>Info:</b></p>
                                        <p>Età: 33</p>
                                        <p>Peso: 78kg</p>
                                        <p>Altezza: 176cm</p>
                                    </div>
                                    <div>  
                                        <p><b>Contatti:</b></p>
                                        <p>biondiR@email.it</p>
                                        <p>3334455229</p>
                                    </div>
                                </div>
                                <div className="prox-appuntamento-atleti">
                                    <p><b>Prossimo appuntamento:</b></p>
                                    <p>Control-Check: 27/04/24 Martedì 11.30</p>
                                </div>       
                            </div>
                            
                        </div>
                        <div className="AtletaCardDex">
                            <form action="">
                                <div className="AtletiImportContainer">
                                    <div className="AtletiImportP">
                                        <p>Protocollo alimentare:</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    <div className="AtletiImportA">
                                        <p>Scheda allenamenti:</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    
                                </div>
                                <div className="AtletiTextArea">
                                    <p>
                                        <label htmlFor="">
                                        Lascia un commento:
                                        </label>
                                    </p>
                                    <textarea
                                        name="messaggio"
                                        id="messaggio"
                                        cols="36"
                                        rows="2"
                                        className="atleti-style-textarea"
                                    ></textarea>
                                    <div className="btn-atleti-container">
                                        <ButtonComponent text='invia'/>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    <div className="AtletaCard">
                        <div className="AtletaCardSinx">
                            <div className="AtletaCardSinxImg">
                                <img
                                    src="https://2.bp.blogspot.com/_DLMbxIoKN3c/Sfmt_MI2jSI/AAAAAAAAUyE/HJXXjzI6jRs/s400/sophia-bush-17.jpg"
                                    alt="Ragazza"
                                />
                                <h2>Sofia Rossi</h2>
                            </div>
                            <div className="AtletaCardsinxInfo">
                                <div className="info-atleta-container">
                                    <div>
                                        <p><b>Info:</b></p>
                                        <p>Età: 25</p>
                                        <p>Peso: 80kg</p>
                                        <p>Altezza: 169cm</p>
                                    </div>
                                    <div>  
                                        <p><b>Contatti:</b></p>
                                        <p>sofiarossi@email.it</p>
                                        <p>3334455229</p>
                                    </div>
                                </div>
                                <div className="prox-appuntamento-atleti">
                                    <p><b>Prossimo appuntamento:</b></p>
                                    <p>Control-Check: 27/04/24 Martedì 11.30</p>
                                </div>       
                            </div>
                            
                        </div>
                        <div className="AtletaCardDex">
                            <form action="">
                                <div className="AtletiImportContainer">
                                    <div className="AtletiImportP">
                                        <p>Protocollo alimentare:</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    <div className="AtletiImportA">
                                        <p>Scheda allenamenti:</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    
                                </div>
                                <div className="AtletiTextArea">
                                    <p>
                                        <label htmlFor="">
                                            Lascia un commento:
                                        </label>
                                    </p>
                                    <textarea
                                        name="messaggio"
                                        id="messaggio"
                                        cols="36"
                                        rows="2"
                                        className="atleti-style-textarea"
                                    ></textarea>
                                    <div className="btn-atleti-container">
                                        <ButtonComponent text='invia'/>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



                    {/* <div className="AtletaCard">
                        <div className="AtletaCardSinx">
                            <div className="AtletaCardSinxImg">
                                <img
                                    src="https://i.pinimg.com/474x/b5/d9/c9/b5d9c94c8bff8d4fa728e13ddf106bc0.jpg"
                                    alt="Ragazz"
                                />
                                <h2>Giovanni Polacco</h2>
                            </div>
                            <div className="AtletaCardsinxInfo">
                                <span>Età: 35</span>
                                <span>Peso: 75kg</span>
                                <span>Altezza: 180cm</span>
                                <span style={{ marginTop: "20px" }}>
                                    Contatti:
                                </span>
                                <span>giovpolac@email.com</span>
                                <span>3334455230</span>
                            </div>
                            <h3>Appuntamento: Lunedì 16.30</h3>
                        </div>
                        <div className="AtletaCardDex">
                            <form action="">
                                <div className="AtletiImportContainer">
                                    <div className="AtletiImportP">
                                        <p>Protocollo alimentare</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    <div className="AtletiImportA">
                                        <p>Scheda allenamenti</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    <button className="AtletiBtn" type="submit">
                                        Invia
                                    </button>
                                </div>
                                <div className="AtletiTextArea">
                                    <p>
                                        <label htmlFor="">
                                            Invia un messaggio:
                                        </label>
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
                    <div className="AtletaCard">
                        <div className="AtletaCardSinx">
                            <div className="AtletaCardSinxImg">
                                <img
                                    src="data:image/jpeg;base64,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"
                                    alt="Ragazz"
                                    width={100}
                                    height={100}
                                />
                                <h2>Marco Bianchi</h2>
                            </div>
                            <div className="AtletaCardsinxInfo">
                                <span>Età: 28</span>
                                <span>Peso: 70kg</span>
                                <span>Altezza: 175cm</span>
                                <span style={{ marginTop: "20px" }}>
                                    Contatti:
                                </span>
                                <span>bianchima@email.com</span>
                                <span>3334455859</span>
                            </div>
                            <h3>Appuntamento: Giovedì 12.30</h3>
                        </div>
                        <div className="AtletaCardDex">
                            <form action="">
                                <div className="AtletiImportContainer">
                                    <div className="AtletiImportP">
                                        <p>Protocollo alimentare</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    <div className="AtletiImportA">
                                        <p>Scheda allenamenti</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    <button className="AtletiBtn" type="submit">
                                        Invia
                                    </button>
                                </div>
                                <div className="AtletiTextArea">
                                    <p>
                                        <label htmlFor="">
                                            Invia un messaggio:
                                        </label>
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
                    <div className="AtletaCard">
                        <div className="AtletaCardSinx">
                            <div className="AtletaCardSinxImg">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjG3eJxOdR3TtlKEgApvkL3HXgKOnusAhfg&usqp=CAU"
                                    alt="Ragazz"
                                />
                                <h2>Alessia Romano</h2>
                            </div>
                            <div className="AtletaCardsinxInfo">
                                <span>Età:32</span>
                                <span>Peso: 60kg</span>
                                <span>Altezza: 165cm</span>
                                <span style={{ marginTop: "20px" }}>
                                    Contatti:
                                </span>
                                <span>aleromano@email.com</span>
                                <span>3383455229</span>
                            </div>
                            <h3>Appuntamento: Mercoledì 10.30</h3>
                        </div>
                        <div className="AtletaCardDex">
                            <form action="">
                                <div className="AtletiImportContainer">
                                    <div className="AtletiImportP">
                                        <p>Protocollo alimentare</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>
                                    <div className="AtletiImportA">
                                        <p>Scheda allenamenti</p>
                                        <input
                                            type="file"
                                            id="myFile"
                                            name="filename"
                                            className="input-send-style"
                                        />
                                    </div>

                                    <button className="AtletiBtn" type="submit">
                                        Invia
                                    </button>
                                </div>
                                <div className="AtletiTextArea">
                                    <p>
                                        <label htmlFor="">
                                            Invia un messaggio:
                                        </label>
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
                    </div>*/}
                 
