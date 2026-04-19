var inventoryDialog = null;
var inventoryPane = null;

Events.on(ClientLoadEvent, () => {

const statustable = Vars.ui.hudGroup.find("statustable");
statustable.row();

const inventoryButton = new Table();
statustable.add(inventoryButton).bottom().left();

const button = new Button();
button.image(Core.atlas.find("beryllium-wall-large")).size(40);
inventoryButton.add(button);

button.clicked(() => {

if(inventoryDialog == null){
inventoryDialog = new BaseDialog("inventory");
inventoryDialog.addCloseButton();

inventoryDialog.cont.pane(p => {

inventoryPane = p;
p.background(Tex.button);

}).grow();
}

refreshPane();
inventoryDialog.show();

});

function refreshPane(){
if(!inventoryPane) return;

inventoryPane.clear();

for(let i = 0; i < Blocks.all.size; i++){
const block = Blocks.all.get(i);

const b = new Button();
b.image(block.uiIcon).size(40);

b.clicked(() => {
print("Selected: " + block.name);
});

inventoryPane.add(b);
}
}

});
