function addColors() {
    for (let i=0; i < tiles.length; i++) {
        if(tiles[i].innerHTML == ""){
            tiles[i].classList.add("_0")
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_1024");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 2 ) {
            tiles[i].classList.add("_2");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_1024");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 4 ) {
            tiles[i].classList.add("_4");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_1024");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 8) {
            tiles[i].classList.add("_8");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_1024");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 16) {
            tiles[i].classList.add("_16");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_1024");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 32) {
            tiles[i].classList.add("_32");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_1024");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 64) {
            tiles[i].classList.add("_64");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_1024");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 128) {
            tiles[i].classList.add("_128");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_1024");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 256) {
            tiles[i].classList.add("_256");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_1024");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 512) {
            tiles[i].classList.add("_512");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_1024");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 1024) {
            tiles[i].classList.add("_1024");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_2048");

        }else if (tiles[i].innerHTML == 2048) {
            tiles[i].classList.add("_2048");
            tiles[i].classList.remove("_0");
            tiles[i].classList.remove("_2");
            tiles[i].classList.remove("_4");
            tiles[i].classList.remove("_8");
            tiles[i].classList.remove("_16");
            tiles[i].classList.remove("_32");
            tiles[i].classList.remove("_64");
            tiles[i].classList.remove("_128");
            tiles[i].classList.remove("_256");
            tiles[i].classList.remove("_512");
            tiles[i].classList.remove("_1024");
          }
      }
  }