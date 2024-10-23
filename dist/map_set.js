"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var meuMap = new Map(); // Cria um novo Map vazio
meuMap.set("nome", "luis"); // Define a chave "nome" com o valor "luis"
meuMap.set("stack", "html, css, js"); // Define a chave "stack" com o valor "html, css, js"

// Recupera e imprime o Map completo
console.log(meuMap);
var nome = meuMap.get("nome"); // Recupera o valor associado à chave "nome"
console.log(nome); // Imprime o valor da chave "nome"

console.log(meuMap.size); // Imprime o tamanho do Map (número de entradas)
console.log(meuMap.has("sobrenome")); // Verifica se a chave "sobrenome" existe no Map e retorna um booleano

// meuMap.clear(); // Limpa todas as entradas do Map
console.log(meuMap.size); // Imprime o tamanho do Map após a limpeza (se for o caso)
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    // Itera sobre todas as chaves do Map
    console.log(chave); // Imprime cada chave
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    // Itera sobre todos os valores do Map
    console.log(valor); // Imprime cada valor
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var entrada = _step3.value;
    // Itera sobre todas as entradas (pares chave-valor) do Map
    console.log(entrada); // Imprime cada par chave-valor como um array
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
var _iterator4 = _createForOfIteratorHelper(meuMap.entries()),
  _step4;
try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var _step4$value = _slicedToArray(_step4.value, 2),
      _chave = _step4$value[0],
      _valor = _step4$value[1];
    // Itera sobre todas as entradas do Map com destructuring
    console.log("".concat(_chave, ": ").concat(_valor)); // Imprime cada par chave-valor no formato "chave: valor"
  }
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}
meuMap["delete"]("stack"); // Deleta a entrada com a chave "stack" do Map
console.log(meuMap); // Imprime o Map após a deleção

var cpfs = new Set(); // Cria um novo Set vazio
cpfs.add('84444973048'); // Adiciona um valor ao Set
cpfs.add('70274312034'); // Adiciona outro valor ao Set
cpfs.add('03277971007'); // Adiciona mais um valor ao Set

console.log(cpfs); // Imprime o Set completo

console.log(cpfs.keys()); // Recupera e imprime todos os valores do Set (como um objeto Iterator)
console.log(cpfs.values()); // Recupera e imprime todos os valores do Set (como um objeto Iterator)

cpfs.forEach(function (valor) {
  // Itera sobre todos os valores do Set
  console.log(valor); // Imprime cada valor
});
var array = ['gian souza', 'luis henri', 'maria isabel', 'gian souza', 'luis henri']; // Cria um array com alguns nomes (com duplicatas)
var arrayComoSet = new Set([].concat(array)); // Cria um Set a partir do array para remover duplicatas
var arraySemDuplicatas = _toConsumableArray(arrayComoSet); // Converte o Set de volta para um array

console.log(arraySemDuplicatas); // Imprime o array sem duplicatas