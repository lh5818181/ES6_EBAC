"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console;
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ################################################################## Metodo Rest

function somar() {
  // Função para somar todos os argumentos fornecidos
  var soma = 0; // Inicializa a soma em 0
  for (var i = 0; i < arguments.length; i++) {
    // Loop através de todos os argumentos fornecidos
    soma += arguments[i]; // Adiciona cada argumento à soma
  }
  return soma; // Retorna a soma total
}
console.log(somar(10, 20, 30, 40, 50)); // Chama a função somar com argumentos e imprime o resultado

function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  // Função para somar todos os números fornecidos usando o operador rest
  var soma = numeros.reduce(function (total, numeroAtual) {
    // Usa reduce para somar todos os números no array
    total += numeroAtual; // Adiciona o número atual ao total
    return total; // Retorna o total atualizado
  }, 0); // Inicializa o total em 0
  return soma; // Retorna a soma total
}
console.log(somarComRest(10, 20, 32)); // Chama a função somarComRest com argumentos e imprime o resultado

// ################################################################## Metodo spread

var numeros = [1, 2, 3, 4, 5]; // Array de números
(_console = console).log.apply(_console, numeros); // Usa o operador spread para imprimir os números individualmente

var timesDeFutebolDeSP = ['santos', 'palmeiras', 'bragantino', 'são paulo']; // Array de times de futebol de SP
var timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense']; // Array de times de futebol do Rio

// const timesDeFutebol = timesDeFutebolDeSP.concat(timesDeFutebolDoRio); // Alternativa: concatena os arrays usando concat
var timesDeFutebol = [].concat(timesDeFutebolDeSP, timesDeFutebolDoRio); // Usa o operador spread para combinar os arrays
console.log(timesDeFutebol); // Imprime o array combinado

var carroDaJuli = {
  // Objeto representando o carro da Juli
  modelo: 'gol',
  // Modelo do carro
  marca: 'vw',
  // Marca do carro
  motor: 1.6 // Motor do carro
};
var carroDoPaulo = _objectSpread(_objectSpread({}, carroDaJuli), {}, {
  // Usa o operador spread para copiar as propriedades de carroDaJuli
  motor: 1.8 // Sobrescreve a propriedade motor
});
console.log(carroDaJuli, carroDoPaulo); // Imprime os objetos carroDaJuli e carroDoPaulo

// ################################################################## Metodo de desestruturação

// const motorDoCarroDaJuli = carroDaJuli.motor; // Alternativa: acessa a propriedade motor diretamente
var motorDoCarroDaJuli = carroDaJuli.motor; // Usa a desestruturação para obter a propriedade motor e renomeá-la
var motorDoCarroDoPaulo = carroDoPaulo.motor; // Usa a desestruturação para obter a propriedade motor e renomeá-la
console.log(motorDoCarroDoPaulo); // Imprime o valor da propriedade motor do carroDoPaulo
console.log(motorDoCarroDaJuli); // Imprime o valor da propriedade motor do carroDaJuli

var _timesDeFutebol = _toArray(timesDeFutebol),
  item1 = _timesDeFutebol[0],
  item2 = _timesDeFutebol[1],
  item3 = _timesDeFutebol[2],
  outrosTimes = _timesDeFutebol.slice(3); // Usa a desestruturação para obter os primeiros 3 itens e o resto dos itens
console.log(item1); // Imprime o primeiro item
console.log(item2); // Imprime o segundo item
console.log(item3); // Imprime o terceiro item
console.log(outrosTimes); // Imprime o restante dos itens no array