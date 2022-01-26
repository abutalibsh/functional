const PowerFunctor = (value) => ({
map : (fn) => PowerFunctor(fn(value)),
value,
[Symbol.iterator] : function*(){
yield value;
}
});

const names = ['Ahmad', ...PowerFunctor('Hesham'), 'Marwan', ...PowerFunctor('Mostafa')];
console.log(names);