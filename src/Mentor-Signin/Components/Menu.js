import './HomePage.css';

function Menu(){ 
    return(
        <> 
        <button onClick={Accept}><i class="fas fa-check"></i>Accept</button>
        <button onClick={Reject}><i class="fas fa-times"></i>Reject</button>
        </>
    )
}




function Accept(){ 
    let choice = ['box1', 'box2', 'box1', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8','box9']
    choice.map((el)=>{
        return  document.getElementsByClassName('box')[0].style.backgroundColor='#7ED75E';
    })
   
}

function Reject(choice){ 
    document.getElementsByClassName('box')[0].style.backgroundColor='#F04338';
}



export default Menu;