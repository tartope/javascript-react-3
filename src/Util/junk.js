const a = [
    {id: 1, name: 'Alice',    sex: 'f'},
    {id: 2, name: 'Bob',      sex: 'm'},
    {id: 3, name: 'Charlie',  sex: 'm'},
  ];
  
const aa = a.map(i => {
    if (i.id === 1) {
        return {
            ...i, // unpack.
            name: 'ALICE'
        }
    }
    return i;
})

console.log(aa)
