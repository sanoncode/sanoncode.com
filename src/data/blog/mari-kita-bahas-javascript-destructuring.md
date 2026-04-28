---
title: "Mari kita bahas Javascript Destructuring"
author: San Sebastian
pubDatetime: 2022-03-15
featured: true
tags:
  - javascript
description: Pembahasan sederhana mengenai Javascript Destructuring.
---

Didalam bahasa pemrograman  **javascript**, kita mengenal 2 tipe data yang sering digunakan, yaitu  **_Object_**  dan **_Array_**_,_ yang mana kedua tipe data ini memiliki kemampuan untuk menyimpan data lebih dari satu  _value_


```javascript

const firstName = "Irsan"
// menampung satu data yaitu "Irsan"

const lastName = "Sebastian"
// menampung satu data yaitu "Sebastian"

//Array
const Fullname = [
  "firstName": "Irsan",
  "lastName": "Sebastian"
]
// menampung lebih dari satu data yaitu "Irsan" dan "Sebastian"

//Object
const fullname = {
  "firstName": "Irsan",
  "lastName": "Sebastian"
}
// menampung lebih dari satu data yaitu "Irsan" dan "Sebastian"

```

dari potongan code sederhana diatas, gue akan menjelaskan secara manusiawi dan sederhana bahwa **Object** dan **Array**, adalah sebuah Kardus besar yang berisikan barang barang yang ingin kita simpan. tentunya ketika kita menyimpan sesuatu, maka suatu hari kita akan mengeluarkan barang yang kita simpan itu.
pada code di atas apabila kita ingin mendapatkan **value** Irsan dari **Konstanta fullName (Array)**, maka biasa yang diajarkan di sekolah atau di internet mungkin akan seperti ini

```javascript

//Array
const fullName = ["Irsan", "Sebastian"]
const firstName = fullName[0]
const lastName = fullName[1]
console.log(firstName,'firstName') 
console.log(lastName,'lastName') 

//Object
const Fullname = {
  "firstName": "Irsan",
  "lastName": "Sebastian"
}
const firstName = fullName.firstName
const lastName = fullName.lastName
console.log(firstName,'firstName') 
console.log(lastName,'lastName') 

```

prosesnya disini, kita langsung menembak angka 0, yang mana merupakan  **_index_**  pertama dari  **_Array fullName_**  tersebut, lalu kita menyimpan hasil daripada  **_fullName[0]_**  ke dalam  **Konstanta**  **_firstName_**_._ untuk  **_Object_  _Fullname_** kita memanggilnya dengan  **_Fullname.firstName_** dan menyimpan hasilnya di  **Konstanta  _firstName._**

Dengan  **_Syntax Destructuring Assignment,_** kita akan mempermudah prosesnya menjadi seperti ini

```javascript

//Array
const fullName = ["Irsan", "Sebastian"];
const [firstName, lastName] = fullName;
console.log(firstName, ‘firstName’) 
console.log(lastName, ‘lastName’) 

//Object
const Fullname = {
  "firstName": "Irsan",
  "lastName": "Sebastian"
}
const { firstName, lastName } = Fullname; 
console.log(firstName,'firstName') 
console.log(lastName,'lastName')

```

Nah dengan begini, maka kita sudah secara langsung melakukan proses **_refactory_**  1 baris **_code_**_,_ yang tadinya kita harus **_assign_**  ke **Konstanta**  **_firstName_** lalu ditampilkan, dengan **_Destructuring Assignment_** kita mempersingkat proses tersebut tanpa memodifikasi atau mengutak atik **_Array_** tersebut. hanya sederhananya **meng-_copy_**  secara cepat ke sebuah variable, prosesnya sama, namun cara penulisannya agak sedikit berbeda



> “Destructuring” does not mean “destructive”. It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.

_Anyway,_ masih banyak yang teknik atau _magic_ yang bisa dilakukan dengan **_Destructuring Assigment_** dalam mempermudah kita menulis _code._ dan menurut pengalaman pribadi, teknik sederhana ini membantu gue dalam meningkatkan kualitas _code_ serta harkat, martabat dan _Pride_ diantara sesama rekan kerja engineer lainnya…. ( _It’s true )_
