var init = false;
var inventory = null;
var inventoryPane;

var inventoryblocks = [];

Events.on(clientLoadEvent, () => {
const statustable = Vars.ui.hudGroup.find("statustable");
statustable.row();
  
const inventory = new Table();
statustable.add(inventory).bottom().left();

inventory.table(Tex.button, t => {
const button = new Button();
button.image(Core.atlas.find("beryllium-wall-large")).size(40);

t.add(button).row();

button.clicked(() => {

if (inventory == null){
inventory = new BaseDialog("inventory");
inventory.addCloseButton();

inventory.cont.pane(p => {
inventoryPane = new Table();
inventoryPane.background(Tex.button);
p.add(inventoryPane).grow();
});

function refreshPane(){
inventoryPane.clear();
for (let i = 0; i < blocks.length; i++){
const block = blocks[i];
const newButton = new Button();
newButton.image(block.uiIcon);

inventoryPane.add(newButton).grow().padTop(10);
inventoryPane.add().width(10);
}}

refreshPane();
inventory.show();
  
}});
  
});

inventory.visibility = () => {
return (Vars.ui.hudfrag.shown && !Vars.net.client() ? true : false)
}
  
});
