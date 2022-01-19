import './Piano.scss'
//import music from './music.mp3';
import A0 from './mp3/A0.mp3';
import A1 from './mp3/A1.mp3';
import Ab1 from './mp3/Ab1.mp3';
import A2 from './mp3/A2.mp3';
import Ab2 from './mp3/Ab2.mp3';
import A3 from './mp3/A3.mp3';
import Ab3 from './mp3/Ab3.mp3';
import A4 from './mp3/A4.mp3';
import Ab4 from './mp3/Ab4.mp3';
import A5 from './mp3/A5.mp3';
import Ab5 from './mp3/Ab5.mp3';
import A6 from './mp3/A6.mp3';
import Ab6 from './mp3/Ab6.mp3';
import A7 from './mp3/A7.mp3';
import Ab7 from './mp3/Ab7.mp3';
import B0 from './mp3/B0.mp3';
import Bb0 from './mp3/Bb0.mp3';
import B1 from './mp3/B1.mp3';
import Bb1 from './mp3/Bb1.mp3';
import B2 from './mp3/B2.mp3';
import Bb2 from './mp3/Bb2.mp3';
import B3 from './mp3/B3.mp3';
import Bb3 from './mp3/Bb3.mp3';
import B4 from './mp3/B4.mp3';
import Bb4 from './mp3/Bb4.mp3';
import B5 from './mp3/B5.mp3';
import Bb5 from './mp3/Bb5.mp3';
import B6 from './mp3/B6.mp3';
import Bb6 from './mp3/Bb6.mp3';
import B7 from './mp3/B7.mp3';
import Bb7 from './mp3/Bb7.mp3';


function Piano(){
    let notes  = [[A0, 'A0'], [B0, 'B0'], [Bb0, 'Bb0'],[A1, 'A1'],  [Ab1, 'Ab1'], [B1, 'B1'], [Bb1, 'Bb1'],[A2, 'A2'], [Ab2, 'Ab2'],  [B2, 'B2'],[Bb2, 'Bb2'], [A3, 'A3'],[Ab3, 'Ab3'], [B3, 'B3'], [Bb3, 'Bb3'],[A4, 'A4'], [Ab4, 'Ab4'], [B4, 'B4'], [Bb4, 'Bb4'], [A5, 'A5'],[Ab5, 'Ab5'], [B5, 'B5'],[Bb5, 'Bb5'],[A6, 'A6'], [Ab6, 'Ab6'],[B6, 'B6'], [Bb6, 'Bb6'], [A7, 'A7'], [Ab7, 'Ab7'], [B7, 'B7'], [Bb7, 'Bb7']]
    
    console.log(notes.length)
    
    
    
    
    return (
        <>
        <h1>Virtual Piano</h1>
        <div className="wrapper">
        {notes.map(e=>{
               let audio = new Audio(e[0]);
               function start(){
                   audio.play()
               }
            return(
                                   
                <button key={e} className={e[1].split('').includes('b')?'black':'white'} onClick={(e)=>{
                    start(); 
                }}>{e[1]}</button>
           
                )
            })}
            </div>
            
            </>
            )
        }
        
        
        
        export {Piano}