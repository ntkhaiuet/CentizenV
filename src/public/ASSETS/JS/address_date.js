if (address_2 = localStorage.getItem('address_2_saved')) {
    $('select[name="calc_shipping_district"] option').each(function() {
      if ($(this).text() == address_2) {
        $(this).attr('selected', '')
      }
    })
    $('input.billing_address_2').attr('value', address_2)
  }
  if (district = localStorage.getItem('district')) {
    $('select[name="calc_shipping_district"]').html(district)
    $('select[name="calc_shipping_district"]').on('change', function() {
      var target = $(this).children('option:selected')
      target.attr('selected', '')
      $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
      address_2 = target.text()
      $('input.billing_address_2').attr('value', address_2)
      district = $('select[name="calc_shipping_district"]').html()
      localStorage.setItem('district', district)
      localStorage.setItem('address_2_saved', address_2)
    })
  }
  $('select[name="calc_shipping_provinces"]').each(function() {
    var $this = $(this),
      stc = ''
    c.forEach(function(i, e) {
      e += +1
      stc += '<option value=' + e + '>' + i + '</option>'
      $this.html('<option value="">Tỉnh / Thành phố</option>' + stc)
      if (address_1 = localStorage.getItem('address_1_saved')) {
        $('select[name="calc_shipping_provinces"] option').each(function() {
          if ($(this).text() == address_1) {
            $(this).attr('selected', '')
          }
        })
        $('input.billing_address_1').attr('value', address_1)
      }
      $this.on('change', function(i) {
        i = $this.children('option:selected').index() - 1
        var str = '',
          r = $this.val()
        if (r != '') {
          arr[i].forEach(function(el) {
            str += '<option value="' + el + '">' + el + '</option>'
            $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>' + str)
          })
          var address_1 = $this.children('option:selected').text()
          var district = $('select[name="calc_shipping_district"]').html()
          localStorage.setItem('address_1_saved', address_1)
          localStorage.setItem('district', district)
          $('select[name="calc_shipping_district"]').on('change', function() {
            var target = $(this).children('option:selected')
            target.attr('selected', '')
            $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
            var address_2 = target.text()
            $('input.billing_address_2').attr('value', address_2)
            district = $('select[name="calc_shipping_district"]').html()
            localStorage.setItem('district', district)
            localStorage.setItem('address_2_saved', address_2)
          })
        } else {
          $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>')
          district = $('select[name="calc_shipping_district"]').html()
          localStorage.setItem('district', district)
          localStorage.removeItem('address_1_saved', address_1)
        }
      })
    })
  })

//   hàm xử lý nhầm ngày tháng năm
  $(function(){
    //Năm tự động điền vào select
        var seYear = $('#year');
        var date = new Date();
        var cur = date.getFullYear();
    
        // seYear.append('<option value="">Chọn Năm</option>');
        for (i = cur; i >= 1890; i--) {
            seYear.append('<option value="'+i+'">'+i+'</option>');
        };
        
        //Tháng tự động điền vào select
        var seMonth = $('#month');
        var date = new Date();
        
        var month=new Array();
        month[1]="Tháng 1";
        month[2]="Tháng 2";
        month[3]="Tháng 3";
        month[4]="Tháng 4";
        month[5]="Tháng 5";
        month[6]="Tháng 6";
        month[7]="Tháng 7";
        month[8]="Tháng 8";
        month[9]="Tháng 9";
        month[10]="Tháng 10";
        month[11]="Tháng 11";
        month[12]="Tháng 12";
    
        // seMonth.append('<option value="">Chọn Tháng</option>');
        for (i = 12; i > 0; i--) {
            seMonth.append('<option value="'+i+'">'+month[i]+'</option>');
        };
        
        //Ngày tự động điền vào select
        function dayList(month,year) {
            var day = new Date(year, month, 0);
            return day.getDate();
        }    
        
        $('#year, #month').change(function(){
            //Đoạn code lấy id không viết bằng jQuery để phù hợp với đoạn code bên dưới
            var y = document.getElementById('year');
            var m = document.getElementById('month');
            var d = document.getElementById('day');
            

            var year = y.options[y.selectedIndex].value;
            var month = m.options[m.selectedIndex].value;
            var day = d.options[d.selectedIndex].value;
            if (day == ' ') {
                var days = (year == ' ' || month == ' ')? 31 : dayList(month,year);
                d.options.length = 0;
                d.options[d.options.length] = new Option('Chọn Ngày','');
                for (var i = 1; i <= days; i++)
                d.options[d.options.length] = new Option(i,i);
            }
        });
    });