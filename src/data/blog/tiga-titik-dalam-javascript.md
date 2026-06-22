---
title: "Tiga Titik dalam Javascript"
author: San Sebastian
pubDatetime: 2026-09-25
slug: tiga-titik-dalam-javascript
featured: true
draft: false
tags:
  - javascript
description: menjelaskan secara sederhana tentang apa itu tiga titik yang sering kita temui dalam javascript.
---


> Artikel ini merupakan kelanjutan daripada artikel sebelumnya yang membahas **[tentang Destructuring Assignment .](/posts/mari-kita-bahas-javascript-destructuring)**

Selama kurang lebih satu tahun mempelajari Javascript, ada begitu banyak syntax atau teknik yang bisa kita gunakan dengan tujuan mempermudah Engineer dalam memodifikasi data, ada dua teknik yang paling menarik dan unik bagi saya. adalah **Spread syntax** & **Rest Parameters**

![tigatitikjavascript.jpeg](https://media.graphassets.com/output=format:jpg/xZmPwnwRWalYZp1w0DxQ)

## Spread Syntax
Tiga titik misterius yang mungkin pernah anda lihat di dalam **Javascript**, itu tidak selalu merupakan **Rest Parameters** karena ada teknik yang dinamakan **Spread Syntax** yang juga mengunakan tiga titik dalam penulisan kodenya

```js
const alfabet = ['a','b','c'];

const hurufD = 'd';

const newAlfabet = [...alfabet, hurufD];

console.log(alfabet, 'Sebelum Penambahan '); // ["a", "b", "c"]
console.log(newAlfabet, 'Sesudah Penambahan '); // ["a", "b", "c", "d"]
```

Dari potongan kode sederhana diata kita bisa melihat bahwa, variable **alfabet** memiliki huruf **a**, **b**, dan **c**. lalu dengan variable baru **newAlfabet** yang mana kita menambahkan tiga titik didepan variable **alfabet** serta variable **hurufD** maka **Spread Syntax** bekerja. seperti meng-copy paste seluruh variable yang ada didalam variable **alfabet** ke dalam variable **newAlfabet**.

tentu urutan posisi **Spread Syntax** mempengaruhi urutan posisi didalam array, jadi apabila variable **hurufD** diletakan didepan maka hasilny akan berbeda

# Rest Parameters
setelah terbiasa mengutak atik **Spread Syntax** maka kita akan mengenal **Rest Parameters**. perbedaan paling signifikan diantara kedua kata ini adalah penempatannya. **Rest parameters** biasanya digunakan didalam **function**

```js
// rest parameters inside function
function push(...someValue) {
  return someValue; 
}


array = push(1) // [1]
console.log(array,'proses pertama')

array = push(1,2) // [1,2] 
console.log(array,'proses kedua')

array = push(1,2,3) // [1,2,3]
console.log(array,'proses ketiga')

array = push(1,2,3,'Sayang semuanya !') //[1, 2, 3, "Sayang semuanya !"]
console.log(array,'proses keempat')
```

sederhananya apabila kita ingin menampung semua variable didalam sebuah **function**, tanpa harus mendeklarasikan berapa banyak **function** yang diterima. disitulah **Rest Parameters** bekerja. karena umumnya pada saat kita memiliki sebuah **function**. kita akan menentukan ada berapa parameter yang harus diterima. **Rest Parameters** akan menjadikan semua parameter yang diterima kedalam bentuk **array**.

Tentu saja Spread Syntax dan Rest Parameters memiliki effect yang sama terhadap Object.
