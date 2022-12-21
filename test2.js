function angkot(supir, trayek, penumpang, kas) {
    this.sopir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas

    this.penumpangnaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }
    this.penumpangturun = function(namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('Maaf penumpang masih kosong')
            return false
        }
        for (i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] === namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang
            } else if (i === this.penumpang.length) {
                alert('maaf penumpang tidak ada')
            }
        }
    }
}

var angkot1 = new angkot('Zal', ['Cicaheum' - 'Cibiru'], [], 0)
var angkot2 = new angkot('Yanz', ['Cipaku' - 'Cihideung'], [], 0)