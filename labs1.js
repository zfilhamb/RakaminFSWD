let jumlahData = 100;
let maxNilai = 50;
let arrayAwal= [];
let arrayGanjil= [];
let arrayGenap= [];
let minGenap = Number.POSITIVE_INFINITY, maxGenap=0;
let minGanjil = Number.POSITIVE_INFINITY, maxGanjil=0;
let total = 0;
let rataRata= 0;
let totalGenap;
let rataRataGenap;
let totalGanjil;
let rataRataGanjil;

function generateNumbers(){
    for (let i=0; i < jumlahData; i++) {
        arrayAwal.push(Math.floor(Math.random() * maxNilai)+1)
        }
        return console.log(arrayAwal)
}
generateNumbers()

function generateGenapGanjil(){
    for (let i=0; i < jumlahData; i++){
        if(arrayAwal[i] % 2 === 0 ){
            arrayGenap.push(arrayAwal[i])
        }else{
            arrayGanjil.push(arrayAwal[i])
        }
    }
    return console.log(arrayGenap,arrayGanjil);
}
generateGenapGanjil()

function generateDataGenap(){
    for (let i=0; i < arrayGenap.length; i++){
        if(arrayGenap[i] < minGenap){
            minGenap = arrayGenap[i];
        }
        if(arrayGenap[i] > maxGenap){
            maxGenap = arrayGenap[i];
        }totalGenap = total += arrayGenap[i];{
         rataRataGenap = total / arrayGenap.length
        }
    }
    return console.log(minGenap,"MIN ARRAY GENAP",maxGenap,"MAX ARRAY GENAP", totalGenap,"TOTAL ARRAY GENAP", rataRataGenap,"RATA-RATA ARRAY GENAP")
}
generateDataGenap()

function generateDataGanjil(){
    for (let i=0; i < arrayGanjil.length; i++){
        if(arrayGanjil[i] < minGanjil){
            minGanjil = arrayGanjil[i];
        }
        if(arrayGanjil[i] > maxGanjil){
            maxGanjil = arrayGanjil[i];
        }totalGanjil = total += arrayGanjil[i];{
         rataRataGanjil = total / arrayGanjil.length
        }
    }
    return console.log(minGanjil,"MIN ARRAY GANJIL",maxGanjil,"MAX ARRAY GANJIL", totalGanjil,"TOTAL ARRAY GANJIL", rataRataGanjil,"RATA-RATA ARRAY GANJIL")
}
generateDataGanjil()

function generatePerbandinganMin(){
    let perbandinganMin;
    if(minGenap > minGanjil){
        perbandinganMin = "Min Lebih Besar Array Genap"
    }else if(minGanjil > minGenap){
        perbandinganMin = "Min Lebih Besar Array Ganjil"
    }else{
        perbandinganMin = "Min Memiliki Nilai Sama Antara Array Genap Dan Array Ganjil"
    }
    return console.log(perbandinganMin)
}
generatePerbandinganMin()

function generatePerbandinganMax(){
    let perbandinganMax;
    if(maxGenap > maxGanjil){
        perbandinganMax = "Max Lebih Besar Array Genap"
    }else if(maxGanjil > maxGenap){
        perbandinganMax = "Max Lebih Besar Array Ganjil"
    }else{
        perbandinganMax = "Max Memiliki Nilai Sama Antara Array Genap Dan Array Ganjil"
    }
    return console.log(perbandinganMax)
}
generatePerbandinganMax()

function generatePerbandinganTotal(){
    let perbandinganTotal
    if(totalGenap > totalGanjil){
        perbandinganTotal = "Total Lebih Besar Array Genap"
    }else if(totalGanjil > totalGenap){
        perbandinganTotal = "Total Lebih Besar Array Ganjil"
    }else{
        perbandinganTotal = "Total Memiliki Nilai Sama Antara Array Genap Dan Array Ganjil"
    }
    return console.log(perbandinganTotal)
}
generatePerbandinganTotal()

function generatePerbandinganAvarage(){
    let perbandinganAvarage
    if(rataRataGenap > rataRataGanjil){
        perbandinganAvarage = "Rata-Rata Lebih Besar Array Genap"
    }else if(rataRataGanjil > rataRataGenap){
        perbandinganAvarage = "Rata-Rata Lebih Besar Array Ganjil"
    }else{
        perbandinganAvarage= "Rata-Rata Memiliki Nilai Sama Antara Array Genap Dan Array Ganjil"
    }
    return console.log(perbandinganAvarage)
}
generatePerbandinganAvarage()






