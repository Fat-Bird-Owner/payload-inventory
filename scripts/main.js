const init = false;
const inventory = null;

Events.on(clientLoadEvent, () => {
const statustable = Vars.ui.hudGroup.find("statustable");
statustable.row();

const inventory = new Table();
statustable.add(inventory).bottom().left();

tab.table(Tex.button, t => {
const button = new Button();
button.image(Core.atlas.find("beryllium-wall-large")).size(40);

t.add(button);

button.clicked(() => {

if (inventory == null){
inventory = new BaseDialog("inventory");
inventory.addCloseButton();

  

}
  
});
  
});

inventory.visibility = () => {
return (Vars.ui.hudfrag.shown && !Vars.net.client() ? true : false)
}
  
});
