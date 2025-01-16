   function LangkahPertama( inputText, OutputText ) {
    var kataSplit = inputText.value; 
    var array_kata = kataSplit.split("</a><a");
    var jml_element_array = array_kata.length;
    var langkah1 = "";
    var i;
    for (let i=0; i<jml_element_array; i++ ) {
        var str1 = array_kata[i]
        var str2 = str1.replace("imageanchor=\"1\"", "")
        var str3 = str2.replace("border=\"0\"", "")
        var strsplit = str3.split(" width=")
        var str4 = strsplit[0] + " />"
          var k = jml_element_array-1;
       if (i==k) {
      str4 = str4  + "</a></div>";
      }
       if (i==0) {
      langkah1 = langkah1  +  "<div class=\"image fit\">" + str4;
      }
      else {
      langkah1 = langkah1  + "</a></div>" + "\n" + "<div class=\"image fit\"><a" + str4;
      }
    }
    var atas = "<link rel=\"stylesheet\" href=\"https://cdn.statically.io/gh/allanfals/sanbersstudio/d4b17d9a/main.css\" />" + "\n" + "<h3 class=\"judul\">TULIS JUDUL GALLERY DISINI</h3>" + "\n" + "<p class=\"ket\" style=\"text-align:center;\">Tulis Keterangan tentang Gallery di sini</p>" + "\n" + "<div class=\"columns\" id=\"columns\">" + "\n"
    var bawah = "</div>" + "\n"

    OutputText.value = atas + langkah1 + bawah;
  }
