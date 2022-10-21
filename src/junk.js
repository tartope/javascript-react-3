
const main2 = () => {
    let a = [1,2,3]
    let b = [...a]
    a[0] = 11
    console.log(b)
}

const test = (array) => {
    // array[0].name = "ALICE"  OK
    // array[0] = { ...array[0], num: 1 }
    //array.unshift(array.pop())
}

const main = () => {
    let aa = [1,2,3]
    let a = [
        {
            id: 11,
            name: "Alice",
        },
        {
            id: 12,
            name: "Bob"
        },
        {
            id: 13,
            name: "Charlie"
        }
    ]

    // test(a)
    // console.log(a)

    // let r = a.map(i => i)

    a.sort((a,b) => a.name.localeCompare(b.name))
    a.reverse()
    console.log(a)


    // let dd = {...a.find(i => i.id === 1)}
    // a[0].name = "ALICE"
    // console.log(dd)
    // console.log(a)

    //a.fill( { id: 'test'}, 1, 2)
    
    // let count = 0
    // let r = a.map(i => ({...i, num: ++count}))
    // console.log(r)

    // Use Foreach to UPDATE every element in an array.
    //a.forEach(i => i.name = i.name.toLocaleUpperCase())
    //console.log(a)

    //let b = a.copyWithin(0,3)
    // let b = [...a]
    // a[0].name = "ALICE"
    // let c = JSON.parse(JSON.stringify(a))
    // let d = a.slice(1,2)
    // let e = a.map(i => i)
    // let f = a.fi


    // aa[0] = 11

    // // a[0].name = "ALICE"
    // a[0] = { ...a, cat: { name: "joe"}}
    // console.log(a)
    //a[0] = {...a[0], poo: 1}
    // a[0].name = "ALICE"
    // a[1].name = "BOB"

    // console.log(b)
    // console.log(c)
    // console.log(d)
    // console.log(e)


}

main()
//main2()
