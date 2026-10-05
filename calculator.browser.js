/* ELUCENIA per-tool fixed module bundle. Preserve all original and method-code notices. */
(function(){"use strict";const factories={"tool-code/correcao-de-sodio-adrogue-madias/calculator.js":function(module,exports,require){
'use strict';
// Own versioned method. Arithmetic evidence is not clinical approval.
const methods=require('../../restored-methods.cjs');
const definition=methods.definitions["correcao-de-sodio-adrogue-madias"];
const metadata=Object.freeze({id:definition.id,title:definition.title,fields:definition.fields,methodVersion:definition.version,reviewStatus:'needs-review',clinicalValidation:'not-performed'});
module.exports=Object.freeze({metadata,calculate:input=>methods.calculate("correcao-de-sodio-adrogue-madias",input)});

},
"restored-methods.cjs":function(module,exports,require){
'use strict';
// Own implementations of explicitly versioned methods. Scientific and language
// review remain unsigned. No treatment, referral or diagnostic verdict is emitted.
// This archived, read-only source inventory is independent of generated public
// metadata. Re-running the content migration must never duplicate input fields.
const original=require('./restoration-original-tools.json');
const definitions={};
const num=(id,label,min,max,unit,extra={})=>[id,label,'num',{min,max,unit,...extra}];
const select=(id,label,opts)=>[id,label,'sel',{opts}];
const yesno=(id,label)=>select(id,label,{'0':'Não','1':'Sim'});
const adult=num('idade','Idade',18,110,'anos');
const context=label=>yesno('contexto',label);
const ok=(a)=>{if(a.contexto!=='1')throw new DomainError('contexto','Confirme a população e as condições de aplicação da versão selecionada.');};
class DomainError extends Error{constructor(field,message){super(message);this.field=field;}}
const f=(value,places=2)=>value.toLocaleString('pt-BR',{minimumFractionDigits:places,maximumFractionDigits:places});
const out=(value,unit,label,raw,places=2)=>({main:[typeof value==='number'?f(value,places):value,unit],label,raw});
function define(id,version,fields,formula,limits,calculate,additionalSources=[]){
 const source=original.find(t=>t.id===id);if(!source)throw Error('Unknown method '+id);
 definitions[id]={id,title:source.title,fields,version,formula,limits,sources:[...source.sources,...additionalSources],calculate};
}
const fields=id=>structuredClone(original.find(t=>t.id===id).fields);
const omit=(id,names)=>fields(id).filter(field=>!names.includes(field[0]));
const cite=(title,url)=>[title,url];

const waterFields=id=>omit(id,['meta']).map(row=>row[0]==='peso'?[...row.slice(0,3),{...row[3],min:30}]:row[0]==='grupo'?[row[0],'Fração estimada de água corporal total','sel',{opts:{'0.6':'0,60','0.5':'0,50','0.45':'0,45'}}]:row);
define('correcao-de-sodio-adrogue-madias','Adrogué–Madias 2000; variação teórica por 1 L',
 [...waterFields('correcao-de-sodio-adrogue-madias'),adult],
 'ΔNa por 1 L = (Na da solução + K da solução − Na sérico)/(água corporal total + 1); água corporal total = peso × fração informada.',
 'Estimativa estática em adultos; não calcula volume para atingir uma meta, velocidade, duração nem limites seguros de correção. Não inclui diurese, perdas e mudanças durante tratamento.',
 a=>{const solutions={ns3:[513,0],ns09:[154,0],rl:[130,4],ns045:[77,0],ns02:[34,0],sg5:[0,0]},[sodium,potassium]=solutions[a.sol],tbw=a.peso*Number(a.grupo),delta=(sodium+potassium+(a.kadd??0)-a.na)/(tbw+1);return out(delta,'mEq/L','Adrogué–Madias · ΔNa / 1 L',{delta,tbw});},
 [cite('IAEM · Hyponatraemia guideline v1.0 · maio de 2024','https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf')]);

function calculate(id,input){
 const method=definitions[id];if(!method)return {error:'Método inexistente.',code:'TOOL_NOT_FOUND'};
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe os campos.',code:'INVALID_INPUT'};
 const values={};
 for(const [name,,kind,options={}] of method.fields){const value=input[name];
  if(kind==='chk'){if(typeof value!=='boolean')return {error:'Responda sim ou não.',code:'MISSING_BOOLEAN',field:name};values[name]=value;continue;}
  if(value==null||value===''){if(!options.opt)return {error:'Preencha o campo obrigatório.',code:'REQUIRED_FIELD',field:name};values[name]=null;continue;}
  if(kind==='num'){if(typeof value!=='number'||!Number.isFinite(value))return {error:'Número inválido.',code:'INVALID_INPUT',field:name};if(value<options.min||value>options.max)return {error:'Valor fora do intervalo.',code:'OUT_OF_RANGE',field:name};if(options.integer&&!Number.isInteger(value))return {error:'Informe um número inteiro.',code:'INTEGER_REQUIRED',field:name};}
  else if(typeof value!=='string'||!Object.hasOwn(options.opts||{},value))return {error:'Opção inválida.',code:'INVALID_OPTION',field:name};
  values[name]=value;
 }
 try{const result=method.calculate(values);if(Object.values(result.raw).some(v=>typeof v==='number'&&!Number.isFinite(v)))throw new DomainError('', 'Resultado fora do domínio.');return {id,...result,methodVersion:method.version,clinicalValidation:'not-performed'};}
 catch(error){return {error:error instanceof DomainError?error.message:'Confira o domínio do método.',code:'METHOD_SCOPE',...(error.field?{field:error.field}:{})};}
}
module.exports={definitions,calculate};
},
"restoration-original-tools.json":function(module,exports,require){
module.exports=[{"id":"correcao-de-sodio-adrogue-madias","title":"Correção do sódio (Adrogué-Madias)","fields":[["na","Sódio atual","num",{"min":100,"max":190,"unit":"mEq/L","ph":"118"}],["peso","Peso","num",{"min":2,"max":300,"step":0.1,"unit":"kg","ph":"70"}],["grupo","Água corporal total","radio",{"opts":{"0.6":"Homem &lt; 65 anos ou criança","0.5":"Mulher &lt; 65 anos ou homem ≥ 65","0.45":"Mulher ≥ 65 anos"}}],["sol","Solução infundida","sel",{"opts":{"ns3":"NaCl 3% (Na 513 mEq/L)","ns09":"NaCl 0,9% (Na 154 mEq/L)","rl":"Ringer lactato (Na 130, K 4 mEq/L)","ns045":"NaCl 0,45% (Na 77 mEq/L)","ns02":"NaCl 0,2% em glicose 5% (Na 34 mEq/L)","sg5":"Soro glicosado 5% (sem sódio)"}}],["kadd","Potássio adicionado ao soro","num",{"min":0,"max":60,"unit":"mEq/L","ph":"0","opt":true}],["meta","Variação desejada do sódio","num",{"min":1,"max":15,"unit":"mEq/L","ph":"8","opt":true}]],"sources":[["Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.","https://doi.org/10.1056/NEJM200005253422107"],["Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.","https://doi.org/10.1056/NEJM200005183422006"],["Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.","https://doi.org/10.1530/EJE-13-1020"]]}];
}},deps={"tool-code/correcao-de-sodio-adrogue-madias/calculator.js":{"../../restored-methods.cjs":"restored-methods.cjs"},"restored-methods.cjs":{"./restoration-original-tools.json":"restoration-original-tools.json"},"restoration-original-tools.json":{}},cache={};function load(id){if(cache[id])return cache[id].exports;if(!Object.hasOwn(factories,id))throw Error("Unknown fixed module");const m={exports:{}};cache[id]=m;factories[id](m,m.exports,r=>{const target=deps[id]?.[r];if(!target)throw Error("Unsupported fixed import "+r);return load(target);});return m.exports;}globalThis.EluceniaTool=load("tool-code/correcao-de-sodio-adrogue-madias/calculator.js");})();
