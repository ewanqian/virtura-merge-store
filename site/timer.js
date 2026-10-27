import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const mount=document.getElementById('canvasMount');
const stateLabel=document.getElementById('stateLabel');
const timeLabel=document.getElementById('timeLabel');
const buttons={
 forward:document.getElementById('forwardBtn'),
 hold:document.getElementById('holdBtn'),
 rewind:document.getElementById('rewindBtn'),
 reset:document.getElementById('resetBtn')
};

const scene=new THREE.Scene();
scene.fog=new THREE.FogExp2(0x0d0d0c,.055);
const camera=new THREE.PerspectiveCamera(34,1,.1,100);
camera.position.set(0,1.1,7.2);

const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.05;
mount.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xf5efe3,0x191817,2.2));
const key=new THREE.DirectionalLight(0xffffff,5.0);key.position.set(4,6,5);scene.add(key);
const rim=new THREE.DirectionalLight(0xb9c2c4,2.1);rim.position.set(-5,2,-4);scene.add(rim);

const floor=new THREE.Mesh(new THREE.PlaneGeometry(30,30),new THREE.MeshStandardMaterial({color:0x11100f,roughness:.86,metalness:.03}));
floor.rotation.x=-Math.PI/2;floor.position.y=-1.95;scene.add(floor);

const object=new THREE.Group();scene.add(object);
object.rotation.set(-.12,-.38,.06);

const shellMat=new THREE.MeshPhysicalMaterial({color:0xd9d5cd,roughness:.55,metalness:.05,clearcoat:.12,clearcoatRoughness:.8});
const shell=new THREE.Mesh(new RoundedBoxGeometry(3.15,3.15,.92,8,.22),shellMat);
shell.castShadow=true;object.add(shell);

const sideMat=new THREE.MeshStandardMaterial({color:0x272623,roughness:.72,metalness:.18});
const side=new THREE.Mesh(new RoundedBoxGeometry(2.64,2.64,1.03,6,.18),sideMat);
side.position.z=-.08;object.add(side);
shell.position.z=.08;

const displayCanvas=document.createElement('canvas');displayCanvas.width=1024;displayCanvas.height=430;
const dctx=displayCanvas.getContext('2d');
const displayTexture=new THREE.CanvasTexture(displayCanvas);displayTexture.colorSpace=THREE.SRGBColorSpace;
const displayMat=new THREE.MeshBasicMaterial({map:displayTexture,transparent:true});
const display=new THREE.Mesh(new THREE.PlaneGeometry(2.42,1.02),displayMat);display.position.set(0,.05,.57);object.add(display);

const slitMat=new THREE.MeshBasicMaterial({color:0xf4efe5,transparent:true,opacity:.56});
const slit=new THREE.Mesh(new RoundedBoxGeometry(1.1,.035,.025,3,.01),slitMat);slit.position.set(0,-1.18,.58);object.add(slit);

const markGeo=new THREE.PlaneGeometry(.3,.3);
const markMat=new THREE.MeshBasicMaterial({color:0x22211f,transparent:true,opacity:.68});
for(const [x,y,r] of [[-1.18,1.2,0],[1.12,1.08,Math.PI/2],[-1.02,-1.08,Math.PI/4]]){
 const m=new THREE.Mesh(markGeo,markMat);m.position.set(x,y,.575);m.rotation.z=r;object.add(m);
}

let seconds=600;
let mode='FORWARD';
let explicitMode=false;
function fmt(v){v=Math.max(0,Math.min(600,Math.round(v)));return `${String(Math.floor(v/60)).padStart(2,'0')}:${String(v%60).padStart(2,'0')}`}
function drawDisplay(){
 dctx.clearRect(0,0,1024,430);
 dctx.fillStyle='rgba(25,24,22,.96)';dctx.fillRect(0,0,1024,430);
 dctx.fillStyle='#eae5db';dctx.font='500 210px Arial';dctx.textAlign='center';dctx.textBaseline='middle';dctx.fillText(fmt(seconds),512,226);
 dctx.font='24px Arial';dctx.textAlign='left';dctx.fillStyle='#969087';dctx.fillText('VIRTURA / MERGE   OBJ-002',56,56);
 dctx.textAlign='right';dctx.fillText(mode,968,56);
 displayTexture.needsUpdate=true;
 timeLabel.textContent=fmt(seconds);stateLabel.textContent=mode;
 Object.entries(buttons).forEach(([k,b])=>{if(k!=='reset')b.classList.toggle('active',k.toUpperCase()===mode)});
}
drawDisplay();

function setMode(next,explicit=true){mode=next;explicitMode=explicit;drawDisplay()}
buttons.forward.onclick=()=>setMode('FORWARD');
buttons.hold.onclick=()=>setMode('HOLD');
buttons.rewind.onclick=()=>setMode('REWIND');
buttons.reset.onclick=()=>{seconds=600;object.rotation.set(-.12,-.38,.06);setMode('FORWARD',false)};

let dragging=false,lastX=0,lastY=0;
renderer.domElement.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture(e.pointerId)});
renderer.domElement.addEventListener('pointermove',e=>{
 if(!dragging)return;
 const dx=(e.clientX-lastX)*.008,dy=(e.clientY-lastY)*.008;
 object.rotation.y+=dx;object.rotation.x+=dy;lastX=e.clientX;lastY=e.clientY;
 explicitMode=false;
});
renderer.domElement.addEventListener('pointerup',()=>dragging=false);
renderer.domElement.addEventListener('pointercancel',()=>dragging=false);
renderer.domElement.addEventListener('wheel',e=>{e.preventDefault();camera.position.z=THREE.MathUtils.clamp(camera.position.z+e.deltaY*.004,5.1,10.5)},{passive:false});

function orientationMode(){
 const up=new THREE.Vector3(0,1,0).applyQuaternion(object.quaternion);
 if(up.y<-.35)return 'REWIND';
 if(Math.abs(up.y)<.18)return 'HOLD';
 return 'FORWARD';
}

const clock=new THREE.Clock();
let acc=0;
function animate(){
 const dt=Math.min(clock.getDelta(),.05);acc+=dt;
 if(!explicitMode){const inferred=orientationMode();if(inferred!==mode){mode=inferred;drawDisplay()}}
 if(acc>=1){
   const steps=Math.floor(acc);acc-=steps;
   if(mode==='FORWARD')seconds=Math.max(0,seconds-steps);
   if(mode==='REWIND')seconds=Math.min(600,seconds+steps);
   drawDisplay();
 }
 if(!dragging){object.rotation.y+=Math.sin(performance.now()*.00018)*.00022}
 renderer.render(scene,camera);requestAnimationFrame(animate);
}

function resize(){const w=mount.clientWidth,h=mount.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)}
new ResizeObserver(resize).observe(mount);resize();animate();
