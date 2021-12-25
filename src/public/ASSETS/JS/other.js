// Chuẩn hoá tên
document.getElementById('fullname').onblur = function () {
    var name = document.getElementById('fullname').value;
    var newName = titleCase(name);
    document.getElementById('fullname').value = newName;
}

// function titleCase(str) {
//     var convertToArray = str.toLowerCase().split(' ');
//     var result = convertToArray.map(function(val) {
//       return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
    
//     return result.join(' ');
// };

function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
  
    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr.length[i] < splitStr.length) {
        splitStr[i].charAt(0).toUpperCase();
      }
  
      str = splitStr.join(" ");
    }
  
    return str;
}