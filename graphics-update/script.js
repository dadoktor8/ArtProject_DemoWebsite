const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0;


let count = 1;
const colors = [
  "rgb(229,57,53)",
  "rgb(253,216,53)",
  "rgb(244,81,20)",
  "rgb(76,175,80)",
  "rgb(33,150,243)",
  "rgb(156,39,176)"
];
const handleOnClick = index =>{
  count++;
  anime({
    targets:".tile",
    backgroundColor: colors[count % (colors.length - 1)],
    delay: anime.stagger(50,{
      grid:[columns,rows],
      from:index
    })
  });
}
const creatTile = index => {
    const tile = document.createElement("div");
  
    tile.classList.add("tile");
  
    
  
    return tile;
}
const creatTiles = quantity => {
  
    Array.from(Array(quantity)).map((tile,index) =>{
      
        wrapper.appendChild(creatTile(index))
    });
}



const createGrid = () => {
    wrapper.innerHTML= "";
    columns = Math.floor(document.body.clientWidth /50),
    rows = Math.floor(document.body.clientHeight / 50);

    wrapper.style.setProperty("--columns",columns);
    wrapper.style.setProperty("--rows",rows);

    creatTiles(columns * rows);
}
createGrid();
handleOnClick();
window.onresize = () => createGrid();
