
init();

function init() {
    var url = "https://data.covid19india.org/data.json"
    $.get(url, function (data) {
        console.log(data);
        console.log((data.statewise).length);
        let len = (data.statewise).length;
        for (let i = 0; i < len; i++) {
            let elem = document.createElement('a');
            elem.innerText = data.statewise[i].state;
            elem.classList.add('createdLink');
            document.getElementById('drop_down').appendChild(elem);
            lineBreak = document.createElement('br');
            document.getElementById('drop_down').appendChild(lineBreak);
        }

        // $('#drop_down').html(fillData);
        let selectionButtons = document.getElementsByClassName('createdLink');
        console.log(selectionButtons);
        for (let j = 0; j < selectionButtons.length; j++) {
            selectionButtons[j].onclick = () => {
                tableData = `
                    <td>${data.statewise[j].confirmed}</td>
                    <td>${data.statewise[j].deaths}</td>
                    <td>${data.statewise[j].recovered}</td>
                `
                $('#data').html(tableData);
            }    
        }

    });
}




// initNew();

// function initNew() {
//     var url = "https://api.covid19api.com/summary"
//     $.get(url, function (dataNew) {
//         // console.log(dataNew.Global)

//         dataNew = `
//             <td>${dataNew.Global.NewConfirmed}</td>
//             <td>${dataNew.Global.NewDeaths}</td>
//             <td>${dataNew.Global.NewRecovered}</td>
//             `

//         $('#dataNew').html(dataNew);

//     });
// }



// function refreshData() {
//     clearData();
// }

// function clearData() {
//     $('#data').empty()
//     $('#dataNew').empty()
//     init()
//     initNew()
// }