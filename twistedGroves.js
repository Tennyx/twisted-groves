class Table extends React.Component{
  constructor(props){
    super(props);
    this.makeDark = this.makeDark.bind(this);
  }
  
  makeDark(x,y,heroLoc1,heroLoc2, darkBool){
    if(!darkBool && (x != heroLoc1 || y != heroLoc2) &&
       
       !darkBool && (x != heroLoc1-3 || y != heroLoc2) &&
       !darkBool && (x != heroLoc1-2 || y != heroLoc2) &&
       !darkBool && (x != heroLoc1-1 || y != heroLoc2) &&
       !darkBool && (x != heroLoc1+1 || y != heroLoc2) &&
       !darkBool && (x != heroLoc1+2 || y != heroLoc2) &&
       !darkBool && (x != heroLoc1+3 || y != heroLoc2) &&
       
       !darkBool && (x != heroLoc1 || y-3 != heroLoc2) &&
       !darkBool && (x != heroLoc1 || y-2 != heroLoc2) &&
       !darkBool && (x != heroLoc1 || y-1 != heroLoc2) &&
       !darkBool && (x != heroLoc1 || y+1 != heroLoc2) &&
       !darkBool && (x != heroLoc1 || y+2 != heroLoc2) &&
       !darkBool && (x != heroLoc1 || y+3 != heroLoc2) &&
       
       !darkBool && (x != heroLoc1-1 || y-3 != heroLoc2) &&
       !darkBool && (x != heroLoc1-1 || y-2 != heroLoc2) &&
       !darkBool && (x != heroLoc1-1 || y-1 != heroLoc2) &&
       !darkBool && (x != heroLoc1-1 || y+1 != heroLoc2) &&
       !darkBool && (x != heroLoc1-1 || y+2 != heroLoc2) &&
       !darkBool && (x != heroLoc1-1 || y+3 != heroLoc2) &&
       
       !darkBool && (x != heroLoc1-2 || y-3 != heroLoc2) &&
       !darkBool && (x != heroLoc1-2 || y-2 != heroLoc2) &&
       !darkBool && (x != heroLoc1-2 || y-1 != heroLoc2) &&
       !darkBool && (x != heroLoc1-2 || y+1 != heroLoc2) &&
       !darkBool && (x != heroLoc1-2 || y+2 != heroLoc2) &&
       !darkBool && (x != heroLoc1-2 || y+3 != heroLoc2) &&
       
       !darkBool && (x != heroLoc1-3 || y-2 != heroLoc2) &&
       !darkBool && (x != heroLoc1-3 || y-2 != heroLoc2) &&
       !darkBool && (x != heroLoc1-3 || y-1 != heroLoc2) &&
       !darkBool && (x != heroLoc1-3 || y+1 != heroLoc2) &&
       !darkBool && (x != heroLoc1-3 || y+2 != heroLoc2) &&
       !darkBool && (x != heroLoc1-3 || y+2 != heroLoc2) &&
       
       !darkBool && (x != heroLoc1+1 || y-3 != heroLoc2) &&
       !darkBool && (x != heroLoc1+1 || y-2 != heroLoc2) &&
       !darkBool && (x != heroLoc1+1 || y-1 != heroLoc2) &&
       !darkBool && (x != heroLoc1+1 || y+1 != heroLoc2) &&
       !darkBool && (x != heroLoc1+1 || y+2 != heroLoc2) &&
       !darkBool && (x != heroLoc1+1 || y+3 != heroLoc2) &&
       
       !darkBool && (x != heroLoc1+2 || y-3 != heroLoc2) &&
       !darkBool && (x != heroLoc1+2 || y-2 != heroLoc2) &&
       !darkBool && (x != heroLoc1+2 || y-1 != heroLoc2) &&
       !darkBool && (x != heroLoc1+2 || y+1 != heroLoc2) &&
       !darkBool && (x != heroLoc1+2 || y+2 != heroLoc2) &&
       !darkBool && (x != heroLoc1+2 || y+3 != heroLoc2) &&
       
       !darkBool && (x != heroLoc1+3 || y-2 != heroLoc2) &&
       !darkBool && (x != heroLoc1+3 || y-2 != heroLoc2) &&
       !darkBool && (x != heroLoc1+3 || y-1 != heroLoc2) &&
       !darkBool && (x != heroLoc1+3 || y+1 != heroLoc2) &&
       !darkBool && (x != heroLoc1+3 || y+2 != heroLoc2) &&
       !darkBool && (x != heroLoc1+3 || y+2 != heroLoc2)
       
      ){
      return true;
    }
    else{
      return false;
    }
  }
  
  render(){
    let rows = [];
    let columns = [];
    let cells = this.props.cellData;
    let hero = this.props.heroData;
    let heroLoc1 = hero[0];
    let heroLoc2 = hero[1];
    let darkBool = this.props.darkness;
    const treeImg = "http://images.bravenet.com/common/images/smilies/xmastree.gif";
    const heartImg = "http://parts.blog.livedoor.jp/img/emoji/2/ic_b_heart.gif";
    const black = "https://www.onlinefabricstore.net/images/Black_icon.gif";
    const dirt = "https://clarks.scene7.com/is/image/clarks/26123164_SWZ?$swatch$";
    const hiker = "http://i.imgur.com/JDmJ8HW.png";
    const bear = "https://www.dakkadakka.com/s/i/a/c944477abc92c1c101da485e07ff06d8.gif";
    const weapon = "https://esportlivescore.com/img/sword.png";
    const portal = "http://pocolive.com/calendar/images/rightArrow.gif";
    const boss = "http://message.snopes.com/images/icons/skull.gif";
    
    for(let c=0;c<cells.length;c++){
      for(let d=0;d<cells[c].length;d++){
        if(this.makeDark(c,d,heroLoc1,heroLoc2, darkBool)){
          rows.push(<td className="black"><img src={black}/></td>);  
        }
        else{  
          if(cells[c][d] === 0){
            rows.push(<td className="tree"><img src={treeImg}/></td>);
          }
          else if(cells[c][d] === 2){
            rows.push(<td className="hero"><img src={hiker} width="12" height="12"/></td>); 
          }
          else if(cells[c][d] === 3){
            rows.push(<td className="portal"><img src={portal}/></td>); 
          }
          else if(cells[c][d] === 4){
            rows.push(<td className="weapon"><img src={weapon}/></td>); 
          }
          else if(cells[c][d] === 5){
            rows.push(<td className="health"><img src={heartImg} /></td>); 
          }
          else if(cells[c][d] >= 6){
            rows.push(<td className="enemy"><img src={bear} /></td>); 
          }
          else if(cells[c][d] == 'boss'){
            rows.push(<td className="boss"><img src={boss}/></td>); 
          }
          else{
            rows.push(<td className="ground"><img src={dirt}/></td>);
          } 
        }
      }
      columns.push(<tr>{rows}</tr>);
      rows = [];
    }
    return (
        <table>
          {columns}
        </table>
    );
  }
}

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      indices: [],
      heroLoc: [],
      health: 100,
      weapon: 1,
      attack: 7,
      level: 1,
      nextLevel: 50,
      stage: 1,
      bossHealth: 100,
      toggleDark: true,
      gameOver: false,
      gameWon: false,
      mute: false,
      volIcon: 'fa fa-volume-up'
    }
    this.createBoard = this.createBoard.bind(this);
    this.createTunnel = this.createTunnel.bind(this);
    this.setPortal = this.setPortal.bind(this);
    this.setWeapon = this.setWeapon.bind(this);
    this.setHealthEnemies = this.setHealthEnemies.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.toggleDark = this.toggleDark.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
  }
  
  createTunnel(arr){
    let refArr = arr;
    let tunnelArr = [];
    for(let a=0;a<arr.length;a++){
      tunnelArr.push(1);
    }  
    return tunnelArr;
  }
 
  preventTrap(array){
    let checkedArr = array;
    
    for(let p=0;p<checkedArr.length;p++){
     let arrayCheck = checkedArr[p].reduce(function(sum, value) {
        return sum + value;
      }, 0);
      if(arrayCheck == 0){
        checkedArr[p][10] = 1;
      }
    }
    return checkedArr;
  }
  
  createBoard(){
    let columnArray = [];
    let rowArray = [];
    const dimensions = [3,4,5,6,7,8,9,10];
    
    for(let i=0;i<50;i++){                                       
      for(let j=0;j<50;){                                       
        let randWidth = Math.floor(Math.random() * 7);
        let randInt = Math.random();
        if(randInt >= .9){
          for(let k=0;k<dimensions[randWidth];k++){        
            if(j >= 50){
              break;    
            }
            else{
              rowArray.push(1);                               
              j++;
            }   
          }
        }
        else{
          rowArray.push(0);                                   
          j++;
        }
      } 
      
      let randLength = Math.floor(Math.random() * 7);
      
      for(let m=0;m<dimensions[randLength];m++){
        if(i >= 50){
          break;
        }
        else if(m == 0 || m == 1){
          columnArray.push(this.createTunnel(rowArray))       
          i++;
        }
        else{
          columnArray.push(rowArray);                           
          i++;
        }
      }
      rowArray = [];                                          
    }
    let noTrapArr = this.preventTrap(columnArray);
    //end of board creation, now add elements

    //add pieces
    let setPieces = JSON.parse(JSON.stringify(noTrapArr));
    let randStart = Math.random();
    let heroArr = [];
    
    if(randStart >= .5){                                  //start upper
      setPieces[0][Math.floor(randStart * 10)] = 2;       //set hero
      heroArr.push(0);
      heroArr.push(Math.floor(randStart * 10));
      this.setState({heroLoc: heroArr});
      this.setPortal(setPieces,'upper');
      this.setWeapon(setPieces);
      this.setHealthEnemies(setPieces);
    }
    else{                                                //start lower
      for(let f=0;f<49;f++){
        if(setPieces[setPieces.length-1][f] == 1){
           setPieces[setPieces.length-1][f] = 2;
           heroArr.push(setPieces.length-1);
           heroArr.push(f);
           this.setState({heroLoc: heroArr});
           break;
        }
      }
      this.setPortal(setPieces,'lower');
      this.setWeapon(setPieces);
      this.setHealthEnemies(setPieces);
    }
    this.setState({indices: setPieces});
  }
   
  
  setPortal(array, heroStart){
    let portalMade = false;
    let stageCheck = this.state.stage;
    
    if(stageCheck != 3){
      if(heroStart == 'upper'){
        while(portalMade == false){
          let randPortalIndice = Math.floor(Math.random() * array[0].length);
          let randPortalLower = array.length - Math.floor(Math.random() * 8) - 1;
          if(array[randPortalLower][randPortalIndice] == 1){
            array[randPortalLower][randPortalIndice] = 3;
            portalMade = true;
          }
        } 
      }
      else{
        while(portalMade == false){
          let randPortalIndice = Math.floor(Math.random() * array[0].length);
          let randPortalUpper = Math.floor(Math.random() * 8);
          if(array[randPortalUpper][randPortalIndice] == 1){
            array[randPortalUpper][randPortalIndice] = 3;
            portalMade = true;
          }
        } 
      }
    }
    else{
      if(heroStart == 'upper'){
        while(portalMade == false){
          let randPortalIndice = Math.floor(Math.random() * array[0].length);
          let randPortalLower = array.length - Math.floor(Math.random() * 8) - 1;
          if(array[randPortalLower][randPortalIndice] == 1){
            array[randPortalLower][randPortalIndice] = 'boss';
            portalMade = true;
          }
        } 
      }
      else{
        while(portalMade == false){
          let randPortalIndice = Math.floor(Math.random() * array[0].length);
          let randPortalUpper = Math.floor(Math.random() * 8);
          if(array[randPortalUpper][randPortalIndice] == 1){
            array[randPortalUpper][randPortalIndice] = 'boss';
            portalMade = true;
          }
        } 
      }
    }  
  }  

  setWeapon(array){
    let weaponMade = false;
    
    while(weaponMade == false){
        let randWeaponArr = Math.floor(Math.random() * array.length);
        let randWeaponIndice = Math.floor(Math.random() * array[0].length);
        
        if(array[randWeaponArr][randWeaponIndice] == 1){
          array[randWeaponArr][randWeaponIndice] = 4;
          weaponMade = true;    
        }
    }
  }
  
  setHealthEnemies(array){
    let healthTotal = 5;
    let enemyTotal = 5;
    
    while(healthTotal > 0){
      let randHealthArr = Math.floor(Math.random() * array.length);
      let randHealthIndice = Math.floor(Math.random() * array[0].length);
      
      if(array[randHealthArr][randHealthIndice] == 1){
         array[randHealthArr][randHealthIndice] = 5;
         healthTotal -= 1;    
      }
    }
    
    while(enemyTotal > 0){
      let randEnemyArr = Math.floor(Math.random() * array.length);
      let randEnemyIndice = Math.floor(Math.random() * array[0].length);
      
      if(array[randEnemyArr][randEnemyIndice] == 1){
         array[randEnemyArr][randEnemyIndice] = 6;
         enemyTotal -= 1;    
      }
    }
  }
  
  componentWillMount(){
    this.createBoard();
  }
  
  componentDidMount(){
    this.nameInput.focus();
  }

  componentDidUpdate(){
    this.nameInput.focus();
  }
 
  handleKeyDown(event){
    let moveHero = this.state.indices;
    let heroPos = this.state.heroLoc;
    let y = heroPos[0];
    let x = heroPos[1];
    let currentHealth = this.state.health;
    let currentWeapon = this.state.weapon;
    let currentLevel = this.state.level;
    let toNextLevel = this.state.nextLevel;
    let currentStage = this.state.stage;
    let currentBossHealth = this.state.bossHealth;
    let newStage = false;
    
    if(
      event.key == 'w' && 
      moveHero[y-1][x] != 0 && 
      y-1 >= 0)
    {
      if(moveHero[y-1][x] == 'boss'){
        currentHealth -= 3 * (5 - currentLevel);
        currentBossHealth -= 2 * (currentLevel + currentWeapon);
        if(currentHealth <= 0){
          currentHealth = 0;
          this.setState({gameOver: true});
        }
        if(currentBossHealth <= 0){
          currentBossHealth = 0;
          this.setState({gameWon: true});
        }
      }
      else if(moveHero[y-1][x] < 6 || moveHero[y -1][x] > 11 ){
          if(moveHero[y-1][x] == 5){
            currentHealth += 20;
          }
          else if(moveHero[y-1][x] == 3){
            newStage = true;
          }
          else if(moveHero[y -1][x] == 4){
            currentWeapon += 1  
          }
          else if(moveHero[y -1][x] > 11){
            toNextLevel -= 10
            if(toNextLevel == 0){
              currentLevel += 1;
              toNextLevel = 50;
            }
          }
          moveHero[y][x] = 1;
          moveHero[y-1][x] = 2;
          heroPos[0] = y-1;
          heroPos[1] = x;
      }
      else{
          moveHero[y-1][x] += currentWeapon * currentLevel;
          currentHealth -= 2 * (5 - currentLevel) + (currentStage-1);
          if(currentHealth <= 0){
            currentHealth = 0;
            this.setState({gameOver: true});
          }
      }
    }
    
    if(
      event.key == 's' && 
      moveHero[y+1][x] != 0 && 
      y+1 <= moveHero.length)
    {
        if(moveHero[y+1][x] == 'boss'){
        currentHealth -= 3 * (5 - currentLevel);
        currentBossHealth -= 2 * (currentLevel + currentWeapon);
        if(currentHealth <= 0){
          currentHealth = 0;
          this.setState({gameOver: true});
        }
        if(currentBossHealth <= 0){
          currentBossHealth = 0;
          this.setState({gameWon: true});
        }
      }
      else if(moveHero[y+1][x] < 6 || moveHero[y+1][x] > 11 ){
          if(moveHero[y+1][x] == 5){
            currentHealth += 20;
          }
          else if(moveHero[y+1][x] == 3){
            newStage = true;
          }
          else if(moveHero[y+1][x] == 4){
            currentWeapon += 1  
          }
          else if(moveHero[y+1][x] > 11){
            toNextLevel -= 10
            if(toNextLevel == 0){
              currentLevel += 1;
              toNextLevel = 50;
            }
          }
          moveHero[y][x] = 1;
          moveHero[y+1][x] = 2;
          heroPos[0] = y+1;
          heroPos[1] = x;
      }
      else{
          moveHero[y+1][x] += currentWeapon * currentLevel;
          currentHealth -= 2 * (5 - currentLevel) + (currentStage-1);
          if(currentHealth <= 0){
            currentHealth = 0;
            this.setState({gameOver: true});
          }
      }
    }
    
    if(
      event.key == 'a' && 
      moveHero[y][x-1] != 0 && 
      x-1 >= 0)
    {
        if(moveHero[y][x-1] == 'boss'){
        currentHealth -= 3 * (5 - currentLevel);
        currentBossHealth -= 2 * (currentLevel + currentWeapon);
        if(currentHealth <= 0){
          currentHealth = 0;
          this.setState({gameOver: true});
        }
        if(currentBossHealth <= 0){
          currentBossHealth = 0;
          this.setState({gameWon: true});
        }
      }
      else if(moveHero[y][x-1] < 6 || moveHero[y][x-1] > 11 ){
          if(moveHero[y][x-1] == 5){
            currentHealth += 20;
          }
          else if(moveHero[y][x-1] == 3){
            newStage = true;
          }
          else if(moveHero[y][x-1] == 4){
            currentWeapon += 1  
          }
          else if(moveHero[y][x-1] > 11){
            toNextLevel -= 10
            if(toNextLevel == 0){
              currentLevel += 1;
              toNextLevel = 50;
            }
          }
          moveHero[y][x] = 1;
          moveHero[y][x-1] = 2;
          heroPos[0] = y;
          heroPos[1] = x-1;
      }
      else{
          moveHero[y][x-1] += currentWeapon * currentLevel;
          currentHealth -= 2 * (5 - currentLevel) + (currentStage-1);
          if(currentHealth <= 0){
            currentHealth = 0;
            this.setState({gameOver: true});
          }
      }
    }
    
    if(
      event.key == 'd' && 
      moveHero[y][x+1] != 0 && 
      moveHero[y][x+1] <= moveHero[y].length)
    {
        if(moveHero[y][x+1] == 'boss'){
        currentHealth -= 3 * (5 - currentLevel);
        currentBossHealth -= 2 * (currentLevel + currentWeapon);
        if(currentHealth <= 0){
          currentHealth = 0;
          this.setState({gameOver: true});
        }
        if(currentBossHealth <= 0){
          currentBossHealth = 0;
          this.setState({gameWon: true});
        }
      }
      else if(moveHero[y][x+1] < 6 || moveHero[y][x+1] > 11 ){
          if(moveHero[y][x+1] == 5){
            currentHealth += 20;
          }
          else if(moveHero[y][x+1] == 3){
            newStage = true;
          }
          else if(moveHero[y][x+1] == 4){
            currentWeapon += 1  
          }
          else if(moveHero[y][x+1] > 11){
            toNextLevel -= 10
            if(toNextLevel == 0){
              currentLevel += 1;
              toNextLevel = 50;
            }
          }
          moveHero[y][x] = 1;
          moveHero[y][x+1] = 2;
          heroPos[0] = y;
          heroPos[1] = x+1;
      }
      else{
          moveHero[y][x+1] += currentWeapon * currentLevel;
          currentHealth -= 2 * (5 - currentLevel) + (currentStage-1);
          if(currentHealth <= 0){
            currentHealth = 0;
            this.setState({gameOver: true});
          }
      }
    }
    this.setState({
      heroLoc: heroPos,
      indices: moveHero,
      health: currentHealth,
      weapon: currentWeapon,
      level: currentLevel,
      nextLevel: toNextLevel,
      bossHealth: currentBossHealth
    });
    
    if(newStage){
      currentStage += 1;
      this.setState({stage:currentStage});
      this.createBoard();
      this.nameInput.focus();
    }
  }
  
  toggleDark(){
    let darkStatus = this.state.toggleDarkness;
    if(darkStatus){
      this.setState({toggleDarkness: false});
    }
    else{
      this.setState({toggleDarkness: true}); 
    }
  }
  
  playAgain(){
    this.setState({
      gameOver: false,
      gameWon: false,
      health: 100,
      weapon: 1,
      attack: 7,
      level: 1,
      nextLevel: 50,
      stage: 1,
      bossHealth: 100
    });  
    this.createBoard();
  }
  
  toggleMute(){
    let muteStatus = this.state.mute;
    
    if(muteStatus){
      this.setState({
        mute:false,
        volIcon:'fa fa-volume-up'
      });
      ;
    }
    else{
      this.setState({
        mute:true,
        volIcon:'fa fa-volume-off'
      });
    }
  }
  
  render(){
    if(this.state.gameWon){
      return (
        <div>
          <h3 className="text-center">Twisted Groves</h3>
          <p className="text-center">YOU HAVE CONQUERED THE TREACHEROUS FOREST!</p>
          <div className="text-center"><button className="btn btn-default" onClick={this.playAgain}>PLAY AGAIN</button></div>
          <audio src="http://freesound.org/data/previews/341/341627_5858296-lq.mp3" autoPlay="autoplay" muted={this.state.mute}></audio>
        </div>
      );
    }
    if(this.state.gameOver){
      return (
        <div>
          <h3 className="text-center">Twisted Groves</h3>
          <p className="text-center">You've met a terrible fate in the Twisted Groves</p>
          <div className="text-center"><button className="btn btn-default" onClick={this.playAgain}>PLAY AGAIN</button></div>
          <audio src="http://freesound.org/data/previews/382/382310_5421751-lq.mp3" autoPlay="autoplay" muted={this.state.mute}></audio>
        </div>
      );
    }
    else{
      return (
        <div 
          tabIndex="-1" 
          ref={(input) => { this.nameInput = input; }}  
          defaultValue="will focus" 
          onKeyDown={this.handleKeyDown}>
          <h3 className="text-center">Twisted Groves</h3>
          <p className="text-center">Use WASD to navigate. The skeleton lord guards the escape from the Twisted Groves.</p>
          <div className="text-center info">
            Health: <span className="values">{this.state.health}</span> | 
            Damage: <span className="values">{this.state.weapon}</span> |
            Level: <span className="values">{this.state.level}</span> |
            Next Level: <span className="values">{this.state.nextLevel}</span> |
            Stage: <span className="values">{this.state.stage}</span>
          </div>
          <Table 
            cellData={this.state.indices} 
            heroData={this.state.heroLoc} 
            darkness={this.state.toggleDarkness} />
          <div className="text-center">
            <button className="btn btn-default" onClick={this.toggleDark}>TOGGLE DARKNESS</button>
          </div>
          <div className="text-center">
            <span className={this.state.volIcon} onClick={this.toggleMute} id="muteBtn"></span>
          </div>
          <audio src="http://caleswitzer.com/here/wp-content/uploads/2017/08/TWISTED_GROVE_1.mp3" autoPlay="autoplay" muted={this.state.mute} loop="loop"></audio>
        </div>  
      );
    }
  }
}

ReactDOM.render(
  <Board />,
  document.getElementById('app')
);