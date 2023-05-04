'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values,
    };

    res.json(data);
    res.end();
}

//response untuk nested matakuliah
exports.oknested = function(values, res){
    //melakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        //tentukan keygroupnya
        if(akumulasikan[item.nama]){
            //buat variabel group nama mahasiswa
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah mata kuliah
            if(Array.isArray(group.matakuliah)){
                //tambah value ke dalam group matakuliah
                group.matakuliah.push(item.matakuliah)
            } else{
                group.matakuliah = [group.matakuliah, item.matakuliah]
            }
        } else{
            akumulasikan[item.nama] = item
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    }

    res.json(data);
    res.end();
}