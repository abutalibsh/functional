const Functor = (value) => ({
map: (fn) => Functor(fn(value)),
value
});

const originalFunctor = Functor('Ahmad');
console.log(originalFunctor);

const hiFunctor = originalFunctor.map(n => 'Hi ' + n);
console.log(hiFunctor);