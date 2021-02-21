document.getElementById('compareBtn').addEventListener('submit', compareFiles);


function compareFiles(){
    const path1 = document.getElementById('file1').value 
    const path2 = document.getElementById('file2').value
}


function showReport(){
let files = JSON.parse(localStorage.getItem('files'))
let codeReport = document.getElementById('codeReport')

codeReport.textContent = '';

for (let i = 0; i , files.length;i++){
    let name = files[i].name
    let similarity = files[i].similarity
    let size = files[i].size 

    codeReport.textContent += '<tr>'
                            + name + 
                            similarity + 
                            size +  '</tr>'

}
}
