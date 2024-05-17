// var a = 1; true
// var a = 0; false
// var a = -1; true
// var a = true;
// var a = false;
// var a = undefined;
// var a = ""; //false
// var a = " "; //true
// var a = "0"; //true
// var a = NaN; //false
// var a = []; //true
// var a = {}; //true
// var a = null; //false

// if (a) {
//   console.log("If Scope Run");
// }

// var arr = [];
// arr[0] = 123;

// var obj = {
//   name: "ABC",
//   age: 18,
// };
// // obj.id = 20;
// obj["id"] = 20;

// console.log(obj);
// console.log(arr);

// array and object  (object)

// create a searching mechanism for search mobile in given data.

var mobiles = {
  iphone: {
    iphone7: {
      RAM: "",
      ROM: "",
      Camera: "",
      LCD: "",
    },
    iphone8: {
        RAM: "",
        ROM: "",
        Camera: "",
        LCD: ""
    },
    iphone8plus: {
        RAM: "",
        ROM: "",
        Camera: "",
        LCD: ""
    },
  },
  xiomi: {
    redmi10: {
        RAM: "",
        ROM: "",
        Camera: "",
        LCD: ""
    },
    redmi11: {
        RAM: "",
        ROM: "",
        Camera: "",
        LCD: ""
    },
    redmi12: {
        RAM: "",
        ROM: "",
        Camera: "",
        LCD: ""
    },
  },
  realme: {
    realmiNote50: {
        RAM: "",
        ROM: "",
        Camera: "",
        LCD: ""
    },
    realmiC67: {
        RAM: "",
        ROM: "",
        Camera: "",
        LCD: ""
    },
    realmiC53: {
        RAM: "",
        ROM: "",
        Camera: "",
        LCD: ""
    },
  },
  tecno: {
    spark20: {   RAM: "",
    ROM: "",
    Camera: "",
    LCD: ""},
    spark20Pro: {
        RAM: "",
        ROM: "",
        Camera: "",
        LCD: ""
    },
    spark20C: {
        RAM: "",
        ROM: "",
        Camera: "",
        LCD: ""
    },
  },
};

var brand = document.getElementById("brand");
var model = document.getElementById("model");

var allBrands = Object.keys(mobiles);
for (var i = 0; i < allBrands.length; i++) {
  brand.innerHTML += `<option>${allBrands[i]}</option>`;
}

function selectBrand() {
  var selectedBrand = brand.value;
  var allModels = Object.keys(mobiles[selectedBrand]);
  model.innerHTML = "";
  for (var i = 0; i < allModels.length; i++) {
    model.innerHTML += `<option value="${allModels[i]}">${allModels[i]}</option>`;
  }
}

function selectModel() {
  console.log(brand.value, model.value);
  console.log(mobiles[brand.value][model.value]);
}

// var
// reinitialize (y)
// reassign (y)
// hoisting (y)
// blockscope (y)

// let
// reinitialize (n)
// reassign (y)
// hoisting (n)
// blockscope (y)

// const
// reinitialize (n)
// reassign (n)
// hoisting (n)
// blockscope (y)

// ======= Template Literals ======

// var a = 20;

// console.log(`squre of ${a} is ${a * a}`);

// ======= Ternary Operators ======

// let studentCard = false;
// let age = 16;

// if (age >= 18) {
//   console.log("allow");
// } else if (studentCard) {
//   console.log("Allow on Student Card");
// } else {
//   console.log("Allow Allow");
// }

// age >= 18
//   ? console.log("Allow")
//   : studentCard
//   ? console.log("Allow on Student Card")
//   : console.log("Not Allow");

// age >= 18 || studentCard ? console.log("Allow") : console.log("Not Allow");

// let status = age >= 18 ? true : false;

// console.log(status);

// ======= Ternary Operators ======
// let age = 0;
// let studentCard = true;

// let status = age && studentCard;
// console.log(status);
