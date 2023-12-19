const m_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// m_heros.push(dc_heros)        // the whole dc_heros array is considered to be the single unit in the m_heros array

// console.log(m_heros);          

// console.log(m_heros[3]);
// console.log(m_heros[3][2]);     // in this waay, the desired value of dc_heros can be accessed
                                // although it is not a good practice
// so this way of merging the array may not fissible


// concate:
// const all_heros = m_heros.concat(dc_heros) 
// console.log(all_heros);


// another method, spread operator               // kaanch ka glass // it makes the elements of arrays in scattered form, and eventually giving rise to a new array
const all_new_heros = [...m_heros, ...dc_heros] 
console.log(all_new_heros);


const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_arr1 = arr1.flat(Infinity)
console.log(real_arr1);

