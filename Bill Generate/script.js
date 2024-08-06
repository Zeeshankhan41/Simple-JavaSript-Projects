  var Smosa = 10,
        Kachori = 12,
        Vadapav = 60,
        Maggi = 50;
    var smosa_q = 0,
        kachori_q = 0,
        vadapav_q = 0,
        maggi_q = 0;
    var smosaBill = "",
        kachoriBill = "",
        vadapavBill = "",
        maggiBill = "";

    function showBill() {
      document.getElementById("bill").innerHTML = smosaBill + kachoriBill + vadapavBill + maggiBill;
      document.getElementById("amount").innerHTML = Smosa * smosa_q + Kachori * kachori_q + Vadapav * vadapav_q + Maggi * maggi_q;
    }

    document.getElementById("submit").addEventListener("click", function() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var mobile = document.getElementById("mobile").value;

      document.getElementById("name2").innerHTML = name;
      document.getElementById("email2").innerHTML = email;
      document.getElementById("mobile2").innerHTML = mobile;

      smosa_q = document.getElementById("smosa").value || 0;
      kachori_q = document.getElementById("kachori").value || 0;
      vadapav_q = document.getElementById("vadapav").value || 0;
      maggi_q = document.getElementById("maggi").value || 0;

      if (smosa_q > 0) {
        smosaBill = "<tr><td>Smosa</td><td>Rs. " + Smosa + "</td><td>" + smosa_q + "</td><td>" + Smosa + "x" + smosa_q + " = " + Smosa * smosa_q + "</td></tr>";
      } else {
        smosaBill = "";
      }

      if (kachori_q > 0) {
        kachoriBill = "<tr><td>Kachori</td><td>Rs. " + Kachori + "</td><td>" + kachori_q + "</td><td>" + Kachori + "x" + kachori_q + " = " + Kachori * kachori_q + "</td></tr>";
      } else {
        kachoriBill = "";
      }

      if (vadapav_q > 0) {
        vadapavBill = "<tr><td>Vadapav</td><td>Rs. " + Vadapav + "</td><td>" + vadapav_q + "</td><td>" + Vadapav + "x" + vadapav_q + " = " + Vadapav * vadapav_q + "</td></tr>";
      } else {
        vadapavBill = "";
      }

      if (maggi_q > 0) {
        maggiBill = "<tr><td>Maggi</td><td>Rs. " + Maggi + "</td><td>" + maggi_q + "</td><td>" + Maggi + "x" + maggi_q + " = " + Maggi * maggi_q + "</td></tr>";
      } else {
        maggiBill = "";
      }

      showBill();
    });