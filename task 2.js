//fungsi template penyampaian data
function callback(data){
    console.log(data)
}
//fungsi pencarian data
function searchName(hurufNama,jumlahArr,myCallback){
    const name = [
      'Abigail', 'Alexandra', 'Alison',
      'Amanda', 'Angela', 'Bella',
      'Carol', 'Caroline', 'Carolyn',
      'Deirdre', 'Diana', 'Elizabeth',
      'Ella', 'Faith', 'Olivia', 'Penelope']
    
    const name2=name.map(function(e){
        return e.toLowerCase();
      })
    const cariNama=name2.filter(function(e){
      if(e.includes(hurufNama)){
          return true
      }
    });
    const arrCariNama=cariNama.length
    
    if (arrCariNama>=1){
        myCallback(cariNama.slice(0,jumlahArr))
        // console.log(cariNama.slice(0,jumlahArr))
    }else if(arrCariNama<1){
        myCallback('tidak tersedia nama yang mengandung unsur '+hurufNama)
    //   console.log('tidak tersedia nama yang mengandung unsur '+hurufNama)
     }
    }

    searchName('1',4,callback)
    
