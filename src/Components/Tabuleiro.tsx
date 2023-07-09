import { useEffect, useState } from "react"
import styles from "../styles/Tabuleiro.module.css"

export default function Tabuleiro(){


    //GERENCIAR INICIO DO JOGO

    const [winner, setWinner] = useState<string>("");
    const [player, setPlayer] = useState<string>("player 1");
    const [turn, setTurn] = useState<number>(0);
    const [resultColor,setResultColor] = useState<number>(0);

    const [blankOne, setBlankOne] = useState<string>("");
    const [blankTwo, setBlankTwo] = useState<string>("");
    const [blankThree, setBlankThree] = useState<string>("");
    const [blankFour, setBlankFour] = useState<string>("");
    const [blankFive, setBlankFive] = useState<string>("");
    const [blankSix, setBlankSix] = useState<string>("");
    const [blankSeven, setBlankSeven] = useState<string>("");
    const [blankEight, setBlankEight] = useState<string>("");
    const [blankNine, setBlankNine] = useState<string>("");


   //CONTROLE DE CADA CASA ESTÁ FUNCIONANDO PERFEITAMENTE
   // ATRIBUINDO VALORES DE JOGADORES QUE SELECIONARAM E NAO PERMITINDO A RE-SELECAO DE CASA;

    const [boardArrayX, setBoardArrayX] = useState<string[]>(["a","b","c"]);
    const [boardArrayY, setBoardArrayY] = useState<string[]>(["d","e","f"]);
    const [boardArrayZ, setBoardArrayZ] = useState<string[]>(["g","h","i"]);

    useEffect(()=>{
        verifyingVictory();
        // eslint-disable-next-line
    },[player])

    // FUNCAO DE TROCAR DE JOGADOR FUNCIONANDO PERFEITAMENTE
    const switchPlayer = ():void =>{
        if(player === "player 1"){
            setPlayer( ()=> "player 2");
        }else{
            setPlayer( ()=> "player 1");
        }
        setTurn(prev=> prev +1);
    }

    const handleValueOne= ():void =>{

        if(blankOne !== ""){
            return;
        }else{
            setBlankOne(player);
            setBoardArrayX( arr =>[...arr, arr[0]= player]);
            verifyingVictory();
        }
        switchPlayer();
    }

    const handleValueTwo= ():void =>{
        if(blankTwo !== ""){
            return;
        }else{
            setBlankTwo(player);
            setBoardArrayX( arr =>[...arr, arr[1]= player]);
            verifyingVictory();
        }
        switchPlayer();
    }

    const handleValueThree= ():void =>{
        if(blankThree !== ""){
            return;
        }else{
            setBlankThree(player);
            setBoardArrayX( arr =>[...arr, arr[2]= player]);
            verifyingVictory();
        }
        switchPlayer();
    }

    const handleValueFour= ():void =>{
        if(blankFour !== ""){
            return;
        }else{
            setBlankFour(player);
            setBoardArrayY( arr =>[...arr, arr[0]= player]);
            verifyingVictory();
        }
        switchPlayer();
    }

    const handleValueFive= ():void =>{
        if(blankFive !== ""){
            return;
        }else{
            setBlankFive(player);
            setBoardArrayY( arr =>[...arr, arr[1]= player]);
            verifyingVictory();
        }
        switchPlayer();
    }

    const handleValueSix= ():void =>{
        if(blankSix !== ""){
            return;
        }else{
            setBlankSix(player);
            setBoardArrayY( arr =>[...arr, arr[2]= player]);
            verifyingVictory();
        }
        switchPlayer();
    }

    const handleValueSeven= ():void =>{
        if(blankSeven !== ""){
            return;
        }else{
            setBlankSeven(player);
            setBoardArrayZ( arr =>[...arr, arr[0]= player]);
            verifyingVictory();
        }
        switchPlayer();
    }

    const handleValueEight= ():void =>{
        if(blankEight !== ""){
            return;
        }else{
            setBlankEight(player);
            setBoardArrayZ( arr =>[...arr, arr[1]= player]);
            verifyingVictory();
        }
        switchPlayer();
    }

    const handleValueNine= ():void =>{
        if(blankNine !== ""){
            return;
        }else{
            setBlankNine(player);
            setBoardArrayZ( arr =>[...arr, arr[2]= player]);
            verifyingVictory();
        }
        switchPlayer();
    }

    // FALTA O MOMENTO DE SELECAO DE VITORIA
    // 1- VITORIA DE UM JOGADOR QUANDO:
    //      LINHAS IGUAIS, 
    //              OU SEJA ARRX[0]=== ARRX[1] === ARRX[2]
    // 2- COLUNAS IGUAIS,
    //       OU SEJA ARRX[0] === ARRY[0] === ARRZ[0];
    // OU:
    // 3- DIAGONAIS IGUAIS
    //       ARRX[0] === ARRY[1] === ARRZ[2]
    // OU O CONTRARIO
    //       ARRX[2] === ARRY[1] === ARRZ[0]

    // 1 - CRIANDO CONDICAO DE VITORIA 1:
    



    const verifyingVictory = ():void =>{

        if(boardArrayX[0] === boardArrayX[1] && boardArrayX[0] === boardArrayX[2] && boardArrayX[1] === boardArrayX[2] ){
            setWinner(prev => prev = boardArrayX[0]);
            setResultColor(prev => prev = 1);
        }else if (boardArrayY[0] === boardArrayY[1] && boardArrayY[0] === boardArrayY[2] && boardArrayY[1] === boardArrayY[2] ){
            setWinner(prev => prev =  boardArrayY[0]);
            setResultColor(prev => prev = 2);
        }else if (boardArrayZ[0] === boardArrayZ[1] && boardArrayZ[0] === boardArrayZ[2] && boardArrayZ[1] === boardArrayZ[2] ){
            setWinner(prev => prev =  boardArrayZ[0]);
            setResultColor(prev => prev = 3);// CONDICOES DE VITORIA DA --- LINHA --- X,Y,Z FEITAS
        }else if(boardArrayX[0] === boardArrayY[0] && boardArrayX[0] === boardArrayZ[0] && boardArrayY[0] === boardArrayZ[0]){
            setWinner(prev => prev =  boardArrayX[0]);
            setResultColor(prev => prev = 4);
        }else if(boardArrayX[1] === boardArrayY[1] && boardArrayX[1] === boardArrayZ[1] && boardArrayY[1] === boardArrayZ[1]){
            setWinner(prev => prev = boardArrayX[1]);
            setResultColor(prev => prev = 5);
        }else if(boardArrayX[2] === boardArrayY[2] && boardArrayX[2] === boardArrayZ[2] && boardArrayY[2] === boardArrayZ[2]){
            setWinner(prev => prev = boardArrayX[2]);
            setResultColor(prev => prev = 6);// CONDICOES DE VITORIA DAS --- COLUNAS --- FEITAS;
        }else if(boardArrayX[0] === boardArrayY[1] && boardArrayX[0] === boardArrayZ[2] && boardArrayY[1] === boardArrayZ[2]){
            setWinner(prev => prev = boardArrayX[0]);
            setResultColor(prev => prev = 7);
        }else if(boardArrayX[2] === boardArrayY[1] && boardArrayX[2] === boardArrayZ[0] && boardArrayY[1] === boardArrayZ[0]){
            setWinner(prev => prev = boardArrayX[2]);
            setResultColor(prev => prev = 8);// VERIFICACOES FORAM FEITAS
        }else if(turn === 9){
            setWinner(prev => prev = "Empate");
        }
    }

    const handleReset = ():void =>{
        setBlankOne(prev => prev = "");
        setBlankTwo(prev => prev = "");
        setBlankThree(prev => prev = "");
        setBlankFour(prev => prev = "");
        setBlankFive(prev => prev = "");
        setBlankSix(prev => prev = "");
        setBlankSeven(prev => prev = "");
        setBlankEight(prev => prev = "");
        setBlankNine(prev => prev = "");

        setBoardArrayX(arr => arr = ["a","b","c"]);
        setBoardArrayY(arr => arr = ["d","e","f"]);
        setBoardArrayZ(arr => arr = ["g","h","i"]);

        setWinner(prev => prev = "");
        setTurn(prev => prev = 0);
        setPlayer(prev => prev = "player 1");
        setResultColor(prev => prev = 0);
    }

    return(
        <div className={styles.globalContainer}>
            <h1>Jogo da velha</h1>

            <div className={styles.tabuleiro}>
                <button onClick={handleValueOne} disabled={winner !== ""? true : false} className={`${blankOne !== "" ? `${ resultColor === 1 || resultColor === 4 || resultColor === 7 ? `${styles.winColor}`:`${styles.clicked}`}`: `${styles.notClicked}`}`}>
                    {`${blankOne === ""? "":`${blankOne === "player 1"? "X": "O"}`}`}
                    {winner !=="" && (
                        <>
                            {resultColor === 1 && (
                                <div></div>
                            )}
                            {resultColor === 4 && (
                                <span></span>
                            )}
                            {resultColor === 7 && (
                                //eslint-disable-next-line
                                <h1></h1>
                            )}
                        </>
                    )}
                        
                    </button>
                <button onClick={handleValueTwo} disabled={winner !== ""? true : false} className={`${blankTwo !== "" ? `${ resultColor === 1 || resultColor === 5 ? `${styles.winColor}`:`${styles.clicked}`}`: `${styles.notClicked}`}`}>
                    {`${blankTwo === ""? "":`${blankTwo === "player 1"? "X": "O"}`}`}
                    
                    {winner !=="" && (
                        <>
                            {resultColor === 5 && (
                                //eslint-disable-next-line
                                <h2></h2>
                            )}
                        </>
                    )}

                    </button>
                <button onClick={handleValueThree} disabled={winner !== ""? true : false} className={`${blankThree !== "" ? `${ resultColor === 1 || resultColor === 6 || resultColor === 8 ? `${styles.winColor}`:`${styles.clicked}`}`: `${styles.notClicked}`}`}>
                    {`${blankThree === ""? "":`${blankThree === "player 1"? "X": "O"}`}`}

                    {winner !=="" && (
                        <>
                            {resultColor === 6 && (
                                //eslint-disable-next-line
                                <h3></h3>
                            )}
                        </>
                    )}

                    </button>
                <button onClick={handleValueFour} disabled={winner !== ""? true : false} className={`${blankFour !== "" ? `${ resultColor === 2 || resultColor === 4 ? `${styles.winColor}`:`${styles.clicked}`}`: `${styles.notClicked}`}`}>
                    {`${blankFour === ""? "":`${blankFour === "player 1"? "X": "O"}`}`}

                    
                    {winner !=="" && (
                        <>
                            {resultColor === 2 && (
                                //eslint-disable-next-line
                                <h4></h4>
                            )}
                        </>
                    )}
                    </button>
                <button onClick={handleValueFive} disabled={winner !== ""? true : false} className={`${blankFive !== "" ? `${ resultColor === 2 || resultColor === 5 || resultColor === 7 || resultColor === 8 ? `${styles.winColor}`:`${styles.clicked}`}`: `${styles.notClicked}`}`}>
                    {`${blankFive === ""? "":`${blankFive === "player 1"? "X": "O"}`}`}

                    
                    
                    {winner !=="" && (
                        <>
                            {resultColor === 8 && (
                                //eslint-disable-next-line
                                <h5></h5>
                            )}
                        </>
                    )}

                    </button>
                <button onClick={handleValueSix} disabled={winner !== ""? true : false} className={`${blankSix !== "" ? `${ resultColor === 2 || resultColor === 6 ? `${styles.winColor}`:`${styles.clicked}`}`: `${styles.notClicked}`}`}>
                    {`${blankSix === ""? "":`${blankSix === "player 1"? "X": "O"}`}`}
                    </button>
                <button onClick={handleValueSeven} disabled={winner !== ""? true : false} className={`${blankSeven !== "" ? `${ resultColor === 3 || resultColor === 4 || resultColor === 8 ? `${styles.winColor}`:`${styles.clicked}`}`: `${styles.notClicked}`}`}>
                    {`${blankSeven === ""? "":`${blankSeven === "player 1"? "X": "O"}`}`}

                                
                    {winner !=="" && (
                        <>
                            {resultColor === 3 && (
                                //eslint-disable-next-line
                                <h6></h6>
                            )}
                        </>
                    )}

                    </button>
                <button onClick={handleValueEight} disabled={winner !== ""? true : false} className={`${blankEight !== "" ? `${ resultColor === 3 || resultColor === 5 ? `${styles.winColor}`:`${styles.clicked}`}`: `${styles.notClicked}`}`}>
                    {`${blankEight === ""? "":`${blankEight === "player 1"? "X": "O"}`}`}
                    </button>
                <button onClick={handleValueNine} disabled={winner !== ""? true : false} className={`${blankNine !== "" ? `${ resultColor === 3 || resultColor === 6 || resultColor === 7 ? `${styles.winColor}`:`${styles.clicked}`}`: `${styles.notClicked}`}`}>
                    {`${blankNine === ""? "":`${blankNine === "player 1"? "X": "O"}`}`}
                    </button>
            </div>
                                
            {winner==="" && (
                <div className={styles.turn}>Vez do {player}</div>
            )}
            

            {(winner === "player 1" || winner === "player 2") &&(
                <h1 className={styles.congratulations}>Parabéns {winner}!!</h1>
            )}
            {winner === "Empate" &&(
                <>
                <h1 className={styles.draw}>O jogo acabou empatado!</h1>
                </>
            )
            }
            
            <button onClick={handleReset} className={styles.restart}>Recomeçar jogo</button>

            <div className={styles.description}>
                <h6>Criado por Felipe Alves</h6>
                <h6>Criado com ReactJs e Typescript</h6>
                <a href="https://felipealvesportfolio.netlify.app" target="blank">Clique aqui para acessar meu portfólio</a>
            </div>
        </div>
    )
}